import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import { formatPostDate, getPosts } from "@/lib/posts"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import Reveal from "@/components/ui/Reveal"

/** Rebuilt at most every ten minutes; new posts appear without a redeploy. */
export const revalidate = 600

const title = `Writing | ${profile.name}`
const description =
  "Notes on connecting business systems — reporting, CRM data quality, revenue attribution and the automation that removes the manual repair work in between."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: `${profile.url}/blog`,
    siteName: profile.name,
    title,
    description,
    locale: "en_GB",
  },
  twitter: { card: "summary_large_image", title, description },
}

export default async function BlogIndex() {
  const posts = await getPosts()

  return (
    <>
      <Header />

      <main id="main">
        <section className="border-b border-rule pt-[124px] pb-16 md:pt-[148px] md:pb-20">
          <div className="shell">
            <Reveal>
              <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-rule pb-5">
                <p className="marker">Writing</p>
                <p className="tag">
                  {posts.length} {posts.length === 1 ? "piece" : "pieces"}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-10 max-w-4xl font-display text-[clamp(2.3rem,5.6vw,4.2rem)] leading-[1.02] font-semibold tracking-[-0.035em]">
                Notes from between the systems.
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="lead prose-w mt-8">{description}</p>
            </Reveal>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            {posts.length === 0 ? (
              <p className="copy border-l-2 border-signal pl-6">
                Nothing published yet. Posts appear here as soon as they are marked
                published in the database.
              </p>
            ) : (
              <ol className="border-t border-rule-2">
                {posts.map((post, i) => (
                  <Reveal as="li" key={post.slug} delay={i * 0.05}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group grid gap-x-12 gap-y-5 border-b border-rule py-10 md:grid-cols-[minmax(0,0.28fr)_minmax(0,1fr)] md:py-12"
                    >
                      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 md:block">
                        <p className="tag text-signal">{post.category}</p>
                        <p className="tag md:mt-3">{formatPostDate(post.published_at)}</p>
                        {post.reading_minutes ? (
                          <p className="tag md:mt-1.5">{post.reading_minutes} min read</p>
                        ) : null}
                      </div>

                      <div>
                        <h2 className="font-display text-[clamp(1.5rem,3vw,2.15rem)] leading-[1.12] font-semibold tracking-[-0.028em] text-bone transition-colors group-hover:text-signal">
                          {post.title}
                        </h2>
                        {post.dek ? <p className="copy mt-4 max-w-2xl">{post.dek}</p> : null}

                        <p className="tag mt-6 flex items-center gap-2.5 text-signal">
                          Read
                          <span
                            aria-hidden
                            className="transition-transform group-hover:translate-x-1"
                          >
                            →
                          </span>
                        </p>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </ol>
            )}
          </div>
        </section>

        <FinalCta />
      </main>

      <Footer />
    </>
  )
}
