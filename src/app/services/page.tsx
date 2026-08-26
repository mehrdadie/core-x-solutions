import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import { serviceCount, serviceGroups } from "@/content/services"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import Reveal from "@/components/ui/Reveal"
import CollectionSchema from "@/components/CollectionSchema"

const title = `Services | ${profile.name}`
const description =
  "Three jobs: make the numbers agree, make the leads get owned, make the reporting run without a person. The full index of services, platform guides and operating playbooks sits underneath them."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services" },
  openGraph: {
    type: "website",
    url: `${profile.url}/services`,
    siteName: profile.name,
    title,
    description,
    locale: "en_GB",
    images: [{ url: "/services/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description },
}

/**
 * The index reads as a numbered document rather than a card grid: one running
 * count across all seven groups, so the page states its own size and you can
 * tell where you are in it. The groups themselves live in `content/services`,
 * shared with the related block at the foot of every service page.
 */
const pad = (n: number) => String(n).padStart(2, "0")

const sections = (() => {
  let n = 0
  return serviceGroups.map((group) => ({
    ...group,
    count: group.items.length,
    items: group.items.map((item) => ({ ...item, n: pad(++n) })),
  }))
})()

const total = serviceCount

/**
 * The three jobs the practice is actually hired for. The index below is long
 * because the keyword surface is long, and a reader who meets thirty-one
 * numbered rows before meeting an argument reads the page as a catalogue —
 * which invites a request for a quote on one line item rather than an
 * engagement. These three sit above it and say what is being sold; the index is
 * how the work divides once it has started.
 */
const jobs = [
  {
    n: "01",
    symptom: "The numbers do not match",
    body: "Two systems hold the same fact and disagree about it, so the forecast is argued rather than read. The work is deciding which system owns which field, writing the definitions down, and making the rest follow them.",
    href: "/services/revenue-operations-consultant",
    label: "Revenue operations consulting",
  },
  {
    n: "02",
    symptom: "The leads do not get owned",
    body: "A form is submitted, and somewhere between the ad platform, the CRM and whoever was meant to call, the lead stops being anybody's. The work is joining those systems so a record cannot fall between them.",
    href: "/services/crm-integration-services",
    label: "CRM integration services",
  },
  {
    n: "03",
    symptom: "The report is still a Monday export",
    body: "The weekly numbers exist, but only because a person spends half a day making them exist. The work is moving that job to pipelines that run whether or not anyone remembers.",
    href: "/services/data-automation-consultant",
    label: "Data automation consulting",
  },
] as const

/**
 * The symptom is what people arrive with; the page is the diagnosis. Set on the
 * printed sheet so it reads as the one piece of advice on an index page.
 */
const triage = [
  ["Leads sit for hours before anyone calls", "/services/lead-routing-guide", "Lead routing"],
  ["Two systems, two numbers, neither agrees", "/services/crm-data-quality", "CRM data quality"],
  ["The forecast is a guess wearing a number", "/services/sales-forecasting", "Sales forecasting"],
  ["Nobody can say which channel paid for itself", "/services/revenue-attribution-models", "Attribution models"],
  ["Renewals surprise us a fortnight out", "/services/account-health-scoring", "Account health scoring"],
] as const

export default function ServicesIndexPage() {
  return (
    <>
      <CollectionSchema path="/services" name="Services" description="Data, automation and revenue operations services across CRM, reporting, attribution and pipeline." />

      <Header />

      <main id="main">
        {/* Masthead. Contents sits alongside it — the fastest way to see the
            range of the index without scrolling thirty-five rows. */}
        <section className="border-b border-rule pt-[124px] pb-16 md:pt-[148px] md:pb-20">
          <div className="shell">
            <Reveal>
              <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-rule pb-5">
                <p className="marker">Services</p>
                <Link href="/" className="tag transition-colors hover:text-signal">
                  ← Back to the site
                </Link>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:gap-20">
              <div>
                <Reveal delay={0.05}>
                  <h1 className="font-display text-[clamp(2.3rem,5.6vw,4.2rem)] leading-[1.02] font-semibold tracking-[-0.035em]">
                    Three jobs.
                    <br />
                    <span className="text-bone-3">The rest is how they divide.</span>
                  </h1>
                </Reveal>

                <Reveal delay={0.1}>
                  <p className="lead mt-8 max-w-lg">
                    Companies arrive with a symptom, and it is nearly always one of three. We take
                    the engagement at that level, usually starting with{" "}
                    <Link
                      href="/services/revenue-operations-consultant"
                      className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                    >
                      revenue operations consulting
                    </Link>{" "}
                    and narrowing from there. The {total} pages below are how the work divides once
                    it has started — not a menu to buy from by the hour.
                  </p>
                </Reveal>
              </div>

              <Reveal delay={0.14}>
                <nav aria-label="Service areas">
                  <p className="tag flex items-baseline justify-between gap-4 border-b border-rule-2 pb-3">
                    <span>Contents</span>
                    <span className="tabular-nums">{total} guides</span>
                  </p>
                  <ol>
                    {sections.map((group, i) => (
                      <li key={group.id}>
                        <a
                          href={`#${group.id}`}
                          className="group flex items-baseline gap-4 border-b border-rule py-3.5 transition-colors hover:text-signal"
                        >
                          <span className="font-mono text-[12px] text-bone-3 tabular-nums transition-colors group-hover:text-signal">
                            {pad(i + 1)}
                          </span>
                          <span className="text-[16px] text-bone transition-colors group-hover:text-signal">
                            {group.label}
                          </span>
                          <span className="tag ml-auto shrink-0 tabular-nums">{group.count}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </Reveal>
            </div>
          </div>
        </section>

        {/* The three jobs, before the index. */}
        <section aria-label="What we are hired for" className="border-b border-rule bg-ground-2">
          <div className="shell py-12 md:py-14">
            <p className="tag text-signal">What we are hired for</p>

            <ol className="mt-8 grid gap-px bg-rule md:grid-cols-3">
              {jobs.map((job) => (
                <li key={job.n} className="bg-ground-2 md:p-1">
                  <Link href={job.href} className="group flex h-full flex-col p-5 md:p-6">
                    <span className="font-mono text-[12px] tracking-[0.11em] text-bone-3 transition-colors group-hover:text-signal">
                      {job.n}
                    </span>
                    <h2 className="mt-3 font-display text-[clamp(1.3rem,2.4vw,1.7rem)] leading-[1.1] font-semibold tracking-[-0.03em] text-bone transition-colors group-hover:text-signal">
                      &ldquo;{job.symptom}&rdquo;
                    </h2>
                    <p className="copy-sm mt-4">{job.body}</p>
                    <span className="tag mt-6 flex items-baseline gap-3 text-signal">
                      <span
                        aria-hidden
                        className="h-px w-7 shrink-0 translate-y-[-4px] bg-signal transition-all duration-300 group-hover:w-11"
                      />
                      {job.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ol>

            <p className="copy-sm mt-9 max-w-2xl">
              If none of the three is quite it, the{" "}
              <Link
                href="/services/revenue-operations-consultant"
                className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
              >
                revenue operations overview
              </Link>{" "}
              is what the rest hangs off, and{" "}
              <Link
                href="/contact"
                className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
              >
                one email
              </Link>{" "}
              is faster than reading {total} pages to find out.
            </p>
          </div>
        </section>

        {/* The index proper. Group header stays put while its rows scroll. */}
        <section className="section">
          <div className="shell">
            <p className="tag border-b border-rule-2 pb-3">
              How the work divides &mdash; {total} guides
            </p>
            {sections.map((group, gi) => (
              <Reveal key={group.id} delay={gi === 0 ? 0 : 0.04}>
                <div
                  id={group.id}
                  className="grid scroll-mt-[100px] gap-x-14 gap-y-6 border-b border-rule py-10 md:grid-cols-[minmax(0,0.4fr)_minmax(0,1fr)] md:py-14"
                >
                  <div className="md:sticky md:top-[100px] md:self-start">
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-[12px] tracking-[0.11em] text-signal">
                        {pad(gi + 1)}
                      </span>
                      <h2 className="font-display text-[clamp(1.55rem,3vw,2.15rem)] leading-none font-semibold tracking-[-0.03em] text-bone">
                        {group.label}
                      </h2>
                    </div>
                    <p className="copy-sm mt-3.5 max-w-xs md:pl-[36px]">{group.intro}</p>
                  </div>

                  {/* The rule lives on the li, not the link: `last:` on the link
                      would match every one of them, since each link is the only
                      child of its own li. */}
                  <ul>
                    {group.items.map((item) => (
                      <li key={item.href} className="border-b border-rule last:border-b-0">
                        <Link
                          href={item.href}
                          className="group flex flex-wrap items-baseline gap-x-4 gap-y-1 py-4"
                        >
                          <span className="font-mono text-[11px] tracking-[0.1em] text-bone-3 tabular-nums transition-colors group-hover:text-signal">
                            {item.n}
                          </span>
                          <span className="font-display text-[17px] font-medium text-bone transition-colors group-hover:text-signal">
                            {item.label}
                          </span>
                          <span className="copy-sm">{item.blurb}</span>
                          <span
                            aria-hidden
                            className="ml-auto font-mono text-[14px] text-signal opacity-0 transition-opacity group-hover:opacity-100"
                          >
                            →
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Symptom → page. The printed sheet, same as the studies on the home page. */}
        <section className="on-paper section border-t border-rule">
          <div className="shell">
            <Reveal>
              <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:items-end lg:gap-16">
                <h2 className="display-2">Not sure which piece you need?</h2>
                <p className="lead">
                  Most teams arrive with a symptom rather than a diagnosis. Find yours below —
                  it usually points at the wrong system, not the wrong team.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <ul className="mt-14 border-t border-rule-2">
                {triage.map(([symptom, href, label]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="group grid items-baseline gap-x-8 gap-y-2 border-b border-rule py-5 md:grid-cols-[minmax(0,1fr)_minmax(0,0.5fr)]"
                    >
                      <span className="flex items-baseline gap-4 text-[17px] leading-[1.5] text-bone">
                        <span
                          aria-hidden
                          className="h-[7px] w-[7px] shrink-0 translate-y-[-2px] bg-oxide"
                        />
                        &ldquo;{symptom}&rdquo;
                      </span>
                      <span className="flex items-baseline gap-3 pl-[23px] text-[16px] text-signal md:pl-0">
                        <span
                          aria-hidden
                          className="h-px w-7 shrink-0 translate-y-[-4px] bg-signal transition-all duration-300 group-hover:w-11"
                        />
                        {label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <FinalCta />
      </main>

      <Footer />
    </>
  )
}
