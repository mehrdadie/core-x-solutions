import Link from "next/link"
import { caseStudies, featuredCaseStudies } from "@/content/profile"
import CaseStudyArticle from "./CaseStudyArticle"
import Reveal from "@/components/ui/Reveal"

/**
 * The one inverted section on the home page. Proof is the thing a client takes
 * away and circulates, so it is set as a printed report rather than as another
 * row of dark cards. Three here; the rest are on /case-studies.
 */
export default function CaseStudies() {
  return (
    <section id="work" className="on-paper section">
      <div className="shell">
        <Reveal>
          <header className="flex flex-wrap items-baseline justify-between gap-x-10 gap-y-4 border-b-2 border-graphite pb-5">
            <h2 className="display-2">Selected outcomes</h2>
            <p className="tag">Three of {caseStudies.length} · names withheld</p>
          </header>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="lead prose-w mt-8">
            Three of the problems we have been brought in to solve. Client names are
            withheld, so each is identified by sector.
          </p>
        </Reveal>

        <div className="mt-20 space-y-24">
          {featuredCaseStudies.map((study, i) => (
            <Reveal key={study.id} delay={i * 0.04}>
              <CaseStudyArticle study={study} index={i} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <Link
            href="/case-studies"
            className="group mt-20 flex items-baseline justify-between gap-6 border-t-2 border-graphite pt-6"
          >
            <span className="font-display text-[clamp(1.35rem,2.6vw,2rem)] leading-tight font-semibold tracking-[-0.025em]">
              All {caseStudies.length} case studies
            </span>
            <span aria-hidden className="font-mono text-[15px] text-signal transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
