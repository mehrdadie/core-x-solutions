import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import RelatedServices from "@/components/services/RelatedServices"
import Reveal from "@/components/ui/Reveal"

const title = "Zoho CRM Automation Consulting | RevOps Setup & Integration"
const description =
  "Zoho CRM automation and RevOps consulting. Workflows, automation rules, Zoho ecosystem integration, and lead routing. Transform Zoho into your revenue stack."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/zoho-crm-automation" },
  openGraph: {
    type: "article",
    url: `${profile.url}/services/zoho-crm-automation`,
    siteName: profile.name,
    title,
    description,
    locale: "en_GB",
    images: [{ url: "/services/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description },
}

export default function ZohoCrmAutomationPage() {
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
                Zoho CRM Automation: Unified Revenue Operations
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="lead mt-8">
                Zoho's ecosystem is powerful but fragmented. We unify Zoho CRM, Books, Campaigns,
                Desk, and external tools into a seamless revenue operation.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell border-t border-rule-2">
            <Reveal>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Why Zoho RevOps is Different
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    <p>
                      <strong>Zoho is an ecosystem, not a single tool.</strong> Zoho CRM, Zoho
                      Books, Zoho Campaigns, Zoho Desk, Zoho Analytics all run separately. Getting
                      them to talk requires strategy.
                    </p>
                    <p>
                      <strong>Affordability vs. complexity.</strong> Zoho is cost-effective but
                      requires more hands-on configuration than HubSpot or Salesforce. Hidden setup
                      costs.
                    </p>
                    <p>
                      <strong>Workflow automation is powerful but underutilized.</strong> Zoho CRM
                      has advanced workflow rules, but most teams use basic setup.
                    </p>
                    <p>
                      <strong>Cross-platform sync is critical.</strong> Data must flow from CRM →
                      Books (accounting) → Analytics (reporting). When it breaks, everything breaks.
                    </p>
                    <p>
                      Our{" "}
                      <Link
                        href="/services/revenue-operations-consultant"
                        className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                      >
                        Zoho RevOps consultant
                      </Link>{" "}
                      unifies it all.
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Our Zoho RevOps Approach
                </h2>

                <div className="min-w-0">
                  <div className="space-y-8">
                    {[
                      {
                        step: 1,
                        title: "Zoho Ecosystem Audit",
                        desc: "Map CRM, Books, Campaigns, Desk, Analytics, and any third-party tools. Identify data gaps and integration points.",
                      },
                      {
                        step: 2,
                        title: "Workflow Strategy",
                        desc: "Design automation rules for lead routing, deal escalation, invoice sync, and customer feedback loops across all Zoho apps.",
                      },
                      {
                        step: 3,
                        title: "Data Architecture",
                        desc: "Define custom fields, layouts, and modules. Ensure data flows consistently from sales → accounting → reporting.",
                      },
                      {
                        step: 4,
                        title: "Integration Setup",
                        desc: "Connect Zoho apps via APIs and webhooks. Integrate third-party tools (email, analytics, support). Automate data sync.",
                      },
                      {
                        step: 5,
                        title: "Reporting & Training",
                        desc: "Build Zoho Analytics dashboards. Train teams. Document everything for long-term success.",
                      },
                    ].map((item) => (
                      <div key={item.step} className="flex gap-6">
                        <div className="flex-shrink-0">
                          <div className="flex h-8 w-8 items-center justify-center border border-signal/40 bg-signal-soft font-mono text-[12px] text-signal">
                            {item.step}
                          </div>
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-semibold text-[16px] mb-2">{item.title}</h3>
                          <p className="copy-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Zoho RevOps Services
                </h2>

                <div className="min-w-0">
                  <ul className="copy">
                    <li className="flex items-start gap-4 border-b border-rule py-3 last:border-b-0">
                      <span aria-hidden className="mt-[9px] h-[7px] w-[7px] shrink-0 bg-signal" />
                      <span>Zoho CRM configuration and customization</span>
                    </li>
                    <li className="flex items-start gap-4 border-b border-rule py-3 last:border-b-0">
                      <span aria-hidden className="mt-[9px] h-[7px] w-[7px] shrink-0 bg-signal" />
                      <span>Workflow automation and business rules</span>
                    </li>
                    <li className="flex items-start gap-4 border-b border-rule py-3 last:border-b-0">
                      <span aria-hidden className="mt-[9px] h-[7px] w-[7px] shrink-0 bg-signal" />
                      <span>Zoho ecosystem integration (Books, Campaigns, Desk, Analytics)</span>
                    </li>
                    <li className="flex items-start gap-4 border-b border-rule py-3 last:border-b-0">
                      <span aria-hidden className="mt-[9px] h-[7px] w-[7px] shrink-0 bg-signal" />
                      <span>
                        <Link
                          href="/services/crm-integration-services"
                          className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                        >
                          Third-party tool integration
                        </Link>{" "}
                        via Zoho APIs
                      </span>
                    </li>
                    <li className="flex items-start gap-4 border-b border-rule py-3 last:border-b-0">
                      <span aria-hidden className="mt-[9px] h-[7px] w-[7px] shrink-0 bg-signal" />
                      <span>Lead routing and deal management automation</span>
                    </li>
                    <li className="flex items-start gap-4 border-b border-rule py-3 last:border-b-0">
                      <span aria-hidden className="mt-[9px] h-[7px] w-[7px] shrink-0 bg-signal" />
                      <span>Zoho Analytics dashboards and reporting</span>
                    </li>
                    <li className="flex items-start gap-4 border-b border-rule py-3 last:border-b-0">
                      <span aria-hidden className="mt-[9px] h-[7px] w-[7px] shrink-0 bg-signal" />
                      <span>Team training and process documentation</span>
                    </li>
                    <li className="flex items-start gap-4 border-b border-rule py-3 last:border-b-0">
                      <span aria-hidden className="mt-[9px] h-[7px] w-[7px] shrink-0 bg-signal" />
                      <span>Ongoing optimization and support</span>
                    </li>
                  </ul>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="panel border-l-2 border-l-signal p-6 md:p-8">
                <p className="font-semibold text-bone mb-3">Unify your Zoho ecosystem for RevOps</p>
                <p className="copy mb-5">
                  Work with our{" "}
                  <Link
                    href="/services/revenue-operations-consultant"
                    className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                  >
                    Zoho RevOps expert
                  </Link>{" "}
                  to audit, configure, and optimize your Zoho instance.
                </p>
                <Link href="#contact" className="btn btn-primary">
                  Schedule Your Zoho Audit
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <RelatedServices current="/services/zoho-crm-automation" />

        <FinalCta />
      </main>

      <Footer />
    </>
  )
}
