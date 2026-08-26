import { profile } from "@/content/profile"
import Reveal from "@/components/ui/Reveal"

export type Faq = { q: string; a: string }

/**
 * The questions block at the foot of a service page, plus the `FAQPage` node
 * that goes with it.
 *
 * Two reasons this exists rather than each page rolling its own. The blog has
 * emitted FAQ markup since it was built and the service pages never did, so the
 * pages carrying the commercial intent were the ones search engines could read
 * least — and this site's `robots.ts` deliberately admits every AI crawler,
 * which makes a machine-readable answer to a question somebody actually typed
 * the cheapest citation available. And the question wording matters: these are
 * phrasings returned by live search sources, not invented headings, so keeping
 * the render and the markup in one place stops the two drifting apart.
 *
 * The answers are the site's own voice, not a summary of the page above them.
 * An FAQ that restates the section headings is markup with nothing behind it.
 */
export default function ServiceFaq({
  faqs,
  path,
  heading = "Questions we get asked",
}: {
  faqs: readonly Faq[]
  /** Route path, so the node has a stable @id under the page it belongs to. */
  path: string
  heading?: string
}) {
  if (faqs.length === 0) return null

  const url = `${profile.url}${path}`

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Reveal delay={0.05}>
        <article className="grid gap-x-14 gap-y-6 border-b border-rule py-12 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] md:py-16">
          <h2 className="font-display text-[clamp(1.5rem,2.9vw,2.05rem)] leading-none font-semibold tracking-[-0.03em] text-bone md:pt-1">
            {heading}
          </h2>

          <div className="min-w-0">
            <dl>
              {faqs.map((f) => (
                <div key={f.q} className="border-b border-rule py-5 last:border-b-0">
                  <dt className="font-display text-[17px] font-semibold text-bone">{f.q}</dt>
                  <dd className="copy-sm mt-2">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </article>
      </Reveal>
    </>
  )
}
