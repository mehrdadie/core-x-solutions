/**
 * Turns the raw keyword export into the two seed tables the generator reads.
 *
 *   node scripts/build-topics.mjs            # report only
 *   node scripts/build-topics.mjs --write    # rewrite supabase/seed/keywords.sql
 *
 * The export is a scrape: it carries navigational queries ("github n8n"),
 * competitor names ("go nimbly revops consultant"), geographies this business
 * does not serve ("crm consultants perth") and two rows of scraper telemetry.
 * Feeding those to a writer produces articles nobody searching for this
 * business will ever want, so they are dropped here rather than filtered later.
 *
 * What survives is grouped into clusters. A cluster is one article's worth of
 * intent — a focus phrase, the variants that mean the same thing, and the
 * People-Also-Ask questions that belong under it. The generator frames the
 * actual angle at write time; this file only decides what belongs together.
 *
 * Rules are ordered and the first match wins, so the specific ones come before
 * the general ones. Adding keywords later means adding rows to the CSV and
 * re-running with --write; unmatched phrases are reported, never silently lost.
 */

import { readFileSync, writeFileSync } from "node:fs"
import { fileURLToPath } from "node:url"
import { dirname, join } from "node:path"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")

/* ── Parsing ──────────────────────────────────────────────────────────────── */

/** Minimal RFC 4180 reader — the export quotes fields that contain commas. */
function parseCsv(text) {
  const rows = []
  let row = []
  let field = ""
  let quoted = false

  for (let i = 0; i < text.length; i++) {
    const c = text[i]

    if (quoted) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"'
          i++
        } else quoted = false
      } else field += c
      continue
    }

    if (c === '"') quoted = true
    else if (c === ",") {
      row.push(field)
      field = ""
    } else if (c === "\n") {
      row.push(field)
      if (row.some((f) => f.trim() !== "")) rows.push(row)
      row = []
      field = ""
    } else if (c !== "\r") field += c
  }

  row.push(field)
  if (row.some((f) => f.trim() !== "")) rows.push(row)
  return rows
}

/* ── What gets thrown away ────────────────────────────────────────────────── */

const DROP = [
  // Scraper telemetry that ended up in the phrase column.
  [/^source: google serp/i, "scraper telemetry"],
  [/^no captcha/i, "scraper telemetry"],

  // Named competitors and vendors — writing to these ranks them, not us.
  [/\b(go nimbly|skaled|scaled consulting|think revops|revops coop)\b/i, "competitor"],
  [/\b(ibm|ntt data|hdfc|alberta works)\b/i, "unrelated brand"],
  [/^github n8n$/i, "navigational"],

  // Freelance marketplaces: the searcher wants a gig platform, not a consultancy.
  [/\b(upwork|fiverr)\b/i, "marketplace intent"],

  // Geographies this business does not sell into, or that are simply noise.
  [/\b(perth|namibia|nepal|canada|gilbert)\b/i, "out-of-market geography"],

  // Queries about the phrase itself rather than the subject.
  [/\b(icon|full form)\b/i, "not a content query"],
  [/^consulting with or consulting for$/i, "grammar query"],
  [/workplace violence/i, "unrelated sense of the phrase"],

  // Career-advice questions that attract readers who will never buy.
  [/^is 30 too old/i, "career advice"],
  [/^is consultant higher than/i, "career advice"],
  [/^is it hard to be an it consultant/i, "career advice"],
  [/^can i make 200k/i, "career advice"],
  [/^is business intelligence good pay/i, "career advice"],
  [/^how much do (revops|fractional sales leaders) make/i, "career advice"],
  [/^how much does a revops analyst make/i, "career advice"],
  [/^how do you get into revops/i, "career advice"],
]

/* ── Clusters ─────────────────────────────────────────────────────────────── */

/**
 * `hint` is not a headline. It tells the writer what question the cluster is
 * really asking so it can find its own angle, and it is what stops two
 * neighbouring clusters producing the same article twice.
 */
