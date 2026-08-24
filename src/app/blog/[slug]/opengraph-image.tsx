import { ImageResponse } from "next/og"
import { profile } from "@/content/profile"
import { getPost } from "@/lib/posts"

export const alt = `${profile.name} — writing`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

/**
 * A share card per post, generated rather than authored.
 *
 * File-based metadata outranks generateMetadata, so this route decides the
 * Open Graph image for every post whether it wants to or not. That is why it
 * checks for an explicit image first and passes it straight through: a post
 * with a real cover keeps it, and only posts without one get the typographic
 * card. Without that branch, adding this file would have quietly replaced the
 * one hand-made cover on the blog.
 *
 * Colours are the literal token values from globals.css — the @theme block is
 * not reachable from here — which is the fourth place the palette is repeated,
 * as recorded in CLAUDE.md.
 */

const GROUND = "#0a0a0a"
const BONE = "#f0efed"
const BONE_2 = "#c2c0bb"
const BONE_3 = "#97948d"
const SIGNAL = "#f0b429"

/** Long headlines need to be set smaller or they overrun the card. */
function titleSize(title: string) {
  if (title.length > 92) return 50
  if (title.length > 68) return 58
  if (title.length > 46) return 68
  return 78
}

export default async function PostOpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPost(slug)

  const existing = post?.og_image_url ?? post?.cover_image_url

  if (existing) {
    return new ImageResponse(
      (
        <div style={{ display: "flex", width: "100%", height: "100%" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={existing} alt="" width={size.width} height={size.height} style={{ objectFit: "cover" }} />
        </div>
      ),
      size,
    )
  }

  const title = post?.title ?? "Writing"
  const category = post?.category ?? "Notes"

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: GROUND,
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 20, height: 20, background: SIGNAL }} />
          <div
            style={{
              color: BONE_2,
              fontSize: 26,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            {category}
          </div>
        </div>

        <div
          style={{
            color: BONE,
            fontSize: titleSize(title),
            lineHeight: 1.06,
            letterSpacing: -2,
            fontWeight: 600,
            maxWidth: 1000,
            display: "flex",
          }}
        >
          {title}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {/* A hairline that stops short of the wordmark, so the card reads as
              a document footer rather than a centred title slide. */}
          <div style={{ width: 120, height: 1, background: BONE_3 }} />
          <div style={{ color: BONE_3, fontSize: 28 }}>
            {`${profile.name} · core-x.solutions`}
          </div>
        </div>
      </div>
    ),
    size,
  )
}
