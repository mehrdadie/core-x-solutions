import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import RelatedServices from "@/components/services/RelatedServices"
import ServiceFaq from "@/components/services/ServiceFaq"
import Reveal from "@/components/ui/Reveal"

const title = "Marketing Attribution Guide | Track Campaign ROI"
const description =
  "Master marketing attribution. Track which campaigns and channels drive qualified leads. Measure ROI accurately and optimise your marketing spend."

/**
 * Live search completes this topic on models / tools / platforms / software and
 * on B2B and account-based variants. The consultant-title seed returns nothing.
 */
const faqs = [
  {
    q: "What does attribution work actually involve?",
    a:
      "Less modelling than people expect and far more plumbing. The job is making sure the acquisition source survives every hop between the ad click and the invoice — the form, the CRM record, the opportunity, the payment. Once the source is still attached at the end, the choice of model is an afternoon's argument, not a project.",
  },
  {
    q: "How long does a B2B marketing attribution implementation take?",
    a:
      "The audit and the definitions are usually two to four weeks. How long the joins take after that depends on how many systems hold part of the journey and whether any of them ever captured the source in the first place — which is the thing the audit is for.",
  },
  {
    q: "Why do our ad platform and our CRM report different numbers?",
    a:
      "Because they are answering different questions. The ad platform counts conversions it can attribute within its own window and its own definition of a conversion; the CRM counts records a human moved to a stage. Neither is lying. They do not need to be identical, they need to be explicable, and that is a definitions job.",
  },
  {
    q: "Is B2B attribution different from B2C?",
    a:
      "Longer cycles, more people on the buying side, and revenue that arrives as an invoice rather than a checkout. That means account-level joins rather than person-level ones, and it means the model has to survive a deal that started nine months before it closed.",
  },
] as const

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/marketing-attribution-guide" },
  openGraph: {
    type: "article",
    url: `${profile.url}/services/marketing-attribution-guide`,
    siteName: profile.name,
    title,
    description,
    locale: "en_GB",
    images: [{ url: "/services/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description },
}

export default function MarketingAttributionGuidePage() {
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
                Marketing Attribution Guide: Prove Your Campaigns Work
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="lead mt-8">
                Stop guessing which campaigns drive revenue. Master marketing attribution to measure
                true ROI, optimise budgets, and build credibility with leadership.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell border-t border-rule-2">
            <Reveal>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  The Marketing Attribution Gap
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    <p>
                      <strong>Marketing claims credit. Sales questions it.</strong> Without unified
                      attribution, there's no truth. Marketing says campaigns generated leads; sales
                      says those leads weren't qualified.
                    </p>
                    <p>
                      <strong>Budget arguments follow.</strong> "Where should we spend next
                      quarter?" becomes a debate, not a data-driven decision. Unified attribution
                      ends the conflict.
                    </p>
                    <p>
                      <strong>Marketing-sales alignment is the result.</strong> When both teams see
                      the same lead data, reported at the same moment, they can co-own pipeline
                      growth. Let a{" "}
                      <Link
                        href="/services/revenue-operations-consultant"
                        className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                      >
                        revenue operations consultant
                      </Link>{" "}
                      build that alignment.
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Marketing Attribution Tactics
                </h2>

                <div className="min-w-0">
                  <div className="space-y-6">
                    {[
                      {
                        tactic: "UTM Parameter Tracking",
                        desc: "Tag every campaign link with source, medium, and campaign. Flows into CRM and analytics automatically.",
                      },
                      {
                        tactic: "Lead Source Tracking",
                        desc: "Capture how leads enter your funnel: organic search, paid ads, referral, direct, etc.",
                      },
                      {
                        tactic: "Touchpoint Recording",
                        desc: "Log every interaction: email, landing page visit, webinar attendance, ad view. Required for attribution models.",
                      },
                      {
                        tactic: "Multi-Touch Attribution",
                        desc: "Credit multiple campaigns rather than just the last one. Reveals the full customer journey.",
                      },
                      {
                        tactic: "Channel-Level Reporting",
                        desc: "Weekly dashboards showing leads, pipeline, and revenue by channel. Informs weekly budget shifts.",
                      },
                    ].map((item) => (
                      <div key={item.tactic} className="border-l-2 border-signal pl-6">
                        <h3 className="font-semibold text-[1.05rem] mb-2">{item.tactic}</h3>
                        <p className="copy-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Building Your Marketing Attribution System
                </h2>

                <div className="min-w-0">
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <p className="copy-sm">
                        <strong>Layer 1: Tracking infrastructure.</strong> UTM tags, lead source
                        fields, form submissions flowing into your CRM.
                      </p>
                      <p className="copy-sm">
                        <strong>Layer 2: CRM integration.</strong> Marketing automation (HubSpot,
                        Marketo) syncs lead source and touchpoints to your CRM in real-time.
                      </p>
                      <p className="copy-sm">
                        <strong>Layer 3: Attribution rules.</strong> Decide which touchpoints matter
                        most. First campaign that touched them? Last one? All of them equally?
                      </p>
                      <p className="copy-sm">
                        <strong>Layer 4: Reporting.</strong> Weekly dashboards by channel: leads,
                        MQL, SQL, pipeline, revenue. Make it automated.
                      </p>
                    </div>
                    <div className="panel border-l-2 border-l-signal p-6">
                      <p className="font-semibold text-bone mb-3">Expected Outcomes</p>
                      <ul className="space-y-2 text-[14px] text-bone-2">
                        <li>• Marketing-sales alignment within 60 days</li>
                        <li>
                          • Lead quality visibility: know which channels deliver highest-intent
                          leads
                        </li>
                        <li>
                          • Budget decisions with a source: which channels produced revenue, not
                          which produced leads
                        </li>
                        <li>
                          • Forecast confidence: accurate attribution → accurate pipeline forecasts
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>

            <ServiceFaq faqs={faqs} path="/services/marketing-attribution-guide" />

            <Reveal delay={0.15}>
              <div className="panel border-l-2 border-l-signal p-6 md:p-8">
                <p className="font-semibold text-bone mb-3">
                  Set up marketing attribution for your business
                </p>
                <p className="copy mb-5">
                  Work with a{" "}
                  <Link
                    href="/services/revenue-operations-consultant"
                    className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                  >
                    RevOps consultant
                  </Link>{" "}
                  to audit your tracking, set up attribution models, and build automated reporting.
                </p>
                <Link href="#contact" className="btn btn-primary">
                  Get Your Attribution Plan
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <RelatedServices current="/services/marketing-attribution-guide" />

        <FinalCta />
      </main>

      <Footer />
    </>
  )
}
