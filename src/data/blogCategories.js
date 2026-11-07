/**
 * ==========================================================
 * BLOG TAXONOMY — portfolio.riajultech.com/blog/
 * ==========================================================
 *
 * Three topic clusters, deliberately kept to three. Do not add a
 * category until there is at least one real article that needs it:
 * an empty category is a thin page with nothing to index.
 *
 * `id` is what an article stores in `post.category`. `slug` is the
 * URL-safe form used in the `?category=` filter on the blog index.
 * They are intentionally identical so there is only one string to
 * remember, but they are separate fields so a slug can change without
 * touching every article.
 *
 * Topics are a second, finer level inside a category. An article may
 * reference at most one topic, and that topic must belong to the
 * article's own category — `validateBlogData()` enforces this at build
 * time so the filter UI can never show an orphan chip.
 *
 * This file is imported by Node build scripts as well as the browser
 * bundle, so it must stay free of JSX, window/document access and
 * `import.meta.env`.
 */

export const blogCategories = [
  {
    id: "hvac-google-ads",
    name: "HVAC Google Ads",
    slug: "hvac-google-ads",
    summary:
      "Search, Performance Max and Local Services Ads for US residential HVAC contractors: what clicks cost, how budget should be allocated, and which campaign structures hold up under seasonality.",
    topics: [
      { id: "costs-and-budgets", name: "Costs & Budgets" },
      { id: "google-ads-strategy", name: "Google Ads Strategy & Campaign Management" },
    ],
  },
  {
    id: "hvac-meta-ads",
    name: "HVAC Meta Ads",
    slug: "hvac-meta-ads",
    summary:
      "Facebook and Instagram advertising for heating and cooling companies: offer design, creative that survives a noisy feed, and lead forms that produce bookable appointments rather than unread inbox messages.",
    topics: [
      { id: "lead-generation", name: "Lead Generation" },
      { id: "creative-and-offers", name: "Creative & Offers" },
    ],
  },
  {
    id: "hvac-tracking-cro",
    name: "HVAC Tracking & Conversion Optimization",
    slug: "hvac-tracking-cro",
    summary:
      "Measurement and landing-page work for contractors: GA4, Google Tag Manager, call and form conversion tracking, and the page-level changes that turn existing traffic into booked jobs.",
    topics: [
      { id: "ga4-and-tag-manager", name: "GA4 & Tag Manager" },
      { id: "conversion-tracking", name: "Conversion Tracking" },
    ],
  },
];

/** Lookup by the value stored on an article (`post.category`). */
export function getCategoryById(id) {
  return blogCategories.find((category) => category.id === id) || null;
}

/** Lookup by the URL filter value (`?category=`). */
export function getCategoryBySlug(slug) {
  return blogCategories.find((category) => category.slug === slug) || null;
}

/** Lookup a topic inside a specific category. Returns null if it is not there. */
export function getTopic(categoryId, topicId) {
  const category = getCategoryById(categoryId);
  if (!category || !topicId) return null;
  return category.topics.find((topic) => topic.id === topicId) || null;
}

export const blogCategoryIds = blogCategories.map((category) => category.id);

export default blogCategories;
