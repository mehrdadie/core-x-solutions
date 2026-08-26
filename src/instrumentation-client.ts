import posthog from "posthog-js"
import {
  COOKIELESS,
  INGEST_PATH,
  POSTHOG_KEY,
  POSTHOG_UI_HOST,
} from "@/lib/analytics"

/**
 * Analytics init.
 *
 * `instrumentation-client.ts` is Next's own hook for this: it runs before the
 * application's frontend code, so the first pageview is captured rather than
 * missed while React hydrates. It is also the reason there is no provider
 * component and no `usePathname`/`useSearchParams` anywhere near this — every
 * page on this site is statically prerendered, and calling `useSearchParams`
 * from a client component inside the root layout would opt the entire tree out
 * of prerendering (and fail the production build outright). Route changes are
 * instead detected by posthog-js itself via `capture_pageview: 'history_change'`,
 * which needs no React at all and leaves the static build untouched.
 *
 * Everything below is switched on. The brief was every event and every session,
 * so the only things deliberately restrained are the two that would capture
 * content rather than behaviour — see the masking notes on `session_recording`.
 */
posthog.init(POSTHOG_KEY, {
  // First-party ingestion path, rewritten in next.config.js. `ui_host` is
  // separate so "open in PostHog" links still point at the real app.
  api_host: INGEST_PATH,
  ui_host: POSTHOG_UI_HOST,

  // Pin the SDK's default set so a future posthog-js upgrade cannot silently
  // change capture behaviour underneath the site. Explicit options below win.
  defaults: "2025-05-24",

  // No cookie, no localStorage, no banner. See the note in lib/analytics.ts —
  // this is what keeps the promise on /privacy true.
  cookieless_mode: COOKIELESS,

  // --- what gets captured -------------------------------------------------
  // 'history_change' catches client-side navigation between the site's pages,
  // which is most of them: the header, the services index and the related
  // blocks are all next/link, so a reader moving through five service pages is
  // one page load and four history changes.
  capture_pageview: "history_change",
  capture_pageleave: true,
  autocapture: true,
  rageclick: true,
  capture_dead_clicks: true,
  capture_performance: { web_vitals: true, network_timing: true },

  // Anonymous visitors get person profiles too. Without this only identified
  // users would, and this site identifies nobody — there is no login and no
  // form — so 'identified_only' would mean no person-level analysis at all.
  person_profiles: "always",

  // --- session replay -----------------------------------------------------
  disable_session_recording: false,
  session_recording: {
    // The site has no forms, no login and no payment fields, so input masking
    // costs nothing here and is the correct default to keep if one is ever
    // added. Text is deliberately NOT masked: the whole value of replay on a
    // marketing site is seeing which paragraph someone stopped at, and a
    // replay of grey blocks answers nothing.
    maskAllInputs: true,
    maskTextSelector: "[data-ph-mask]",
    // Network timing without bodies. Request and response payloads on this
    // site are article content from Supabase, and recording them would put a
    // copy of the database's responses inside the replay.
    recordHeaders: false,
    recordBody: false,
    // Nothing here renders in a cross-origin iframe.
    recordCrossOriginIframes: false,
  },

  // Do Not Track is honoured. A stated preference not to be measured is worth
  // more than the handful of sessions it costs, and this site argues for that
  // position on /privacy.
  respect_dnt: true,

  // Never capture the site's own preview and development traffic as if it were
  // a visitor. Vercel preview deployments and localhost both land here.
  before_send: (event) => {
    if (typeof window === "undefined") return event
    const host = window.location.hostname
    if (host === "localhost" || host === "127.0.0.1" || host.endsWith(".vercel.app")) {
      return null
    }
    return event
  },
})
