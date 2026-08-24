# Automated blog generation

Every thirty minutes the database wakes an Edge Function, which takes the next
keyword cluster off a queue, writes an article against it, and files the result
as a **draft**. Nothing reaches the live site until a person changes one field.

Turning it on takes two steps. Both are below.

---

## Turn it on

### 1. Give the function an API key

In the Supabase dashboard, **Edge Functions → generate-post → Secrets**:

| Secret | Value |
|---|---|
| `ANTHROPIC_API_KEY` | An Anthropic API key. Required — without it every run returns 500. |

Optional, same place:

| Secret | Default | What it does |
|---|---|---|
| `GENERATOR_MODEL` | `claude-opus-5` | The writing model. |
| `GENERATOR_EFFORT` | `high` | `low`/`medium`/`high`/`xhigh`/`max`. Lower is cheaper and faster; prose quality drops noticeably below `high`. |
| `GENERATOR_POST_STATUS` | `draft` | Set to `published` to skip review entirely. Read the warning at the bottom of this page first. |

### 2. Give the schedule its credentials

The cron job calls the function over HTTP, so it needs the service role key.
That key never goes into a migration — it lives in Vault, and
`run_post_generator()` reads it at call time.

Run once, in the SQL editor:

```sql
select vault.create_secret(
  '<your service role key>',
  'generator_service_key');

select vault.create_secret(
  'https://yuiqypblvacmrnztutkg.supabase.co/functions/v1/generate-post',
  'generator_function_url');
```

That is all. The `generate-post` cron job is already scheduled and active.

### Check it works

Don't wait half an hour:

```sql
select public.run_post_generator();
```

Then, a minute or two later:

```sql
select status, cluster, post_slug, output_tokens, duration_ms, error
  from public.generation_runs
 order by created_at desc
 limit 5;
```

---

## How it works

```
data/keywords.csv
      │  scripts/build-topics.mjs --write
      ▼
supabase/seed/keywords.sql ──▶ seo_keywords (377 phrases)
                                    │  refresh_topic_briefs()
                                    ▼
                              content_topics (64 topics, the queue)
                                    │
   pg_cron every 30m ──▶ run_post_generator() ──▶ Edge Function generate-post
                                    │
                          claim_next_topic()   ← one topic, FOR UPDATE SKIP LOCKED
                                    │
                            Claude writes it
                                    │
                              validate + strip
                                    ▼
                          posts (status = 'draft')
```

