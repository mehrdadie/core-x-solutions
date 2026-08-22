/**
 * The single source of truth for one video.
 *
 * IMPORTANT — the numbers in here are INPUT, never output. When this is
 * automated, an LLM writes the prose around these fields; it must never be
 * allowed to produce `metric.to`, `gap`, or the two ledger figures. Those come
 * from a real engagement, entered by hand, with the client's permission.
 *
 * This example is a placeholder built from the reconciliation article's setup.
 * Swap it for a real, permissioned engagement before anything is published.
 */
export type CaseStudy = {
  sector: string;
  pain: { headline: string; ledgerA: Ledger; ledgerB: Ledger; gapLabel: string };
  why: { headline: string; body: string };
  fix: { headline: string; body: string; layerLabel: string };
  metric: { from: number; to: number; suffix: string; label: string; footnote: string };
  outro: string;
};

type Ledger = { source: string; value: number; unit?: string };

export const caseStudy: CaseStudy = {
  sector: "40-person logistics firm",

  pain: {
    headline: "Two systems. One month. Two different answers.",
    ledgerA: { source: "CRM", value: 340, unit: "deals closed" },
    ledgerB: { source: "Finance", value: 318, unit: "deals closed" },
    gapLabel: "22 deals nobody could account for",
  },

  why: {
    headline: "Nothing is broken. That's the problem.",
    body:
      "The CRM books a deal when it is signed. Finance books it when it is invoiced. Both are correct, on different days, with no shared key between them — so the gap is invisible until someone reconciles by hand.",
  },

  fix: {
    headline: "We gave the two systems one shared spine.",
    body:
      "A reconciliation layer keyed on the deal ID, matching on close date and invoice date separately, and surfacing every unmatched record the morning it appears instead of at month end.",
    layerLabel: "RECONCILIATION LAYER",
  },

  metric: {
    from: 0,
    to: 60,
    suffix: "%",
    label: "less month-end reconciliation time",
    footnote: "Measured across the three months after go-live.",
  },

  outro: "Core-X Solutions — core-x.solutions",
};