const CLUSTERS = [
  /* Attribution ---------------------------------------------------------- */
  {
    id: "attribution-mmm-vs-mta",
    theme: "attribution",
    hint: "Media mix modelling against multi-touch attribution: what each one can and cannot answer, and which a mid-sized B2B company actually needs.",
  },
  {
    id: "attribution-hubspot",
    theme: "attribution",
    hint: "HubSpot's own attribution reporting — the models it ships, what contact-create reports are for, and where its numbers stop matching finance.",
  },
  {
    id: "attribution-revenue-calculation",
    theme: "attribution",
    hint: "Actually calculating attributed revenue: the join from closed-won amount back to source, the formula, and the rounding arguments it starts.",
  },
  {
    id: "attribution-revenue-basics",
    theme: "attribution",
    hint: "Revenue attribution as distinct from marketing attribution — crediting booked money rather than sessions, and why that changes the answer.",
  },
  {
    id: "attribution-b2b",
    theme: "attribution",
    hint: "Why B2B attribution is harder than B2C: long cycles, buying committees, offline touches and a CRM that disagrees with the ad platforms.",
  },
  {
    id: "attribution-models",
    theme: "attribution",
    hint: "The attribution models themselves — first, last, linear, time-decay, U/W-shaped, data-driven — and how to pick without pretending one is true.",
  },
  {
    id: "attribution-tools",
    theme: "attribution",
    hint: "Attribution software and platforms: what the category actually does, when a tool is warranted, and when it is a warehouse query instead.",
  },
  {
    id: "attribution-dashboard",
    theme: "attribution",
    hint: "Designing an attribution report or dashboard people trust — which cuts belong on it and which invite the wrong argument.",
  },
  {
    id: "attribution-strategy",
    theme: "attribution",
    hint: "The attribution problem as an operating problem: methodology, credit rules, and getting sales and marketing to agree before the tooling.",
  },
  {
    id: "attribution-basics",
    theme: "attribution",
    hint: "Attribution explained from zero — what the word means in marketing, with worked examples, for someone who has just been asked for one.",
  },

  /* CRM integration ------------------------------------------------------ */
  {
    id: "crm-integration-ads",
    theme: "crm_integration",
    hint: "Wiring a CRM to Meta, Google and LinkedIn ad platforms in both directions: lead ingest one way, conversions back the other.",
  },
  {
    id: "crm-integration-erp",
    theme: "crm_integration",
    hint: "CRM to ERP: where the record boundary sits, which system owns the customer, and what breaks when both think they do.",
  },
  {
    id: "crm-integration-finance",
    theme: "crm_integration",
    hint: "CRM to accounting — QuickBooks, Xero, Zoho Books. Invoice and deal reconciliation, and the mismatch that shows up at month end.",
  },
  {
    id: "crm-integration-email",
    theme: "crm_integration",
    hint: "CRM and the mailbox — Outlook, Gmail, Microsoft 365. What logging actually captures, and the privacy questions it raises.",
  },
  {
    id: "crm-integration-ecommerce",
    theme: "crm_integration",
    hint: "CRM with Shopify and WordPress: order history as CRM context, and keeping the customer record singular across both.",
  },
  {
    id: "crm-integration-website",
    theme: "crm_integration",
    hint: "Connecting a website to a CRM — forms, tracking, and carrying acquisition source through to the record without losing it.",
  },
  {
    id: "crm-integration-salesforce",
    theme: "crm_integration",
    hint: "Salesforce integration specifically: its API surface, HubSpot-to-Salesforce sync, and the field mapping decisions that outlive the project.",
  },
  {
    id: "crm-integration-hubspot",
    theme: "crm_integration",
    hint: "HubSpot integration specifically — the marketplace, what its native connectors do and do not cover, and when to build instead.",
  },
  {
    id: "crm-integration-zoho",
    theme: "crm_integration",
    hint: "Zoho CRM integration across its own suite and outside it — Books, Campaigns, WhatsApp, Outlook, and the website.",
  },
  {
    id: "crm-integration-telephony",
    theme: "crm_integration",
    hint: "Telephony and CRM (3CX and similar): screen pops, call logging, and whether call data earns its place on the record.",
  },
  {
    id: "crm-integration-api",
    theme: "crm_integration",
    hint: "Integrating at the API level: auth, rate limits, pagination, retries and idempotency — the parts that decide whether a sync survives.",
  },
  {
    id: "crm-integration-consultant",
    theme: "crm_integration",
    hint: "What a CRM or systems integration consultant does, the skills the work needs, and how to tell a good engagement from an expensive one.",
  },
  {
    id: "crm-integration-services",
    theme: "crm_integration",
    hint: "Buying CRM integration as a service — scoping it, what the deliverable should be, and the questions to ask before signing.",
  },
  {
    id: "crm-integration-tools",
    theme: "crm_integration",
    hint: "The integration tooling landscape: iPaaS, native connectors, custom code, and choosing between them on maintenance cost.",
  },
  {
    id: "crm-integration-basics",
    theme: "crm_integration",
    hint: "What CRM integration means, with concrete examples, for someone who has been told they need one and is not sure what they are buying.",
  },
  {
    id: "crm-basics",
    theme: "crm_integration",
    hint: "CRM from first principles — what it stands for, the types, whether a spreadsheet counts, and what AI does and does not change.",
  },

  /* Reporting ------------------------------------------------------------ */
  {
    id: "reporting-excel",
    theme: "reporting",
    hint: "Automating reporting inside Excel — Power Query, refresh schedules, and the point at which the workbook stops being the right answer.",
  },
  {
    id: "reporting-python",
    theme: "reporting",
    hint: "Report generation in Python: scheduled scripts, templated output, and what to put in version control so it survives its author.",
  },
  {
    id: "reporting-financial",
    theme: "reporting",
    hint: "Financial reporting automation, where the close calendar and audit trail constrain everything the automation is allowed to do.",
  },
  {
    id: "reporting-enterprise-platforms",
    theme: "reporting",
    hint: "Scheduled reporting inside SAP, Workday, ServiceNow and Tableau — what each one automates natively before anything is bought.",
  },
  {
    id: "reporting-ai",
    theme: "reporting",
    hint: "Using AI in reporting: where a model genuinely helps, where it fabricates, and the checks that have to sit around it.",
  },
  {
    id: "reporting-single-source-of-truth",
    theme: "reporting",
    hint: "Single source of truth as a practice rather than a slogan — shared definitions, one owner per metric, and what it costs to keep.",
  },
  {
    id: "reporting-customer-journey",
    theme: "reporting",
    hint: "Reporting the customer journey end to end: the stages, the systems each one lives in, and stitching them without double counting.",
  },
  {
    id: "reporting-client-facing",
    theme: "reporting",
    hint: "Automated reporting for clients — agency and consultancy delivery, white-labelling, and the cadence that survives contact with clients.",
  },
  {
    id: "reporting-tools",
    theme: "reporting",
    hint: "The reporting automation tool landscape, and choosing on the criteria that matter after month three rather than during the demo.",
  },
  {
    id: "reporting-process",
    theme: "reporting",
    hint: "The process of automating a report: auditing what exists, the framework, templates, and what to decommission afterwards.",
  },
  {
    id: "reporting-basics",
    theme: "reporting",
    hint: "What reporting automation means and what it does not, for someone who has been asked to automate a report and is starting from zero.",
  },

  /* Automation ----------------------------------------------------------- */
  {
    id: "lead-routing-salesforce",
    theme: "automation",
    hint: "Lead routing in Salesforce: assignment rules, queues, Flow, round-robin, and why the rules outgrow the interface that holds them.",
  },
  {
    id: "lead-routing-hubspot",
    theme: "automation",
    hint: "Lead routing in HubSpot — workflows, rotation, and the limits people meet once the territory model gets real.",
  },
  {
    id: "lead-routing-scoring",
    theme: "automation",
    hint: "How routing and scoring fit together: scoring decides urgency, routing decides ownership, and conflating them breaks both.",
  },
  {
    id: "lead-routing-tools",
    theme: "automation",
    hint: "Lead routing software as a category — when native rules are enough and what a dedicated platform is really being bought for.",
  },
  {
    id: "lead-routing-basics",
    theme: "automation",
    hint: "Lead routing explained: what it is, the common models, and a template for writing rules that a new hire can read.",
  },
  {
    id: "crm-automation",
    theme: "automation",
    hint: "CRM automation in general — what is worth automating, what should stay manual, and the cost of automating a bad process faster.",
  },

  /* Platforms ------------------------------------------------------------ */
  {
    id: "n8n-basics",
    theme: "platform",
    hint: "What n8n is and how it differs from the SaaS automation tools — self-hosting, Docker, the code node, and the fair-code licence.",
  },
  {
    id: "n8n-pricing",
    theme: "platform",
    hint: "n8n pricing and total cost: cloud tiers against self-hosting, and what execution-based pricing does as volume grows.",
  },
  {
    id: "n8n-ai",
    theme: "platform",
    hint: "AI agents in n8n — what the agent nodes do, where they belong in a workflow, and how to keep them from acting unsupervised.",
  },
  {
    id: "n8n-consultant",
    theme: "platform",
    hint: "Hiring n8n expertise: the partner and certification programmes, what a consultant should deliver, and how to scope the work.",
  },
  {
    id: "n8n-comparison",
    theme: "platform",
    hint: "n8n against the alternatives, judged on what breaks at scale rather than on connector counts.",
  },
  {
    id: "gohighlevel-pricing",
    theme: "platform",
    hint: "GoHighLevel pricing: the tiers, the agency/SaaS-mode economics, and the costs that only appear after onboarding.",
  },
  {
    id: "gohighlevel-consultant",
    theme: "platform",
    hint: "Working with a GoHighLevel consultant — what the engagement covers, and the build decisions that are hard to reverse later.",
  },
  {
    id: "gohighlevel-basics",
    theme: "platform",
    hint: "What GoHighLevel is, who it fits, how long it takes to learn, and where it stops being the right system.",
  },
  {
    id: "power-bi-reporting",
    theme: "platform",
    hint: "Power BI as the reporting layer: refresh, gateways, connecting it to a CRM, and keeping report logic out of the dashboard.",
  },
  {
    id: "salesforce-reporting",
    theme: "platform",
    hint: "Automating reports inside Salesforce — subscriptions, scheduled exports, and where its native reporting runs out.",
  },
  {
    id: "hubspot-revops",
    theme: "platform",
    hint: "HubSpot as a RevOps platform: journey reporting, the operations layer, and what a HubSpot RevOps consultant is engaged to fix.",
  },
  {
    id: "zoho-crm-automation",
    theme: "platform",
    hint: "Automation inside Zoho CRM — blueprints, workflow rules, functions, and where the suite's own tooling reaches its limit.",
  },

  /* Consulting ----------------------------------------------------------- */
  {
    id: "revops-definition",
    theme: "consultant",
    hint: "What revenue operations actually is — against sales ops, against DevOps, and what the function owns day to day.",
  },
  {
    id: "revops-fractional",
    theme: "consultant",
    hint: "Fractional and as-a-service RevOps: when part-time senior ownership beats a hire, and how the engagement is structured.",
  },
  {
    id: "revops-consultant",
    theme: "consultant",
    hint: "Engaging a RevOps consultant — the shape of the work, what the first ninety days should produce, and how to judge it.",
  },
  {
    id: "automation-consultant",
    theme: "consultant",
    hint: "What a data and automation consultant does, and the difference between buying tooling and buying a working system.",
  },
  {
    id: "bi-consulting",
    theme: "consultant",
    hint: "Business intelligence and data analytics consulting: what the engagement delivers, and the skills the work genuinely requires.",
  },
  {
    id: "consulting-fees",
    theme: "consultant",
    hint: "Consulting rates and pricing models — hourly against value, what a reasonable fee looks like, and what the number has to cover.",
  },

  /* Cross-cutting -------------------------------------------------------- */
  {
    id: "automation-landscape",
    theme: "other",
    hint: "The automation landscape overall: the types, the tools, and the honest answer on what AI replaces and what it does not.",
  },
  {
    id: "b2b-revenue-model",
    theme: "other",
    hint: "B2B revenue models and the arithmetic underneath — revenue formula, lead-to-sale conversion, and the benchmarks worth trusting.",
  },
  {
    id: "data-analyst-role",
    theme: "other",
    hint: "The data analyst and BI role as it stands now: demand, the skills that hold value, and what AI changes about the job.",
  },
]

