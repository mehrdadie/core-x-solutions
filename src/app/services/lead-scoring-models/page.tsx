import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import RelatedServices from "@/components/services/RelatedServices"
import Reveal from "@/components/ui/Reveal"

const title = "Lead Scoring Models | Identify High-Intent Prospects"
const description =
  "Learn lead scoring models. Behavioral scoring, demographic scoring, predictive scoring. Identify the leads most likely to close."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/lead-scoring-models" },
  openGraph: {
    type: "article",
    url: `${profile.url}/services/lead-scoring-models`,
    siteName: profile.name,
    title,
    description,
    locale: "en_GB",
  },
  twitter: { card: "summary_large_image", title, description },
}

export default function LeadScoringModelsPage() {
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
                Lead Scoring Models: Identify Winners Before They Close
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="lead mt-8">
                Not all leads are created equal. Lead scoring separates high-intent prospects from
                tire-kickers. Learn the models that work.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell border-t border-rule-2">
            <Reveal>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Lead Scoring Fundamentals
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    <p>
                      Lead scoring predicts which prospects are most likely to buy. High-score leads
                      go to sales immediately. Low-score leads stay in nurturing.
                    </p>
                    <p>
                      Scoring combines signals: company size, engagement, job title, email opens,
                      website visits, demo attendance. More signals = more accurate scores.
                    </p>
                    <p>
                      Learn to implement a{" "}
                      <Link
                        href="/services/lead-routing-guide"
                        className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                      >
                        lead scoring and routing strategy
                      </Link>{" "}
                      with a RevOps consultant.
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  3 Lead Scoring Models
                </h2>

                <div className="min-w-0">
                  <div className="space-y-6">
                    {[
                      {
                        model: "Demographic Scoring",
                        desc: "Score based on company attributes: size, industry, location, growth stage.",
                        pros: "Simple, stable, easy to implement",
                        cons: "Misses engagement signals",
                      },
                      {
                        model: "Behavioral Scoring",
                        desc: "Score based on engagement: email opens, website visits, form fills, demo requests.",
                        pros: "Real-time, responsive to intent",
                        cons: "Decays if engagement stops",
                      },
                      {
                        model: "Predictive Scoring",
                        desc: "ML model trained on your historical deals. Learns which attributes correlate with closes.",
                        pros: "Most accurate, data-driven",
                        cons: "Requires 500+ historical deals",
                      },
                    ].map((item) => (
                      <div key={item.model} className="panel p-5">
                        <h3 className="font-semibold text-[1.05rem] mb-2">{item.model}</h3>
                        <p className="text-[15px] leading-[1.6] text-bone-2 mb-2">{item.desc}</p>
                        <div className="flex justify-between text-[14px]">
                          <div>
                            <strong>Pros:</strong> {item.pros}
                          </div>
                          <div>
                            <strong>Cons:</strong> {item.cons}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="panel border-l-2 border-l-signal p-6 md:p-8">
                <p className="font-semibold text-bone mb-3">Get lead scoring implemented</p>
                <p className="copy mb-5">
                  A{" "}
                  <Link
                    href="/services/revenue-operations-consultant"
                    className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                  >
                    RevOps consultant
                  </Link>{" "}
                  will build the right model for your sales cycle.
                </p>
                <Link href="#contact" className="btn btn-primary">
                  Schedule Your Scoring Audit
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <RelatedServices current="/services/lead-scoring-models" />

        <FinalCta />
      </main>

      <Footer />
    </>
  )
}
