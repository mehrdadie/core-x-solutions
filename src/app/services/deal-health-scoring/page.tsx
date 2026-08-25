import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import RelatedServices from "@/components/services/RelatedServices"
import Reveal from "@/components/ui/Reveal"

const title = "Deal Health Scoring | Identify At-Risk Deals Early"
const description =
  "Score deal health in real-time. Identify at-risk deals, prioritize manager attention, reduce slippage. Automated deal monitoring for better forecasts."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/deal-health-scoring" },
  openGraph: {
    type: "article",
    url: `${profile.url}/services/deal-health-scoring`,
    siteName: profile.name,
    title,
    description,
    locale: "en_GB",
    images: [{ url: "/services/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description },
}

export default function DealHealthScoringPage() {
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
                Deal Health Scoring: Save Deals Before They Slip
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="lead mt-8">
                At-risk deals rarely announce themselves. Deal health scoring detects problems early
                so managers can intervene before deals slip.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell border-t border-rule-2">
            <Reveal>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Signals of At-Risk Deals
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    {[
                      "No activity in 7+ days",
                      "No scheduled next step",
                      "Decision moved beyond close date",
                      "Contact unresponsive (no email opens)",
                      "Competition entry detected",
                      "Budget questioned in recent calls",
                      "Key stakeholder departed",
                      "Deal downgraded in size",
                    ].map((signal, i) => (
                      <div key={i} className="flex gap-3 pb-2">
                        <span className="text-signal font-semibold">•</span>
                        <span>{signal}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Build a Deal Health Score
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    <p>
                      Score each deal on a scale of 1-10 based on signals above. Green (8-10): on
                      track. Yellow (5-7): monitor closely. Red (1-4): at risk.
                    </p>
                    <p>
                      Automate the scoring in HubSpot or Salesforce. When a deal turns red,
                      auto-notify the manager.
                    </p>
                    <p>
                      Include deal health in weekly forecast. Are red deals coming back? Or
                      slipping?
                    </p>
                    <p>
                      Learn to implement deal health scoring with a{" "}
                      <Link
                        href="/services/revenue-operations-consultant"
                        className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                      >
                        RevOps consultant
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="panel border-l-2 border-l-signal p-6 md:p-8">
                <p className="font-semibold text-bone mb-3">Get deal health scoring implemented</p>
                <p className="copy mb-5">
                  Build automated deal monitoring to catch at-risk deals early.
                </p>
                <Link href="#contact" className="btn btn-primary">
                  Schedule Implementation
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <RelatedServices current="/services/deal-health-scoring" />

        <FinalCta />
      </main>

      <Footer />
    </>
  )
}