/**
 * Ordered. First match wins, so a phrase mentioning both HubSpot and
 * attribution lands in the HubSpot-attribution cluster rather than the
 * general attribution one.
 */
const RULES = [
  // Attribution, most specific first.
  [/\bmmm\b|mta|media mix|mix model/i, "attribution-mmm-vs-mta"],
  [/hubspot/i, "attribution-hubspot", "attribution"],
  [/calculate attributed|attribut\w* revenue\b.*(formula|calculat)|formula/i, "attribution-revenue-calculation", "attribution"],
  [/how to attribute revenue/i, "attribution-revenue-calculation"],
  [/\bb2b\b/i, "attribution-b2b", "attribution"],
  [/dashboard|\breport\b|reports\b/i, "attribution-dashboard", "attribution"],
  [/software|platform|tool|\bllc\b|company|consultants?\b/i, "attribution-tools", "attribution"],
  [/model|linear|data-driven|data driven|four types|types of/i, "attribution-models", "attribution"],
  [/methodolog|problem|rules|strateg|framework/i, "attribution-strategy", "attribution"],
  [/revenue attribution|attributable revenue|marketing to revenue|revenue based/i, "attribution-revenue-basics"],
  [/attribut/i, "attribution-basics"],

  // CRM integration.
  [/facebook|meta\b|google ads|sales navigator|conversion api|business manager|leads\b/i, "crm-integration-ads", "crm_integration"],
  [/\berp\b/i, "crm-integration-erp"],
  [/quickbooks|xero|zoho books/i, "crm-integration-finance"],
  [/outlook|gmail|office 365|email/i, "crm-integration-email", "crm_integration"],
  [/shopify|wordpress/i, "crm-integration-ecommerce"],
  [/website/i, "crm-integration-website", "crm_integration"],
  [/salesforce/i, "crm-integration-salesforce", "crm_integration"],
  [/hubspot/i, "crm-integration-hubspot", "crm_integration"],
  [/zoho/i, "crm-integration-zoho", "crm_integration"],
  [/3cx/i, "crm-integration-telephony"],
  [/\bapi\b/i, "crm-integration-api", "crm_integration"],
  [/consultant|advisor|integrator|specialist|skills/i, "crm-integration-consultant", "crm_integration"],
  [/services|companies/i, "crm-integration-services", "crm_integration"],
  [/tools?\b/i, "crm-integration-tools", "crm_integration"],
  [/integrat/i, "crm-integration-basics", "crm_integration"],
  [/\bcrm\b/i, "crm-basics", "crm_integration"],

  // Reporting.
  [/excel/i, "reporting-excel", "reporting"],
  [/python/i, "reporting-python"],
  [/financial/i, "reporting-financial"],
  [/\bsap\b|servicenow|tableau|workday/i, "reporting-enterprise-platforms"],
  [/\bai\b/i, "reporting-ai", "reporting"],
  [/single source of truth/i, "reporting-single-source-of-truth"],
  [/customer (journey|experience|insights)/i, "reporting-customer-journey"],
  [/clients/i, "reporting-client-facing"],
  [/tools?\b|top 5/i, "reporting-tools", "reporting"],
  [/process|framework|template|examples|\bpdf\b|types of reporting|analyst|specialist|system/i, "reporting-process", "reporting"],
  [/report/i, "reporting-basics", "reporting"],

  // Lead routing and CRM automation.
  [/salesforce/i, "lead-routing-salesforce", "automation"],
  [/hubspot/i, "lead-routing-hubspot", "automation"],
  [/scoring/i, "lead-routing-scoring"],
  [/software|platform|tools?\b|system/i, "lead-routing-tools", "automation"],
  [/routing/i, "lead-routing-basics"],
  [/crm automation|automation/i, "crm-automation", "automation"],

  // Platforms.
  [/n8n.*(pricing|cost)|(pricing|cost).*n8n/i, "n8n-pricing"],
  [/n8n.*\bai\b/i, "n8n-ai"],
  [/n8n.*(consultant|expert|partner|certification)/i, "n8n-consultant"],
  [/n8n vs|vs.*n8n/i, "n8n-comparison"],
  [/n8n/i, "n8n-basics"],
  [/gohighlevel.*(pricing|price|per month|cost)|how much is gohighlevel/i, "gohighlevel-pricing"],
  [/gohighlevel.*(consultant|expert)/i, "gohighlevel-consultant"],
  [/gohighlevel|go high level/i, "gohighlevel-basics"],
  [/power bi/i, "power-bi-reporting"],
  [/salesforce/i, "salesforce-reporting", "platform"],
  [/hubspot/i, "hubspot-revops", "platform"],
  [/zoho/i, "zoho-crm-automation", "platform"],

  // Consulting.
  [/fractional|as a service|freelance/i, "revops-fractional"],
  [/revops (vs|meaning)|what is revenue operations|what does revops|revops analyst|revops manager|revops ai|^revops$/i, "revops-definition"],
  [/revops|revenue operations/i, "revops-consultant"],
  [/business intelligence|\bbi\b|data analytics|data consult/i, "bi-consulting", "consultant"],
  [/fee|hour|paid a lot|rule of 3|consulting revenue/i, "consulting-fees"],
  [/automation consultant|data automation/i, "automation-consultant"],
  [/consultant|consulting/i, "automation-consultant", "consultant"],

  // Cross-cutting leftovers.
  [/automation|routing/i, "automation-landscape"],
  [/revenue|leads turn into sales/i, "b2b-revenue-model"],
  [/data analyst|business intelligence/i, "data-analyst-role"],
]

