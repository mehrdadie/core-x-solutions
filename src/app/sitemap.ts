import type { MetadataRoute } from "next"
import { profile } from "@/content/profile"
import { getPosts } from "@/lib/posts"
import { legalUpdated } from "@/content/legal"
import { moneyPage, serviceGroups } from "@/content/services"

/** Regenerated on the same cadence as the blog, so new posts get listed. */
export const revalidate = 600

/** Cluster heads: the pages the rest of a group links up into. */
const hubPages = new Set([
  "/services/what-is-revops",
  "/services/crm-integration-services",
  "/services/data-automation-consultant",
  "/services/lead-routing-guide",
  "/services/revenue-attribution-models",
  "/services/marketing-attribution-guide",
  "/services/automated-reporting-guide",
  "/services/hubspot-revops-consulting",
  "/services/salesforce-revops-consulting",
  "/services/zoho-crm-automation",
])

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
      url: `${profile.url}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    /**
     * Generated from the same module that renders the index and the related
     * blocks. Listing them by hand here is how a merged page keeps being
     * advertised weeks after its route stopped existing.
     */
    ...serviceGroups.flatMap((group) =>
      group.items.map((item) => ({
        url: `${profile.url}${item.href}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: item.href === moneyPage ? 0.9 : hubPages.has(item.href) ? 0.8 : 0.7,
      })),
    ),
    // Other pages
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
    // Identity and legal. Low priority — nobody searches for these — but they
    // are the pages a buyer and a crawler both check to decide whether a site
    // belongs to a real business, so they have to be discoverable.
    {
      url: `${profile.url}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${profile.url}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${profile.url}/privacy`,
      lastModified: new Date(legalUpdated),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${profile.url}/terms`,
      lastModified: new Date(legalUpdated),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ]
}
