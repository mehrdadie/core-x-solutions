-- Content pipeline: the queue the post generator works through.
--
-- Three tables, one job each:
--
--   seo_keywords    the keyword export, verbatim, so the clustering can be
--                   re-derived without going back to a CSV on someone's laptop
--   content_topics  the work queue — one row per article, carrying both the
--                   brief and the generation state
--   generation_runs an append-only log of every attempt, successful or not
--
-- The state lives on the topic row rather than in the scheduler, for the reason
-- set out in /blog/the-one-column-that-stops-automation-repeating-itself: a
-- workflow that holds its own state repeats itself the first time it is
-- rebuilt. Here the generator asks "what have I not written yet?" and the
-- answer is a column, so a failed run self-corrects on the next pass and a
-- double-fire finds nothing to do.

begin;

-- ── Keywords ────────────────────────────────────────────────────────────────

create table if not exists public.seo_keywords (
  phrase    text primary key,
  kind      text not null default 'keyword',
  theme     text not null default 'other',
  -- Semicolon-joined list of where the phrase surfaced: autocomplete,
  -- related_search, google_paa, trends, discovery. More distinct sources means
  -- more corroborated demand, which is what drives topic priority.
  sources   text not null default '',
  cluster   text not null,
  created_at timestamptz not null default now()
);

comment on table public.seo_keywords is
  'Keyword research export. Seeded from data/keywords.csv via scripts/build-topics.mjs.';

create index if not exists seo_keywords_cluster_idx on public.seo_keywords (cluster);

-- ── Topic queue ─────────────────────────────────────────────────────────────

do $$ begin
  create type public.topic_status as enum ('pending', 'writing', 'written', 'failed', 'skipped');
exception when duplicate_object then null;
end $$;

create table if not exists public.content_topics (
  id                  uuid primary key default gen_random_uuid(),
  cluster             text not null unique,
  theme               text not null,
  -- What the cluster is really asking. Not a headline: the generator picks its
  -- own angle, and this is what stops two adjacent clusters writing the same
  -- article twice.
  hint                text not null,
  focus_keyword       text not null,
  supporting_keywords text[] not null default '{}',
  questions           text[] not null default '{}',
  -- Higher goes first. Derived from how many distinct research sources
  -- surfaced the cluster's phrases.
  priority            integer not null default 0,

  status              public.topic_status not null default 'pending',
  attempts            integer not null default 0,
  last_error          text,
  claimed_at          timestamptz,
  written_at          timestamptz,
  post_id             uuid references public.posts (id) on delete set null,

  created_at          timestamptz not null default now(),
  updated_at          timestamptz not null default now()
);

comment on table public.content_topics is
  'Work queue for the post generator. One row per article; state lives here, not in the scheduler.';

-- The generator only ever asks for topics awaiting work, so the index answers
-- exactly that question and stays small as the table fills up.
create index if not exists content_topics_pending_idx
  on public.content_topics (priority desc, created_at)
  where status = 'pending';

create index if not exists content_topics_claimed_idx
  on public.content_topics (claimed_at)
  where status = 'writing';

drop trigger if exists content_topics_set_updated_at on public.content_topics;
create trigger content_topics_set_updated_at
  before update on public.content_topics
  for each row execute function public.set_updated_at();

-- ── Run log ─────────────────────────────────────────────────────────────────

create table if not exists public.generation_runs (
  id            bigint generated always as identity primary key,
  topic_id      uuid references public.content_topics (id) on delete set null,
  cluster       text,
  status        text not null,
  model         text,
  input_tokens  integer,
  output_tokens integer,
  duration_ms   integer,
  post_slug     text,
  error         text,
  created_at    timestamptz not null default now()
);

comment on table public.generation_runs is
  'Append-only record of every generation attempt. The place to look when the blog goes quiet.';

create index if not exists generation_runs_created_idx
  on public.generation_runs (created_at desc);

-- ── Access ──────────────────────────────────────────────────────────────────

-- No policies are declared, so RLS denies everything to anon and authenticated.
-- Only the service-role key used by the Edge Function can see these tables, and
-- the public site never reads them.
alter table public.seo_keywords    enable row level security;
alter table public.content_topics  enable row level security;
alter table public.generation_runs enable row level security;

-- ── Claiming ────────────────────────────────────────────────────────────────

-- Hands out exactly one topic per call. `skip locked` means two overlapping
-- runs take different topics rather than blocking or, worse, both writing the
-- same article — which matters because a 30-minute schedule and a generation
-- that occasionally takes longer will overlap eventually.
-- Returns a set so an empty queue is zero rows rather than a row of nulls —
-- over PostgREST that is the difference between `[]` and `[{...all null}]`.
create or replace function public.claim_next_topic()
returns setof public.content_topics
language plpgsql
security definer
set search_path to ''
as $$
declare
  v_topic public.content_topics;
begin
  -- Anything claimed and still unfinished after fifteen minutes is a run that
  -- died mid-flight. Release it so the queue does not leak topics.
  update public.content_topics
     set status = 'pending', claimed_at = null
   where status = 'writing'
     and claimed_at < now() - interval '15 minutes';

  select * into v_topic
    from public.content_topics
   where status = 'pending'
     -- Three failures is a topic that is broken rather than unlucky. Leave it
     -- for a human instead of burning a slot on it every half hour.
     and attempts < 3
   order by priority desc, created_at
   for update skip locked
   limit 1;

  if not found then
    return;
  end if;

  update public.content_topics
     set status = 'writing',
         attempts = attempts + 1,
         claimed_at = now()
   where id = v_topic.id
   returning * into v_topic;

  return next v_topic;
end;
$$;

comment on function public.claim_next_topic() is
  'Atomically claims the highest-priority pending topic. Returns no rows when the queue is empty.';

revoke all on function public.claim_next_topic() from public, anon, authenticated;

-- ── Reading the queue ───────────────────────────────────────────────────────

-- What the blog looks like from the operator's side: what is waiting, what was
-- written but not yet reviewed, and what failed.
create or replace view public.content_queue
with (security_invoker = true) as
select
  t.cluster,
  t.theme,
  t.status,
  t.priority,
  t.attempts,
  t.focus_keyword,
  cardinality(t.supporting_keywords) as keywords,
  cardinality(t.questions)           as questions,
  p.slug                             as post_slug,
  p.status                           as post_status,
  t.written_at,
  t.last_error
from public.content_topics t
left join public.posts p on p.id = t.post_id
order by
  case t.status
    when 'failed'  then 0
    when 'written' then 1
    when 'writing' then 2
    when 'pending' then 3
    else 4
  end,
  t.priority desc;

comment on view public.content_queue is
  'Operator view of the pipeline: failures first, then drafts awaiting review, then the backlog.';

commit;
