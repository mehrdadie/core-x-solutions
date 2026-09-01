# Core-X Solutions — project state

Handover notes for anyone (human or Claude) picking this up fresh. Records the
decisions that are not obvious from the code.

## What this is

Marketing site for Core-X Solutions, a data, automation and revenue operations
consultancy. Next.js App Router, Tailwind v4, Supabase-backed blog, deployed on
Vercel at **https://core-x.solutions**.

It is a company-voiced fork of a personal consultant site
(`mehrdadie/datalift-site` → https://mehrdadfashami.com). Same structure and
components, different identity, palette and voice. Changes to shared components
are not automatically shared — the repos are independent.

## Infrastructure

| Piece | Where |
|---|---|
| Repo | `mehrdadie/core-x-solutions`, production branch `main` |
| Hosting | Vercel project `core-x-solutions`, auto-deploys on push to `main` |
| Blog data | Supabase project `core-x.solutions` (ref `yuiqypblvacmrnztutkg`) |
| Analytics | PostHog EU, project `core-x.solutions` (id `254770`) |
| Registrar | GoDaddy. A `@` → `76.76.21.21`, CNAME `www` → `cname.vercel-dns.com.` |

Environment variables live in Vercel, not the repo: `NEXT_PUBLIC_SITE_URL`,
`SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`.

## Decisions worth knowing

**Testimonials are deliberately not rendered.** The component exists but is left
out of `src/app/page.tsx`. The four quotes in `src/content/profile.ts` were
drafted in-house and the same words, attributed to the same people, appear on the
other live site. Identical testimonials across two businesses is trivially
checkable. Replace with real, permissioned quotes before adding it back.

**The blog shares content with the personal site, but not the database.** The
article `why-your-crm-and-finance-system-never-agree` exists in both projects. Its
`canonical_url` points at mehrdadfashami.com, so this copy credits the original.
`src/app/sitemap.ts` therefore filters out posts whose canonical points to another
origin — submitting a URL that disclaims itself sends search engines two
contradictory signals. Posts written for this site are self-canonical and do
appear.

**Service pages are generated from `src/content/services.ts`.** That module is the
source of truth for the `/services` index, the related block at the foot of every
service page, and the service entries in `sitemap.ts`. Adding a page means adding
it there and creating the route — nothing else. Merged pages redirect from
`next.config.js`; keep those entries after deleting a route, that is their job.

**Colour literals exist outside the token block.** `@theme` in `globals.css` is
the source of truth, but the hero's radial gradient (`Hero.tsx`), the two
generated OG cards (`opengraph-image.tsx` and `blog/[slug]/opengraph-image.tsx`)
and the two logo files carry their own hex values and do not inherit. Change the
palette in five places, not one.

Post diagrams are the exception that proves it: `Diagram.tsx` uses the token
classes rather than literals, which is what lets one component read correctly on
both the dark ground and the paper ground the article body sits on.

**The site is `en_GB`, and the service pages were not.** Hand-written copy uses
`-ise`/`-our`/`-yse` (`summarises`, `standardised`, `behaviour`) and prices in
sterling; the keyword-built service pages arrived with `optimize`, `Behaviors`
and dollar examples. They have been corrected. The slug
`/services/sales-methodology-standardization` keeps its US spelling — it is a
URL, and changing it would need a redirect for nothing.

**Nothing on a service page states a statistic it cannot source.** Four pages
carried claims of the "3-5x ROI within 18 months" / "20% of your revenue is at
risk — that is industry average" kind. They are gone. Where a section needed a
number, it now names the metric the work moves rather than predicting how far it
moves it. A figure on this site should be traceable to an engagement or to the
reader's own system.

**Case visuals that show one path are labelled `Illustrative`.** The case-02
timeline, the case-03 bars and the case-06 transcript sit next to numbers that
were measured across a whole engagement. `Reconstructed` in `CaseVisuals.tsx`
marks the three, which is what protects the measured figures beside them — an
unlabelled example next to a real number invites a sceptical reader to discount
both.

**The primary CTA goes to `/contact`, not to a `mailto:`.** Hero, header and the
`FinalCta` button all land on the page that says what to put in the first email
and what happens after it. The four symptom openers in `FinalCta` stay as
`mailto:` links — they carry their own subject line, which is the qualification.
`#contact` on service pages is fine: those pages render `FinalCta`, so the
anchor resolves on the page the reader is already on.

**The practice is named, and still speaks as "we".** `principal` in
`profile.ts` carries Mehrdad Fashami's name and title; /about opens a "Who you
would be working with" section on it, the fact table names him, the blog index
carries his byline and `StructuredData.tsx` emits a `Person` node the
`Organization` points at as `founder`. The company voice stays — that is the fork
decision, and naming who does the work is not the same as unwinding it. `photo`
and `record` are null and every use site guards on null, so the page claims no
photograph and no career history it cannot support.

**The services index leads with three jobs, not thirty-one.** The numbered index
is still there and no URL was given up, but it now sits under a block naming what
the practice is actually hired for — the numbers do not match, the leads do not
get owned, the report is still a Monday export — each pointing at one of the
three core pages. A reader who meets thirty-one rows before meeting an argument
asks for a quote on a line item.

**There is a place for a price, and it is empty.** `engagementFloor` in
`profile.ts` is null. Set it to a string and it appears in the closing CTA and in
the /contact cost answer; leave it null and both read correctly without it. The
`finalCta.shape` sentence is the screen that works in the meantime — fixed scope
or retainer, never hourly.

**Keywords are evidence-only, and `docs/keyword-strategy.md` is the record.**
Four of the site's original head terms — `marketing attribution consultant`,
`CRM data quality consultant`, `revenue attribution consultant`, `lead to revenue
reporting` — return nothing when typed into live autocomplete, and two more
(`fractional head of data`, `systems integration consultant`) return job and
salary queries. They are out of the root `keywords` array. Search prefers
`revenue operations consulting` to `consultant`, and problem phrasings to job
titles, which is why `/services/crm-data-quality` is written about duplicates
rather than about a role. Read that doc before adding a service page: it lists
the seven candidate URLs that were rejected and why.

**Service pages carry `FAQPage` markup; the blog always did and they never did.**
`ServiceFaq.tsx` renders the block and emits the node together so the two cannot
drift. Nine pages use it. The question wording comes from what live search
returns, not from invented headings, and the answers have to say something the
page above them does not. This matters more here than elsewhere because
`robots.ts` admits every AI crawler on purpose.

**The site is measured, and it still sets no cookies.** `posthog-js` runs on
every page via `src/instrumentation-client.ts` — Next's own pre-hydration hook,
chosen because the alternative (a provider using `useSearchParams`) would opt the
entire statically prerendered tree out of prerendering and fail the build. Route
changes are caught by `capture_pageview: 'history_change'`, so no React hook is
involved and every page stays `○ Static`.

`cookieless_mode: 'always'` is the decision, set in `src/lib/analytics.ts`.
Nothing is written to the visitor's device — no cookie, no localStorage — so
there is no consent banner and every visitor is measured rather than the fraction
who would click Accept. The cost is that identity does not survive the day, so
returning-visitor and multi-session analysis do not exist. Switching that constant
to `'on_reject'` buys them back but requires a banner **and** a second rewrite of
`/privacy`, which currently describes the cookieless arrangement specifically.

Cookieless has to be on at both ends. `cookieless_server_hash_mode` is set to
Stateful on PostHog project 254770; if it is ever turned off, every event from
the site is dropped at ingestion and the site looks dead rather than broken.

**Ingestion is proxied through this origin.** `/ingest/*` rewrites to PostHog's EU
endpoints in `next.config.js`, so requests are first-party and domain blocklists
do not delete a share of an audience that blocks trackers well above average. It
is not an evasion — a blocked script stays blocked, and `respect_dnt` is on. The
proxy is why `skipTrailingSlashRedirect: true` is set: posthog-js POSTs to paths
ending in a slash, and Next's default 308 would turn those into redirects and lose
the events. The side effect is that `/about/` and `/about` both return 200, which
is safe only because every page sets an explicit `alternates.canonical`. Dropping
a canonical from a page is now an expensive mistake.

**`/privacy` and `/terms` describe the analytics exactly, including replay.** They
used to say the site ran none. Session replay is disclosed in plain words rather
than buried, Do Not Track is honoured and named as the opt-out, and retention (30
days for recordings, 12 months for events) is stated. If the capture config
changes, those pages change with it — an inaccurate privacy policy on a
consultancy that sells data governance is worse than no analytics.

**The logo is a hand-built SVG, not an exported asset.**
`public/core-x-logo.svg` is the CORE-X wordmark, drawn on a 654x100 grid (cap
height 100, stroke 19, letters at x = 0/122/244/366/484/554). `src/app/icon.svg`
is the same O-and-orb glyph on its own, which is the only part of the mark that
still reads at 16px. The header loads the wordmark as a plain `<img>` — next/image
would mean an optimizer round-trip and an SVG allow-list for a fixed-aspect
vector. Keep the `width`/`height` attributes on it: they carry the intrinsic
ratio, and they are what stops the bar reflowing while the file loads.

**The hero headline is hardcoded in JSX**, not driven by `profile.ts`. It is sized
to its own measure: line one is 10.75em wide, and the `min()` cap and width factor
in `Hero.tsx` are derived from that. Rewording the headline means remeasuring
both, not just editing the string.

**AI crawlers are allowed on purpose.** `robots.ts` permits everything including
GPTBot, ClaudeBot, PerplexityBot and Google-Extended. Being cited by AI assistants
is a goal here. `/llms.txt` exists for the same reason.

**The markdown renderer is deliberately small, and that is a constraint on
authors.** `markdown.tsx` returns React elements, never HTML, so a post body from
the database can never inject anything. It supports h2/h3, paragraphs, bold,
italic, inline code, links, lists, blockquotes, rules, fenced code, pipe tables,
figures and `diagram` fences — and nothing else. Parsing is two-pass: fences are
lifted out before the paragraph splitter runs, because the splitter works on
blank lines and used to tear any code sample containing one into fragments.

## Automation already in place

**IndexNow fires from the database.** A trigger on `public.posts`
(`notify_indexnow`) POSTs to api.indexnow.org via `pg_net` when a post is
published, or when a published post's title or body changes. Not on every update —
IndexNow answers 429 to resubmitted unchanged URLs. The key and host are
hardcoded in the function; changing the domain means updating it. Covers Bing,
Yandex, Seznam and Naver. **Google does not participate** — its discovery is the
sitemap, which it re-fetches on its own schedule.

Verify a ping with:
```sql
select id, status_code, created from net._http_response order by created desc limit 5;
```

**Posts are written on a schedule.** A `pg_cron` job (`generate-post`, every 30
minutes) calls `run_post_generator()`, which POSTs to the `generate-post` Edge
Function. That takes the next cluster off `content_topics`, writes an article
with the Claude API, and inserts it with **`status = 'draft'`** — invisible to
the site and to IndexNow until a person publishes it. Credentials come from Vault
(`generator_service_key`, `generator_function_url`) and the function's own
`ANTHROPIC_API_KEY` secret; nothing secret is in the repo. Full operator notes in
`docs/auto-blog.md`.

Generation state lives on the topic row rather than in the scheduler, so a run
that dies leaves one reclaimable topic and a double-fire takes two different
ones. `select * from public.content_queue;` is the view worth knowing: failures
first, then drafts awaiting review, then the backlog.

**Publishing is instant, but only because the database says so.** `/blog` and
`/sitemap.xml` cache their lists for ten minutes, so a published post used to be
live at its own URL and absent from every listing until the window expired. A
trigger (`notify_revalidate`) POSTs to `/api/revalidate`, which marks both paths
plus the post's own path stale. Needs `REVALIDATE_SECRET` in Vercel matching
`revalidate_secret` in Vault, plus `revalidate_url`. Missing secrets are a
silent no-op that degrades to the old ten-minute behaviour rather than failing
the publish.

**Both ends are set, and the chain was verified end to end on 1 September 2026.**
A POST carrying the Vault value returns
`200 {"revalidated":["/blog","/sitemap.xml","/blog/<slug>"]}`. Probe it without
breaking anything by sending a deliberately wrong secret: `401` means the
variable is set, `503` means it is not — the endpoint fails closed before it
checks the value, so the two are easy to tell apart.

One trap that cost an hour: an environment variable added in Vercel does not
reach the running deployment until something redeploys. Between publishing and
that redeploy, `/sitemap.xml` served the list frozen at the *previous build* —
not a stale ISR window but the build-time output, which had been four days old.
`/blog` revalidated normally throughout, so the two listings disagreed. If a new
post is on `/blog` but missing from the sitemap, check when production last
built before assuming the ISR window is at fault.

## Publishing a post

Insert a row into `public.posts` with `status = 'published'` and a
`published_at` in the past. Everything else is automatic: the blog index, the post
page, the sitemap (10-minute ISR) and the IndexNow ping.

For a generated draft the same thing is one field: `update public.posts set
status = 'published', published_at = now() where slug = '...'`. The IndexNow
update trigger fires on that transition, so review *is* the publish step.

RLS restricts anonymous reads to `status = 'published' and published_at <= now()`,
so a future `published_at` renders nothing. That is a real trap — it looks like a
broken deploy.

## Open items

- Real testimonials, then re-add `<Testimonials />` to the page
- `src/content/legal.ts` holds the legal identity and is the only place it is
  stated. `companyNumber`, `jurisdiction` and `address` are null, and every
  optional field renders **only when non-null** — so /privacy and /terms
  currently make no claim they cannot support. Fill them in and both pages pick
  them up; nothing else needs editing
- The About slot no longer carries the stock team photo — it was deleted, and the
  slot falls back to the wordmark. Set `principal.photo` to a real photograph of
  Mehrdad and both /about and the home slot pick it up
- `principal.record` is null. One line of checkable history (years, previous
  roles) is the cheapest remaining credibility gain on the site
- `engagementFloor` is null. A stated floor is what makes an hourly brief
  self-select out; the shape sentence alone does not
- `www.core-x.solutions` certificate — verify it issued; set apex as primary domain
- Blog images still load from the personal site's Supabase storage bucket
- `profile.linkedin` is null until a company LinkedIn page exists; every use site
  already guards on it
- No inbound links yet. See `docs/backlinks.md` **in this repo** — it covers the
  two-site problem the sibling doc does not
- **The eight case studies are word-for-word identical on both live sites**, each
  claiming the work as its own. Same objection as the testimonials, and these are
  rendered. Fix before any link building — `docs/backlinks.md` has the options
- Google Search Console **is** set up — the property carries data from 21 August
  2026. The first export is analysed in `docs/search-console-baseline.md`; read
  it before drawing any conclusion from click counts, because the clicks in it
  are navigational rather than demand. **Bing Webmaster Tools is still not set
  up**, which is the odd gap: IndexNow already pings Bing on every publish and
  returns 200, so the submission half works and only the measurement half is
  missing
- Generated drafts need reviewing before they are worth anything — see
  `docs/auto-blog.md`, and read the note there before switching the pipeline to
  publish automatically
- `REVALIDATE_SECRET` was unset in Vercel until 1 September 2026 and is now set
  and verified — kept here only so the symptom is recognisable if it recurs. See
  the publishing section above for how to probe it

## Related repo

`mehrdadie/datalift-site` holds the personal site and the strategy documents:
`docs/keyword-research.md`, `docs/backlinks.md`, `docs/profile-copy.md`,
`docs/n8n-template-submission.md`.

Those were written for the personal site and mostly transfer, with one exception:
both sites target the same keywords, with the same person, the same components
and the same case studies behind them. Running the same backlink playbook on both
splits the authority and looks manipulative. `docs/backlinks.md` in this repo
covers that; read it before acting on the sibling one.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
