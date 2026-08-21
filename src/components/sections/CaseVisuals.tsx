/**
 * Case-study visuals. Each one is a diagram of the actual change — no stock
 * imagery, no fake screenshots of software that does not exist.
 *
 * Every colour is a token reference, so these render correctly on the dark
 * ground and on the inverted paper section without a second set of styles.
 */

const RULE = "var(--color-rule)"
const RULE2 = "var(--color-rule-2)"
const DIM = "var(--color-bone-3)"
const SIG = "var(--color-signal)"

import type { WorkflowSpec } from "@/content/profile"

function Frame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <figure className="border border-rule">
      <figcaption className="tag border-b border-rule px-4 py-3">{label}</figcaption>
      <div className="p-4 sm:p-5">{children}</div>
    </figure>
  )
}

/** Before / after of a process, driven by the case study's own step list. */
export function WorkflowVisual({ spec }: { spec: WorkflowSpec }) {
  const colBefore = 420 / spec.before.length

  return (
    <Frame label={spec.label}>
      <svg
        viewBox="0 0 420 180"
        className="w-full"
        role="img"
        aria-label={`${spec.beforeLabel}: ${spec.before.join(", ")}. ${spec.afterLabel}: ${spec.after.join(", ")}, then ${spec.tail.top}.`}
      >
        <text x="0" y="12" fill={DIM} fontSize="9.5" letterSpacing="1.4" fontFamily="monospace">
          {spec.beforeLabel.toUpperCase()}
        </text>
        {spec.before.map((step, i) => (
          <g key={step} transform={`translate(${i * colBefore}, 24)`}>
            <rect width={colBefore - 12} height="34" fill="none" stroke={RULE} strokeDasharray="3 3" />
            <text
              x={(colBefore - 12) / 2}
              y="21"
              fill={DIM}
              fontSize="9.5"
              textAnchor="middle"
              fontFamily="monospace"
            >
              {step.toUpperCase()}
            </text>
            {i < spec.before.length - 1 && (
              <path d={`M${colBefore - 10} 17h7`} stroke={RULE2} strokeWidth="1" />
            )}
          </g>
        ))}

        <path d="M0 84h420" stroke={RULE} strokeWidth="1" />

        <text x="0" y="106" fill={SIG} fontSize="9.5" letterSpacing="1.4" fontFamily="monospace">
          {spec.afterLabel.toUpperCase()}
        </text>
        {spec.after.map((step, i) => (
          <g key={step} transform={`translate(${i * 106}, 118)`}>
            <rect width="94" height="40" fill="var(--color-signal-soft)" stroke={SIG} />
            <text
              x="47"
              y="24"
              fill="var(--color-bone)"
              fontSize="10"
              textAnchor="middle"
              fontFamily="monospace"
            >
              {step.toUpperCase()}
            </text>
            {i < spec.after.length - 1 && <path d="M96 20h8" stroke={SIG} strokeWidth="1" />}
          </g>
        ))}
        <g transform="translate(318, 118)">
          <rect width="94" height="40" fill="none" stroke={RULE} />
          <text x="47" y="19" fill={DIM} fontSize="9.5" textAnchor="middle" fontFamily="monospace">
            {spec.tail.top.toUpperCase()}
          </text>
          <text
            x="47"
            y="31"
            fill="var(--color-verdigris)"
            fontSize="9.5"
            textAnchor="middle"
            fontFamily="monospace"
          >
            {spec.tail.bottom.toUpperCase()}
          </text>
        </g>
      </svg>
    </Frame>
  )
}

/** One customer record assembled from four systems. */
export function CustomerVisual() {
  const rows = [
    { src: "META ADS", event: "Clicked campaign · Q3 Webinar", tone: "bg-bone-3" },
    { src: "GOHIGHLEVEL", event: "Form submitted · 14:02", tone: "bg-bone-3" },
    { src: "SALESFORCE", event: "Lead assigned · owner set", tone: "bg-bone-3" },
    { src: "AIRCALL", event: "Outbound call · 4m 12s · connected", tone: "bg-signal" },
    { src: "SALESFORCE", event: "Opportunity created · £14,400", tone: "bg-bone-3" },
    { src: "CHARGEBEE", event: "Subscription active · annual", tone: "bg-verdigris" },
  ]

  return (
    <Frame label="Unified customer record">
      <div className="grid grid-cols-3 gap-px bg-rule">
        {[
          { k: "Sources joined", v: "4" },
          { k: "To first call", v: "11 min" },
          { k: "Record status", v: "Complete" },
        ].map((tile) => (
          <div key={tile.k} className="bg-ground px-3 py-3">
            <p className="tag">{tile.k}</p>
            <p className="mt-2 font-mono text-[15px] text-bone">{tile.v}</p>
          </div>
        ))}
      </div>

      <ol className="mt-4">
        {rows.map((r, i) => (
          <li
            key={r.event}
            className="flex items-start gap-3 border-b border-rule py-2.5 last:border-b-0"
          >
            <span aria-hidden className={`mt-[8px] h-1.5 w-1.5 shrink-0 ${r.tone}`} />
            <span className="tag w-[108px] shrink-0">{r.src}</span>
            <span className="min-w-0 text-[14.5px] leading-snug text-bone-2">{r.event}</span>
            <span className="tag ml-auto hidden sm:block">D+{i}</span>
          </li>
        ))}
      </ol>
    </Frame>
  )
}

