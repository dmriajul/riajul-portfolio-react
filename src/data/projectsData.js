const projectsData = [
  {
    id: 1,
    title: "Riajul Tech",
    category: "Affiliate Website & SEO",
    image: "/projects/riajultech-homepage.jpg",
    problem:
      "A new affiliate site with no organic visibility in a technology niche already crowded with established review sites.",
    strategy:
      "Target buyer-intent product queries with clean site architecture, topical content clusters, and supporting schema markup.",
    execution:
      "Built on WordPress with Rank Math SEO and LiteSpeed caching, published structured buying guides, and tracked everything in GA4 and GTM.",
    result:
      "The site now ranks for 1,000+ search queries at an average position of 8.5, with 174K+ organic impressions.",
    technologies: [
      "WordPress",
      "Elementor Pro",
      "Rank Math SEO",
      "LiteSpeed Cache",
      "Google Analytics 4",
      "Google Tag Manager",
      "Amazon Associates",
    ],
    results: [
      "SEO-Optimized Site Structure",
      "Ranked for 1,000+ Search Queries",
      "Fast Core Web Vitals & LiteSpeed Caching",
      "Affiliate Conversion Architecture",
    ],
    live: "https://riajultech.com",
    github: "",
    featured: true,
  },

  {
    id: 2,
    title: "Meta Ads Campaign",
    category: "Performance Marketing",
    image: "/projects/meta-ads-dashboard.jpg",
    problem:
      "Paid social was producing reach and engagement, but lead quality and cost per result were unpredictable.",
    strategy:
      "Structure the account around full-funnel objectives — qualified leads and purchases first, with dedicated retargeting for warm audiences.",
    execution:
      "Segmented cold, warm, and retargeting audiences, ran continuous hook and creative A/B tests, and connected the Meta Pixel with the Conversions API.",
    result:
      "A 5.88% peak account CTR and lead costs between $0.13 and $0.34, with a consistent lead flow month to month.",
    technologies: [
      "Meta Ads Manager",
      "Facebook Pixel",
      "Audience Research",
      "Conversion API (CAPI)",
      "Looker Studio",
    ],
    results: [
      "Higher Click-Through Rates (CTR)",
      "Profitable Return on Ad Spend (ROAS)",
      "High-Value Custom & Lookalike Audiences",
      "Consistent Lead Generation Flow",
    ],
    live: "",
    github: "",
    featured: true,
  },

  {
    id: 3,
    title: "Google Ads Campaign",
    category: "Google Ads",
    image: "/projects/google-ads-dashboard.jpg",
    problem:
      "Budget was being spread across broad search terms that rarely turned into qualified enquiries.",
    strategy:
      "Concentrate spend on commercial-intent keywords, then keep the account clean with disciplined search-term pruning.",
    execution:
      "Built single-theme ad groups with responsive search ads, linked GA4 conversion imports, and reviewed query reports on a weekly cycle.",
    result:
      "Lower cost per click on commercially qualified queries, with conversion tracking verified end to end.",
    technologies: [
      "Google Ads",
      "Google Keyword Planner",
      "Google Analytics 4",
      "Google Tag Manager",
      "Smart Bidding",
    ],
    results: [
      "Lower Cost Per Click (CPC)",
      "Improved Ad Quality Scores",
      "Commercial Buyer-Intent Keyword Targeting",
      "Accurate Conversion Tracking Setup",
    ],
    live: "",
    github: "",
    featured: true,
  },

  {
    id: 4,
    title: "SEO Growth Strategy",
    category: "Search Engine Optimization",
    image: "/projects/riajultech-ubersuggest-audit.jpg",
    problem:
      "Technical issues and unmapped content were limiting indexation, so useful pages were not earning search visibility.",
    strategy:
      "Fix crawl, indexation, and Core Web Vitals problems first, then map commercial keywords to dedicated pages.",
    execution:
      "Ran a full technical audit, restructured internal linking, optimised metadata and heading hierarchy, and monitored progress in Search Console.",
    result:
      "Steady growth in organic impressions and clicks, with every target keyword mapped to a page and a measurement plan.",
    technologies: [
      "Technical SEO",
      "Ubersuggest",
      "Google Search Console",
      "On-Page SEO",
      "Content Strategy",
      "Schema Markup",
    ],
    results: [
      "Full Technical SEO Audit & Issue Resolution",
      "Commercial Keyword Research & Topic Clustering",
      "Optimized Meta Tags, Headings & Content Flow",
      "Steady Growth in Organic Search Impressions",
    ],
    live: "",
    github: "",
    featured: false,
  },

  {
    id: 5,
    title: "Google Analytics 4 & Server-Side Attribution",
    category: "Analytics & Attribution",
    image: "/projects/riajultech-ga4-dashboard.jpg",
    problem:
      "After iOS14, conversions were being missed and the platforms each reported different numbers for the same sale.",
    strategy:
      "Rebuild measurement around server-side events with one shared naming convention across channels.",
    execution:
      "Configured GA4, GTM, and the Meta Conversions API, standardised UTM parameters, and built Looker Studio reporting on top.",
    result:
      "2.6K active users (+175.7%) at an 80% engagement rate (+15.6%) and 2.5 pages per user, with duplicate events resolved.",
    technologies: [
      "Google Analytics 4 (GA4)",
      "Google Tag Manager (GTM)",
      "Conversions API (CAPI)",
      "Looker Studio",
      "Server-Side Attribution",
    ],
    results: [
      "2.6K Active Users (+175.7% in 30 Days)",
      "80% Engagement Rate (+15.6%) & 2.5 Pages/User",
      "#1 Traffic Volume: USA, UK & Singapore",
      "62.7% Desktop vs 35.6% Mobile Traffic Split",
    ],
    live: "",
    github: "",
    featured: true,
  },

  {
    id: 6,
    title: "WordPress CRO & High-Converting Landing Pages",
    category: "Conversion Rate Optimization (CRO)",
    image: "/projects/portfolio-landing-page.jpg",
    problem:
      "Ad traffic was landing on pages where the offer was unclear and the next step was easy to miss on mobile.",
    strategy:
      "Rewrite the offer around one primary action and remove friction from the enquiry path.",
    execution:
      "Deployed mobile-responsive WordPress and Elementor pages with faster load times, clearer CTAs, and AI-assisted copy variations for headline testing.",
    result:
      "Faster rollout of new landing pages, with a shorter, clearer path from click to enquiry.",
    technologies: [
      "WordPress",
      "Elementor Pro",
      "AI-Assisted Workflows",
      "Conversion Optimization (CRO)",
      "Mobile UX & Page Speed",
      "Lead Funnel Architecture",
    ],
    results: [
      "Rapid WordPress & Elementor Deployment",
      "AI-Augmented Buyer Intent Copywriting",
      "Fast Mobile Core Web Vitals & UX",
      "Frictionless Lead & Appointment Funnel",
    ],
    live: "",
    github: "",
    featured: false,
  },

  {
    id: 7,
    title: "Pinterest Organic Growth & Referral Engine",
    category: "Visual Discovery & Traffic",
    image: "/projects/pinterest-analytics-dashboard.jpg",
    problem:
      "Pinterest content was being published without keyword structure, so pins were reaching very few people.",
    strategy:
      "Rebuild boards around real search demand and use a consistent Canva creative system with rich pins.",
    execution:
      "Restructured boards by keyword theme, scheduled a steady publishing cadence, and tracked saves, engagement, and outbound referral clicks.",
    result:
      "67.83K impressions (+371%), 44.57K reach (+325%), 151 saves (+435%) and 39 outbound referral clicks in 90 days.",
    technologies: [
      "Pinterest Business Analytics",
      "Canva Pro",
      "Visual Search Optimization",
      "Pinterest SEO",
      "Rich Pins Architecture",
    ],
    results: [
      "67.83K Impressions (+371% in 90 Days)",
      "44.57K Total Audience Reach (+325%)",
      "2.59K Engagements (+382%) & 151 Saves (+435%)",
      "39 Outbound Referral Clicks to Target Funnels",
    ],
    live: "",
    github: "",
    featured: true,
  },
];

export default projectsData;
