import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import RelatedServices from "@/components/services/RelatedServices"
import Reveal from "@/components/ui/Reveal"

const title = "Data Automation Consultant | Workflow Automation Services"
const description =
  "Automate manual work. Expert workflow automation for lead routing, reporting, data sync, and customer intelligence using n8n, Make, and Zapier."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/data-automation-consultant" },
  openGraph: {
    type: "article",
    url: `${profile.url}/services/data-automation-consultant`,
    siteName: profile.name,
    title,
    description,
    locale: "en_GB",
  },
  twitter: { card: "summary_large_image", title, description },
}

export default function DataAutomationConsultantPage() {
  return (
    <>
      <Header />

      <main id="main">
        <section className="border-b border-rule pt-[124px] pb-16 md:pt-[148px] md:pb-20">
          <div className="shell">
            <Reveal>
              <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-rule pb-5">
                <p className="marker">Services</p>
                <Link href="/services" className="tag transition-colors hover:text-signal">
                  ← All services
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-10 font-display text-[clamp(2.3rem,5.6vw,4.2rem)] leading-[1.02] font-semibold tracking-[-0.035em]">
                Data Automation Consultant: Automate Your Revenue Operations
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="lead mt-8">
                Stop doing manual work. We automate the tasks that waste your team's time: lead
                routing, reporting, data sync, customer scoring, and more.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell border-t border-rule-2">
            <Reveal>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  What Data Automation Solves
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    {[
                      ["Manual reporting", "20+ hours/week"],
                      ["Lead routing delays", "Hours lost per lead"],
                      ["Attribution tracking errors", "Wrong channel credit"],
                      ["Data entry mistakes", "Cascading errors"],
                      ["Delayed customer insights", "Decisions made on stale data"],
                    ].map(([problem, impact]) => (
                      <div
                        key={problem}
                        className="flex justify-between items-baseline border-b border-rule pb-3"
                      >
                        <span>{problem}</span>
                        <span className="text-signal font-semibold text-[14px]">
                          {impact} saved
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Data Automation Use Cases
                </h2>

                <div className="min-w-0">
                  <div className="space-y-6">
                    {[
                      {
                        useCase: "Daily Lead Scoring & Routing",
                        desc: "New leads are automatically scored based on engagement, then routed to the right rep based on territory, capacity, or skill.",
                      },
                      {
                        useCase: "Weekly Pipeline Reports",
                        desc: "Automated reports deliver pipeline health, forecast accuracy, and bottleneck analysis to leadership every Monday morning.",
                      },
                      {
                        useCase: "Monthly Revenue Attribution",
                        desc: "Revenue is automatically attributed to marketing touchpoints using your chosen model (linear, time-decay, data-driven).",
                      },
                      {
                        useCase: "Customer Health Scoring",
                        desc: "Usage, support tickets, NPS, and payment status are combined into a real-time health score for each account.",
                      },
                      {
                        useCase: "Feedback Loop Automation",
                        desc: "Customer feedback from surveys, support tickets, and calls is automatically tagged and sent to the product team.",
                      },
                    ].map((item) => (
                      <div key={item.useCase} className="border-l-2 border-signal pl-6">
                        <h3 className="font-semibold text-[1.05rem] mb-2">{item.useCase}</h3>
                        <p className="copy-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Automation Platforms We Use
                </h2>

                <div className="min-w-0">
                  <div className="space-y-6">
                    {[
                      {
                        platform: "n8n",
                        desc: "Open-source, flexible, custom workflows for complex logic. Best for: unique requirements, long-term cost savings.",
                      },
                      {
                        platform: "Make",
                        desc: "Visual workflow builder, 1000+ integrations, easy maintenance. Best for: quick wins, non-technical teams.",
                      },
                      {
                        platform: "Zapier",
                        desc: "No-code automation, massive app library, great for quick wins. Best for: simple 1-2 step automations.",
                      },
                      {
                        platform: "Custom Python/API",
                        desc: "Hand-built solutions for complex data transformations. Best for: high-volume, performance-critical flows.",
                      },
                    ].map((item) => (
                      <div
                        key={item.platform}
                        className="panel p-5 border border-rule/50 hover:border-signal/30 transition-colors"
                      >
                        <h3 className="font-semibold text-[1.05rem] mb-2">{item.platform}</h3>
                        <p className="copy-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.15}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Typical Automation ROI
                </h2>

                <div className="min-w-0">
                  <div className="grid gap-4 md:grid-cols-2 mb-6">
                    {[
                      ["Time Saved", "15-20 hours/week"],
                      ["Annual Savings", "$50K-100K (team time)"],
                      ["Decision Speed", "40% faster"],
                      ["Data Quality", "0% manual errors"],
                    ].map(([metric, value], i) => (
                      <div key={i} className="panel border-l-2 border-l-signal p-4 text-center">
                        <p className="text-[14px] text-bone-2 mb-2">{metric}</p>
                        <p className="font-semibold text-[1.2rem] text-signal">{value}</p>
                      </div>
                    ))}
                  </div>
                  <p className="copy-sm">
                    Most automations pay for themselves within 3-6 months through time savings
                    alone.
                  </p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="panel border-l-2 border-l-signal p-6 md:p-8">
                <p className="font-semibold text-bone mb-3">
                  Explore data automation for your business
                </p>
                <p className="copy mb-5">
                  Let a{" "}
                  <Link
                    href="/services/revenue-operations-consultant"
                    className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                  >
                    data automation consultant
                  </Link>{" "}
                  identify quick wins and build your automation roadmap.
                </p>
                <Link href="#contact" className="btn btn-primary">
                  Get Automation Ideas
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <RelatedServices current="/services/data-automation-consultant" />

        <FinalCta />
      </main>

      <Footer />
    </>
  )
}
