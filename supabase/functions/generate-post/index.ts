/**
 * Writes one blog post per invocation.
 *
 * Claim a topic → write it → validate what came back → insert it as a draft →
 * stamp the topic. Nothing here loops: pg_cron calls this every thirty
 * minutes and one call does one article. That keeps the failure blast radius
 * at one post, and means a run that dies mid-flight leaves exactly one topic
 * to be released by the reaper in claim_next_topic().
 *
 * The post lands as a draft. It is invisible to the site and to the sitemap
 * until someone flips its status, and the IndexNow triggers on public.posts
 * are gated on `published`, so nothing is announced to a search engine that a
 * human has not read first.
 */

import Anthropic from "npm:@anthropic-ai/sdk@^0.120.0"
import { createClient } from "npm:@supabase/supabase-js@^2.112.3"
import {
  buildUserPrompt,
  POST_SCHEMA,
  SERVICE_PAGES,
  SYSTEM_PROMPT,
  type SiteContext,
  type Topic,
} from "./prompt.ts"

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!
const SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
const ANTHROPIC_API_KEY = Deno.env.get("ANTHROPIC_API_KEY")

const MODEL = Deno.env.get("GENERATOR_MODEL") ?? "claude-opus-5"
const EFFORT = Deno.env.get("GENERATOR_EFFORT") ?? "high"
/** 'draft' keeps a human in the loop. Set to 'published' to skip review. */
const POST_STATUS = Deno.env.get("GENERATOR_POST_STATUS") ?? "draft"
/** Optional second credential, if you would rather not hand out the service key. */
const GENERATOR_SECRET = Deno.env.get("GENERATOR_SECRET")

/* The byline. The practice keeps its company voice, but the writing carries
   the name of the person whose reasoning it is — the blog index shows it, and
   the Person node in the site's structured data points back at /about. */
const AUTHOR = "Mehrdad Fashami"
const AUTHOR_URL = "https://core-x.solutions/about"

/* ── Validation ───────────────────────────────────────────────────────────── */

type Draft = {
  slug: string
  title: string
  seo_title: string
  seo_description: string
  dek: string
  excerpt: string
  body_md: string
  category: string
  tags: string[]
  keywords: string[]
  reading_minutes: number
  faq: { question: string; answer: string }[]
}

const DIAGRAM_TYPES = new Set(["flow", "compare", "bars", "matrix"])

/**
 * A malformed diagram would render as nothing on the page, which reads as a
 * gap in the argument. Dropping the fence entirely is the smaller wound, and
 * the count is recorded on the run so a model that keeps producing them is
 * visible rather than silently degrading the blog.
 */
function stripBadDiagrams(md: string): { md: string; dropped: number } {
  let dropped = 0

  const out = md.replace(/```diagram\n([\s\S]*?)\n```/g, (whole, body: string) => {
    try {
      const spec = JSON.parse(body)
      if (!DIAGRAM_TYPES.has(spec?.type)) throw new Error("unknown type")

      if (spec.type === "matrix" && spec.quadrants?.length !== 4) throw new Error("quadrants")
      if (spec.type === "compare") {
        const width = spec.columns?.length
        if (!width || !spec.rows?.every((r: { cells: unknown[] }) => r.cells?.length === width)) {
          throw new Error("ragged rows")
        }
      }
      if (spec.type === "flow" && !spec.steps?.length) throw new Error("no steps")
      if (spec.type === "bars" && !spec.bars?.every((b: { value: unknown }) => typeof b.value === "number")) {
        throw new Error("non-numeric bar")
      }
      return whole
    } catch {
      dropped++
      return ""
    }
  })

  return { md: out, dropped }
}

/**
 * Internal links are checked against the pages that actually exist. An
 * invented path is a 404 the reader hits and a dead link search engines see,
 * so the anchor text survives and the link does not.
 */
function pruneDeadLinks(md: string, live: Set<string>): { md: string; dropped: number } {
  let dropped = 0

  const out = md.replace(
    /\[([^\]]+)\]\((\/[^)\s]*)\)/g,
    (whole, label: string, href: string) => {
      const path = href.split("#")[0].replace(/\/$/, "")
      if (live.has(path)) return whole
      dropped++
      return label
    },
  )

  return { md: out, dropped }
}

