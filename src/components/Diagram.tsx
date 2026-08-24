import type { ReactNode } from "react"

/**
 * Diagrams for post bodies, declared as JSON inside a ```diagram fence.
 *
 * Two constraints shaped this. Post bodies come from the database, so nothing
 * here may become HTML — every diagram is built from React elements, and an
 * unrecognised or malformed spec renders nothing rather than throwing and
 * taking the whole article down with it. And the article is set on the paper
 * ground, where the palette tokens are redefined; using the token classes
 * rather than literal colours is what lets one component read correctly on
 * both grounds.
 *
 * Everything is laid out with CSS rather than a fixed SVG viewBox, so a
 * diagram reflows on a phone instead of shrinking to illegibility. The arrows
 * are the only drawn marks.
 *
 * Four shapes, chosen because they are what this subject matter actually
 * needs — a path between systems, a comparison, a set of magnitudes, and a
 * positioning grid:
 *
 *   flow     { steps: [{ label, note?, t? }] }
 *   compare  { columns: [string], rows: [{ label, cells: [string] }] }
 *   bars     { unit?, bars: [{ label, value, note?, tone? }] }
 *   matrix   { xAxis: [low, high], yAxis: [low, high], quadrants: [{ label, note? }] }
 *
 * Every shape also takes an optional `title` and `caption`.
 */

export type DiagramSpec = {
  type: "flow" | "compare" | "bars" | "matrix"
  title?: string
  caption?: string
  steps?: { label: string; note?: string; t?: string }[]
  columns?: string[]
  rows?: { label: string; cells: string[] }[]
  unit?: string
  bars?: { label: string; value: number; note?: string; tone?: "signal" | "oxide" | "verdigris" }[]
  xAxis?: [string, string]
  yAxis?: [string, string]
  quadrants?: { label: string; note?: string }[]
}

const TONE = {
  signal: "bg-signal",
  oxide: "bg-oxide",
  verdigris: "bg-verdigris",
} as const

/** Anything a post can send that is not a well-formed spec renders as nothing. */
export function parseDiagram(source: string): DiagramSpec | null {
  let spec: unknown
  try {
    spec = JSON.parse(source)
  } catch {
    return null
  }

  if (typeof spec !== "object" || spec === null) return null
  const s = spec as DiagramSpec

  switch (s.type) {
    case "flow":
      return Array.isArray(s.steps) && s.steps.length > 0 ? s : null
    case "compare":
      return Array.isArray(s.columns) && Array.isArray(s.rows) && s.rows.length > 0 ? s : null
    case "bars":
      return Array.isArray(s.bars) && s.bars.length > 0 ? s : null
    case "matrix":
      return Array.isArray(s.quadrants) && s.quadrants.length === 4 ? s : null
    default:
      return null
  }
}

export default function Diagram({ spec }: { spec: DiagramSpec }) {
  let body: ReactNode = null

  if (spec.type === "flow") body = <Flow steps={spec.steps!} />
  else if (spec.type === "compare") body = <Compare columns={spec.columns!} rows={spec.rows!} />
  else if (spec.type === "bars") body = <Bars bars={spec.bars!} unit={spec.unit} />
  else if (spec.type === "matrix") body = <Matrix spec={spec} />

  if (!body) return null

  return (
    <figure className="my-12 border border-rule">
      {spec.title ? (
        <figcaption className="tag border-b border-rule px-5 py-3.5">{spec.title}</figcaption>
      ) : null}

      <div className="px-5 py-7 sm:px-7">{body}</div>

      {spec.caption ? (
        <figcaption className="copy-sm border-t border-rule px-5 py-3.5">{spec.caption}</figcaption>
      ) : null}
    </figure>
  )
}

/* ── Flow ─────────────────────────────────────────────────────────────────── */

/**
 * A path between systems. Wraps onto more rows rather than scrolling, because
 * a five-stop journey squeezed onto a 360px viewport is unreadable in one line
 * and fine in two.
 *
 * The column count and the arrow suppression live together in `.flow-rail` in
 * globals.css: the connector has to vanish at the end of each visual row, and
 * knowing where the rows end means stating the columns rather than letting
 * flex-wrap decide.
 */
function Flow({ steps }: { steps: NonNullable<DiagramSpec["steps"]> }) {
  return (
    <ol className="flow-rail">
      {steps.map((step, i) => (
        <li key={i} className="flex min-w-0 items-stretch">
          <div className="min-w-0 flex-1 border-l-2 border-signal pl-3.5">
            <p className="tag flex items-baseline gap-2">
              <span className="text-signal tabular-nums">{String(i + 1).padStart(2, "0")}</span>
              {step.t ? <span>{step.t}</span> : null}
            </p>
            <p className="mt-2 font-display text-[16px] leading-tight font-semibold text-bone">
              {step.label}
            </p>
            {step.note ? (
              <p className="copy-sm mt-1.5 text-[14.5px] leading-snug">{step.note}</p>
            ) : null}
          </div>

          <span
            aria-hidden
            className="flow-arrow w-7 shrink-0 items-center justify-center text-bone-3"
          >
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <path d="M0 5h12M8.5 1.5 12 5l-3.5 3.5" stroke="currentColor" strokeWidth="1.25" />
            </svg>
          </span>
        </li>
      ))}
    </ol>
  )
}

