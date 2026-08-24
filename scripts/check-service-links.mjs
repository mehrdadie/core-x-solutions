/**
 * Fails when the generator's list of linkable pages drifts from the pages that
 * actually exist.
 *
 *   node scripts/check-service-links.mjs
 *
 * The Edge Function has no filesystem, so `SERVICE_PAGES` in
 * supabase/functions/generate-post/prompt.ts is a hand-maintained copy of the
 * site's routes. That is fine until someone deletes a page — which has already
 * happened once, when four thin service pages were merged into two and the
 * generator carried on offering all four to the writer for weeks.
 *
 * The runtime pruner in index.ts would strip such a link before the post was
 * saved, so this is not a correctness hole. It is a quality one: every dead
 * entry is an internal link the article could have had and silently lost.
 */

import { readdirSync, readFileSync } from "node:fs"
import { fileURLToPath } from "node:url"
import { dirname, join } from "node:path"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")

const onDisk = readdirSync(join(root, "src/app/services"), { withFileTypes: true })
  .filter((e) => e.isDirectory())
  .map((e) => `/services/${e.name}`)
  .sort()

const declared = [
  ...readFileSync(join(root, "supabase/functions/generate-post/prompt.ts"), "utf8")
    .matchAll(/"(\/services\/[a-z0-9-]+)"/g),
]
  .map((m) => m[1])
  .sort()

const missing = onDisk.filter((p) => !declared.includes(p))
const stale = declared.filter((p) => !onDisk.includes(p))

for (const p of stale) console.log(`  stale    ${p} — in prompt.ts, no such route`)
for (const p of missing) console.log(`  missing  ${p} — a real route the writer is never offered`)

if (stale.length || missing.length) {
  console.log(`\n${stale.length} stale, ${missing.length} missing. Update SERVICE_PAGES in prompt.ts.`)
  process.exit(1)
}

console.log(`SERVICE_PAGES matches the ${onDisk.length} service routes on disk.`)
