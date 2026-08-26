import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import RelatedServices from "@/components/services/RelatedServices"
import Reveal from "@/components/ui/Reveal"

const title = "Sales Cycle Analysis | Understand Your Deal Velocity"
const description =
  "Analyse your sales cycle. Identify bottlenecks, predict close dates, reduce time-to-close. Data-driven sales forecasting starts here."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/sales-cycle-analysis" },
  openGraph: {
    type: "article",
    url: `${profile.url}/services/sales-cycle-analysis`,
    siteName: profile.name,
    title,
    description,
    locale: "en_GB",
    images: [{ url: "/services/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description },
}

export default function SalesCycleAnalysisPage() {
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
                Sales Cycle Analysis: Reduce Time-to-Close
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="lead mt-8">
                How long does a deal take to close? Where do deals stall? Understanding your sales
                cycle is the first step to accelerating it.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell border-t border-rule-2">
            <Reveal>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Metrics That Matter
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    <p>
                      <strong>Sales cycle length:</strong> Average days from first contact to close.
                      Industry average is 20-45 days. Yours is probably longer.
                    </p>
                    <p>
                      <strong>Stage velocity:</strong> How long deals spend in each stage. Where do
                      they get stuck? That's your bottleneck.
                    </p>
                    <p>
                      <strong>Win rate by deal size.</strong> &pound;10k deals might close 60% of
                      the time. &pound;100k deals might close 30% of the time. Adjust your targets
                      accordingly.
                    </p>
                    <p>
                      <strong>Days sales outstanding (DSO):</strong> Average days from close to
                      cash. If 30 days, your forecast should assume 30-day lag.
                    </p>
                    <p>
                      Learn to analyse and improve your cycle with a{" "}
                      <Link
                        href="/services/revenue-operations-consultant"
                        className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                      >
                        RevOps consultant
                      </Link>.
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  How to Accelerate Your Cycle
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    <p>
                      <strong>1. Identify bottleneck stages.</strong> If deals spend 30 days in demo
                      and 5 days elsewhere, that's your problem.
                    </p>
                    <p>
                      <strong>2. Set stage timeout rules.</strong> If a deal hasn't moved in 7 days,
                      escalate to manager. Something's wrong.
                    </p>
                    <p>
                      <strong>3. Build qualification earlier.</strong> Bad leads waste weeks in the
                      pipeline. Score leads early to kill bad ones fast.
                    </p>
                    <p>
                      <strong>4. Automate next steps.</strong> No rep should wait for admin work.
                      Automation keeps deals moving.
                    </p>
                    <p>
                      <strong>5. Monitor and iterate.</strong> Measure the impact of each change.
                      Only keep what works.
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="panel border-l-2 border-l-signal p-6 md:p-8">
                <p className="font-semibold text-bone mb-3">Accelerate your sales cycle</p>
                <p className="copy mb-5">
                  Get an analysis of your sales cycle and recommendations to reduce time-to-close.
                </p>
                <Link href="#contact" className="btn btn-primary">
                  Get Your Sales Cycle Analysis
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <RelatedServices current="/services/sales-cycle-analysis" />

        <FinalCta />
      </main>

      <Footer />
    </>
  )
}
