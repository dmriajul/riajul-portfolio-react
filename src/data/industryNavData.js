/**
 * Links shown under the "Industry Services" navigation item.
 *
 * Add a new object here when a new industry landing page ships, for example
 * "Service Businesses" or "E-commerce Brands". The navbar renders whatever is
 * in this list on desktop and in the mobile drawer, so a new industry needs no
 * change to the navigation component or its styles.
 *
 * Only list pages that actually exist: a link to a page that has not been built
 * yet sends visitors to the homepage through the catch-all route.
 */

export const industryNavLinks = [
  {
    label: "HVAC Marketing",
    to: "/industries/hvac",
    description: "Google Ads, Meta Ads and GA4 tracking for US residential contractors",
  },
];

export default industryNavLinks;