/** There is no image host wired to this pipeline, so any figure is invented. */
function stripImages(md: string): { md: string; dropped: number } {
  let dropped = 0
  const out = md.replace(/^!\[[^\]]*\]\([^)]*\)[ \t]*$/gm, () => {
    dropped++
    return ""
  })
  return { md: out, dropped }
}

function tidy(md: string) {
  return md.replace(/\n{3,}/g, "\n\n").trim()
}

/** Free the slug if the writer picked one already taken. */
async function uniqueSlug(
  db: ReturnType<typeof createClient>,
  slug: string,
): Promise<string> {
  for (let n = 0; n < 12; n++) {
    const candidate = n === 0 ? slug : `${slug}-${n + 1}`
    const { data, error } = await db.from("posts").select("slug").eq("slug", candidate).maybeSingle()
    if (error) throw new Error(`slug check failed: ${error.message}`)
    if (!data) return candidate
  }
  throw new Error(`could not find a free slug near "${slug}"`)
}

/* ── Handler ──────────────────────────────────────────────────────────────── */

function authorised(req: Request): boolean {
  const header = req.headers.get("authorization") ?? ""
  const token = header.replace(/^Bearer\s+/i, "").trim()
  // The anon/publishable key is public — it is in the website's own build — so
  // platform JWT verification alone would let anyone spend the API budget.
  return token !== "" && (token === SERVICE_KEY || (!!GENERATOR_SECRET && token === GENERATOR_SECRET))
}

