/**
 * The service index, grouped by the part of the revenue chain each page sits in.
 *
 * Single source of truth for three things that would otherwise drift apart: the
 * /services index, the "related" block at the foot of every service page, and
 * the running count the index states about itself. Adding a page here and
 * creating its route is the whole job — nothing else needs editing.
 */
export type ServiceItem = {
  href: string
  label: string
  blurb: string
}

export type ServiceGroup = {
  id: string
  label: string
  intro: string
  items: ServiceItem[]
}

const raw: Array<Omit<ServiceGroup, "items"> & { items: [string, string, string][] }> = [
  {
    id: "core",
    label: "Core services",
    intro: "The work itself — where an engagement usually starts.",
    items: [
      [
        "/services/revenue-operations-consultant",
        "Revenue operations consulting",
        "Sales, marketing and finance on one system",
      ],
      [
        "/services/crm-integration-services",
        "CRM integration services",
        "Connect the CRM to everything around it",
      ],
      [
        "/services/data-automation-consultant",
        "Data automation consulting",
        "Pipelines and syncs that run without you",
      ],
      ["/services/what-is-revops", "What is RevOps?", "The discipline, explained plainly"],
    ],
  },
  {
    id: "platforms",
    label: "Platforms",
    intro: "Configuration, automation and integration on the systems you already run.",
    items: [
      [
        "/services/hubspot-revops-consulting",
        "HubSpot RevOps consulting",
        "Properties, workflows and reporting",
      ],
      [
        "/services/salesforce-revops-consulting",
        "Salesforce RevOps consulting",
        "Governance, flows and permissions",
      ],
      [
        "/services/zoho-crm-automation",
        "Zoho CRM automation",
        "Unify CRM, Books, Campaigns and Analytics",
      ],
      ["/services/crm-data-migration", "CRM data migration", "Move systems without losing history"],
    ],
  },
  {
    id: "routing",
    label: "Routing & qualification",
    intro: "Getting the right lead to the right person, fast.",
    items: [
      ["/services/lead-routing-guide", "Lead routing", "Routing models and assignment logic"],
      [
        "/services/lead-scoring-models",
        "Lead scoring models",
        "Behavioural, demographic and predictive",
      ],
      [
        "/services/lead-qualification-frameworks",
        "Lead qualification frameworks",
        "BANT, MEDDIC and CHAMP compared",
      ],
      [
        "/services/territory-planning",
        "Territory planning",
        "Balanced, defensible territory design",
      ],
    ],
  },
  {
    id: "attribution",
    label: "Attribution & reporting",
    intro: "Knowing which spend and which motion actually produced the revenue.",
    items: [
      [
        "/services/revenue-attribution-models",
        "Revenue attribution models",
        "First-touch to data-driven, compared",
      ],
      [
        "/services/marketing-attribution-guide",
        "Marketing attribution",
        "UTMs, source tracking and channel reporting",
      ],
      [
        "/services/automated-reporting-guide",
        "Automated reporting",
        "Dashboards that build themselves",
      ],
      [
        "/services/reporting-dashboard-design",
        "Dashboard design",
        "What belongs on each audience's screen",
      ],
      ["/services/kpi-selection-guide", "KPI selection", "Choosing the handful that matter"],
    ],
  },
  {
    id: "pipeline",
    label: "Pipeline & forecasting",
    intro: "Making the number in the forecast mean something.",
    items: [
      [
        "/services/pipeline-management",
        "Pipeline management",
        "Health metrics and a weekly cadence",
      ],
      ["/services/sales-forecasting", "Sales forecasting", "Top-down, bottom-up and predictive"],
      [
        "/services/sales-cycle-analysis",
        "Sales cycle analysis",
        "Find the stage that's costing you",
      ],
      ["/services/deal-velocity-metrics", "Deal velocity metrics", "Stage-level benchmarking"],
      [
        "/services/deal-health-scoring",
        "Deal health scoring",
        "Catch at-risk deals before the slip",
      ],
      ["/services/win-loss-analysis", "Win/loss analysis", "Turn deal outcomes into strategy"],
    ],
  },
  {
    id: "retention",
    label: "Retention & expansion",
    intro: "The revenue you already won, kept and grown.",
    items: [
      [
        "/services/revenue-retention-strategy",
        "Revenue retention strategy",
        "The three levers behind NRR",
      ],
      [
        "/services/account-health-scoring",
        "Account health scoring",
        "Churn risk and expansion from one score",
      ],
      [
        "/services/account-expansion-strategy",
        "Account expansion",
        "Expansion motions that repeat",
      ],
    ],
  },
  {
    id: "process",
    label: "Process & data quality",
    intro: "The unglamorous foundation everything above depends on.",
    items: [
      [
        "/services/sales-process-automation",
        "Sales process automation",
        "Logging, tasks and escalations",
      ],
      ["/services/crm-data-quality", "CRM data quality", "Validation, dedup and audit trails"],
      [
        "/services/sales-methodology-standardization",
        "Sales methodology",
        "One process, documented and enforced",
      ],
      [
        "/services/sales-activity-tracking",
        "Sales activity tracking",
        "The leading indicators, and the ones that lie",
      ],
      [
        "/services/compensation-plan-alignment",
        "Compensation alignment",
        "Pay the behaviour you want",
      ],
    ],
  },
]

export const serviceGroups: ServiceGroup[] = raw.map((group) => ({
  ...group,
  items: group.items.map(([href, label, blurb]) => ({ href, label, blurb })),
}))

export const serviceCount = serviceGroups.reduce((sum, group) => sum + group.items.length, 0)

/** The overview every other page hangs off. */
export const moneyPage = "/services/revenue-operations-consultant"

/** The group a page belongs to, and its siblings within it. */
export function relatedServices(
  href: string,
): { group: ServiceGroup; siblings: ServiceItem[] } | null {
  const group = serviceGroups.find((g) => g.items.some((item) => item.href === href))
  if (!group) return null
  return { group, siblings: group.items.filter((item) => item.href !== href) }
}

/** One service by its path. Used for breadcrumbs and structured data. */
export function serviceByHref(href: string): ServiceItem | null {
  for (const group of serviceGroups) {
    const item = group.items.find((i) => i.href === href)
    if (item) return item
  }
  return null
}
