"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"
import { EVENTS, analyticsEnabled, track } from "@/lib/analytics"

const MILESTONES = [25, 50, 75, 100] as const

/**
 * Attention, as opposed to arrival.
 *
 * Three signals, all keyed to the current route and all reset on navigation:
 * how far down the page someone got, which blocks actually entered the viewport,
 * and how long they stayed. On a single-page site that scrolls for a while,
 * these are the difference between "1,000 pageviews" and "1,000 people who left
 * before the case studies".
 */
export default function TrackScroll() {
  const pathname = usePathname()

  useEffect(() => {
    if (!analyticsEnabled) return

    const reached = new Set<number>()
    const seen = new Set<string>()
    const openedAt = Date.now()
    let queued = false
    let left = false

    const measure = () => {
      queued = false
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      /* A page shorter than the viewport is 100% read the moment it renders —
         reporting that as a scroll milestone would be a lie, so skip it. */
      if (scrollable <= 0) return
      const percent = ((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100

      for (const milestone of MILESTONES) {
        if (percent >= milestone && !reached.has(milestone)) {
          reached.add(milestone)
          track(EVENTS.scrollDepth, { depth: milestone, path: pathname })
        }
      }
    }

    const onScroll = () => {
      if (queued) return
      queued = true
      requestAnimationFrame(measure)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id
          if (!entry.isIntersecting || seen.has(id)) continue
          seen.add(id)
          track(EVENTS.sectionViewed, { section: id, path: pathname })
        }
      },
      /* Two fifths on screen — enough that it scrolled past deliberately rather
         than flashing by on a fling scroll. */
      { threshold: 0.4 },
    )
    document.querySelectorAll("section[id]").forEach((el) => observer.observe(el))

    /* pagehide rather than beforeunload: it fires on mobile Safari, and it is
       the one the bfcache does not cancel. */
    const onLeave = () => {
      if (left) return
      left = true
      track(EVENTS.pageEngaged, {
        seconds: Math.round((Date.now() - openedAt) / 1000),
        max_depth: reached.size ? Math.max(...reached) : 0,
        sections_seen: seen.size,
        path: pathname,
      })
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("pagehide", onLeave)
    measure()

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("pagehide", onLeave)
      observer.disconnect()
      /* A client-side navigation unmounts this without a pagehide, so the
         effect teardown is the other end of the same measurement. */
      onLeave()
    }
  }, [pathname])

  return null
}
