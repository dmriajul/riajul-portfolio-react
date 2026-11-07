/**
 * Static prerender for the blog.
 *
 * WHY THIS EXISTS
 * The app is a client-rendered Vite/React SPA: every URL returns the same
 * index.html shell, and <head> is rewritten in the browser by useSeo.
 * That is not good enough for a blog, where each article needs its own
 * title, description, canonical and body copy in the HTML that the server
 * returns.
 *
 * WHAT IT DOES
 *   1. renders each blog route to HTML with react-dom/server (no new
 *      dependency — react-dom is already in package.json),
 *   2. writes it into a copy of dist/index.html with the correct <head>,
 *   3. writes dist/blog/**, which Vercel serves from the filesystem BEFORE
 *      applying the catch-all rewrite in vercel.json,
 *   4. regenerates dist/sitemap.xml with the blog URLs.
 *
 * Guarantees asserted below (the build fails rather than shipping a page):
 *   - exactly one <title> and one canonical per file,
 *   - the homepage title is gone,
 *   - the rendered body is non-empty,
 *   - no draft slug appears in any output file or in the sitemap.
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { getPublishedPosts, validateBlogData } from "../src/data/blogPosts.js";
import { draftPosts } from "../src/data/blogDrafts.js";
import { isDraftPreviewBuild } from "./drafts-preview.mjs";

/**
 * Preview deployments deliberately compile drafts in, so the index page they
 * render legitimately contains draft URLs. Production builds never do.
 * Shared with vite.config.js so the alias and this file cannot disagree.
 * The sitemap guard is unconditional either way.
 */
const DRAFT_PREVIEW_BUILD = isDraftPreviewBuild();
import {
  BLOG_INDEX_META,
  BLOG_NOT_FOUND_META,
  buildArticleMeta,
  ROBOTS_INDEX,
  ROBOTS_NOINDEX,
} from "../src/lib/blogSeo.js";
import { generateSitemap } from "./generate-sitemap.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist");
const TEMPLATE = path.join(DIST, "index.html");

const HOMEPAGE_TITLE_FRAGMENT = "Performance Marketing Specialist & Social Media Manager | Meta Ads";

const escapeAttr = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

/**
 * Replaces the content of one <meta> tag, tolerating the multi-line
 * formatting used in index.html. Throws if the tag is not found exactly
 * once — that means the template changed and the replacement would have
 * silently done nothing.
 */
function replaceMeta(html, attribute, key, content, label) {
  const pattern = new RegExp(
    `<meta\\s+${attribute}="${key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"\\s+content="[^"]*"\\s*/?>`,
    "g"
  );

  const matches = html.match(pattern) || [];
  if (matches.length !== 1) {
    throw new Error(
      `[prerender] expected exactly one <meta ${attribute}="${key}"> (${label}), found ${matches.length}`
    );
  }

  return html.replace(
    pattern,
    `<meta ${attribute}="${key}" content="${escapeAttr(content)}" />`
  );
}

function replaceTitle(html, title) {
  const pattern = /<title>[\s\S]*?<\/title>/g;
  const matches = html.match(pattern) || [];
  if (matches.length !== 1) {
    throw new Error(`[prerender] expected exactly one <title>, found ${matches.length}`);
  }
  return html.replace(pattern, `<title>${escapeAttr(title)}</title>`);
}

/** Applies one route's metadata to the shared shell. */
function applyHead(html, meta) {
  const hasCanonical = typeof meta.canonical === "string" && meta.canonical.length > 0;

  let out = html;
  out = replaceTitle(out, meta.title);
  out = replaceMeta(out, "name", "description", meta.description, "description");
  out = replaceMeta(out, "property", "og:type", meta.type || "website", "og:type");
  out = replaceMeta(out, "property", "og:title", meta.title, "og:title");
  out = replaceMeta(out, "property", "og:description", meta.description, "og:description");
  out = replaceMeta(out, "name", "twitter:title", meta.title, "twitter:title");
  out = replaceMeta(
    out,
    "name",
    "twitter:description",
    meta.description,
    "twitter:description"
  );
  out = replaceMeta(out, "property", "og:image", meta.image, "og:image");
  out = replaceMeta(out, "name", "twitter:image", meta.image, "twitter:image");
  out = replaceMeta(
    out,
    "name",
    "robots",
    meta.noindex ? ROBOTS_NOINDEX : ROBOTS_INDEX,
    "robots"
  );

  if (hasCanonical) {
    out = replaceMeta(out, "property", "og:url", meta.canonical, "og:url");

    if (out.includes('rel="canonical"')) {
      throw new Error("[prerender] template already has a canonical — refusing to duplicate it");
    }

    out = out.replace(
      "</title>",
      `</title>\n\n  <!-- Canonical for this prerendered route -->\n  <link rel="canonical" href="${escapeAttr(
        meta.canonical
      )}" />`
    );
  } else {
    // No canonical for this route: drop og:url rather than leave the
    // homepage URL pointing at a page that is not the homepage.
    out = out.replace(/<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/g, "");
  }

  if (meta.publishedTime) {
    out = out.replace(
      "</head>",
      `  <meta property="article:published_time" content="${escapeAttr(
        meta.publishedTime
      )}" />\n  <meta property="article:modified_time" content="${escapeAttr(
        meta.modifiedTime || meta.publishedTime
      )}" />\n</head>`
    );
  }

  return out;
}

