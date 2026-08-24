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

const nextConfig = {
  async redirects() {
    return Object.entries(mergedPages).map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }))
  },
}

module.exports = nextConfig