/** Spend on the left, revenue on the right, joined in the middle. */
export function AttributionVisual() {
  const channels = [
    { name: "Google Ads", spend: 62, revenue: 88 },
    { name: "Meta Ads", spend: 100, revenue: 41 },
    { name: "LinkedIn Ads", spend: 34, revenue: 76 },
    { name: "Organic / direct", spend: 8, revenue: 52 },
  ]

  return (
    <Frame label="Acquisition to revenue">
      <div className="mb-4 flex items-center justify-between">
        <span className="tag">Spend</span>
        <span className="tag text-signal">Revenue attributed</span>
      </div>

      <ul className="space-y-3.5">
        {channels.map((c) => (
          <li key={c.name}>
            <p className="mb-1.5 text-[14.5px] text-bone-2">{c.name}</p>
            <div className="flex items-center gap-2">
              <div className="flex h-2.5 flex-1 justify-end bg-rule/40">
                <div className="h-full bg-bone-3" style={{ width: `${c.spend}%` }} />
              </div>
              <span aria-hidden className="h-3.5 w-px bg-rule-2" />
              <div className="h-2.5 flex-1 bg-rule/40">
                <div className="h-full bg-signal" style={{ width: `${c.revenue}%` }} />
              </div>
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-5 border-t border-rule pt-4 text-[14px] text-bone-3">
        Same spend, redistributed. The channel with the largest budget was not the channel
        producing the revenue.
      </p>
    </Frame>
  )
}

/** Four records that were one customer, and the survivorship rule that merged them. */
export function QualityVisual() {
  const dupes = [
    { name: "Northgate Ltd", src: "Import 2021", keep: false, note: "No owner" },
    { name: "Northgate Limited", src: "Manual entry", keep: false, note: "Stale address" },
    { name: "NORTHGATE LTD.", src: "Migration", keep: false, note: "Lost campaign" },
    { name: "Northgate Ltd", src: "Golden record", keep: true, note: "Survivorship applied" },
  ]

  return (
    <Frame label="Deduplication, one account">
      <ul>
        {dupes.map((d, i) => (
          <li
            key={d.src}
            className={`flex items-baseline gap-3 border-b border-rule py-3 last:border-b-0 ${
              i === dupes.length - 1 ? "mt-2 border-t border-rule-2 pt-4" : ""
            }`}
          >
            <span
              aria-hidden
              className={`h-[7px] w-[7px] shrink-0 translate-y-[-2px] ${
                d.keep ? "bg-verdigris" : "border border-oxide"
              }`}
            />
            <span
              className={`font-mono text-[14px] ${d.keep ? "text-bone" : "text-bone-2 line-through decoration-oxide/70"}`}
            >
              {d.name}
            </span>
            <span className="tag ml-auto text-right">{d.keep ? d.note : d.src}</span>
          </li>
        ))}
      </ul>

      <p className="mt-4 border-t border-rule pt-4 text-[14px] text-bone-3">
        Deterministic keys first, fuzzy match second, and a written rule for which field
        wins. The same rules then run nightly.
      </p>
    </Frame>
  )
}

/** Where the dormant value is sitting, by reason. */
export function DormantVisual() {
  const bands = [
    { label: "Never contacted", n: 1240, value: "£71k", pct: 26 },
    { label: "Stalled at proposal", n: 890, value: "£96k", pct: 19 },
    { label: "Lapsed customer", n: 1610, value: "£58k", pct: 33 },
    { label: "Contacted, no follow-up", n: 1060, value: "£15k", pct: 22 },
  ]

  return (
    <Frame label="Dormant records, by reason">
      <div aria-hidden className="flex h-3 w-full overflow-hidden">
        {bands.map((b, i) => (
          <div
            key={b.label}
            className={i % 2 === 0 ? "bg-signal" : "bg-signal/45"}
            style={{ width: `${b.pct}%` }}
          />
        ))}
      </div>

      <ul className="mt-4">
        {bands.map((b) => (
          <li
            key={b.label}
            className="flex items-baseline gap-3 border-b border-rule py-2.5 last:border-b-0"
          >
            <span className="text-[14.5px] text-bone-2">{b.label}</span>
            <span className="tag ml-auto tabular-nums">{b.n.toLocaleString("en-GB")}</span>
            <span className="w-[52px] text-right font-mono text-[14px] text-signal tabular-nums">
              {b.value}
            </span>
          </li>
        ))}
      </ul>

      <p className="mt-4 border-t border-rule-2 pt-4 text-[14px] text-bone-3">
        4,800 records, scored on last contact, acquisition cost and stage at stall.
      </p>
    </Frame>
  )
}

/** A call, as the CRM finally sees it. */
export function CallsVisual() {
  const tags = [
    { k: "Outcome", v: "Follow-up booked", tone: "text-verdigris" },
    { k: "Objection", v: "Implementation time", tone: "text-oxide" },
    { k: "Competitor", v: "Named — incumbent", tone: "text-bone-2" },
    { k: "Next step", v: "Proposal by Thursday", tone: "text-bone-2" },
  ]

  return (
    <Frame label="One call, classified">
      <div className="border-l-2 border-signal pl-4">
        <p className="tag">Transcript · 06:42</p>
        <p className="mt-2.5 text-[14.5px] leading-[1.6] text-bone-2">
          &ldquo;It is not the price. We looked at this two years ago and the rollout took
          most of a quarter, so I need to know what that looks like before I take it to
          the board.&rdquo;
        </p>
      </div>

      <dl className="mt-5 border-t border-rule">
        {tags.map((t) => (
          <div
            key={t.k}
            className="flex items-baseline justify-between gap-4 border-b border-rule py-2.5"
          >
            <dt className="tag">{t.k}</dt>
            <dd className={`font-mono text-[14px] ${t.tone}`}>{t.v}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-4 text-[14px] text-bone-3">
        Written back to the record the same day. The model tags; the rep decides.
      </p>
    </Frame>
  )
}

/** Which source feeds which conformed dimension. */
export function MatrixVisual() {
  const dims = ["Customer", "Campaign", "Revenue"]
  const sources = [
    { name: "Salesforce", on: [true, true, false] },
    { name: "HubSpot", on: [true, true, false] },
    { name: "GoHighLevel", on: [true, true, false] },
    { name: "Google Ads", on: [false, true, false] },
    { name: "Meta Ads", on: [false, true, false] },
    { name: "GA4", on: [false, true, false] },
    { name: "Stripe", on: [true, false, true] },
    { name: "Chargebee", on: [true, false, true] },
    { name: "Xero", on: [false, false, true] },
  ]

  return (
    <Frame label="Sources against conformed dimensions">
      <div className="-mx-1 overflow-x-auto px-1">
        <table className="w-full min-w-[290px] border-collapse">
          <thead>
            <tr>
              <th className="tag w-[42%] pb-3 text-left font-medium">Source</th>
            {dims.map((d) => (
              <th key={d} className="tag pb-3 text-center font-medium">
                {d}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sources.map((s) => (
            <tr key={s.name} className="border-t border-rule">
              <td className="py-2.5 font-mono text-[14px] text-bone-2">{s.name}</td>
              {s.on.map((on, i) => (
                <td key={dims[i]} className="py-2.5 text-center">
                  <span className="sr-only">
                    {on ? `feeds ${dims[i]}` : `does not feed ${dims[i]}`}
                  </span>
                  <span
                    aria-hidden
                    className={`inline-block h-[9px] w-[9px] ${
                      on ? "bg-signal" : "border border-rule-2"
                    }`}
                  />
                </td>
              ))}
            </tr>
          ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 border-t border-rule-2 pt-4 text-[14px] text-bone-3">
        Brand is a column on every one of them, not a separate report.
      </p>
    </Frame>
  )
}

export function CaseVisual({ kind, workflow }: { kind: string; workflow?: WorkflowSpec }) {
  if (kind === "workflow" && workflow) return <WorkflowVisual spec={workflow} />
  if (kind === "customer") return <CustomerVisual />
  if (kind === "quality") return <QualityVisual />
  if (kind === "dormant") return <DormantVisual />
  if (kind === "calls") return <CallsVisual />
  if (kind === "matrix") return <MatrixVisual />
  return <AttributionVisual />
}
