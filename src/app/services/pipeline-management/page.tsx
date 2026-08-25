import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import RelatedServices from "@/components/services/RelatedServices"
import Reveal from "@/components/ui/Reveal"

const title = "Pipeline Management | Build Predictable Revenue"
const description =
  "Manage your sales pipeline like a business. Daily monitoring, deal health scoring, bottleneck identification, and forecast accuracy. Build predictable revenue."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/pipeline-management" },
  openGraph: {
    type: "article",
    url: `${profile.url}/services/pipeline-management`,
    siteName: profile.name,
    title,
    description,
    locale: "en_GB",
    images: [{ url: "/services/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description },
}

export default function PipelineManagementPage() {
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
                Pipeline Management: Build Predictable Revenue
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="lead mt-8">
                Pipeline is your forecast. Manage it obsessively and you predict revenue accurately.
                Ignore it and you're flying blind. Daily pipeline hygiene is RevOps 101.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell border-t border-rule-2">
            <Reveal>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Pipeline Health Metrics
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    {[
                      ["Total Pipeline Value", "$5M total, compare to quota"],
                      ["Pipeline by Stage", "Leads, prospects, demos, proposals, negotiations"],
                      ["Aging Pipeline", "How old are deals? Are they stalled?"],
                      ["Deal Slippage", "Deals moved past close date without closing"],
                      ["Forecast Accuracy", "Actual closes vs. predicted closes"],
                    ].map(([metric, desc], i) => (
                      <div key={i} className="flex justify-between pb-3 border-b border-rule">
                        <span className="font-semibold">{metric}</span>
                        <span className="text-bone-2">{desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Weekly Pipeline Cadence
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    <p>
                      <strong>Monday morning:</strong> Review pipeline by rep. Check for new deals.
                      Identify aging deals.
                    </p>
                    <p>
                      <strong>Tuesday-Thursday:</strong> Reps update deals. New activity, new close
                      dates, new stages.
                    </p>
                    <p>
                      <strong>Friday afternoon:</strong> Leadership reviews weekly trend. Are we on
                      pace for target? What needs acceleration?
                    </p>
                    <p>
                      <strong>Monthly forecast meeting:</strong> Compare actual results to
                      predicted. Update forecast for following month.
                    </p>
                    <p>
                      Build this cadence with a{" "}
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

            <Reveal delay={0.1}>
              <div className="panel border-l-2 border-l-signal p-6 md:p-8">
                <p className="font-semibold text-bone mb-3">
                  Get pipeline management built into your RevOps
                </p>
                <p className="copy mb-5">
                  Work with our team to establish daily pipeline hygiene and accurate forecasting.
                </p>
                <Link href="#contact" className="btn btn-primary">
                  Schedule a Pipeline Review
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <RelatedServices current="/services/pipeline-management" />

        <FinalCta />
      </main>

      <Footer />
    </>
  )
}
