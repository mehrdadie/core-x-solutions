"use client"

import { useEffect } from "react"
import { EVENTS, analyticsEnabled, track } from "@/lib/analytics"

/**
 * Reading, specifically — measured against the article element rather than the
 * document, so the footer and the related-posts list do not count as "read".
 *
 * `post_completed` is the one that matters: it says someone reached the end of
 * the piece, which is the only honest signal that a post is doing its job.
 */
export default function TrackPost({
  slug,
  title,
  canonical,
}: {
  slug: string
  title: string
  canonical?: string | null
}) {
  useEffect(() => {
    if (!analyticsEnabled) return

    track(EVENTS.postViewed, {
      slug,
      title,
      /* Cross-published posts credit the other site. Worth being able to split
         them out of the numbers rather than quietly averaging them in. */
      canonical_elsewhere: Boolean(canonical),
    })

    const article = document.querySelector("article")
    if (!article) return

    const milestones = [25, 50, 75, 100]
    const reached = new Set<number>()
    let queued = false

    const measure = () => {
      queued = false
      const box = article.getBoundingClientRect()
      const total = box.height - window.innerHeight
      if (total <= 0) return
      /* box.top goes negative as the article scrolls past the viewport top. */
      const percent = Math.min(100, Math.max(0, (-box.top / total) * 100))

      for (const milestone of milestones) {
        if (percent >= milestone && !reached.has(milestone)) {
          reached.add(milestone)
          track(EVENTS.postReadProgress, { slug, percent: milestone })
          if (milestone === 100) track(EVENTS.postCompleted, { slug, title })
        }
      }
    }

    const onScroll = () => {
      if (queued) return
      queued = true
      requestAnimationFrame(measure)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    measure()
    return () => window.removeEventListener("scroll", onScroll)
  }, [slug, title, canonical])

  return null
}
