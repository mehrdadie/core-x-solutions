import { about, profile } from "@/content/profile"
import Reveal from "@/components/ui/Reveal"

/**
 * A consultancy has no face to put here, so the slot carries the mark instead.
 * Same 4:5 frame the layout already reserves, so nothing shifts.
 */
function Mark() {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden bg-paper-2 text-graphite">
      <div className="absolute inset-0 flex flex-col justify-between p-5">
        <span className="tag text-graphite/55">{profile.shortRole}</span>
        <p className="font-display text-[4.5rem] leading-[0.8] font-semibold tracking-[-0.05em] text-graphite/80">
          CX
        </p>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="section border-t border-rule">
      <div className="shell">
        <Reveal>
          <h2 className="display-2 max-w-2xl">{about.title}</h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)] lg:gap-20">
          <Reveal delay={0.05}>
            <div>
              <div className="prose-w space-y-5 border-t border-rule-2 pt-8">
                {about.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)} className="text-[16.5px] leading-[1.68] text-bone-2">
                    {p}
                  </p>
                ))}
              </div>

              {/* The practice areas fold into the fact table rather than sitting
                  above it as a row of chips — one less templated component, and
                  it reads as a line instead of eight little boxes. */}
              <dl className="mt-11 border-t border-rule">
                <div className="grid gap-1.5 border-b border-rule py-5 sm:grid-cols-[168px_minmax(0,1fr)] sm:gap-8">
                  <dt className="tag sm:pt-1">Practice</dt>
                  <dd className="text-[16.5px] leading-[1.6] text-bone-2">
                    {about.tags.map((tag, i) => (
                      <span key={tag}>
                        {i > 0 ? (
                          <span aria-hidden className="mx-2 text-signal">
                            ·
                          </span>
                        ) : null}
                        {tag}
                      </span>
                    ))}
                  </dd>
                </div>

                {about.facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="grid gap-1.5 border-b border-rule py-5 sm:grid-cols-[168px_minmax(0,1fr)] sm:gap-8"
                  >
                    <dt className="tag sm:pt-1">{fact.label}</dt>
                    <dd className="text-[16.5px] leading-[1.6] text-bone-2">{fact.value}</dd>
                  </div>
                ))}
              </dl>

              {profile.linkedin ? (
                <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-8 inline-flex items-center gap-2 font-mono text-[13px] tracking-[0.08em] text-signal uppercase transition-colors hover:text-signal-hi"
              >
                LinkedIn ↗
              </a>
              ) : null}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="lg:sticky lg:top-24">
              <Mark />
              <p className="tag mt-4">{profile.location}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
