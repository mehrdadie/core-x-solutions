import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import RelatedServices from "@/components/services/RelatedServices"
import Reveal from "@/components/ui/Reveal"

const title = "Sales Activity Tracking | The Signals That Predict Pipeline"
const description =
  "Calls, emails and meetings — which activity data predicts pipeline, which is theatre, and how to capture it without asking reps to log anything."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/sales-activity-tracking" },
  openGraph: {
    type: "article",
    url: `${profile.url}/services/sales-activity-tracking`,
    siteName: profile.name,
    title,
    description,
    locale: "en_GB",
    images: [{ url: "/services/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description },
}

const metrics = [
  {
    metric: "Meetings booked",
    verdict: "strong",
    note: "The closest thing to a leading indicator you have. It survives every honest correlation check against closed revenue.",
  },
  {
    metric: "Conversations held",
    verdict: "strong",
    note: "Connected calls over a length threshold — not dials. Two minutes is usually the line between a conversation and a voicemail.",
  },
  {
    metric: "Next step committed",
    verdict: "strong",
    note: "Whether the call ended with a dated commitment. Hard to capture, and the single best predictor of a deal moving.",
  },
  {
    metric: "Email replies",
    verdict: "moderate",
    note: "Real intent, but volume-dependent. Useful as a rate per contacted account, misleading as a raw count.",
  },
  {
    metric: "Link clicks",
    verdict: "moderate",
    note: "Weak alone, informative in aggregate: which links a buying committee clicks tells you what the deal is actually about.",
  },
  {
    metric: "Dials made",
    verdict: "weak",
    note: "Measures effort, not progress, and is trivially gamed. Track it to spot someone who has stopped, never to rank a team.",
  },
  {
    metric: "Emails sent",
    verdict: "weak",
    note: "Rises the moment you put it on a leaderboard, and correlates with nothing downstream once it does.",
  },
  {
    metric: "Email opens",
    verdict: "unreliable",
    note: "Apple Mail Privacy Protection pre-fetches images, so a large share of your opens are a proxy server, not a person. Do not score leads on this.",
  },
]

const verdictStyle: Record<string, string> = {
  strong: "text-verdigris",
  moderate: "text-bone-2",
  weak: "text-oxide",
  unreliable: "text-oxide",
}

export default function SalesActivityTrackingPage() {
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
                The leading indicators,
                <br />
                <span className="text-bone-3">and the ones that lie.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="lead mt-8 max-w-2xl">
                Every activity metric predicts something. Most of them predict how closely the team
                is being watched. Here is which ones survive contact with your closed-won data, and
                how to capture them without asking a rep to log anything.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell border-t border-rule-2">
            <Reveal>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Goodhart&rsquo;s law runs your sales floor
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    <p>
                      When a measure becomes a target, it stops being a good measure. Put dials on a
                      leaderboard and dials go up — the number rises, the pipeline does not, and
                      within a quarter you are managing a metric that has been fully decoupled from
                      the outcome it was chosen to predict.
                    </p>
                    <p>
                      This is not a reason to stop measuring activity. It is a reason to be
                      deliberate about which activity you publish.{" "}
                      <strong>
                        Measure effort privately to spot someone who has stopped; measure progress
                        publicly to run the team.
                      </strong>{" "}
                      The two lists are different, and most CRMs ship with dashboards built entirely
                      from the first one.
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  What each metric is worth
                </h2>

                <div className="min-w-0">
                  <p className="copy mb-8">
                    Ranked by whether it holds up when you correlate it against deals that actually
                    closed. Run this check on your own data before trusting anyone&rsquo;s ranking,
                    including this one — the answer moves with your motion and your price point.
                  </p>

                  <dl>
                    {metrics.map((m) => (
                      <div key={m.metric} className="border-b border-rule py-4 last:border-b-0">
                        <dt className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                          <span className="font-display text-[16.5px] font-semibold text-bone">
                            {m.metric}
                          </span>
                          <span className={`tag ml-auto shrink-0 ${verdictStyle[m.verdict]}`}>
                            {m.verdict}
                          </span>
                        </dt>
                        <dd className="copy-sm mt-1.5">{m.note}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Email engagement, and why opens are broken
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    <p>
                      Open tracking works by embedding an invisible image and counting the fetch.
                      Apple Mail Privacy Protection pre-fetches that image on Apple&rsquo;s servers
                      whether or not the recipient ever looks at the message, and other providers
                      cache images similarly.
                    </p>
                    <p>
                      <strong>
                        The consequence is specific: a meaningful share of your opens are machines
                      </strong>
                      , they are not evenly distributed across your list, and they skew toward
                      exactly the segments most likely to be on Apple devices. Any lead score with
                      open rate as an input is inheriting that bias silently.
                    </p>
                    <p>
                      Clicks and replies still work, because both require a deliberate act. The
                      useful signal is not that a link was clicked but <strong>which</strong> link,
                      and by how many people at the same account — three people at one company
                      opening the pricing page in a week is a buying committee assembling, and it is
                      the one email signal worth alerting on.
                    </p>
                    <p>
                      Feed clicks and replies into{" "}
                      <Link
                        href="/services/lead-scoring-models"
                        className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                      >
                        lead scoring
                      </Link>{" "}
                      as a rate against contacted accounts, never as a raw count. Raw counts reward
                      whoever emailed the most people.
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Capture it without asking anyone to log it
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    <p>
                      Manually logged activity is the least reliable data in the CRM. It is entered
                      at the end of the week, from memory, by someone who knows it will be used to
                      judge them. Every one of those three facts damages it.
                    </p>
                    <p>
                      <strong>Take activity from the systems that already record it.</strong> The
                      telephony platform knows the call happened and how long it lasted. The
                      calendar knows the meeting was accepted. The mail server knows the reply
                      arrived. None of these require a human to remember anything, and none of them
                      can be inflated by someone having a slow week.
                    </p>
                    <p>
                      That leaves exactly one thing worth asking a rep to enter: the{" "}
                      <strong>next committed step and its date</strong>. It cannot be captured
                      automatically, it is the strongest predictor on the list, and it is a
                      reasonable ask precisely because it is the only one.
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  What we did on two of these
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    <p>
                      <strong>A high-volume inbound team</strong> was logging several hundred calls
                      a week as a duration and a dropdown disposition. Managers sampled a handful;
                      the rest was invisible. We transcribed the calls and classified them against a
                      taxonomy the sales team agreed to — outcome, objection, competitor named, next
                      step committed — written back onto the CRM record.{" "}
                      <strong>100% of calls classified, six objection categories tracked</strong>,
                      same-day. Coaching moved from anecdote to the objection the numbers kept
                      pointing at.{" "}
                      <Link
                        href="/case-studies#call-intelligence"
                        className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                      >
                        Case study
                      </Link>
                      .
                    </p>
                    <p>
                      <strong>An inbound-led services business</strong> had enquiries landing in a
                      shared inbox, picked up by whoever noticed. We put an SLA clock on every
                      record with an escalation when it expired, which made per-rep response
                      performance visible for the first time.{" "}
                      <strong>
                        Median first response fell from around two hours to four minutes
                      </strong>
                      , with no leads left unassigned overnight.{" "}
                      <Link
                        href="/case-studies#lead-routing"
                        className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                      >
                        Case study
                      </Link>
                      .
                    </p>
                    <p>
                      Both worked for the same reason: the measure was taken from a system that
                      recorded it automatically, and it was attached to an action rather than a
                      leaderboard.
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="panel border-l-2 border-l-signal p-6 md:p-8">
                <p className="mb-3 font-semibold text-bone">
                  Find out which of your activity metrics actually predicts revenue
                </p>
                <p className="copy mb-5">
                  We connect the telephony, calendar and mail data to closed-won outcomes, and tell
                  you which of the numbers on your current dashboard are worth keeping.
                </p>
                <Link href="#contact" className="btn btn-primary">
                  Discuss a project
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <RelatedServices current="/services/sales-activity-tracking" />

        <FinalCta />
      </main>

      <Footer />
    </>
  )
}
