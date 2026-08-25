import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import Reveal from "@/components/ui/Reveal"
import CollectionSchema from "@/components/CollectionSchema"

/**
 * `/contact` returned 404, while every call to action on the site pointed at a
 * `mailto:` or the `#contact` anchor. That is a conversion leak on the one URL
 * people type directly, and it is the page a buyer looks for before deciding
 * whether a consultancy is real.
 *
 * No form, on purpose. A form here would need a backend, a spam defence and a
 * privacy notice covering the data it collects — for a mailto link that already
 * works. The email address is the honest primitive.
 */

const title = `Contact | ${profile.name}`
const description =
  "Talk to Core-X Solutions about a data, automation or revenue operations problem. What to include, and what happens after you write."

const mailto = `mailto:${profile.email}?subject=${encodeURIComponent("Project enquiry")}`

/** What makes a first email answerable rather than a round of questions. */
const helpful = [
  {
    label: "The systems involved",
    body: "Which CRM, which finance system, which ad platforms. Naming them is usually enough to tell whether the problem is one we have met before.",
  },
  {
    label: "The symptom, not the diagnosis",
    body: "“Two dashboards disagree about last month” is more useful than “we need a data warehouse”. The second may turn out to be wrong.",
  },
  {
    label: "Who would own it afterwards",
    body: "Even if the answer is nobody yet. It changes what is worth building more than any other single fact.",
  },
  {
    label: "Any deadline that is real",
    body: "A board meeting, an audit, a migration date. Real deadlines shape scope; invented ones only shape the quote.",
  },
]

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    url: `${profile.url}/contact`,
    siteName: profile.name,
    title,
    description,
    locale: "en_GB",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description },
}

export default function ContactPage() {
  return (
    <>
      <CollectionSchema
        type="ContactPage"
        path="/contact"
        name="Contact"
        description={description}
      />

      <Header />

      <main id="main">
        <section className="border-b border-rule pt-[124px] pb-16 md:pt-[148px] md:pb-20">
          <div className="shell">
            <Reveal>
              <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-rule pb-5">
                <p className="marker">Contact</p>
                <Link href="/" className="tag transition-colors hover:text-signal">
                  ← Home
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-10 max-w-4xl font-display text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.04] font-semibold tracking-[-0.035em]">
                Tell us which systems disagree.
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="lead prose-w mt-7">
                One email is enough to start. If the problem is not one we are useful for, we will
                say so and point you at what is — that answer costs you a day rather than a
                discovery phase.
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                <a href={mailto} className="btn-primary">
                  Email {profile.email}
                </a>
                <p className="tag">{profile.location}</p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell grid gap-14 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:gap-20">
            <div className="min-w-0">
              <h2 className="font-display text-[clamp(1.6rem,3vw,2.1rem)] leading-[1.12] font-semibold tracking-[-0.028em] text-bone">
                What to put in the first email
              </h2>

              <p className="prose-w mt-6 text-[16.5px] leading-[1.68] text-bone-2">
                None of this is required. It just turns the first reply into an answer rather than
                a list of questions.
              </p>

              <dl className="mt-9 border-t border-rule-2">
                {helpful.map((item) => (
                  <div
                    key={item.label}
                    className="grid gap-1.5 border-b border-rule py-5 sm:grid-cols-[200px_minmax(0,1fr)] sm:gap-8"
                  >
                    <dt className="tag sm:pt-1">{item.label}</dt>
                    <dd className="text-[16.5px] leading-[1.6] text-bone-2">{item.body}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="min-w-0 lg:sticky lg:top-24 lg:self-start">
              <h2 className="tag border-b border-rule-2 pb-3">What happens next</h2>
              <ol className="mt-2">
                {[
                  ["A reply", "Usually within one working day."],
                  ["A short call", "Thirty minutes, to work out whether this is a problem we are the right people for."],
                  ["A written scope", "What would be built, what it would cost, and the check that decides whether it worked."],
                ].map(([label, body], i) => (
                  <li key={label} className="flex gap-5 border-b border-rule py-4">
                    <span className="mt-[3px] shrink-0 font-mono text-[13px] text-signal tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="block font-display text-[16px] font-semibold text-bone">
                        {label}
                      </span>
                      <span className="copy-sm mt-1 block">{body}</span>
                    </span>
                  </li>
                ))}
              </ol>

              <p className="copy-sm mt-7">
                Not ready to write? The{" "}
                <Link
                  href="/services"
                  className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                >
                  services
                </Link>{" "}
                pages describe the work in detail, and the{" "}
                <Link
                  href="/blog"
                  className="text-signal underline decoration-rule-2 underline-offset-[5px] transition-colors hover:decoration-signal"
                >
                  writing
                </Link>{" "}
                shows how it is reasoned about.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
