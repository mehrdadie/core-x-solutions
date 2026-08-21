import type { Metadata } from "next"
import Link from "next/link"
import { caseStudies, caseStudiesPage, profile } from "@/content/profile"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import CaseStudyArticle from "@/components/sections/CaseStudyArticle"
import Reveal from "@/components/ui/Reveal"

const title = `Case studies | ${profile.name}`

export const metadata: Metadata = {
  title,
  description: caseStudiesPage.metaDescription,
  alternates: { canonical: "/case-studies" },
  openGraph: {
    type: "article",
    url: `${profile.url}/case-studies`,
    siteName: profile.name,
    title,
    description: caseStudiesPage.metaDescription,
    locale: "en_GB",
  },
  twitter: { card: "summary_large_image", title, description: caseStudiesPage.metaDescription },
}

export default function CaseStudiesPage() {
  return (
    <>
      <Header />

      <main id="main">
        {/* Masthead stays on the dark ground; the studies themselves are the
            printed sheet, same as the section on the home page. */}
        <section className="border-b border-rule pt-[124px] pb-16 md:pt-[148px] md:pb-20">
          <div className="shell">
            <Reveal>
              <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-rule pb-5">
                <p className="marker">{caseStudiesPage.eyebrow}</p>
                <Link
                  href="/"
                  className="tag transition-colors hover:text-signal"
                >
                  ← Back to the site
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-10 font-display text-[clamp(2.3rem,5.6vw,4.2rem)] leading-[1.02] font-semibold tracking-[-0.035em]">
                {caseStudiesPage.title}
              </h1>
            </Reveal>

            <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-20">
              <Reveal delay={0.1}>
                <div>
                  <p className="lead">{caseStudiesPage.intro}</p>
                  <p className="mt-6 border-l-2 border-signal pl-5 text-[15.5px] leading-[1.6] text-bone-3">
                    {caseStudiesPage.disclosure}
                  </p>
                </div>
              </Reveal>

              {/* Contents. Also the fastest way to see the range in one screen. */}
              <Reveal delay={0.14}>
                <nav aria-label="Case studies index">
                  <p className="tag border-b border-rule-2 pb-3">{caseStudiesPage.indexLabel}</p>
                  <ol>
                    {caseStudies.map((study, i) => (
                      <li key={study.id}>
                        <a
                          href={`#${study.id}`}
                          className="group flex items-baseline gap-4 border-b border-rule py-3.5 transition-colors hover:text-signal"
                        >
                          <span className="font-mono text-[12px] text-bone-3 tabular-nums transition-colors group-hover:text-signal">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="text-[16px] text-bone transition-colors group-hover:text-signal">
                            {study.title}
                          </span>
                          <span className="tag ml-auto shrink-0">{study.outcome}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="on-paper section">
          <div className="shell space-y-24 md:space-y-28">
            {caseStudies.map((study, i) => (
              <Reveal key={study.id} delay={0.03}>
                <CaseStudyArticle study={study} index={i} />
              </Reveal>
            ))}
          </div>
        </section>

        <FinalCta />
      </main>

      <Footer />
    </>
  )
}
