import { positioning } from "@/content/profile"
import Reveal from "@/components/ui/Reveal"

/**
 * The argument, drawn: four specialists own four territories, the failures live
 * in the seams between them, and a bracket down the left spans the lot. No
 * orbit, no glowing centre labelled "connected business system" — the diagram
 * is a list of who owns what, which is the actual point.
 */
export default function Positioning() {
  const { territories, seams } = positioning

  return (
    <section className="section border-t border-rule">
      <div className="shell grid gap-14 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-20">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <p className="marker mb-6">Positioning</p>
            <h2 className="display-2">
              {positioning.titleLead}
              <br />
              <span className="text-signal">{positioning.titleAccent}</span>
            </h2>
            <p className="copy prose-w mt-7">{positioning.body}</p>

            <p className="mt-8 border-t border-rule pt-8 font-display text-[clamp(1.25rem,2.2vw,1.6rem)] leading-[1.32] font-semibold tracking-[-0.02em] text-bone">
              {positioning.closer}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          {/* The bracket in the left gutter is the claim: one scope across all four. */}
          <div className="relative pl-12 sm:pl-20">
            <div aria-hidden className="absolute top-0 bottom-0 left-0 w-8 sm:w-14">
              <span className="absolute top-0 right-0 h-px w-full bg-signal" />
              <span className="absolute right-0 bottom-0 h-px w-full bg-signal" />
              <span className="absolute top-0 bottom-0 left-0 w-px bg-signal" />
              <span className="tag absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 rotate-180 bg-ground px-1 py-3 text-signal [writing-mode:vertical-rl]">
                {positioning.bracketLabel}
              </span>
            </div>

            <ol className="space-y-0">
              {territories.map((t, i) => (
                <li key={t.owner}>
                  <div className="border border-rule bg-panel px-5 py-4 sm:px-6 sm:py-5">
                    <p className="font-display text-[18px] font-semibold text-bone sm:text-[20px]">
                      {t.owner}
                    </p>
                    <p className="copy-sm mt-1.5">{t.scope}</p>
                  </div>

                  {i < seams.length ? (
                    <div className="flex items-start gap-4 py-4 pl-5 sm:pl-8">
                      <span aria-hidden className="mt-[9px] h-px w-6 shrink-0 bg-signal sm:w-9" />
                      {/* Accent marks the seam; the sentence itself stays in
                          reading colour. Three multi-line amber paragraphs is
                          more colour than anyone wants to read. */}
                      <p className="text-[16.5px] leading-[1.6] text-bone">
                        <span className="tag mr-2.5 text-signal">Seam</span>
                        {seams[i]}
                      </p>
                    </div>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
