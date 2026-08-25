import { ImageResponse } from "next/og"
import { profile } from "@/content/profile"

export const alt = `${profile.name} — services`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

/**
 * One card for the whole services segment. The 31 service pages had no
 * og:image at all, so every share of them rendered as a bare link.
 *
 * Segment-level rather than per-page: a file here covers all of them, and the
 * alternative is 31 near-identical files. Colours are literal token values, as
 * in the other two cards — the @theme block is not reachable from here.
 */
export default async function ServicesOpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 20, height: 20, background: "#f0b429" }} />
          <div style={{ color: "#c2c0bb", fontSize: 26, letterSpacing: 4, textTransform: "uppercase" }}>
            Services
          </div>
        </div>

        <div
          style={{
            color: "#f0efed",
            fontSize: 74,
            lineHeight: 1.05,
            letterSpacing: -2.2,
            fontWeight: 600,
            maxWidth: 980,
            display: "flex",
          }}
        >
          Revenue operations, built to survive the handover.
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 120, height: 1, background: "#97948d" }} />
          <div style={{ color: "#97948d", fontSize: 28 }}>
            {`${profile.name} · core-x.solutions`}
          </div>
        </div>
      </div>
    ),
    size,
  )
}
