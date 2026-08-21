"use client"

import { useEffect, useRef, useState } from "react"
import { useReducedMotion } from "framer-motion"
import { journey } from "@/content/profile"

const STOPS = journey.stops
const N = STOPS.length

/**
 * The hero's subject: one customer moving through seven systems, on a ruler.
 *
 * Ticks sit at the left edge of each column so the rail reads as a measure
 * rather than a row of chips. The playhead advances on its own while the rail
 * is on screen, pauses the moment anyone points at it, and does not run at all
 * under reduced motion. Every stop is a button, so the sequence is reachable
 * by keyboard and each one carries its own accessible name — the readout
 * underneath is presentational, otherwise the auto-advance would narrate
 * itself over and over to a screen reader.
 */
export default function JourneyRail() {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const [auto, setAuto] = useState(0)
  const [pinned, setPinned] = useState<number | null>(null)
  const [inView, setInView] = useState(false)

  const active = pinned ?? auto
  const stop = STOPS[active]
  const closed = active === N - 1

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), {
      threshold: 0.25,
    })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (reduced || pinned !== null || !inView) return
    const id = window.setInterval(() => setAuto((v) => (v + 1) % N), 2600)
    return () => window.clearInterval(id)
  }, [reduced, pinned, inView])

  return (
    <div ref={ref} onMouseLeave={() => setPinned(null)}>
      <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1">
        <p className="tag text-bone-2">{journey.label}</p>
        <p className="tag hidden sm:block">{journey.note}</p>
      </div>

      {/* ── Ruler (md and up) ─────────────────────────────────────────── */}
      <div className="relative mt-6 hidden md:block">
        {/* The return path. It only draws once the last stop is reached, because
            that is the claim: the revenue at the end is joined back to the click
            at the start. Everything before it is just a timeline. */}
        <div
          aria-hidden
          className={`relative h-10 transition-opacity duration-700 ${
            closed ? "opacity-100" : "opacity-0"
          }`}
        >
          <span
            className="absolute inset-x-0 top-0 h-px"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, var(--color-signal) 0 5px, transparent 5px 11px)",
            }}
          />
          <span className="absolute top-0 right-0 h-full w-px bg-signal" />
          <span className="absolute top-0 left-0 h-full w-px bg-signal" />
          <span
            className="absolute bottom-0 left-0 h-0 w-0 -translate-x-[3.5px]"
            style={{
              borderLeft: "4px solid transparent",
              borderRight: "4px solid transparent",
              borderTop: "6px solid var(--color-signal)",
            }}
          />
          <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-ground px-4 font-mono text-[11.5px] tracking-[0.11em] text-signal uppercase">
            Revenue joined back to the click
          </span>
        </div>

        {/* The fill and playhead are anchored to the rail line itself, not to the
            section — otherwise anything added above the line shifts them off it. */}
        <div className="relative h-px w-full bg-rule">
          <div
            className="absolute top-0 left-0 h-px bg-signal transition-[width] duration-[900ms] ease-out"
            style={{ width: `${((active + 1) / N) * 100}%` }}
          />
          <span
            aria-hidden
            className="absolute -top-[3px] h-[7px] w-[7px] bg-signal transition-[left] duration-[900ms] ease-out"
            style={{ left: `${(active / N) * 100}%` }}
          />
        </div>

        <ul className="grid" style={{ gridTemplateColumns: `repeat(${N}, minmax(0, 1fr))` }}>
          {STOPS.map((s, i) => {
            const on = i === active
            const passed = i <= active
            return (
              <li key={s.id}>
                <button
                  type="button"
                  onMouseEnter={() => setPinned(i)}
                  onFocus={() => setPinned(i)}
                  onBlur={() => setPinned(null)}
                  onClick={() => setPinned(i)}
                  aria-current={on ? "step" : undefined}
                  className="group w-full pt-4 pr-3 text-left"
                >
                  <span className="sr-only">
                    Step {i + 1} of {N}, {s.t}: {s.system} — {s.event}. {s.detail}
                  </span>
                  <span
                    aria-hidden
                    className={`block font-mono text-[11.5px] tracking-[0.1em] tabular-nums transition-colors ${
                      passed ? "text-signal" : "text-bone-3"
                    }`}
                  >
                    {s.t}
                  </span>
                  <span
                    aria-hidden
                    className={`mt-2.5 block font-display text-[15px] leading-tight font-semibold transition-colors ${
                      on ? "text-bone" : "text-bone-2 group-hover:text-bone"
                    }`}
                  >
                    {s.event}
                  </span>
                  <span
                    aria-hidden
                    className={`mt-1 block font-mono text-[11.5px] tracking-[0.1em] uppercase transition-colors ${
                      on ? "text-signal" : "text-bone-3"
                    }`}
                  >
                    {s.system}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>

        <p
          aria-hidden
          className="mt-8 min-h-[3rem] max-w-2xl border-l-2 border-signal pl-5 text-[16.5px] leading-[1.62] text-bone-2"
        >
          {stop.detail}
        </p>
      </div>

      {/* ── Stacked (below md) ────────────────────────────────────────── */}
      <ol className="mt-6 md:hidden">
        {STOPS.map((s, i) => {
          const on = i === active
          return (
            <li key={s.id} className="relative border-l border-rule pl-5">
              {i <= active ? (
                <span aria-hidden className="absolute top-0 -left-px h-full w-px bg-signal" />
              ) : null}
              <span
                aria-hidden
                className={`absolute top-[15px] -left-[3px] h-[5px] w-[5px] ${
                  i <= active ? "bg-signal" : "bg-bone-3"
                }`}
              />
              <button
                type="button"
                onClick={() => setPinned(i)}
                aria-current={on ? "step" : undefined}
                className="w-full py-2.5 text-left"
              >
                <span className="sr-only">
                  Step {i + 1} of {N}, {s.t}: {s.system} — {s.event}. {s.detail}
                </span>
                <span aria-hidden className="flex items-baseline gap-3">
                  <span className="w-[42px] shrink-0 font-mono text-[11.5px] tracking-[0.1em] text-bone-3 tabular-nums">
                    {s.t}
                  </span>
                  <span
                    className={`font-display text-[16px] font-semibold ${
                      on ? "text-bone" : "text-bone-2"
                    }`}
                  >
                    {s.event}
                  </span>
                  <span className="ml-auto font-mono text-[11px] tracking-[0.1em] text-bone-3 uppercase">
                    {s.system}
                  </span>
                </span>
              </button>
            </li>
          )
        })}
      </ol>

      <p aria-hidden className="mt-6 text-[16px] leading-[1.62] text-bone-2 md:hidden">
        {stop.detail}
      </p>
    </div>
  )
}
