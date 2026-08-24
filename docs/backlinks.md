# Backlinks and citations — Core-X Solutions

Companion to `docs/backlinks.md` in `mehrdadie/datalift-site`, which covers the
same ground for the personal site. **Read this one first if you are working on
core-x.solutions**, because the two sites cannot run the same playbook and the
reason is in the first section.

Status column: leave blank, mark `todo`, `done`, or `n/a` as you work through.

---

## Before any of this — two blockers

Link building into the site as it stands would be spending effort to draw
attention to problems that are cheaper to fix first.

### 1. The case studies are word-for-word identical on both live sites

All eight engagements on `core-x.solutions/case-studies` appear in the same
words on `mehrdadfashami.com/case-studies`, each site presenting them as its own
work. Verified live on both, 2026-08-22.

This is the same test `CLAUDE.md` already applies to the testimonials — *"the
same words, attributed to the same people, appear on the other live site …
trivially checkable"* — and the testimonials were withheld for it. The case
studies fail the identical test and are currently rendered.

Three separate costs:

- **Duplicate content.** Two domains, same text, neither canonical to the other.
  Search engines pick one and discount the other, and you do not control which.
- **Credibility.** Two companies claiming the same engagements in identical
  prose. Any prospect who finds both stops trusting both.
- **Wasted links.** A link earned to a page that gets discounted as a duplicate
  buys nothing.

**Fix before link building.** Options, in order of preference:

1. **Split the engagements.** Assign each case study to one site. Core-X keeps
   the ones done as the company; the personal site keeps the earlier
   independent work. Cleanest, and honest about which entity did what.
2. **Rewrite one set from scratch** — different framing, different emphasis,
   different words. Same underlying work described by two entities is fine if
   the entities genuinely both did it and the text is not copied.
3. **Cross-canonical**, as already done for the shared blog post: one site is
   the original, the other points at it. Weakest option — it means Core-X's
   strongest proof page tells search engines it belongs to a competitor.

### 2. Decide which domain is the commercial one

Same person, same services, same components, same case studies, and both sites
target revenue-operations keywords. Right now they compete with each other for
every query, and any authority earned is split across two domains that a model
will probably resolve to one entity anyway.

Pick one to be the business, and give the other a distinct job — personal
brand, writing, speaking — with different keyword targets. Everything below
assumes Core-X is the commercial one; invert it if that is wrong.

---

## What is different about a company entity

The sibling doc is written for a *person*: LinkedIn profile, Stack Overflow
answers, conference bios. Core-X needs a **company** entity, and the
corroborating sources are different ones.

| Person entity (personal site) | Company entity (Core-X) |
|---|---|
| LinkedIn personal profile | LinkedIn **company page** |
| Personal Crunchbase | Crunchbase **organisation** |
| Speaker bios, podcast guest | Clutch / GoodFirms company listing |
| GitHub, Stack Overflow | Companies House record |
| about.me, Polywork | Google Business Profile as a business |

**Mehrdad is a person *at* Core-X.** Every company profile should say so, and
link the personal site as the founder's, not as an alternative to this one.
That relationship — one person, one company, stated consistently — is what
stops a model treating two domains as a duplicate and lets it treat them as
related.

---

## Sequence

Work top-down. This is ordered by value per hour, not by volume.

### Step 0 — Prerequisites (do first, they gate everything else)

| Task | Why | Status |
|---|---|---|
| Fix the duplicate case studies | See blockers above | |
| Google Search Console property + sitemap submitted | You currently cannot tell whether any of this is indexed. Everything else is guesswork until this exists | |
| Bing Webmaster Tools | Also feeds ChatGPT search. IndexNow is already firing from the database, so this is the console for it | |
| Company LinkedIn page | `profile.linkedin` is null and every use site guards on it. This is the single highest-value company profile | |
| Companies House record linked | Free, authoritative, and what verification services check | |

### Step 1 — Company identity (one sitting, mostly nofollow)

Their job is corroboration, not ranking. Same company name, same description,
same URL format (`https://core-x.solutions`) everywhere — inconsistent entries
weaken entity resolution rather than strengthening it.

