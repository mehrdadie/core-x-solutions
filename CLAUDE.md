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

**Colour literals exist outside the token block.** `@theme` in `globals.css` is
the source of truth, but the hero's radial gradient (`Hero.tsx`), the generated
OG card (`opengraph-image.tsx`) and the two logo files carry their own hex values
and do not inherit. Change the palette in four places, not one.

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

## Analytics

**PostHog, behind a first-party path.** `posthog-js` is wired in through
`src/lib/analytics.ts` and mounted once from the root layout. Two environment
variables in Vercel, neither in the repo:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_POSTHOG_KEY` | Project API key. **Absent = the whole layer is a no-op** — that is deliberate, so local dev and previews send nothing. |
| `NEXT_PUBLIC_POSTHOG_HOST` | Dashboard host. Defaults to `https://us.posthog.com`; set it to the EU host if the project ever moves. |

`NEXT_PUBLIC_*` is inlined at **build** time, not read at runtime. Adding the key
to Vercel does nothing until the next deploy.

Ingestion is rewritten from `/ingest/*` to PostHog in `next.config.js` rather
than called directly. Blockers drop `*.i.posthog.com` by hostname, and on a
technical B2B audience that slice is large and not random. The rewrite derives
the region from `NEXT_PUBLIC_POSTHOG_HOST`, so the client and the proxy cannot
disagree about it.

**The SDK is initialised at module scope, not from a provider.** This is
load-bearing and was a real bug before it was moved. React runs effects in tree
order, so a provider in the layout initialises *after* the effects of the page
inside it — every capture on mount (`not_found_viewed`, `post_viewed`) hit an
uninitialised client and was silently discarded. It still worked on client-side
navigation, where the SDK was already up, so it looked fine to anyone testing by
clicking around. Do not move that `init()` back into a component.

**Named events live in `src/lib/analytics-events.ts`, and nowhere else.** Nothing
captures a bare string. Most events reach PostHog through one delegated click
listener (`TrackClicks.tsx`): a link opts in by carrying
`data-ph-event="cta_clicked"` plus any `data-ph-*` it wants as properties, which
keeps the sections server components. Mailto and off-site clicks are derived
rather than annotated, since those are the conversion and never want forgetting.
The three interactive components call `track()` directly, because their signal is
a state change rather than a click.

One trap worth knowing in `Architecture.tsx`: hover also sets the active node, so
by the time a mouse user clicks, the click is usually *closing* it. The event
fires in both directions and carries `action` — tracking only "opened" meant it
never appeared on desktop at all.

**Session recording is on, with all inputs masked.** There is no consent banner.
That is fine for a US audience and is a question worth answering before pointing
EU traffic at it; `respect_dnt` is on, and `person_profiles: "identified_only"`
keeps visitors anonymous. Add `data-ph-mask` to any element whose text should
never reach a replay.

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

## Publishing a post

Insert a row into `public.posts` with `status = 'published'` and a
`published_at` in the past. Everything else is automatic: the blog index, the post
page, the sitemap (10-minute ISR) and the IndexNow ping.

RLS restricts anonymous reads to `status = 'published' and published_at <= now()`,
so a future `published_at` renders nothing. That is a real trap — it looks like a
broken deploy.

## Open items

- Real testimonials, then re-add `<Testimonials />` to the page
- `www.core-x.solutions` certificate — verify it issued; set apex as primary domain
- Blog images still load from the personal site's Supabase storage bucket
- `profile.linkedin` is null until a company LinkedIn page exists; every use site
  already guards on it
- No inbound links yet. See `docs/backlinks.md` in the sibling repo
- PostHog is instrumented but not connected: set `NEXT_PUBLIC_POSTHOG_KEY` in
  Vercel and redeploy, or the analytics layer stays a no-op
- Decide the consent-banner question before EU traffic meets session recording
- `outbound_clicked` has no link to fire on yet — the only off-site link the
  site would have is LinkedIn, and `profile.linkedin` is still null

## Related repo

`mehrdadie/datalift-site` holds the personal site and the strategy documents:
`docs/keyword-research.md`, `docs/backlinks.md`, `docs/profile-copy.md`,
`docs/n8n-template-submission.md`. Those apply to both businesses.
