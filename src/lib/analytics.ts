/**
 * PostHog configuration, in one place because two of these values are decisions
 * rather than settings.
 *
 * **Cookieless is the default here, and it is deliberate.** `/privacy` says the
 * site sets no cookies and shows no banner, and treats the absence of one as a
 * feature rather than an omission. PostHog's cookieless mode keeps that true:
 * nothing is written to the visitor's device — no cookie, no localStorage, no
 * sessionStorage — and identity comes from a rotating hash PostHog derives
 * server-side. Under PECR that is not "storing or accessing information on
 * terminal equipment", so no consent gate is required, which means every
 * visitor is measured rather than the fraction who would click Accept.
 *
 * What it costs: identity does not survive across days. Somebody who reads a
 * post on Monday and returns on Thursday is two people, so returning-visitor
 * and multi-session funnel analysis is not available. Everything else —
 * pageviews, autocaptured clicks, rageclicks, dead clicks, web vitals, session
 * replay — is captured in full.
 *
 * To trade the banner for that identity, set COOKIELESS to 'on_reject' and add
 * a consent UI that calls `posthog.opt_in_capturing()` /
 * `posthog.opt_out_capturing()`. PostHog then uses cookies for visitors who
 * accept and falls back to cookieless for the rest, so nobody goes uncounted.
 * `/privacy` has to be rewritten again if you do — it currently describes the
 * cookieless arrangement specifically.
 *
 * Note: cookieless also has to be enabled on the PostHog project itself
 * (`cookieless_server_hash_mode`), or every cookieless event is dropped at
 * ingestion. It is enabled on project 254770.
 */
export const COOKIELESS: "always" | "on_reject" = "always"

/**
 * The project API key. Public by design — it identifies the project to write
 * into and can only write, never read, so it belongs in client code and not in
 * an environment variable. Anything read-side needs a personal API key, which
 * is not in this repo and must never be.
 */
export const POSTHOG_KEY = "phc_x9hnDEivEX6o4KdaN8UiScdLeQ5AmVisz4zAK6vxwTrF"

/**
 * Ingestion goes through this site's own origin, rewritten in `next.config.js`
 * to PostHog's EU endpoints, rather than straight to `eu.i.posthog.com`.
 *
 * The audience here is operations and data people, who block trackers at a much
 * higher rate than the general web. A first-party path is not a trick to evade
 * that — a visitor who blocks scripts still blocks this one — but it does stop
 * the blocklists that match on PostHog's domain from silently deleting a large
 * share of ordinary traffic, which is the difference between numbers you can
 * reason about and numbers you cannot.
 */
export const INGEST_PATH = "/ingest"

/** Where the "view this in PostHog" links point. EU region for this project. */
export const POSTHOG_UI_HOST = "https://eu.posthog.com"

/** PostHog's EU ingestion and static asset origins, proxied under INGEST_PATH. */
export const POSTHOG_INGEST_ORIGIN = "https://eu.i.posthog.com"
export const POSTHOG_ASSETS_ORIGIN = "https://eu-assets.i.posthog.com"
