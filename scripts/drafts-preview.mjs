/**
 * Single source of truth: does THIS build include unpublished drafts?
 *
 * Three places need the same answer, and they must never disagree:
 *   1. vite.config.js   — which module `@blog-drafts` resolves to, and the
 *                         runtime flag handed to src/lib/blogEnv.js;
 *   2. scripts/prerender.mjs — whether to write draft routes, and whether
 *                         the "no draft URL in an output page" assertion
 *                         applies to this build;
 *   3. scripts/generate-sitemap.mjs — drafts are excluded unconditionally,
 *                         so it does not consult this.
 *
 * Keeping the rule in one function is deliberate. When it was duplicated,
 * the preview flag and the production guard disagreed and the prerender step
 * failed a build. It is a small module in plain JS so a Vite config and a
 * plain Node script can both import it.
 *
 * The production guard is the important part: `VERCEL_ENV` is set by Vercel
 * itself (never by this repository), so a production deployment cannot
 * compile drafts in even if VITE_BLOG_PREVIEW_DRAFTS is later set for the
 * Production environment in the dashboard by mistake.
 */
export function isDraftPreviewBuild(env = process.env, mode = "production") {
  if (env.VERCEL_ENV === "production") return false;

  return (
    mode === "development" ||
    env.VITE_BLOG_PREVIEW_DRAFTS === "1" ||
    env.VERCEL_ENV === "preview"
  );
}

export default isDraftPreviewBuild;
