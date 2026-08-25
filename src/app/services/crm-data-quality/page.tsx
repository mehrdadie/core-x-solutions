import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import RelatedServices from "@/components/services/RelatedServices"
import Reveal from "@/components/ui/Reveal"

const title = "CRM Data Quality Standards | Clean Your Database"
const description =
  "Establish CRM data quality standards. Duplicate removal, field validation, audit trails. Keep your CRM clean and trustworthy."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/crm-data-quality" },
  openGraph: {
    type: "article",
    url: `${profile.url}/services/crm-data-quality`,
    siteName: profile.name,
    title,
    description,
    locale: "en_GB",
    images: [{ url: "/services/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description },
}

export default function CrmDataQualityPage() {
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
                CRM Data Quality: Build Trust in Your Database
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="lead mt-8">
                Bad data kills decisions. Duplicate records, missing emails, stale fields—garbage
                in, garbage out. Learn to build and maintain a clean CRM.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell border-t border-rule-2">
            <Reveal>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  The Data Quality Cost
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    <p>
                      <strong>Bad data breaks automation.</strong> Workflows fail on incomplete
                      fields. Leads route to wrong reps. Campaigns email duplicates.
                    </p>
                    <p>
                      <strong>Reporting becomes fiction.</strong> Pipeline numbers include duplicate
                      deals. Forecasts are wrong. Leadership decisions are based on noise.
                    </p>
                    <p>
                      <strong>Trust erodes.</strong> Sales and marketing distrust the CRM. They keep
                      their own spreadsheets. The system becomes useless.
                    </p>
                    <p>
                      <strong>Cost: 20% of your revenue is at risk.</strong> That's industry average
                      for data quality issues.
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Data Quality Standards to Build
                </h2>

                <div className="min-w-0">
                  <div className="space-y-6">
                    {[
                      {
                        standard: "Required Fields",
                        desc: "Every contact must have: email, phone, company. Every deal must have: amount, close date, stage.",
                      },
                      {
                        standard: "Format Validation",
                        desc: "Phone numbers follow format. Emails are valid. Dates are in the right format. Fields have only allowed values.",
                      },
                      {
                        standard: "Deduplication",
                        desc: "No duplicate contacts or companies. Merge tool runs weekly. Fuzzy matching finds similar records.",
                      },
                      {
                        standard: "Recency Standards",
                        desc: "Contacts not touched in 24 months are archived. Last contact date is updated daily. Notes are current.",
                      },
                      {
                        standard: "Audit Trails",
                        desc: "Track who changed what and when. Catch unauthorized edits. Enable rollbacks if needed.",
                      },
                    ].map((item) => (
                      <div key={item.standard} className="border-l-2 border-signal pl-6">
                        <h3 className="font-semibold text-[1.05rem] mb-2">{item.standard}</h3>
                        <p className="copy-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="panel border-l-2 border-l-signal p-6 md:p-8">
                <p className="font-semibold text-bone mb-3">Clean and maintain your CRM data</p>
                <p className="copy mb-5">
                  Work with a{" "}
                  <Link
                    href="/services/revenue-operations-consultant"
                    className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                  >
                    RevOps consultant
                  </Link>{" "}
                  to audit, clean, and establish data governance.
                </p>
                <Link href="#contact" className="btn btn-primary">
                  Get Your Data Quality Audit
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <RelatedServices current="/services/crm-data-quality" />

        <FinalCta />
      </main>

      <Footer />
    </>
  )
}
