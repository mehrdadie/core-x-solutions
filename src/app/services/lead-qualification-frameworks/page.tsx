import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import RelatedServices from "@/components/services/RelatedServices"
import Reveal from "@/components/ui/Reveal"

const title = "Lead Qualification Frameworks | BANT, MEDDIC, CHAMP"
const description =
  "Master lead qualification frameworks. BANT, MEDDIC, CHAMP. Qualify faster, kill bad leads early, improve conversion rates."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/lead-qualification-frameworks" },
  openGraph: {
    type: "article",
    url: `${profile.url}/services/lead-qualification-frameworks`,
    siteName: profile.name,
    title,
    description,
    locale: "en_GB",
  },
  twitter: { card: "summary_large_image", title, description },
}

export default function LeadQualificationFrameworksPage() {
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
                Lead Qualification: Use Proven Frameworks
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="lead mt-8">
                Bad qualification wastes sales time. Learn the frameworks that separate real
                opportunities from time-wasters.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell border-t border-rule-2">
            <Reveal>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  3 Qualification Frameworks
                </h2>

                <div className="min-w-0">
                  <div className="space-y-6">
                    {[
                      {
                        framework: "BANT",
                        elements: "Budget, Authority, Need, Timeline",
                        use: "Enterprise sales. Best for: 6+ month deals",
                      },
                      {
                        framework: "MEDDIC",
                        elements:
                          "Metrics, Economic Buyer, Decision, Demo, Identify Pain, Champion",
                        use: "Complex sales. Best for: multi-stakeholder deals",
                      },
                      {
                        framework: "CHAMP",
                        elements: "Challenges, Authority, Money, Prioritization",
                        use: "Modern sales. Best for: shorter cycles",
                      },
                    ].map((item) => (
                      <div key={item.framework} className="border-l-2 border-signal pl-6">
                        <h3 className="font-semibold text-[1.05rem] mb-2">{item.framework}</h3>
                        <p className="copy-sm mb-1">
                          <strong>Elements:</strong> {item.elements}
                        </p>
                        <p className="copy-sm">
                          <strong>Use:</strong> {item.use}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Implementation Steps
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    <p>1. Pick the framework that fits your sales cycle.</p>
                    <p>2. Build discovery questions around each element.</p>
                    <p>3. Train your team on the criteria.</p>
                    <p>4. Use the framework in CRM workflows to auto-qualify leads.</p>
                    <p>5. Monitor qualification accuracy. Adjust over time.</p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="panel border-l-2 border-l-signal p-6 md:p-8">
                <p className="font-semibold text-bone mb-3">
                  Get qualification frameworks built into your RevOps
                </p>
                <p className="copy mb-5">
                  Work with a consultant to select and implement the right framework.
                </p>
                <Link href="#contact" className="btn btn-primary">
                  Schedule Implementation Session
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <RelatedServices current="/services/lead-qualification-frameworks" />

        <FinalCta />
      </main>

      <Footer />
    </>
  )
}
