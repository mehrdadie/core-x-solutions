import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import RelatedServices from "@/components/services/RelatedServices"
import Reveal from "@/components/ui/Reveal"

const title = "HubSpot RevOps Consulting | Implementation & Optimization"
const description =
  "Expert HubSpot RevOps consulting. Workflows, properties, custom objects, lead routing, and automation. Unlock HubSpot's full RevOps potential."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/hubspot-revops-consulting" },
  openGraph: {
    type: "article",
    url: `${profile.url}/services/hubspot-revops-consulting`,
    siteName: profile.name,
    title,
    description,
    locale: "en_GB",
    images: [{ url: "/services/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description },
}

export default function HubSpotRevOpsConsultingPage() {
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
                HubSpot RevOps Consulting: Optimize Your Instance
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="lead mt-8">
                HubSpot is powerful but often underutilized. We unlock its full potential with
                strategic workflows, custom automation, and RevOps best practices.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell border-t border-rule-2">
            <Reveal>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Common HubSpot RevOps Challenges
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    <p>
                      <strong>Workflows are ad-hoc.</strong> Quick automations built one at a time,
                      not part of a unified strategy. Result: conflicting logic, data errors.
                    </p>
                    <p>
                      <strong>Custom properties aren't documented.</strong> Hundreds of properties
                      exist. No one knows what they mean. Data gets stale.
                    </p>
                    <p>
                      <strong>Lead routing is manual.</strong> Leads sit in HubSpot waiting for
                      someone to assign them. Sales misses opportunities.
                    </p>
                    <p>
                      <strong>Reporting is painful.</strong> Custom reports take hours. Dashboards
                      aren't real-time. Leadership flies blind.
                    </p>
                    <p>
                      Let a{" "}
                      <Link
                        href="/services/revenue-operations-consultant"
                        className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                      >
                        HubSpot RevOps consultant
                      </Link>{" "}
                      fix these.
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Our HubSpot RevOps Approach
                </h2>

                <div className="min-w-0">
                  <div className="space-y-8">
                    {[
                      {
                        step: 1,
                        title: "Instance Audit",
                        desc: "Document all workflows, properties, integrations, and custom objects. Identify gaps and optimization opportunities.",
                      },
                      {
                        step: 2,
                        title: "Property Architecture",
                        desc: "Design a clean property schema. Define company, deal, contact, and custom properties. Document naming conventions.",
                      },
                      {
                        step: 3,
                        title: "Workflow Strategy",
                        desc: "Build unified workflows for lead routing, scoring, nurturing, and deal tracking. No conflicts or redundancy.",
                      },
                      {
                        step: 4,
                        title: "Integration Setup",
                        desc: "Connect your tech stack: marketing automation, analytics, accounting, support. Keep data synced in real-time.",
                      },
                      {
                        step: 5,
                        title: "Reporting & Training",
                        desc: "Build dashboards. Train your team. Document everything. Ensure long-term success.",
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
                  HubSpot RevOps Services
                </h2>

                <div className="min-w-0">
                  <ul className="copy">
                    <li className="flex items-start gap-4 border-b border-rule py-3 last:border-b-0">
                      <span aria-hidden className="mt-[9px] h-[7px] w-[7px] shrink-0 bg-signal" />
                      <span>HubSpot workflow strategy and build-out</span>
                    </li>
                    <li className="flex items-start gap-4 border-b border-rule py-3 last:border-b-0">
                      <span aria-hidden className="mt-[9px] h-[7px] w-[7px] shrink-0 bg-signal" />
                      <span>Custom property architecture and documentation</span>
                    </li>
                    <li className="flex items-start gap-4 border-b border-rule py-3 last:border-b-0">
                      <span aria-hidden className="mt-[9px] h-[7px] w-[7px] shrink-0 bg-signal" />
                      <span>Lead routing automation</span>
                    </li>
                    <li className="flex items-start gap-4 border-b border-rule py-3 last:border-b-0">
                      <span aria-hidden className="mt-[9px] h-[7px] w-[7px] shrink-0 bg-signal" />
                      <span>Marketing + sales automation sync</span>
                    </li>
                    <li className="flex items-start gap-4 border-b border-rule py-3 last:border-b-0">
                      <span aria-hidden className="mt-[9px] h-[7px] w-[7px] shrink-0 bg-signal" />
                      <span>
                        <Link
                          href="/services/crm-integration-services"
                          className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                        >
                          HubSpot integrations
                        </Link>{" "}
                        (third-party tools, custom APIs)
                      </span>
                    </li>
                    <li className="flex items-start gap-4 border-b border-rule py-3 last:border-b-0">
                      <span aria-hidden className="mt-[9px] h-[7px] w-[7px] shrink-0 bg-signal" />
                      <span>Dashboard and reporting setup</span>
                    </li>
                    <li className="flex items-start gap-4 border-b border-rule py-3 last:border-b-0">
                      <span aria-hidden className="mt-[9px] h-[7px] w-[7px] shrink-0 bg-signal" />
                      <span>Team training and process documentation</span>
                    </li>
                    <li className="flex items-start gap-4 border-b border-rule py-3 last:border-b-0">
                      <span aria-hidden className="mt-[9px] h-[7px] w-[7px] shrink-0 bg-signal" />
                      <span>Ongoing optimization and maintenance</span>
                    </li>
                  </ul>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="panel border-l-2 border-l-signal p-6 md:p-8">
                <p className="font-semibold text-bone mb-3">Get HubSpot optimized for RevOps</p>
                <p className="copy mb-5">
                  Work with our{" "}
                  <Link
                    href="/services/revenue-operations-consultant"
                    className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                  >
                    HubSpot RevOps expert
                  </Link>{" "}
                  to audit your instance and unlock its full potential.
                </p>
                <Link href="#contact" className="btn btn-primary">
                  Schedule Your HubSpot Audit
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <RelatedServices current="/services/hubspot-revops-consulting" />

        <FinalCta />
      </main>

      <Footer />
    </>
  )
}
