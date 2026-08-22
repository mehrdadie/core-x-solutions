import { ImageResponse } from "next/og"
import { profile } from "@/content/profile"

export const alt = `${profile.name} — ${profile.role}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

/**
 * Generated rather than shipped as a file, so the card can never drift from the
 * palette or the role line. Colours are the literal token values from
 * globals.css — the @theme block is not reachable from the edge runtime.
 */
export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#1a1a1a",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 20, height: 20, background: "#f0b429" }} />
          <div
            style={{
              color: "#c2c0bb",
              fontSize: 26,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            {profile.shortRole}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              color: "#f0efed",
              fontSize: 82,
              lineHeight: 1.04,
              letterSpacing: -2.5,
              fontWeight: 600,
              maxWidth: 940,
            }}
          >
            We connect the systems behind your business.
          </div>
          <div style={{ color: "#97948d", fontSize: 30 }}>
            {`${profile.name} · core-x.solutions`}
          </div>
        </div>
      </div>
    ),
    size,
  )
}
