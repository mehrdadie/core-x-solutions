import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import Reveal from "@/components/ui/Reveal"

const title = "What is Revenue Operations? Complete RevOps Definition"
const description = "Understand RevOps: the alignment of sales, marketing, and customer success with data, technology, and process. How RevOps drives business growth."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/what-is-revops" },
  openGraph: {
    type: "article",
    url: `${profile.url}/services/what-is-revops`,
    siteName: profile.name,
    title,
    description,
    locale: "en_GB",
  },
  twitter: { card: "summary_large_image", title, description },
}

export default function WhatIsRevOpsPage() {
  return (
    <>
      <Header />

      <main id="main">
        <section className="border-b border-rule pt-[124px] pb-16 md:pt-[148px] md:pb-20">
          <div className="shell">
            <Reveal>
              <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-rule pb-5">
                <p className="marker">Guide</p>
                <Link href="/" className="tag transition-colors hover:text-signal">
                  ← Back to home
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-10 font-display text-[clamp(2.3rem,5.6vw,4.2rem)] leading-[1.02] font-semibold tracking-[-0.035em]">
                What is Revenue Operations? A Complete Guide for B2B Leaders
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="lead mt-8">
                RevOps is the alignment of sales, marketing, and customer success operations with data, technology, and process. It's the bridge that connects teams, systems, and strategies into a unified revenue engine.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell space-y-16 md:space-y-20">
            <Reveal>
              <article>
                <h2 className="font-display text-[1.8rem] md:text-[2.2rem] leading-[1.1] font-semibold mb-6">
                  Revenue Operations Definition
                </h2>
                <div className="space-y-4 text-[16px] leading-[1.65] text-bone-2">
                  <p>
                    Revenue Operations is the strategic alignment of your sales, marketing, and customer success operations with unified data, technology, and processes. It removes silos between teams and creates a single, accountable structure for revenue growth.
                  </p>
                  <p>
                    In practice, RevOps bridges the gap between marketing lead generation and sales conversion, ensuring that every lead is tracked, qualified, and routed to the right sales rep at the right time. It also extends into customer success to maximize retention and upsell.
                  </p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article>
                <h2 className="font-display text-[1.8rem] md:text-[2.2rem] leading-[1.1] font-semibold mb-6">
                  The Three Pillars of RevOps
                </h2>
                <div className="space-y-8">
                  {[
                    {
                      pillar: "People",
                      desc: "Cross-functional alignment. RevOps requires marketing, sales, and customer success to work together toward shared goals, not siloed KPIs.",
                    },
                    {
                      pillar: "Process",
                      desc: "Standardized workflows. Consistent lead qualification, routing, and handoff processes ensure predictability and accountability.",
                    },
                    {
                      pillar: "Technology",
                      desc: "Connected systems. CRM, marketing automation, analytics, and business intelligence tools are integrated and automated, not disconnected spreadsheets.",
                    },
                  ].map((item) => (
                    <div key={item.pillar} className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-signal/20 text-signal font-semibold text-sm">
                          ✓
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-semibold text-[1.1rem] mb-2">{item.pillar}</h3>
                        <p className="text-[15px] leading-[1.6] text-bone-2">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <article>
                <h2 className="font-display text-[1.8rem] md:text-[2.2rem] leading-[1.1] font-semibold mb-6">
                  RevOps vs. Traditional Sales Ops
                </h2>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-[15px] leading-[1.6]">
                    <thead>
                      <tr className="border-b-2 border-rule">
                        <th className="text-left py-3 px-3 font-semibold">Aspect</th>
                        <th className="text-left py-3 px-3 font-semibold">Sales Ops</th>
                        <th className="text-left py-3 px-3 font-semibold">RevOps</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Scope", "Sales team only", "Sales + Marketing + CS"],
                        ["Focus", "Sales process & CRM", "Full customer journey"],
                        ["KPIs", "Sales velocity, win rate", "Pipeline health, revenue"],
                        ["Tools", "CRM primary", "CRM + MktAuto + Analytics"],
                        ["Alignment", "Sales-focused", "Cross-functional"],
                      ].map((row, i) => (
                        <tr key={i} className="border-b border-rule hover:bg-signal/5 transition-colors">
                          <td className="py-3 px-3 font-semibold">{row[0]}</td>
                          <td className="py-3 px-3">{row[1]}</td>
                          <td className="py-3 px-3">{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-[15px] text-bone-2">
                  <strong>The key difference:</strong> Sales ops optimizes the sales team. RevOps optimizes the entire revenue engine—from lead to customer.
                </p>
              </article>
            </Reveal>

            <Reveal delay={0.15}>
              <article>
                <h2 className="font-display text-[1.8rem] md:text-[2.2rem] leading-[1.1] font-semibold mb-6">
                  Why Companies Need RevOps
                </h2>
                <div className="space-y-4 text-[15px] leading-[1.65] text-bone-2">
                  <p>
                    <strong>3-5x ROI within 18 months.</strong> Companies with mature RevOps see faster pipeline growth, higher close rates, and lower customer acquisition costs.
                  </p>
                  <p>
                    <strong>Faster decision-making.</strong> Real-time dashboards and unified data let leadership make decisions based on fact, not politics or guesswork.
                  </p>
                  <p>
                    <strong>Better data quality.</strong> Single source of truth eliminates duplicate work, conflicting numbers, and finger-pointing between teams.
                  </p>
                  <p>
                    <strong>Predictable revenue.</strong> Standardized processes mean you can forecast accurately and scale without chaos.
                  </p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.2}>
              <article>
                <h2 className="font-display text-[1.8rem] md:text-[2.2rem] leading-[1.1] font-semibold mb-6">
                  Getting Started with RevOps
                </h2>
                <div className="space-y-6">
                  <div>
                    <p className="font-semibold text-[1.1rem] mb-3">The RevOps Journey: 4 Steps</p>
                    <ol className="space-y-4 ml-5">
                      {[
                        ["Audit", "Map your current tools, processes, and data flows. Identify gaps and opportunities."],
                        ["Design", "Create a unified RevOps architecture: lead routing, attribution, KPIs, dashboards."],
                        ["Implement", "Connect your systems, build automations, train your team."],
                        ["Optimize", "Monitor, iterate, and evolve as your business grows."],
                      ].map(([step, desc], i) => (
                        <li key={i} className="text-[15px] leading-[1.6]">
                          <strong>{step}:</strong> {desc}
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className="rounded-sm border-2 border-signal/20 bg-signal/5 p-6">
                    <p className="font-semibold text-bone mb-2">Need expert help setting this up?</p>
                    <p className="text-[15px] text-bone-2 mb-4">
                      Hire a <Link href="/services/revenue-operations-consultant" className="text-signal hover:underline">
                        revenue operations consultant
                      </Link>{" "}
                      to guide your transformation.
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          </div>
        </section>

        <FinalCta />
      </main>

      <Footer />
    </>
  )
}
