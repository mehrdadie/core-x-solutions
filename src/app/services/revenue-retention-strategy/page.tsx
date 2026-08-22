import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import Reveal from "@/components/ui/Reveal"

const title = "Revenue Retention Strategy | Grow Net Revenue Retention"
const description = "Build revenue retention playbook. Prevent churn, drive expansion, achieve 120%+ NRR. Revenue growth without new customers."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/revenue-retention-strategy" },
  openGraph: {
    type: "article",
    url: `${profile.url}/services/revenue-retention-strategy`,
    siteName: profile.name,
    title,
    description,
    locale: "en_GB",
  },
  twitter: { card: "summary_large_image", title, description },
}

export default function RevenueRetentionStrategyPage() {
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
                Revenue Retention: Build Your Retention Engine
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="lead mt-8">
                NRR above 120% means revenue grows without new sales. That's the holy grail. Build systematic retention to get there.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell space-y-16 md:space-y-20">
            <Reveal>
              <article>
                <h2 className="font-display text-[1.8rem] md:text-[2.2rem] leading-[1.1] font-semibold mb-6">
                  The NRR Formula
                </h2>
                <div className="space-y-4 text-[15px] leading-[1.65] text-bone-2">
                  <p>
                    <strong>NRR = (Beginning ARR + Expansion - Churn) / Beginning ARR</strong>
                  </p>
                  <p>Example: Start with $1M. Add $300K expansion. Lose $100K to churn. NRR = ($1M + $300K - $100K) / $1M = 120%</p>
                  <p>Every 1% increase in NRR compounds exponentially. Move from 100% to 120% and your revenue growth accelerates 2x.</p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article>
                <h2 className="font-display text-[1.8rem] md:text-[2.2rem] leading-[1.1] font-semibold mb-6">
                  Three Levers to Improve NRR
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      lever: "1. Reduce Churn",
                      desc: "Prevent cancellations. Health scoring, CS proactive outreach, retention playbooks.",
                      impact: "1-2% improvement",
                    },
                    {
                      lever: "2. Drive Expansion",
                      desc: "Upsell and cross-sell existing customers. Expansion playbooks, scoring, sales involvement.",
                      impact: "5-10% improvement",
                    },
                    {
                      lever: "3. Increase Seat Expansion",
                      desc: "Grow seat count in existing accounts. Activity tracking, usage-based pricing, incentives.",
                      impact: "3-5% improvement",
                    },
                  ].map((item) => (
                    <div key={item.lever} className="border-l-2 border-signal pl-6">
                      <h3 className="font-semibold text-[1.05rem] mb-2">{item.lever}</h3>
                      <p className="text-[15px] text-bone-2 mb-1">{item.desc}</p>
                      <p className="text-[14px] text-signal font-semibold">{item.impact}</p>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-sm border-2 border-signal/20 bg-signal/5 p-6 md:p-8">
                <p className="font-semibold text-bone mb-3">Build your NRR strategy</p>
                <p className="text-[15px] text-bone-2 mb-4">
                  Work with a consultant to improve NRR and build revenue growth from existing customers.
                </p>
                <Link
                  href="#contact"
                  className="inline-block px-5 py-2.5 bg-signal text-pit font-semibold rounded-sm hover:bg-signal/90 transition-colors"
                >
                  Get NRR Strategy Session
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
