/**
 * Navigation data for the "Services" dropdown.
 *
 * Two groups, both driven by this file:
 * - Marketing services: the dedicated service pages that already exist
 *   (`/services/:slug` in src/App.jsx, content in src/data/servicesDetailData.js).
 * - Industry solutions: industry landing pages, starting with HVAC.
 *
 * Adding a service or an industry page is a data change here only. Never list a
 * route that has not been built: unknown paths fall through to the catch-all
 * route and land on the homepage.
 */

export const serviceNavLinks = [
  { label: "Meta Ads", to: "/services/meta-ads" },
  { label: "Google Ads", to: "/services/google-ads" },
  { label: "Social Media Marketing", to: "/services/smm" },
  { label: "SEO", to: "/services/seo" },
  { label: "Analytics & Tracking", to: "/services/analytics" },
  { label: "Conversion Rate Optimization", to: "/services/cro" },
  { label: "Local SEO & Online Reputation Management", to: "/services/local-seo-orm" },
];

export const industryNavLinks = [
  {
    label: "HVAC Marketing",
    to: "/industries/hvac",
    description: "US residential HVAC contractors",
  },
];

export const servicesMenu = {
  trigger: "Services",
  marketingTitle: "Marketing services",
  industryTitle: "Industry solutions",
  industryNote: "More industries are added here as each page ships.",
  allServicesLabel: "See all services",
  allServicesTo: "/#services",
};

export default { serviceNavLinks, industryNavLinks, servicesMenu };
