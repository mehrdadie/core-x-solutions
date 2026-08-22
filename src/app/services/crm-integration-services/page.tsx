import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import Reveal from "@/components/ui/Reveal"

const title = "CRM Integration Services | HubSpot, Salesforce, Zoho"
const description = "Connect your revenue stack. Expert CRM integration for HubSpot, Salesforce, Zoho, and custom platforms. Eliminate data silos and automate workflows."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/crm-integration-services" },
  openGraph: {
    type: "article",
    url: `${profile.url}/services/crm-integration-services`,
    siteName: profile.name,
    title,
    description,
    locale: "en_GB",
  },
  twitter: { card: "summary_large_image", title, description },
}

export default function CRMIntegrationServicesPage() {
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
                  ← Back to home
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-10 font-display text-[clamp(2.3rem,5.6vw,4.2rem)] leading-[1.02] font-semibold tracking-[-0.035em]">
                CRM Integration Services: Connect Your Revenue Stack
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="lead mt-8">
                Transform disconnected systems into a unified revenue engine. Expert CRM integration for HubSpot, Salesforce, Zoho, and custom platforms.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell space-y-16 md:space-y-20">
            <Reveal>
              <article>
                <h2 className="font-display text-[1.8rem] md:text-[2.2rem] leading-[1.1] font-semibold mb-6">
                  CRM Integration We Provide
                </h2>
                <div className="space-y-6 text-[15px] leading-[1.6]">
                  {[
                    {
                      service: "HubSpot Integration",
                      desc: "Gmail, Outlook, Shopify, PowerBI, custom APIs. We connect HubSpot to your entire tech stack.",
                    },
                    {
                      service: "Salesforce Integration",
                      desc: "Marketing automation sync, analytics platforms, industry-specific connectors, and custom APIs.",
                    },
                    {
                      service: "Zoho CRM Integration",
                      desc: "Zoho Books (accounting), Zoho Campaigns (email), Zoho Desk (support), and external systems.",
                    },
                    {
                      service: "Custom API Integrations",
                      desc: "Built-to-spec integrations for proprietary systems, legacy databases, or unique use cases.",
                    },
                    {
                      service: "Data Migration & Cleanup",
                      desc: "Move data between systems, deduplicate records, and establish data quality standards.",
                    },
                  ].map((item) => (
                    <div key={item.service}>
                      <h3 className="font-semibold text-[1.05rem] mb-2">{item.service}</h3>
                      <p className="text-bone-2">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article>
                <h2 className="font-display text-[1.8rem] md:text-[2.2rem] leading-[1.1] font-semibold mb-6">
                  Why CRM Integration Matters
                </h2>
                <div className="space-y-4 text-[15px] leading-[1.65] text-bone-2">
                  <p>
                    <strong>Single source of truth.</strong> When your CRM, marketing automation, and analytics are connected, everyone has access to the same data. No more conflicting numbers.
                  </p>
                  <p>
                    <strong>Eliminate manual data entry.</strong> Automations sync data between systems, saving teams 10+ hours per week and eliminating human error.
                  </p>
                  <p>
                    <strong>Real-time lead scoring & routing.</strong> Leads are automatically scored and routed to the right rep the moment they arrive. No delays, no dropped leads.
                  </p>
                  <p>
                    <strong>Improved reporting & forecasting.</strong> Accurate pipeline forecasts require clean, integrated data. When systems are connected, predictions improve by 30-40%.
                  </p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <article>
                <h2 className="font-display text-[1.8rem] md:text-[2.2rem] leading-[1.1] font-semibold mb-6">
                  Integration Architecture
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-[1.05rem] mb-3">Our Approach</h3>
                    <p className="text-[15px] leading-[1.6] text-bone-2 mb-4">
                      We use three proven methods based on your complexity and budget:
                    </p>
                    <ul className="space-y-3 text-[15px] leading-[1.6]">
                      <li>
                        <strong>API-based:</strong> Direct, real-time connections for high-volume sync and custom logic.
                      </li>
                      <li>
                        <strong>Middleware platforms:</strong> n8n, Make, or Zapier for pre-built connectors and easy maintenance.
                      </li>
                      <li>
                        <strong>Custom middleware:</strong> Build a custom integration layer for unique requirements.
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-sm border-2 border-signal/20 bg-signal/5 p-6">
                    <p className="font-semibold text-bone mb-3">Success Factors</p>
                    <ul className="space-y-2 text-[14px] text-bone-2">
                      <li>• Data sync frequency (real-time, hourly, daily)</li>
                      <li>• Error handling & retry logic</li>
                      <li>• Field mapping & data transformation</li>
                      <li>• Audit trails & monitoring</li>
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.15}>
              <article>
                <h2 className="font-display text-[1.8rem] md:text-[2.2rem] leading-[1.1] font-semibold mb-6">
                  CRM Integration Success Metrics
                </h2>
                <div className="space-y-3 text-[15px] leading-[1.6]">
                  {[
                    ["Data Quality Score", "100% accuracy on critical fields (email, phone, company)"],
                    ["Sync Completion Rate", "99.9% of records sync without error"],
                    ["Time to Generate Reports", "Automated reports ready within 1 hour of data close"],
                    ["Lead Routing Accuracy", "95%+ of leads routed to correct owner on first attempt"],
                  ].map(([metric, target], i) => (
                    <div key={i} className="flex justify-between items-baseline border-b border-rule pb-2">
                      <span className="font-semibold">{metric}</span>
                      <span className="text-bone-2 text-[14px]">{target}</span>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="rounded-sm border-2 border-signal/20 bg-signal/5 p-6 md:p-8">
                <p className="font-semibold text-bone mb-3">Get expert CRM integration help</p>
                <p className="text-[15px] text-bone-2 mb-4">
                  Let a <Link href="/services/revenue-operations-consultant" className="text-signal hover:underline">
                    revenue operations consultant
                  </Link>{" "}
                  design and implement your integration strategy.
                </p>
                <Link
                  href="#contact"
                  className="inline-block px-5 py-2.5 bg-signal text-pit font-semibold rounded-sm hover:bg-signal/90 transition-colors"
                >
                  Schedule Your Integration Audit
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
