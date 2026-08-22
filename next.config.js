/**
 * PostHog ingestion is proxied through this origin rather than called directly.
 * Content and tracker blockers drop requests to *.i.posthog.com by hostname, and
 * on a B2B audience that is a large, invisible and non-random slice of the
 * traffic — the technical buyers we most want to measure are the ones most
 * likely to be blocking. A same-origin /ingest path is not on those lists.
 *
 * The cost: these rewrites and the host below are the one place that knows which
 * PostHog region the project lives in. Set NEXT_PUBLIC_POSTHOG_HOST to the EU
 * dashboard host if the project is ever moved, and both halves follow.
 */
const uiHost = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.posthog.com"
const region = uiHost.includes("eu.") ? "eu" : "us"

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: `https://${region}-assets.i.posthog.com/static/:path*`,
      },
      { source: "/ingest/:path*", destination: `https://${region}.i.posthog.com/:path*` },
    ]
  },
  /* PostHog's API is trailing-slash sensitive; Next's default redirect breaks it. */
  skipTrailingSlashRedirect: true,
}

module.exports = nextConfig
