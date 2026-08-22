import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import RelatedServices from "@/components/services/RelatedServices"
import Reveal from "@/components/ui/Reveal"

const title = "Sales Forecasting | Predict Revenue Accurately"
const description =
  "Master sales forecasting. Opportunity forecasts, deal probability weighting, historical analysis. Predict quarterly revenue with confidence."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/sales-forecasting" },
  openGraph: {
    type: "article",
    url: `${profile.url}/services/sales-forecasting`,
    siteName: profile.name,
    title,
    description,
    locale: "en_GB",
  },
  twitter: { card: "summary_large_image", title, description },
}

export default function SalesForecastingPage() {
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
                Sales Forecasting: Predict Revenue With Confidence
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="lead mt-8">
                Accurate forecasts make or break strategy. Learn to predict quarter revenue within
                10% variance. It starts with data, discipline, and methodology.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell border-t border-rule-2">
            <Reveal>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Forecasting Methods
                </h2>

                <div className="min-w-0">
                  <div className="space-y-6">
                    {[
                      {
                        method: "Top-Down (Quota-Based)",
                        desc: "Sales reps forecast their own quota. Fast but optimistic. Accuracy: 70-75%.",
                      },
                      {
                        method: "Bottom-Up (Pipeline-Based)",
                        desc: "Sum pipeline by rep and stage, apply historical close rates. More accurate. Accuracy: 75-85%.",
                      },
                      {
                        method: "Hybrid (Weighted)",
                        desc: "Combine both. Weight early-stage deals lower than late-stage. Accuracy: 85-95%.",
                      },
                      {
                        method: "AI/Predictive",
                        desc: "ML model trained on historical deals. Most accurate. Requires 2+ years data.",
                      },
                    ].map((item) => (
                      <div key={item.method} className="panel p-5">
                        <h3 className="font-semibold text-[1.05rem] mb-2">{item.method}</h3>
                        <p className="copy-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Building a Weighted Forecast Model
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    <p>
                      <strong>Stage 1: Prospecting (10% probability).</strong> Just discovered.
                      Likely to be killed.
                    </p>
                    <p>
                      <strong>Stage 2: Discovery (25% probability).</strong> Problem confirmed.
                      Solution not yet discussed.
                    </p>
                    <p>
                      <strong>Stage 3: Demo (50% probability).</strong> Demo or trial in progress.
                      Real contender.
                    </p>
                    <p>
                      <strong>Stage 4: Proposal (75% probability).</strong> Proposal sent.
                      Negotiating terms.
                    </p>
                    <p>
                      <strong>Stage 5: Closed Won (100% probability).</strong> Deal closed. Revenue
                      recognized.
                    </p>
                    <p>
                      Apply these weights consistently. If deals in demo stage historically close
                      60% of the time, use that number.
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="panel border-l-2 border-l-signal p-6 md:p-8">
                <p className="font-semibold text-bone mb-3">
                  Build accurate forecasts for your business
                </p>
                <p className="copy mb-5">
                  Work with a{" "}
                  <Link
                    href="/services/revenue-operations-consultant"
                    className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                  >
                    RevOps consultant
                  </Link>{" "}
                  to establish a forecasting methodology.
                </p>
                <Link href="#contact" className="btn btn-primary">
                  Get Your Forecasting Model Built
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <RelatedServices current="/services/sales-forecasting" />

        <FinalCta />
      </main>

      <Footer />
    </>
  )
}
