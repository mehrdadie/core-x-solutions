"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

type RevealProps = {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  as?: "div" | "li" | "section" | "article" | "header"
}

/**
 * Scroll reveal: opacity + a small upward move. Nothing else.
 *
 * The element type never changes between renders — swapping motion.div for a
 * plain div would leave the inline opacity:0 that Motion wrote imperatively,
 * so reduced-motion visitors would see empty sections. Reduced motion is
 * handled by starting at the resting state, plus a stylesheet override on
 * `.reveal` that beats any inline style.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 18,
  className,
  as = "div",
}: RevealProps) {
  const reduced = useReducedMotion()
  const MotionTag = motion[as]

  return (
    <MotionTag
      className={className ? `reveal ${className}` : "reveal"}
      initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px -8% 0px" }}
      transition={
        reduced
          ? { duration: 0 }
          : { duration: 0.62, delay, ease: [0.22, 1, 0.36, 1] }
      }
    >
      {children}
    </MotionTag>
  )
}
