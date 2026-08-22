import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import RelatedServices from "@/components/services/RelatedServices"
import Reveal from "@/components/ui/Reveal"

const title = "Email Engagement Tracking | Track Opens, Clicks, Replies"
const description =
  "Track email engagement automatically. Opens, clicks, replies logged in CRM. Real-time engagement scoring. Stop guessing about interest."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/email-engagement-tracking" },
  openGraph: {
    type: "article",
    url: `${profile.url}/services/email-engagement-tracking`,
    siteName: profile.name,
    title,
    description,
    locale: "en_GB",
  },
  twitter: { card: "summary_large_image", title, description },
}

export default function EmailEngagementTrackingPage() {
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
                Email Engagement Tracking: Know Who's Interested
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="lead mt-8">
                Email opens and clicks are your first signal of interest. Track them automatically.
                Use engagement to score leads and time outreach.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell border-t border-rule-2">
            <Reveal>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Email Engagement Signals
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    <p>
                      <strong>Opens:</strong> Contact opened email. Baseline interest indicator.
                    </p>
                    <p>
                      <strong>Clicks:</strong> Contact clicked link. Higher intent. Potential
                      conversion signal.
                    </p>
                    <p>
                      <strong>Replies:</strong> Contact replied to email. Highest intent.
                      Sales-ready lead.
                    </p>
                    <p>
                      <strong>Engagement frequency:</strong> How often are they engaging? Declining
                      engagement = losing interest.
                    </p>
                    <p>
                      <strong>Link clicks:</strong> Which links do they click? Reveals interest
                      areas. Use for messaging.
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Email Tracking Tools
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    <p>
                      <strong>HubSpot:</strong> Native email tracking. Embedded in CRM. Simple and
                      effective.
                    </p>
                    <p>
                      <strong>Outreach/SalesLoft:</strong> Advanced tracking. Multi-touch sequences.
                      Sales rep productivity tools.
                    </p>
                    <p>
                      <strong>Mailchimp/Klaviyo:</strong> Email platform tracking. Good for
                      campaigns. Limited CRM integration.
                    </p>
                    <p>
                      <strong>N8n/Make:</strong> Custom automation. Sync tracking data from email to
                      CRM. Most flexibility.
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="panel border-l-2 border-l-signal p-6 md:p-8">
                <p className="font-semibold text-bone mb-3">Set up email engagement tracking</p>
                <p className="copy mb-5">
                  Integrate email tracking with your CRM for real-time engagement scoring.
                </p>
                <Link href="#contact" className="btn btn-primary">
                  Setup Email Tracking
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <RelatedServices current="/services/email-engagement-tracking" />

        <FinalCta />
      </main>

      <Footer />
    </>
  )
}
