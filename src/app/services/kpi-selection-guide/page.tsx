import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import RelatedServices from "@/components/services/RelatedServices"
import Reveal from "@/components/ui/Reveal"

const title = "KPI Selection Guide | Choose the Right Metrics"
const description =
  "Select the right KPIs for your business. Revenue KPIs, pipeline KPIs, efficiency KPIs. Measure what matters. Drive behaviour with metrics."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/kpi-selection-guide" },
  openGraph: {
    type: "article",
    url: `${profile.url}/services/kpi-selection-guide`,
    siteName: profile.name,
    title,
    description,
    locale: "en_GB",
    images: [{ url: "/services/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description },
}

export default function KpiSelectionGuidePage() {
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
                KPI Selection: Measure What Drives Growth
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="lead mt-8">
                Too many metrics confuse. Too few miss important signals. Select 3-5 core KPIs that
                align to strategy. Measure ruthlessly.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell border-t border-rule-2">
            <Reveal>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  KPI Categories
                </h2>

                <div className="min-w-0">
                  <div className="space-y-6">
                    {[
                      {
                        category: "Revenue KPIs",
                        metrics: "ARR, MRR, Revenue Growth %, NRR, Win Rate",
                        owner: "CEO/CFO",
                      },
                      {
                        category: "Pipeline KPIs",
                        metrics:
                          "Pipeline generation, pipeline coverage, pipeline velocity, forecast accuracy",
                        owner: "VP Sales/RevOps",
                      },
                      {
                        category: "Sales KPIs",
                        metrics:
                          "Deals closed, avg deal size, sales cycle, conversion rate, quota attainment",
                        owner: "Sales Manager",
                      },
                      {
                        category: "Customer KPIs",
                        metrics: "Churn rate, NPS, health score, expansion rate, retention",
                        owner: "VP CS/Customer Success",
                      },
                      {
                        category: "Marketing KPIs",
                        metrics:
                          "Lead generation, lead quality, cost per lead, lead to opportunity rate, pipeline contribution",
                        owner: "VP Marketing",
                      },
                    ].map((item) => (
                      <div key={item.category} className="panel p-5">
                        <h3 className="font-semibold text-[1.05rem] mb-2">{item.category}</h3>
                        <p className="copy-sm mb-1">
                          <strong>Metrics:</strong> {item.metrics}
                        </p>
                        <p className="copy-sm">
                          <strong>Owner:</strong> {item.owner}
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
                  KPI Selection Framework
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    <p>
                      <strong>1. Start with strategy.</strong> What are your top 3 goals? (e.g.,
                      grow ARR 50%, improve NRR, reduce churn)
                    </p>
                    <p>
                      <strong>2. Map KPIs to goals.</strong> What metrics measure progress toward
                      each goal?
                    </p>
                    <p>
                      <strong>3. Select 3-5 per role.</strong> Each role owns 3-5 KPIs. No more.
                      Focus matters.
                    </p>
                    <p>
                      <strong>4. Set targets and cadence.</strong> Monthly reviews. Quarterly
                      adjustments. Yearly planning.
                    </p>
                    <p>
                      <strong>5. Automate tracking.</strong> Dashboards update daily. No manual
                      reporting.
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="panel border-l-2 border-l-signal p-6 md:p-8">
                <p className="font-semibold text-bone mb-3">
                  Select and implement your KPI framework
                </p>
                <p className="copy mb-5">
                  Work with a consultant to design KPIs aligned to your strategy.
                </p>
                <Link href="#contact" className="btn btn-primary">
                  KPI Framework Workshop
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <RelatedServices current="/services/kpi-selection-guide" />

        <FinalCta />
      </main>

      <Footer />
    </>
  )
}
