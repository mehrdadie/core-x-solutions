import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import RelatedServices from "@/components/services/RelatedServices"
import Reveal from "@/components/ui/Reveal"

const title = "Upsell & Cross-Sell Scoring | Expand Account Revenue"
const description =
  "Score customers for upsell and cross-sell opportunities. Identify expansion-ready accounts. Grow revenue from existing customers."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/upsell-cross-sell-scoring" },
  openGraph: {
    type: "article",
    url: `${profile.url}/services/upsell-cross-sell-scoring`,
    siteName: profile.name,
    title,
    description,
    locale: "en_GB",
  },
  twitter: { card: "summary_large_image", title, description },
}

export default function UpsellCrossSellScoringPage() {
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
                Upsell & Cross-Sell: Grow From Existing Customers
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="lead mt-8">
                Growing revenue from existing customers is 5x cheaper than new customer acquisition.
                Score every customer for expansion opportunities.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell border-t border-rule-2">
            <Reveal>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Expansion Signals
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    <p>
                      <strong>High engagement:</strong> Heavy product usage. Frequent logins. All
                      features adopted.
                    </p>
                    <p>
                      <strong>Seat expansion:</strong> More users added to account. Team growing.
                    </p>
                    <p>
                      <strong>High satisfaction:</strong> NPS score 9-10. Low support tickets.
                    </p>
                    <p>
                      <strong>Revenue trajectory:</strong> Billing growing year-over-year. Willing
                      to spend.
                    </p>
                    <p>
                      <strong>Use case expansion:</strong> Using product in new departments or use
                      cases.
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Upsell vs Cross-Sell Strategy
                </h2>

                <div className="min-w-0">
                  <div className="space-y-6">
                    {[
                      {
                        type: "Upsell",
                        desc: "Upgrade existing product to higher tier. More features, more volume, more users.",
                        example: "Starter → Professional plan",
                      },
                      {
                        type: "Cross-Sell",
                        desc: "Sell complementary product to existing customer.",
                        example: "CRM customer buys email marketing add-on",
                      },
                    ].map((item) => (
                      <div key={item.type} className="border-l-2 border-signal pl-6">
                        <h3 className="font-semibold text-[1.05rem] mb-2">{item.type}</h3>
                        <p className="copy-sm mb-1">{item.desc}</p>
                        <p className="copy-sm italic">{item.example}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="panel border-l-2 border-l-signal p-6 md:p-8">
                <p className="font-semibold text-bone mb-3">Automate expansion revenue scoring</p>
                <p className="copy mb-5">
                  Work with a RevOps consultant to build expansion scoring and playbooks.
                </p>
                <Link href="#contact" className="btn btn-primary">
                  Build Expansion Strategy
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <RelatedServices current="/services/upsell-cross-sell-scoring" />

        <FinalCta />
      </main>

      <Footer />
    </>
  )
}
