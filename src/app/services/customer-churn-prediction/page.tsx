import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import Reveal from "@/components/ui/Reveal"

const title = "Customer Churn Prediction | Prevent Revenue Loss"
const description = "Predict which customers will churn before they leave. Automated alerts, retention playbooks, save revenue. Proactive customer success."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/customer-churn-prediction" },
  openGraph: {
    type: "article",
    url: `${profile.url}/services/customer-churn-prediction`,
    siteName: profile.name,
    title,
    description,
    locale: "en_GB",
  },
  twitter: { card: "summary_large_image", title, description },
}

export default function CustomerChurnPredictionPage() {
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
                Churn Prediction: Prevent Revenue Loss Before It Happens
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="lead mt-8">
                Churn is predictable. Early warning signs appear weeks before cancellation. Detect them early and save the customer.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell space-y-16 md:space-y-20">
            <Reveal>
              <article>
                <h2 className="font-display text-[1.8rem] md:text-[2.2rem] leading-[1.1] font-semibold mb-6">
                  Churn Indicators
                </h2>
                <div className="space-y-4 text-[15px] leading-[1.65] text-bone-2">
                  <p><strong>Usage drop:</strong> Customers using product 50% less than baseline.</p>
                  <p><strong>Support tickets spike:</strong> Sudden increase in help requests before churn.</p>
                  <p><strong>Feature non-adoption:</strong> Customer not using key features they paid for.</p>
                  <p><strong>Engagement decline:</strong> No logins in 14+ days or declining login frequency.</p>
                  <p><strong>NPS detractor:</strong> Recent NPS survey score below 6.</p>
                  <p><strong>Payment issues:</strong> Failed card, payment declined multiple times.</p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article>
                <h2 className="font-display text-[1.8rem] md:text-[2.2rem] leading-[1.1] font-semibold mb-6">
                  Churn Retention Playbook
                </h2>
                <div className="space-y-4 text-[15px] leading-[1.65] text-bone-2">
                  <p><strong>Red Alert (High Risk):</strong> CS calls customer. Uncovers issue. Offers discount, feature, or custom solution.</p>
                  <p><strong>Yellow Alert (Moderate Risk):</strong> Auto-send education content. Schedule training call. Check in after 1 week.</p>
                  <p><strong>Green (Stable):</strong> Monitor for changes. Proactive outreach quarterly.</p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-sm border-2 border-signal/20 bg-signal/5 p-6 md:p-8">
                <p className="font-semibold text-bone mb-3">Set up churn prediction and retention</p>
                <p className="text-[15px] text-bone-2 mb-4">
                  Build automated churn alerts and retention playbooks.
                </p>
                <Link
                  href="#contact"
                  className="inline-block px-5 py-2.5 bg-signal text-pit font-semibold rounded-sm hover:bg-signal/90 transition-colors"
                >
                  Schedule Churn Audit
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
