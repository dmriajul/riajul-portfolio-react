# Route metadata: current behaviour and known limitation

## Status (read this first)

- **Googlebot rendering/indexing: NOT TESTED.** No Googlebot fetch, Search Console URL Inspection,
  or indexing experiment has been run for any route. Per-route indexing is *expected*, not verified.
- **Social scraper behaviour: NOT TESTED.** LinkedIn, X, Slack, WhatsApp and Facebook scrapers are
  expected to receive **the initial HTML metadata** (the single `index.html` shell) for every URL,
  because they do not execute JavaScript. They are expected **not** to see per-route tags.
- **The DOM stub assertions are code-level tests only.** They verify that `applySeoMetadata()`
  mutates a simulated `<head>` object in Node. They are **not** browser verification and **not**
  search-engine verification.

## Short version

Route-specific `<title>`, `description`, canonical, `og:*` and `twitter:*` tags are applied
**in the browser, after React mounts** (`src/hooks/useSeo.js`). They are correct for what a user
sees in the tab and are *expected* to be picked up by crawlers that execute JavaScript (that
expectation is **not verified** — see the evidence table below), but **the HTML the server returns
is still the single `index.html` shell**.

This is a known limitation, not an oversight. Prerendering / SSG is the real fix and is
deliberately **out of scope** for PR 1.

## What is true today

| Consumer | Sees | Notes |
|---|---|---|
| User in the browser | Correct per-route title + meta | Applied on mount and on every client-side navigation |
| Googlebot (renders JS) | Correct per-route title, description, canonical, robots | **Expected, NOT verified.** No Googlebot fetch, Search Console URL Inspection or indexing test has been run |
| LinkedIn / X / Slack / WhatsApp / Facebook scrapers | **Homepage tags only** | They do not execute JavaScript; they read the raw `index.html` |
| `curl`, `view-source`, “View Page Source” | **Homepage tags only** | Same reason |
| AI crawlers that do not render | **Homepage tags only** | Mitigated partly by `llms.txt` and `noscript` content |

## Per-route values

| Route | title | description | canonical | robots |
|---|---|---|---|---|
| `/` | `siteSeo.title` | `siteSeo.description` | `https://portfolio.riajultech.com/` | `index, follow…` |
| `/services/<known>` | `<Service> \| Khandokar Riajul Islam Portfolio` | unique per service (tagline, or a sentence-safe trim, ≤160 chars) | `…/services/<slug>` | `index, follow…` |
| `/services/<unknown>` | `Service Not Found \| …` | explanatory | **removed** (also removes `og:url`) | `noindex, follow` |

`canonical: null` is the explicit “this route has no canonical” signal: both the `link[rel=canonical]`
and the `og:url` meta are removed so an unknown route never advertises the homepage or the
previous route's URL.

## What was actually tested (and what was not)

Be precise about the distinction; do not upgrade a code test into an indexing claim.

| Claim | Evidence level |
|---|---|
| `applySeoMetadata()` writes the correct title, description, canonical, `og:*`, `twitter:*` and robots for each route | **Code-level DOM test.** The exported function was driven through a stub `<head>` in the sequence `/` → `/services/google-ads` → `/services/smm` → `/services/not-a-real-service` → `/` (36 assertions). It exercises the real shipped function, not a browser. |
| Service descriptions are unique and ≤160 chars | **Data-level test** against `servicesDetailData.js` (7/7). |
| The tags update on client-side navigation | **Code-level.** The hook's effect deps are primitives and every route passes them, so React re-runs it on each route change. Not observed in a real browser. |
| Googlebot renders and indexes the per-route tags correctly | **NOT TESTED.** Requires a live URL, Search Console URL Inspection, or a Googlebot fetch. Treat as expected behaviour, not a verified result. |
| LinkedIn / X / Slack / WhatsApp previews show per-route tags | **NOT TESTED — and expected to FAIL.** These scrapers do not execute JavaScript, so they read `index.html` and will show the homepage tags. |
| Actual browser rendering of the page | **NOT TESTED** in this environment (no browser binary available). |

## How to verify manually

1. Open the preview, go to `/services/google-ads`, hard refresh → tab title and DevTools
   `<head>` should show the Google Ads title, description, canonical, `og:url`.
2. Click **Home** (client-side navigation, no reload) → all tags switch back to the homepage values.
3. Go to `/services/not-a-real-service` → title becomes “Service Not Found”, `robots` becomes
   `noindex, follow`, and the canonical + `og:url` tags are gone.
4. `curl -s https://portfolio.riajultech.com/services/google-ads | grep -i 'og:title'` → still the
   homepage title. That is the limitation described above, not a regression.

## Future fix (requires separate approval — not started, build pipeline unchanged)

Prerender one static HTML file per route at build time so each URL ships its own `<head>`.
Options, in ascending cost:

1. **Post-build Node script (no new dependency)** — after `vite build`, read `dist/index.html`,
   inject per-route tags, write `dist/services/<slug>/index.html`, etc. Vercel serves the
   filesystem before applying `rewrites`, so these files win. Zero runtime change.
2. **`vite-plugin-ssg` / `react-snap`** — a dependency and a build-pipeline change.
3. **Framework migration** (Next/Astro) — explicitly out of scope.

Any of these must be validated against the existing `vercel.json` rewrite at
`vercel.json:35-38` and the global `X-Robots-Tag: index, follow` header at
`vercel.json:4-11` before going live.

## Related

- Analytics (GA4/GTM) is **not** installed. See the deferred event spec on PR #16.
- Unknown URLs still return **HTTP 200**; only the client-side `noindex` changed. A real 404
  requires a rewrite allowlist in `vercel.json` plus a more specific `X-Robots-Tag` rule.
