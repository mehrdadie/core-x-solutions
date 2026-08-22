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

const groups = [
  {
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

export default function ServicesIndexPage() {
  return (
    <>
      <Header />

      <main id="main">
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

            <Reveal delay={0.05}>
              <h1 className="mt-10 font-display text-[clamp(2.3rem,5.6vw,4.2rem)] leading-[1.02] font-semibold tracking-[-0.035em]">
                What we do, and how it fits together
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="lead mt-8 max-w-[62ch]">
                Most engagements start with{" "}
                <Link href="/services/revenue-operations-consultant" className="text-signal hover:underline">
                  revenue operations consulting
                </Link>{" "}
                and narrow from there. The guides below cover the individual pieces — routing,
                attribution, forecasting, retention — and the platforms they run on.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell space-y-16 md:space-y-20">
            {groups.map((group, gi) => (
              <Reveal key={group.label} delay={gi === 0 ? 0 : 0.04}>
                <article>
                  <h2 className="font-display text-[1.8rem] md:text-[2.2rem] leading-[1.1] font-semibold">
                    {group.label}
                  </h2>
                  <p className="mt-3 text-[15px] leading-[1.65] text-bone-2">{group.intro}</p>

                  <ul className="mt-8">
                    {group.items.map(([href, label, blurb]) => (
                      <li key={href}>
                        <Link
                          href={href}
                          className="group flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-rule py-4 transition-colors hover:text-signal"
                        >
                          <span className="text-[16px] font-semibold text-bone transition-colors group-hover:text-signal">
                            {label}
                          </span>
                          <span className="text-[14px] text-bone-2">{blurb}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}

            <Reveal delay={0.05}>
              <div className="rounded-sm border-2 border-signal/20 bg-signal/5 p-6 md:p-8">
                <p className="font-semibold text-bone mb-3">Not sure which piece you need?</p>
                <p className="text-[15px] text-bone-2 mb-4">
                  Most teams come to us with a symptom, not a diagnosis. Describe what is breaking and
                  we will tell you where it actually starts.
                </p>
                <Link
                  href="/#contact"
                  className="inline-block px-5 py-2.5 bg-signal text-pit font-semibold rounded-sm hover:bg-signal/90 transition-colors"
                >
                  Discuss a project
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <FinalCta />
      </main>

      <Footer />
    </>
  )
}
