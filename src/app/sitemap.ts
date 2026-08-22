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
    // Money Page (L0)
    {
      url: `${profile.url}/services/revenue-operations-consultant`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // L1 Hub Pages
    {
      url: `${profile.url}/services/what-is-revops`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${profile.url}/services/crm-integration-services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${profile.url}/services/data-automation-consultant`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${profile.url}/services/lead-routing-guide`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${profile.url}/services/revenue-attribution-models`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${profile.url}/services/marketing-attribution-guide`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${profile.url}/services/automated-reporting-guide`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${profile.url}/services/hubspot-revops-consulting`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${profile.url}/services/salesforce-revops-consulting`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${profile.url}/services/zoho-crm-automation`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // L2 Supporting Pages
    {
      url: `${profile.url}/services/lead-scoring-models`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${profile.url}/services/sales-process-automation`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${profile.url}/services/crm-data-quality`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${profile.url}/services/territory-planning`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${profile.url}/services/sales-cycle-analysis`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${profile.url}/services/pipeline-management`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${profile.url}/services/sales-forecasting`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${profile.url}/services/lead-qualification-frameworks`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${profile.url}/services/deal-health-scoring`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${profile.url}/services/win-loss-analysis`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${profile.url}/services/customer-churn-prediction`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${profile.url}/services/upsell-cross-sell-scoring`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${profile.url}/services/account-expansion-strategy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${profile.url}/services/renewal-automation`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${profile.url}/services/email-engagement-tracking`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${profile.url}/services/sales-activity-tracking`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${profile.url}/services/sales-methodology-standardization`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${profile.url}/services/account-health-scoring`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${profile.url}/services/compensation-plan-alignment`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${profile.url}/services/deal-velocity-metrics`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${profile.url}/services/revenue-retention-strategy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${profile.url}/services/kpi-selection-guide`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${profile.url}/services/crm-data-migration`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${profile.url}/services/reporting-dashboard-design`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
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
  ]
}
