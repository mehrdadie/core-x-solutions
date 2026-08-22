# Core-X Solutions

Marketing site for Core-X Solutions — a data, automation and revenue operations
consultancy. Next.js App Router, Tailwind v4, Supabase-backed blog.

## Running it

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev
```

## Environment

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical origin. Drives canonicals, OG URLs and the sitemap. |
| `SUPABASE_URL` | Blog source. **Unset by default — see below.** |
| `SUPABASE_PUBLISHABLE_KEY` | Anon key; RLS restricts reads to published rows. |

### The blog is intentionally unconfigured

`src/lib/posts.ts` returns an empty list when Supabase is unset or unreachable, so
`/blog` renders a clean empty state and the build never fails.

Do **not** point this at the Supabase project used by the other site — both would
serve the same articles under different brands. Either create a separate project,
or add a `site` column to `posts` and filter on it.

## Content

All copy lives in `src/content/profile.ts`. Editing that file changes the page; no
component surgery required.

## Design system

Tokens are defined in the `@theme` block of `src/app/globals.css`. Every colour
tier was checked for WCAG AA contrast against both the dark ground and the
`.on-paper` inversion before being committed:

| Token | On ground | |
|---|---|---|
| `bone` | 15.6:1 | body and headings |
| `bone-2` | 10.1:1 | secondary copy |
| `bone-3` | 6.4:1 | labels and captions |
| `signal` | 6.8:1 | periwinkle accent |
| `oxide` | 7.3:1 | warm accent |
| `verdigris` | 10.3:1 | cool accent |

`.on-paper` re-declares `signal`, `oxide` and `verdigris` darker, because the
values that pass on `#14101f` fail on a light ground.

## Testimonials

The `Testimonials` component exists but is **not rendered**. See the comment above
`testimonials` in `src/content/profile.ts`. Add `<Testimonials />` back to
`src/app/page.tsx` once there are real, permissioned quotes.

## Deploying

Vercel builds `main` automatically. Set the environment variables in the Vercel
project, not in the repo — `.env*.local` is gitignored and must stay that way.

## IndexNow

`public/1acc8e1f517f4a16805af289d548d36e.txt` is the IndexNow verification key.
It is meant to be publicly readable — it proves domain ownership when pinging
`api.indexnow.org`, and is not a secret. Do not delete it; Bing revalidates it on
every submission.

To notify participating engines (Bing, Yandex, Seznam, Naver — not Google) that a
URL changed:

```bash
curl -X POST https://api.indexnow.org/indexnow \
  -H 'Content-Type: application/json' \
  -d '{
    "host": "core-x.solutions",
    "key": "1acc8e1f517f4a16805af289d548d36e",
    "keyLocation": "https://core-x.solutions/1acc8e1f517f4a16805af289d548d36e.txt",
    "urlList": ["https://core-x.solutions/blog/some-new-post"]
  }'
```

Submitting unchanged URLs repeatedly is treated as spam and returns 429.