Deno.serve(async (req: Request) => {
  const started = Date.now()
  const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body, null, 2), {
      status,
      headers: { "content-type": "application/json" },
    })

  if (!authorised(req)) return json({ error: "unauthorised" }, 401)
  if (!ANTHROPIC_API_KEY) return json({ error: "ANTHROPIC_API_KEY is not set" }, 500)

  const db = createClient(SUPABASE_URL, SERVICE_KEY, {
    auth: { persistSession: false, autoRefreshToken: false },
  })

  const log = (row: Record<string, unknown>) =>
    db.from("generation_runs").insert({ duration_ms: Date.now() - started, model: MODEL, ...row })

  // ── Claim ────────────────────────────────────────────────────────────────
  const { data: claimed, error: claimError } = await db.rpc("claim_next_topic")
  if (claimError) {
    await log({ status: "error", error: `claim failed: ${claimError.message}` })
    return json({ error: claimError.message }, 500)
  }

  const topic = (claimed as Topic[] | null)?.[0]
  if (!topic) {
    // Not an error. The backlog is finished, or every remaining topic has
    // failed its three attempts and is waiting on a person.
    return json({ status: "queue-empty" })
  }

  const { id: topicId, attempts } = topic as Topic & { id: string; attempts: number }

  const fail = async (message: string) => {
    // claim_next_topic() already incremented attempts, and refuses to hand out
    // a topic on its fourth. Marking that state 'failed' rather than leaving it
    // 'pending' is what puts it at the top of content_queue instead of leaving
    // it looking like backlog that will be picked up eventually.
    const exhausted = attempts >= 3

    await db
      .from("content_topics")
      .update({
        status: exhausted ? "failed" : "pending",
        claimed_at: null,
        last_error: message.slice(0, 2000),
      })
      .eq("id", topicId)
    await log({ topic_id: topicId, cluster: topic.cluster, status: "error", error: message.slice(0, 2000) })
    return json({ error: message, cluster: topic.cluster }, 500)
  }

  try {
    // ── Context ────────────────────────────────────────────────────────────
    const { data: posts } = await db
      .from("posts")
      .select("title,slug")
      .order("published_at", { ascending: false, nullsFirst: false })
      .limit(60)

    const existing = (posts ?? []) as { title: string; slug: string }[]
    const ctx: SiteContext = {
      existingTitles: existing.map((p) => p.title),
      existingSlugs: existing.map((p) => p.slug),
    }

    // ── Write ──────────────────────────────────────────────────────────────
    const anthropic = new Anthropic({ apiKey: ANTHROPIC_API_KEY, timeout: 15 * 60 * 1000 })

    // Streamed because a 1,600-word article with adaptive thinking behind it
    // is a long single response, and a non-streaming request that size is the
    // classic way to collect an HTTP timeout instead of a post.
    const stream = anthropic.messages.stream({
      model: MODEL,
      max_tokens: 32000,
      thinking: { type: "adaptive" },
      output_config: {
        effort: EFFORT as "low" | "medium" | "high" | "xhigh" | "max",
        format: { type: "json_schema", schema: POST_SCHEMA },
      },
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: buildUserPrompt(topic, ctx) }],
    })

    const message = await stream.finalMessage()

    if (message.stop_reason === "refusal") {
      return await fail(`model refused: ${message.stop_details?.category ?? "unknown"}`)
    }
    if (message.stop_reason === "max_tokens") {
      return await fail("response hit max_tokens before completing")
    }

    const text = message.content.find((b) => b.type === "text")
    if (!text || text.type !== "text") return await fail("no text block in response")

    let draft: Draft
    try {
      draft = JSON.parse(text.text) as Draft
    } catch (e) {
      return await fail(`response was not valid JSON: ${(e as Error).message}`)
    }

    // ── Validate ───────────────────────────────────────────────────────────
    // The schema constrains shape, not truth about this site. These checks
    // cover the things a schema cannot know.
    const livePaths = new Set<string>([
      "/",
      "/services",
      "/case-studies",
      "/blog",
      ...SERVICE_PAGES,
      ...existing.map((p) => `/blog/${p.slug}`),
    ])

    const noImages = stripImages(draft.body_md)
    const noBadDiagrams = stripBadDiagrams(noImages.md)
    const noDeadLinks = pruneDeadLinks(noBadDiagrams.md, livePaths)
    const body = tidy(noDeadLinks.md)

    const words = body.split(/\s+/).filter(Boolean).length
    if (words < 700) return await fail(`body too short: ${words} words`)

    // Belt and braces against the 160-character check constraint on the column.
    const description = draft.seo_description.slice(0, 158)
    const slug = await uniqueSlug(db, draft.slug)

    // ── Insert ─────────────────────────────────────────────────────────────
    const { data: inserted, error: insertError } = await db
      .from("posts")
      .insert({
        slug,
        status: POST_STATUS,
        // Set now so flipping status to 'published' is the only edit needed;
        // RLS hides anything with a future published_at anyway.
        published_at: new Date().toISOString(),
        title: draft.title,
        dek: draft.dek,
        excerpt: draft.excerpt,
        body_md: body,
        category: draft.category,
        tags: draft.tags,
        reading_minutes: draft.reading_minutes,
        author_name: AUTHOR,
        author_url: AUTHOR_URL,
        seo_title: draft.seo_title,
        seo_description: description,
        focus_keyword: topic.focus_keyword,
        keywords: draft.keywords,
        faq: draft.faq,
      })
      .select("id,slug")
      .single()

    if (insertError) return await fail(`insert failed: ${insertError.message}`)

    // ── Stamp ──────────────────────────────────────────────────────────────
    await db
      .from("content_topics")
      .update({
        status: "written",
        written_at: new Date().toISOString(),
        post_id: inserted.id,
        last_error: null,
      })
      .eq("id", topicId)

    await log({
      topic_id: topicId,
      cluster: topic.cluster,
      status: "ok",
      post_slug: inserted.slug,
      input_tokens: message.usage.input_tokens,
      output_tokens: message.usage.output_tokens,
    })

    return json({
      status: "written",
      cluster: topic.cluster,
      slug: inserted.slug,
      post_status: POST_STATUS,
      words,
      stripped: {
        images: noImages.dropped,
        diagrams: noBadDiagrams.dropped,
        dead_links: noDeadLinks.dropped,
      },
      usage: message.usage,
    })
  } catch (e) {
    return await fail((e as Error).message ?? String(e))
  }
})