/** Fails the build when the shell no longer contains what we expect. */
function assertShellIsSafe(html, { label, expect, allowCanonical }) {
  const titleCount = (html.match(/<title>/g) || []).length;
  if (titleCount !== 1) throw new Error(`[prerender] ${label}: ${titleCount} <title> tags`);

  const canonicalCount = (html.match(/rel="canonical"/g) || []).length;
  if (allowCanonical && canonicalCount !== 1) {
    throw new Error(`[prerender] ${label}: ${canonicalCount} canonical links`);
  }
  if (!allowCanonical && canonicalCount !== 0) {
    throw new Error(`[prerender] ${label}: unexpected canonical link`);
  }

  if (html.includes(HOMEPAGE_TITLE_FRAGMENT)) {
    throw new Error(`[prerender] ${label}: homepage title still present`);
  }

  if (!html.includes(expect)) {
    throw new Error(`[prerender] ${label}: expected marker "${expect}" is missing from the body`);
  }

  if (!html.includes('<div id="root">')) {
    throw new Error(`[prerender] ${label}: #root container missing`);
  }

  const rootContent = html.split('<div id="root">')[1] || "";
  if (rootContent.trim().length < 500) {
    throw new Error(`[prerender] ${label}: rendered body looks empty`);
  }

  // Production guarantee: a draft URL must never survive into an output page.
  // A preview build is the one case where its presence is the point.
  if (!DRAFT_PREVIEW_BUILD) {
    for (const draft of draftPosts) {
      if (html.includes(`/blog/${draft.slug}`)) {
        throw new Error(`[prerender] ${label}: contains draft URL ${draft.slug}`);
      }
    }
  }
}

async function main() {
  if (DRAFT_PREVIEW_BUILD) {
    console.warn(
      "[prerender] DRAFT PREVIEW BUILD — unpublished drafts are included in this output. " +
        "Never promote this build to production."
    );
  }

  // 1. Content validation first: never render invalid data.
  const { errors, warnings } = validateBlogData([
    ...getPublishedPosts(),
    ...draftPosts,
  ]);
  warnings.forEach((warning) => console.warn(`[prerender] warn: ${warning}`));
  if (errors.length > 0) {
    errors.forEach((error) => console.error(`[prerender] error: ${error}`));
    throw new Error(`[prerender] blog data is invalid (${errors.length} errors)`);
  }

  // 2. Load the server bundle that `vite build --ssr` produced.
  let render;
  try {
    ({ render } = await import("../dist-ssr/entry-server.js"));
  } catch (error) {
    throw new Error(
      `[prerender] could not load dist-ssr/entry-server.js — run "npm run build:ssr" first (${error.message})`
    );
  }

  const template = await readFile(TEMPLATE, "utf8");
  if (!template.includes('<div id="root"></div>')) {
    throw new Error('[prerender] dist/index.html has no empty <div id="root"></div> to fill');
  }

  const posts = getPublishedPosts();

  const routes = [
    {
      url: "/blog/",
      file: "blog/index.html",
      meta: BLOG_INDEX_META,
      expect: 'class="blog-index-title"',
    },
    ...posts.map((post) => ({
      url: `/blog/${post.slug}`,
      file: `blog/${post.slug}/index.html`,
      meta: buildArticleMeta(post),
      expect: 'class="blog-article-title"',
    })),
    // Draft routes are prerendered ONLY in a preview build, so reviewers get a
    // real page (correct title, canonical and noindex in the HTML) instead of
    // the 404 shell that vercel.json rewrites unlisted /blog/* URLs to.
    // buildArticleMeta() marks every non-published post noindex, so these pages
    // still cannot be indexed, and the sitemap below remains published-only.
    ...(DRAFT_PREVIEW_BUILD ? draftPosts : []).map((post) => ({
      url: `/blog/${post.slug}`,
      file: `blog/${post.slug}/index.html`,
      meta: buildArticleMeta(post),
      expect: 'class="blog-article-title"',
    })),
    {
      url: "/blog/404",
      file: "blog/404/index.html",
      meta: BLOG_NOT_FOUND_META,
      expect: "blog-notfound-title",
    },
  ];

  const written = [];

  for (const route of routes) {
    const body = render(route.url);
    const withHead = applyHead(template, route.meta);
    const page = withHead.replace('<div id="root"></div>', `<div id="root">${body}</div>`);

    assertShellIsSafe(page, {
      label: route.url,
      expect: route.expect,
      allowCanonical: Boolean(route.meta.canonical),
    });

    const destination = path.join(DIST, route.file);
    await mkdir(path.dirname(destination), { recursive: true });
    await writeFile(destination, page, "utf8");
    written.push({ url: route.url, file: route.file, bytes: page.length });
  }

  // 3. Sitemap: published articles only.
  const sitemap = await generateSitemap();

  console.log(`[prerender] ${written.length} static page(s) written:`);
  written.forEach((item) =>
    console.log(`[prerender]   ${item.url} → dist/${item.file} (${(item.bytes / 1024).toFixed(1)} KB)`)
  );
  console.log(`[prerender] sitemap: ${sitemap.urls.length} URLs`);
}

main().catch((error) => {
  console.error(`[prerender] FAILED: ${error.message}`);
  process.exit(1);
});
