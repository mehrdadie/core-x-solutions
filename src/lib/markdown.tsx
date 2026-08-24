import type { ReactNode } from "react"
import Diagram, { parseDiagram } from "@/components/Diagram"

/**
 * A very small markdown renderer that returns React elements, never HTML.
 *
 * Post bodies come from the database, so rendering them through
 * dangerouslySetInnerHTML would make every author a potential script vector.
 * Building nodes directly means the worst a malformed post can do is look odd.
 *
 * Supports what long-form posts actually need: h2/h3, paragraphs, bold, italic,
 * inline code, links, ordered and unordered lists, blockquotes, rules, fenced
 * code, pipe tables, figures, and `diagram` fences.
 *
 * Parsing is two-pass. Fenced blocks are lifted out first, because a fence may
 * contain blank lines and the paragraph splitter works on blank lines — doing
 * it the other way round tears a code block into pieces mid-statement.
 */

const INLINE = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|!?\[[^\]]+\]\([^)\s]+(?:\s+"[^"]*")?\))/g

/** `![alt](src)` or `![alt](src "caption")`, alone on its own block. */
const FIGURE = /^!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)$/

function inline(text: string, keyPrefix: string): ReactNode[] {
  return text
    .split(INLINE)
    .filter((part) => part !== "")
    .map((part, i) => {
      const key = `${keyPrefix}-${i}`

      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={key} className="font-semibold text-bone">
            {part.slice(2, -2)}
          </strong>
        )
      }
      if (part.startsWith("*") && part.endsWith("*")) {
        return <em key={key}>{part.slice(1, -1)}</em>
      }
      if (part.startsWith("`") && part.endsWith("`")) {
        return (
          <code key={key} className="border border-rule px-1.5 py-0.5 font-mono text-[0.9em]">
            {part.slice(1, -1)}
          </code>
        )
      }

      // An inline image is almost always a mis-typed link, and rendering it as
      // one is friendlier than dropping the text on the floor.
      const link = /^!?\[([^\]]+)\]\(([^)\s]+)(?:\s+"[^"]*")?\)$/.exec(part)
      if (link) {
        const [, label, href] = link
        const external = /^https?:\/\//.test(href)
        return (
          <a
            key={key}
            href={href}
            {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
            className="text-signal underline decoration-signal/40 underline-offset-4 transition-colors hover:decoration-signal"
          >
            {label}
          </a>
        )
      }

      return <span key={key}>{part}</span>
    })
}

/* ── Fences ───────────────────────────────────────────────────────────────── */

type Segment =
  | { kind: "prose"; text: string }
  | { kind: "fence"; lang: string; body: string }

/**
 * Splits the document into prose runs and fenced blocks. An unterminated fence
 * takes the rest of the document with it, which is what every other markdown
 * implementation does and is easier to spot in a draft than silently dropping
 * the opener.
 */
function segment(md: string): Segment[] {
  const lines = md.replace(/\r\n/g, "\n").split("\n")
  const out: Segment[] = []
  let prose: string[] = []

  const flush = () => {
    if (prose.length) {
      out.push({ kind: "prose", text: prose.join("\n") })
      prose = []
    }
  }

  for (let i = 0; i < lines.length; i++) {
    const open = /^```([\w-]*)\s*$/.exec(lines[i])
    if (!open) {
      prose.push(lines[i])
      continue
    }

    flush()
    const body: string[] = []
    i++
    while (i < lines.length && !/^```\s*$/.test(lines[i])) {
      body.push(lines[i])
      i++
    }
    out.push({ kind: "fence", lang: open[1].toLowerCase(), body: body.join("\n") })
  }

  flush()
  return out
}

/* ── Tables ───────────────────────────────────────────────────────────────── */

const TABLE_DIVIDER = /^\s*\|?[\s:|-]*-[\s:|-]*\|?\s*$/

function splitRow(line: string) {
  return line
    .trim()
    .replace(/^\||\|$/g, "")
    .split("|")
    .map((c) => c.trim())
}

function isTable(lines: string[]) {
  return (
    lines.length >= 2 &&
    lines[0].includes("|") &&
    TABLE_DIVIDER.test(lines[1]) &&
    lines[1].includes("|")
  )
}

