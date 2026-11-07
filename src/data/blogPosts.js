/**
 * ==========================================================
 * BLOG ARTICLES
 * ==========================================================
 *
 * THIS FILE CONTAINS **NO ARTICLES**. That is deliberate: the blog was
 * built as infrastructure only. Do not add placeholder articles here to
 * "make it look full" — an invented article is a false claim on a page
 * that advertises real marketing work.
 *
 * ----------------------------------------------------------
 * HOW TO ADD AN ARTICLE (the only file you edit)
 * ----------------------------------------------------------
 * 1. Add one object to `publishedPosts` below.
 * 2. Set `status: "published"`. Anything else is treated as a draft.
 * 3. Run `npm run build` and commit.
 *
 * The build then, automatically:
 *   - lists it on /blog/ (newest first),
 *   - generates /blog/<slug>/index.html with its own <head>,
 *   - adds it to dist/sitemap.xml,
 *   - emits BlogPosting + BreadcrumbList JSON-LD,
 *   - builds its table of contents from the `h2`/`h3` body blocks,
 *   - computes reading time from the body word count.
 *
 * Nothing else needs editing: no route file, no sitemap edit, no
 * component change.
 *
 * ----------------------------------------------------------
 * SCHEMA
 * ----------------------------------------------------------
 * {
 *   slug: "kebab-case-url",           // required, unique, /blog/<slug>
 *   title: "Article title",           // required, becomes the <h1>
 *   excerpt: "1–2 sentences",         // required, card + meta description
 *   category: "hvac-google-ads",      // required, must exist in blogCategories.js
 *   topic: "costs-and-budgets",       // optional, must belong to that category
 *   status: "published" | "draft",    // required
 *   publishedAt: "2026-11-07",        // required, YYYY-MM-DD
 *   updatedAt: "2026-11-20",          // optional, YYYY-MM-DD
 *   author: "khandokar-riajul-islam", // optional, defaults to the site owner
 *   featuredImage: { src, alt, width, height, caption }, // optional
 *   seo: { title, description, ogImage }, // optional overrides (canonical is always derived)
 *                                     // ogImage: 1200x630 social crop; the featured
 *                                     // image keeps its 16:9 ratio for schema.org
 *   related: ["other-slug"],          // optional, published slugs only
 *   body: [ block, block, ... ]       // required for a published article
 * }
 *
 * BODY BLOCKS (no raw HTML is accepted anywhere):
 *   { type: "h2", text: "..." }
 *   { type: "h3", text: "..." }
 *   { type: "p",  text: "..." }                        supports [link](/path) and **bold**
 *   { type: "ul", items: ["...", "..."] }
 *   { type: "ol", items: ["...", "..."] }
 *   { type: "blockquote", text: "...", cite: "..." }
 *   { type: "callout", variant: "note" | "warning", title: "...", text: "..." }
 *   { type: "table", head: ["Col A", "Col B"], rows: [["a", "b"]], caption: "..." }
 *   { type: "figure", src: "/images/x.webp", alt: "...", caption: "..." }
 *   { type: "cta", heading: "...", text: "...", label: "...", href: "..." }
 *
 * Internal links inside `p` text use [label](/path) and become <Link>,
 * so they never trigger a full page reload.
 */

import { getCategoryById, getTopic } from "./blogCategories.js";

/**
 * Published articles. Empty by design — see the header.
 * @type {Array<object>}
 */
export const publishedPosts = [];

/* ------------------------------------------------------------------ */
/* Derived helpers. No article data lives below this line.             */
/* ------------------------------------------------------------------ */

const STATUS_PUBLISHED = "published";

export const isPublished = (post) => post?.status === STATUS_PUBLISHED;

const byNewestFirst = (a, b) => {
  const aDate = a.publishedAt || "";
  const bDate = b.publishedAt || "";
  if (aDate === bDate) return a.title.localeCompare(b.title);
  return bDate.localeCompare(aDate);
};

/** Only published articles, newest first. This is what pages may render. */
export function getPublishedPosts() {
  return publishedPosts.filter(isPublished).sort(byNewestFirst);
}

