import type { ReactNode } from "react"
import Link from "next/link"
import { legalUpdatedLabel } from "@/content/legal"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import Reveal from "@/components/ui/Reveal"
import CollectionSchema from "@/components/CollectionSchema"

/**
 * Shared shell for /privacy and /terms. Same masthead-then-paper structure as
 * the rest of the site, so the legal pages do not look like they were bolted on
 * from a generator — which, for a trust signal, rather defeats the point.
 */
export default function LegalDocument({
  path,
  name,
  description,
  intro,
  children,
}: {
  path: string
  name: string
  description: string
  intro: string
  children: ReactNode
}) {
  return (
    <>
      <CollectionSchema type="WebPage" path={path} name={name} description={description} />

      <Header />

      <main id="main">
        <section className="border-b border-rule pt-[124px] pb-14 md:pt-[148px] md:pb-16">
          <div className="shell">
            <Reveal>
              <div className="tag flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-rule pb-5">
                <Link href="/" className="transition-colors hover:text-signal">
                  ← Home
                </Link>
                <span aria-hidden>/</span>
                <span className="text-signal">{name}</span>
                <span className="ml-auto">Updated {legalUpdatedLabel}</span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-10 max-w-4xl font-display text-[clamp(2.2rem,5vw,3.4rem)] leading-[1.04] font-semibold tracking-[-0.035em]">
                {name}
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="lead prose-w mt-7">{intro}</p>
            </Reveal>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell">
            <div className="max-w-[68ch] text-[16.5px] leading-[1.72] text-bone-2">{children}</div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

/** A numbered clause. Kept here so both documents set them identically. */
export function Clause({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-12 first:mt-0">
      <h2
        id={title.toLowerCase().replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-")}
        className="mb-4 scroll-mt-28 font-display text-[1.35rem] leading-tight font-semibold tracking-[-0.02em] text-bone"
      >
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  )
}
