import { testimonials } from "@/content/profile"
import Reveal from "@/components/ui/Reveal"

/**
 * Pull quotes, unboxed. Each one is set against a rule with the attribution in
 * the margin, and the block indents as it goes so the section reads as a
 * column of voices rather than a grid of testimonial cards.
 */
export default function Testimonials() {
  return (
    <section aria-labelledby="feedback-heading" className="section border-t border-rule bg-ground-2">
      <div className="shell">
        <Reveal>
          <div className="flex flex-wrap items-baseline justify-between gap-x-10 gap-y-3">
            <h2 id="feedback-heading" className="display-2">
              What clients say
            </h2>
            <p className="tag">Attributed by role and sector</p>
          </div>
        </Reveal>

        <ul className="mt-14 border-t border-rule">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={t.role} delay={i * 0.05}>
              <figure
                className="grid gap-5 border-b border-rule py-10 md:grid-cols-[minmax(0,180px)_minmax(0,1fr)] md:gap-12 md:py-12"
                style={{ paddingLeft: `${i * 8}px` }}
              >
                <figcaption className="md:pt-2">
                  <p className="tag text-signal">{String(i + 1).padStart(2, "0")}</p>
                  <p className="mt-3 text-[15px] leading-snug text-bone-2">{t.role}</p>
                  <p className="text-[15px] leading-snug text-bone-3">{t.org}</p>
                </figcaption>

                <blockquote className="font-display text-[clamp(1.2rem,2.3vw,1.65rem)] leading-[1.32] font-medium tracking-[-0.015em] text-bone">
                  {t.quote}
                </blockquote>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
