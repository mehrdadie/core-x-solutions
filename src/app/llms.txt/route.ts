import { profile, about, capabilities, bestFit } from "@/content/profile"
import { getPosts } from "@/lib/posts"

/** Matches the blog's cadence so new posts appear without a redeploy. */
export const revalidate = 600

/**
 * /llms.txt — the llmstxt.org convention: a plain-markdown summary of what this
 * site is, for language models that would otherwise have to infer it from
 * rendered HTML. Cheap to serve, and this practice is explicitly trying to be
 * legible to AI retrieval.
 */
export async function GET() {
  const posts = await getPosts()

  const body = [
    `# ${profile.name}`,
    "",
    `> ${profile.role}. ${about.paragraphs[0]}`,
    "",
    "## What we do",
    "",
    ...capabilities.map((c) => `- **${c.title}** — ${c.description} ${c.items.join(", ")}.`),
    "",
    "## Who we work with",
    "",
    bestFit.intro,
    "",
    "## Pages",
    "",
    `- [Home](${profile.url}) — positioning, capabilities and approach`,
    `- [Case studies](${profile.url}/case-studies) — engagements by outcome and sector`,
    `- [Writing](${profile.url}/blog) — notes on connecting business systems`,
    "",
    "## Writing",
    "",
    ...(posts.length
      ? posts.map((p) => {
          // A cross-published copy should point a model at the original.
          const url = p.canonical_url ?? `${profile.url}/blog/${p.slug}`
          return `- [${p.title}](${url}) — ${p.excerpt}`
        })
      : ["- Nothing published yet."]),
    "",
    "## Contact",
    "",
    `- ${profile.email}`,
    "",
  ].join("\n")

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=0, must-revalidate",
    },
  })
}
