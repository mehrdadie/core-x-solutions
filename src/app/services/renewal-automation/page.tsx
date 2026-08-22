import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import Reveal from "@/components/ui/Reveal"

const title = "Renewal Automation | Reduce Renewal Churn"
const description = "Automate customer renewals. Renewal reminders, proactive outreach, churn prevention. Improve renewal rates and consistency."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/renewal-automation" },
  openGraph: {
    type: "article",
    url: `${profile.url}/services/renewal-automation`,
    siteName: profile.name,
    title,
    description,
    locale: "en_GB",
  },
  twitter: { card: "summary_large_image", title, description },
}

export default function RenewalAutomationPage() {
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
                Renewal Automation: Never Miss a Renewal
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="lead mt-8">
                Renewal management is often chaotic. Automate reminders, escalations, and outreach. Improve renewal rates and reduce last-minute surprises.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell space-y-16 md:space-y-20">
            <Reveal>
              <article>
                <h2 className="font-display text-[1.8rem] md:text-[2.2rem] leading-[1.1] font-semibold mb-6">
                  Renewal Workflow
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      milestone: "90 days before",
                      action: "CS reviews customer health. Creates renewal record in CRM.",
                    },
                    {
                      milestone: "60 days before",
                      action: "Sales gets renewal task. Initial outreach. Gauge sentiment.",
                    },
                    {
                      milestone: "30 days before",
                      action: "Price proposal sent. Discuss any changes or expansions.",
                    },
                    {
                      milestone: "14 days before",
                      action: "Escalate if no signature. Executive check-in.",
                    },
                    {
                      milestone: "Renewal date",
                      action: "Contract signed. Upsell or expansion opportunity offered.",
                    },
                  ].map((item) => (
                    <div key={item.milestone} className="flex justify-between pb-4 border-b border-rule">
                      <span className="font-semibold">{item.milestone}</span>
                      <span className="text-bone-2 text-[14px]">{item.action}</span>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article>
                <h2 className="font-display text-[1.8rem] md:text-[2.2rem] leading-[1.1] font-semibold mb-6">
                  Renewal Metrics
                </h2>
                <div className="space-y-4 text-[15px] leading-[1.65] text-bone-2">
                  <p><strong>Renewal rate:</strong> % of customers who renew. Target: 90%+.</p>
                  <p><strong>Net revenue retention:</strong> Existing customer revenue after churn and expansion.</p>
                  <p><strong>Days to renewal:</strong> How long from last day to signature. Shorter = better.</p>
                  <p><strong>Expansion per renewal:</strong> % of renewals that also expand. Track separately.</p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-sm border-2 border-signal/20 bg-signal/5 p-6 md:p-8">
                <p className="font-semibold text-bone mb-3">Automate your renewals</p>
                <p className="text-[15px] text-bone-2 mb-4">
                  Build renewal automation and playbooks to improve renewal rates.
                </p>
                <Link
                  href="#contact"
                  className="inline-block px-5 py-2.5 bg-signal text-pit font-semibold rounded-sm hover:bg-signal/90 transition-colors"
                >
                  Setup Renewal Automation
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
