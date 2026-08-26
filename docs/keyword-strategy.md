# Keyword strategy — what the evidence supports

Derived from the keyword discovery report of 25 August 2026, which collected live
Google Autocomplete (GB and US), Brave SERP question blocks and Google Trends. No
volume or difficulty figures exist for any phrase here — none of those sources
returns them, and none were invented. Everything below is either "a live source
completed this string" or "a live source returned nothing for this string".

This document exists so the same arguments do not get had twice. If you are about
to add a service page, check §3 before you do.

## 1. The finding that changes the most

**Four of the site's own head terms return nothing when typed.**

- `marketing attribution consultant`
- `CRM data quality consultant`
- `revenue attribution consultant`
- `lead to revenue reporting`

All four were in the root `keywords` array. None of them completes in GB or US
Autocomplete, with any buyer prefix. They were written from the brief rather than
from evidence.

Two more completed, but into the wrong audience:

- `fractional head of data` → jobs, salary, chief-data-officer job listings
- `systems integration consultant` → salary, plus enterprise-SI brands

Meanwhile the phrasing that *does* complete was largely absent:
`revenue operations consulting`, `revenue operations consulting services`,
`revops agency`, `revops agency uk`, `fractional revops`, `b2b revops
consultancy`, `saas revops consultants`.

**Actioned:** the root `keywords` array in `src/app/layout.tsx` now carries only
phrases a live source completed. See the comment above it.

## 2. Rules that fell out of the data

**Consulting, not consultant.** Autocomplete prefers the `-ing` form on the core
head. The job-title form completes into salaries and job descriptions. The H1 on
`/services/revenue-operations-consultant` already said "Revenue operations
consulting"; only the `<title>` still said "Consultant", and it now does not. The
slug stays — it is a URL, and a redirect would cost more than it returns.

**Problems, not titles.** `CRM data quality issues`, `CRM data quality dashboard`
and `what is CRM data` all complete. `CRM data quality consultant` does not. The
page is written for the problem. Same pattern on attribution: the models, tools
and software forms complete; the consultant form is empty.

**`hire` did not complete in GB.** `hire RevOps consultant` returns nothing in
GB Autocomplete. It completes in the US, and into staffing variants. Do not build
a UK page on the assumption of a "hire a RevOps consultant" market.

**Trends is a sanity check, not a keyword picker.** Every consultant title
indexed 0 in the GB five-year comparison. The one service phrase with a clear
series, `marketing analytics`, is also the most course- and career-polluted — its
related queries are Coursera and certificates. Nothing here was chosen because of
a Trends number.

## 3. New URLs: what was built, and what was rejected

The report proposed eight new service pages. One was built. This is deliberate,
and it is the same argument the services index now makes on its front: a page
earns a URL by being a thing somebody buys, not by being a phrase somebody typed.

**Built — `/services/fractional-revops`.** `fractional revops`, `fractional
revops consultant`, `fractional revops agency` and `revops as a service` all
complete, and none had a page. It earns the URL because it describes a
*commercial shape* — how the work is bought — rather than another task to request
a quote on. Written for the buyer, not the role: the same seeds complete heavily
into salary queries, so the page says plainly when the answer is a permanent
hire instead.

**Rejected, and why:**

| Proposed | Decision |
|---|---|
| `/services/revops-agency-uk` | Covered by title and body language on the existing consulting page. A UK-modifier URL beside a UK-only site is a doorway page. |
| `/services/power-bi-consultancy-uk` | `power bi consultancy uk` and `london` do complete — one of the few UK-local commercial completions in the set. But the practice does not sell Power BI as a named service; it appears in case studies as a tool. A page would be a line item, which is the thing the services index just stopped leading with. Revisit if Power BI work becomes a repeat offer. |
| `/services/crm-architecture` | Overlaps `/services/crm-integration-services` almost entirely. The completions (`crm architecture design`, `crm system architecture`) are educational rather than commercial. |
| `/services/marketing-analytics-consultancy` | The phrase completes, but its related queries are courses and certifications. High risk of pulling a career audience. |
| `/services/gohighlevel-consultant-uk` | Built as a **section** on `/services/crm-integration-services` instead. |
| `/services/stripe-crm-reporting` | Same — a section, not a URL. Both are seams on a page about seams. |
| `/services/n8n-consultant` | n8n stays under `/services/data-automation-consultant`, whose description now names it. The bare `n8n agency` SERP is Reddit "how do I get my first client"; a dedicated page would rank beside hourly workflow gigs. |
| `system integration consultant` as a head | Salary queries plus enterprise SI brands. Supporting phrase only. |

**Never build pages for:** any `* jobs / salary / job description / hourly rate /
certification / how to become / how to get into` phrase, the `freelance data
consultant` and `freelance data analyst` cluster, or positioning slogans that
Autocomplete did not expand (`numbers do not match between systems`, `systems
behind your business`). Those slogans are good headlines. They are not URLs.

## 4. FAQ blocks are the main on-page change

Before this pass, exactly one service page had questions on it and **no service
page emitted `FAQPage` markup** — only the blog did. The pages carrying the
commercial intent were the ones a search engine could read least.

Nine pages now carry a questions block and the matching node, via
`src/components/services/ServiceFaq.tsx`. The wording of the questions is taken
from what live sources actually return, not invented to fill a block:

- "What is the difference between RevOps and sales ops?"
- "When should I hire RevOps consulting vs hire in-house?"
- "What does a CRM data quality consultant actually do?"
- "Do I need a consultant, or can I just buy workflow automation software?"
- "How do you calculate revenue attribution?"
- "How much does it cost to hire an n8n consultant?"

This matters more here than on most sites: `robots.ts` deliberately admits every
AI crawler, and being cited by an assistant is a stated goal. A machine-readable
answer to a question somebody actually typed is the cheapest citation available.

Answers are written in the site's own voice and say something the page above does
not. An FAQ that restates the section headings is markup with nothing behind it.

Cost questions are answered without a number, because `engagementFloor` is null.
Set it in `profile.ts` and the answers that reference it pick it up.

## 5. Caveats on the source data

- Google's own SERP could not be read; the question blocks came from **Brave**.
  They are not Google People Also Ask and should not be described as such.
- Autocomplete returning nothing is **not** a volume figure. It means the string
  is not a common enough prefix to complete, which is a weaker claim.
- Trends averages are a 0–100 index **within one comparison**. The report's three
  batches are not comparable to each other, and GB is not comparable to US.
- Suggestions that only echoed the typed seed are not extra demand.
- The report's own collision list is worth keeping: `go nimbly revops
  consultant`, `premier revops agency`, `marketing attribution llc` and similar
  are other companies' names, not queries a buyer types about us.

## 6. Related

`docs/backlinks.md` in this repo covers the two-site problem — this site and
mehrdadfashami.com target the same terms with the same person and the same case
studies behind them. Read it before acting on any of the above with off-site
work. The sibling repo's `docs/keyword-research.md` predates this evidence pass.