/* ── Assignment ───────────────────────────────────────────────────────────── */

const csv = readFileSync(join(root, "data/keywords.csv"), "utf8")
const [header, ...rows] = parseCsv(csv)
const col = Object.fromEntries(header.map((h, i) => [h.trim(), i]))

const known = new Set(CLUSTERS.map((c) => c.id))
const kept = []
const dropped = []
const unmatched = []

for (const row of rows) {
  const phrase = (row[col.phrase] ?? "").trim()
  if (!phrase) continue

  const type = (row[col.type] ?? "keyword").trim()
  const theme = (row[col.theme] ?? "other").trim()
  const sources = (row[col.sources] ?? "").trim()

  const drop = DROP.find(([re]) => re.test(phrase))
  if (drop) {
    dropped.push({ phrase, reason: drop[1] })
    continue
  }

  // A rule may be scoped to a theme, which is what lets "hubspot" mean the
  // attribution cluster in one theme and the integration cluster in another.
  const rule = RULES.find(([re, , scope]) => (!scope || scope === theme) && re.test(phrase))
  if (!rule) {
    unmatched.push({ phrase, theme })
    continue
  }

  if (!known.has(rule[1])) throw new Error(`rule points at unknown cluster: ${rule[1]}`)
  kept.push({ phrase, type, theme, sources, cluster: rule[1] })
}

