import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import Reveal from "@/components/ui/Reveal"

const title = "Marketing Attribution Guide | Track Campaign ROI"
const description = "Master marketing attribution. Track which campaigns and channels drive qualified leads. Measure ROI accurately and optimize your marketing spend."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/marketing-attribution-guide" },
  openGraph: {
    type: "article",
    url: `${profile.url}/services/marketing-attribution-guide`,
    siteName: profile.name,
    title,
    description,
    locale: "en_GB",
  },
  twitter: { card: "summary_large_image", title, description },
}

export default function MarketingAttributionGuidePage() {
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
                Marketing Attribution Guide: Prove Your Campaigns Work
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="lead mt-8">
                Stop guessing which campaigns drive revenue. Master marketing attribution to measure true ROI, optimize budgets, and build credibility with leadership.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell space-y-16 md:space-y-20">
            <Reveal>
              <article>
                <h2 className="font-display text-[1.8rem] md:text-[2.2rem] leading-[1.1] font-semibold mb-6">
                  The Marketing Attribution Gap
                </h2>
                <div className="space-y-4 text-[15px] leading-[1.65] text-bone-2">
                  <p>
                    <strong>Marketing claims credit. Sales questions it.</strong> Without unified attribution, there's no truth. Marketing says campaigns generated leads; sales says those leads weren't qualified.
                  </p>
                  <p>
                    <strong>Budget arguments follow.</strong> "Where should we spend next quarter?" becomes a debate, not a data-driven decision. Unified attribution ends the conflict.
                  </p>
                  <p>
                    <strong>Marketing-sales alignment is the result.</strong> When both teams see the same lead data, reported at the same moment, they can co-own pipeline growth. Let a <Link href="/services/revenue-operations-consultant" className="text-signal hover:underline">
                      revenue operations consultant
                    </Link>{" "}
                    build that alignment.
                  </p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article>
                <h2 className="font-display text-[1.8rem] md:text-[2.2rem] leading-[1.1] font-semibold mb-6">
                  Marketing Attribution Tactics
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      tactic: "UTM Parameter Tracking",
                      desc: "Tag every campaign link with source, medium, and campaign. Flows into CRM and analytics automatically.",
                    },
                    {
                      tactic: "Lead Source Tracking",
                      desc: "Capture how leads enter your funnel: organic search, paid ads, referral, direct, etc.",
                    },
                    {
                      tactic: "Touchpoint Recording",
                      desc: "Log every interaction: email, landing page visit, webinar attendance, ad view. Required for attribution models.",
                    },
                    {
                      tactic: "Multi-Touch Attribution",
                      desc: "Credit multiple campaigns rather than just the last one. Reveals the full customer journey.",
                    },
                    {
                      tactic: "Channel-Level Reporting",
                      desc: "Weekly dashboards showing leads, pipeline, and revenue by channel. Informs weekly budget shifts.",
                    },
                  ].map((item) => (
                    <div key={item.tactic} className="border-l-2 border-signal pl-6">
                      <h3 className="font-semibold text-[1.05rem] mb-2">{item.tactic}</h3>
                      <p className="text-[15px] leading-[1.6] text-bone-2">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <article>
                <h2 className="font-display text-[1.8rem] md:text-[2.2rem] leading-[1.1] font-semibold mb-6">
                  Building Your Marketing Attribution System
                </h2>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <p className="text-[15px] leading-[1.6] text-bone-2">
                      <strong>Layer 1: Tracking infrastructure.</strong> UTM tags, lead source fields, form submissions flowing into your CRM.
                    </p>
                    <p className="text-[15px] leading-[1.6] text-bone-2">
                      <strong>Layer 2: CRM integration.</strong> Marketing automation (HubSpot, Marketo) syncs lead source and touchpoints to your CRM in real-time.
                    </p>
                    <p className="text-[15px] leading-[1.6] text-bone-2">
                      <strong>Layer 3: Attribution rules.</strong> Decide which touchpoints matter most. First campaign that touched them? Last one? All of them equally?
                    </p>
                    <p className="text-[15px] leading-[1.6] text-bone-2">
                      <strong>Layer 4: Reporting.</strong> Weekly dashboards by channel: leads, MQL, SQL, pipeline, revenue. Make it automated.
                    </p>
                  </div>
                  <div className="rounded-sm border-2 border-signal/20 bg-signal/5 p-6">
                    <p className="font-semibold text-bone mb-3">Expected Outcomes</p>
                    <ul className="space-y-2 text-[14px] text-bone-2">
                      <li>• Marketing-sales alignment within 60 days</li>
                      <li>• Lead quality visibility: know which channels deliver highest-intent leads</li>
                      <li>• Budget optimization: shift 20%+ of spend to highest-ROI channels</li>
                      <li>• Forecast confidence: accurate attribution → accurate pipeline forecasts</li>
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-sm border-2 border-signal/20 bg-signal/5 p-6 md:p-8">
                <p className="font-semibold text-bone mb-3">Set up marketing attribution for your business</p>
                <p className="text-[15px] text-bone-2 mb-4">
                  Work with a <Link href="/services/revenue-operations-consultant" className="text-signal hover:underline">
                    RevOps consultant
                  </Link>{" "}
                  to audit your tracking, set up attribution models, and build automated reporting.
                </p>
                <Link
                  href="#contact"
                  className="inline-block px-5 py-2.5 bg-signal text-pit font-semibold rounded-sm hover:bg-signal/90 transition-colors"
                >
                  Get Your Attribution Plan
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
