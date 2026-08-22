# Core-X case-study videos

Motion-graphic case-study videos, rendered with [Remotion](https://remotion.dev)
(React → MP4). Standalone from the Next.js app — its own `package.json`, its own
`node_modules` — so nothing here can drag a dependency into the site build.

```bash
cd video
npm install
npm run studio     # live preview + scrubbing at localhost:3000
npm run render     # → out/case-study.mp4
```

Renders on CPU, needs no GPU and no network (fonts are bundled from
`node_modules`, not fetched from Google), so this runs unchanged on a CI runner.
82s at 1080p30 takes a couple of minutes.

## The format

Five beats, every video, in `src/CaseStudyVideo.tsx`. The structure is the
format — like a news segment — and is not meant to vary per video:

| Beat | Length | Does |
|---|---|---|
| `Pain` | 10s | Names the pain as two numbers that disagree |
| `Why` | 20s | The system diagram, broken |
| `Fix` | 28s | The same diagram, repaired on camera |
| `Number` | 14s | One figure. Only one |
| `EndCard` | 10s | Wordmark, URL, spoken outro lands here |

`Why` and `Fix` share `scenes/Diagram.tsx` and every element in it is absolutely
positioned, so the boxes cannot shift between the two scenes. If they move, the
"we changed one thing" reading is lost.

The palette in `src/theme.ts` mirrors `@theme` in `src/app/globals.css` and keeps
the same fixed accent meanings: **signal** = the live figure, **oxide** = the
broken state, **verdigris** = resolved. Scene 3 crosses from oxide to verdigris
at the exact frame the fix lands. That colour crossing is the argument of the
video — don't decorate with these.

## Making a new video

Edit `src/case-study.ts`. That file is the whole input; nothing else changes.

**The numbers in it are input, never output.** When this is automated, an LLM
writes the prose around the figures — it must never be allowed to produce
`metric.to`, `pain.gapLabel`, or the two ledger values. Those come from a real
engagement, entered by hand, with the client's permission to describe the work.
Anonymise the client where permission is limited ("a 40-person logistics firm").

This matters for the same reason the testimonials in `src/content/profile.ts`
are not rendered on the site: a specific factual claim published under the brand
is checkable, permanently.

## Status

Working local render with a **placeholder** case study, built from the setup in
the reconciliation article. Not published anywhere, no real client data.

Not built yet: voiceover (TTS per beat, timed against the beat lengths in
`src/theme.ts`), the `case_studies` table, and YouTube upload.
