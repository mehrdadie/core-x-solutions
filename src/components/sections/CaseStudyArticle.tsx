import type { CaseStudy } from "@/content/profile"
import { CaseVisual } from "./CaseVisuals"

/**
 * One case study, set as a page in a report: running head, the figure in the
 * margin, then ruled columns. Shared by the three on the home page and all
 * eight on /case-studies so the two can never drift apart.
 */
export default function CaseStudyArticle({
  study,
  index,
}: {
  study: CaseStudy
  index: number
}) {
  const n = String(index + 1).padStart(2, "0")

  return (
    <article id={study.id} className="scroll-mt-28">
      <div className="tag flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-rule pb-3">
        <span className="text-signal">Case {n}</span>
        <span aria-hidden>/</span>
        <span>{study.title}</span>
        <span aria-hidden>/</span>
        <span>{study.sector}</span>
        <span className="ml-auto hidden sm:inline">{study.outcome}</span>
      </div>

      <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-16">
        <div className="min-w-0">
          <p className="font-display text-[clamp(2.2rem,4.6vw,3.4rem)] leading-[0.98] font-semibold tracking-[-0.035em]">
            {study.metric}
            <span className="block text-bone-3">{study.metricUnit}</span>
          </p>

          {/* Ruled columns rather than a stacked definition list. */}
          <div className="mt-10 grid gap-x-10 gap-y-7 sm:grid-cols-2">
            <div>
              <h3 className="tag border-t border-rule-2 pt-3">Problem</h3>
              <p className="mt-3 text-[16px] leading-[1.65] text-bone-2">{study.problem}</p>
            </div>
            <div>
              <h3 className="tag border-t border-rule-2 pt-3">What changed</h3>
              <p className="mt-3 text-[16px] leading-[1.65] text-bone-2">{study.change}</p>
            </div>
            <div className="sm:col-span-2">
              <h3 className="tag border-t border-rule-2 pt-3 text-signal">Outcome</h3>
              <p className="mt-3 max-w-2xl text-[17px] leading-[1.62]">{study.outcomeText}</p>
            </div>
          </div>

          <ul className="mt-9 flex flex-wrap gap-1.5">
            {study.stack.map((tool) => (
              <li key={tool} className="chip">
                {tool}
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0">
          <CaseVisual kind={study.visual} workflow={study.workflow} />

          <dl className="mt-6 grid grid-cols-1 border-y border-rule-2 min-[420px]:grid-cols-3">
            {study.results.map((r) => (
              <div
                key={r.label}
                className="border-b border-rule py-4 last:border-b-0 min-[420px]:border-b-0 min-[420px]:pr-5"
              >
                <dd className="font-display text-[20px] leading-none font-semibold text-verdigris">
                  {r.value}
                </dd>
                <dt className="tag mt-2.5">{r.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </article>
  )
}
