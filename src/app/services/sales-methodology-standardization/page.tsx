import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import RelatedServices from "@/components/services/RelatedServices"
import Reveal from "@/components/ui/Reveal"

const title = "Sales Methodology Standardization | Align Your Sales Team"
const description =
  "Standardize sales processes across your team. One shared methodology, one qualification framework, one playbook. Drive consistency and scaling."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/sales-methodology-standardization" },
  openGraph: {
    type: "article",
    url: `${profile.url}/services/sales-methodology-standardization`,
    siteName: profile.name,
    title,
    description,
    locale: "en_GB",
    images: [{ url: "/services/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description },
}

export default function SalesMethodologyStandardizationPage() {
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
                Sales Methodology: One Team, One Process
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="lead mt-8">
                Without standardized process, every rep sells their own way. Wins are inconsistent.
                Onboarding new reps is chaos. Build one shared methodology.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell border-t border-rule-2">
            <Reveal>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Elements of a Sales Methodology
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    <p>
                      <strong>Qualification framework:</strong> BANT, MEDDIC, or custom. How do reps
                      qualify leads?
                    </p>
                    <p>
                      <strong>Discovery process:</strong> Key questions reps must ask. What
                      information matters?
                    </p>
                    <p>
                      <strong>Proposal structure:</strong> How are solutions presented? What ROI
                      models do we use?
                    </p>
                    <p>
                      <strong>Objection handling:</strong> Scripted responses to common objections.
                      Consistency across team.
                    </p>
                    <p>
                      <strong>Playbooks by deal type:</strong> Different playbooks for land, expand,
                      renewal. Clear paths for each.
                    </p>
                    <p>
                      <strong>Success metrics:</strong> Win rates, deal size, cycle time. How do we
                      measure effectiveness?
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Building Your Methodology
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    <p>
                      <strong>Step 1:</strong> Review your best reps. What do they do differently?
                      Extract patterns.
                    </p>
                    <p>
                      <strong>Step 2:</strong> Document the methodology. Write it down. Make it
                      explicit.
                    </p>
                    <p>
                      <strong>Step 3:</strong> Train all reps. Create materials, videos, playbooks.
                      One source of truth.
                    </p>
                    <p>
                      <strong>Step 4:</strong> Reinforce through CRM workflows. Automation ensures
                      methodology is followed.
                    </p>
                    <p>
                      <strong>Step 5:</strong> Review and iterate. Does it work? What's not working?
                      Improve quarterly.
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="panel border-l-2 border-l-signal p-6 md:p-8">
                <p className="font-semibold text-bone mb-3">Build your sales methodology</p>
                <p className="copy mb-5">
                  Work with a consultant to document and standardize your team's process.
                </p>
                <Link href="#contact" className="btn btn-primary">
                  Start Methodology Project
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <RelatedServices current="/services/sales-methodology-standardization" />

        <FinalCta />
      </main>

      <Footer />
    </>
  )
}
