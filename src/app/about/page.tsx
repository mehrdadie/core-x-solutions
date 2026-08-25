import type { Metadata } from "next"
import Link from "next/link"
import { about, profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import Reveal from "@/components/ui/Reveal"
import CollectionSchema from "@/components/CollectionSchema"

/**
 * `/about` existed only as an anchor on the home page, so the nav's "About"
 * link resolved but `/about` itself returned 404 — the URL anyone types, and
 * the one Google looks for when working out who is behind a site.
 *
 * Deliberately company-voiced and deliberately thin on biography. The strongest
 * signal this page could carry is a named person with verifiable credentials,
 * and inventing one would repeat the mistake already recorded against the
 * testimonials and the case studies in CLAUDE.md. Everything here is either
 * true or absent.
 */

const title = `About | ${profile.name}`
const description =
  "A data, automation and revenue operations consultancy. What we work on, how engagements run, and the problems we are genuinely useful for."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    type: "profile",
    url: `${profile.url}/about`,
    siteName: profile.name,
    title,
    description,
    locale: "en_GB",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description },
}

/** What the practice will not take on. Saying so is a trust signal in itself. */
const boundaries = [
  "One-off dashboards with no owner afterwards. The report outlives the engagement or it was not worth building.",
  "Automating a process that is still changing weekly. That produces an automation that is wrong weekly.",
  "Work where nobody internally will hold the result. Without an owner you get a more sophisticated version of the same problem.",
]

export default function AboutPage() {
  return (
    <>
      <CollectionSchema
        type="AboutPage"
        path="/about"
        name="About"
        description={description}
      />

      <Header />

      <main id="main">
        <section className="border-b border-rule pt-[124px] pb-16 md:pt-[148px] md:pb-20">
          <div className="shell">
            <Reveal>
              <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-rule pb-5">
                <p className="marker">About</p>
                <Link href="/" className="tag transition-colors hover:text-signal">
                  ← Home
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-10 max-w-4xl font-display text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.04] font-semibold tracking-[-0.035em]">
                {about.title}
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="prose-w mt-8 space-y-5">
                {about.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)} className="lead">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell grid gap-14 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:gap-20">
            <div className="min-w-0">
              <h2 className="font-display text-[clamp(1.6rem,3vw,2.1rem)] leading-[1.12] font-semibold tracking-[-0.028em] text-bone">
                How the work usually goes
              </h2>

              <div className="prose-w mt-7 space-y-5 text-[16.5px] leading-[1.68] text-bone-2">
                <p>
                  Most engagements start with the same symptom: two systems report a different
                  number for the same thing, and nobody can say which is right. The first week is
                  rarely spent building. It is spent drawing the map nobody has drawn — every
                  system holding a record, which fields each one owns, and the places where two
                  systems both think they own the same field.
                </p>
                <p>
                  That map is usually the deliverable people did not know they were buying. The
                  connector work that follows is real, and it is the part that is learnable. The
                  expensive part is deciding which system wins, and getting the people who
                  disagree about a definition to commit to one.
                </p>
                <p>
                  Work is scoped to an outcome rather than a number of hours — a condition you can
                  write a query against, so the conversation at the end of the project is short.
                  An engagement is finished when someone on your side has changed the thing
                  unaided.
                </p>
              </div>

              <h2 className="mt-14 font-display text-[clamp(1.6rem,3vw,2.1rem)] leading-[1.12] font-semibold tracking-[-0.028em] text-bone">
                What we turn down
              </h2>

              <ul className="mt-7 max-w-[68ch] space-y-4">
                {boundaries.map((b) => (
                  <li key={b.slice(0, 20)} className="flex gap-4">
                    <span aria-hidden className="mt-[11px] h-[6px] w-[6px] shrink-0 bg-signal" />
                    <span className="text-[16.5px] leading-[1.68] text-bone-2">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="min-w-0 lg:sticky lg:top-24 lg:self-start">
              <dl className="border-t border-rule-2">
                <div className="grid gap-1.5 border-b border-rule py-5">
                  <dt className="tag">Practice</dt>
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
                  <div key={fact.label} className="grid gap-1.5 border-b border-rule py-5">
                    <dt className="tag">{fact.label}</dt>
                    <dd className="text-[16.5px] leading-[1.6] text-bone-2">{fact.value}</dd>
                  </div>
                ))}

                <div className="grid gap-1.5 border-b border-rule py-5">
                  <dt className="tag">Contact</dt>
                  <dd className="text-[16.5px] leading-[1.6]">
                    <Link
                      href="/contact"
                      className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                    >
                      {profile.email}
                    </Link>
                  </dd>
                </div>
              </dl>

              <p className="copy-sm mt-6">
                The <Link href="/case-studies" className="text-signal underline decoration-rule-2 underline-offset-[5px]">case studies</Link>{" "}
                show the shape of past engagements, and the{" "}
                <Link href="/blog" className="text-signal underline decoration-rule-2 underline-offset-[5px]">writing</Link>{" "}
                is the clearest sample of how the work is actually reasoned about.
              </p>
            </div>
          </div>
        </section>

        <FinalCta />
      </main>

      <Footer />
    </>
  )
}
