import type { MetadataRoute } from "next"
import { profile } from "@/content/profile"
import { getPosts } from "@/lib/posts"

/** Regenerated on the same cadence as the blog, so new posts get listed. */
export const revalidate = 600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts()

  /**
   * A post whose canonical points at another origin is a cross-published copy.
   * Listing it here would tell search engines "index this" while the page
   * itself says "the real one is elsewhere" — two contradictory signals about
   * the same URL. Advertise only the ones this site claims as its own.
   */
  const ownPosts = posts.filter(
    (post) => !post.canonical_url || post.canonical_url.startsWith(profile.url),
  )

  return [
    {
      url: profile.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${profile.url}/case-studies`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${profile.url}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...ownPosts.map((post) => ({
      url: `${profile.url}/blog/${post.slug}`,
      lastModified: post.published_at ? new Date(post.published_at) : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ]
}
