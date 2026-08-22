"use client"

import posthog from "posthog-js"
import { EVENTS, type EventName } from "./analytics-events"

export { EVENTS }
export type { EventName }

/**
 * Client-side analytics surface. Browser-only — importing this from a server
 * component pulls posthog-js into the server bundle, which is why the event
 * names live in their own file.
 */

/** Set in Vercel, not the repo. Absent locally, so `npm run dev` sends nothing. */
export const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY

/**
 * Ingestion goes through our own /ingest path (rewritten in next.config.js), so
 * the requests are first-party and content blockers do not eat a slice of the
 * traffic. ui_host is only used to build "view in PostHog" links from the
 * toolbar — it must stay the real dashboard host.
 */
export const POSTHOG_UI_HOST =
  process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.posthog.com"

export const analyticsEnabled = Boolean(POSTHOG_KEY)

/**
 * Initialised on module load rather than from a provider's effect, and this is
 * load-bearing.
 *
 * React runs effects in tree order, so a provider mounted anywhere in the layout
 * initialises *after* the effects of the page inside it. Anything a page
 * captures on mount — the 404 event, a post view — would then be a capture
 * against an uninitialised client, which posthog-js silently discards. It only
 * appeared to work on client-side navigation, where the SDK was already up from
 * the previous page: a bug that hides itself in exactly the case you test by
 * clicking around.
 *
 * Module scope has no such ordering. The window guard is what keeps it off the
 * server, where "use client" files still execute during SSR.
 */
if (typeof window !== "undefined" && analyticsEnabled && !posthog.__loaded) {
  posthog.init(POSTHOG_KEY as string, {
    /* First-party path — see the rewrites in next.config.js. */
    api_host: "/ingest",
    ui_host: POSTHOG_UI_HOST,
    defaults: "2025-05-24",

    /* Client-side navigation never reloads the document, so a load-time-only
       pageview would report every visit as a single page. */
    capture_pageview: "history_change",
    capture_pageleave: true,

    /* Clicks we never got round to naming still land as $autocapture. */
    autocapture: true,
    rageclick: true,
    capture_dead_clicks: true,

    /* Core Web Vitals and uncaught errors, from the same SDK. */
    capture_performance: true,
    capture_exceptions: true,

    /* Nobody logs in here. Person profiles would cost money and hold data we
       have no use for. */
    person_profiles: "identified_only",
    respect_dnt: true,
    mask_personal_data_properties: true,

    session_recording: {
      maskAllInputs: true,
      maskTextSelector: "[data-ph-mask]",
    },
  })
}

/**
 * Capture a named event. A no-op when the key is unset, so nothing has to guard
 * its own call site and local development stays silent.
 */
export function track(event: EventName, properties?: Record<string, unknown>) {
  if (!analyticsEnabled) return
  posthog.capture(event, properties)
}

/**
 * The section a given node sits in. Every major block on the page is a
 * `<section id>`, so this is what turns "a click happened" into "a click
 * happened in the contact block" without threading a prop through the tree.
 */
export function sectionOf(el: Element | null): string | undefined {
  return el?.closest("section[id]")?.id || undefined
}

export { posthog }
