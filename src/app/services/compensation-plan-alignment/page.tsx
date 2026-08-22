import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import Reveal from "@/components/ui/Reveal"

const title = "Sales Compensation Plan Design | Align Incentives"
const description = "Design sales comp plans aligned with RevOps goals. Base pay, commission structure, SPIFs. Motivate the right behaviors."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/compensation-plan-alignment" },
  openGraph: {
    type: "article",
    url: `${profile.url}/services/compensation-plan-alignment`,
    siteName: profile.name,
    title,
    description,
    locale: "en_GB",
  },
  twitter: { card: "summary_large_image", title, description },
}

export default function CompensationPlanAlignmentPage() {
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
                Compensation Plan Alignment: Motivate the Right Behaviors
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="lead mt-8">
                Sales compensation drives behavior. Misaligned comp incentivizes the wrong things. Align comp with strategy. Get results.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell space-y-16 md:space-y-20">
            <Reveal>
              <article>
                <h2 className="font-display text-[1.8rem] md:text-[2.2rem] leading-[1.1] font-semibold mb-6">
                  Compensation Components
                </h2>
                <div className="space-y-4 text-[15px] leading-[1.65] text-bone-2">
                  <p><strong>Base salary:</strong> 40-50% of target comp. Attracts reps. Protects against churn.</p>
                  <p><strong>Commission (revenue):</strong> 50-60% of target comp. Tied to closed deals. Primary driver.</p>
                  <p><strong>Quota types:</strong> Revenue quota (primary) + activity quota (calls, meetings). Balance both.</p>
                  <p><strong>SPIFs (special incentives):</strong> Time-limited bonuses for specific behaviors: new logos, expansion, territory growth.</p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article>
                <h2 className="font-display text-[1.8rem] md:text-[2.2rem] leading-[1.1] font-semibold mb-6">
                  Alignment Examples
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      goal: "Fast sales cycle",
                      comp: "Commission for early deal movement. Bonus for deal close dates.",
                    },
                    {
                      goal: "Deal quality",
                      comp: "Commission reduces if deal is returned. Penalize low-quality deals.",
                    },
                    {
                      goal: "Expansion focus",
                      comp: "Higher commission on expansion deals. SPIF for upsell/cross-sell.",
                    },
                    {
                      goal: "Renewal success",
                      comp: "Shared commission between sales and CS. Both rewarded for renewal.",
                    },
                  ].map((item) => (
                    <div key={item.goal} className="flex justify-between pb-4 border-b border-rule">
                      <span className="font-semibold">{item.goal}</span>
                      <span className="text-bone-2 text-[14px]">{item.comp}</span>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-sm border-2 border-signal/20 bg-signal/5 p-6 md:p-8">
                <p className="font-semibold text-bone mb-3">Design aligned compensation</p>
                <p className="text-[15px] text-bone-2 mb-4">
                  Work with a consultant to align sales comp with your RevOps strategy.
                </p>
                <Link
                  href="#contact"
                  className="inline-block px-5 py-2.5 bg-signal text-pit font-semibold rounded-sm hover:bg-signal/90 transition-colors"
                >
                  Comp Plan Review
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
