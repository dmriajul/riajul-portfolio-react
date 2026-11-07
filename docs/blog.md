# Blog infrastructure: how it works and how to publish

## What exists

| Route | Renders | Indexable |
|---|---|---|
| `/blog/` (and `/blog`) | Blog index: intro, category/topic filter, article grid, empty state | Yes — canonical `https://portfolio.riajultech.com/blog/` |
| `/blog/<slug>` | Article template: breadcrumbs, header, meta, TOC, body, related, author box | Yes, but **only for published articles** |
| `/blog/<unknown>` and `/blog/a/b/c` | "That article is not here" page | **No** — `noindex, follow`, no canonical |

**No articles are published.** `src/data/blogPosts.js` contains an empty `publishedPosts` array on purpose. The blog was built as infrastructure only; inventing filler articles would put false claims on a page that advertises real work.

## Two layers, one source of truth

1. **Runtime (browser).** React Router renders the routes; `useSeo` keeps `<head>` correct during client-side navigation.
2. **Build (Node).** `scripts/prerender.mjs` server-renders the same `AppShell` tree with `react-dom/server`, writes a real HTML file per route into `dist/blog/**`, and rewrites each file's `<head>`.

Vercel serves the filesystem **before** applying `rewrites`, so those files win over the catch-all. That is why `/blog/` returns a genuine blog index instead of the homepage, and why article content is in the HTML without JavaScript.

No new dependencies: `react-dom/server` ships with the existing `react-dom`.

## Build pipeline

```
npm run build
  ├─ vite build                              # client → dist/
  ├─ vite build --ssr src/entry-server.jsx   # server bundle → dist-ssr/ (gitignored)
  └─ node scripts/prerender.mjs              # static HTML + sitemap
```

The prerender step **fails the build** (rather than shipping something wrong) when:

- blog data is invalid (duplicate slug, unknown category, topic not in its category, missing dates, published article with no body);
- the shared shell no longer has exactly one `<title>`, or already has a canonical;
- the rendered body is empty;
- any draft slug appears in an output file;
- a draft URL reaches `dist/sitemap.xml`.

## Adding an article

Edit **one file**: `src/data/blogPosts.js`, add an object to `publishedPosts`, run `npm run build`.

That is all. The build then produces `/blog/<slug>/index.html` with its own title, description, canonical and OG tags, adds the card to the index, adds the URL to the sitemap, emits `BlogPosting` + `BreadcrumbList` JSON-LD, generates the table of contents from the `h2`/`h3` blocks and computes reading time. No route file, component or sitemap edit.

The full schema and every body block type are documented at the top of that file.

## Drafts

`src/data/blogDrafts.js` holds unpublished articles. Drafts:

- are never prerendered, so `/blog/<draft-slug>` falls through to the not-found page in production;
- are never listed on `/blog/` in a production build;
- are never in the sitemap;
- render only when `import.meta.env.DEV` (or a build made with `VITE_BLOG_PREVIEW_DRAFTS=1`) and then carry `noindex` plus a visible "Draft preview" banner.

### Why drafts cannot leak

A runtime flag alone is not enough: the data module would still be imported into the client bundle and shipped to every visitor, so the full text would sit in a public JavaScript file even though the route rendered "not found".

`vite.config.js` therefore aliases `@blog-drafts`:

| Build | Resolves to |
|---|---|
| `npm run dev` | `src/data/blogDrafts.js` |
| `VITE_BLOG_PREVIEW_DRAFTS=1 npm run build` | `src/data/blogDrafts.js` |
| any other build | `src/data/blogDrafts.empty.js` (exports `draftPosts = []`) |

The exclusion is a build-time fact rather than a tree-shaking accident. Verify it by grepping a phrase from a draft against `dist/` — it must not appear in any `.js`, `.css` or `.html` file.

The Node scripts (`scripts/prerender.mjs`, `scripts/generate-sitemap.mjs`) import the real data file directly, so their "a draft must never reach the sitemap" assertions still run against the actual drafts.

### Previewing a draft

```bash
npm run dev
# then open http://localhost:3000/blog/<draft-slug>
```

To review the prerendered output instead, build with the flag and delete the artefacts afterwards:

```bash
VITE_BLOG_PREVIEW_DRAFTS=1 npx vite build --ssr src/entry-server.jsx --outDir .preview-ssr
```

**Never set `VITE_BLOG_PREVIEW_DRAFTS` in a production deploy.** A production build ignores it; the deploy should never carry it into this project's environment variables either.

## Metadata and structured data

Built once in `src/lib/blogSeo.js` and used by both layers, so the static HTML and the browser cannot disagree.

| Page | JSON-LD |
|---|---|
| Blog index | `Blog` (+ `blogPost` list once articles exist) and `BreadcrumbList` |
| Article | `BlogPosting` and `BreadcrumbList` |
| Site-wide (from `index.html`) | `Person` + `ProfessionalService` graph |

`BlogPosting.author` and `publisher` reference the existing person node by `@id` (`https://portfolio.riajultech.com/#person`). There is one Person entity, referenced — never a second competing one.

## Filtering

`/blog/?category=<slug>` and `/blog/?category=<slug>&topic=<id>`. Query-string filtering keeps exactly **one** indexable listing URL; empty category archives would be thin duplicates of the index. Chips are real links, so they work with JavaScript disabled.

## Sitemap

`scripts/generate-sitemap.mjs` reads `public/sitemap.xml` (source of truth for the nine pre-existing URLs, untouched) and appends `/blog/` plus published articles, writing `dist/sitemap.xml`. It strips existing blog URLs first, so re-running is idempotent. `npm run sitemap` runs it standalone.

## Known limitations

- **Unknown blog URLs return HTTP 200**, not 404. The `rewrites` block cannot set a status code. The rendered page is a real not-found page with `noindex`, and it is not the homepage — but the status line is 200. This matches the pre-existing site-wide behaviour documented in `docs/seo-metadata.md`.
- **`/blog/<slug>/` and `/blog/<slug>` both resolve** to the same file. Canonical is the non-trailing-slash form. No redirect is configured, because setting `trailingSlash` globally would change the existing `/services/*` URLs.
- **Trailing-slash form of the index** (`/blog`) serves the same file with the same canonical.
- **Not tested against a real crawler.** No Googlebot fetch or Search Console inspection has been run. "Crawlable" here means the content is present in the HTML the server returns (verified by reading the built files), not that Google has indexed anything.
- **Draft `noindex` is applied client-side.** Published articles get their `robots` tag written into the prerendered HTML; drafts are never prerendered, so the tag is set on render instead. It only matters for a preview build, which is not deployed.
- **Browser rendering not observed** — no browser binary is available in this environment. Layout is verified structurally (CSS breakpoints at 1080 / 860 / 640 / 420 px) and through server-rendered markup, not visually.
- **Prerendered pages are re-rendered by the client on load** (`createRoot`, not `hydrateRoot`). Content is identical, but the theme state (localStorage) makes hydration-safe matching unreliable, so a client render was chosen deliberately over a hydration mismatch.