/** A published article by slug, or null. Never returns a draft. */
export function getPublishedPostBySlug(slug) {
  return getPublishedPosts().find((post) => post.slug === slug) || null;
}

/** Published articles in one category, newest first. */
export function getPostsByCategory(categoryId) {
  return getPublishedPosts().filter((post) => post.category === categoryId);
}

/**
 * Related articles for an article page.
 * Explicit `related` slugs win (published only), then same-category
 * articles, then nothing. It never invents a relationship.
 */
export function getRelatedPosts(post, limit = 3) {
  const published = getPublishedPosts().filter((item) => item.slug !== post.slug);
  const picked = [];
  const add = (item) => {
    if (item && !picked.some((existing) => existing.slug === item.slug)) {
      picked.push(item);
    }
  };

  (post.related || []).forEach((slug) => {
    add(published.find((item) => item.slug === slug));
  });

  published
    .filter((item) => item.category === post.category)
    .forEach(add);

  return picked.slice(0, limit);
}

/** Category + topic objects for an article, or nulls. */
export function getPostTaxonomy(post) {
  return {
    category: getCategoryById(post?.category),
    topic: getTopic(post?.category, post?.topic),
  };
}

/** Counts per category id, used by the filter chips. */
export function getCategoryCounts() {
  const counts = {};
  getPublishedPosts().forEach((post) => {
    counts[post.category] = (counts[post.category] || 0) + 1;
  });
  return counts;
}

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

/**
 * Structural validation for every article (published and draft).
 * Called by the prerender build, which fails hard on any error, so a
 * malformed article can never reach production.
 *
 * @returns {{errors: string[], warnings: string[]}}
 */
export function validateBlogData(posts = publishedPosts) {
  const errors = [];
  const warnings = [];
  const seenSlugs = new Set();

  posts.forEach((post, index) => {
    const where = `post[${index}] (${post?.slug || "no slug"})`;

    if (!post || typeof post !== "object") {
      errors.push(`${where}: not an object`);
      return;
    }

    if (!post.slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(post.slug)) {
      errors.push(`${where}: slug must be kebab-case (a-z, 0-9, single hyphens)`);
    } else if (seenSlugs.has(post.slug)) {
      errors.push(`${where}: duplicate slug`);
    } else {
      seenSlugs.add(post.slug);
    }

    if (!post.title) errors.push(`${where}: missing title`);
    if (!post.excerpt) errors.push(`${where}: missing excerpt`);
    if (!post.status) errors.push(`${where}: missing status`);

    const category = getCategoryById(post.category);
    if (!category) {
      errors.push(`${where}: unknown category "${post.category}"`);
    } else if (post.topic && !getTopic(post.category, post.topic)) {
      errors.push(
        `${where}: topic "${post.topic}" does not belong to category "${post.category}"`
      );
    }

    if (post.publishedAt && !ISO_DATE.test(post.publishedAt)) {
      errors.push(`${where}: publishedAt must be YYYY-MM-DD`);
    }
    if (post.updatedAt && !ISO_DATE.test(post.updatedAt)) {
      errors.push(`${where}: updatedAt must be YYYY-MM-DD`);
    }

    if (isPublished(post)) {
      if (!post.publishedAt) errors.push(`${where}: published article needs publishedAt`);
      if (!Array.isArray(post.body) || post.body.length === 0) {
        errors.push(`${where}: published article needs a non-empty body`);
      }
    }

    if (Array.isArray(post.body)) {
      post.body.forEach((block, blockIndex) => {
        if (!block || typeof block !== "object") {
          errors.push(`${where}: body[${blockIndex}] is not an object`);
        } else if (!block.type) {
          errors.push(`${where}: body[${blockIndex}] has no type`);
        }
      });
    }

    if (post.featuredImage && !post.featuredImage.alt) {
      warnings.push(`${where}: featuredImage has no alt text`);
    }

    if (post.excerpt && post.excerpt.length > 200) {
      warnings.push(`${where}: excerpt is ${post.excerpt.length} chars (aim for <=160 for meta descriptions)`);
    }
  });

  return { errors, warnings };
}

export default { publishedPosts, getPublishedPosts, getPublishedPostBySlug };