/* ── Compare ──────────────────────────────────────────────────────────────── */

/**
 * A comparison table that stays a table. It scrolls inside its own box rather
 * than pushing the article sideways — the one thing a wide element must never
 * do to the page around it.
 */
function Compare({
  columns,
  rows,
}: {
  columns: NonNullable<DiagramSpec["columns"]>
  rows: NonNullable<DiagramSpec["rows"]>
}) {
  return (
    <div className="-mx-1 overflow-x-auto px-1">
      <table className="w-full min-w-[34rem] border-collapse text-left">
        <thead>
          <tr>
            <th className="tag border-b border-rule-2 pb-3 pr-5 font-normal" />
            {columns.map((c) => (
              <th
                key={c}
                scope="col"
                className="border-b border-rule-2 pb-3 pr-5 font-display text-[15px] leading-tight font-semibold text-bone last:pr-0"
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label}>
              <th
                scope="row"
                className="tag border-b border-rule py-3.5 pr-5 align-top font-normal"
              >
                {row.label}
              </th>
              {columns.map((c, i) => (
                <td
                  key={c}
                  className="border-b border-rule py-3.5 pr-5 align-top text-[15.5px] leading-snug text-bone-2 last:pr-0"
                >
                  {row.cells[i] ?? "—"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/* ── Bars ─────────────────────────────────────────────────────────────────── */

/**
 * Magnitudes. Scaled against the largest bar rather than against a fixed
 * maximum, so the shape of the comparison survives whatever units the post
 * happens to be using.
 */
function Bars({
  bars,
  unit,
}: {
  bars: NonNullable<DiagramSpec["bars"]>
  unit?: string
}) {
  const values = bars.map((b) => (Number.isFinite(b.value) ? b.value : 0))
  const max = Math.max(...values, 0)

  return (
    <ol className="space-y-5">
      {bars.map((bar, i) => {
        const value = values[i]
        // A zero-width bar reads as a rendering fault rather than a small
        // number, so everything non-zero keeps a visible stub.
        const width = max > 0 ? Math.max((value / max) * 100, value > 0 ? 1.5 : 0) : 0

        return (
          <li key={`${bar.label}-${i}`}>
            <div className="flex items-baseline justify-between gap-4">
              <p className="text-[15.5px] leading-snug text-bone-2">{bar.label}</p>
              <p className="font-mono text-[13px] text-bone tabular-nums">
                {value.toLocaleString("en-GB")}
                {unit ? <span className="text-bone-3">{unit}</span> : null}
              </p>
            </div>

            <div className="mt-2 h-2.5 w-full bg-rule">
              <div
                className={`h-full ${TONE[bar.tone ?? "signal"]}`}
                style={{ width: `${width}%` }}
              />
            </div>

            {bar.note ? <p className="copy-sm mt-1.5 text-[14px]">{bar.note}</p> : null}
          </li>
        )
      })}
    </ol>
  )
}

/* ── Matrix ───────────────────────────────────────────────────────────────── */

/**
 * A positioning grid. Quadrants are given in reading order — top-left,
 * top-right, bottom-left, bottom-right — which is how anyone describing one
 * out loud lists them.
 */
function Matrix({ spec }: { spec: DiagramSpec }) {
  const { quadrants = [], xAxis, yAxis } = spec

  return (
    <div className="flex gap-3">
      {yAxis ? (
        <div className="tag flex flex-col justify-between py-1 text-right">
          <span className="[writing-mode:vertical-rl] rotate-180">{yAxis[1]}</span>
          <span className="[writing-mode:vertical-rl] rotate-180">{yAxis[0]}</span>
        </div>
      ) : null}

      <div className="min-w-0 flex-1">
        <div className="grid grid-cols-2 border-t border-l border-rule-2">
          {quadrants.map((q, i) => (
            <div key={i} className="min-h-[7.5rem] border-r border-b border-rule-2 p-4">
              <p className="font-display text-[15.5px] leading-tight font-semibold text-bone">
                {q.label}
              </p>
              {q.note ? (
                <p className="copy-sm mt-2 text-[14.5px] leading-snug">{q.note}</p>
              ) : null}
            </div>
          ))}
        </div>

        {xAxis ? (
          <div className="tag mt-2.5 flex justify-between">
            <span>{xAxis[0]}</span>
            <span>{xAxis[1]}</span>
          </div>
        ) : null}
      </div>
    </div>
  )
}
