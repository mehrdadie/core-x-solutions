import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import Reveal from "@/components/ui/Reveal"

const title = "Lead Qualification Frameworks | BANT, MEDDIC, CHAMP"
const description = "Master lead qualification frameworks. BANT, MEDDIC, CHAMP. Qualify faster, kill bad leads early, improve conversion rates."

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
                <Link href="/" className="tag transition-colors hover:text-signal">
                  ← Back to home
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
                Bad qualification wastes sales time. Learn the frameworks that separate real opportunities from time-wasters.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell space-y-16 md:space-y-20">
            <Reveal>
              <article>
                <h2 className="font-display text-[1.8rem] md:text-[2.2rem] leading-[1.1] font-semibold mb-6">
                  3 Qualification Frameworks
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      framework: "BANT",
                      elements: "Budget, Authority, Need, Timeline",
                      use: "Enterprise sales. Best for: 6+ month deals",
                    },
                    {
                      framework: "MEDDIC",
                      elements: "Metrics, Economic Buyer, Decision, Demo, Identify Pain, Champion",
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
                      <p className="text-[15px] text-bone-2 mb-1"><strong>Elements:</strong> {item.elements}</p>
                      <p className="text-[15px] text-bone-2"><strong>Use:</strong> {item.use}</p>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article>
                <h2 className="font-display text-[1.8rem] md:text-[2.2rem] leading-[1.1] font-semibold mb-6">
                  Implementation Steps
                </h2>
                <div className="space-y-4 text-[15px] leading-[1.65] text-bone-2">
                  <p>1. Pick the framework that fits your sales cycle.</p>
                  <p>2. Build discovery questions around each element.</p>
                  <p>3. Train your team on the criteria.</p>
                  <p>4. Use the framework in CRM workflows to auto-qualify leads.</p>
                  <p>5. Monitor qualification accuracy. Adjust over time.</p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-sm border-2 border-signal/20 bg-signal/5 p-6 md:p-8">
                <p className="font-semibold text-bone mb-3">Get qualification frameworks built into your RevOps</p>
                <p className="text-[15px] text-bone-2 mb-4">
                  Work with a consultant to select and implement the right framework.
                </p>
                <Link
                  href="#contact"
                  className="inline-block px-5 py-2.5 bg-signal text-pit font-semibold rounded-sm hover:bg-signal/90 transition-colors"
                >
                  Schedule Implementation Session
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