function renderTable(lines: string[], key: number) {
  const head = splitRow(lines[0])
  const body = lines.slice(2).map(splitRow)

  return (
    <div key={key} className="-mx-1 my-10 overflow-x-auto px-1">
      <table className="w-full min-w-[32rem] border-collapse text-left">
        <thead>
          <tr>
            {head.map((c, i) => (
              <th
                key={i}
                scope="col"
                className="border-b border-rule-2 pb-3 pr-5 font-display text-[15px] leading-tight font-semibold text-bone last:pr-0"
              >
                {inline(c, `th-${key}-${i}`)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, r) => (
            <tr key={r}>
              {head.map((_, c) => (
                <td
                  key={c}
                  className="border-b border-rule py-3.5 pr-5 align-top text-[15.5px] leading-snug text-bone-2 last:pr-0"
                >
                  {inline(row[c] ?? "", `td-${key}-${r}-${c}`)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/* ── Blocks ───────────────────────────────────────────────────────────────── */

function renderProse(text: string, offset: number, out: ReactNode[]) {
  text.split(/\n{2,}/).forEach((raw, n) => {
    const block = raw.trim()
    if (!block) return
    const b = offset + n

    if (block === "---") {
      out.push(<hr key={b} className="my-12 border-t border-rule-2" />)
      return
    }

    const figure = FIGURE.exec(block)
    if (figure) {
      const [, alt, src, caption] = figure
      out.push(
        <figure key={b} className="my-12 border border-rule">
          {/* Plain img, as elsewhere on the site: these are remote URLs at one
              fixed size, so next/image would mean an allow-list per host for
              no gain. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} loading="lazy" decoding="async" className="block w-full" />
          {caption ? (
            <figcaption className="copy-sm border-t border-rule px-5 py-3.5">{caption}</figcaption>
          ) : null}
        </figure>,
      )
      return
    }

    if (block.startsWith("### ")) {
      out.push(
        <h3
          key={b}
          className="mt-12 mb-4 font-display text-[1.35rem] leading-tight font-semibold tracking-[-0.02em] text-bone"
        >
          {inline(block.slice(4), `h3-${b}`)}
        </h3>,
      )
      return
    }

    if (block.startsWith("## ")) {
      const text = block.slice(3)
      out.push(
        <h2
          key={b}
          id={slugifyHeading(text)}
          className="mt-16 mb-5 scroll-mt-28 font-display text-[clamp(1.6rem,3vw,2.1rem)] leading-[1.12] font-semibold tracking-[-0.028em] text-bone"
        >
          {inline(text, `h2-${b}`)}
        </h2>,
      )
      return
    }

    if (block.startsWith("> ")) {
      out.push(
        <blockquote
          key={b}
          className="my-10 border-l-2 border-signal pl-6 font-display text-[1.2rem] leading-[1.45] font-medium text-bone"
        >
          {inline(block.replace(/^> ?/gm, ""), `q-${b}`)}
        </blockquote>,
      )
      return
    }

    const lines = block.split("\n")

    if (isTable(lines)) {
      out.push(renderTable(lines, b))
      return
    }

    if (lines.every((l) => /^\s*[-*] /.test(l))) {
      out.push(
        <ul key={b} className="my-7 space-y-3">
          {lines.map((l, i) => (
            <li key={i} className="flex gap-4">
              <span aria-hidden className="mt-[11px] h-[6px] w-[6px] shrink-0 bg-signal" />
              <span>{inline(l.replace(/^\s*[-*] /, ""), `ul-${b}-${i}`)}</span>
            </li>
          ))}
        </ul>,
      )
      return
    }

    if (lines.every((l) => /^\s*\d+\. /.test(l))) {
      out.push(
        <ol key={b} className="my-8 space-y-5">
          {lines.map((l, i) => (
            <li key={i} className="flex gap-5">
              <span className="mt-[3px] shrink-0 font-mono text-[13px] text-signal tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{inline(l.replace(/^\s*\d+\. /, ""), `ol-${b}-${i}`)}</span>
            </li>
          ))}
        </ol>,
      )
      return
    }

    out.push(
      <p key={b} className="my-6">
        {inline(block.replace(/\n/g, " "), `p-${b}`)}
      </p>,
    )
  })
}

export function renderMarkdown(md: string): ReactNode[] {
  const out: ReactNode[] = []

  // Keys have to stay unique across segments, and each prose segment can emit
  // several blocks, so the counter advances by more than one per segment.
  let key = 0

  for (const seg of segment(md)) {
    if (seg.kind === "prose") {
      renderProse(seg.text, key, out)
      key += seg.text.split(/\n{2,}/).length + 1
      continue
    }

    if (seg.lang === "diagram") {
      const spec = parseDiagram(seg.body)
      // A diagram that will not parse is dropped rather than shown as raw
      // JSON: a reader gains nothing from the spec, and the article still
      // reads without it.
      if (spec) out.push(<Diagram key={key} spec={spec} />)
      key++
      continue
    }

    out.push(
      <div key={key} className="-mx-1 my-10 overflow-x-auto px-1">
        <pre className="border border-rule p-5">
          {seg.lang ? (
            <span className="tag mb-3 block border-b border-rule pb-2.5">{seg.lang}</span>
          ) : null}
          <code className="block font-mono text-[13.5px] leading-[1.65] whitespace-pre text-bone-2">
            {seg.body}
          </code>
        </pre>
      </div>,
    )
    key++
  }

  return out
}

/** Headings, for the on-page contents rail. */
export function extractHeadings(md: string) {
  return segment(md)
    .filter((s) => s.kind === "prose")
    // Fenced blocks are excluded by the filter above, so a comment inside a
    // code sample can no longer put a phantom entry in the contents.
    .flatMap((s) => (s as { text: string }).text.split("\n"))
    .filter((l) => l.startsWith("## "))
    .map((l) => {
      const text = l.slice(3).trim()
      return { text, id: slugifyHeading(text) }
    })
}

export function slugifyHeading(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
}
