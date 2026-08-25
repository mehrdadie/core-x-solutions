import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import RelatedServices from "@/components/services/RelatedServices"
import Reveal from "@/components/ui/Reveal"

const title = "Revenue Attribution Models | Guide to Revenue Modelling"
const description =
  "Master revenue attribution models (first-touch, last-touch, linear, time-decay, data-driven). Learn which model works best for your revenue operations."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/revenue-attribution-models" },
  openGraph: {
    type: "article",
    url: `${profile.url}/services/revenue-attribution-models`,
    siteName: profile.name,
    title,
    description,
    locale: "en_GB",
    images: [{ url: "/services/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description },
}

export default function RevenueAttributionModelsPage() {
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
                Revenue Attribution Models: Credit the Right Channels
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="lead mt-8">
                Which channel deserves credit for that deal? Choose the wrong attribution model and
                you'll kill winning campaigns or fund losers. Learn the 5 models that matter.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell border-t border-rule-2">
            <Reveal>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  The Attribution Problem
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    <p>
                      <strong>Every deal touches multiple channels.</strong> A prospect may see an
                      ad, read a blog post, watch a webinar, get called by sales, then close—all in
                      6 weeks. Who gets credit?
                    </p>
                    <p>
                      <strong>Your answer shapes your strategy.</strong> Wrong attribution model →
                      misfunded channels, wasted budget, missed growth. Right model → aligned
                      marketing and sales.
                    </p>
                    <p>
                      The best model isn't universal. It depends on your sales cycle, deal
                      complexity, and data quality. Let a{" "}
                      <Link
                        href="/services/revenue-operations-consultant"
                        className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                      >
                        revenue operations consultant
                      </Link>{" "}
                      recommend the right one.
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  5 Revenue Attribution Models
                </h2>

                <div className="min-w-0">
                  <div className="space-y-6">
                    {[
                      {
                        model: "First-Touch Attribution",
                        pros: "Simple, prioritises awareness",
                        cons: "Ignores middle/bottom-funnel efforts",
                        use: "Brand building, awareness campaigns",
                      },
                      {
                        model: "Last-Touch Attribution",
                        pros: "Simple, prioritises conversion",
                        cons: "Ignores nurturing, inflates sales credit",
                        use: "Direct-response, paid search",
                      },
                      {
                        model: "Linear Attribution",
                        pros: "Fair credit distribution, easy to explain",
                        cons: "Oversimplifies complex journeys",
                        use: "Balanced approach when data is immature",
                      },
                      {
                        model: "Time-Decay Attribution",
                        pros: "Weights recent touchpoints higher",
                        cons: "Requires tuning, more complex",
                        use: "Long sales cycles, nurturing emphasis",
                      },
                      {
                        model: "Data-Driven Attribution (ML)",
                        pros: "Most accurate, learns from your data",
                        cons: "Requires volume + clean data",
                        use: "Mature programs with 1000+ deals/quarter",
                      },
                    ].map((item) => (
                      <div
                        key={item.model}
                        className="panel p-5 border border-rule/50 hover:border-signal/30 transition-colors"
                      >
                        <h3 className="font-semibold text-[1.05rem] mb-3">{item.model}</h3>
                        <div className="space-y-2 text-[14px] text-bone-2">
                          <div>
                            <strong>Pros:</strong> {item.pros}
                          </div>
                          <div>
                            <strong>Cons:</strong> {item.cons}
                          </div>
                          <div>
                            <strong>Best for:</strong> {item.use}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Implementing Revenue Attribution
                </h2>

                <div className="min-w-0">
                  <div className="space-y-6">
                    <div>
                      <p className="copy-sm mb-5">
                        <strong>Step 1: Audit your data.</strong> Are all touchpoints tracked in
                        your CRM? Is the customer journey complete and accurate?
                      </p>
                      <p className="copy-sm mb-5">
                        <strong>Step 2: Choose a model.</strong> Start with linear or time-decay if
                        your sales cycle is 3–6 months. Only move to data-driven if you have 5000+
                        annual deals.
                      </p>
                      <p className="copy-sm mb-5">
                        <strong>Step 3: Build the automation.</strong> Use HubSpot attribution,
                        Marketo, or a custom n8n workflow to score every touchpoint.
                      </p>
                      <p className="copy-sm">
                        <strong>Step 4: Educate your teams.</strong> Marketing, sales, and
                        leadership all need to understand and trust the model.
                      </p>
                    </div>
                    <div className="panel border-l-2 border-l-signal p-6">
                      <p className="font-semibold text-bone mb-3">Success Metrics</p>
                      <ul className="space-y-2 text-[14px] text-bone-2">
                        <li>• All touchpoints tracked: &gt;95%</li>
                        <li>• Attribution model consensus: alignment across teams</li>
                        <li>• Actionable insights: channel-level ROI clarity within 30 days</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="panel border-l-2 border-l-signal p-6 md:p-8">
                <p className="font-semibold text-bone mb-3">
                  Get revenue attribution set up for your business
                </p>
                <p className="copy mb-5">
                  Work with our{" "}
                  <Link
                    href="/services/revenue-operations-consultant"
                    className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                  >
                    revenue operations consultant
                  </Link>{" "}
                  to audit your data and implement the right attribution model.
                </p>
                <Link href="#contact" className="btn btn-primary">
                  Get Your Attribution Audit
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <RelatedServices current="/services/revenue-attribution-models" />

        <FinalCta />
      </main>

      <Footer />
    </>
  )
}
