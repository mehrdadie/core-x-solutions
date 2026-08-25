import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import RelatedServices from "@/components/services/RelatedServices"
import Reveal from "@/components/ui/Reveal"

const title = "Sales Process Automation | Workflow Automation for Reps"
const description =
  "Automate your sales process. Deal routing, follow-ups, activity logging, and escalations. Keep reps focused on selling, not admin."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/sales-process-automation" },
  openGraph: {
    type: "article",
    url: `${profile.url}/services/sales-process-automation`,
    siteName: profile.name,
    title,
    description,
    locale: "en_GB",
    images: [{ url: "/services/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description },
}

export default function SalesProcessAutomationPage() {
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
                Sales Process Automation: Free Reps From Admin Work
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="lead mt-8">
                Reps spend 30% of their time on admin: logging calls, scheduling follow-ups,
                updating deals. Automation reclaims 10+ hours per week.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell border-t border-rule-2">
            <Reveal>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Automatable Sales Tasks
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    {[
                      [
                        "Task scheduling",
                        "Auto-schedule follow-ups based on deal stage or no-activity days",
                      ],
                      [
                        "Activity logging",
                        "Pull email, calendar, and call data into CRM automatically",
                      ],
                      ["Email tracking", "Auto-log when reps send emails. Track opens and clicks."],
                      ["Deal routing", "Route deals based on geography, capacity, or skill."],
                      ["Escalations", "Flag deals for manager review if they age in a stage."],
                      [
                        "Next steps",
                        "Automatically populate suggested next steps based on deal type.",
                      ],
                    ].map(([task, desc], i) => (
                      <div key={i} className="flex gap-4 pb-4 border-b border-rule">
                        <div className="font-semibold text-signal min-w-fit">{task}</div>
                        <div>{desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Build Your Automation Roadmap
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    <p>
                      <strong>Phase 1 (Weeks 1-2):</strong> Activity logging. Connect email and
                      calendar. Let reps focus on selling, not logging.
                    </p>
                    <p>
                      <strong>Phase 2 (Weeks 3-4):</strong> Task scheduling. Auto-create follow-up
                      tasks based on deal milestones.
                    </p>
                    <p>
                      <strong>Phase 3 (Weeks 5-6):</strong> Escalation workflows. Flag deals that
                      need manager attention.
                    </p>
                    <p>
                      <strong>Phase 4 (Ongoing):</strong> Continuous optimization. Monitor adoption,
                      iterate, add new automations.
                    </p>
                    <p>
                      Work with a{" "}
                      <Link
                        href="/services/data-automation-consultant"
                        className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                      >
                        data automation consultant
                      </Link>{" "}
                      to design and build it.
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="panel border-l-2 border-l-signal p-6 md:p-8">
                <p className="font-semibold text-bone mb-3">Get sales automation built</p>
                <p className="copy mb-5">
                  Let us automate your sales workflows so reps can focus on closing deals.
                </p>
                <Link href="#contact" className="btn btn-primary">
                  Get Started With Automation
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <RelatedServices current="/services/sales-process-automation" />

        <FinalCta />
      </main>

      <Footer />
    </>
  )
}
