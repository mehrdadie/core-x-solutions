import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import Reveal from "@/components/ui/Reveal"

const title = `Services | ${profile.name}`
const description =
  "Revenue operations, CRM integration, data automation and reporting. Browse the full index of services, platform guides and operating playbooks."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services" },
  openGraph: {
    type: "website",
    url: `${profile.url}/services`,
    siteName: profile.name,
    title,
    description,
    locale: "en_GB",
  },
  twitter: { card: "summary_large_image", title, description },
}

/**
 * The index of every service page, grouped by the part of the revenue chain it
 * sits in. Set as a numbered document rather than a card grid: one running
 * count across all seven groups, so the page states its own size and you can
 * tell where you are in it.
 */
const groups = [
  {
    id: "core",
    label: "Core services",
    intro: "The work itself — where an engagement usually starts.",
    items: [
      ["/services/revenue-operations-consultant", "Revenue operations consulting", "Sales, marketing and finance on one system"],
      ["/services/crm-integration-services", "CRM integration services", "Connect the CRM to everything around it"],
      ["/services/data-automation-consultant", "Data automation consulting", "Pipelines and syncs that run without you"],
      ["/services/what-is-revops", "What is RevOps?", "The discipline, explained plainly"],
    ],
  },
  {
    id: "platforms",
    label: "Platforms",
    intro: "Configuration, automation and integration on the systems you already run.",
    items: [
      ["/services/hubspot-revops-consulting", "HubSpot RevOps consulting", "Properties, workflows and reporting"],
      ["/services/salesforce-revops-consulting", "Salesforce RevOps consulting", "Governance, flows and permissions"],
      ["/services/zoho-crm-automation", "Zoho CRM automation", "Unify CRM, Books, Campaigns and Analytics"],
      ["/services/crm-data-migration", "CRM data migration", "Move systems without losing history"],
    ],
  },
  {
    id: "routing",
    label: "Routing & qualification",
    intro: "Getting the right lead to the right person, fast.",
    items: [
      ["/services/lead-routing-guide", "Lead routing", "Routing models and assignment logic"],
      ["/services/lead-scoring-models", "Lead scoring models", "Behavioural, demographic and predictive"],
      ["/services/lead-qualification-frameworks", "Lead qualification frameworks", "BANT, MEDDIC and CHAMP compared"],
      ["/services/territory-planning", "Territory planning", "Balanced, defensible territory design"],
    ],
  },
  {
    id: "attribution",
    label: "Attribution & reporting",
    intro: "Knowing which spend and which motion actually produced the revenue.",
    items: [
      ["/services/revenue-attribution-models", "Revenue attribution models", "First-touch to data-driven, compared"],
      ["/services/marketing-attribution-guide", "Marketing attribution", "UTMs, source tracking and channel reporting"],
      ["/services/automated-reporting-guide", "Automated reporting", "Dashboards that build themselves"],
      ["/services/reporting-dashboard-design", "Dashboard design", "What belongs on each audience's screen"],
      ["/services/kpi-selection-guide", "KPI selection", "Choosing the handful that matter"],
    ],
  },
  {
    id: "pipeline",
    label: "Pipeline & forecasting",
    intro: "Making the number in the forecast mean something.",
    items: [
      ["/services/pipeline-management", "Pipeline management", "Health metrics and a weekly cadence"],
      ["/services/sales-forecasting", "Sales forecasting", "Top-down, bottom-up and predictive"],
      ["/services/sales-cycle-analysis", "Sales cycle analysis", "Find the stage that's costing you"],
      ["/services/deal-velocity-metrics", "Deal velocity metrics", "Stage-level benchmarking"],
      ["/services/deal-health-scoring", "Deal health scoring", "Catch at-risk deals before the slip"],
      ["/services/win-loss-analysis", "Win/loss analysis", "Turn deal outcomes into strategy"],
    ],
  },
  {
    id: "retention",
    label: "Retention & expansion",
    intro: "The revenue you already won, kept and grown.",
    items: [
      ["/services/revenue-retention-strategy", "Revenue retention strategy", "The three levers behind NRR"],
      ["/services/customer-churn-prediction", "Churn prediction", "Early signals and a retention playbook"],
      ["/services/account-health-scoring", "Account health scoring", "Usage, engagement, support and NPS"],
      ["/services/account-expansion-strategy", "Account expansion", "Expansion motions that repeat"],
      ["/services/upsell-cross-sell-scoring", "Upsell & cross-sell scoring", "Score accounts for expansion"],
      ["/services/renewal-automation", "Renewal automation", "A workflow from 90 days out"],
    ],
  },
  {
    id: "process",
    label: "Process & data quality",
    intro: "The unglamorous foundation everything above depends on.",
    items: [
      ["/services/sales-process-automation", "Sales process automation", "Logging, tasks and escalations"],
      ["/services/crm-data-quality", "CRM data quality", "Validation, dedup and audit trails"],
      ["/services/sales-methodology-standardization", "Sales methodology", "One process, documented and enforced"],
      ["/services/sales-activity-tracking", "Sales activity tracking", "Leading indicators, measured"],
      ["/services/email-engagement-tracking", "Email engagement tracking", "Signal from the inbox"],
      ["/services/compensation-plan-alignment", "Compensation alignment", "Pay the behaviour you want"],
    ],
  },
] as const

