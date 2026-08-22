import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import RelatedServices from "@/components/services/RelatedServices"
import Reveal from "@/components/ui/Reveal"

const title = "Sales Activity Tracking | Measure and Improve Rep Productivity"
const description =
  "Track sales rep activity: calls, emails, meetings, demos. Measure activity levels and productivity. Drive accountability with data."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/sales-activity-tracking" },
  openGraph: {
    type: "article",
    url: `${profile.url}/services/sales-activity-tracking`,
    siteName: profile.name,
    title,
    description,
    locale: "en_GB",
  },
  twitter: { card: "summary_large_image", title, description },
}

export default function SalesActivityTrackingPage() {
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
                Sales Activity Tracking: Measure What Drives Results
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="lead mt-8">
                Activity data reveals rep productivity gaps and performance drivers. Track calls,
                emails, meetings. Drive accountability with transparency.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell border-t border-rule-2">
            <Reveal>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Core Activity Metrics
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    {[
                      [
                        "Calls made per day",
                        "Baseline activity. Target: 20+ for SDRs, 10+ for AEs",
                      ],
                      ["Emails sent per day", "Outreach volume. Track opens and clicks too."],
                      ["Meetings scheduled", "Leading indicator of pipeline. Critical metric."],
                      ["Demos delivered", "Sales activity that directly drives deals."],
                      ["Deals created/moved", "Outcome metric. Activity → outcome correlation."],
                    ].map(([metric, target], i) => (
                      <div key={i} className="flex justify-between pb-3 border-b border-rule">
                        <span className="font-semibold">{metric}</span>
                        <span className="text-bone-2 text-[14px]">{target}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Activity Tracking Tools
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    <p>
                      <strong>CRM native:</strong> HubSpot and Salesforce both track activity
                      natively. Limited automation.
                    </p>
                    <p>
                      <strong>Sales intelligence:</strong> Outreach, SalesLoft, Gong. Track calls
                      and emails. AI scoring.
                    </p>
                    <p>
                      <strong>Calendar sync:</strong> Automatically log meetings from calendar.
                      Minimal rep effort.
                    </p>
                    <p>
                      <strong>Phone/email platforms:</strong> Integrated activity logging. Real-time
                      data.
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="panel border-l-2 border-l-signal p-6 md:p-8">
                <p className="font-semibold text-bone mb-3">
                  Set up activity tracking and coaching
                </p>
                <p className="copy mb-5">
                  Build activity dashboards to improve rep productivity and hold teams accountable.
                </p>
                <Link href="#contact" className="btn btn-primary">
                  Setup Activity Tracking
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <RelatedServices current="/services/sales-activity-tracking" />

        <FinalCta />
      </main>

      <Footer />
    </>
  )
}
