-- Recomputes every topic's brief from the keyword table.
--
-- The seed only supplies what a human decided: which cluster a phrase belongs
-- to, and what the cluster is really asking. The focus phrase, the supporting
-- keywords, the questions and the priority are all facts about the keyword
-- table, so they are derived here rather than frozen into a seed file that
-- goes stale the moment a phrase moves cluster.

begin;

create or replace function public.refresh_topic_briefs()
returns integer
language plpgsql
security definer
set search_path to ''
as $$
declare
  v_count integer;
begin
  with brief as (
    select
      k.cluster,
      -- Head term: the phrase several research sources surfaced, shortest
      -- first. Short means head term; multiple sources means corroborated
      -- demand rather than one autocomplete artefact.
      (array_agg(k.phrase order by
         cardinality(string_to_array(k.sources, ';')) desc,
         length(k.phrase),
         k.phrase
       ) filter (where k.kind <> 'question'))[1] as focus_keyword,
      coalesce(
        array_agg(k.phrase order by k.phrase) filter (where k.kind <> 'question'),
        '{}'
      ) as supporting_keywords,
      coalesce(
        array_agg(k.phrase order by k.phrase) filter (where k.kind = 'question'),
        '{}'
      ) as questions,
      sum(cardinality(string_to_array(k.sources, ';')))::integer as priority
    from public.seo_keywords k
    group by k.cluster
  )
  update public.content_topics t
     set focus_keyword       = coalesce(b.focus_keyword, t.focus_keyword),
         supporting_keywords = b.supporting_keywords,
         questions           = b.questions,
         priority            = b.priority
    from brief b
   where b.cluster = t.cluster;

  get diagnostics v_count = row_count;
  return v_count;
end;
$$;

comment on function public.refresh_topic_briefs() is
  'Rebuilds focus_keyword, supporting_keywords, questions and priority on every topic from public.seo_keywords.';

revoke all on function public.refresh_topic_briefs() from public, anon, authenticated;

commit;
