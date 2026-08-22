import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import Reveal from "@/components/ui/Reveal"

const title = "Lead Scoring Models | Identify High-Intent Prospects"
const description = "Learn lead scoring models. Behavioral scoring, demographic scoring, predictive scoring. Identify the leads most likely to close."

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
                <Link href="/" className="tag transition-colors hover:text-signal">
                  ← Back to home
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
                Not all leads are created equal. Lead scoring separates high-intent prospects from tire-kickers. Learn the models that work.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell space-y-16 md:space-y-20">
            <Reveal>
              <article>
                <h2 className="font-display text-[1.8rem] md:text-[2.2rem] leading-[1.1] font-semibold mb-6">
                  Lead Scoring Fundamentals
                </h2>
                <div className="space-y-4 text-[15px] leading-[1.65] text-bone-2">
                  <p>
                    Lead scoring predicts which prospects are most likely to buy. High-score leads go to sales immediately. Low-score leads stay in nurturing.
                  </p>
                  <p>
                    Scoring combines signals: company size, engagement, job title, email opens, website visits, demo attendance. More signals = more accurate scores.
                  </p>
                  <p>
                    Learn to implement a <Link href="/services/lead-routing-guide" className="text-signal hover:underline">
                      lead scoring and routing strategy
                    </Link>{" "}
                    with a RevOps consultant.
                  </p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article>
                <h2 className="font-display text-[1.8rem] md:text-[2.2rem] leading-[1.1] font-semibold mb-6">
                  3 Lead Scoring Models
                </h2>
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
                    <div key={item.model} className="p-4 rounded-sm border border-rule/50">
                      <h3 className="font-semibold text-[1.05rem] mb-2">{item.model}</h3>
                      <p className="text-[15px] leading-[1.6] text-bone-2 mb-2">{item.desc}</p>
                      <div className="flex justify-between text-[14px]">
                        <div><strong>Pros:</strong> {item.pros}</div>
                        <div><strong>Cons:</strong> {item.cons}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-sm border-2 border-signal/20 bg-signal/5 p-6 md:p-8">
                <p className="font-semibold text-bone mb-3">Get lead scoring implemented</p>
                <p className="text-[15px] text-bone-2 mb-4">
                  A <Link href="/services/revenue-operations-consultant" className="text-signal hover:underline">
                    RevOps consultant
                  </Link>{" "}
                  will build the right model for your sales cycle.
                </p>
                <Link
                  href="#contact"
                  className="inline-block px-5 py-2.5 bg-signal text-pit font-semibold rounded-sm hover:bg-signal/90 transition-colors"
                >
                  Schedule Your Scoring Audit
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
