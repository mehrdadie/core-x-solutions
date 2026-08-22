"use client"

import { useEffect } from "react"
import { EVENTS, type EventName, analyticsEnabled, sectionOf, track } from "@/lib/analytics"

/**
 * One delegated listener instead of an onClick on forty anchors.
 *
 * The point is that server components stay server components: tagging a link
 * means adding `data-ph-event="cta_clicked" data-ph-location="hero"`, which is
 * plain HTML and costs no client boundary. Any `data-ph-*` beyond the event name
 * rides along as an event property.
 *
 * Untagged links still get useful events — a mailto is the conversion on this
 * site, and an off-site link is worth knowing about — so those two are derived
 * rather than annotated.
 */
export default function TrackClicks() {
  useEffect(() => {
    if (!analyticsEnabled) return

    const onClick = (e: MouseEvent) => {
      const target = e.target
      if (!(target instanceof Element)) return

      const tagged = target.closest<HTMLElement>("[data-ph-event]")
      if (tagged) {
        const props: Record<string, unknown> = {}
        for (const [key, value] of Object.entries(tagged.dataset)) {
          if (key === "phEvent" || !key.startsWith("ph")) continue
          const name = key.slice(2)
          props[name.charAt(0).toLowerCase() + name.slice(1)] = value
        }
        props.section ??= sectionOf(tagged)
        track(tagged.dataset.phEvent as EventName, props)
        return
      }

      const link = target.closest("a")
      if (!link) return
      const href = link.getAttribute("href") ?? ""

      if (href.startsWith("mailto:")) {
        const [address, query] = href.slice("mailto:".length).split("?")
        track(EVENTS.emailClicked, {
          address,
          /* The prompt lists write their own subject — that is the useful half. */
          subject: new URLSearchParams(query).get("subject") ?? undefined,
          section: sectionOf(link),
        })
        return
      }

      if (/^https?:\/\//i.test(href) && !href.startsWith(window.location.origin)) {
        track(EVENTS.outboundClicked, {
          href,
          host: new URL(href).host,
          section: sectionOf(link),
        })
      }
    }

    /* Capture phase: React stops propagation in places, and a navigation can
       tear the document down before a bubbled listener ever runs. */
    document.addEventListener("click", onClick, true)
    return () => document.removeEventListener("click", onClick, true)
  }, [])

  return null
}
