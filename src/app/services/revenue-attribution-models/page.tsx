import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import Reveal from "@/components/ui/Reveal"

const title = "Revenue Attribution Models | Guide to Revenue Modeling"
const description = "Master revenue attribution models (first-touch, last-touch, linear, time-decay, data-driven). Learn which model works best for your revenue operations."

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
                <Link href="/" className="tag transition-colors hover:text-signal">
                  ← Back to home
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
                Which channel deserves credit for that deal? Choose the wrong attribution model and you'll kill winning campaigns or fund losers. Learn the 5 models that matter.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell space-y-16 md:space-y-20">
            <Reveal>
              <article>
                <h2 className="font-display text-[1.8rem] md:text-[2.2rem] leading-[1.1] font-semibold mb-6">
                  The Attribution Problem
                </h2>
                <div className="space-y-4 text-[15px] leading-[1.65] text-bone-2">
                  <p>
                    <strong>Every deal touches multiple channels.</strong> A prospect may see an ad, read a blog post, watch a webinar, get called by sales, then close—all in 6 weeks. Who gets credit?
                  </p>
                  <p>
                    <strong>Your answer shapes your strategy.</strong> Wrong attribution model → misfunded channels, wasted budget, missed growth. Right model → aligned marketing and sales.
                  </p>
                  <p>
                    The best model isn't universal. It depends on your sales cycle, deal complexity, and data quality. Let a <Link href="/services/revenue-operations-consultant" className="text-signal hover:underline">
                      revenue operations consultant
                    </Link>{" "}
                    recommend the right one.
                  </p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article>
                <h2 className="font-display text-[1.8rem] md:text-[2.2rem] leading-[1.1] font-semibold mb-6">
                  5 Revenue Attribution Models
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      model: "First-Touch Attribution",
                      pros: "Simple, prioritizes awareness",
                      cons: "Ignores middle/bottom-funnel efforts",
                      use: "Brand building, awareness campaigns",
                    },
                    {
                      model: "Last-Touch Attribution",
                      pros: "Simple, prioritizes conversion",
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
                    <div key={item.model} className="p-4 rounded-sm border border-rule/50 hover:border-signal/30 transition-colors">
                      <h3 className="font-semibold text-[1.05rem] mb-3">{item.model}</h3>
                      <div className="space-y-2 text-[14px] text-bone-2">
                        <div><strong>Pros:</strong> {item.pros}</div>
                        <div><strong>Cons:</strong> {item.cons}</div>
                        <div><strong>Best for:</strong> {item.use}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <article>
                <h2 className="font-display text-[1.8rem] md:text-[2.2rem] leading-[1.1] font-semibold mb-6">
                  Implementing Revenue Attribution
                </h2>
                <div className="space-y-6">
                  <div>
                    <p className="text-[15px] leading-[1.6] text-bone-2 mb-4">
                      <strong>Step 1: Audit your data.</strong> Are all touchpoints tracked in your CRM? Is the customer journey complete and accurate?
                    </p>
                    <p className="text-[15px] leading-[1.6] text-bone-2 mb-4">
                      <strong>Step 2: Choose a model.</strong> Start with linear or time-decay if your sales cycle is 3–6 months. Only move to data-driven if you have 5000+ annual deals.
                    </p>
                    <p className="text-[15px] leading-[1.6] text-bone-2 mb-4">
                      <strong>Step 3: Build the automation.</strong> Use HubSpot attribution, Marketo, or a custom n8n workflow to score every touchpoint.
                    </p>
                    <p className="text-[15px] leading-[1.6] text-bone-2">
                      <strong>Step 4: Educate your teams.</strong> Marketing, sales, and leadership all need to understand and trust the model.
                    </p>
                  </div>
                  <div className="rounded-sm border-2 border-signal/20 bg-signal/5 p-6">
                    <p className="font-semibold text-bone mb-3">Success Metrics</p>
                    <ul className="space-y-2 text-[14px] text-bone-2">
                      <li>• All touchpoints tracked: &gt;95%</li>
                      <li>• Attribution model consensus: alignment across teams</li>
                      <li>• Actionable insights: channel-level ROI clarity within 30 days</li>
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-sm border-2 border-signal/20 bg-signal/5 p-6 md:p-8">
                <p className="font-semibold text-bone mb-3">Get revenue attribution set up for your business</p>
                <p className="text-[15px] text-bone-2 mb-4">
                  Work with our <Link href="/services/revenue-operations-consultant" className="text-signal hover:underline">
                    revenue operations consultant
                  </Link>{" "}
                  to audit your data and implement the right attribution model.
                </p>
                <Link
                  href="#contact"
                  className="inline-block px-5 py-2.5 bg-signal text-pit font-semibold rounded-sm hover:bg-signal/90 transition-colors"
                >
                  Get Your Attribution Audit
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