/* ── Report ───────────────────────────────────────────────────────────────── */

const byCluster = new Map()
for (const k of kept) {
  if (!byCluster.has(k.cluster)) byCluster.set(k.cluster, [])
  byCluster.get(k.cluster).push(k)
}

const empty = CLUSTERS.filter((c) => !byCluster.has(c.id))

console.log(`parsed    ${rows.length} rows`)
console.log(`kept      ${kept.length}`)
console.log(`dropped   ${dropped.length}`)
console.log(`unmatched ${unmatched.length}`)
console.log(`clusters  ${byCluster.size} of ${CLUSTERS.length} populated\n`)

for (const c of CLUSTERS) {
  const members = byCluster.get(c.id) ?? []
  const questions = members.filter((m) => m.type === "question").length
  console.log(
    `  ${c.id.padEnd(34)} ${String(members.length).padStart(3)} phrases  ${String(questions).padStart(2)} questions`,
  )
}

if (empty.length) {
  console.log(`\nempty clusters (no phrase matched):`)
  for (const c of empty) console.log(`  ${c.id}`)
}

if (unmatched.length) {
  console.log(`\nunmatched phrases:`)
  for (const u of unmatched) console.log(`  [${u.theme}] ${u.phrase}`)
}

if (process.argv.includes("--verbose")) {
  console.log(`\ndropped:`)
  for (const d of dropped) console.log(`  ${d.reason.padEnd(28)} ${d.phrase}`)
}

