import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import RelatedServices from "@/components/services/RelatedServices"
import Reveal from "@/components/ui/Reveal"

const title = "Salesforce RevOps Consulting | Flows, Automation & Optimization"
const description =
  "Expert Salesforce RevOps consulting. Flows, automation, role hierarchy, custom objects, and data governance. Transform Salesforce into your revenue engine."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/salesforce-revops-consulting" },
  openGraph: {
    type: "article",
    url: `${profile.url}/services/salesforce-revops-consulting`,
    siteName: profile.name,
    title,
    description,
    locale: "en_GB",
  },
  twitter: { card: "summary_large_image", title, description },
}

export default function SalesforceRevOpsConsultingPage() {
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
                Salesforce RevOps Consulting: Enterprise Automation
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="lead mt-8">
                Salesforce is complex. Our RevOps experts build scalable automation, clean data
                governance, and unified processes that scale with your enterprise.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell border-t border-rule-2">
            <Reveal>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Salesforce RevOps Challenges
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    <p>
                      <strong>Complexity breeds mistakes.</strong> Custom objects, validation rules,
                      flows, and triggers interact in complex ways. One change breaks something
                      else.
                    </p>
                    <p>
                      <strong>Data governance collapses.</strong> Without rules and monitoring,
                      field values drift. Reports become unreliable. Forecasts fail.
                    </p>
                    <p>
                      <strong>Automation is siloed.</strong> Each team builds their own flows. Logic
                      conflicts. Data duplicates. Integrations fail.
                    </p>
                    <p>
                      <strong>Teams struggle to scale.</strong> Manual processes that worked for 10
                      reps break for 100. New admins don't understand the system.
                    </p>
                    <p>
                      Our{" "}
                      <Link
                        href="/services/revenue-operations-consultant"
                        className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                      >
                        Salesforce RevOps expert
                      </Link>{" "}
                      brings order and scale.
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Our Salesforce RevOps Strategy
                </h2>

                <div className="min-w-0">
                  <div className="space-y-8">
                    {[
                      {
                        step: 1,
                        title: "Salesforce Audit",
                        desc: "Map all custom fields, objects, validation rules, flows, and integrations. Document dependencies and identify technical debt.",
                      },
                      {
                        step: 2,
                        title: "Data Governance Framework",
                        desc: "Establish field standards, data quality rules, and audit trails. Document who owns which data and how it flows.",
                      },
                      {
                        step: 3,
                        title: "Flow & Automation Strategy",
                        desc: "Design unified flows for lead routing, account assignment, escalations, and deal automation. Replace broken logic with clean processes.",
                      },
                      {
                        step: 4,
                        title: "Role & Permission Model",
                        desc: "Design role hierarchy and record access. Ensure reps see only their territory while admins see everything.",
                      },
                      {
                        step: 5,
                        title: "Integration Architecture",
                        desc: "Connect marketing automation, analytics, and other systems. Use platform events and APIs for reliable, real-time sync.",
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
                  Salesforce RevOps Services
                </h2>

                <div className="min-w-0">
                  <ul className="copy">
                    <li className="flex items-start gap-4 border-b border-rule py-3 last:border-b-0">
                      <span aria-hidden className="mt-[9px] h-[7px] w-[7px] shrink-0 bg-signal" />
                      <span>Salesforce architecture design and audit</span>
                    </li>
                    <li className="flex items-start gap-4 border-b border-rule py-3 last:border-b-0">
                      <span aria-hidden className="mt-[9px] h-[7px] w-[7px] shrink-0 bg-signal" />
                      <span>Flow and automation strategy</span>
                    </li>
                    <li className="flex items-start gap-4 border-b border-rule py-3 last:border-b-0">
                      <span aria-hidden className="mt-[9px] h-[7px] w-[7px] shrink-0 bg-signal" />
                      <span>Custom object and field design</span>
                    </li>
                    <li className="flex items-start gap-4 border-b border-rule py-3 last:border-b-0">
                      <span aria-hidden className="mt-[9px] h-[7px] w-[7px] shrink-0 bg-signal" />
                      <span>Role, profile, and permission model design</span>
                    </li>
                    <li className="flex items-start gap-4 border-b border-rule py-3 last:border-b-0">
                      <span aria-hidden className="mt-[9px] h-[7px] w-[7px] shrink-0 bg-signal" />
                      <span>Data governance and quality framework</span>
                    </li>
                    <li className="flex items-start gap-4 border-b border-rule py-3 last:border-b-0">
                      <span aria-hidden className="mt-[9px] h-[7px] w-[7px] shrink-0 bg-signal" />
                      <span>
                        <Link
                          href="/services/crm-integration-services"
                          className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                        >
                          Salesforce integrations
                        </Link>{" "}
                        (marketing automation, analytics, APIs)
                      </span>
                    </li>
                    <li className="flex items-start gap-4 border-b border-rule py-3 last:border-b-0">
                      <span aria-hidden className="mt-[9px] h-[7px] w-[7px] shrink-0 bg-signal" />
                      <span>Advanced reporting and dashboards</span>
                    </li>
                    <li className="flex items-start gap-4 border-b border-rule py-3 last:border-b-0">
                      <span aria-hidden className="mt-[9px] h-[7px] w-[7px] shrink-0 bg-signal" />
                      <span>Admin team training and documentation</span>
                    </li>
                  </ul>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="panel border-l-2 border-l-signal p-6 md:p-8">
                <p className="font-semibold text-bone mb-3">
                  Get Salesforce optimized for enterprise RevOps
                </p>
                <p className="copy mb-5">
                  Work with our{" "}
                  <Link
                    href="/services/revenue-operations-consultant"
                    className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                  >
                    Salesforce RevOps expert
                  </Link>{" "}
                  to audit, redesign, and scale your instance.
                </p>
                <Link href="#contact" className="btn btn-primary">
                  Schedule Your Salesforce Audit
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <RelatedServices current="/services/salesforce-revops-consulting" />

        <FinalCta />
      </main>

      <Footer />
    </>
  )
}
