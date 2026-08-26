import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import RelatedServices from "@/components/services/RelatedServices"
import Reveal from "@/components/ui/Reveal"

const title = "Deal Velocity Metrics | Track Pipeline Speed"
const description =
  "Track deal velocity: days per stage, conversion rates, bottlenecks. Identify where deals stall. Accelerate your pipeline."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/deal-velocity-metrics" },
  openGraph: {
    type: "article",
    url: `${profile.url}/services/deal-velocity-metrics`,
    siteName: profile.name,
    title,
    description,
    locale: "en_GB",
    images: [{ url: "/services/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description },
}

export default function DealVelocityMetricsPage() {
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
                Deal Velocity: Accelerate Your Pipeline
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="lead mt-8">
                Faster deals = more revenue. Track velocity metrics to identify bottlenecks. Fix
                them. Compress your sales cycle 20-30%.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell border-t border-rule-2">
            <Reveal>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Core Velocity Metrics
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    {[
                      ["Prospect to Lead", "Days from first touch to CRM qualification"],
                      ["Lead to Opportunity", "Days from lead entry to deal creation"],
                      ["Opportunity to Close", "Days from deal creation to close"],
                      ["Total Sales Cycle", "First touch to close"],
                      ["Stage conversion rate", "% of deals that move to next stage"],
                    ].map(([metric, def], i) => (
                      <div key={i} className="flex justify-between pb-3 border-b border-rule">
                        <span className="font-semibold">{metric}</span>
                        <span className="text-bone-2 text-[14px]">{def}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Benchmarking & Targets
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    <p>
                      <strong>SaaS average:</strong> 20-45 days from first contact to close. Your
                      baseline?
                    </p>
                    <p>
                      <strong>By segment:</strong> SMB might be 15 days. Enterprise 60+ days. Know
                      your normal.
                    </p>
                    <p>
                      <strong>By deal size:</strong> &pound;10k deals close in 20 days. &pound;100k deals in 60
                      days. Set realistic targets.
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="panel border-l-2 border-l-signal p-6 md:p-8">
                <p className="font-semibold text-bone mb-3">Track and optimise deal velocity</p>
                <p className="copy mb-5">
                  Get velocity dashboards and recommendations to accelerate your sales cycle.
                </p>
                <Link href="#contact" className="btn btn-primary">
                  Setup Velocity Tracking
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <RelatedServices current="/services/deal-velocity-metrics" />

        <FinalCta />
      </main>

      <Footer />
    </>
  )
}
