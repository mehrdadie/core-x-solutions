import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { profile } from "@/content/profile"
import { formatPostDate, getPost, getPosts } from "@/lib/posts"
import { extractHeadings, renderMarkdown } from "@/lib/markdown"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FinalCta from "@/components/sections/FinalCta"
import Reveal from "@/components/ui/Reveal"

export const revalidate = 600
/** Slugs published after the last build still render, then get cached. */
export const dynamicParams = true

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

type Params = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return { title: `Not found | ${profile.name}` }

  const url = post.canonical_url ?? `${profile.url}/blog/${post.slug}`
  const description = post.seo_description ?? post.excerpt
  const image = post.og_image_url ?? post.cover_image_url ?? undefined

  return {
    title: post.seo_title ?? post.title,
    description,
    keywords: post.keywords.length ? post.keywords : undefined,
    authors: [{ name: post.author_name, url: post.author_url ?? undefined }],
    alternates: { canonical: url },
    robots: {
      index: post.robots_index,
      follow: post.robots_follow,
      googleBot: {
        index: post.robots_index,
        follow: post.robots_follow,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "article",
      url,
      siteName: profile.name,
      locale: "en_GB",
      title: post.og_title ?? post.seo_title ?? post.title,
      description: post.og_description ?? description,
      publishedTime: post.published_at ?? undefined,
      modifiedTime: post.updated_at,
      authors: [post.author_url ?? profile.url],
      tags: post.tags,
      images: image
        ? [
            {
              url: image,
              width: post.og_image_width ?? 1200,
              height: post.og_image_height ?? 630,
              alt: post.og_image_alt ?? post.cover_image_alt ?? post.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: (post.twitter_card as "summary_large_image") ?? "summary_large_image",
      title: post.twitter_title ?? post.title,
      description: post.twitter_description ?? description,
      images: post.twitter_image_url ? [post.twitter_image_url] : image ? [image] : undefined,
    },
  }
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()

  const url = post.canonical_url ?? `${profile.url}/blog/${post.slug}`
  const headings = extractHeadings(post.body_md)
  const image = post.og_image_url ?? post.cover_image_url

  const graph: Record<string, unknown>[] = [
    {
      "@type": post.schema_type || "BlogPosting",
      "@id": `${url}#article`,
      headline: post.seo_title ?? post.title,
      description: post.seo_description ?? post.excerpt,
      url,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      datePublished: post.published_at,
      dateModified: post.updated_at,
      inLanguage: "en-GB",
      keywords: post.keywords.join(", "),
      articleSection: post.category ?? undefined,
      wordCount: post.body_md.split(/\s+/).length,
      author: {
        "@type": "Person",
        name: post.author_name,
        url: post.author_url ?? profile.url,
      },
      publisher: { "@type": "Person", name: profile.name, url: profile.url },
      ...(image
        ? {
            image: {
              "@type": "ImageObject",
              url: image,
              width: post.og_image_width ?? 1200,
              height: post.og_image_height ?? 630,
            },
          }
        : {}),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: profile.url },
        { "@type": "ListItem", position: 2, name: "Writing", item: `${profile.url}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
  ]

  if (post.faq.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: post.faq.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    })
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
        }}
      />

      <Header />

      <main id="main">
        {/* Masthead on the dark ground; the piece itself is set on paper, which
            is both consistent with the case studies and easier to read long. */}
        <section className="border-b border-rule pt-[124px] pb-14 md:pt-[148px] md:pb-16">
          <div className="shell">
            <Reveal>
              <div className="tag flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-rule pb-5">
                <Link href="/blog" className="transition-colors hover:text-signal">
                  ← Writing
                </Link>
                <span aria-hidden>/</span>
                <span className="text-signal">{post.category}</span>
                <span aria-hidden>/</span>
                <time dateTime={post.published_at ?? undefined}>
                  {formatPostDate(post.published_at)}
                </time>
                {post.reading_minutes ? (
                  <span className="ml-auto">{post.reading_minutes} min read</span>
                ) : null}
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-10 max-w-5xl font-display text-[clamp(2.2rem,5.4vw,4rem)] leading-[1.03] font-semibold tracking-[-0.035em]">
                {post.title}
              </h1>
            </Reveal>

            {post.dek ? (
              <Reveal delay={0.1}>
                <p className="lead prose-w mt-7">{post.dek}</p>
              </Reveal>
            ) : null}

            <Reveal delay={0.14}>
              <p className="tag mt-9 flex items-center gap-3">
                <span aria-hidden className="h-1.5 w-1.5 bg-signal" />
                {post.author_name}
              </p>
            </Reveal>
          </div>
        </section>

        <article className="on-paper section">
          <div className="shell grid gap-14 lg:grid-cols-[minmax(0,0.22fr)_minmax(0,1fr)] lg:gap-16">
            {headings.length > 1 ? (
              <nav aria-label="On this page" className="lg:sticky lg:top-28 lg:self-start">
                <p className="tag border-b border-rule-2 pb-3">Contents</p>
                <ol>
                  {headings.map((h, i) => (
                    <li key={h.id}>
                      <a
                        href={`#${h.id}`}
                        className="flex gap-3 border-b border-rule py-3 text-[15px] leading-snug transition-colors hover:text-signal"
                      >
                        <span className="font-mono text-[12px] text-bone-3 tabular-nums">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            ) : (
              <div aria-hidden />
            )}

            <div>
              {post.cover_image_url ? (
                <figure className="mb-14 max-w-[76ch] border border-rule">
                  {/* Plain img: a remote Supabase URL at one fixed size, so
                      next/image would need the host allow-listed for no gain. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.cover_image_url}
                    alt={post.cover_image_alt ?? ""}
                    width={1600}
                    height={720}
                    className="block w-full"
                  />
                  <figcaption className="tag border-t border-rule px-4 py-3">
                    The same month, counted three ways — and the difference, named
                  </figcaption>
                </figure>
              ) : null}

              <div className="max-w-[68ch] text-[18px] leading-[1.72] text-bone-2">
                {renderMarkdown(post.body_md)}
              </div>

              {post.faq.length > 0 ? (
                <section aria-labelledby="faq-heading" className="mt-20 max-w-[68ch]">
                  <h2
                    id="faq-heading"
                    className="font-display text-[clamp(1.6rem,3vw,2.1rem)] leading-[1.12] font-semibold tracking-[-0.028em] text-bone"
                  >
                    Common questions
                  </h2>
                  <dl className="mt-8 border-t border-rule-2">
                    {post.faq.map((f) => (
                      <div key={f.question} className="border-b border-rule py-6">
                        <dt className="font-display text-[17.5px] leading-snug font-semibold text-bone">
                          {f.question}
                        </dt>
                        <dd className="mt-3 text-[16.5px] leading-[1.68] text-bone-2">
                          {f.answer}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </section>
              ) : null}

              {post.tags.length > 0 ? (
                <ul className="mt-12 flex max-w-[68ch] flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <li key={tag} className="chip">
                      {tag}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </article>

        <FinalCta />
      </main>

      <Footer />
    </>
  )
}
