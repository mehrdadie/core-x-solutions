-- Fires the generator every thirty minutes.
--
-- The same shape as notify_indexnow: the database makes the outbound call
-- through pg_net, so the schedule lives next to the data it is driving rather
-- than in a third-party scheduler that has to be separately remembered.
--
-- Unlike notify_indexnow, this call is authenticated, so the credential comes
-- out of Vault instead of being written into the function body. Nothing in
-- this file is a secret, which is what makes it safe to commit.
--
-- Before the schedule does anything, both secrets have to exist:
--
--   select vault.create_secret('<service role key>', 'generator_service_key');
--   select vault.create_secret(
--     'https://<project-ref>.supabase.co/functions/v1/generate-post',
--     'generator_function_url');
--
-- and the Edge Function needs ANTHROPIC_API_KEY set in its own secrets.

begin;

create extension if not exists pg_cron with schema pg_catalog;

create or replace function public.run_post_generator()
returns bigint
language plpgsql
security definer
set search_path to ''
as $$
declare
  v_key     text;
  v_url     text;
  v_request bigint;
begin
  select decrypted_secret into v_key
    from vault.decrypted_secrets
   where name = 'generator_service_key';

  select decrypted_secret into v_url
    from vault.decrypted_secrets
   where name = 'generator_function_url';

  if v_key is null or v_url is null then
    -- Raised rather than returned so a missing secret shows up in the cron
    -- run log instead of looking like a run that quietly did nothing.
    raise exception
      'run_post_generator: store generator_service_key and generator_function_url in vault.secrets first';
  end if;

  select net.http_post(
    url     := v_url,
    headers := jsonb_build_object(
      'Content-Type',  'application/json',
      'Authorization', 'Bearer ' || v_key
    ),
    body    := '{}'::jsonb,
    -- pg_net does not wait for the response, but it does need a ceiling. A
    -- long article at high effort can run for several minutes.
    timeout_milliseconds := 600000
  ) into v_request;

  return v_request;
end;
$$;

comment on function public.run_post_generator() is
  'Invokes the generate-post Edge Function. Scheduled by pg_cron; credentials come from Vault.';

revoke all on function public.run_post_generator() from public, anon, authenticated;

-- Idempotent: unschedule first so re-running the migration does not stack jobs.
select cron.unschedule('generate-post')
 where exists (select 1 from cron.job where jobname = 'generate-post');

select cron.schedule(
  'generate-post',
  '*/30 * * * *',
  $cron$select public.run_post_generator()$cron$
);

commit;
