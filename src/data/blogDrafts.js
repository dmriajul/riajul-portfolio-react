/**
 * ==========================================================
 * UNPUBLISHED DRAFTS — NEVER PUBLISHED BY THIS BUILD
 * ==========================================================
 *
 * Articles in this file are invisible to production:
 *   - never rendered on /blog/ in production (the draft-preview flag is
 *     never set there, so the index filters them out);
 *   - never prerendered to an HTML file in a production build, so
 *     /blog/<slug> falls through to the blog not-found page;
 *   - never written to sitemap.xml (scripts/generate-sitemap.mjs imports
 *     published posts only, and both build scripts assert this);
 *   - any accidental render carries <meta name="robots" content="noindex, follow">.
 *
 * IMPORTANT: this module is aliased to an empty module (@blog-drafts) for
 * every production build — see vite.config.js and blogDrafts.empty.js — so
 * draft text cannot reach a public JavaScript file even if the runtime
 * checks above were bypassed. Scripts read this file directly from Node.
 */

export const draftPosts = [
  /* No unpublished drafts right now. The HVAC Google Ads guide was
   * published on 7 November 2026 and now lives in blogPosts.js. */
];

export default draftPosts;
