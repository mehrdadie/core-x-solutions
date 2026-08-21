import { capabilities } from "@/content/profile"
import Reveal from "@/components/ui/Reveal"

/**
 * Three ruled rows, read like a contents page. Not a sequence, so no 01/02/03
 * markers; not three products, so no cards. The items run inline rather than as
 * three parallel columns of bullets — twenty-one bullet points is a wall, one
 * line of comma-separated scope is a sentence you actually read.
 */
export default function Capabilities() {
  return (
    <section id="capabilities" className="section border-t border-rule">
      <div className="shell">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-5">
            <h2 className="display-2 max-w-xl">What we can own</h2>
            <p className="lead max-w-md">
              Most engagements start in one row and end up touching all three.
            </p>
          </div>
        </Reveal>

        <dl className="mt-16 border-t border-rule-2">
          {capabilities.map((cap, i) => (
            <Reveal key={cap.key} delay={i * 0.06}>
              <div className="grid gap-x-14 gap-y-4 border-b border-rule py-9 md:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] md:py-10">
                <dt>
                  <h3 className="font-display text-[clamp(1.9rem,3.4vw,2.6rem)] leading-none font-semibold tracking-[-0.03em] text-bone">
                    {cap.title}
                  </h3>
                  <p className="copy-sm mt-3 max-w-xs">{cap.description}</p>
                </dt>

                <dd className="text-[17px] leading-[1.7] text-bone-2 md:pt-2">
                  {cap.items.map((item, j) => (
                    <span key={item}>
                      {j > 0 ? (
                        <span aria-hidden className="mx-2.5 text-signal">
                          ·
                        </span>
                      ) : null}
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
