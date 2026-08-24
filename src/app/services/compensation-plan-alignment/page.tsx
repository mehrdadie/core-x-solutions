import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import RelatedServices from "@/components/services/RelatedServices"
import Reveal from "@/components/ui/Reveal"

const title = "Sales Compensation Plan Design | Align Incentives"
const description =
  "Design sales comp plans aligned with RevOps goals. Base pay, commission structure, SPIFs. Motivate the right behaviors."

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
                <Link href="/services" className="tag transition-colors hover:text-signal">
                  ← All services
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
                Sales compensation drives behavior. Misaligned comp incentivizes the wrong things.
                Align comp with strategy. Get results.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell border-t border-rule-2">
            <Reveal>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Compensation Components
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    <p>
                      <strong>Base salary:</strong> 40-50% of target comp. Attracts reps. Protects
                      against churn.
                    </p>
                    <p>
                      <strong>Commission (revenue):</strong> 50-60% of target comp. Tied to closed
                      deals. Primary driver.
                    </p>
                    <p>
                      <strong>Quota types:</strong> Revenue quota (primary) + activity quota (calls,
                      meetings). Balance both.
                    </p>
                    <p>
                      <strong>SPIFs (special incentives):</strong> Time-limited bonuses for specific
                      behaviors: new logos, expansion, territory growth.
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Alignment Examples
                </h2>

                <div className="min-w-0">
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
                      <div
                        key={item.goal}
                        className="flex justify-between pb-4 border-b border-rule"
                      >
                        <span className="font-semibold">{item.goal}</span>
                        <span className="text-bone-2 text-[14px]">{item.comp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="panel border-l-2 border-l-signal p-6 md:p-8">
                <p className="font-semibold text-bone mb-3">Design aligned compensation</p>
                <p className="copy mb-5">
                  Work with a consultant to align sales comp with your RevOps strategy.
                </p>
                <Link href="#contact" className="btn btn-primary">
                  Comp Plan Review
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <RelatedServices current="/services/compensation-plan-alignment" />

        <FinalCta />
      </main>

      <Footer />
    </>
  )
}
