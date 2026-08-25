import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import RelatedServices from "@/components/services/RelatedServices"
import Reveal from "@/components/ui/Reveal"

const title = "Salesforce RevOps Consulting | Governance, Flows and Reporting"
const description =
  "Salesforce RevOps: order of execution, flow governance, the sharing model, and the org debt that quietly makes your reporting unreliable."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/salesforce-revops-consulting" },
  openGraph: {
    type: "article",
    url: `${profile.url}/services/salesforce-revops-consulting`,
    siteName: profile.name,
    title,
    description,
    locale: "en_GB",
    images: [{ url: "/services/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description },
}

const debt = [
  {
    name: "Automation nobody can trace",
    detail:
      "Workflow rules, process builders, flows and triggers all firing on the same object, built by different people over several years. A field updates and nobody can say which of the four did it. The order of execution is documented by Salesforce; what your org actually does is not.",
  },
  {
    name: "Validation rules as archaeology",
    detail:
      "Rules added to stop one bad import in 2021, still blocking legitimate records today. Every one of them is a decision someone made for a reason that is no longer written down anywhere.",
  },
  {
    name: "Fields that exist twice",
    detail:
      "Two custom fields holding the same fact because the second team could not find the first. Reports pick one, dashboards pick the other, and the numbers differ by however many records use the wrong one.",
  },
  {
    name: "A sharing model grown by exception",
    detail:
      "Role hierarchy plus sharing rules plus manual shares plus a public group added for one project. Nobody is confident who can see what, so the safe answer becomes giving everyone more access than they need.",
  },
  {
    name: "Picklists with no owner",
    detail:
      "Lead source with forty values, eight of which mean the same thing in different capitalisations. Attribution built on this is arithmetic performed on a mess.",
  },
]

const approach = [
  {
    n: "01",
    title: "Inventory the automation",
    body: "List every flow, trigger, workflow rule, process builder and validation rule per object, with what fires it and what it writes. Most orgs have never seen this on one page, and it is usually where the reporting problem turns out to live.",
  },
  {
    n: "02",
    title: "Consolidate onto flows",
    body: "Workflow Rules and Process Builder are retired. Migrating is not optional forever, and doing it deliberately — one record-triggered flow per object, ordered — is far cheaper than doing it under a deadline.",
  },
  {
    n: "03",
    title: "Fix the picklists and the identity",
    body: "Agree the values, map the old ones, enforce at the point of entry. Establish the external ID that other systems will key on before any integration is built against the org.",
  },
  {
    n: "04",
    title: "Rebuild the sharing model",
    body: "From an agreed statement of who should see what, rather than by patching the current state. Field-level security matters here too — an integration user that cannot see a field writes nulls over real values.",
  },
  {
    n: "05",
    title: "Report from outside the org",
    body: "Salesforce reporting is good at Salesforce data. The moment a question needs billing or ad spend alongside it, the answer belongs in a warehouse with Salesforce as one conformed source.",
  },
]

export default function SalesforceRevOpsConsultingPage() {
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
                Salesforce RevOps consulting
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="lead mt-8 max-w-2xl">
                Salesforce will do almost anything you ask, which is the problem. After a few years
                of everyone asking, the org holds a decade of decisions nobody wrote down — and the
                reporting is unreliable for reasons that are all, individually, reasonable.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell border-t border-rule-2">
            <Reveal>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  The five kinds of org debt
                </h2>

                <div className="min-w-0">
                  <p className="copy mb-8">
                    These are what we find, in roughly this order of frequency. None of them are
                    anyone&rsquo;s fault; all of them compound.
                  </p>
                  <dl>
                    {debt.map((d) => (
                      <div key={d.name} className="border-b border-rule py-5 last:border-b-0">
                        <dt className="flex items-baseline gap-4">
                          <span
                            aria-hidden
                            className="h-[7px] w-[7px] shrink-0 translate-y-[-2px] bg-oxide"
                          />
                          <span className="font-display text-[17px] font-semibold text-bone">
                            {d.name}
                          </span>
                        </dt>
                        <dd className="copy-sm mt-2 pl-[23px]">{d.detail}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Order of execution is not trivia
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    <p>
                      When a record saves, Salesforce runs things in a defined sequence: validation
                      rules, before-save flows, before triggers, duplicate rules, after triggers,
                      assignment rules, workflow field updates, then processes and after-save flows
                      — and a field update can start the whole thing again.
                    </p>
                    <p>
                      <strong>
                        Almost every &ldquo;the automation is fighting itself&rdquo; problem is this
                        sequence
                      </strong>
                      : two pieces of logic writing the same field at different points, so the last
                      one wins and which one is last depends on how the record was created. A record
                      made by a rep behaves differently from the same record made by an integration,
                      and both look correct in isolation.
                    </p>
                    <p>
                      The practical rule:{" "}
                      <strong>one record-triggered flow per object per timing</strong>, with the
                      branching inside it, rather than six flows that each seemed small when someone
                      added it. Before-save for field updates on the same record — it is faster and
                      avoids a second save entirely.
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  How we work an org
                </h2>

                <div className="min-w-0">
                  <ol className="relative">
                    <span
                      aria-hidden
                      className="absolute top-3 bottom-3 left-[7px] w-px bg-rule md:left-[calc(48px+7px)]"
                    />
                    {approach.map((s) => (
                      <li
                        key={s.n}
                        className="relative grid gap-x-10 gap-y-2 pb-8 pl-9 last:pb-0 md:grid-cols-[48px_minmax(0,1fr)] md:pl-0"
                      >
                        <span
                          aria-hidden
                          className="absolute top-[7px] left-0 h-[15px] w-[15px] border border-signal bg-paper md:left-[48px]"
                        />
                        <span
                          aria-hidden
                          className="absolute top-[11px] left-1 h-[7px] w-[7px] bg-signal md:left-[52px]"
                        />
                        <span className="font-mono text-[12px] tracking-[0.1em] text-bone-3 md:pt-1">
                          {s.n}
                        </span>
                        <div className="md:pl-10">
                          <h3 className="font-display text-[1.15rem] font-semibold text-bone">
                            {s.title}
                          </h3>
                          <p className="copy-sm mt-2">{s.body}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  What we have done on Salesforce
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    <p>
                      Six of the engagements on our{" "}
                      <Link
                        href="/case-studies"
                        className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                      >
                        case studies page
                      </Link>{" "}
                      involve Salesforce. The ones most worth reading:
                    </p>
                    <p>
                      <strong>A B2B services group after two prior migrations</strong> had duplicate
                      companies, contacts on the wrong parent, ownership that no longer matched the
                      team, and campaign names that never agreed with the ad platform. We
                      deduplicated on deterministic keys first and fuzzy matching second, with a
                      documented survivorship rule, rebuilt ownership from an agreed source of
                      record, and enforced campaign naming at entry.{" "}
                      <strong>Duplicate rate went from 31% to 0.4% and stays there</strong>, because
                      the validation runs nightly rather than as a cleanup project.{" "}
                      <Link
                        href="/case-studies#crm-data-quality"
                        className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                      >
                        Case study
                      </Link>.
                    </p>
                    <p>
                      <strong>An inbound-led services business</strong> had enquiries landing in a
                      shared inbox with no owner and no clock. Validation, enrichment and routing on
                      rules the team agreed — territory, value band, current load — with an SLA
                      timer and escalation on expiry.{" "}
                      <strong>Median first response fell from ~2 hours to 4 minutes</strong>, with
                      no leads unassigned overnight.{" "}
                      <Link
                        href="/case-studies#lead-routing"
                        className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                      >
                        Case study
                      </Link>.
                    </p>
                    <p>
                      Also on Salesforce:{" "}
                      <Link
                        href="/case-studies#dormant-revenue"
                        className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                      >
                        £240k of pipeline surfaced from dormant records
                      </Link>
                      ,{" "}
                      <Link
                        href="/case-studies#call-intelligence"
                        className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                      >
                        every call classified and written back to the record
                      </Link>
                      , and{" "}
                      <Link
                        href="/case-studies#lead-sales-intelligence"
                        className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                      >
                        four systems resolved to one customer view
                      </Link>.
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  When you do not need us
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    <p>
                      If the work is entirely inside Salesforce — a new object, a set of flows, a
                      permissions rebuild — a good Salesforce administrator or a certified partner
                      will be faster and cheaper than us, and we will say so.
                    </p>
                    <p>
                      <strong>
                        We are worth calling when the problem crosses the org boundary
                      </strong>
                      : Salesforce disagreeing with billing, attribution that needs ad spend joined
                      to closed revenue, reporting that has outgrown what the org can answer, or an{" "}
                      <Link
                        href="/services/crm-integration-services"
                        className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                      >
                        integration
                      </Link>{" "}
                      that keeps producing duplicates.
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="panel border-l-2 border-l-signal p-6 md:p-8">
                <p className="mb-3 font-semibold text-bone">Start with the automation inventory</p>
                <p className="copy mb-5">
                  One page listing everything that fires on your core objects. It is the cheapest
                  diagnostic there is, and it usually explains the reporting problem on its own.
                </p>
                <Link href="#contact" className="btn btn-primary">
                  Discuss a project
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <RelatedServices current="/services/salesforce-revops-consulting" />

        <FinalCta />
      </main>

      <Footer />
    </>
  )
}
