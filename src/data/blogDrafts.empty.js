/**
 * Production stub for draft articles.
 *
 * WHY THIS FILE EXISTS
 * `src/data/blogDrafts.js` holds unpublished articles. Even with a runtime
 * `DRAFT_PREVIEW_ENABLED` check, the data would be imported into the client
 * bundle and shipped to every visitor — the route would render "not found",
 * but the full text would still be sitting in a public JS file for anyone
 * who opens it.
 *
 * `vite.config.js` aliases `@blog-drafts` to this empty module for every
 * production build, and to the real `blogDrafts.js` only for the dev server
 * or a build made with VITE_BLOG_PREVIEW_DRAFTS=1. That makes the exclusion
 * a build-time guarantee rather than a tree-shaking accident.
 *
 * The Node build scripts (scripts/prerender.mjs, scripts/generate-sitemap.mjs)
 * import the real data file directly, so validation and the "a draft must
 * never reach the sitemap" assertions still run against the actual drafts.
 */

export const draftPosts = [];

export default draftPosts;
