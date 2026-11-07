/**
 * Site-wide constants shared by the browser bundle AND the Node build
 * scripts (prerender / sitemap). Keep this file free of React, JSX and
 * `import.meta.env` so it can be imported from plain Node.
 *
 * `src/hooks/useSeo.js` re-exports SITE_URL and DEFAULT_OG_IMAGE from
 * here, so every existing `import { SITE_URL } from "../hooks/useSeo"`
 * keeps working unchanged.
 */

export const SITE_URL = "https://portfolio.riajultech.com";

export const SITE_NAME = "Khandokar Riajul Islam Portfolio";

export const DEFAULT_OG_IMAGE = `${SITE_URL}/projects/meta-ads-dashboard.jpg`;

/** Blog URLs. The index keeps its trailing slash; articles do not. */
export const BLOG_PATH = "/blog/";
export const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;

export const blogArticlePath = (slug) => `/blog/${slug}`;
export const blogArticleUrl = (slug) => `${SITE_URL}/blog/${slug}`;

export default {
  SITE_URL,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  BLOG_PATH,
  BLOG_URL,
  blogArticlePath,
  blogArticleUrl,
};
