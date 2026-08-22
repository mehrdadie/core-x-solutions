import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import Reveal from "@/components/ui/Reveal"

const title = "Sales Methodology Standardization | Align Your Sales Team"
const description = "Standardize sales processes across your team. One shared methodology, one qualification framework, one playbook. Drive consistency and scaling."

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
                <Link href="/" className="tag transition-colors hover:text-signal">
                  ← Back to home
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
                Without standardized process, every rep sells their own way. Wins are inconsistent. Onboarding new reps is chaos. Build one shared methodology.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell space-y-16 md:space-y-20">
            <Reveal>
              <article>
                <h2 className="font-display text-[1.8rem] md:text-[2.2rem] leading-[1.1] font-semibold mb-6">
                  Elements of a Sales Methodology
                </h2>
                <div className="space-y-4 text-[15px] leading-[1.65] text-bone-2">
                  <p><strong>Qualification framework:</strong> BANT, MEDDIC, or custom. How do reps qualify leads?</p>
                  <p><strong>Discovery process:</strong> Key questions reps must ask. What information matters?</p>
                  <p><strong>Proposal structure:</strong> How are solutions presented? What ROI models do we use?</p>
                  <p><strong>Objection handling:</strong> Scripted responses to common objections. Consistency across team.</p>
                  <p><strong>Playbooks by deal type:</strong> Different playbooks for land, expand, renewal. Clear paths for each.</p>
                  <p><strong>Success metrics:</strong> Win rates, deal size, cycle time. How do we measure effectiveness?</p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article>
                <h2 className="font-display text-[1.8rem] md:text-[2.2rem] leading-[1.1] font-semibold mb-6">
                  Building Your Methodology
                </h2>
                <div className="space-y-4 text-[15px] leading-[1.65] text-bone-2">
                  <p><strong>Step 1:</strong> Review your best reps. What do they do differently? Extract patterns.</p>
                  <p><strong>Step 2:</strong> Document the methodology. Write it down. Make it explicit.</p>
                  <p><strong>Step 3:</strong> Train all reps. Create materials, videos, playbooks. One source of truth.</p>
                  <p><strong>Step 4:</strong> Reinforce through CRM workflows. Automation ensures methodology is followed.</p>
                  <p><strong>Step 5:</strong> Review and iterate. Does it work? What's not working? Improve quarterly.</p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-sm border-2 border-signal/20 bg-signal/5 p-6 md:p-8">
                <p className="font-semibold text-bone mb-3">Build your sales methodology</p>
                <p className="text-[15px] text-bone-2 mb-4">
                  Work with a consultant to document and standardize your team's process.
                </p>
                <Link
                  href="#contact"
                  className="inline-block px-5 py-2.5 bg-signal text-pit font-semibold rounded-sm hover:bg-signal/90 transition-colors"
                >
                  Start Methodology Project
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
