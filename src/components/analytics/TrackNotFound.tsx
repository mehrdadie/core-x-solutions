"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"
import { EVENTS, analyticsEnabled, track } from "@/lib/analytics"

/**
 * A 404 is a broken link somewhere — usually ours, sometimes a stale external
 * one. The referrer is the half that tells you which.
 */
export default function TrackNotFound() {
  const pathname = usePathname()

  useEffect(() => {
    if (!analyticsEnabled) return
    track(EVENTS.notFoundViewed, {
      path: pathname,
      referrer: document.referrer || undefined,
    })
  }, [pathname])

  return null
}
