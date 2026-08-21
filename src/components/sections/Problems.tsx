import { problems } from "@/content/profile"
import Reveal from "@/components/ui/Reveal"

/**
 * Ruled rows, not a card grid. Each row states the problem on the left and
 * shows it as data on the right — the last figure in each set is the one that
 * gives the problem away, so the section argues rather than asserts.
 */
export default function Problems() {
  return (
    <section id="problems" className="section">
      <div className="shell">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:items-end lg:gap-16">
            <h2 className="display-2">
              {problems.titleLead}
              <br />
              <span className="text-bone-3">{problems.titleAccent}</span>
            </h2>
            <div>
              <p className="marker">Problems we fix</p>
              <p className="lead mt-4">{problems.subtitle}</p>
            </div>
          </div>
        </Reveal>

        <ol className="mt-16 border-t border-rule">
          {problems.cards.map((card, i) => (
            <Reveal as="li" key={card.title} delay={i * 0.05}>
              <article className="group grid gap-8 border-b border-rule py-9 md:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] md:gap-16 md:py-11">
                <div>
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[12px] tracking-[0.11em] text-signal">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="display-3">{card.title}</h3>
                  </div>

                  <p className="mt-4 max-w-lg pl-[52px] text-[16.5px] leading-[1.68] text-bone-2">
                    {card.body}
                  </p>

                  <p className="mt-6 flex items-baseline gap-3 pl-[52px] text-[16px] text-signal">
                    <span
                      aria-hidden
                      className="h-px w-7 shrink-0 translate-y-[-4px] bg-signal transition-all duration-300 group-hover:w-11"
                    />
                    {card.outcome}
                  </p>
                </div>

                {/* The symptom, as data. */}
                <figure className="panel self-start p-5">
                  <figcaption className="tag border-b border-rule pb-3">
                    {card.evidenceLabel}
                  </figcaption>
                  <dl className="mt-1">
                    {card.evidence.map((row) => (
                      <div
                        key={row.k}
                        className="flex items-baseline justify-between gap-4 border-b border-rule py-2.5 last:border-b-0"
                      >
                        <dt className="font-mono text-[12px] tracking-[0.05em] text-bone-3">
                          {row.k}
                        </dt>
                        <dd
                          className={`font-mono text-[14.5px] tabular-nums ${
                            row.bad ? "text-oxide" : "text-bone-2"
                          }`}
                        >
                          {row.v}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </figure>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
