/**
 * Single source of truth for every piece of copy on the site.
 * Editing this file changes the page — no component surgery required.
 */

export const profile = {
  name: "Core-X Solutions",
  role: "Data, Automation & Revenue Operations Consultancy",
  shortRole: "Systems Consultancy",
  email: "hello@core-x.solutions",
  /** Set once the company LinkedIn page exists; every use site guards on null. */
  linkedin: null as string | null,
  /** Set NEXT_PUBLIC_SITE_URL at build time; this is the fallback. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://core-x.solutions",
  location: "Working internationally",
} as const

/**
 * The named principal.
 *
 * The site keeps its company voice — that fork decision is recorded in
 * CLAUDE.md and is not what this block changes. What it changes is that a buyer
 * can no longer read the whole site without learning whose judgement they would
 * be buying, which was the single largest hole in it: eight case studies, a
 * turn-down list and a written scope, all unsigned.
 *
 * Every field here has to be checkable, and the optional ones render only when
 * set — the same rule as `content/legal.ts`. `photo` stays null until there is a
 * real photograph of him: a named person beside a stock group shot is worse than
 * no photograph at all. `record` stays null until there are years and roles
 * somebody could verify. Do not fill either from imagination; that is the
 * mistake already recorded against the testimonials below.
 */
export const principal = {
  name: "Mehrdad Fashami",
  title: "Principal consultant",
  /** A path under /public, once a real photograph exists. */
  photo: null as string | null,
  photoAlt: null as string | null,
  /** e.g. "Fourteen years across ...". Null until it is a checkable fact. */
  record: null as string | null,
  /** The personal practice site, which carries the same byline. */
  site: "https://mehrdadfashami.com",
  heading: "Who you would be working with",
  paragraphs: [
    "The work is done by Mehrdad Fashami. Not scoped by one person and handed to another — the map, the argument about which system owns which field, and the pipelines that come out of it are the same pair of hands. That is why the engagement list is short and why \u201cselected projects\u201d is a description rather than a marketing line.",
    "He writes most of what is on this site, under his own name where the piece is his. If you want to know how he reasons about a system before you write anything, that is the faster read \u2014 the case studies say what changed, the writing says how the decision was made.",
  ],
  /** The bylined article that shows the reasoning, linked from /about. */
  writingSlug: "why-your-crm-and-finance-system-never-agree",
} as const

/**
 * The commercial floor, said once and in the positive.
 *
 * Null until there is a number to state. Everything that renders it guards on
 * null, so the site never implies a price it has not set — but until it is set,
 * the only screen against an hourly brief is the shape sentence in `finalCta`,
 * which tells a cheap shopper what this is not without telling a serious buyer
 * what it costs. Set it to a string like "\u00a38,000" and it appears on
 * /contact and in the closing block.
 */
export const engagementFloor = null as string | null

/** Anchors are rooted so the nav resolves from the sub-pages too. */
export const nav = [
  { label: "Services", href: "/services" },
  { label: "Case studies", href: "/case-studies" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Approach", href: "/#approach" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
] as const

export const hero = {
  eyebrow: "Data · Automation · Reporting",
  headingLead: "We connect the systems",
  headingAccent: "behind your business.",
  body:
    "Data, CRM, marketing, sales and operations — connected into one system that gives you clearer decisions, better visibility and less manual work.",
  primaryCta: { label: "Discuss a project", href: "/contact" },
  secondaryCta: { label: "See selected work", href: "#work" },
  trust: "Taking on new work.",
} as const

/**
 * The hero rail: one customer's journey across seven systems, in order, with
 * the time each step actually took. The last stop closes the loop — revenue
 * joined back to the click that started it. That loop is the whole pitch.
 */
export const journey = {
  label: "One customer. Seven systems. Nine days.",
  note: "An ordinary journey, and every handoff where it usually breaks.",
  stops: [
    {
      id: "click",
      system: "Meta Ads",
      event: "Campaign click",
      detail: "Source, campaign and cost captured before the form is even opened.",
      t: "T+0",
    },
    {
      id: "form",
      system: "GoHighLevel",
      event: "Form submitted",
      detail: "Lead created with the acquisition source still attached to it.",
      t: "T+2m",
    },
    {
      id: "route",
      system: "Salesforce",
      event: "Owner assigned",
      detail: "Routed on region and expected value, not on who is next in the list.",
      t: "T+3m",
    },
    {
      id: "call",
      system: "Aircall",
      event: "First call connected",
      detail: "4m 12s, outcome logged against the record rather than a spreadsheet.",
      t: "T+11m",
    },
    {
      id: "opp",
      system: "Salesforce",
      event: "Opportunity created",
      detail: "£14,400 at proposal stage, with the full call history behind it.",
      t: "T+2d",
    },
    {
      id: "paid",
      system: "Stripe",
      event: "Payment collected",
      detail: "Annual plan, first invoice settled, subscription state synced back.",
      t: "T+9d",
    },
    {
      id: "report",
      system: "Power BI",
      event: "Revenue attributed",
      detail: "£14,400 joined back to the click that started it. The loop closes.",
      t: "T+9d",
    },
  ],
} as const

export const platforms = {
  title: "We work across the full business data chain.",
  note: "Grouped by where each one sits in the chain.",
  groups: [
    { kind: "CRM", items: ["Salesforce", "GoHighLevel", "HubSpot", "Pipedrive"] },
    { kind: "Acquisition", items: ["Google Ads", "Meta Ads", "LinkedIn Ads"] },
    { kind: "Analytics", items: ["GA4", "PostHog"] },
    { kind: "Calls", items: ["Aircall"] },
    { kind: "Payments", items: ["Stripe", "Chargebee"] },
    { kind: "Warehouse", items: ["BigQuery", "Supabase", "PostgreSQL"] },
    { kind: "Reporting", items: ["Power BI"] },
    { kind: "Automation", items: ["n8n", "Python", "Webhooks"] },
  ],
} as const

export const problems = {
  titleLead: "Businesses rarely have a data problem.",
  titleAccent: "They have a connection problem.",
  subtitle:
    "The biggest issues usually happen between systems, teams and reporting processes.",
  /**
   * `evidence` is the symptom rendered as data — generic illustrations of the
   * shape of each problem, not figures from any client. The row flagged `bad`
   * is the one that gives the problem away.
   */
  cards: [
    {
      title: "Your systems disagree",
      body: "CRM says one thing. Finance says another. Marketing reports something else.",
      outcome: "We create one reliable source of truth.",
      evidenceLabel: "Leads, last month",
      evidence: [
        { k: "Ad platforms", v: "1,431", bad: false },
        { k: "CRM", v: "1,284", bad: false },
        { k: "Finance", v: "1,190", bad: true },
      ],
    },
    {
      title: "Reporting is still manual",
      body:
        "Teams export files, update spreadsheets, reconcile numbers and rebuild the same reports every week.",
      outcome: "We automate the workflow.",
      evidenceLabel: "One reporting cycle",
      evidence: [
        { k: "Mon 09:00", v: "Export 6 files", bad: false },
        { k: "Mon 15:00", v: "Reconcile by hand", bad: false },
        { k: "Wed 11:00", v: "Report finally out", bad: true },
      ],
    },
    {
      title: "Revenue cannot be explained",
      body:
        "You know how much revenue came in, but cannot confidently explain which activity generated it.",
      outcome: "We connect marketing and sales activity to revenue.",
      evidenceLabel: "Closed revenue, by source",
      evidence: [
        { k: "Attributed", v: "38%", bad: false },
        { k: "Partial / guessed", v: "24%", bad: false },
        { k: "Unknown", v: "38%", bad: true },
      ],
    },
    {
      title: "Opportunities disappear between systems",
      body:
        "Leads, calls, follow-ups and customer activity exist, but nobody sees the full journey.",
      outcome: "We connect the customer journey.",
      evidenceLabel: "Inbound leads, one quarter",
      evidence: [
        { k: "Received", v: "2,140", bad: false },
        { k: "Contacted", v: "1,655", bad: false },
        { k: "Never contacted", v: "485", bad: true },
      ],
    },
  ],
} as const

/**
 * Client names are withheld under confidentiality, which is why each study is
 * identified by sector rather than by company.
 *
 * `featured` picks the three that appear on the home page; the rest live on
 * /case-studies. `outcome` maps to the outcome framework — revenue, cost, time,
 * visibility, reliability — and drives the index at the top of that page.
 */
export type WorkflowSpec = {
  label: string
  beforeLabel: string
  afterLabel: string
  before: string[]
  after: string[]
  tail: { top: string; bottom: string }
}

export type CaseStudy = {
  id: string
  /** Featured studies appear on the home page; all of them appear on /case-studies. */
  featured: boolean
  outcome: "Revenue" | "Cost" | "Time" | "Visibility" | "Reliability"
  metric: string
  metricUnit: string
  title: string
  sector: string
  problem: string
  change: string
  outcomeText: string
  results: { value: string; label: string }[]
  stack: string[]
  visual: "workflow" | "customer" | "attribution" | "quality" | "dormant" | "calls" | "matrix"
  /** Only the workflow visual needs one; it renders the case study's own steps. */
  workflow?: WorkflowSpec
}

export const caseStudies: CaseStudy[] = [
  {
    id: "reporting-automation",
    featured: true,
    outcome: "Time",
    metric: "30 hrs → 2 hrs",
    metricUnit: "per week",
    title: "Reporting Automation",
    sector: "Multi-channel training provider",
    problem:
      "A recurring management reporting process relied on manual exports from five platforms, spreadsheet updates, data checks and repeated reconciliation. By the time the numbers were agreed, the week they described was already over.",
    change:
      "The workflow was rebuilt around scheduled data pipelines, a modelled reporting layer with agreed KPI definitions, automated validation rules and alerting when a source stops delivering.",
    outcomeText:
      "Reporting preparation dropped from roughly 30 hours per week to around 2 hours of review and validation. Numbers now arrive before the meeting instead of after it.",
    results: [
      { value: "93%", label: "Less manual preparation" },
      { value: "6", label: "Sources consolidated" },
      { value: "Daily", label: "Refresh instead of weekly" },
    ],
    stack: ["BigQuery", "n8n", "Power BI", "Google Ads", "Meta Ads", "Stripe"],
    visual: "workflow",
    workflow: {
      label: "Weekly reporting process",
      beforeLabel: "Before — manual — ~30 hrs / week",
      afterLabel: "After — automated — ~2 hrs / week",
      before: ["Export", "Clean", "Merge", "Check", "Fix", "Send"],
      after: ["Pipeline", "Validate", "Publish"],
      tail: { top: "Human review", bottom: "2 hrs" },
    },
  },
  {
    id: "lead-sales-intelligence",
    featured: true,
    outcome: "Visibility",
    metric: "One customer.",
    metricUnit: "One view.",
    title: "360° Lead & Sales Intelligence",
    sector: "Subscription business with an outbound sales team",
    problem:
      "CRM records, call activity, marketing source data and payment history lived in four systems. Nobody could answer a simple question — what actually happened with this customer — without opening four tabs and guessing.",
    change:
      "Lead, call, opportunity and payment signals were resolved to a single customer identity, cleaned of duplicates, and combined into one unified view with follow-up quality and pipeline movement made visible.",
    outcomeText:
      "Sales teams and management gained one clear picture of customer activity, follow-up and opportunity status — including the leads that had never been contacted at all.",
    results: [
      { value: "4 → 1", label: "Systems to check" },
      { value: "100%", label: "Calls matched to CRM records" },
      { value: "Visible", label: "Follow-up quality per rep" },
    ],
    stack: ["Salesforce", "Aircall", "GoHighLevel", "Chargebee", "PostgreSQL"],
    visual: "customer",
  },
  {
    id: "revenue-attribution",
    featured: true,
    outcome: "Revenue",
    metric: "Marketing → Revenue",
    metricUnit: "end to end",
    title: "Revenue Attribution",
    sector: "Paid-acquisition-led business, multiple markets",
    problem:
      "Marketing spend, lead activity and closed revenue were held in separate systems with inconsistent campaign naming. Channel performance was argued about monthly and never settled.",
    change:
      "Campaign, lead, opportunity and payment data were connected through one attribution model, with enforced naming standards, validated tracking and revenue joined back to the original acquisition source.",
    outcomeText:
      "Management could finally see which channels and campaigns were contributing revenue rather than volume — and move budget on evidence instead of opinion.",
    results: [
      { value: "Spend → £", label: "Joined at customer level" },
      { value: "3", label: "Ad platforms reconciled" },
      { value: "CAC / ROAS", label: "Reported on real revenue" },
    ],
    stack: ["Google Ads", "Meta Ads", "LinkedIn Ads", "GA4", "BigQuery", "Stripe"],
    visual: "attribution",
  },
  {
    id: "crm-data-quality",
    featured: false,
    outcome: "Reliability",
    metric: "31% → 0.4%",
    metricUnit: "duplicate records",
    title: "CRM Data Recovery",
    sector: "B2B services group, two prior migrations",
    problem:
      "Years of imports, manual entry and two migrations had left duplicate companies, contacts attached to the wrong parent, ownership that no longer matched the team, and campaign names that never agreed with the ad platform. Every report began with an argument about the data rather than the result.",
    change:
      "Deduplication on deterministic keys first and fuzzy matching second, with a documented survivorship rule for which value wins. Ownership was rebuilt from an agreed source of record, campaign naming was enforced at the point of entry, and the validation now runs nightly instead of once during a cleanup project.",
    outcomeText:
      "The CRM moved from a system people worked around to the one people quote. The duplicate rate stays under half a percent because the rules run continuously rather than as a one-off exercise.",
    results: [
      { value: "0.4%", label: "Duplicate rate, sustained" },
      { value: "Nightly", label: "Validation instead of ad-hoc" },
      { value: "1", label: "Agreed source of record" },
    ],
    stack: ["Salesforce", "Python", "BigQuery", "n8n"],
    visual: "quality",
  },
  {
    id: "dormant-revenue",
    featured: false,
    outcome: "Revenue",
    metric: "£240k",
    metricUnit: "surfaced from records already owned",
    title: "Dormant Opportunity Recovery",
    sector: "Subscription business, five years of history",
    problem:
      "Leads that were never contacted, opportunities abandoned mid-pipeline, and customers who had lapsed quietly. All of it sat in systems nobody queried, because answering the question meant joining four of them by hand.",
    change:
      "Every dormant record was scored against last contact, acquisition cost, previous value and the stage it stalled at — then surfaced as a working queue with the reason attached, refreshed each morning rather than exported once.",
    outcomeText:
      "The sales team gets a daily list of real opportunities drawn from data the business had already paid for, instead of a static export that goes stale within a week.",
    results: [
      { value: "4,800", label: "Records re-scored" },
      { value: "£240k", label: "Pipeline surfaced" },
      { value: "Daily", label: "Queue refresh" },
    ],
    stack: ["Salesforce", "Chargebee", "BigQuery", "Power BI"],
    visual: "dormant",
  },
  {
    id: "call-intelligence",
    featured: false,
    outcome: "Visibility",
    metric: "Every call,",
    metricUnit: "actually read",
    title: "Call Intelligence",
    sector: "High-volume inbound sales team",
    problem:
      "Several hundred calls a week, each logged as a duration and a disposition picked from a dropdown. Managers sampled a handful; the rest was invisible. Objections, competitor mentions and pricing pushback never reached a report.",
    change:
      "Calls are transcribed, then classified against a taxonomy the sales team agreed to — outcome, objection, competitor named, next step committed — and written back onto the CRM record. The model summarises and tags; the rep still decides what happens next.",
    outcomeText:
      "Management can see what customers actually said, at full volume rather than by sample. Coaching moved from anecdote to the objection the numbers kept pointing at.",
    results: [
      { value: "100%", label: "Of calls classified" },
      { value: "6", label: "Objection categories tracked" },
      { value: "Same day", label: "Written back to the record" },
    ],
    stack: ["Aircall", "Python", "Salesforce", "BigQuery"],
    visual: "calls",
  },
  {
    id: "one-warehouse",
    featured: false,
    outcome: "Visibility",
    metric: "9 sources.",
    metricUnit: "One model.",
    title: "One Warehouse, Three Brands",
    sector: "Group operating three trading brands",
    problem:
      "Three brands, three CRMs, two ad accounts each, and a finance system that knew nothing about any of them. Group-level questions took a week and produced a spreadsheet nobody fully trusted.",
    change:
      "A warehouse with one modelled layer above it: shared customer and campaign dimensions, brand carried as a column rather than as a separate report, and every definition agreed in writing before anything was built.",
    outcomeText:
      "Group and brand numbers now come out of the same model, so they cannot disagree with each other. New sources plug into the existing shape instead of starting another spreadsheet.",
    results: [
      { value: "9", label: "Sources conformed" },
      { value: "1", label: "Shared dimensional model" },
      { value: "Both", label: "Group and brand from one source" },
    ],
    stack: ["BigQuery", "Python", "n8n", "Power BI", "Salesforce", "HubSpot"],
    visual: "matrix",
  },
  {
    id: "lead-routing",
    featured: false,
    outcome: "Time",
    metric: "2 hrs → 4 min",
    metricUnit: "first response",
    title: "Lead Routing & Follow-up",
    sector: "Inbound-led services business",
    problem:
      "New enquiries landed in a shared inbox and were picked up by whoever noticed first. Response time depended on the hour of the day, and nobody could see which leads had been left alone.",
    change:
      "Validation, enrichment and routing on rules the team agreed — territory, value band and current load — with an SLA clock running on every record and an escalation when it expires.",
    outcomeText:
      "First response fell from around two hours to four minutes. Leads that slip are now visible before the week ends rather than after the quarter does.",
    results: [
      { value: "4 min", label: "Median first response" },
      { value: "0", label: "Leads unassigned overnight" },
      { value: "Per rep", label: "SLA performance visible" },
    ],
    stack: ["GoHighLevel", "Salesforce", "n8n", "Slack"],
    visual: "workflow",
    workflow: {
      label: "Inbound lead handling",
      beforeLabel: "Before — shared inbox — ~2 hrs",
      afterLabel: "After — routed on rules — ~4 min",
      before: ["Arrives", "Noticed", "Claimed", "Checked", "Assigned", "Called"],
      after: ["Validate", "Enrich", "Route"],
      tail: { top: "SLA clock", bottom: "4 min" },
    },
  },
]

export const featuredCaseStudies = caseStudies.filter((c) => c.featured)

export const caseStudiesPage = {
  eyebrow: "Case studies",
  title: "Eight problems, and what we did about them.",
  intro:
    "Engagements we have taken on, each tagged with the outcome it was judged against. Every one crosses more than one system — which is usually why it landed with us rather than with a specialist inside one of them.",
  /** Separate from `intro`: search engines truncate past ~160 characters. */
  metaDescription:
    "Eight engagements in revenue operations, attribution and CRM data quality — the problem, the work, and what changed. Each one crosses several systems.",
  disclosure:
    "Client names are withheld under confidentiality, so each engagement is identified by sector. Everything else — the problem, the work and the result — is as it happened.",
  indexLabel: "On this page",
} as const

/**
 * Positioning, argued rather than asserted. Four specialists each own a
 * territory; the failures live in the seams between them, and nobody is paid
 * to own a seam. The bracket spanning all four in the UI is the claim.
 */
export const positioning = {
  titleLead: "Most specialists work inside one system.",
  titleAccent: "We work between them.",
  body:
    "Every one of these people is good at their job. None of them is responsible for what happens in the gap after it.",
  territories: [
    { owner: "A paid media agency", scope: "Ad platforms, campaigns, budget, creative" },
    { owner: "A CRM consultant", scope: "Objects, fields, pipelines, automation rules" },
    { owner: "A RevOps hire", scope: "Process, stages, forecasting, sales discipline" },
    { owner: "A BI contractor", scope: "Dashboards, models, definitions, reporting" },
  ],
  /** One fewer than the territories — a seam sits between each adjacent pair. */
  seams: [
    "Campaign data lands in the CRM with the source stripped out.",
    "A pipeline stage means one thing to sales and another to the model.",
    "The dashboard reports revenue nobody can trace back to a campaign.",
  ],
  closer: "Nobody is hired to own a seam. That is the part we take.",
  bracketLabel: "Our scope",
} as const

export const capabilities = [
  {
    key: "connect",
    title: "Connect",
    description: "Connect the platforms your business already relies on.",
    items: [
      "APIs and webhooks",
      "CRM integrations",
      "Data pipelines",
      "Data warehouses",
      "CRM data quality",
      "System architecture",
      "Payment integrations",
      "Marketing platform integrations",
    ],
  },
  {
    key: "understand",
    title: "Understand",
    description: "Turn disconnected activity into attribution and reporting you can trust.",
    items: [
      "Business intelligence",
      "Revenue attribution",
      "Lead-to-revenue reporting",
      "Marketing analytics",
      "Customer journey analysis",
      "Sales reporting",
      "Executive dashboards",
      "Funnel analytics",
    ],
  },
  {
    key: "automate",
    title: "Automate",
    description:
      "Remove repetitive work and automate the processes that should not be manual.",
    items: [
      "Operational workflows",
      "CRM automation",
      "AI workflows",
      "Data validation",
      "Alerts and monitoring",
      "Reporting automation",
      "Lead routing",
    ],
  },
] as const

export const architecture = {
  titleLead: "From disconnected tools",
  titleAccent: "to one working system.",
  body:
    "Every engagement ends up looking like some version of this. The names change; the shape rarely does.",
  sources: [
    { id: "google-ads", label: "Google Ads", note: "Spend, campaigns, clicks" },
    { id: "meta-ads", label: "Meta Ads", note: "Spend, campaigns, creative" },
    { id: "salesforce", label: "Salesforce", note: "Leads, opportunities, owners" },
    { id: "gohighlevel", label: "GoHighLevel", note: "Contacts, pipelines, funnels" },
    { id: "aircall", label: "Aircall", note: "Calls, outcomes, follow-up" },
    { id: "stripe", label: "Stripe", note: "Payments, refunds, subscriptions" },
    { id: "ga4", label: "GA4", note: "Sessions, sources, conversions" },
  ],
  stages: [
    {
      id: "data-layer",
      label: "Data layer",
      note: "One warehouse. Deduplicated, standardised, identity-resolved, versioned.",
    },
    {
      id: "business-logic",
      label: "Business logic",
      note: "Agreed KPI definitions, attribution rules, segments and thresholds.",
    },
  ],
  outputs: [
    {
      id: "dashboard",
      label: "Dashboard",
      note: "Executive, marketing, sales, revenue and customer journey reporting.",
      children: ["Executive view", "Marketing performance", "Sales performance", "Revenue attribution"],
    },
    {
      id: "automation",
      label: "Automation",
      note: "Triggers that act on the data instead of waiting for someone to notice.",
      children: ["Lead routing", "Follow-up triggers", "Data validation alerts", "Anomaly detection"],
    },
  ],
} as const

export const approach = {
  title: "How we work",
  subtitle:
    "Four stages. Each one ends with something you can see, use or hand to your team.",
  steps: [
    {
      n: "01",
      title: "Diagnose",
      body: "Understand what is broken, unclear, duplicated or unnecessarily manual.",
      deliverable: "A written map of your systems, data gaps and the cost of each one.",
    },
    {
      n: "02",
      title: "Design",
      body: "Define the simplest architecture that solves the actual business problem.",
      deliverable: "An architecture and KPI definition your team agrees with before build.",
    },
    {
      n: "03",
      title: "Build",
      body: "Connect, automate, validate and document the solution.",
      deliverable: "A working system, monitored, documented and handed over.",
    },
    {
      n: "04",
      title: "Improve",
      body: "Use the resulting data to identify the next opportunity.",
      deliverable: "A prioritised shortlist of what is now worth fixing next.",
    },
  ],
  statement: {
    lead: "You do not need to manage the technical details.",
    accent: "That is part of the job.",
  },
} as const

export const about = {
  title: "Built to work between systems.",
  paragraphs: [
    "We work with businesses that need senior-level data, analytics and automation capability without building another internal department.",
    "Our work combines business intelligence, marketing analytics, CRM architecture, automation and system integration.",
    "We are most useful when the problem crosses multiple platforms, teams or data sources and needs a team that understands both the business problem and the technical implementation.",
  ],
  tags: [
    "Data & BI",
    "Marketing Analytics",
    "Revenue Operations",
    "CRM",
    "Automation",
    "AI Workflows",
    "System Integration",
  ],
  facts: [
    { label: "Engagement", value: "Fixed scope, retainer or implementation + support" },
    { label: "Works with", value: "Founders, CEOs, COOs, CMOs, Heads of Sales & RevOps" },
    { label: "Availability", value: "Selected projects, working internationally" },
  ],
} as const

/**
 * NOTE FOR WHOEVER MAINTAINS THIS FILE
 * -----------------------------------
 * NOT RENDERED on this site. The section is deliberately left out of
 * src/app/page.tsx: these four quotes were drafted in-house, and the same
 * words attributed to the same named people already appear on another live
 * site. Identical testimonials across two businesses is trivially checkable
 * and would discredit both. Replace with real, permissioned quotes, then add
 * <Testimonials /> back to the page.
 * Under the Digital Markets, Competition and Consumers Act 2024 publishing a
 * testimonial nobody gave is a banned practice, so before this site is pointed
 * at a live domain each quote needs to be either replaced with a real one or
 * confirmed in writing by the client it is attributed to.
 */
export const testimonials = [
  {
    quote:
      "We stopped arguing about whose number was right. That sounds small. It changed how the whole leadership meeting runs.",
    role: "Commercial Director",
    org: "B2B training group",
  },
  {
    quote:
      "The first two weeks were uncomfortable — he showed us leads we had paid for and never contacted. Then he built the thing that makes sure it cannot happen again.",
    role: "Head of Sales",
    org: "Subscription fintech",
  },
  {
    quote:
      "Monday used to cost me a full day of exports and formatting. Now I spend twenty minutes checking a report that built itself overnight.",
    role: "Marketing Operations Manager",
    org: "Multi-brand e-commerce",
  },
  {
    quote:
      "He is the only external person we have worked with who understood the Salesforce side and the finance side well enough to make them agree with each other.",
    role: "Chief Operating Officer",
    org: "Professional services firm",
  },
] as const

export const bestFit = {
  title: "Where we are most useful",
  intro:
    "We work best with growing businesses where operational complexity has started to outgrow spreadsheets and disconnected tools.",
  items: [
    "You use several SaaS platforms that do not talk to each other",
    "You have meaningful lead or customer volume",
    "Your reporting still depends heavily on spreadsheets",
    "You need better visibility across departments",
    "You have recurring processes worth automating",
    "You need reliable marketing-to-revenue reporting",
    "You want one person to own the problem end-to-end",
    "Your problem crosses more than one system",
  ],
  highlight: "Best suited to projects where the problem crosses more than one system.",
  notFit: {
    title: "Probably not a fit",
    items: [
      "A single one-off chart or spreadsheet formula",
      "Hourly technical support without a defined outcome",
      "Work that stays inside one tool and one team",
    ],
  },
} as const

export const finalCta = {
  headline: "Have a messy system?",
  sub: "That is usually where we can help.",
  body:
    "Tell us what is not working, what is still manual, or what you cannot currently see clearly. If it is not something we should take on, we will tell you that too.",
  primary: "Discuss a project",
  secondary: "Email us",
  /**
   * The commercial screen, said once in the positive. The rest of the site says
   * it in negatives — no hourly tickets, no one-off charts — which reads as
   * modesty rather than as a floor. This is the sentence a cheap brief bounces
   * off.
   */
  shape:
    "Engagements are scoped to an outcome and priced as a fixed scope or a retainer, not by the hour. If the work is small enough to bill hourly, it is not work we should be taking.",
  prompts: [
    "Our numbers do not match between systems",
    "Reporting takes too long every week",
    "We cannot explain where revenue comes from",
    "Leads are falling through the process",
  ],
} as const
