# Route metadata: current behaviour and known limitation

## Short version

Route-specific `<title>`, `description`, canonical, `og:*` and `twitter:*` tags are applied
**in the browser, after React mounts** (`src/hooks/useSeo.js`). They are correct for rendered
crawlers and for what a user sees in the tab, but **the HTML the server returns is still the
single `index.html` shell**.

This is a known limitation, not an oversight. Prerendering / SSG is the real fix and is
deliberately **out of scope** for PR 1.

## What is true today

| Consumer | Sees | Notes |
|---|---|---|
| User in the browser | Correct per-route title + meta | Applied on mount and on every client-side navigation |
| Googlebot (renders JS) | Correct per-route title, description, canonical, robots | Verified for indexation behaviour, subject to rendering queue |
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

## How to verify manually

1. Open the preview, go to `/services/google-ads`, hard refresh → tab title and DevTools
   `<head>` should show the Google Ads title, description, canonical, `og:url`.
2. Click **Home** (client-side navigation, no reload) → all tags switch back to the homepage values.
3. Go to `/services/not-a-real-service` → title becomes “Service Not Found”, `robots` becomes
   `noindex, follow`, and the canonical + `og:url` tags are gone.
4. `curl -s https://portfolio.riajultech.com/services/google-ads | grep -i 'og:title'` → still the
   homepage title. That is the limitation described above, not a regression.

## Future fix (requires approval, not started)

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
