import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import RelatedServices from "@/components/services/RelatedServices"
import Reveal from "@/components/ui/Reveal"

const title = "CRM Integration Services | Connecting Systems That Disagree"
const description =
  "Identity resolution, sync direction, conflict rules and the failures nobody plans for. How CRM integration works across Salesforce, HubSpot and billing."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/crm-integration-services" },
  openGraph: {
    type: "article",
    url: `${profile.url}/services/crm-integration-services`,
    siteName: profile.name,
    title,
    description,
    locale: "en_GB",
    images: [{ url: "/services/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description },
}

const patterns = [
  {
    name: "Point-to-point",
    when: "Two systems, one direction, a stable field list.",
    cost: "Cheap to build. Every new system multiplies the connections — five systems is ten integrations to maintain.",
  },
  {
    name: "Hub and spoke",
    when: "The CRM is genuinely the system of record and everything else reports into it.",
    cost: "Simple mental model. Fails when the CRM is not actually the authority on a field — billing usually is not.",
  },
  {
    name: "Warehouse as the join",
    when: "Several systems each hold part of the customer and you need to report across them.",
    cost: "More moving parts, but the only pattern where the join logic lives somewhere you can test and version.",
  },
]

const decisions = [
  {
    q: "What is the identity key?",
    a: "Email is not it. People change jobs, share inboxes and type addresses wrongly. You need a deterministic key first — a billing ID, a domain plus company name, an external ID written back on creation — and fuzzy matching only as the second pass, with a documented rule for which record survives.",
  },
  {
    q: "Which system wins each field?",
    a: "Not each record — each field. Billing owns payment status. The CRM owns owner and stage. Marketing automation owns consent. Write this down as a table before building anything, because the alternative is two systems overwriting each other on a loop.",
  },
  {
    q: "One direction or two?",
    a: "Two-way sync doubles the failure modes and creates the possibility of an update ping-ponging between systems. Default to one-way per field, in the direction of the owning system. Bidirectional only where a human genuinely edits the same field in both places.",
  },
  {
    q: "What happens when it fails at 3am?",
    a: "Not whether — when. A token expires, a rate limit trips, a field gets renamed by someone in another team. The integration needs a dead-letter queue, a retry with backoff, and an alert that names the record and the reason. Silent failure is the expensive kind.",
  },
  {
    q: "Is it idempotent?",
    a: "If the same message arrives twice — and it will, because retries exist — does it create a second record? An upsert keyed on a stable external ID is the difference between a retry being harmless and a retry being a duplicate.",
  },
]

const realities = [
  [
    "API rate limits",
    "Salesforce, HubSpot and most billing platforms cap calls per window. A backfill that ignores this gets throttled mid-run and leaves half the records updated — which is worse than none.",
  ],
  [
    "Field-level permissions",
    "The integration user often cannot see the field you are syncing. It fails silently, returns null, and overwrites a real value with an empty one.",
  ],
  [
    "Picklist drift",
    "Someone adds a stage in one system. The sync writes a value the other system rejects, and every record after it in the batch fails too.",
  ],
  [
    "Time zones and DST",
    "Two systems storing local time, one of them without an offset, and a reconciliation that is quietly an hour wrong twice a year.",
  ],
  [
    "Deletes",
    "Almost no integration handles them. A record deleted in the source lives forever in the destination, and your counts diverge by a little more each month.",
  ],
]

export default function CrmIntegrationServicesPage() {
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
                CRM integration services
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="lead mt-8 max-w-2xl">
                Connecting two systems is a weekend. Keeping them agreeing about the same customer,
                for years, through renamed fields and expired tokens and someone adding a picklist
                value on a Tuesday — that is the actual job.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell border-t border-rule-2">
            <Reveal>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  The integration is not the hard part
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    <p>
                      Every platform has an API and every automation tool has a connector. Getting a
                      record to move from one system to another is close to solved, and it is what
                      most integration projects scope for.
                    </p>
                    <p>
                      <strong>The hard part is agreement.</strong> Two systems now hold the same
                      customer, and sooner or later they will disagree about their name, their
                      owner, their stage or whether they still exist. An integration that has not
                      decided in advance how to settle that argument will settle it arbitrarily, and
                      you will find out from a report that is wrong in a way nobody can explain.
                    </p>
                    <p>Everything below is about deciding the arguments before they happen.</p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Three shapes, and what each costs you
                </h2>

                <div className="min-w-0">
                  <div className="space-y-6">
                    {patterns.map((p) => (
                      <div key={p.name} className="border-l-2 border-signal pl-6">
                        <h3 className="font-display text-[1.05rem] font-semibold text-bone">
                          {p.name}
                        </h3>
                        <p className="copy-sm mt-1.5">
                          <span className="text-bone">Use when:</span> {p.when}
                        </p>
                        <p className="copy-sm mt-1.5">{p.cost}</p>
                      </div>
                    ))}
                  </div>
                  <p className="copy mt-6">
                    Most businesses start point-to-point because the first integration is always two
                    systems. The question worth asking early is which one you will be running at
                    five systems, because that is where the maintenance cost stops being linear.
                  </p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Five questions to answer before building
                </h2>

                <div className="min-w-0">
                  <dl>
                    {decisions.map((d, i) => (
                      <div key={d.q} className="border-b border-rule py-5 last:border-b-0">
                        <dt className="flex items-baseline gap-4">
                          <span className="font-mono text-[12px] tabular-nums text-signal">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="font-display text-[17px] font-semibold text-bone">
                            {d.q}
                          </span>
                        </dt>
                        <dd className="copy-sm mt-2 md:pl-[36px]">{d.a}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  What actually breaks
                </h2>

                <div className="min-w-0">
                  <p className="copy mb-8">
                    None of these are exotic. All of them are things that will happen to a running
                    integration, and each one has a design decision that prevents it.
                  </p>
                  <dl>
                    {realities.map(([what, why]) => (
                      <div key={what} className="border-b border-rule py-4 last:border-b-0">
                        <dt className="font-display text-[16.5px] font-semibold text-bone">
                          {what}
                        </dt>
                        <dd className="copy-sm mt-1.5">{why}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  A worked example
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    <p>
                      A subscription business with an outbound sales team had CRM records in
                      Salesforce, call activity in Aircall, marketing source data in GoHighLevel and
                      payment history in Chargebee.{" "}
                      <strong>
                        Nobody could answer what actually happened with this customer without
                        opening four tabs and guessing.
                      </strong>
                    </p>
                    <p>
                      The work was identity resolution before anything else: lead, call, opportunity
                      and payment signals resolved to a single customer identity, deduplicated, then
                      combined into one view in PostgreSQL. Only once the identity held did the
                      reporting layer go on top.
                    </p>
                    <p>
                      <strong>
                        Four systems became one view, with 100% of calls matched to CRM records
                      </strong>{" "}
                      — including, for the first time, visibility of the leads nobody had ever
                      contacted.{" "}
                      <Link
                        href="/case-studies#lead-sales-intelligence"
                        className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                      >
                        Full case study
                      </Link>.
                    </p>
                    <p>
                      The same pattern at larger scale:{" "}
                      <Link
                        href="/case-studies#one-warehouse"
                        className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                      >
                        nine sources conformed to one model
                      </Link>{" "}
                      across three brands and three CRMs, with brand carried as a column rather than
                      as three separate reports that could disagree.
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Where this usually starts
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    <p>
                      An integration built on top of a CRM full of duplicates propagates the
                      duplicates. It is nearly always worth doing{" "}
                      <Link
                        href="/services/crm-data-quality"
                        className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                      >
                        data quality
                      </Link>{" "}
                      first, or at minimum establishing the identity key before the first sync runs.
                    </p>
                    <p>
                      If you are moving between platforms rather than connecting them, that is a{" "}
                      <Link
                        href="/services/crm-data-migration"
                        className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                      >
                        migration
                      </Link>{" "}
                      — a different job with a cutover, and one where the integration questions
                      above still all apply.
                    </p>
                    <p>
                      Platform specifics:{" "}
                      <Link
                        href="/services/salesforce-revops-consulting"
                        className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                      >
                        Salesforce
                      </Link>
                      ,{" "}
                      <Link
                        href="/services/hubspot-revops-consulting"
                        className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                      >
                        HubSpot
                      </Link>
                      ,{" "}
                      <Link
                        href="/services/zoho-crm-automation"
                        className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                      >
                        Zoho
                      </Link>.
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="panel border-l-2 border-l-signal p-6 md:p-8">
                <p className="mb-3 font-semibold text-bone">
                  Tell us which systems disagree, and about what
                </p>
                <p className="copy mb-5">
                  That sentence is usually enough for us to say whether this is an afternoon, a
                  fortnight, or a data quality problem in disguise.
                </p>
                <Link href="#contact" className="btn btn-primary">
                  Discuss a project
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <RelatedServices current="/services/crm-integration-services" />

        <FinalCta />
      </main>

      <Footer />
    </>
  )
}
