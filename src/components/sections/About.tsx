import Image from "next/image"
import { about, principal, profile } from "@/content/profile"
import Reveal from "@/components/ui/Reveal"

/**
 * The slot used to carry a stock photograph of seven people who do not work
 * here. That was flagged as unshippable while the site was anonymous; naming
 * the principal on /about settled it, because a visitor reading "the work is
 * done by Mehrdad Fashami" and then meeting a group shot draws exactly the
 * wrong conclusion about which of them he is.
 *
 * The mark goes here instead until there is a real photograph. `principal.photo`
 * is the switch: set it and this renders the person, leave it null and the page
 * makes no claim about who anybody is. No stock imagery either way.
 */
function CompanyImage() {
  if (principal.photo) {
    return (
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-paper-2">
        <Image
          src={principal.photo}
          alt={principal.photoAlt ?? principal.name}
          fill
          sizes="(min-width: 1024px) 420px, 100vw"
          className="object-cover"
        />
      </div>
    )
  }

  return (
    <div className="flex aspect-[5/4] w-full items-center justify-center border border-rule bg-ground-2">
      <img
        src="/core-x-logo.svg"
        alt=""
        aria-hidden
        width={654}
        height={100}
        className="w-[62%] max-w-[260px] opacity-70"
      />
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
              <CompanyImage />
              <p className="tag mt-4">{profile.location}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