const pad = (n: number) => String(n).padStart(2, "0")

/** One running number across every group, assigned once at module scope. */
const sections = (() => {
  let n = 0
  return groups.map((group) => ({
    ...group,
    count: group.items.length,
    items: group.items.map(([href, label, blurb]) => ({
      href,
      label,
      blurb,
      n: pad(++n),
    })),
  }))
})()

const total = sections.reduce((sum, group) => sum + group.count, 0)

/**
 * The symptom is what people arrive with; the page is the diagnosis. Set on the
 * printed sheet so it reads as the one piece of advice on an index page.
 */
const triage = [
  ["Leads sit for hours before anyone calls", "/services/lead-routing-guide", "Lead routing"],
  ["Two systems, two numbers, neither agrees", "/services/crm-data-quality", "CRM data quality"],
  ["The forecast is a guess wearing a number", "/services/sales-forecasting", "Sales forecasting"],
  ["Nobody can say which channel paid for itself", "/services/revenue-attribution-models", "Attribution models"],
  ["Renewals surprise us a fortnight out", "/services/renewal-automation", "Renewal automation"],
] as const

export default function ServicesIndexPage() {
  return (
    <>
      <Header />

      <main id="main">
        {/* Masthead. Contents sits alongside it — the fastest way to see the
            range of the index without scrolling thirty-five rows. */}
        <section className="border-b border-rule pt-[124px] pb-16 md:pt-[148px] md:pb-20">
          <div className="shell">
            <Reveal>
              <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-rule pb-5">
                <p className="marker">Services</p>
                <Link href="/" className="tag transition-colors hover:text-signal">
                  ← Back to the site
                </Link>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:gap-20">
              <div>
                <Reveal delay={0.05}>
                  <h1 className="font-display text-[clamp(2.3rem,5.6vw,4.2rem)] leading-[1.02] font-semibold tracking-[-0.035em]">
                    What we do,
                    <br />
                    <span className="text-bone-3">and how it fits together.</span>
                  </h1>
                </Reveal>

                <Reveal delay={0.1}>
                  <p className="lead mt-8 max-w-lg">
                    Most engagements start with{" "}
                    <Link
                      href="/services/revenue-operations-consultant"
                      className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                    >
                      revenue operations consulting
                    </Link>{" "}
                    and narrow from there. Everything below covers one piece of that —
                    routing, attribution, forecasting, retention — or the platform it runs on.
                  </p>
                </Reveal>
              </div>

              <Reveal delay={0.14}>
                <nav aria-label="Service areas">
                  <p className="tag flex items-baseline justify-between gap-4 border-b border-rule-2 pb-3">
                    <span>Contents</span>
                    <span className="tabular-nums">{total} guides</span>
                  </p>
                  <ol>
                    {sections.map((group, i) => (
                      <li key={group.id}>
                        <a
                          href={`#${group.id}`}
                          className="group flex items-baseline gap-4 border-b border-rule py-3.5 transition-colors hover:text-signal"
                        >
                          <span className="font-mono text-[12px] text-bone-3 tabular-nums transition-colors group-hover:text-signal">
                            {pad(i + 1)}
                          </span>
                          <span className="text-[16px] text-bone transition-colors group-hover:text-signal">
                            {group.label}
                          </span>
                          <span className="tag ml-auto shrink-0 tabular-nums">{group.count}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </Reveal>
            </div>
          </div>
        </section>

        {/* The one page that matters most, pulled out of the list. */}
        <section aria-label="Start here" className="border-b border-rule bg-ground-2">
          <div className="shell grid gap-x-16 gap-y-7 py-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:py-11">
            <div>
              <p className="tag text-signal">Start here</p>
              <h2 className="mt-3 font-display text-[clamp(1.5rem,2.8vw,2.05rem)] leading-[1.08] font-semibold tracking-[-0.03em]">
                Revenue operations consulting
              </h2>
              <p className="copy mt-3 max-w-xl">
                If you are not sure which of the {total} below applies, this is the overview the
                rest hangs off — what RevOps covers, what we own, and what changes.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/services/revenue-operations-consultant" className="btn btn-primary">
                Read the overview
              </Link>
              <Link href="/#contact" className="btn btn-secondary">
                Discuss a project
              </Link>
            </div>
          </div>
        </section>

        {/* The index proper. Group header stays put while its rows scroll. */}
        <section className="section">
          <div className="shell border-t border-rule-2">
            {sections.map((group, gi) => (
              <Reveal key={group.id} delay={gi === 0 ? 0 : 0.04}>
                <div
                  id={group.id}
                  className="grid scroll-mt-[100px] gap-x-14 gap-y-6 border-b border-rule py-10 md:grid-cols-[minmax(0,0.4fr)_minmax(0,1fr)] md:py-14"
                >
                  <div className="md:sticky md:top-[100px] md:self-start">
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-[12px] tracking-[0.11em] text-signal">
                        {pad(gi + 1)}
                      </span>
                      <h2 className="font-display text-[clamp(1.55rem,3vw,2.15rem)] leading-none font-semibold tracking-[-0.03em] text-bone">
                        {group.label}
                      </h2>
                    </div>
                    <p className="copy-sm mt-3.5 max-w-xs md:pl-[36px]">{group.intro}</p>
                  </div>

                  {/* The rule lives on the li, not the link: `last:` on the link
                      would match every one of them, since each link is the only
                      child of its own li. */}
                  <ul>
                    {group.items.map((item) => (
                      <li key={item.href} className="border-b border-rule last:border-b-0">
                        <Link
                          href={item.href}
                          className="group flex flex-wrap items-baseline gap-x-4 gap-y-1 py-4"
                        >
                          <span className="font-mono text-[11px] tracking-[0.1em] text-bone-3 tabular-nums transition-colors group-hover:text-signal">
                            {item.n}
                          </span>
                          <span className="font-display text-[17px] font-medium text-bone transition-colors group-hover:text-signal">
                            {item.label}
                          </span>
                          <span className="copy-sm">{item.blurb}</span>
                          <span
                            aria-hidden
                            className="ml-auto font-mono text-[14px] text-signal opacity-0 transition-opacity group-hover:opacity-100"
                          >
                            →
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Symptom → page. The printed sheet, same as the studies on the home page. */}
        <section className="on-paper section border-t border-rule">
          <div className="shell">
            <Reveal>
              <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:items-end lg:gap-16">
                <h2 className="display-2">Not sure which piece you need?</h2>
                <p className="lead">
                  Most teams arrive with a symptom rather than a diagnosis. Find yours below —
                  it usually points at the wrong system, not the wrong team.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <ul className="mt-14 border-t border-rule-2">
                {triage.map(([symptom, href, label]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="group grid items-baseline gap-x-8 gap-y-2 border-b border-rule py-5 md:grid-cols-[minmax(0,1fr)_minmax(0,0.5fr)]"
                    >
                      <span className="flex items-baseline gap-4 text-[17px] leading-[1.5] text-bone">
                        <span
                          aria-hidden
                          className="h-[7px] w-[7px] shrink-0 translate-y-[-2px] bg-oxide"
                        />
                        &ldquo;{symptom}&rdquo;
                      </span>
                      <span className="flex items-baseline gap-3 pl-[23px] text-[16px] text-signal md:pl-0">
                        <span
                          aria-hidden
                          className="h-px w-7 shrink-0 translate-y-[-4px] bg-signal transition-all duration-300 group-hover:w-11"
                        />
                        {label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <FinalCta />
      </main>

      <Footer />
    </>
  )
}