/* ── Seed ─────────────────────────────────────────────────────────────────── */

const q = (s) => `'${String(s).replace(/'/g, "''")}'`
const arr = (xs) => `array[${xs.map(q).join(", ")}]::text[]`

if (process.argv.includes("--write")) {
  // The seed carries only what a human decided: which cluster each phrase
  // belongs to, and what the cluster is asking. Everything aggregate — the
  // focus phrase, the keyword and question lists, the priority — is derived in
  // the database by refresh_topic_briefs(), so it cannot drift out of step with
  // the keyword table the way a frozen seed file would.
  const lines = [
    "-- Generated by scripts/build-topics.mjs. Do not edit by hand.",
    "-- Re-run `node scripts/build-topics.mjs --write` after changing data/keywords.csv,",
    "-- then apply this file. It is idempotent: re-seeding refreshes the phrase list",
    "-- and the cluster hints without disturbing generation state on topics already written.",
    "",
    "begin;",
    "",
    "insert into public.seo_keywords (phrase, kind, theme, sources, cluster) values",
    kept
      .map(
        (k) =>
          `  (${q(k.phrase)}, ${q(k.type)}, ${q(k.theme)}, ${q(k.sources)}, ${q(k.cluster)})`,
      )
      .join(",\n") + "\non conflict (phrase) do update set",
    "  kind = excluded.kind,",
    "  theme = excluded.theme,",
    "  sources = excluded.sources,",
    "  cluster = excluded.cluster;",
    "",
    "insert into public.content_topics (cluster, theme, hint, focus_keyword) values",
    CLUSTERS.filter((c) => byCluster.has(c.id))
      // focus_keyword is not null, so seed a placeholder; the refresh below
      // replaces it with the real head term.
      .map((c) => `  (${q(c.id)}, ${q(c.theme)}, ${q(c.hint)}, ${q(c.id.replace(/-/g, " "))})`)
      .join(",\n") + "\non conflict (cluster) do update set",
    "  theme = excluded.theme,",
    "  hint = excluded.hint;",
    "",
    "-- Derives focus_keyword, supporting_keywords, questions and priority.",
    "select public.refresh_topic_briefs();",
    "",
    "commit;",
    "",
  ]

  writeFileSync(join(root, "supabase/seed/keywords.sql"), lines.join("\n"))
  console.log(
    `\nwrote supabase/seed/keywords.sql (${kept.length} phrases, ${byCluster.size} topics)`,
  )
}
