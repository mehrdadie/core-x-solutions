import type { Metadata } from "next"
import Link from "next/link"
import { engagementFloor, profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import RelatedServices from "@/components/services/RelatedServices"
import ServiceFaq from "@/components/services/ServiceFaq"
import Reveal from "@/components/ui/Reveal"

/**
 * The one new URL the keyword research supports that is not a line item.
 *
 * `fractional revops`, `fractional revops consultant`, `fractional revops
 * agency` and `revops as a service` all complete in live search and none of
 * them had a page. It earns a URL where the other candidates did not because it
 * describes a *commercial shape* — how the work is bought — rather than another
 * task you could ask for a quote on, which is exactly the distinction the
 * services index now leads with.
 *
 * Deliberately not a "hire a fractional RevOps leader" job posting. The same
 * seeds complete overwhelmingly into salary and job-description queries, so the
 * page is written for the person doing the buying and says plainly who it is
 * not for.
 */

const title = "Fractional RevOps | Revenue Operations on Retainer"
const description =
  "Fractional revenue operations for teams that need the judgement without the headcount. What a retainer covers, what it does not, and when to hire instead."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/fractional-revops" },
  openGraph: {
    type: "article",
    url: `${profile.url}/services/fractional-revops`,
    siteName: profile.name,
    title,
    description,
    locale: "en_GB",
    images: [{ url: "/services/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description },
}

/** What a month on retainer actually contains. No hour counts — that is the point. */
const covered = [
  {
    label: "The definitions stay current",
    body: "Businesses change what a qualified lead is, or start selling a second thing, and the definitions document goes stale within a quarter unless somebody keeps it. That is the part that decays fastest and is cheapest to maintain continuously.",
  },
  {
    label: "The pipelines keep running",
    body: "Syncs break when a platform changes an API or someone renames a stage. On retainer that is noticed and fixed before it reaches a board pack, rather than discovered because a number looked wrong.",
  },
  {
    label: "New systems get joined properly",
    body: "The support tool, the second billing system, the acquisition channel nobody mentioned. Each one is a seam, and each one is cheap to do correctly at the point it arrives and expensive to retrofit later.",
  },
  {
    label: "Somebody is accountable for the number",
    body: "The thing a growing company is actually missing. Not a person to build reports — a person who can be asked why two systems disagree and will come back with an answer rather than an export.",
  },
]

/** The honest screen. A retainer is the wrong instrument for most of these. */
const wrongFit = [
  "You have one clearly bounded project. Buy that as a fixed scope; a retainer would cost you more for the same work.",
  "You need someone in standups every day owning a roadmap. That is a hire, and we will say so.",
  "Nobody internally will hold the result between sessions. A retainer with no counterpart on your side produces a well-maintained system nobody uses.",
]

const faqs = [
  {
    q: "What is fractional RevOps?",
    a: "Revenue operations capability bought as an ongoing retainer rather than as a headcount or a one-off project. You get the senior judgement — which system owns which fact, what the numbers mean, what to connect next — at the fraction of a full-time role that the work actually needs, which for most growing companies is considerably less than one person.",
  },
  {
    q: "How is this different from RevOps as a service?",
    a: "In practice the two phrases describe the same arrangement. The distinction worth caring about is whether you are buying execution capacity or the decisions. Capacity is straightforward to hire and to replace. The decisions — which definition wins, what the report is allowed to say — are the expensive part, and they are what a retainer here is for.",
  },
  {
    q: "When should we hire someone full time instead?",
    a: "When the work becomes continuous rather than periodic: a team large enough that routing and enablement need daily attention, or a systems estate changing every week. At that point a permanent hire is better value and we will tell you so. Several engagements have ended that way, which is the correct outcome rather than a lost account.",
  },
  {
    q: "How does it start?",
    a: "It usually does not start as a retainer. The first engagement is an audit and a definitions document — two to four weeks — because a retainer over a system nobody has mapped is a subscription to firefighting. Once the map exists, keeping it current is the part worth buying monthly.",
  },
  {
    q: "What does a retainer cost?",
    a: `Priced as a monthly retainer against an agreed scope, never by the hour, and the number is in writing before it begins.${engagementFloor ? ` Engagements start at ${engagementFloor}.` : ""} If what you need is a few hours of help now and then, this is the wrong instrument and there are people who serve that better.`,
  },
] as const

export default function FractionalRevOpsPage() {
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
                Fractional RevOps
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="lead mt-8 max-w-2xl">
                Most growing companies do not need a full-time revenue operations hire. They need
                somebody accountable for whether the numbers agree, available every month rather
                than every crisis. That is what this is.
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-primary">
                  Discuss a retainer
                </Link>
                <Link href="/services/revenue-operations-consultant" className="btn btn-secondary">
                  Start with the audit
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell border-t border-rule-2">
            <Reveal>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Why the work is periodic
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    <p>
                      The expensive parts of revenue operations happen in bursts. Mapping the
                      systems, settling the definitions, joining a new platform — each is a decision
                      followed by a build, and then months where the right amount of attention is
                      considerably less than a full week.
                    </p>
                    <p>
                      Hiring for the burst means paying for the trough. Hiring nobody means the
                      definitions go stale, the syncs quietly break, and the next burst starts from
                      a map that no longer matches the building.
                    </p>
                    <p>
                      <strong>A retainer is the shape that matches.</strong> It is not a discount on
                      a hire and it is not a support contract. It is a standing claim on the
                      judgement, so that the system stays true between the projects.
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  What a month covers
                </h2>

                <div className="min-w-0">
                  <dl className="border-t border-rule-2">
                    {covered.map((item) => (
                      <div key={item.label} className="border-b border-rule py-5 last:border-b-0">
                        <dt className="font-display text-[17px] font-semibold text-bone">
                          {item.label}
                        </dt>
                        <dd className="copy-sm mt-2">{item.body}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  When it is the wrong instrument
                </h2>

                <div className="min-w-0">
                  <ul className="space-y-4">
                    {wrongFit.map((w) => (
                      <li key={w.slice(0, 20)} className="flex gap-4">
                        <span
                          aria-hidden
                          className="mt-[11px] h-[6px] w-[6px] shrink-0 bg-oxide"
                        />
                        <span className="copy">{w}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="copy mt-6">
                    A retainer nobody uses renews quietly for a year and then gets cancelled in one
                    line. If that is where this is heading we would rather say so in the first
                    conversation.
                  </p>
                </div>
              </article>
            </Reveal>

            <ServiceFaq faqs={faqs} path="/services/fractional-revops" />

            <Reveal delay={0.1}>
              <div className="panel border-l-2 border-l-signal p-6 md:p-8">
                <p className="mb-3 font-semibold text-bone">
                  Not sure whether you need a retainer or a project
                </p>
                <p className="copy mb-5">
                  Describe what keeps going wrong and we will tell you which one it is — including
                  when the answer is a permanent hire rather than either.
                </p>
                <Link href="/contact" className="btn btn-primary">
                  Discuss a retainer
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <RelatedServices current="/services/fractional-revops" />

        <FinalCta />
      </main>

      <Footer />
    </>
  )
}