Generation state lives on the topic row, not in the scheduler — the same
argument as
[the one column that stops your automation repeating itself](https://core-x.solutions/blog/the-one-column-that-stops-automation-repeating-itself).
A run that dies mid-flight leaves one topic marked `writing`; the next call to
`claim_next_topic()` releases anything stuck there for more than fifteen
minutes. A double-fire takes two different topics rather than writing the same
article twice.

A topic that fails three times stops being retried and waits for a person.

### What gets checked before a post is filed

The response schema constrains the shape. These checks cover what a schema
cannot know about this particular site:

- **Invented images are stripped.** There is no image host wired to this
  pipeline, so any `![...](...)` in the body is a hallucinated URL.
- **Malformed diagrams are dropped.** A diagram that will not parse renders as
  nothing, which reads as a hole in the argument. Better to remove the block.
- **Dead internal links are unwrapped.** Any `/path` that is not a real page on
  this site loses its link markup and keeps its anchor text.
- **Bodies under 700 words fail the run**, and the topic goes back in the queue.
- **`seo_description` is truncated to 158 characters** — `public.posts` has a
  160-character check constraint, so a long one is a failed insert rather than
  a style problem.

Every run — success or failure — appends a row to `generation_runs` with token
counts, duration, and the error if there was one.

---

## Reviewing and publishing

See what is waiting:

```sql
select * from public.content_queue;
```

Failures sort first, then drafts awaiting review, then the backlog.

Read a draft:

```sql
select title, dek, body_md from public.posts where status = 'draft';
```

Drafts are invisible to the site — RLS restricts anonymous reads to published
posts — so the only way to read one before publishing is here or in the table
editor.

Publish it:

```sql
update public.posts
   set status = 'published', published_at = now()
 where slug = '<slug>';
```

That single statement does everything else. Two triggers fire on the transition:
`posts_notify_indexnow_update` pings Bing, Yandex, Seznam and Naver, and
`posts_revalidate_update` tells the site to drop its cached listings, so the
post appears on `/blog` and in the sitemap straight away rather than up to ten
minutes later.

Reject one instead:

```sql
delete from public.posts where slug = '<slug>';
-- and either retire the topic or send it back for another attempt
update public.content_topics set status = 'skipped' where cluster = '<cluster>';
update public.content_topics set status = 'pending', attempts = 0 where cluster = '<cluster>';
```

---

## Why a published post appears instantly

The post page was never the slow part. `dynamicParams` renders an unknown slug
on request, so a post is reachable at its URL the moment it goes live.

`/blog` and `/sitemap.xml` are the ones that lagged: both cache their whole
list for ten minutes, which is how a post ends up published and invisible at
the same time.

A trigger on `public.posts` now POSTs to `/api/revalidate` whenever a post is
published, edited while published, withdrawn, or deleted — the same shape as
`notify_indexnow`. The endpoint marks `/blog`, `/sitemap.xml` and the post's own
path stale, and the next visitor gets the rebuilt version.

It needs a shared secret on both sides:

| Where | Name |
|---|---|
| Vercel → Environment Variables | `REVALIDATE_SECRET` |
| Supabase Vault | `revalidate_secret` (same value) and `revalidate_url` |

```sql
select vault.create_secret('https://core-x.solutions/api/revalidate', 'revalidate_url');
select vault.create_secret('<same value as REVALIDATE_SECRET>', 'revalidate_secret');
```

Until both exist the trigger is a silent no-op and the ten-minute window simply
stays in force — a missing secret must never fail the transaction that is
trying to publish a post. Check it is working with:

```sql
select status_code, created from net._http_response order by created desc limit 5;
```

A 503 means the site has no `REVALIDATE_SECRET`; a 401 means the two values do
not match.

---

## Diagrams

Posts carry diagrams rather than stock photography. They are declared as JSON
in a fenced block and rendered as React elements by `src/components/Diagram.tsx`
— never as HTML, so a malformed post cannot inject anything, and never as a
fixed-size SVG, so they reflow on a phone. They pick up the palette from
whichever ground they sit on.

Four shapes:

| Type | For | Required fields |
|---|---|---|
| `flow` | a path between systems | `steps: [{label, note?, t?}]` |
| `compare` | a real comparison | `columns: [string]`, `rows: [{label, cells}]` |
| `bars` | magnitudes | `bars: [{label, value, note?, tone?}]`, `unit?` |
| `matrix` | a positioning grid | `quadrants` (exactly 4, reading order), `xAxis?`, `yAxis?` |

All four also take `title` and `caption`. `tone` is `signal` (default), `oxide`
(the broken state) or `verdigris` (the resolved one) — the palette roles from
`globals.css`, which are doing work rather than decoration.

```diagram
{"type":"bars","title":"Same month, three systems","unit":"k","bars":[{"label":"Ad platform reported","value":412,"tone":"oxide"},{"label":"CRM closed-won","value":318},{"label":"Finance invoiced","value":291,"tone":"verdigris"}]}
```

The markdown renderer also gained fenced code blocks and pipe tables in the
same change. Fenced code was previously broken — the block splitter worked on
blank lines, so any code sample containing one was torn into fragments.

---

## Images

Each post gets a generated Open Graph card from
`src/app/blog/[slug]/opengraph-image.tsx` — the title and category set on the
dark ground, in the site palette. Nothing to commission, nothing to store, and
it cannot drift out of step with the post's headline.

A post that has a real `cover_image_url` or `og_image_url` keeps it: the route
checks for one first and passes it through. That branch matters because
file-based metadata outranks `generateMetadata`, so without it this route would
have silently replaced the one hand-made cover on the blog.

There is deliberately no photographic image generation. Generic AI illustration
would undercut the thing this site is selling, and the diagrams carry more
information than a stock photo would.

---

## Changing the cadence

```sql
-- Hourly
select cron.alter_job(
  (select jobid from cron.job where jobname = 'generate-post'),
  schedule => '0 * * * *');

-- Weekdays at 9am UTC
select cron.alter_job(
  (select jobid from cron.job where jobname = 'generate-post'),
  schedule => '0 9 * * 1-5');

-- Pause
select cron.alter_job(
  (select jobid from cron.job where jobname = 'generate-post'),
  active => false);
```

At thirty minutes the 64-topic backlog is consumed in about a day and a half,
after which every run returns `{"status":"queue-empty"}` — harmless, and
essentially free, but it does mean the interesting question is how fast you
want to *review*, not how fast you want to generate.

---

## Adding keywords

1. Add rows to `data/keywords.csv`.
2. `node scripts/build-topics.mjs` — reports which cluster each phrase landed
   in, and lists anything unmatched. Nothing is dropped silently.
3. Add or adjust rules and clusters in `scripts/build-topics.mjs` until the
   report looks right.
4. `node scripts/build-topics.mjs --write`, then apply
   `supabase/seed/keywords.sql`.

The seed is idempotent. Re-applying it refreshes phrases and cluster hints
without disturbing generation state on topics already written.

---

## Costs

One article is roughly 4–8k input tokens and 6–15k output tokens including
thinking. At Opus 5 rates that is a few tens of cents per post. Every thirty
minutes, around the clock, is on the order of ten to twenty dollars a day while
the queue lasts. `GENERATOR_EFFORT=medium` roughly halves it.

Actual spend is in the run log:

```sql
select date_trunc('day', created_at) as day,
       count(*) filter (where status = 'ok') as posts,
       sum(input_tokens)  as input_tokens,
       sum(output_tokens) as output_tokens
  from public.generation_runs
 group by 1 order by 1 desc;
```

---

## Before you set `GENERATOR_POST_STATUS=published`

Publishing straight to the live site at this cadence is 48 machine-written
articles a day on a domain with fourteen posts on it. That is the pattern
Google's [scaled content abuse
policy](https://developers.google.com/search/docs/essentials/spam-policies#scaled-content-abuse)
describes, and the penalty is site-wide rather than per-page — it would put the
rankings the existing posts are earning at risk, not just the new ones.

The draft gate is what keeps the volume useful: generate as fast as you like,
publish what survives reading. If you do want to publish automatically, the
safer shape is a slower schedule (`0 9 * * 1-5` is ten a fortnight) rather than
an unreviewed firehose.
