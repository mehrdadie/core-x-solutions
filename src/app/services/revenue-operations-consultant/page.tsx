import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import RelatedServices from "@/components/services/RelatedServices"
import Reveal from "@/components/ui/Reveal"

const title = "Revenue Operations Consultant | Core-X Solutions"
const description =
  "A RevOps consultancy connecting CRM, marketing, finance and support into one system you can report on. What we own, and how an engagement runs."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/revenue-operations-consultant" },
  openGraph: {
    type: "article",
    url: `${profile.url}/services/revenue-operations-consultant`,
    siteName: profile.name,
    title,
    description,
    locale: "en_GB",
    images: [{ url: "/services/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description },
}

const symptoms = [
  {
    said: "Sales and finance disagree about last month.",
    actual:
      "Two systems hold a number called revenue and neither owns the definition. Usually one counts bookings and the other counts collections, and nobody wrote that down.",
  },
  {
    said: "We do not know which channel is working.",
    actual:
      "Campaign naming was never enforced, so ad spend cannot be joined to closed revenue at customer level. The reports are real; the join is guesswork.",
  },
  {
    said: "Leads go cold.",
    actual:
      "There is no owner, no clock and no escalation. Response time is a function of who happened to be looking at the inbox.",
  },
  {
    said: "Reporting takes the whole week.",
    actual:
      "Someone is exporting from five platforms and reconciling by hand, so the numbers describe a week that has already finished.",
  },
  {
    said: "The CRM is a mess.",
    actual:
      "Duplicates from prior migrations, ownership that no longer matches the team, and no survivorship rule for which value wins. Every meeting opens with an argument about the data.",
  },
]

const steps = [
  {
    n: "01",
    title: "Audit",
    body: "Every system that touches a customer, what it holds, and where the same fact is stored twice. We map the joins that do not currently exist, because those are the reports you cannot build.",
    ends: "A systems map and a written list of what disagrees with what",
  },
  {
    n: "02",
    title: "Definitions",
    body: "Agree what a lead, an opportunity, a customer and revenue each mean, in writing, with the people who will argue about it later. This is the step teams skip and the reason most dashboards get abandoned.",
    ends: "A definitions document signed off by sales, marketing and finance",
  },
  {
    n: "03",
    title: "Data quality",
    body: "Deduplicate on deterministic keys first, fuzzy matching second, with a documented rule for which value survives. Rebuild ownership from an agreed source of record. Enforce naming at the point of entry rather than cleaning it later.",
    ends: "A CRM people quote instead of work around",
  },
  {
    n: "04",
    title: "Pipelines and automation",
    body: "Scheduled syncs between the systems, routing and escalation on rules the team agreed, validation that fails loudly, and alerting when a source stops delivering.",
    ends: "Data arriving on a clock, without anyone exporting anything",
  },
  {
    n: "05",
    title: "Reporting and handover",
    body: "A modelled layer above the warehouse so group and team numbers cannot disagree, dashboards built on the agreed definitions, and documentation your team can maintain without us.",
    ends: "Numbers before the meeting rather than after it",
  },
]

const evidence = [
  {
    metric: "30 hrs → 2 hrs",
    label: "Weekly reporting preparation",
    detail:
      "Six sources consolidated, validation automated, daily refresh instead of weekly. 93% less manual preparation.",
    href: "/case-studies#reporting-automation",
  },
  {
    metric: "31% → 0.4%",
    label: "CRM duplicate rate, sustained",
    detail:
      "Deterministic then fuzzy matching with a survivorship rule, running nightly rather than as a one-off cleanup.",
    href: "/case-studies#crm-data-quality",
  },
  {
    metric: "2 hrs → 4 min",
    label: "Median first response to an enquiry",
    detail:
      "Validation, enrichment and routing on agreed rules, with an SLA clock and escalation. No leads unassigned overnight.",
    href: "/case-studies#lead-routing",
  },
  {
    metric: "£240k",
    label: "Pipeline surfaced from existing records",
    detail:
      "4,800 dormant records re-scored against last contact, acquisition cost, previous value and stall stage, refreshed daily.",
    href: "/case-studies#dormant-revenue",
  },
  {
    metric: "9 → 1",
    label: "Sources conformed to one model",
    detail:
      "Three brands, three CRMs, one shared dimensional model. Group and brand numbers now come from the same place.",
    href: "/case-studies#one-warehouse",
  },
  {
    metric: "4 → 1",
    label: "Systems to check for one customer",
    detail:
      "Lead, call, opportunity and payment signals resolved to a single customer identity. 100% of calls matched to CRM records.",
    href: "/case-studies#lead-sales-intelligence",
  },
]

const comparison = [
  ["Time to something usable", "Weeks", "6–12 months", "3–6 months, after hiring"],
  ["Cost shape", "Fixed scope, ends", "Cheap until it is not", "Salary, ongoing"],
  ["Knows your business", "Learns it", "Already does", "Learns it, then stays"],
  ["Has done it before", "Repeatedly", "Rarely", "Depends entirely on the hire"],
  ["Risk if it stalls", "You stop paying", "Sunk months", "You still employ them"],
  [
    "Right when",
    "The problem is defined and crosses systems",
    "The problem is small and local",
    "The work never ends",
  ],
]

const faqs = [
  {
    q: "How long does a RevOps engagement take?",
    a: "The audit and definitions work is usually two to four weeks. Data quality and pipelines depend entirely on how many systems are involved and how bad the duplicate situation is — that is the part that varies, and it is why we scope it after the audit rather than before.",
  },
  {
    q: "Do we need a data warehouse?",
    a: "Not always. If everything lives in one CRM and you need better reporting inside it, a warehouse is overhead. If you have several systems that each hold part of the customer, you need somewhere to join them, and doing that inside a CRM tends to end badly.",
  },
  {
    q: "Will this work with our existing tools?",
    a: "Usually. We work with what you already pay for rather than proposing a migration, because a migration is a project on top of the project you actually have. We will say so if a tool genuinely cannot do what you need.",
  },
  {
    q: "What happens when the engagement ends?",
    a: "You own everything: the pipelines, the definitions document, the dashboards and the documentation. If we have built something only we can maintain, we have done it wrong.",
  },
  {
    q: "Can you fix the CRM without touching the rest?",
    a: "Sometimes, and we will tell you when that is true. But the CRM is usually messy because of what flows into it, so cleaning it without fixing the inputs buys about a quarter before it returns.",
  },
]

export default function RevenueOperationsConsultantPage() {
  return (
    <>
      <Header />

      <main id="main">
        <section className="border-b border-rule pt-[124px] pb-16 md:pt-[148px] md:pb-20">
          <div className="shell">
            <Reveal>
              <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-rule pb-5">
                <p className="marker">Services</p>
                <Link href="/services" className="tag transition-colors hover:text-signal">
                  ← All services
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-10 font-display text-[clamp(2.3rem,5.6vw,4.2rem)] leading-[1.02] font-semibold tracking-[-0.035em]">
                Revenue operations consulting
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="lead mt-8 max-w-2xl">
                Most revenue problems are not sales problems. They are two systems holding the same
                fact and disagreeing about it. We connect CRM, marketing, finance and support into
                one system you can actually report on — and agree what the words mean before we
                build anything.
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="#contact" className="btn btn-primary">
                  Discuss a project
                </Link>
                <Link href="/case-studies" className="btn btn-secondary">
                  See selected work
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell border-t border-rule-2">
            <Reveal>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  What you say, and what it usually is
                </h2>

                <div className="min-w-0">
                  <p className="copy mb-8">
                    Businesses arrive with a symptom. The diagnosis is almost always somewhere else,
                    and it is almost always a definition or a join that nobody owns.
                  </p>

                  <dl>
                    {symptoms.map((s) => (
                      <div key={s.said} className="border-b border-rule py-5 last:border-b-0">
                        <dt className="flex items-baseline gap-4">
                          <span
                            aria-hidden
                            className="mt-[9px] h-[7px] w-[7px] shrink-0 translate-y-[-4px] bg-oxide"
                          />
                          <span className="font-display text-[17px] font-semibold text-bone">
                            &ldquo;{s.said}&rdquo;
                          </span>
                        </dt>
                        <dd className="copy-sm mt-2 pl-[23px]">{s.actual}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  How an engagement runs
                </h2>

                <div className="min-w-0">
                  <ol className="relative">
                    <span
                      aria-hidden
                      className="absolute top-3 bottom-3 left-[7px] w-px bg-rule md:left-[calc(48px+7px)]"
                    />
                    {steps.map((s) => (
                      <li
                        key={s.n}
                        className="relative grid gap-x-10 gap-y-3 pb-10 pl-9 last:pb-0 md:grid-cols-[48px_minmax(0,1fr)] md:pl-0"
                      >
                        <span
                          aria-hidden
                          className="absolute top-[7px] left-0 h-[15px] w-[15px] border border-signal bg-paper md:left-[48px]"
                        />
                        <span
                          aria-hidden
                          className="absolute top-[11px] left-1 h-[7px] w-[7px] bg-signal md:left-[52px]"
                        />
                        <span className="font-mono text-[12px] tracking-[0.1em] text-bone-3 md:pt-1">
                          {s.n}
                        </span>
                        <div className="md:pl-10">
                          <h3 className="font-display text-[1.2rem] font-semibold text-bone">
                            {s.title}
                          </h3>
                          <p className="copy-sm mt-2">{s.body}</p>
                          <p className="copy-sm mt-3 border-l border-rule-2 pl-4">
                            <span className="tag mb-1 block text-verdigris">Ends with</span>
                            {s.ends}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  What changed, on work we actually did
                </h2>

                <div className="min-w-0">
                  <p className="copy mb-8">
                    Client names are withheld under confidentiality, so each is identified by sector
                    on the{" "}
                    <Link
                      href="/case-studies"
                      className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                    >
                      case studies page
                    </Link>. The problem, the work and the result are as they happened.
                  </p>

                  <dl>
                    {evidence.map((e) => (
                      <div key={e.label} className="border-b border-rule py-5 last:border-b-0">
                        <dt className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                          <span className="font-display text-[1.35rem] font-semibold tracking-[-0.02em] text-signal tabular-nums">
                            {e.metric}
                          </span>
                          <span className="font-display text-[16px] font-medium text-bone">
                            {e.label}
                          </span>
                        </dt>
                        <dd className="copy-sm mt-2">
                          {e.detail}{" "}
                          <Link
                            href={e.href}
                            className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                          >
                            Case study
                          </Link>.
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  What we own
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    <p>
                      <strong>The systems layer.</strong>{" "}
                      <Link
                        href="/services/crm-integration-services"
                        className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                      >
                        CRM integration
                      </Link>
                      ,{" "}
                      <Link
                        href="/services/crm-data-migration"
                        className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                      >
                        migration
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/services/crm-data-quality"
                        className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                      >
                        data quality
                      </Link>{" "}
                      — the plumbing everything else depends on. On{" "}
                      <Link
                        href="/services/salesforce-revops-consulting"
                        className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                      >
                        Salesforce
                      </Link>
                      ,{" "}
                      <Link
                        href="/services/hubspot-revops-consulting"
                        className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                      >
                        HubSpot
                      </Link>{" "}
                      or{" "}
                      <Link
                        href="/services/zoho-crm-automation"
                        className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                      >
                        Zoho
                      </Link>.
                    </p>
                    <p>
                      <strong>The revenue layer.</strong>{" "}
                      <Link
                        href="/services/revenue-attribution-models"
                        className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                      >
                        Attribution
                      </Link>
                      ,{" "}
                      <Link
                        href="/services/lead-routing-guide"
                        className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                      >
                        routing
                      </Link>
                      ,{" "}
                      <Link
                        href="/services/lead-scoring-models"
                        className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                      >
                        scoring
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/services/sales-forecasting"
                        className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                      >
                        forecasting
                      </Link>{" "}
                      — deciding where a lead goes and what a pipeline number means.
                    </p>
                    <p>
                      <strong>The reporting layer.</strong>{" "}
                      <Link
                        href="/services/automated-reporting-guide"
                        className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                      >
                        Automated reporting
                      </Link>
                      ,{" "}
                      <Link
                        href="/services/reporting-dashboard-design"
                        className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                      >
                        dashboard design
                      </Link>{" "}
                      and the{" "}
                      <Link
                        href="/services/kpi-selection-guide"
                        className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                      >
                        handful of KPIs
                      </Link>{" "}
                      worth putting on a wall.
                    </p>
                    <p>
                      Most engagements start in one layer and end up touching all three, because the
                      reporting problem is usually a data quality problem wearing a costume.
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Consultant, in-house, or neither
                </h2>

                <div className="min-w-0">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[560px] text-left">
                      <thead>
                        <tr className="border-b border-rule-2">
                          <th className="tag py-3 pr-4 font-normal">&nbsp;</th>
                          <th className="tag py-3 pr-4 font-normal text-signal">Consultancy</th>
                          <th className="tag py-3 pr-4 font-normal">Do it yourself</th>
                          <th className="tag py-3 font-normal">In-house hire</th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparison.map((row) => (
                          <tr key={row[0]} className="border-b border-rule">
                            <td className="py-3.5 pr-4 text-[14.5px] font-semibold text-bone">
                              {row[0]}
                            </td>
                            <td className="py-3.5 pr-4 text-[14.5px] text-bone-2">{row[1]}</td>
                            <td className="py-3.5 pr-4 text-[14.5px] text-bone-2">{row[2]}</td>
                            <td className="py-3.5 text-[14.5px] text-bone-2">{row[3]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="copy mt-6">
                    We are the wrong answer if the problem lives entirely inside one tool and one
                    team. Hire someone who knows that tool deeply instead — it will be faster and
                    cheaper, and we will tell you so on the first call.
                  </p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Questions we get asked
                </h2>

                <div className="min-w-0">
                  <dl>
                    {faqs.map((f) => (
                      <div key={f.q} className="border-b border-rule py-5 last:border-b-0">
                        <dt className="font-display text-[17px] font-semibold text-bone">{f.q}</dt>
                        <dd className="copy-sm mt-2">{f.a}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="panel border-l-2 border-l-signal p-6 md:p-8">
                <p className="mb-3 font-semibold text-bone">
                  Tell us what is breaking, not what you think you need
                </p>
                <p className="copy mb-5">
                  Most people arrive with a symptom. Describe it and we will tell you where it
                  actually starts — including when the answer is that you do not need us.
                </p>
                <Link href="#contact" className="btn btn-primary">
                  Discuss a project
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <RelatedServices current="/services/revenue-operations-consultant" />

        <FinalCta />
      </main>

      <Footer />
    </>
  )
}
