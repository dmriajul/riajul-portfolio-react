import { useEffect } from "react";

/**
 * Per-route SEO metadata.
 *
 * The SPA shell (index.html) ships a single static set of head tags, which is
 * correct for the homepage only. This hook lets each route declare its own
 * title, description, canonical and social tags so service pages no longer
 * inherit the homepage metadata on share/social previews.
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

function upsertMeta(attribute, key, content) {
  if (!content) return;

  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function setCanonical(href) {
  let canonical = document.head.querySelector("link[rel='canonical']");

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", href);
}

function removeCanonical() {
  const canonical = document.head.querySelector("link[rel='canonical']");
  if (canonical) canonical.remove();
}

/**
 * @param {object} options
 * @param {string} [options.title]
 * @param {string} [options.description]
 * @param {string|null} [options.canonical] Pass null to remove the canonical tag.
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
  useEffect(() => {
    if (title) {
      document.title = title;
      upsertMeta("property", "og:title", title);
      upsertMeta("name", "twitter:title", title);
    }

    if (description) {
      upsertMeta("name", "description", description);
      upsertMeta("property", "og:description", description);
      upsertMeta("name", "twitter:description", description);
    }

    const resolvedImage = image || DEFAULT_OG_IMAGE;
    upsertMeta("property", "og:image", resolvedImage);
    upsertMeta("name", "twitter:image", resolvedImage);

    if (canonical === null) {
      removeCanonical();
    } else if (canonical) {
      setCanonical(canonical);
      upsertMeta("property", "og:url", canonical);
    }

    upsertMeta("name", "robots", noindex ? ROBOTS_NOINDEX : ROBOTS_INDEX);
  }, [title, description, canonical, image, noindex]);
}
