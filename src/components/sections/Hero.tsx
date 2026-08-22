import { hero } from "@/content/profile"
import JourneyRail from "./JourneyRail"
import { EVENTS } from "@/lib/analytics-events"
import Reveal from "@/components/ui/Reveal"

/**
 * The headline is the hero — set full measure, two lines of equal length, no
 * illustration beside it. Underneath sits the thing the whole practice is
 * about: one customer moving through seven systems until the revenue lands
 * back on the click that started it.
 */
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[104px] pb-14 md:pt-[124px] md:pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px]"
        style={{
          background:
            "radial-gradient(120% 62% at 50% -10%, rgba(240,180,41,0.10), transparent 62%)",
        }}
      />

      <div className="shell">
        <Reveal>
          <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-rule pb-5">
            <p className="marker">{hero.eyebrow}</p>
            <p className="tag flex items-start gap-2.5">
              <span aria-hidden className="mt-[3px] h-1.5 w-1.5 shrink-0 bg-verdigris" />
              {hero.trust}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          {/* Line one is 22 characters, line two 21, so on wide screens the type
              is sized to the longer measure and set solid — the headline becomes
              a block, not a ragged paragraph. Line one measures 10.75em, so the
              cap and the factor are both derived from that — reword the headline
              and both need remeasuring, not just the factor. Below md it wraps. */}
          <h1 className="mt-10 font-display text-[clamp(2.45rem,8.6vw,3.3rem)] leading-[0.97] font-semibold tracking-[-0.045em] [font-variation-settings:'wdth'_104] md:leading-[0.94] md:text-[min(7.05rem,calc((100vw_-_96px)_*_0.0925))] md:[text-wrap:nowrap]">
            We <span className="text-signal">connect</span> the systems
            <span className="block">behind your business.</span>
          </h1>
        </Reveal>

        <div className="mt-10 grid gap-8 md:mt-12 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-16">
          <Reveal delay={0.12}>
            <p className="lead max-w-2xl">{hero.body}</p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={hero.primaryCta.href}
                className="btn btn-primary"
                data-ph-event={EVENTS.ctaClicked}
                data-ph-label={hero.primaryCta.label}
                data-ph-location="hero"
                data-ph-variant="primary"
              >
                {hero.primaryCta.label}
              </a>
              <a
                href={hero.secondaryCta.href}
                className="btn btn-secondary"
                data-ph-event={EVENTS.ctaClicked}
                data-ph-label={hero.secondaryCta.label}
                data-ph-location="hero"
                data-ph-variant="secondary"
              >
                {hero.secondaryCta.label}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.22} y={24}>
          <div className="mt-16 md:mt-20">
            <JourneyRail />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
