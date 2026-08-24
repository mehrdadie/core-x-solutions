-- Tells the site to drop its cached listings when a post changes.
--
-- The post page was never the slow part: `dynamicParams` renders an unknown
-- slug on request, so a new post is reachable at its URL immediately. What
-- lagged was `/blog` and `/sitemap.xml`, which cache the whole list for ten
-- minutes — which is how a post ends up published and invisible at the same
-- time.
--
-- This is deliberately the same shape as notify_indexnow: the database already
-- knows when a post meaningfully changed, and it already reaches the outside
-- world through pg_net. Adding a second POST alongside the first keeps one
-- source of truth for that event, instead of a webhook someone has to remember
-- to call.
--
-- Requires two Vault secrets. Until they exist this is a silent no-op and the
-- ten-minute window simply remains in force:
--
--   select vault.create_secret('https://core-x.solutions/api/revalidate', 'revalidate_url');
--   select vault.create_secret('<same value as REVALIDATE_SECRET in Vercel>', 'revalidate_secret');

begin;

create or replace function public.notify_revalidate()
returns trigger
language plpgsql
security definer
set search_path to ''
as $$
declare
  v_url    text;
  v_secret text;
  v_slug   text;
begin
  -- NEW is unassigned in a DELETE trigger, so it cannot be referenced there.
  if tg_op = 'DELETE' then
    v_slug := old.slug;
  else
    v_slug := new.slug;
  end if;

  select decrypted_secret into v_url
    from vault.decrypted_secrets where name = 'revalidate_url';

  select decrypted_secret into v_secret
    from vault.decrypted_secrets where name = 'revalidate_secret';

  -- A missing secret must never fail the transaction that is trying to publish
  -- a post. Skipping degrades to the previous behaviour; raising would make
  -- configuration drift look like a broken publish.
  if v_url is null or v_secret is null then
    if tg_op = 'DELETE' then return old; else return new; end if;
  end if;

  perform net.http_post(
    url     := v_url,
    headers := jsonb_build_object(
      'Content-Type',        'application/json',
      'x-revalidate-secret', v_secret
    ),
    body    := jsonb_build_object('slug', v_slug)
  );

  if tg_op = 'DELETE' then return old; else return new; end if;
end;
$$;

comment on function public.notify_revalidate() is
  'POSTs to the site''s /api/revalidate so /blog and /sitemap.xml refresh immediately. Credentials from Vault.';

revoke all on function public.notify_revalidate() from public, anon, authenticated;

-- A new post appearing.
drop trigger if exists posts_revalidate_insert on public.posts;
create trigger posts_revalidate_insert
  after insert on public.posts
  for each row
  when (new.status = 'published' and new.published_at <= now())
  execute function public.notify_revalidate();

-- Crossing the published boundary in either direction, changing slug, or
-- editing anything the listings actually show. Unlike IndexNow, withdrawing a
-- post matters just as much as publishing one — the index has to stop
-- listing it.
drop trigger if exists posts_revalidate_update on public.posts;
create trigger posts_revalidate_update
  after update on public.posts
  for each row
  when (
    old.status is distinct from new.status
    or old.slug is distinct from new.slug
    or (
      new.status = 'published' and (
        old.title is distinct from new.title
        or old.excerpt is distinct from new.excerpt
        or old.body_md is distinct from new.body_md
        or old.published_at is distinct from new.published_at
      )
    )
  )
  execute function public.notify_revalidate();

-- A deleted post has to leave the index and the sitemap.
drop trigger if exists posts_revalidate_delete on public.posts;
create trigger posts_revalidate_delete
  after delete on public.posts
  for each row
  when (old.status = 'published')
  execute function public.notify_revalidate();

commit;
