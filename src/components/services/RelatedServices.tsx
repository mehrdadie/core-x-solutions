import Link from "next/link"
import { moneyPage, relatedServices } from "@/content/services"
import Reveal from "@/components/ui/Reveal"

/**
 * The foot of every service page: the rest of the cluster this one belongs to,
 * derived from the index rather than listed by hand, so a new page appears in
 * its siblings' related blocks the moment it is added to `content/services`.
 */
export default function RelatedServices({ current }: { current: string }) {
  const related = relatedServices(current)
  if (!related || related.siblings.length === 0) return null

  const { group, siblings } = related

  return (
    <section aria-label="Related services" className="section border-t border-rule">
      <div className="shell">
        <Reveal>
          <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 border-b border-rule-2 pb-4">
            <h2 className="font-display text-[clamp(1.4rem,2.4vw,1.85rem)] leading-none font-semibold tracking-[-0.03em]">
              More on {group.label.toLowerCase()}
            </h2>
            <Link href="/services" className="tag transition-colors hover:text-signal">
              All services →
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <ul>
            {siblings.map((item) => (
              <li key={item.href} className="border-b border-rule">
                <Link
                  href={item.href}
                  className="group flex flex-wrap items-baseline gap-x-4 gap-y-1 py-4"
                >
                  <span className="font-display text-[17px] font-medium text-bone transition-colors group-hover:text-signal">
                    {item.label}
                  </span>
                  <span className="copy-sm">{item.blurb}</span>
                  <span
                    aria-hidden
                    className="ml-auto font-mono text-[14px] text-signal opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>

        {current !== moneyPage ? (
          <Reveal delay={0.1}>
            <p className="copy mt-8">
              Or start with the{" "}
              <Link
                href={moneyPage}
                className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
              >
                revenue operations overview
              </Link>{" "}
              that the rest of these hang off.
            </p>
          </Reveal>
        ) : null}
      </div>
    </section>
  )
}
