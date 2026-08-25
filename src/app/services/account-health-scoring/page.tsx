import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import RelatedServices from "@/components/services/RelatedServices"
import Reveal from "@/components/ui/Reveal"

const title = "Account Health Scoring | Churn Risk and Expansion From One Score"
const description =
  "The signals that predict churn also predict expansion. How to build one account health score, what it should weigh, and the renewal workflow it feeds."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/account-health-scoring" },
  openGraph: {
    type: "article",
    url: `${profile.url}/services/account-health-scoring`,
    siteName: profile.name,
    title,
    description,
    locale: "en_GB",
    images: [{ url: "/services/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description },
}

const components = [
  {
    weight: "40%",
    name: "Product usage",
    from: "Product events, or licence/seat data if you have no event stream",
    detail:
      "Frequency, breadth and depth: how often they log in, how many of the modules they paid for they actually touch, and whether that is trending up or down against the account's own baseline.",
  },
  {
    weight: "25%",
    name: "Engagement",
    from: "CRM activity, marketing automation, calendar",
    detail:
      "Are they answering, attending, adopting? A quarterly business review that keeps being rescheduled is a stronger churn signal than most usage dips.",
  },
  {
    weight: "20%",
    name: "Support health",
    from: "Helpdesk",
    detail:
      "Ticket volume matters less than resolution time and reopen rate. A customer raising tickets is engaged; a customer whose tickets sit open is leaving.",
  },
  {
    weight: "15%",
    name: "Commercial signal",
    from: "Billing system",
    detail:
      "Seat growth, payment failures, downgrade requests, invoice disputes. This is the shortest-latency signal you have and it is usually the one nobody wires in.",
  },
]

const playbook = [
  {
    band: "Red — acting now",
    trigger:
      "Score below 40, or any single hard signal: failed payment, downgrade request, champion left",
    action:
      "A person calls. Not an email sequence. The purpose is to find out what changed, and the call happens inside two working days or the alert has failed.",
  },
  {
    band: "Amber — watching",
    trigger: "Score 40–65, or a 20-point drop in 30 days regardless of absolute score",
    action:
      "Enablement rather than rescue: targeted content, a training session, a check-in booked a week out. Re-score after the intervention and record whether it moved.",
  },
  {
    band: "Green — expansion candidate",
    trigger: "Score above 80 with seat growth or new-department usage",
    action:
      "Route to the expansion play below. A healthy account with no expansion motion is revenue you have already earned the right to ask for.",
  },
]

const renewal = [
  [
    "T−90 days",
    "Score snapshot taken and owner assigned. Red accounts escalate here, not at T−30.",
  ],
  ["T−60 days", "Commercial conversation opens. Expansion case built if the account is green."],
  ["T−30 days", "Paperwork in motion. Anything still red is now a named risk on the forecast."],
  ["T−14 days", "Escalation if unsigned. Silence at this point is a decision, not a delay."],
  ["T−0", "Renewal booked, and the outcome written back onto the score so the model learns."],
]

export default function AccountHealthScoringPage() {
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
                One score, two questions
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="lead mt-8 max-w-2xl">
                The signals that tell you an account is about to leave are the same signals that
                tell you it is ready to buy more. Most teams build two disconnected systems and act
                on neither. Build one, and point it in both directions.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell border-t border-rule-2">
            <Reveal>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Why one score, not two
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    <p>
                      Churn scoring and expansion scoring get built by different teams, at different
                      times, on different data. Customer success owns one, sales owns the other, and
                      the two disagree about the same account often enough that people stop trusting
                      either.
                    </p>
                    <p>
                      They disagree because they are reading the same inputs and drawing opposite
                      conclusions from the middle of the range. Heavy usage plus rising support
                      tickets is either a customer in trouble or a customer outgrowing their plan.
                      Nothing in a one-directional model can tell you which.
                    </p>
                    <p>
                      <strong>
                        One score, read at both ends, forces the argument into the open.
                      </strong>{" "}
                      An account cannot be a red churn risk and a green expansion candidate at the
                      same time, and when the model says it is, that is a definition problem you
                      want surfaced rather than averaged away.
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  What the score weighs
                </h2>

                <div className="min-w-0">
                  <p className="copy mb-8">
                    Weights are a starting point, not a result. They should move once you can
                    compare scores against accounts that actually renewed or actually left — until
                    then they are an assumption you have written down, which is still better than
                    one you have not.
                  </p>

                  <dl>
                    {components.map((c) => (
                      <div key={c.name} className="border-b border-rule py-5 last:border-b-0">
                        <dt className="flex items-baseline gap-4">
                          <span className="font-mono text-[13px] tabular-nums text-signal">
                            {c.weight}
                          </span>
                          <span className="font-display text-[17px] font-semibold text-bone">
                            {c.name}
                          </span>
                          <span className="tag ml-auto hidden shrink-0 md:inline">{c.from}</span>
                        </dt>
                        <dd className="copy-sm mt-2 md:pl-[62px]">{c.detail}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  The three decisions that decide whether it works
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    <p>
                      <strong>
                        Score against the account&rsquo;s own baseline, not an absolute.
                      </strong>{" "}
                      A customer who logs in twice a week and always has is healthy. A customer who
                      logged in daily and now logs in twice a week is the one you want flagged, and
                      an absolute threshold will rank them identically. Almost every score that gets
                      ignored fails here first.
                    </p>
                    <p>
                      <strong>Weight recency hard.</strong> Behaviour from nine months ago tells you
                      about a relationship that no longer exists. A 30-day window with a 90-day
                      comparison catches direction; a twelve-month average catches nothing in time
                      to act on it.
                    </p>
                    <p>
                      <strong>Agree what an account is before you score one.</strong> If the CRM has
                      three records for the same customer — and after two migrations it usually does
                      — you are scoring fragments. This is unglamorous and it is the step that most
                      often has to happen first. See{" "}
                      <Link
                        href="/services/crm-data-quality"
                        className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                      >
                        CRM data quality
                      </Link>{" "}
                      for what that involves.
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Reading it down: churn risk
                </h2>

                <div className="min-w-0">
                  <p className="copy mb-8">
                    A score with no attached action is a dashboard. Each band below names who does
                    what, and by when — that is the part that makes it a system rather than a
                    report.
                  </p>

                  <div className="space-y-6">
                    {playbook.map((p) => (
                      <div key={p.band} className="border-l-2 border-signal pl-6">
                        <h3 className="font-display text-[1.05rem] font-semibold text-bone">
                          {p.band}
                        </h3>
                        <p className="copy-sm mt-1.5">
                          <span className="text-bone">Trigger:</span> {p.trigger}
                        </p>
                        <p className="copy-sm mt-1.5">{p.action}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Reading it up: expansion
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    <p>
                      The expansion signals are the churn signals inverted, plus two the churn model
                      does not care about: <strong>seat growth</strong> and{" "}
                      <strong>use-case spread</strong>. A team adding users, or a second department
                      appearing in the usage data, has made the buying decision already — the only
                      question left is whether anyone notices in time to have the conversation.
                    </p>
                    <p>
                      Keep upsell and cross-sell separate in the model, because they need different
                      evidence. <strong>Upsell</strong> — more of what they have — is justified by
                      hitting the ceiling of the current plan. <strong>Cross-sell</strong> — a
                      different product — is justified by a use case appearing that the current
                      product does not serve. Scoring them as one number produces confident
                      recommendations that the account manager cannot defend in the meeting.
                    </p>
                    <p>
                      Both are cheaper than acquisition, which is the usual argument for doing them.
                      The better argument is that the evidence is already sitting in your systems
                      and costs nothing to read.
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  The renewal clock the score feeds
                </h2>

                <div className="min-w-0">
                  <p className="copy mb-8">
                    Renewals go wrong at T−30 because the work should have started at T−90. Putting
                    the score on a clock is what converts it from a monitoring exercise into a
                    forecast you can defend.
                  </p>

                  <ol className="relative">
                    <span
                      aria-hidden
                      className="absolute top-3 bottom-3 left-[7px] w-px bg-rule md:left-[calc(104px+7px)]"
                    />
                    {renewal.map(([when, what]) => (
                      <li
                        key={when}
                        className="relative grid gap-x-10 gap-y-2 pb-7 pl-9 last:pb-0 md:grid-cols-[104px_minmax(0,1fr)] md:pl-0"
                      >
                        <span
                          aria-hidden
                          className="absolute top-[7px] left-0 h-[15px] w-[15px] border border-signal bg-paper md:left-[104px]"
                        />
                        <span
                          aria-hidden
                          className="absolute top-[11px] left-1 h-[7px] w-[7px] bg-signal md:left-[108px]"
                        />
                        <span className="font-mono text-[12px] tracking-[0.08em] text-bone-3 md:pt-0.5">
                          {when}
                        </span>
                        <span className="copy-sm md:pl-10">{what}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  What we did on one of these
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    <p>
                      A subscription business with five years of history had leads never contacted,
                      opportunities abandoned mid-pipeline, and customers who had lapsed quietly.
                      None of it was visible, because answering the question meant joining four
                      systems by hand.
                    </p>
                    <p>
                      Every dormant record was scored against last contact, acquisition cost,
                      previous value and the stage it stalled at, then surfaced as a working queue
                      with the reason attached — refreshed each morning rather than exported once.{" "}
                      <strong>4,800 records re-scored, £240k of pipeline surfaced</strong> from data
                      the business had already paid for.
                    </p>
                    <p>
                      The mechanism is the one described above: a score built from signals that
                      already existed, attached to an action, and refreshed on a clock.{" "}
                      <Link
                        href="/case-studies#dormant-revenue"
                        className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                      >
                        Full case study
                      </Link>.
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  How these fail
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    <p>
                      <strong>Nobody owns the alert.</strong> The score fires into a channel and
                      everyone assumes someone else is on it. If a red account does not create a
                      named task with a date, the model is decoration.
                    </p>
                    <p>
                      <strong>It is built on what is easy to measure.</strong> Logins are easy and
                      weak. Whether the customer achieved the thing they bought the product for is
                      hard and strong. Weight toward the second even when it takes work to capture.
                    </p>
                    <p>
                      <strong>It is never recalibrated.</strong> A score that has not been checked
                      against actual renewal and churn outcomes is an opinion with a number
                      attached. Write the outcome back and review the weights quarterly.
                    </p>
                    <p>
                      <strong>It measures the account and ignores the person.</strong> Accounts do
                      not churn, buyers do. A green account whose champion just left is a red
                      account that has not been re-scored yet.
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="panel border-l-2 border-l-signal p-6 md:p-8">
                <p className="mb-3 font-semibold text-bone">
                  Build the score, and the actions that hang off it
                </p>
                <p className="copy mb-5">
                  We connect the systems the signals live in, agree the weights with the people who
                  have to act on them, and put the whole thing on a clock.
                </p>
                <Link href="#contact" className="btn btn-primary">
                  Discuss a project
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <RelatedServices current="/services/account-health-scoring" />

        <FinalCta />
      </main>

      <Footer />
    </>
  )
}