| Platform | Notes | Status |
|---|---|---|
| LinkedIn company page | Description in the market's language, not ours | |
| Google Business Profile | Service-area business | |
| Bing Places | | |
| Crunchbase organisation | Free tier | |
| Clutch | Free listing; B2B buyers use it and AI models cite it | |
| GoodFirms | Same model | |
| Vercel showcase | Site is built on it | |
| Supabase showcase | Same | |

### Step 2 — Editorial mentions (the only free links with real ranking weight)

Same platforms as the sibling doc — Featured.com, Help a B2B Writer, Qwoted,
SourceBottle, Terkel.

**The rule that matters here: answer as one entity, never both.** Pitching the
same expert on the same question to the same journalist under two domains is
the pattern that looks manipulative. Decide per platform which site answers,
and stay with it.

Win these by describing a specific mechanism. *"Here is the three-definition
framework I use when CRM and finance disagree on revenue"* gets picked;
*"data quality is important"* does not. Roughly a 1-in-10 hit rate.

### Step 3 — Your own stack's ecosystems

The unfair advantage: you already work in these tools and the audience is
pre-qualified.

| Platform | What to publish | Status |
|---|---|---|
| n8n template library | A working workflow — CRM → BigQuery revenue sync. Creator profile + link. See `docs/n8n-template-submission.md` in the sibling repo | |
| n8n community forum | Answer integration questions; threads rank | |
| Make community | Adjacent audience | |
| Zapier Experts directory | Listing as an automation consultancy | |

Publish these **under the company**, since they are the company's stack. The
personal site can take the developer-audience platforms (GitHub, Stack
Overflow) where a person is the natural author.

### Step 4 — Communities where the buyers are

Slow, no immediate link, but where referral work comes from. RevOps Co-op,
Wizards of Ops, MeasureSlack, Locally Optimistic, r/RevOps, r/analytics.

Contribute properly. Link only when the link *is* the answer.

### Step 5 — Podcasts and speaking

Show notes always link out and small B2B/RevOps podcasts are short of guests.
Pitch a specific angle, never "I'd like to come on."

Note the split: **a person is the guest, so the bio link is the judgement
call.** If Core-X is the commercial site, the bio should read "founder of
Core-X Solutions" and link here. Any existing conference speaker page should be
updated to whichever domain you chose in blocker 2.

---

## Content republishing

dev.to and Hashnode accept a canonical pointing home, so you borrow reach
without a duplicate-content cost. The audience is developers, not founders or
revenue leaders — do it for entity corroboration and AI retrieval, not pipeline.

**Never cross-post the same article from both domains.** One canonical per
article, on whichever site owns that topic.

Hashnode's free API was retired in May 2026 and now needs Pro ($5/mo). dev.to
remains free and is the better of the two anyway.

---

## Money

**Nothing sold as a backlink is worth buying.** Every legitimate paid link is a
by-product of something else you are actually getting. If the pitch is "links,"
walk away.

Worth it: professional body membership, local Chamber of Commerce, a niche
newsletter sponsorship, and above all **a conference ticket where you speak** —
that produces a link, an audience and a case for expertise at once.

Not worth it: "N backlinks for £X" packages, paid guest posts on generic
"DA50+" sites, mass directory submissions, PBNs, press-release distribution.
On a domain this young these range from useless to actively dangerous.

---

## Honest summary

The domain is two days old with no inbound links, thirty-one service pages and
fourteen blog posts. The constraint is not content volume any more — it is that
nothing external points here and nothing confirms the company exists.

In order: fix the duplicate case studies, stand up Search Console so you can
see what is happening, create the company identity profiles, then start the
daily journalist-request habit. That is the whole plan for the first month.

Revisit anything paid once the site has six months of history and something to
point at. Buying links into a new domain is spending money to look suspicious.

---

## First week

1. Decide the commercial domain (blocker 2) — everything else depends on it
2. Fix the duplicate case studies (blocker 1)
3. Google Search Console + Bing Webmaster, sitemap submitted to both
4. Company LinkedIn page, then set `profile.linkedin`
5. Company identity profiles in one sitting — Step 1, consistent everywhere
6. Start the daily journalist-request habit
