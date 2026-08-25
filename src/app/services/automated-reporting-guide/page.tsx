import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import RelatedServices from "@/components/services/RelatedServices"
import Reveal from "@/components/ui/Reveal"

const title = "Automated Reporting | Real-Time Sales & Marketing Dashboards"
const description =
  "Build automated dashboards for sales, marketing, and leadership. Real-time pipeline visibility, forecasts, and metrics. No more manual reports."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/automated-reporting-guide" },
  openGraph: {
    type: "article",
    url: `${profile.url}/services/automated-reporting-guide`,
    siteName: profile.name,
    title,
    description,
    locale: "en_GB",
    images: [{ url: "/services/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description },
}

export default function AutomatedReportingGuidePage() {
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
                Automated Reporting: Build Real-Time Dashboards
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="lead mt-8">
                Stop spending 20 hours a week building reports. Automated dashboards deliver
                pipeline health, forecasts, and KPIs to leadership every morning. Built once, runs
                forever.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell border-t border-rule-2">
            <Reveal>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  The Manual Reporting Problem
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    <p>
                      <strong>Manual reporting is expensive.</strong> Reps spend 3-5 hours per week
                      on manual status updates, deal logging, and admin work that adds zero value.
                    </p>
                    <p>
                      <strong>Reports are always stale.</strong> Monday morning report is built from
                      Friday data. By Tuesday, it's out of date and decisions are made on old
                      numbers.
                    </p>
                    <p>
                      <strong>Errors cascade.</strong> One formula error in a spreadsheet propagates
                      to strategy decisions. One missed field means one deal falls out of forecasts.
                    </p>
                    <p>
                      <strong>Automation solves all three.</strong> Dashboards update every hour. No
                      manual work. 100% data quality. Let a{" "}
                      <Link
                        href="/services/revenue-operations-consultant"
                        className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                      >
                        data automation consultant
                      </Link>{" "}
                      build yours.
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Reports You Should Automate
                </h2>

                <div className="min-w-0">
                  <div className="space-y-6">
                    {[
                      {
                        report: "Weekly Pipeline Report",
                        metrics: "Total pipeline, stage breakdown, forecast accuracy, bottlenecks",
                        audience: "Leadership, sales ops",
                        frequency: "Every Monday 8am",
                      },
                      {
                        report: "Daily Lead Report",
                        metrics: "New leads, lead source, routing accuracy, response time",
                        audience: "Sales team",
                        frequency: "Daily 7am",
                      },
                      {
                        report: "Monthly Revenue Report",
                        metrics:
                          "Closed deals, revenue by source, channel ROI, forecast vs. actual",
                        audience: "Executive team",
                        frequency: "First of month",
                      },
                      {
                        report: "Rep Performance Dashboard",
                        metrics: "Deals in pipeline, close rate, avg deal size, forecast accuracy",
                        audience: "Each sales rep (personalized)",
                        frequency: "Real-time",
                      },
                      {
                        report: "Marketing Performance",
                        metrics: "Campaigns, leads, MQL, SQL, pipeline, revenue attribution",
                        audience: "Marketing + leadership",
                        frequency: "Weekly",
                      },
                    ].map((item) => (
                      <div
                        key={item.report}
                        className="panel p-5 border border-rule/50 hover:border-signal/30 transition-colors"
                      >
                        <h3 className="font-semibold text-[1.05rem] mb-2">{item.report}</h3>
                        <div className="space-y-1 text-[14px] text-bone-2">
                          <div>
                            <strong>Metrics:</strong> {item.metrics}
                          </div>
                          <div>
                            <strong>Audience:</strong> {item.audience}
                          </div>
                          <div>
                            <strong>Frequency:</strong> {item.frequency}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Building Automated Reports
                </h2>

                <div className="min-w-0">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-[1.1rem] mb-4">3 Approaches</h3>
                      <div className="space-y-4">
                        <div>
                          <p className="font-semibold text-[1rem] mb-2">
                            CRM Native (HubSpot, Salesforce)
                          </p>
                          <p className="copy-sm">
                            Built-in dashboards and custom reports. Best for: simple reports,
                            limited integrations.
                          </p>
                        </div>
                        <div>
                          <p className="font-semibold text-[1rem] mb-2">
                            BI Tools (Looker, Tableau, Data Studio)
                          </p>
                          <p className="copy-sm">
                            Advanced dashboards, multiple data sources. Best for: complex reports,
                            many integrations.
                          </p>
                        </div>
                        <div>
                          <p className="font-semibold text-[1rem] mb-2">
                            Automation (n8n, Make, Zapier)
                          </p>
                          <p className="copy-sm">
                            Custom workflows, email delivery, multi-system sync. Best for: unique
                            logic, automated delivery.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="panel border-l-2 border-l-signal p-6">
                      <p className="font-semibold text-bone mb-3">Implementation Timeline</p>
                      <ul className="space-y-2 text-[14px] text-bone-2">
                        <li>• Week 1: Audit current reports, data sources, audience needs</li>
                        <li>• Week 2-3: Build dashboards, connect data, test</li>
                        <li>• Week 4: Deploy, train teams, gather feedback</li>
                        <li>• Ongoing: Monitor, iterate, add new reports quarterly</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="panel border-l-2 border-l-signal p-6 md:p-8">
                <p className="font-semibold text-bone mb-3">
                  Get automated reporting built for your team
                </p>
                <p className="copy mb-5">
                  Let a{" "}
                  <Link
                    href="/services/data-automation-consultant"
                    className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                  >
                    data automation consultant
                  </Link>{" "}
                  design and build automated dashboards for your business.
                </p>
                <Link href="#contact" className="btn btn-primary">
                  Schedule Your Reporting Audit
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <RelatedServices current="/services/automated-reporting-guide" />

        <FinalCta />
      </main>

      <Footer />
    </>
  )
}
