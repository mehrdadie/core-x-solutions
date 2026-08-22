import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import Reveal from "@/components/ui/Reveal"

const title = "CRM Data Migration | Switch Systems Without Losing Data"
const description = "Plan and execute CRM migrations. HubSpot to Salesforce. Salesforce to Zoho. Clean data, map fields, validate. Zero data loss."

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
                <Link href="/" className="tag transition-colors hover:text-signal">
                  ← Back to home
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
                CRM migrations are high-stakes. One mistake and you lose deal history, contact details, audit trails. Plan meticulously. Execute carefully.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell space-y-16 md:space-y-20">
            <Reveal>
              <article>
                <h2 className="font-display text-[1.8rem] md:text-[2.2rem] leading-[1.1] font-semibold mb-6">
                  Migration Phases
                </h2>
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
                      <p className="text-[15px] text-bone-2">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article>
                <h2 className="font-display text-[1.8rem] md:text-[2.2rem] leading-[1.1] font-semibold mb-6">
                  Common Pitfalls to Avoid
                </h2>
                <div className="space-y-4 text-[15px] leading-[1.65] text-bone-2">
                  <p>• Migrating without cleaning data first. Garbage in, garbage out.</p>
                  <p>• Failing to map fields correctly. Data ends up in wrong places.</p>
                  <p>• Not testing thoroughly. Issues discovered live are expensive.</p>
                  <p>• Rushing go-live. Better to delay and be right than ship broken.</p>
                  <p>• No rollback plan. What if something breaks? Can you restore?</p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-sm border-2 border-signal/20 bg-signal/5 p-6 md:p-8">
                <p className="font-semibold text-bone mb-3">Plan your CRM migration</p>
                <p className="text-[15px] text-bone-2 mb-4">
                  Work with a consultant to plan and execute your CRM switch safely.
                </p>
                <Link
                  href="#contact"
                  className="inline-block px-5 py-2.5 bg-signal text-pit font-semibold rounded-sm hover:bg-signal/90 transition-colors"
                >
                  Migration Planning Session
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
