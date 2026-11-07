/**
 * Metadata and structured-data builders for /blog/.
 *
 * Single source of truth: the SAME functions feed
 *   1. the browser (via useSeo, on mount / client-side navigation), and
 *   2. the Node prerender script (which writes them into the static
 *      <head> of /blog/index.html and each article file).
 *
 * That is why a crawler that never runs JavaScript still sees the correct
 * title, description, canonical and robots directive for every blog URL.
 *
 * Pure module: no React, no JSX, no window. Importable from plain Node.
 */

import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  BLOG_PATH,
  BLOG_URL,
  blogArticleUrl,
} from "./siteConfig.js";
import { getCategoryById, getTopic } from "../data/blogCategories.js";
import { toIsoDateTime } from "./blogUtils.js";

export const PERSON_ID = `${SITE_URL}/#person`;

/** The site owner. A real, verifiable identity — not a fictional author. */
export const BLOG_AUTHOR = {
  id: "khandokar-riajul-islam",
  name: "Khandokar Riajul Islam",
  role: "Performance Marketing Specialist & Social Media Manager",
  url: SITE_URL,
  image: `${SITE_URL}/profile.webp`,
};

export const ROBOTS_INDEX =
  "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
export const ROBOTS_NOINDEX = "noindex, follow";

const BLOG_BRAND = "Riajul Islam";

/* ------------------------------------------------------------------ */
/* Meta tags                                                           */
/* ------------------------------------------------------------------ */

export const BLOG_INDEX_META = {
  title: "HVAC Marketing Blog: Google Ads, Meta Ads & Tracking",
  description:
    "Working notes on HVAC paid media for US residential contractors: Google Ads costs and budgets, Meta Ads lead generation, and GA4/GTM tracking that matches the CRM.",
  canonical: BLOG_URL,
  image: DEFAULT_OG_IMAGE,
  type: "website",
  noindex: false,
};

/** Absolute URL for a stored image path, or the site default. */
export function resolveImage(src) {
  if (!src) return DEFAULT_OG_IMAGE;
  if (/^https?:\/\//i.test(src)) return src;
  return `${SITE_URL}${src.startsWith("/") ? "" : "/"}${src}`;
}

/**
 * Metadata for one article. The canonical is always derived from the slug
 * so it can never drift from the URL actually served.
 */
export function buildArticleMeta(post) {
  const title = post.seo?.title || `${post.title} | ${BLOG_BRAND}`;
  const description = post.seo?.description || post.excerpt;

  return {
    title,
    description,
    canonical: blogArticleUrl(post.slug),
    // Social card prefers an explicit 1200x630 crop; schema.org keeps the
    // 16:9 featured image, which is also an accepted Article image ratio.
    image: resolveImage(post.seo?.ogImage || post.featuredImage?.src),
    type: "article",
    noindex: post.status !== "published",
    publishedTime: toIsoDateTime(post.publishedAt),
    modifiedTime: toIsoDateTime(post.updatedAt || post.publishedAt),
  };
}

/** Metadata for the blog 404 page: never indexed, never canonical. */
export const BLOG_NOT_FOUND_META = {
  title: `Article not found | Blog | ${BLOG_BRAND}`,
  description:
    "This blog URL does not match a published article. Browse the HVAC marketing blog index instead.",
  canonical: null,
  image: DEFAULT_OG_IMAGE,
  type: "website",
  noindex: true,
};

/* ------------------------------------------------------------------ */
/* JSON-LD                                                             */
/* ------------------------------------------------------------------ */

export function buildBlogIndexJsonLd(posts = []) {
  const graph = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${BLOG_URL}#blog`,
    name: "HVAC Marketing Blog",
    description: BLOG_INDEX_META.description,
    url: BLOG_URL,
    inLanguage: "en",
    publisher: { "@id": PERSON_ID },
    author: { "@id": PERSON_ID },
  };

  if (posts.length > 0) {
    graph.blogPost = posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: blogArticleUrl(post.slug),
      datePublished: toIsoDateTime(post.publishedAt),
      ...(post.updatedAt ? { dateModified: toIsoDateTime(post.updatedAt) } : {}),
    }));
  }

  return graph;
}

export function buildBreadcrumbJsonLd(trail) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
        ? item.url.startsWith("http")
          ? item.url
          : `${SITE_URL}${item.url}`
        : undefined,
    })),
  };
}

export function blogBreadcrumbTrail() {
  return [
    { name: "Home", url: "/" },
    { name: "Blog", url: BLOG_PATH },
  ];
}

export function articleBreadcrumbTrail(post) {
  return [...blogBreadcrumbTrail(), { name: post.title, url: `${BLOG_PATH}${post.slug}` }];
}

/**
 * BlogPosting for one article.
 *
 * `author` and `publisher` reference the existing Person node by @id
 * (`https://portfolio.riajultech.com/#person`) rather than redeclaring a
 * second Person — one entity, referenced twice, never two competing ones.
 */
export function buildArticleJsonLd(post) {
  const url = blogArticleUrl(post.slug);
  const category = getCategoryById(post.category);
  const topic = getTopic(post.category, post.topic);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: { "@id": url },
    url,
    headline: post.title,
    description: post.seo?.description || post.excerpt,
    datePublished: toIsoDateTime(post.publishedAt),
    dateModified: toIsoDateTime(post.updatedAt || post.publishedAt),
    inLanguage: "en",
    isAccessibleForFree: true,
    author: { "@id": PERSON_ID },
    publisher: { "@id": PERSON_ID },
    ...(post.featuredImage?.src
      ? {
          image: {
            "@type": "ImageObject",
            url: resolveImage(post.featuredImage.src),
            ...(post.featuredImage.width ? { width: post.featuredImage.width } : {}),
            ...(post.featuredImage.height ? { height: post.featuredImage.height } : {}),
          },
        }
      : {}),
    ...(category ? { articleSection: category.name } : {}),
    ...(topic ? { keywords: topic.name } : {}),
    ...(post.status !== "published" ? { creativeWorkStatus: "Draft" } : {}),
  };
}

export { SITE_NAME, SITE_URL, BLOG_URL, BLOG_PATH, DEFAULT_OG_IMAGE };
