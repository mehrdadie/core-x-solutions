import { bestFit } from "@/content/profile"
import Reveal from "@/components/ui/Reveal"

/** A ruled qualification sheet — two ledgers, one for each answer. */
export default function BestFit() {
  return (
    <section className="section border-t border-rule">
      <div className="shell">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:items-end lg:gap-16">
            <h2 className="display-2">{bestFit.title}</h2>
            <p className="lead">{bestFit.intro}</p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-x-16 gap-y-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <Reveal>
            <div>
              <p className="tag border-b border-rule-2 pb-3 text-verdigris">Best fit if you</p>
              <ul>
                {bestFit.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 border-b border-rule py-4 text-[17px] leading-[1.5] text-bone"
                  >
                    <span aria-hidden className="mt-[9px] h-[7px] w-[7px] shrink-0 bg-signal" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="lg:pt-0">
              <p className="tag border-b border-rule-2 pb-3 text-oxide">{bestFit.notFit.title}</p>
              <ul>
                {bestFit.notFit.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 border-b border-rule py-4 text-[16px] leading-[1.5] text-bone-2"
                  >
                    <span
                      aria-hidden
                      className="mt-[9px] h-[7px] w-[7px] shrink-0 border border-oxide"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-10 font-display text-[1.15rem] leading-[1.38] font-medium text-bone">
                {bestFit.highlight}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
