import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import Reveal from "@/components/ui/Reveal"

const title = "Win/Loss Analysis | Learn From Every Deal"
const description = "Analyze your wins and losses. Identify why you win, why you lose, where to compete. Turn deal outcomes into strategy."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/win-loss-analysis" },
  openGraph: {
    type: "article",
    url: `${profile.url}/services/win-loss-analysis`,
    siteName: profile.name,
    title,
    description,
    locale: "en_GB",
  },
  twitter: { card: "summary_large_image", title, description },
}

export default function WinLossAnalysisPage() {
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
                Win/Loss Analysis: Learn From Every Deal
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="lead mt-8">
                Why did you lose to a competitor? Why did you win that deal? The data is in your CRM. Extract it, analyze it, improve.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell space-y-16 md:space-y-20">
            <Reveal>
              <article>
                <h2 className="font-display text-[1.8rem] md:text-[2.2rem] leading-[1.1] font-semibold mb-6">
                  Building Win/Loss Reporting
                </h2>
                <div className="space-y-4 text-[15px] leading-[1.65] text-bone-2">
                  <p>
                    <strong>Capture the reasons.</strong> When a deal closes or is lost, log why in a standardized field: "lost to competitor X", "budget cut", "scope misalignment".
                  </p>
                  <p>
                    <strong>Aggregate by reason.</strong> Weekly: How many deals were we losing to price? How many to competitor features?
                  </p>
                  <p>
                    <strong>Identify patterns.</strong> If you're losing 60% of deals to competitor X, that's your focus area.
                  </p>
                  <p>
                    <strong>Close the loop.</strong> Share findings with marketing and product. Adapt messaging and positioning.
                  </p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article>
                <h2 className="font-display text-[1.8rem] md:text-[2.2rem] leading-[1.1] font-semibold mb-6">
                  Win/Loss Metrics
                </h2>
                <div className="space-y-4 text-[15px] leading-[1.65] text-bone-2">
                  {[
                    ["Win rate by segment", "Identify where you're strong"],
                    ["Average win size", "Are your wins growing?"],
                    ["Common loss reasons", "Where to focus improvement"],
                    ["Win vs competitor", "Who are you beating?"],
                  ].map(([metric, insight], i) => (
                    <div key={i} className="flex justify-between pb-3 border-b border-rule">
                      <span className="font-semibold">{metric}</span>
                      <span className="text-bone-2 text-[14px]">{insight}</span>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-sm border-2 border-signal/20 bg-signal/5 p-6 md:p-8">
                <p className="font-semibold text-bone mb-3">Set up win/loss analysis</p>
                <p className="text-[15px] text-bone-2 mb-4">
                  Turn deal outcomes into strategy with automated win/loss reporting.
                </p>
                <Link
                  href="#contact"
                  className="inline-block px-5 py-2.5 bg-signal text-pit font-semibold rounded-sm hover:bg-signal/90 transition-colors"
                >
                  Get Win/Loss Reporting Built
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
