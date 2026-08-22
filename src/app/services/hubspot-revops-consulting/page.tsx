import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import Reveal from "@/components/ui/Reveal"

const title = "HubSpot RevOps Consulting | Implementation & Optimization"
const description = "Expert HubSpot RevOps consulting. Workflows, properties, custom objects, lead routing, and automation. Unlock HubSpot's full RevOps potential."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/hubspot-revops-consulting" },
  openGraph: {
    type: "article",
    url: `${profile.url}/services/hubspot-revops-consulting`,
    siteName: profile.name,
    title,
    description,
    locale: "en_GB",
  },
  twitter: { card: "summary_large_image", title, description },
}

export default function HubSpotRevOpsConsultingPage() {
  return (
    <>
      <Header />

      <main id="main">
        <section className="border-b border-rule pt-[124px] pb-16 md:pt-[148px] md:pb-20">
          <div className="shell">
            <Reveal>
              <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-rule pb-5">
                <p className="marker">Services</p>
                <Link href="/" className="tag transition-colors hover:text-signal">
                  ← Back to home
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-10 font-display text-[clamp(2.3rem,5.6vw,4.2rem)] leading-[1.02] font-semibold tracking-[-0.035em]">
                HubSpot RevOps Consulting: Optimize Your Instance
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="lead mt-8">
                HubSpot is powerful but often underutilized. We unlock its full potential with strategic workflows, custom automation, and RevOps best practices.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell space-y-16 md:space-y-20">
            <Reveal>
              <article>
                <h2 className="font-display text-[1.8rem] md:text-[2.2rem] leading-[1.1] font-semibold mb-6">
                  Common HubSpot RevOps Challenges
                </h2>
                <div className="space-y-4 text-[15px] leading-[1.65] text-bone-2">
                  <p>
                    <strong>Workflows are ad-hoc.</strong> Quick automations built one at a time, not part of a unified strategy. Result: conflicting logic, data errors.
                  </p>
                  <p>
                    <strong>Custom properties aren't documented.</strong> Hundreds of properties exist. No one knows what they mean. Data gets stale.
                  </p>
                  <p>
                    <strong>Lead routing is manual.</strong> Leads sit in HubSpot waiting for someone to assign them. Sales misses opportunities.
                  </p>
                  <p>
                    <strong>Reporting is painful.</strong> Custom reports take hours. Dashboards aren't real-time. Leadership flies blind.
                  </p>
                  <p>
                    Let a <Link href="/services/revenue-operations-consultant" className="text-signal hover:underline">
                      HubSpot RevOps consultant
                    </Link>{" "}
                    fix these.
                  </p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article>
                <h2 className="font-display text-[1.8rem] md:text-[2.2rem] leading-[1.1] font-semibold mb-6">
                  Our HubSpot RevOps Approach
                </h2>
                <div className="space-y-8">
                  {[
                    {
                      step: 1,
                      title: "Instance Audit",
                      desc: "Document all workflows, properties, integrations, and custom objects. Identify gaps and optimization opportunities.",
                    },
                    {
                      step: 2,
                      title: "Property Architecture",
                      desc: "Design a clean property schema. Define company, deal, contact, and custom properties. Document naming conventions.",
                    },
                    {
                      step: 3,
                      title: "Workflow Strategy",
                      desc: "Build unified workflows for lead routing, scoring, nurturing, and deal tracking. No conflicts or redundancy.",
                    },
                    {
                      step: 4,
                      title: "Integration Setup",
                      desc: "Connect your tech stack: marketing automation, analytics, accounting, support. Keep data synced in real-time.",
                    },
                    {
                      step: 5,
                      title: "Reporting & Training",
                      desc: "Build dashboards. Train your team. Document everything. Ensure long-term success.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-signal/20 text-signal font-semibold text-sm">
                          {item.step}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-semibold text-[16px] mb-2">{item.title}</h3>
                        <p className="text-[15px] leading-[1.6] text-bone-2">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <article>
                <h2 className="font-display text-[1.8rem] md:text-[2.2rem] leading-[1.1] font-semibold mb-6">
                  HubSpot RevOps Services
                </h2>
                <div className="space-y-4 text-[15px] leading-[1.65] text-bone-2">
                  <p>• HubSpot workflow strategy and build-out</p>
                  <p>• Custom property architecture and documentation</p>
                  <p>• Lead routing automation</p>
                  <p>• Marketing + sales automation sync</p>
                  <p>• <Link href="/services/crm-integration-services" className="text-signal hover:underline">
                      HubSpot integrations
                    </Link>{" "}
                    (third-party tools, custom APIs)</p>
                  <p>• Dashboard and reporting setup</p>
                  <p>• Team training and process documentation</p>
                  <p>• Ongoing optimization and maintenance</p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-sm border-2 border-signal/20 bg-signal/5 p-6 md:p-8">
                <p className="font-semibold text-bone mb-3">Get HubSpot optimized for RevOps</p>
                <p className="text-[15px] text-bone-2 mb-4">
                  Work with our <Link href="/services/revenue-operations-consultant" className="text-signal hover:underline">
                    HubSpot RevOps expert
                  </Link>{" "}
                  to audit your instance and unlock its full potential.
                </p>
                <Link
                  href="#contact"
                  className="inline-block px-5 py-2.5 bg-signal text-pit font-semibold rounded-sm hover:bg-signal/90 transition-colors"
                >
                  Schedule Your HubSpot Audit
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
