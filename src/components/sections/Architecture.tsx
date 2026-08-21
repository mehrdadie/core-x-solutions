"use client"

import { useState } from "react"
import { useReducedMotion } from "framer-motion"
import { architecture } from "@/content/profile"
import Reveal from "@/components/ui/Reveal"

const SRC_X = 19 // where a source line leaves the label column
const LAYER = { l: 35, r: 49, y: 50 }
const LOGIC = { l: 57, r: 71, y: 50 }
const OUT_X = 76
const OUT_Y = { dashboard: 30, automation: 70 }

function sourceY(i: number, total: number) {
  const span = 88
  const step = span / (total - 1)
  return 6 + i * step
}

export default function Architecture() {
  const [active, setActive] = useState<string | null>(null)
  const reduced = useReducedMotion()
  const { sources, stages, outputs } = architecture

  const spineLive = active !== null
  const activeOutput = outputs.find((o) => o.id === active)
  const activeSource = sources.find((s) => s.id === active)
  const activeStage = stages.find((s) => s.id === active)
  const note = activeSource?.note ?? activeStage?.note ?? activeOutput?.note ?? architecture.body

  const line = (on: boolean) => ({
    stroke: on ? "var(--color-signal-hi)" : "var(--color-rule-2)",
    strokeWidth: on ? 1.6 : 1,
    style:
      on && !reduced
        ? { animation: "dash-flow 3.4s linear infinite", strokeDasharray: "3 9" }
        : undefined,
  })

  return (
    <section id="architecture" className="section border-t border-rule bg-pit">
      <div className="shell">
        <Reveal>
          <header className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.6fr)] lg:items-end lg:gap-16">
            <h2 className="display-2">
              {architecture.titleLead}
              <br />
              <span className="text-bone-3">{architecture.titleAccent}</span>
            </h2>
            <p className="tag hidden lg:block">
              Hover or focus a source to trace its path
            </p>
          </header>
        </Reveal>

        {/* ── Desktop: interactive diagram ─────────────────────────────── */}
        <Reveal delay={0.08}>
          <div
            className="relative mt-14 hidden h-[520px] w-full lg:block"
            onMouseLeave={() => setActive(null)}
          >
            <svg
              aria-hidden
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full"
            >
              {sources.map((s, i) => {
                const y = sourceY(i, sources.length)
                const on = active === s.id || active === null
                const hot = active === s.id
                return (
                  <path
                    key={s.id}
                    d={`M${SRC_X},${y} C${SRC_X + 5},${y} ${LAYER.l - 5},${LAYER.y} ${LAYER.l},${LAYER.y}`}
                    fill="none"
                    vectorEffect="non-scaling-stroke"
                    strokeLinecap="round"
                    opacity={on ? 1 : 0.25}
                    {...line(hot)}
                  />
                )
              })}

              <path
                d={`M${LAYER.r},${LAYER.y} H${LOGIC.l}`}
                fill="none"
                vectorEffect="non-scaling-stroke"
                {...line(spineLive)}
              />

              {outputs.map((o) => {
                const y = OUT_Y[o.id as keyof typeof OUT_Y]
                const hot = active === o.id
                const dim = active !== null && !hot && !activeSource && !activeStage
                return (
                  <path
                    key={o.id}
                    d={`M${LOGIC.r},${LOGIC.y} C${LOGIC.r + 2},${LOGIC.y} ${OUT_X - 3},${y} ${OUT_X},${y}`}
                    fill="none"
                    vectorEffect="non-scaling-stroke"
                    strokeLinecap="round"
                    opacity={dim ? 0.25 : 1}
                    {...line(hot || (spineLive && !activeOutput))}
                  />
                )
              })}
            </svg>

            {/* sources */}
            <ul className="absolute inset-y-0 left-0 w-[18%]">
              {sources.map((s, i) => (
                <li
                  key={s.id}
                  className="absolute inset-x-0 -translate-y-1/2"
                  style={{ top: `${sourceY(i, sources.length)}%` }}
                >
                  <button
                    type="button"
                    onMouseEnter={() => setActive(s.id)}
                    onFocus={() => setActive(s.id)}
                    onClick={() => setActive(active === s.id ? null : s.id)}
                    aria-pressed={active === s.id}
                    className={`flex w-full items-center justify-between gap-2.5 border px-3 py-2 text-left font-mono text-[11px] tracking-[0.1em] uppercase transition-all duration-250 ${
                      active === s.id
                        ? "border-signal/50 bg-signal-soft text-bone"
                        : "border-rule bg-panel text-bone-2 hover:border-rule-2 hover:text-bone"
                    }`}
                  >
                    {s.label}
                    <span
                      aria-hidden
                      className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                        active === s.id ? "bg-signal" : "bg-bone-3"
                      }`}
                    />
                  </button>
                </li>
              ))}
            </ul>

            {/* core stages */}
            {stages.map((stage, i) => (
              <div
                key={stage.id}
                className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ left: i === 0 ? "42%" : "64%" }}
              >
                <button
                  type="button"
                  onMouseEnter={() => setActive(stage.id)}
                  onFocus={() => setActive(stage.id)}
                  onClick={() => setActive(active === stage.id ? null : stage.id)}
                  aria-pressed={active === stage.id}
                  className={`w-[130px] border px-4 py-5 text-center transition-all duration-250 ${
                    active === stage.id
                      ? "border-signal/55 bg-signal-soft"
                      : "border-rule-2 bg-panel-2 hover:border-signal/35"
                  }`}
                >
                  <span className="block font-display text-[14.5px] leading-tight font-semibold text-bone">
                    {stage.label}
                  </span>
                </button>
              </div>
            ))}

            {/* outputs */}
            {outputs.map((o) => (
              <div
                key={o.id}
                className="absolute right-0 w-[21%] -translate-y-1/2"
                style={{ top: `${OUT_Y[o.id as keyof typeof OUT_Y]}%` }}
              >
                <button
                  type="button"
                  onMouseEnter={() => setActive(o.id)}
                  onFocus={() => setActive(o.id)}
                  onClick={() => setActive(active === o.id ? null : o.id)}
                  aria-pressed={active === o.id}
                  className={`w-full border p-4 text-left transition-all duration-250 ${
                    active === o.id
                      ? "border-signal/55 bg-signal-soft"
                      : "border-rule bg-panel hover:border-rule-2"
                  }`}
                >
                  <span className="block font-display text-[16px] font-semibold text-bone">
                    {o.label}
                  </span>
                  <ul
                    className="mt-2 space-y-1 overflow-hidden transition-[max-height,opacity] duration-350"
                    style={{
                      maxHeight: active === o.id ? 120 : 0,
                      opacity: active === o.id ? 1 : 0,
                    }}
                  >
                    {o.children.map((c) => (
                      <li key={c} className="font-mono text-[11.5px] tracking-[0.08em] text-bone-2 uppercase">
                        {c}
                      </li>
                    ))}
                  </ul>
                </button>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p
            aria-live="polite"
            className="mt-8 hidden max-w-2xl border-l-2 border-signal pl-5 text-[16px] leading-[1.68] text-bone-2 lg:block"
          >
            {note}
          </p>
        </Reveal>

        {/* ── Mobile / tablet: vertical flow ───────────────────────────── */}
        <div className="mt-12 lg:hidden">
          <p className="tag mb-4">Sources</p>
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {sources.map((s) => (
              <li
                key={s.id}
                className="border border-rule bg-panel px-3 py-2.5 font-mono text-[11.5px] tracking-[0.1em] text-bone-2 uppercase"
              >
                {s.label}
              </li>
            ))}
          </ul>

          <div aria-hidden className="mx-auto my-5 h-10 w-px bg-gradient-to-b from-signal to-rule" />

          {stages.map((stage) => (
            <div key={stage.id}>
              <div className="border border-signal/40 bg-signal-soft px-4 py-4">
                <p className="font-display text-[16px] font-semibold text-bone">{stage.label}</p>
                <p className="mt-1.5 text-[14.5px] leading-snug text-bone-2">{stage.note}</p>
              </div>
              <div aria-hidden className="mx-auto my-5 h-10 w-px bg-gradient-to-b from-signal to-rule" />
            </div>
          ))}

          <ul className="grid gap-3 sm:grid-cols-2">
            {outputs.map((o) => (
              <li key={o.id} className="border border-rule bg-panel p-4">
                <p className="font-display text-[16px] font-semibold text-bone">{o.label}</p>
                <ul className="mt-2.5 space-y-1">
                  {o.children.map((c) => (
                    <li key={c} className="font-mono text-[11.5px] tracking-[0.08em] text-bone-3 uppercase">
                      {c}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <p className="mt-8 border-l-2 border-signal pl-5 text-[16px] leading-[1.68] text-bone-2">
            {architecture.body}
          </p>
        </div>
      </div>
    </section>
  )
}
