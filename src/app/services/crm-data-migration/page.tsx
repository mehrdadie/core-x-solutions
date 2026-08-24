import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import RelatedServices from "@/components/services/RelatedServices"
import Reveal from "@/components/ui/Reveal"

const title = "CRM Data Migration | Switch Systems Without Losing Data"
const description =
  "Plan and execute CRM migrations. HubSpot to Salesforce. Salesforce to Zoho. Clean data, map fields, validate. Zero data loss."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/crm-data-migration" },
  openGraph: {
    type: "article",
    url: `${profile.url}/services/crm-data-migration`,
    siteName: profile.name,
    title,
    description,
    locale: "en_GB",
  },
  twitter: { card: "summary_large_image", title, description },
}

export default function CrmDataMigrationPage() {
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
                CRM Migration: Switch Systems Without Losing Data
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="lead mt-8">
                CRM migrations are high-stakes. One mistake and you lose deal history, contact
                details, audit trails. Plan meticulously. Execute carefully.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell border-t border-rule-2">
            <Reveal>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Migration Phases
                </h2>

                <div className="min-w-0">
                  <div className="space-y-8">
                    {[
                      {
                        phase: "Phase 1: Audit & Design (2-4 weeks)",
                        desc: "Understand old system. Design new system architecture. Plan field mappings.",
                      },
                      {
                        phase: "Phase 2: Data Cleaning (2-4 weeks)",
                        desc: "Remove duplicates. Validate fields. Standardize formats. Quality check.",
                      },
                      {
                        phase: "Phase 3: Migration Test (1-2 weeks)",
                        desc: "Dry-run migration. Validate data integrity. Fix issues. Repeat until clean.",
                      },
                      {
                        phase: "Phase 4: Production Cutover (1-2 days)",
                        desc: "Final migration. Notify teams. Decommission old system. Support go-live.",
                      },
                      {
                        phase: "Phase 5: Stabilization (2-4 weeks)",
                        desc: "Monitor for issues. Fix data inconsistencies. Train teams thoroughly.",
                      },
                    ].map((item) => (
                      <div key={item.phase}>
                        <h3 className="font-semibold text-[1.05rem] mb-2">{item.phase}</h3>
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
                  Common Pitfalls to Avoid
                </h2>

                <div className="min-w-0">
                  <ul className="copy">
                    <li className="flex items-start gap-4 border-b border-rule py-3 last:border-b-0">
                      <span aria-hidden className="mt-[9px] h-[7px] w-[7px] shrink-0 bg-signal" />
                      <span>Migrating without cleaning data first. Garbage in, garbage out.</span>
                    </li>
                    <li className="flex items-start gap-4 border-b border-rule py-3 last:border-b-0">
                      <span aria-hidden className="mt-[9px] h-[7px] w-[7px] shrink-0 bg-signal" />
                      <span>Failing to map fields correctly. Data ends up in wrong places.</span>
                    </li>
                    <li className="flex items-start gap-4 border-b border-rule py-3 last:border-b-0">
                      <span aria-hidden className="mt-[9px] h-[7px] w-[7px] shrink-0 bg-signal" />
                      <span>Not testing thoroughly. Issues discovered live are expensive.</span>
                    </li>
                    <li className="flex items-start gap-4 border-b border-rule py-3 last:border-b-0">
                      <span aria-hidden className="mt-[9px] h-[7px] w-[7px] shrink-0 bg-signal" />
                      <span>Rushing go-live. Better to delay and be right than ship broken.</span>
                    </li>
                    <li className="flex items-start gap-4 border-b border-rule py-3 last:border-b-0">
                      <span aria-hidden className="mt-[9px] h-[7px] w-[7px] shrink-0 bg-signal" />
                      <span>No rollback plan. What if something breaks? Can you restore?</span>
                    </li>
                  </ul>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="panel border-l-2 border-l-signal p-6 md:p-8">
                <p className="font-semibold text-bone mb-3">Plan your CRM migration</p>
                <p className="copy mb-5">
                  Work with a consultant to plan and execute your CRM switch safely.
                </p>
                <Link href="#contact" className="btn btn-primary">
                  Migration Planning Session
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <RelatedServices current="/services/crm-data-migration" />

        <FinalCta />
      </main>

      <Footer />
    </>
  )
}
