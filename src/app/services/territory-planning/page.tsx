import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import Reveal from "@/components/ui/Reveal"

const title = "Territory Planning & Design | Build Balanced Sales Teams"
const description = "Design fair, balanced sales territories. Account allocation, workload distribution, compensation alignment. Scale your sales team efficiently."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/territory-planning" },
  openGraph: {
    type: "article",
    url: `${profile.url}/services/territory-planning`,
    siteName: profile.name,
    title,
    description,
    locale: "en_GB",
  },
  twitter: { card: "summary_large_image", title, description },
}

export default function TerritoryPlanningPage() {
  return (
    <>
      <Header />

      <main id="main">
        <section className="border-b border-rule pt-[124px] pb-16 md:pt-[148px] md:pb-20">
          <div className="shell">
            <Reveal>
              <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-rule pb-5">
                <p className="marker">Guide</p>
                <Link href="/" className="tag transition-colors hover:text-signal">
                  ← Back to home
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-10 font-display text-[clamp(2.3rem,5.6vw,4.2rem)] leading-[1.02] font-semibold tracking-[-0.035em]">
                Territory Planning: Design Fair, Productive Territories
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="lead mt-8">
                Bad territory design kills sales teams. Unfair workload, high turnover, resentment. Smart territory planning builds equity and performance.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell space-y-16 md:space-y-20">
            <Reveal>
              <article>
                <h2 className="font-display text-[1.8rem] md:text-[2.2rem] leading-[1.1] font-semibold mb-6">
                  Why Territory Design Matters
                </h2>
                <div className="space-y-4 text-[15px] leading-[1.65] text-bone-2">
                  <p>
                    <strong>Unfair workload drives turnover.</strong> If one rep gets all the big accounts and another gets none, the latter quits.
                  </p>
                  <p>
                    <strong>Misaligned incentives create conflict.</strong> Reps fight over accounts. Gaming rules. Quota gaming instead of pipeline building.
                  </p>
                  <p>
                    <strong>Unbalanced growth creates chaos.</strong> Adding headcount without redesigning territories means some reps lose accounts. Resentment.
                  </p>
                  <p>
                    Learn to design balanced territories with a <Link href="/services/revenue-operations-consultant" className="text-signal hover:underline">
                      RevOps consultant
                    </Link>.
                  </p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article>
                <h2 className="font-display text-[1.8rem] md:text-[2.2rem] leading-[1.1] font-semibold mb-6">
                  Territory Design Approaches
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      approach: "Geographic",
                      desc: "Divide by region: North, South, East, West. Simple. Works for regional businesses.",
                    },
                    {
                      approach: "Account-Based",
                      desc: "Divide by existing accounts. Vertical or horizontal account mapping. Works for enterprise.",
                    },
                    {
                      approach: "Vertical/Industry",
                      desc: "Divide by industry: Tech, Finance, Healthcare. Builds deep expertise.",
                    },
                    {
                      approach: "Hybrid",
                      desc: "Combine geography and account size. Account execs get big accounts. SDRs work regions.",
                    },
                  ].map((item) => (
                    <div key={item.approach} className="p-4 rounded-sm border border-rule/50">
                      <h3 className="font-semibold text-[1.05rem] mb-2">{item.approach}</h3>
                      <p className="text-[15px] leading-[1.6] text-bone-2">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-sm border-2 border-signal/20 bg-signal/5 p-6 md:p-8">
                <p className="font-semibold text-bone mb-3">Design your territory structure</p>
                <p className="text-[15px] text-bone-2 mb-4">
                  Get expert guidance on territory allocation and team scaling.
                </p>
                <Link
                  href="#contact"
                  className="inline-block px-5 py-2.5 bg-signal text-pit font-semibold rounded-sm hover:bg-signal/90 transition-colors"
                >
                  Schedule a Territory Planning Session
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
