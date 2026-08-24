-- The post page carried one hardcoded figure caption, written for the single
-- post that had a cover image. Any second post with a cover would have
-- inherited the first one's words, so the caption becomes a column.

begin;

alter table public.posts add column if not exists cover_image_caption text;

comment on column public.posts.cover_image_caption is
  'Visible caption under the cover figure. Distinct from cover_image_alt, which is the alt text.';

update public.posts
   set cover_image_caption = 'The same month, counted three ways — and the difference, named'
 where slug = 'why-your-crm-and-finance-system-never-agree'
   and cover_image_caption is null;

commit;
