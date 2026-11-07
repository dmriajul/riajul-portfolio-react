import { useEffect } from "react";

/**
 * Per-route SEO metadata.
 *
 * ⚠️ CLIENT-SIDE ONLY. These tags are written to <head> in a useEffect after
 * React mounts. That is enough for rendered crawlers (Googlebot) and for the
 * tab title, but it is NOT enough for:
 *   - social/link scrapers that do not execute JavaScript (LinkedIn, X, Slack,
 *     Facebook, WhatsApp) — they read whatever index.html shipped;
 *   - the initial HTML response, which always carries the homepage tags.
 *
 * The permanent fix is prerendering / SSG (one static HTML file per route with
 * its own <head>). That is deliberately out of scope for this PR. See
 * docs/seo-metadata.md for the limitation and the migration note.
 *
 * NOTE: tags are still applied client-side. This is a correctness fix for
 * rendered crawlers and share previews, not a substitute for prerendering.
 */

export const SITE_URL = "https://portfolio.riajultech.com";

export const DEFAULT_OG_IMAGE = `${SITE_URL}/projects/meta-ads-dashboard.jpg`;

const ROBOTS_INDEX =
  "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

const ROBOTS_NOINDEX = "noindex, follow";

/** Canonical values for the homepage — kept in sync with index.html. */
export const siteSeo = {
  title:
    "Khandokar Riajul Islam | Performance Marketing Specialist & Social Media Manager | Meta Ads, Google Ads & SMM",
  description:
    "Hire Khandokar Riajul Islam, a certified Performance Marketing Specialist & Social Media Manager with 5+ years of experience helping e-commerce, B2B, and service businesses grow with Meta Ads, Google Ads, full-funnel social media management, SEO, and GA4/GTM server-side tracking.",
  canonical: `${SITE_URL}/`,
  image: DEFAULT_OG_IMAGE,
};

function findMeta(doc, attribute, key) {
  return doc.head.querySelector(`meta[${attribute}="${key}"]`);
}

function upsertMeta(doc, attribute, key, content) {
  if (!content) return;

  let element = findMeta(doc, attribute, key);

  if (!element) {
    element = doc.createElement("meta");
    element.setAttribute(attribute, key);
    doc.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function removeMeta(doc, attribute, key) {
  const element = findMeta(doc, attribute, key);
  if (element) element.remove();
}

function findCanonical(doc) {
  return doc.head.querySelector("link[rel='canonical']");
}

function setCanonical(doc, href) {
  let canonical = findCanonical(doc);

  if (!canonical) {
    canonical = doc.createElement("link");
    canonical.setAttribute("rel", "canonical");
    doc.head.appendChild(canonical);
  }

  canonical.setAttribute("href", href);
}

function removeCanonical(doc) {
  const canonical = findCanonical(doc);
  if (canonical) canonical.remove();
}

/**
 * Applies a route's metadata to a document. Exported separately from the hook
 * so the exact DOM mutations can be unit-tested without a browser.
 *
 * Passing `canonical: null` means "this route has no canonical" (e.g. the
 * unknown-service fallback): the canonical link AND og:url are removed so the
 * page never advertises another route's URL.
 */
export function applySeoMetadata(
  doc,
  { title, description, canonical, image, noindex = false } = {}
) {
  if (title) {
    doc.title = title;
    upsertMeta(doc, "property", "og:title", title);
    upsertMeta(doc, "name", "twitter:title", title);
  }

  if (description) {
    upsertMeta(doc, "name", "description", description);
    upsertMeta(doc, "property", "og:description", description);
    upsertMeta(doc, "name", "twitter:description", description);
  }

  const resolvedImage = image || DEFAULT_OG_IMAGE;
  upsertMeta(doc, "property", "og:image", resolvedImage);
  upsertMeta(doc, "name", "twitter:image", resolvedImage);

  if (canonical === null) {
    // No self-referencing URL exists for this route: drop both tags rather
    // than leaving a stale homepage/previous-route URL behind.
    removeCanonical(doc);
    removeMeta(doc, "property", "og:url");
  } else if (canonical) {
    setCanonical(doc, canonical);
    upsertMeta(doc, "property", "og:url", canonical);
  }

  upsertMeta(doc, "name", "robots", noindex ? ROBOTS_NOINDEX : ROBOTS_INDEX);
}

/**
 * @param {object} options
 * @param {string} [options.title]
 * @param {string} [options.description]
 * @param {string|null} [options.canonical] Pass null to remove canonical + og:url.
 * @param {string} [options.image]
 * @param {boolean} [options.noindex]
 */
export default function useSeo({
  title,
  description,
  canonical,
  image,
  noindex = false,
} = {}) {
  // Re-runs on every client-side navigation because all deps are primitives:
  // the router re-renders the target route, which passes new values here.
  useEffect(() => {
    applySeoMetadata(document, { title, description, canonical, image, noindex });
  }, [title, description, canonical, image, noindex]);
}
