import Link from "next/link"
import { finalCta, hero, profile } from "@/content/profile"
import Reveal from "@/components/ui/Reveal"

/**
 * The close. Left-aligned and oversized rather than the centred hero-echo every
 * landing page ends on, with the four openers set as a list you can click into
 * — the email writes its own subject line.
 *
 * The primary button goes to /contact rather than opening a blank compose
 * window. A mailto with the subject "Project enquiry" asks the reader to do the
 * qualifying; /contact tells them what to put in the first email and what
 * happens after it, which is the part that makes a serious buyer reply. The
 * four symptom openers stay as mailto links — those already carry their subject.
 */
export default function FinalCta() {
  return (
    <section id="contact" className="section border-t border-rule bg-pit">
      <div className="shell grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-20">
        <Reveal>
          <div>
            <h2 className="font-display text-[clamp(2.5rem,6.4vw,4.6rem)] leading-[0.98] font-semibold tracking-[-0.038em]">
              {finalCta.headline}
            </h2>
            <p className="mt-4 max-w-lg font-display text-[clamp(1.4rem,2.6vw,2rem)] leading-[1.12] font-medium tracking-[-0.03em] text-bone-3 [text-wrap:pretty]">
              {finalCta.sub}
            </p>

            <p className="lead prose-w mt-8">{finalCta.body}</p>

            <p className="prose-w mt-5 text-[15.5px] leading-[1.65] text-bone-3">{finalCta.shape}</p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link href="/contact" className="btn btn-primary">
                {finalCta.primary}
              </Link>
              {profile.linkedin ? (
                <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-secondary"
              >
                LinkedIn
              </a>
              ) : null}
            </div>

            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-block font-mono text-[14px] tracking-[0.04em] text-bone-2 underline decoration-rule-2 underline-offset-[6px] transition-colors hover:text-signal"
            >
              {profile.email}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div>
            <p className="tag border-b border-rule-2 pb-3">Start with whichever is true</p>
            <ul>
              {finalCta.prompts.map((prompt, i) => (
                <li key={prompt}>
                  <a
                    href={`mailto:${profile.email}?subject=${encodeURIComponent(prompt)}`}
                    className="group flex items-baseline gap-5 border-b border-rule py-5 text-[16.5px] text-bone-2 transition-colors hover:text-bone"
                  >
                    <span className="font-mono text-[11px] tracking-[0.1em] text-bone-3 transition-colors group-hover:text-signal">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>&ldquo;{prompt}&rdquo;</span>
                    <span
                      aria-hidden
                      className="ml-auto font-mono text-[14px] text-bone-3 opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <p className="tag mt-8 flex items-center gap-3">
              <span aria-hidden className="h-1.5 w-1.5 bg-verdigris" />
              {hero.trust}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
