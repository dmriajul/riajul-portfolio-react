/**
 * Metadata for the site-wide 404 page.
 *
 * Node-safe (no React, no JSX) so `scripts/prerender.mjs` can use exactly the
 * same values the React component does — the prerendered <head> and the
 * client-rendered <head> therefore cannot drift apart.
 *
 * `canonical: null` removes both `<link rel="canonical">` and `og:url`. A 404
 * has no canonical URL, and leaving the homepage's canonical in place would
 * advertise the 404 as a duplicate of "/". `noindex` is the belt to the 404
 * status line's braces: if a host ever serves this page with 200, it still
 * cannot be indexed.
 */
import { DEFAULT_OG_IMAGE, SITE_NAME } from "./siteConfig.js";

export const NOT_FOUND_META = {
  title: `Page not found | ${SITE_NAME}`,
  description:
    "This page does not exist or has moved. Browse the homepage or the HVAC marketing services page instead.",
  canonical: null,
  image: DEFAULT_OG_IMAGE,
  type: "website",
  noindex: true,
};

export default NOT_FOUND_META;
