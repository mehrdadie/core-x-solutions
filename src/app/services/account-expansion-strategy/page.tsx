import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import RelatedServices from "@/components/services/RelatedServices"
import Reveal from "@/components/ui/Reveal"

const title = "Account Expansion Strategy | Grow Revenue Per Customer"
const description =
  "Systematize account expansion. Identify expansion-ready accounts, build playbooks, align sales and CS. Grow net revenue retention (NRR)."

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
    images: [{ url: "/services/opengraph-image", width: 1200, height: 630 }],
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
                <Link href="/services" className="tag transition-colors hover:text-signal">
                  ← All services
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
                High-NRR companies grow faster with less CAC. Build a systematic expansion machine
                powered by data and playbooks.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell border-t border-rule-2">
            <Reveal>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Building Your Expansion Machine
                </h2>

                <div className="min-w-0">
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
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-signal/40 bg-signal-soft font-mono text-[12px] text-signal">
                          {item.step}
                        </div>
                        <div>
                          <h3 className="font-semibold text-[1rem] mb-1">{item.title}</h3>
                          <p className="copy-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Expansion Metrics to Track
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    <p>
                      <strong>NRR (Net Revenue Retention):</strong> Revenue from existing customers
                      (expansion - churn). Target: 120%+.
                    </p>
                    <p>
                      <strong>Expansion ARR:</strong> New ARR from existing customers. Growing
                      faster than new sales = health indicator.
                    </p>
                    <p>
                      <strong>Win rate by motion:</strong> Which expansion plays are working? Where
                      to double down?
                    </p>
                    <p>
                      <strong>Average expansion deal size:</strong> Are expansion deals getting
                      larger over time?
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="panel border-l-2 border-l-signal p-6 md:p-8">
                <p className="font-semibold text-bone mb-3">
                  Build your account expansion strategy
                </p>
                <p className="copy mb-5">
                  Work with a consultant to systematize expansion and grow NRR.
                </p>
                <Link href="#contact" className="btn btn-primary">
                  Schedule Expansion Strategy Session
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <RelatedServices current="/services/account-expansion-strategy" />

        <FinalCta />
      </main>

      <Footer />
    </>
  )
}
