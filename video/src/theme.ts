/**
 * Mirrors the @theme block in src/app/globals.css. The three accents keep the
 * same fixed meanings they have on the site, and the whole video leans on that:
 *
 *   signal    amber        the live figure, the thing to look at
 *   oxide     burnt red    the broken state, the "before", the disagreement
 *   verdigris muted green  resolved, reconciled, the outcome
 *
 * Scene 2 is oxide because the system is wrong. Scene 3 turns verdigris at the
 * exact frame the fix lands. Do not decorate with these.
 */
export const c = {
  ground: "#0a0a0a",
  ground2: "#151515",
  panel: "#131313",
  panel2: "#1b1b1b",
  bone: "#f0efed",
  bone2: "#c2c0bb",
  bone3: "#97948d",
  rule: "rgba(240, 239, 237, 0.13)",
  rule2: "rgba(240, 239, 237, 0.26)",
  signal: "#f0b429",
  signalSoft: "rgba(240, 180, 41, 0.13)",
  oxide: "#e07a4f",
  oxideSoft: "rgba(224, 122, 79, 0.13)",
  verdigris: "#6fbfa0",
  verdigrisSoft: "rgba(111, 191, 160, 0.13)",
} as const;

export const FPS = 30;

/** Scene boundaries in frames. Sum must equal the composition's durationInFrames. */
export const beats = {
  pain: 300, // 10s — name the pain concretely
  why: 600, // 20s — why it happens
  fix: 840, // 28s — what we did
  number: 420, // 14s — the one number
  card: 300, // 10s — end card + spoken outro
} as const;

export const TOTAL = Object.values(beats).reduce((a, b) => a + b, 0);
