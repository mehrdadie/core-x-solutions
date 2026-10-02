import assert from "node:assert/strict"
import { registerHooks } from "node:module"
import { test } from "node:test"

// Run the real TypeScript route and data loader with Node's built-in type
// stripping. Resolve the same @/ alias as tsconfig, without a test dependency.
registerHooks({
  resolve(specifier, context, nextResolve) {
    if (specifier.startsWith("@/")) {
      return nextResolve(new URL(`../src/${specifier.slice(2)}.ts`, import.meta.url).href, context)
    }
    return nextResolve(specifier, context)
  },
})

// Reserved test-only origin and fake key. Every request is intercepted below.
process.env.NEXT_PUBLIC_SITE_URL = "https://core-x.solutions"
process.env.SUPABASE_URL = "https://sitemap-test.invalid"
process.env.SUPABASE_PUBLISHABLE_KEY = "test-only-key"

const { default: sitemap, revalidate } = await import("../src/app/sitemap.ts")
const { getPosts } = await import("../src/lib/posts.ts")
const { profile } = await import("../src/content/profile.ts")
const { legalUpdated } = await import("../src/content/legal.ts")
const { serviceGroups } = await import("../src/content/services.ts")
const { resolveRouteData } = await import("next/dist/build/webpack/loaders/metadata/resolve-route-data.js")

function post(slug, overrides = {}) {
  return {
    slug,
    published_at: "2026-08-01T10:00:00Z",
    updated_at: "2026-09-01T12:00:00Z",
    robots_index: true,
    canonical_url: null,
    ...overrides,
  }
}

function servePosts(t, posts) {
  const requests = []
  t.mock.method(globalThis, "fetch", async (input) => {
    const url = new URL(input instanceof Request ? input.url : input)
    assert.equal(url.origin, "https://sitemap-test.invalid")
    assert.equal(url.pathname, "/rest/v1/posts")
    requests.push(url)
    // Project fields just as PostgREST does, so missing query columns fail tests.
    const columns = url.searchParams.get("select").split(",")
    const rows = posts.map((row) => Object.fromEntries(
      Object.entries(row).filter(([key]) => columns.includes(key)),
    ))
    return new Response(JSON.stringify(rows), {
      headers: { "Content-Type": "application/json" },
    })
  })
  return requests
}

test("sitemap excludes noindex and cross-published posts without hiding blog cards", async (t) => {
  const requests = servePosts(t, [
    post("original"),
    post("self-canonical", { canonical_url: `${profile.url}/blog/self-canonical` }),
    post("noindex", { robots_index: false }),
    post("legacy-null", { robots_index: null }),
    post("legacy-missing", { robots_index: undefined }),
    post("cross-published", { canonical_url: "https://mehrdadfashami.com/blog/original" }),
  ])
  const entries = await sitemap()
  assert.deepEqual(entries.filter((entry) => entry.url.includes("/blog/")).map((entry) => entry.url), [
    `${profile.url}/blog/original`, `${profile.url}/blog/self-canonical`,
    `${profile.url}/blog/legacy-null`, `${profile.url}/blog/legacy-missing`,
  ])
  assert.equal((await getPosts()).length, 6)
  for (const request of requests) {
    assert.equal(request.searchParams.get("status"), "eq.published")
    assert.equal(request.searchParams.get("order"), "published_at.desc")
    assert.ok(request.searchParams.get("select").split(",").includes("updated_at"))
    assert.ok(request.searchParams.get("select").split(",").includes("robots_index"))
    assert.equal(request.searchParams.has("robots_index"), false)
  }
})

test("lastmod uses updates, falls back to publication, and omits unknown dates in XML", async (t) => {
  servePosts(t, [
    post("updated"),
    post("published", { updated_at: null }),
    post("empty-update", { updated_at: "" }),
    post("missing-update", { updated_at: undefined }),
    post("invalid-update", { updated_at: "invalid" }),
    post("unknown", { updated_at: null, published_at: null }),
    post("invalid", { updated_at: "invalid", published_at: "invalid" }),
  ])
  const entries = await sitemap()
  const entry = (slug) => entries.find((item) => item.url === `${profile.url}/blog/${slug}`)
  assert.equal(entry("updated").lastModified.toISOString(), "2026-09-01T12:00:00.000Z")
  for (const slug of ["published", "invalid-update", "empty-update", "missing-update"]) {
    assert.equal(entry(slug).lastModified.toISOString(), "2026-08-01T10:00:00.000Z")
  }
  for (const slug of ["unknown", "invalid"]) {
    assert.equal(entry(slug).lastModified, undefined)
    assert.doesNotMatch(resolveRouteData([entry(slug)], "sitemap"), /<lastmod>/)
  }
  assert.doesNotMatch(resolveRouteData(entries, "sitemap"), /Invalid Date/)
})

test("static dates stay omitted; legal dates, routes, priorities and cache cadence survive", async (t) => {
  servePosts(t, [])
  const first = await sitemap()
  t.mock.timers.enable({ apis: ["Date"], now: new Date("2030-01-01T00:00:00Z") })
  assert.deepEqual(await sitemap(), first)
  assert.equal(revalidate, 600)
  const services = serviceGroups.flatMap((group) => group.items)
  assert.equal(first.length, 8 + services.length)
  for (const item of services) assert.ok(first.some((entry) => entry.url === `${profile.url}${item.href}`))
  for (const entry of first) {
    if ([`${profile.url}/privacy`, `${profile.url}/terms`].includes(entry.url)) {
      assert.equal(entry.lastModified.toISOString(), new Date(legalUpdated).toISOString())
      assert.equal(entry.priority, 0.2)
      assert.equal(entry.changeFrequency, "yearly")
    } else {
      assert.equal("lastModified" in entry, false)
    }
  }
  assert.equal((resolveRouteData(first, "sitemap").match(/<lastmod>/g) ?? []).length, 2)
  assert.equal(first.find((entry) => entry.url === profile.url).priority, 1)
})
