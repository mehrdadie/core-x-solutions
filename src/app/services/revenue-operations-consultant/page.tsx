import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import RelatedServices from "@/components/services/RelatedServices"
import Reveal from "@/components/ui/Reveal"

const title = "Revenue Operations Consultant | RevOps Consulting Services"
const description =
  "Transform your revenue operations with expert RevOps consulting. Align sales, marketing, and customer success through data-driven strategy and automation."

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
  },
  twitter: { card: "summary_large_image", title, description },
}

export default function RevenueOperationsConsultantPage() {
  return (
    <>
      <Header />

      <main id="main">
        {/* Hero Section */}
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
                Revenue Operations Consultant: Align Your Revenue Stack
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="lead mt-8">
                Maximize revenue pipeline efficiency with data-driven RevOps strategy. We align
                sales, marketing, and customer success through integrated systems, automation, and
                insights.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Main Content */}
        <section className="on-paper section">
          <div className="shell border-t border-rule-2">
            {/* CTA Box Above Fold */}
            <Reveal>
              <div className="panel border-l-2 border-l-signal p-6 md:p-8">
                <p className="font-semibold text-signal mb-4">
                  Ready to transform your revenue operations?
                </p>
                <Link href="#contact" className="btn btn-primary">
                  Schedule Your Free RevOps Audit
                </Link>
              </div>
            </Reveal>

            {/* Section 1: Why RevOps Matters */}
            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Why Your Revenue Operations Strategy Matters
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    <p>
                      Revenue operations bridges the critical gap between marketing, sales, and
                      customer success. When these teams operate in silos, you lose visibility into
                      the full customer journey—leading to misaligned incentives, duplicated
                      efforts, and leaking pipeline.
                    </p>
                    <p>
                      RevOps creates a unified, data-driven foundation where every team speaks the
                      same language. The result? Faster sales cycles, reduced churn, predictable
                      revenue, and a culture of accountability.
                    </p>
                    <p>
                      <strong>Key outcomes:</strong> Companies with mature RevOps grow 20% faster,
                      close deals 25% quicker, and reduce customer acquisition costs by 30%.
                    </p>
                    <p>
                      <Link
                        href="/services/what-is-revops"
                        className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                      >
                        Learn RevOps fundamentals →
                      </Link>
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>

            {/* Section 2: Our 5-Step Approach */}
            <Reveal delay={0.1}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Our 5-Step Revenue Operations Approach
                </h2>

                <div className="min-w-0">
                  <div className="space-y-8">
                    {[
                      {
                        step: 1,
                        title: "Audit Current Tech Stack",
                        desc: "We map your existing tools—HubSpot, Salesforce, Zoho, marketing automation, analytics—and identify data gaps and integration opportunities.",
                      },
                      {
                        step: 2,
                        title: "Map Data Flows & Revenue Leaks",
                        desc: "We trace how data moves between systems, identify where it breaks down, and pinpoint where revenue is leaking.",
                      },
                      {
                        step: 3,
                        title: "Design RevOps Architecture",
                        desc: "We design a unified RevOps structure: lead routing, attribution models, customer scoring, and KPI dashboards.",
                      },
                      {
                        step: 4,
                        title: "Implement Automation & Dashboards",
                        desc: "We build automated workflows, connect your systems, and create real-time dashboards for sales, marketing, and leadership.",
                      },
                      {
                        step: 5,
                        title: "Monitor & Optimize",
                        desc: "We establish monitoring protocols, train your team, and continuously optimize as your business evolves.",
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

            {/* Section 3: Core Expertise */}
            <Reveal delay={0.15}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  RevOps Services We Deliver
                </h2>

                <div className="min-w-0">
                  <div className="space-y-8">
                    <div>
                      <h3 className="font-semibold text-[1.1rem] mb-3">
                        CRM Implementation & Integration
                      </h3>
                      <ul className="space-y-2 text-[15px] leading-[1.6] text-bone-2">
                        <li>• HubSpot RevOps consulting (workflows, properties, custom objects)</li>
                        <li>• Salesforce RevOps consulting (automation, flows, role hierarchy)</li>
                        <li>• Zoho CRM automation and configuration</li>
                        <li>
                          •{" "}
                          <Link
                            href="/services/crm-integration-services"
                            className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                          >
                            Data automation across tools
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-[1.1rem] mb-3">Revenue Intelligence</h3>
                      <ul className="space-y-2 text-[15px] leading-[1.6] text-bone-2">
                        <li>
                          •{" "}
                          <Link
                            href="/services/marketing-attribution-guide"
                            className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                          >
                            Marketing attribution setup
                          </Link>
                        </li>
                        <li>
                          •{" "}
                          <Link
                            href="/services/revenue-attribution-models"
                            className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                          >
                            Revenue attribution modeling
                          </Link>
                        </li>
                        <li>
                          •{" "}
                          <Link
                            href="/services/lead-routing-guide"
                            className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                          >
                            Lead scoring & routing
                          </Link>
                        </li>
                        <li>• Customer journey analytics and health scoring</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-[1.1rem] mb-3">Operational Efficiency</h3>
                      <ul className="space-y-2 text-[15px] leading-[1.6] text-bone-2">
                        <li>
                          •{" "}
                          <Link
                            href="/services/data-automation-consultant"
                            className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                          >
                            Sales process automation
                          </Link>
                        </li>
                        <li>
                          •{" "}
                          <Link
                            href="/services/automated-reporting-guide"
                            className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                          >
                            Reporting & dashboards
                          </Link>
                        </li>
                        <li>• Team training & process documentation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>

            {/* Section 4: Comparison Table */}
            <Reveal delay={0.2}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  RevOps Consultant vs. DIY vs. In-House
                </h2>

                <div className="min-w-0">
                  <div className="overflow-x-auto">
                    <table className="w-full text-[15px] leading-[1.6]">
                      <thead>
                        <tr className="border-b-2 border-rule">
                          <th className="text-left py-3 px-3 font-semibold">Metric</th>
                          <th className="text-left py-3 px-3 font-semibold">Consultant</th>
                          <th className="text-left py-3 px-3 font-semibold">DIY</th>
                          <th className="text-left py-3 px-3 font-semibold">In-House Hire</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          [
                            "Speed to Implementation",
                            "Fast (3-6 months)",
                            "6-12 months",
                            "3-6 months",
                          ],
                          [
                            "Cost",
                            "High upfront",
                            "Medium ongoing",
                            "Very High (salary + benefits)",
                          ],
                          ["Expertise", "Full-stack RevOps", "Limited/specialized", "Specialized"],
                          ["Scalability", "Flexible", "Rigid", "Fixed cost"],
                          ["Knowledge Transfer", "Documented", "Minimal", "Ongoing"],
                        ].map((row, i) => (
                          <tr
                            key={i}
                            className="border-b border-rule hover:bg-signal/5 transition-colors"
                          >
                            <td className="py-3 px-3 font-semibold">{row[0]}</td>
                            <td className="py-3 px-3">{row[1]}</td>
                            <td className="py-3 px-3">{row[2]}</td>
                            <td className="py-3 px-3">{row[3]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-[15px] text-bone-2 mt-6">
                    <strong>Bottom line:</strong> Consultants deliver faster results without adding
                    headcount overhead. You get full-stack expertise, knowledge transfer, and
                    flexibility.
                  </p>
                </div>
              </article>
            </Reveal>

            {/* Section 5: FAQ */}
            <Reveal delay={0.25}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Frequently Asked Questions
                </h2>

                <div className="min-w-0">
                  <div className="space-y-6">
                    {[
                      {
                        q: "What skills does a RevOps consultant need?",
                        a: "Strategic thinking, deep CRM expertise, data analysis, automation knowledge, and cross-functional leadership. We bring all of these.",
                      },
                      {
                        q: "How much does RevOps consulting cost?",
                        a: "Pricing varies by project scope and complexity. Typical engagements range from $10K-50K depending on your stack and goals. We provide custom quotes after discovery.",
                      },
                      {
                        q: "How long does RevOps implementation take?",
                        a: "Full stack implementation typically takes 3-6 months. Quick wins (lead routing, basic automation) can be live in 4-6 weeks.",
                      },
                      {
                        q: "What's the ROI of hiring a RevOps consultant?",
                        a: "Typical ROI is 3-5x within the first year through pipeline growth, faster cycles, and operational efficiency gains. Many clients see payback within 6 months.",
                      },
                      {
                        q: "Do you work with my CRM (HubSpot/Salesforce/Zoho)?",
                        a: "Yes. We have deep expertise across HubSpot, Salesforce, Zoho, and other major platforms. We'll work with whatever your business uses.",
                      },
                    ].map((item, i) => (
                      <details key={i} className="group border-b border-rule py-4 cursor-pointer">
                        <summary className="font-semibold text-[16px] flex items-center justify-between cursor-pointer hover:text-signal transition-colors">
                          {item.q}
                          <span className="text-[12px] ml-4 group-open:rotate-180 transition-transform">
                            ▼
                          </span>
                        </summary>
                        <p className="mt-4 text-[15px] leading-[1.6] text-bone-2">{item.a}</p>
                      </details>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>

            {/* Mid-Page CTA */}
            <Reveal delay={0.3}>
              <div className="panel border-l-2 border-l-signal p-6 md:p-8">
                <p className="font-semibold text-[1.1rem] text-bone mb-3">
                  Ready to transform your revenue operations?
                </p>
                <p className="copy mb-5">
                  Get a free RevOps audit and discover where your revenue is leaking.
                </p>
                <Link href="#contact" className="btn btn-primary">
                  Get a Free RevOps Audit
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
