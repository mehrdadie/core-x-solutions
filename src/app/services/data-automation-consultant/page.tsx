import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import RelatedServices from "@/components/services/RelatedServices"
import Reveal from "@/components/ui/Reveal"

const title = "Data Automation Consultant | Pipelines That Run Without You"
const description =
  "What to automate, what to leave alone, and how to build pipelines that fail loudly rather than quietly. Scheduling, idempotency, validation and alerting."

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
    images: [{ url: "/services/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description },
}

const worth = [
  {
    verdict: "automate",
    task: "Anything on a schedule that produces the same shape every time",
    why: "Exports, syncs, reconciliations, refreshes. The work is identical each week and the only variable is whether someone remembered.",
  },
  {
    verdict: "automate",
    task: "Anything with a clock attached",
    why: "Routing, escalation, SLA breaches, renewal stages. Humans are bad at noticing that nothing has happened yet.",
  },
  {
    verdict: "automate",
    task: "Validation",
    why: "Checks nobody enjoys running are the checks that stop being run. This is the highest-value automation and the one most often skipped.",
  },
  {
    verdict: "careful",
    task: "Anything with judgement in the middle",
    why: "Automate the gathering and the writing-back; leave the decision with a person. Summarise and tag, then let the rep decide what happens next.",
  },
  {
    verdict: "leave it",
    task: "A process nobody has agreed on yet",
    why: "Automating a disputed process makes the dispute permanent and much harder to change. Settle the definitions first.",
  },
  {
    verdict: "leave it",
    task: "Something that runs twice a year",
    why: "The automation will have rotted by the second run and nobody will remember how it worked. Write it down instead.",
  },
]

const verdictStyle: Record<string, string> = {
  automate: "text-verdigris",
  careful: "text-bone-2",
  "leave it": "text-oxide",
}

const principles = [
  {
    name: "Idempotent by default",
    body: "Running the same job twice must produce the same result as running it once. Upsert on a stable key rather than insert. Retries are inevitable, so make them boring.",
  },
  {
    name: "Fail loudly, never silently",
    body: "The worst pipeline is one that stops delivering without telling anyone, because the dashboard keeps showing last week's number and nobody notices until a decision has been made on it. Alert when a source stops arriving, not only when a job errors.",
  },
  {
    name: "Validate at the boundary",
    body: "Check row counts, null rates and value ranges as the data arrives, and reject the batch rather than let it through. A pipeline that only checks at the end has already contaminated the warehouse.",
  },
  {
    name: "Backfill and incremental are different jobs",
    body: "A backfill that ignores rate limits gets throttled halfway and leaves the data in a state nobody can reason about. Write them separately, and make the backfill resumable.",
  },
  {
    name: "Version the logic, not just the data",
    body: "When a number changes, the first question is always whether the data changed or the definition did. If the transformation lives in a UI with no history, you cannot answer that.",
  },
]

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
                Data automation consulting
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="lead mt-8 max-w-2xl">
                The goal is not fewer hours. It is that the number is right on Monday morning
                without anyone having stayed late on Friday to make it so — and that you find out
                when it is not.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell border-t border-rule-2">
            <Reveal>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  The real cost of manual reporting
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    <p>
                      The hours are the obvious cost and the least important one. What manual
                      reporting actually costs you is <strong>latency and trust</strong>.
                    </p>
                    <p>
                      Latency, because a process that takes three days describes a week that has
                      already ended. By the time the numbers are agreed, every decision they were
                      meant to inform has either been made without them or postponed.
                    </p>
                    <p>
                      Trust, because a human doing the same join by hand forty times will do it
                      slightly differently on some of them. Nobody can point at which, so the whole
                      report inherits the doubt — and meetings start with an argument about the data
                      rather than the result.
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  What is worth automating
                </h2>

                <div className="min-w-0">
                  <p className="copy mb-8">
                    Automating the wrong thing is worse than leaving it manual, because it puts a
                    disputed process beyond easy reach.
                  </p>
                  <dl>
                    {worth.map((w) => (
                      <div key={w.task} className="border-b border-rule py-4 last:border-b-0">
                        <dt className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                          <span className="font-display text-[16.5px] font-semibold text-bone">
                            {w.task}
                          </span>
                          <span className={`tag ml-auto shrink-0 ${verdictStyle[w.verdict]}`}>
                            {w.verdict}
                          </span>
                        </dt>
                        <dd className="copy-sm mt-1.5">{w.why}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Five principles that decide whether it survives
                </h2>

                <div className="min-w-0">
                  <dl>
                    {principles.map((p, i) => (
                      <div key={p.name} className="border-b border-rule py-5 last:border-b-0">
                        <dt className="flex items-baseline gap-4">
                          <span className="font-mono text-[12px] tabular-nums text-signal">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="font-display text-[17px] font-semibold text-bone">
                            {p.name}
                          </span>
                        </dt>
                        <dd className="copy-sm mt-2 md:pl-[36px]">{p.body}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Choosing where the logic lives
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    <p>
                      <strong>Workflow tools</strong> — n8n, Make, Zapier — are right for
                      event-driven work between applications: something happened in one system, do
                      something in another. They are quick to build and easy for a non-engineer to
                      read.
                    </p>
                    <p>
                      <strong>Scheduled code</strong> — Python on a runner — is right when the
                      transformation is complex, needs testing, or has to be reviewable. The moment
                      a workflow canvas has thirty nodes and a branch you cannot follow, it has
                      become code with a worse editor.
                    </p>
                    <p>
                      <strong>The warehouse</strong> — BigQuery or equivalent — is where joins and
                      business definitions belong, not scattered across either of the above. If
                      &ldquo;revenue&rdquo; is calculated in three workflows, you have three
                      definitions of revenue and no way to reconcile them.
                    </p>
                    <p>
                      The failure mode we see most often is business logic distributed across a
                      dozen automations because each was the fastest way to answer one request. It
                      works until someone asks why two dashboards disagree.
                    </p>
                  </div>
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
                      A multi-channel training provider was running management reporting off manual
                      exports from five platforms, with spreadsheet updates, data checks and
                      repeated reconciliation.{" "}
                      <strong>
                        By the time the numbers were agreed, the week they described was over.
                      </strong>
                    </p>
                    <p>
                      We rebuilt it as scheduled pipelines into BigQuery, a modelled reporting layer
                      with KPI definitions agreed in writing first, automated validation rules, and
                      alerting when a source stops delivering. The alerting mattered as much as the
                      pipelines: a silent gap in a daily refresh is how a wrong number reaches a
                      board pack.
                    </p>
                    <p>
                      <strong>
                        Reporting preparation fell from roughly 30 hours a week to about 2 hours of
                        review and validation
                      </strong>{" "}
                      — 93% less manual preparation, six sources consolidated, daily refresh instead
                      of weekly. Numbers now arrive before the meeting instead of after it.{" "}
                      <Link
                        href="/case-studies#reporting-automation"
                        className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                      >
                        Full case study
                      </Link>.
                    </p>
                    <p>
                      Note what did not get automated: the 2 hours that remain are review and
                      validation by a person. That is deliberate.
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="panel border-l-2 border-l-signal p-6 md:p-8">
                <p className="mb-3 font-semibold text-bone">
                  Start with the report that takes longest
                </p>
                <p className="copy mb-5">
                  It is usually the one crossing the most systems, which makes it both the most
                  painful and the most instructive thing to fix first. See also{" "}
                  <Link
                    href="/services/automated-reporting-guide"
                    className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                  >
                    automated reporting
                  </Link>.
                </p>
                <Link href="#contact" className="btn btn-primary">
                  Discuss a project
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
