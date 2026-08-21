import { createClient } from "@supabase/supabase-js"

/**
 * Read side of the blog. Everything here runs on the server — the key never
 * reaches the browser — and row-level security in Supabase already restricts
 * anonymous reads to published posts, so this layer only shapes the data.
 */

const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_KEY = process.env.SUPABASE_PUBLISHABLE_KEY

export type Post = {
  id: string
  slug: string
  status: "draft" | "scheduled" | "published"
  published_at: string | null
  updated_at: string
  title: string
  dek: string | null
  excerpt: string
  body_md: string
  category: string | null
  tags: string[]
  reading_minutes: number | null
  author_name: string
  author_url: string | null
  seo_title: string | null
  seo_description: string | null
  canonical_url: string | null
  focus_keyword: string | null
  keywords: string[]
  robots_index: boolean
  robots_follow: boolean
  cover_image_url: string | null
  cover_image_alt: string | null
  og_title: string | null
  og_description: string | null
  og_image_url: string | null
  og_image_alt: string | null
  og_image_width: number | null
  og_image_height: number | null
  og_type: string
  twitter_card: string
  twitter_title: string | null
  twitter_description: string | null
  twitter_image_url: string | null
  twitter_image_alt: string | null
  schema_type: string
  faq: { question: string; answer: string }[]
}

/** Card view — everything the index needs, without dragging every body along. */
export type PostCard = Pick<
  Post,
  | "slug"
  | "title"
  | "dek"
  | "excerpt"
  | "category"
  | "tags"
  | "reading_minutes"
  | "published_at"
  | "cover_image_url"
  | "cover_image_alt"
>

const CARD_COLUMNS =
  "slug,title,dek,excerpt,category,tags,reading_minutes,published_at,cover_image_url,cover_image_alt"

function client() {
  if (!SUPABASE_URL || !SUPABASE_KEY) return null
  return createClient(SUPABASE_URL, SUPABASE_KEY, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
}

/**
 * A missing or unreachable database must not fail the build — the rest of the
 * site is static and should keep deploying. Callers get an empty list and the
 * blog renders its empty state.
 */
export async function getPosts(): Promise<PostCard[]> {
  const supabase = client()
  if (!supabase) return []

  const { data, error } = await supabase
    .from("posts")
    .select(CARD_COLUMNS)
    .eq("status", "published")
    .order("published_at", { ascending: false })

  if (error) {
    console.error("[blog] could not load posts:", error.message)
    return []
  }
  return (data ?? []) as PostCard[]
}

export async function getPost(slug: string): Promise<Post | null> {
  const supabase = client()
  if (!supabase) return null

  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle()

  if (error) {
    console.error(`[blog] could not load "${slug}":`, error.message)
    return null
  }
  return (data as Post) ?? null
}

export function formatPostDate(iso: string | null) {
  if (!iso) return ""
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export const blogIsConfigured = Boolean(SUPABASE_URL && SUPABASE_KEY)
