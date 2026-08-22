import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import Reveal from "@/components/ui/Reveal"

const title = "Account Expansion Strategy | Grow Revenue Per Customer"
const description = "Systematize account expansion. Identify expansion-ready accounts, build playbooks, align sales and CS. Grow net revenue retention (NRR)."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/account-expansion-strategy" },
  openGraph: {
    type: "article",
    url: `${profile.url}/services/account-expansion-strategy`,
    siteName: profile.name,
    title,
    description,
    locale: "en_GB",
  },
  twitter: { card: "summary_large_image", title, description },
}

export default function AccountExpansionStrategyPage() {
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
                Account Expansion: Grow Revenue From Existing Customers
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="lead mt-8">
                High-NRR companies grow faster with less CAC. Build a systematic expansion machine powered by data and playbooks.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell space-y-16 md:space-y-20">
            <Reveal>
              <article>
                <h2 className="font-display text-[1.8rem] md:text-[2.2rem] leading-[1.1] font-semibold mb-6">
                  Building Your Expansion Machine
                </h2>
                <div className="space-y-8">
                  {[
                    {
                      step: 1,
                      title: "Identify expansion motions",
                      desc: "What are your expansion opportunities? Seat expansion, pricing tier, add-on products, new use cases?",
                    },
                    {
                      step: 2,
                      title: "Score expansion-ready accounts",
                      desc: "Which accounts are ready now? Use engagement, satisfaction, and revenue trajectory.",
                    },
                    {
                      step: 3,
                      title: "Build playbooks per motion",
                      desc: "For each expansion motion, define: triggers, messaging, timing, owner (sales vs CS).",
                    },
                    {
                      step: 4,
                      title: "Execute and iterate",
                      desc: "Run expansion campaigns. Track win rates. Refine messaging. Scale what works.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-6">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-signal/20 text-signal font-semibold flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-semibold text-[1rem] mb-1">{item.title}</h3>
                        <p className="text-[15px] text-bone-2">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article>
                <h2 className="font-display text-[1.8rem] md:text-[2.2rem] leading-[1.1] font-semibold mb-6">
                  Expansion Metrics to Track
                </h2>
                <div className="space-y-4 text-[15px] leading-[1.65] text-bone-2">
                  <p><strong>NRR (Net Revenue Retention):</strong> Revenue from existing customers (expansion - churn). Target: 120%+.</p>
                  <p><strong>Expansion ARR:</strong> New ARR from existing customers. Growing faster than new sales = health indicator.</p>
                  <p><strong>Win rate by motion:</strong> Which expansion plays are working? Where to double down?</p>
                  <p><strong>Average expansion deal size:</strong> Are expansion deals getting larger over time?</p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-sm border-2 border-signal/20 bg-signal/5 p-6 md:p-8">
                <p className="font-semibold text-bone mb-3">Build your account expansion strategy</p>
                <p className="text-[15px] text-bone-2 mb-4">
                  Work with a consultant to systematize expansion and grow NRR.
                </p>
                <Link
                  href="#contact"
                  className="inline-block px-5 py-2.5 bg-signal text-pit font-semibold rounded-sm hover:bg-signal/90 transition-colors"
                >
                  Schedule Expansion Strategy Session
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
