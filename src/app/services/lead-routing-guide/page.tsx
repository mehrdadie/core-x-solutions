import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import RelatedServices from "@/components/services/RelatedServices"
import Reveal from "@/components/ui/Reveal"

const title = "Lead Routing Guide | Automated Assignment for Sales Teams"
const description =
  "Master lead routing strategies for sales teams. Automate lead assignment by territory, capacity, and skill. Increase conversion rates and reduce routing delays."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/lead-routing-guide" },
  openGraph: {
    type: "article",
    url: `${profile.url}/services/lead-routing-guide`,
    siteName: profile.name,
    title,
    description,
    locale: "en_GB",
    images: [{ url: "/services/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description },
}

export default function LeadRoutingGuidePage() {
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
                Lead Routing Guide: Automate Assignment & Boost Conversions
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="lead mt-8">
                Smart lead routing gets the right lead to the right rep at the right time. Automate
                territory assignment, load balancing, and skill-based routing to eliminate delays
                and increase close rates.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell border-t border-rule-2">
            <Reveal>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Why Lead Routing Matters
                </h2>

                <div className="min-w-0">
                  <div className="copy space-y-4 [&_strong]:font-semibold [&_strong]:text-bone">
                    <p>
                      <strong>Speed kills lost deals.</strong> Every hour a lead waits to be routed
                      is an hour a competitor is reaching out. Automated routing delivers leads to
                      reps in seconds.
                    </p>
                    <p>
                      <strong>Manual routing is unreliable.</strong> Reps get assigned leads
                      inconsistently, capacity isn't balanced, and leads fall through cracks.
                      Automation eliminates guesswork.
                    </p>
                    <p>
                      <strong>Right rep matters.</strong> Territory, industry expertise, and
                      relationship history all affect conversion rates. Intelligent routing matches
                      leads to the best-fit rep.
                    </p>
                    <p>
                      <Link
                        href="/services/revenue-operations-consultant"
                        className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                      >
                        Hire a RevOps consultant
                      </Link>{" "}
                      to build your lead routing strategy.
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Lead Routing Models
                </h2>

                <div className="min-w-0">
                  <div className="space-y-6">
                    {[
                      {
                        model: "Territory-Based",
                        desc: "Route by geography, industry, or company size. Best for: enterprise sales with clear territory structure.",
                      },
                      {
                        model: "Capacity-Based",
                        desc: "Route to the rep with the lowest current load. Best for: high-volume inbound leads.",
                      },
                      {
                        model: "Skill-Based",
                        desc: "Route to the rep with best expertise for that lead profile. Best for: complex solutions or diverse customer segments.",
                      },
                      {
                        model: "Round-Robin",
                        desc: "Distribute evenly across available reps in turn. Best for: standardized sales processes.",
                      },
                      {
                        model: "Score-Based",
                        desc: "Route high-value leads to senior reps, lower-value to junior reps. Best for: optimizing team productivity.",
                      },
                    ].map((item) => (
                      <div key={item.model} className="border-l-2 border-signal pl-6">
                        <h3 className="font-semibold text-[1.05rem] mb-2">{item.model}</h3>
                        <p className="copy-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
                <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
                  Building Your Lead Routing Architecture
                </h2>

                <div className="min-w-0">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-[1.1rem] mb-3">5 Steps to Implement</h3>
                      <ol className="space-y-4 ml-5">
                        {[
                          [
                            "Define your routing model",
                            "Territory, capacity, skill, or hybrid approach.",
                          ],
                          [
                            "Map your rep profiles",
                            "Territory coverage, expertise, capacity limits.",
                          ],
                          [
                            "Set routing rules",
                            "If company in X territory, route to rep Y. If lead score > 80, route to senior rep.",
                          ],
                          [
                            "Build the workflow",
                            "Use HubSpot workflows, Make, n8n, or Zapier to automate the logic.",
                          ],
                          [
                            "Monitor and iterate",
                            "Track assignment accuracy, routing time, and conversion by route.",
                          ],
                        ].map(([step, desc], i) => (
                          <li key={i} className="copy-sm">
                            <strong>{step}:</strong> {desc}
                          </li>
                        ))}
                      </ol>
                    </div>
                    <div className="panel border-l-2 border-l-signal p-6">
                      <p className="font-semibold text-bone mb-2">Expected Results</p>
                      <ul className="space-y-2 text-[14px] text-bone-2">
                        <li>• Routing delay: &lt;5 minutes (vs. hours with manual)</li>
                        <li>• Assignment accuracy: 95%+</li>
                        <li>• Conversion rate lift: 10–20%</li>
                        <li>• Rep satisfaction: higher (balanced workload)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="panel border-l-2 border-l-signal p-6 md:p-8">
                <p className="font-semibold text-bone mb-3">
                  Get lead routing automation built for your team
                </p>
                <p className="copy mb-5">
                  Let a{" "}
                  <Link
                    href="/services/data-automation-consultant"
                    className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                  >
                    data automation consultant
                  </Link>{" "}
                  design and implement your routing strategy.
                </p>
                <Link href="#contact" className="btn btn-primary">
                  Schedule Your Lead Routing Audit
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <RelatedServices current="/services/lead-routing-guide" />

        <FinalCta />
      </main>

      <Footer />
    </>
  )
}
