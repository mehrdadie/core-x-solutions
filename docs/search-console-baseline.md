# Search Console baseline — 1 September 2026

QA of the first Search Console export. The property was requested as "last three
months" and returned **nine days**: 21–29 August 2026. That is the age of the
property, not a gap in the data.

**Totals: 9 clicks, 59 impressions.** Countries and Devices both reconcile
exactly to those figures. The Pages table sums higher than 59 — that is ordinary
GSC dimension behaviour and means page-level impressions must not be added
together. Only about half the impressions appear in the Queries table; the rest
sit below the anonymised-query threshold.

Everything below is read off that export. No volume or difficulty figures are
introduced, for the same reason `keyword-strategy.md` has none.

## 1. The nine clicks are not a market

| Country | Clicks | Impressions | Position |
|---|---|---|---|
| Armenia | 7 | 13 | 2 |
| Russia | 1 | 2 | 4.5 |
| Netherlands | 1 | 2 | 6 |
| United States | 0 | 29 | 59.97 |
| United Kingdom | 0 | 1 | 83 |

Seven of the nine clicks are from Armenia, at **position 2** with a 54% CTR, and
the device split puts them on mobile. A two-week-old UK RevOps consultancy does
not rank second in Armenia on merit. Position 2 with that CTR is the signature of
a **navigational query** — someone typing the company name — which means the most
likely explanation is the site's own people, or automated traffic.

The practical consequence: **treat the click count as zero.** Any conclusion drawn
from "40% CTR on the homepage" is a conclusion about people who already knew the
name. The homepage, `/contact`, `/services` and `/privacy` all sitting at
positions 4–7 is the same artefact — those are brand-term rankings, not topical
ones.

## 2. The impressions are the real signal, and they are coherent

Fourteen queries surfaced. Eight of them are the same intent:

- `what is revops` · `revenue operations definition` · `what is revenue operations`
- `revops definition` · `revops meaning` · `what does revops mean`
- `what is revops in business` · `what does revops do`

Google has decided this site is **about what RevOps is**. That is the single
clearest finding in the export, and it is consistent with
`/services/what-is-revops` drawing 24 impressions — more than any other page.

The remaining queries are thin but on-strategy: `connect revenue to campaigns`,
`connect ad spend to store revenue`, `revenue attribution`, `hubspot lead
routing`, `what is lead routing`, `loss analysis report`.

Nothing off-strategy appeared. No job or salary queries, no course or
certification queries — the two audiences `keyword-strategy.md` §2 warned the
consultant-title phrasings would attract. The decision to write for problems
rather than job titles is holding.

## 3. Two populations of position, and only one of them counts

| Group | Pages | Position range |
|---|---|---|
| Brand / navigational | home, `/contact`, `/services`, `/blog`, `/privacy`, three service pages | 4 – 10 |
| Topical, non-branded | `what-is-revops`, `win-loss-analysis`, `revenue-attribution`, `lead-routing`, `connect-ad-spend-to-booked-revenue` | 45 – 88 |

This is the standard profile of a new domain: it ranks for its own name and for
nothing else yet. Averaging the two groups produces a site-wide position figure
that describes neither, so do not report one.

The number that matters is the second group, and **position 45–88 means the pages
are indexed but not competitive.** That is an authority problem, not a relevance
or an on-page problem — the pages are already topically correct enough to be
shown for the right queries.

## 4. The geography is pointed the wrong way

The site is built for the UK: `en_GB`, sterling, UK phrasing throughout, and
`revops agency uk` among the evidenced terms.

**The United States generated 29 impressions. The United Kingdom generated one,
at position 83.**

Nothing in the export explains this, so treat it as a question rather than a
finding. The candidates worth checking, cheapest first: the `.solutions` gTLD
carries no geographic signal; there are no UK inbound links at all yet
(`backlinks.md`); and the UK-market signals the site does carry — the registered
address, the phone number, the sterling pricing — are recent and may simply
predate the crawl.

Do not act on this by adding UK-modifier landing pages. §3 of
`keyword-strategy.md` already rejected `/services/revops-agency-uk` as a doorway
page, and a geography problem caused by having no links is not solved by having
more URLs.

## 5. What this changes in the content plan

**Nothing yet, with one thing to watch.**

The four posts published on 31 August fall outside this window entirely — the
data ends 29 August. They have no impressions here because they did not exist,
not because they failed. Their first readable signal is roughly mid-September.

The one item worth revisiting: `revops-definition` (`revops meaning`) was left
pending in the topic queue on the grounds that it would cannibalise the new
`revops consulting` post. The export shows the definitional cluster is where the
demonstrated impressions actually are — eight of the fourteen queries.

That does **not** overturn the decision, and it should not be read as one.
`/services/what-is-revops` already owns that intent and is already the most-seen
page on the site. A blog post on the same query would compete with it, which is
the original argument. What the data changes is the priority: the work is making
that existing page competitive, not writing a second page beside it.

## 6. Re-run this in four weeks

Nine days and 59 impressions cannot support trend analysis. Comparisons between
individual days here are noise — one day carries 21 impressions and two carry
none.

At the next export, the questions worth asking:

1. **Has any non-branded query produced a click?** That is the first genuine
   demand signal. Until then the click column is not evidence.
2. **Has the topical group moved off positions 45–88?** Movement into the 20s
   would indicate the authority problem is easing.
3. **Do the four new posts appear at all?** Presence in the impressions table is
   the success condition at this stage, not position.
4. **Has the UK/US ratio changed?** If UK impressions are still near zero once
   the site has any inbound links, it becomes a real problem rather than an open
   question.
5. **Is `Search appearance` still empty?** It has no rows at all today. Nine
   service pages emit `FAQPage` markup and every post emits `BlogPosting`, so
   this is worth watching — but Google narrowed FAQ rich results to a small set
   of site types in 2023, so an empty table here may be permanent and is not
   evidence the markup is broken.

## 7. Caveat on the export itself

`Search appearance.csv` contains only a header row. `Filters.csv` confirms the
export is Web search only — Image, Video, News and Discover are excluded, which
is correct for this site but means the export is not a complete picture of all
Google surfaces.

Bing, Yandex, Seznam and Naver are pinged by IndexNow on publish and return 200,
but **Bing Webmaster Tools is not set up**, so there is no equivalent baseline
for them. Given that the IndexNow integration already exists and works, that is
the cheapest remaining measurement gap on the site.
