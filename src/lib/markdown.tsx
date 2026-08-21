import type { ReactNode } from "react"

/**
 * A very small markdown renderer that returns React elements, never HTML.
 *
 * Post bodies come from the database, so rendering them through
 * dangerouslySetInnerHTML would make every author a potential script vector.
 * Building nodes directly means the worst a malformed post can do is look odd.
 *
 * Supports what long-form posts actually need: h2/h3, paragraphs, bold, italic,
 * inline code, links, ordered and unordered lists, blockquotes and rules.
 */

const INLINE = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)\s]+\))/g

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

      const link = /^\[([^\]]+)\]\(([^)\s]+)\)$/.exec(part)
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

export function renderMarkdown(md: string): ReactNode[] {
  const blocks = md.replace(/\r\n/g, "\n").split(/\n{2,}/)
  const out: ReactNode[] = []

  blocks.forEach((raw, b) => {
    const block = raw.trim()
    if (!block) return

    if (block === "---") {
      out.push(<hr key={b} className="my-12 border-t border-rule-2" />)
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

  return out
}

/** Headings, for the on-page contents rail. */
export function extractHeadings(md: string) {
  return md
    .split("\n")
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
