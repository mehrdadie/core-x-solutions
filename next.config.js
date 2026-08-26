/** @type {import('next').NextConfig} */

/**
 * Pages merged into a stronger one, kept as redirects so the old URLs keep
 * whatever equity and inbound links they picked up.
 *
 * `permanent: true` emits 308 rather than 301. Google consolidates the two
 * identically; 308 additionally preserves the request method, which is why
 * Next prefers it. Do not delete these entries once the pages are gone —
 * that is the point of them.
 */
const mergedPages = {
  // Four pages describing one mechanism: score an account, act on the score.
  "/services/customer-churn-prediction": "/services/account-health-scoring",
  "/services/upsell-cross-sell-scoring": "/services/account-health-scoring",
  "/services/renewal-automation": "/services/account-health-scoring",
  // Email engagement is one signal inside activity tracking, not a topic.
  "/services/email-engagement-tracking": "/services/sales-activity-tracking",
}

/**
 * PostHog ingestion, proxied through this origin.
 *
 * posthog-js is pointed at `/ingest` rather than at `eu.i.posthog.com`, so the
 * requests are first-party and the blocklists that match on PostHog's domain do
 * not quietly delete a chunk of ordinary traffic. This audience — operations and
 * data people — blocks trackers well above the web average, and the gap that
 * opens is the difference between numbers you can reason about and numbers you
 * cannot. It is not an evasion: a visitor who blocks the script still blocks it,
 * and Do Not Track is honoured in the client config.
 *
 * `/ingest/static/*` has to go to the assets host and everything else to the
 * ingestion host, so this is two rules and the order matters.
 */
const POSTHOG_INGEST = "https://eu.i.posthog.com"
const POSTHOG_ASSETS = "https://eu-assets.i.posthog.com"

const nextConfig = {
  async redirects() {
    return Object.entries(mergedPages).map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }))
  },

  async rewrites() {
    return [
      { source: "/ingest/static/:path*", destination: `${POSTHOG_ASSETS}/static/:path*` },
      { source: "/ingest/:path*", destination: `${POSTHOG_INGEST}/:path*` },
    ]
  },

  /**
   * Required by the rewrites above, and the one line here with a side effect
   * worth stating. posthog-js POSTs to paths that end in a slash (`/ingest/e/`),
   * and Next's default is to 308 any trailing slash away — which turns those
   * POSTs into redirects and loses the events.
   *
   * The cost is that `/about/` and `/about` both now serve 200 instead of the
   * first redirecting to the second. Every page on this site sets an explicit
   * `alternates.canonical`, and no internal link is written with a trailing
   * slash, so the duplicate is declared and consolidated rather than competing.
   * If a canonical is ever dropped from a page, this is the line that makes
   * that mistake expensive.
   */
  skipTrailingSlashRedirect: true,
}

module.exports = nextConfig
