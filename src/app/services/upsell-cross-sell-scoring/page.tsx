import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import Reveal from "@/components/ui/Reveal"

const title = "Upsell & Cross-Sell Scoring | Expand Account Revenue"
const description = "Score customers for upsell and cross-sell opportunities. Identify expansion-ready accounts. Grow revenue from existing customers."

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
                <Link href="/" className="tag transition-colors hover:text-signal">
                  ← Back to home
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
                Growing revenue from existing customers is 5x cheaper than new customer acquisition. Score every customer for expansion opportunities.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell space-y-16 md:space-y-20">
            <Reveal>
              <article>
                <h2 className="font-display text-[1.8rem] md:text-[2.2rem] leading-[1.1] font-semibold mb-6">
                  Expansion Signals
                </h2>
                <div className="space-y-4 text-[15px] leading-[1.65] text-bone-2">
                  <p><strong>High engagement:</strong> Heavy product usage. Frequent logins. All features adopted.</p>
                  <p><strong>Seat expansion:</strong> More users added to account. Team growing.</p>
                  <p><strong>High satisfaction:</strong> NPS score 9-10. Low support tickets.</p>
                  <p><strong>Revenue trajectory:</strong> Billing growing year-over-year. Willing to spend.</p>
                  <p><strong>Use case expansion:</strong> Using product in new departments or use cases.</p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article>
                <h2 className="font-display text-[1.8rem] md:text-[2.2rem] leading-[1.1] font-semibold mb-6">
                  Upsell vs Cross-Sell Strategy
                </h2>
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
                      <p className="text-[15px] text-bone-2 mb-1">{item.desc}</p>
                      <p className="text-[14px] text-bone-2 italic">{item.example}</p>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-sm border-2 border-signal/20 bg-signal/5 p-6 md:p-8">
                <p className="font-semibold text-bone mb-3">Automate expansion revenue scoring</p>
                <p className="text-[15px] text-bone-2 mb-4">
                  Work with a RevOps consultant to build expansion scoring and playbooks.
                </p>
                <Link
                  href="#contact"
                  className="inline-block px-5 py-2.5 bg-signal text-pit font-semibold rounded-sm hover:bg-signal/90 transition-colors"
                >
                  Build Expansion Strategy
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
