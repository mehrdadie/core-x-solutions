import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import RelatedServices from "@/components/services/RelatedServices"
import Reveal from "@/components/ui/Reveal"

const title = "Win/Loss Analysis | Learn From Every Deal"
const description =
  "Analyse your wins and losses. Identify why you win, why you lose, where to compete. Turn deal outcomes into strategy."

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
    images: [{ url: "/services/opengraph-image", width: 1200, height: 630 }],
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
                <Link href="/services" className="tag transition-colors hover:text-signal">
                  ← All services
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
                Why did you lose to a competitor? Why did you win that deal? The data is in your
                CRM. Extract it, analyse it, improve.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell border-t border-rule-2">
            <Reveal>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Building Win/Loss Reporting
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    <p>
                      <strong>Capture the reasons.</strong> When a deal closes or is lost, log why
                      in a standardised field: "lost to competitor X", "budget cut", "scope
                      misalignment".
                    </p>
                    <p>
                      <strong>Aggregate by reason.</strong> Weekly: How many deals were we losing to
                      price? How many to competitor features?
                    </p>
                    <p>
                      <strong>Identify patterns.</strong> If you're losing 60% of deals to
                      competitor X, that's your focus area.
                    </p>
                    <p>
                      <strong>Close the loop.</strong> Share findings with marketing and product.
                      Adapt messaging and positioning.
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Win/Loss Metrics
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
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
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="panel border-l-2 border-l-signal p-6 md:p-8">
                <p className="font-semibold text-bone mb-3">Set up win/loss analysis</p>
                <p className="copy mb-5">
                  Turn deal outcomes into strategy with automated win/loss reporting.
                </p>
                <Link href="#contact" className="btn btn-primary">
                  Get Win/Loss Reporting Built
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <RelatedServices current="/services/win-loss-analysis" />

        <FinalCta />
      </main>

      <Footer />
    </>
  )
}
