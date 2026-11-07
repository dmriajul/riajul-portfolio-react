/**
 * Draft preview switch.
 *
 * Drafts and the test fixture are renderable ONLY when:
 *   - the Vite dev server is running (import.meta.env.DEV), or
 *   - the build was made with VITE_BLOG_PREVIEW_DRAFTS=1 (local QA only).
 *
 * A normal production build has neither, so a draft slug renders the
 * "article not found" page, drafts never reach the listing, and the
 * prerender script never writes an HTML file for them.
 *
 * Kept in its own module because `import.meta.env` cannot be read by the
 * plain-Node build scripts, which import the data files directly.
 */
export const DRAFT_PREVIEW_ENABLED =
  import.meta.env.DEV || import.meta.env.VITE_BLOG_PREVIEW_DRAFTS === "1";

export default DRAFT_PREVIEW_ENABLED;
