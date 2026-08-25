import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import RelatedServices from "@/components/services/RelatedServices"
import Reveal from "@/components/ui/Reveal"

const title = "Dashboard Design Guide | Build Effective Data Visualizations"
const description =
  "Design dashboards that inform decision-making. Data visualization best practices. Build dashboards for sales, marketing, and leadership."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/reporting-dashboard-design" },
  openGraph: {
    type: "article",
    url: `${profile.url}/services/reporting-dashboard-design`,
    siteName: profile.name,
    title,
    description,
    locale: "en_GB",
    images: [{ url: "/services/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description },
}

export default function ReportingDashboardDesignPage() {
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
                Dashboard Design: Visualize Your Business
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="lead mt-8">
                Bad dashboards hide data. Good dashboards reveal it. Learn to design dashboards that
                drive decisions and accountability.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell border-t border-rule-2">
            <Reveal>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Dashboard Principles
                </h2>

                <div className="min-w-0">
                  <div className="space-y-6">
                    {[
                      {
                        principle: "Show actionable KPIs",
                        desc: "Include metrics that drive decisions. Skip vanity metrics that don't inform action.",
                      },
                      {
                        principle: "Visualize trends",
                        desc: "Line charts show trends over time. Bar charts compare categories. Gauge charts show progress toward target.",
                      },
                      {
                        principle: "Enable drill-down",
                        desc: "Click on aggregate number to see detail. Pipeline by rep, revenue by region, etc.",
                      },
                      {
                        principle: "Refresh frequently",
                        desc: "Daily dashboards stay relevant. Stale data is worthless. Automate updates.",
                      },
                      {
                        principle: "Less is more",
                        desc: "5-7 key metrics per dashboard. More than that and audiences get overwhelmed.",
                      },
                    ].map((item) => (
                      <div key={item.principle} className="border-l-2 border-signal pl-6">
                        <h3 className="font-semibold text-[1.05rem] mb-2">{item.principle}</h3>
                        <p className="copy-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Dashboard Types
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    <p>
                      <strong>Executive Dashboard:</strong> ARR, growth rate, churn, NRR, CAC, LTV.
                      High-level business health.
                    </p>
                    <p>
                      <strong>Sales Dashboard:</strong> Pipeline, forecast, win rate, deal velocity.
                      Rep performance and coaching.
                    </p>
                    <p>
                      <strong>Marketing Dashboard:</strong> Lead generation, cost per lead, lead to
                      opportunity, pipeline contribution.
                    </p>
                    <p>
                      <strong>Customer Success Dashboard:</strong> Churn, NRR, health score, renewal
                      rate. Retention and expansion focus.
                    </p>
                    <p>
                      <strong>Operational Dashboard:</strong> Data quality, sync health, error
                      rates. System and process monitoring.
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="panel border-l-2 border-l-signal p-6 md:p-8">
                <p className="font-semibold text-bone mb-3">Design dashboards for your business</p>
                <p className="copy mb-5">
                  Work with a consultant to build dashboards that drive accountability and
                  decisions.
                </p>
                <Link href="#contact" className="btn btn-primary">
                  Dashboard Design Workshop
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <RelatedServices current="/services/reporting-dashboard-design" />

        <FinalCta />
      </main>

      <Footer />
    </>
  )
}
