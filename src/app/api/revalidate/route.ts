import { revalidatePath } from "next/cache"

/**
 * On-demand revalidation, so a published post appears immediately instead of
 * waiting out the ten-minute ISR window on the index and the sitemap.
 *
 * The database calls this. A trigger on `public.posts` POSTs here whenever a
 * post is published, edited while published, or withdrawn — the same shape as
 * `notify_indexnow`, which already tells search engines from the same events.
 * Keeping both on the database side means one source of truth for "something
 * about a post changed", rather than a webhook that only fires when a person
 * remembers to call it.
 *
 * The post page itself was never the problem: `dynamicParams` renders unknown
 * slugs on request, so a new post has always been reachable at its URL the
 * moment it goes live. What lagged was `/blog` and `/sitemap.xml`, both of
 * which cache their whole list for ten minutes — which is exactly how a
 * published post can be live and invisible at the same time.
 *
 * Note the semantics: in a Route Handler `revalidatePath` marks a path stale
 * rather than rebuilding it here. The next visitor triggers the rebuild. That
 * is still effectively instant, and it means this endpoint stays cheap however
 * often it is called.
 */

export const dynamic = "force-dynamic"

const SECRET = process.env.REVALIDATE_SECRET

/** Slugs come from the database, but this is a public endpoint — treat them as input. */
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

export async function POST(request: Request) {
  // Failing closed and loudly beats a revalidation endpoint that anyone can
  // call because the secret was never set.
  if (!SECRET) {
    return Response.json(
      { error: "REVALIDATE_SECRET is not configured on this deployment" },
      { status: 503 },
    )
  }

  const provided = request.headers.get("x-revalidate-secret") ?? ""
  if (provided !== SECRET) {
    return Response.json({ error: "unauthorised" }, { status: 401 })
  }

  let slug: unknown
  try {
    slug = (await request.json())?.slug
  } catch {
    // A body-less ping is a valid way to say "just refresh the listings".
    slug = undefined
  }

  // The two paths that hold a list of posts, and therefore the two that go
  // stale when any post changes.
  const revalidated = ["/blog", "/sitemap.xml"]
  for (const path of revalidated) revalidatePath(path)

  if (typeof slug === "string" && SLUG.test(slug)) {
    const path = `/blog/${slug}`
    revalidatePath(path)
    revalidated.push(path)
  }

  return Response.json({ revalidated, at: new Date().toISOString() })
}
