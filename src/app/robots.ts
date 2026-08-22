import type { MetadataRoute } from "next"
import { profile } from "@/content/profile"

/**
 * Everything is open, including AI crawlers (GPTBot, ClaudeBot, PerplexityBot,
 * Google-Extended). That is deliberate: being cited by AI assistants is a goal
 * here, not a risk. To opt out of AI training later, disallow those agents by
 * name — a blanket rule would also block ordinary search indexing.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${profile.url}/sitemap.xml`,
    host: profile.url,
  }
}
