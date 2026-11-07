/**
 * Content for the HVAC industry page at /industries/hvac.
 *
 * Editorial rules for this file:
 * - No invented HVAC clients, case studies, testimonials, or performance numbers.
 * - No guarantees of leads, booked appointments, or revenue.
 * - Capability claims are separated from things that need client access or
 *   third-party tools, and from outcomes that cannot be verified without CRM data.
 */

export const hvacMeta = {
  path: "/industries/hvac",
  title: "HVAC Marketing for USA Contractors | Google Ads and Meta Ads",
  description:
    "Performance marketing for US residential HVAC contractors. Google Ads, Meta Ads, GA4 and Tag Manager tracking, and landing pages that turn searches into calls.",
  lastUpdated: "November 2026",
  lastUpdatedISO: "2026-11-07",
};

export const hvacHero = {
  badge: "RESIDENTIAL HVAC",
  h1: "Performance Marketing for Residential HVAC Contractors",
  tagline:
    "Google Ads, Meta Ads, and measurement built around one question: which marketing produced the calls and form submissions that turned into booked work?",
  intro: [
    "For most contractors the problem is not traffic. It is knowing which traffic becomes work you can run.",
    "I build and manage the paid side of that system. That means Google Ads and Meta Ads, conversion tracking in GA4 and Google Tag Manager, and landing pages that give homeowners one clear next step. I work remotely with business owners in the United States.",
  ],
  stats: [
    { label: "Focus", value: "Residential HVAC" },
    { label: "Market", value: "United States" },
    { label: "Channels", value: "Google + Meta" },
    { label: "Measurement", value: "GA4 + GTM" },
  ],
};

export const hvacSummary = {
  heading: "What this service covers",
  paragraphs: [
    "This is a performance marketing service for residential heating and cooling companies. It covers four things that have to work together: Google Ads, Meta Ads, conversion tracking in Google Analytics 4 and Google Tag Manager, and the landing pages those ads send people to.",
    "When one of those is missing the rest becomes hard to judge. Ads without tracking tell you nothing about which calls came from which campaign. Tracking without a clean landing page records clicks that never had a chance to turn into a call.",
    "I do not sell guaranteed lead volume. What I can do is build the system, run it carefully, and report what it actually produced.",
  ],
  audienceHeading: "Who this is for",
  audience: [
    "Residential HVAC contractors in the United States who are running paid ads or about to start.",
    "Companies with install and service revenue, including repair, replacement, and maintenance plans.",
    "Teams where the phone still matters most, and where slow replies cost booked work.",
    "Owners who want cost per call and cost per lead by campaign, not just impressions.",
  ],
  notForHeading: "Who this is not a fit for",
  notFor:
    "Anyone looking for a guaranteed number of leads or booked jobs. Demand, seasonality, pricing, and how fast your team answers the phone all sit outside a media buyer's control.",
};

export const hvacCapabilities = [
  {
    icon: "🔍",
    title: "Google Ads management",
    description:
      "Search campaigns separated by intent: emergency repair, replacement quotes, maintenance, and indoor air quality. Service area targeting, negative keyword cleanup, and budget pacing that follows the season.",
    tags: ["Search", "Service area", "Negatives"],
  },
  {
    icon: "📣",
    title: "Meta Ads management",
    description:
      "Retargeting, seasonal offers, and creative testing. Useful for maintenance plans, replacement consideration, and staying in front of homeowners between service calls.",
    tags: ["Retargeting", "Creative", "Offers"],
  },
  {
    icon: "📊",
    title: "GA4 and Tag Manager setup",
    description:
      "Events for form submissions, phone link taps, and booking clicks, then conversion actions imported into Google Ads so bidding works from real outcomes instead of page views.",
    tags: ["GA4", "GTM", "Conversions"],
  },
  {
    icon: "🎯",
    title: "Landing page optimization",
    description:
      "One clear action per page, service area stated in plain language, shorter forms, and pages that load quickly on a phone in a driveway.",
    tags: ["CRO", "Mobile", "Forms"],
  },
  {
    icon: "📞",
    title: "Lead quality review",
    description:
      "We go through calls and form submissions together to see which keywords and ads bring the work you want more of, then move budget toward those.",
    tags: ["Search terms", "Qualification"],
  },
  {
    icon: "📈",
    title: "Monthly reporting",
    description:
      "Calls and forms reported separately, cost per lead by campaign, and a short written summary of what changed and what it produced.",
    tags: ["Calls vs forms", "Cost per lead"],
  },
];

export const hvacGoogleAds = {
  heading: "How Google Ads works for an HVAC account",
  intro:
    "Google Ads usually reaches homeowners who are already looking for help. The work is less about clever copy and more about separating intent, controlling where ads appear, and keeping the account clean.",
  points: [
    {
      title: "Separate campaigns by intent",
      body: "Emergency no cooling or no heat calls, replacement quotes, maintenance and tune ups, and indoor air quality are four different conversations. Separate campaigns let budget and message match each one instead of blending everything into a single account.",
    },
    {
      title: "Control the service area",
      body: "Target the cities and ZIP codes you actually drive to, and exclude the ones you do not. The map and the distance report catch spend leaking into areas where you will not send a truck.",
    },
    {
      title: "Cut wasted search terms",
      body: "A weekly pass through the search terms report removes DIY queries, parts searches, job seekers, rentals, and people looking for free advice. In HVAC this single habit usually saves more than any bidding change.",
    },
    {
      title: "Move budget with the season",
      body: "Heating demand peaks in winter, cooling in summer, and the shoulder months belong to replacement and maintenance plans. A flat budget across twelve months wastes money in the slow weeks and starves the busy ones.",
    },
    {
      title: "Match the ad to the landing page",
      body: "If the ad promises same day AC repair, the page should say the same thing, show the phone number first, and name the cities you serve. Mismatch between ad and page is one of the most common causes of a low conversion rate.",
    },
    {
      title: "Add Performance Max carefully",
      body: "Performance Max can work for HVAC once conversion tracking is clean and there are real creative assets to feed it, but it hides where the spend goes. I usually start with Search, prove the tracking, then test it.",
    },
  ],
};

export const hvacMetaAds = {
  heading: "How Meta Ads fits into HVAC marketing",
  intro:
    "Meta sits earlier in the decision than search. Someone scrolling is not usually searching for a repair at that moment, so the job is different: stay visible, give a real reason to act, and bring people back when the system fails.",
  points: [
    {
      title: "Retargeting is the strongest use",
      body: "People who visited your site, started a form, or watched a video are already aware of you. A small retargeting budget keeps you in front of them without paying again for cold reach.",
    },
    {
      title: "Seasonal offers, clearly stated",
      body: "Tune up offers, replacement promotions, and maintenance plan signups work when the offer is specific and the terms are visible. Financing can be promoted only if the contractor genuinely offers it.",
    },
    {
      title: "Creative from real work",
      body: "Photos and short videos from actual jobs, with the homeowner's permission, usually outperform stock imagery of technicians. Technician introductions and short explanations of common failures also hold attention.",
    },
    {
      title: "Lead forms versus landing pages",
      body: "Instant forms lower friction and produce more entries, including more that are not ready to book. Landing pages ask for a little more effort and filter harder. Most accounts need both, budgeted separately.",
    },
    {
      title: "How fast you reply decides the outcome",
      body: "Meta leads go cold quickly. If a form sits in an inbox for two days, the ad did its job and the process lost it. Response time is part of campaign performance whether or not it shows in the platform.",
    },
  ],
};

export const hvacTracking = {
  heading: "How tracking and measurement are set up",
  intro:
    "Tracking is where most HVAC ad accounts quietly break. Calls come in, forms arrive, and nobody can say which campaign produced them. The three groups below show what is inside my control, what depends on access or a third party, and what simply cannot be proven from ad data alone.",
  columns: [
    {
      variant: "included",
      heading: "I set this up in your accounts",
      note: "Included in the service, once access is granted.",
      items: [
        "GA4 configuration and custom events for form submissions and phone link taps",
        "Google Tag Manager tags and triggers, checked in preview mode before publish",
        "Conversion actions imported into Google Ads so bidding uses real outcomes",
        "One UTM naming standard across Google Ads and Meta Ads",
        "Event testing with real submissions rather than assumptions",
      ],
    },
    {
      variant: "needs",
      heading: "This needs your access or a third party tool",
      note: "Not included, and not assumed to exist.",
      items: [
        "Admin access to Google Ads, GA4, Tag Manager, and Meta Business Manager",
        "A call tracking provider with tracking numbers, purchased by you, if calls must be tied to campaigns",
        "A CRM if leads need to be tracked after the first contact",
        "Website edit access, or a developer who can apply landing page changes",
        "Any hosting or server side work that your setup requires",
      ],
    },
    {
      variant: "unverifiable",
      heading: "This cannot be verified without CRM or offline data",
      note: "Reported only if the data exists and is checked.",
      items: [
        "Which lead became a booked job",
        "Revenue per job, and therefore cost per booked job",
        "Profit per campaign after parts, labor, and overhead",
        "What happened on the phone after the call ended",
      ],
    },
  ],
  disclaimer:
    "Two things I will not claim. Call tracking is not described as running unless a provider and tracking numbers are configured and tested. Server side tracking is not described as implemented unless it has actually been built and verified in your setup. If either is not in place, I will say so and report only what the accounts can prove.",
};

export const hvacCro = {
  heading: "Landing pages and conversion optimization",
  intro:
    "Ads only perform as well as the page they land on. For an HVAC page the job is short: make it obvious what you do, where you do it, and how to reach you, then remove everything that slows that down.",
  points: [
    {
      title: "One action above the fold",
      body: "Service, city, phone number, and a single next step. When a page offers a call, a form, a chat, and a schedule link with equal weight, most visitors pick none of them.",
    },
    {
      title: "Fewer fields on the form",
      body: "Name, phone, address or ZIP, and what is happening with the system. Every extra field costs completions, and the details can be collected on the phone.",
    },
    {
      title: "Built for a phone in a driveway",
      body: "Most local service searches happen on mobile. The call button needs to be reachable with a thumb, and the text needs to stay readable without pinching.",
    },
    {
      title: "Speed before decoration",
      body: "A slow page loses people before they read the offer. Image weight, scripts, and popups are usually the first things I fix.",
    },
    {
      title: "Trust signals that are true",
      body: "License details, service area, years in business, and reviews the contractor actually has. I do not invent testimonials or display badges that have not been earned.",
    },
    {
      title: "Testing needs volume",
      body: "A/B tests only mean something with enough conversions to compare. Below a few hundred conversions a month I fix obvious problems in order of impact instead of pretending a small test is conclusive.",
    },
  ],
};

export const hvacProcess = [
  {
    step: "01",
    title: "Audit and access",
    desc: "We review the website, any existing campaigns, GA4, Tag Manager, and how leads are handled today. I confirm what can be measured before anything else is promised.",
  },
  {
    step: "02",
    title: "Measurement first",
    desc: "Tracking is set up or repaired, tested with real submissions, and imported as conversions. Campaigns start only once the numbers can be trusted.",
  },
  {
    step: "03",
    title: "Build and launch",
    desc: "Keyword and audience research, account structure, ad copy, and landing page changes, followed by a launch on conservative budgets.",
  },
  {
    step: "04",
    title: "Optimize and report",
    desc: "Weekly search term and budget checks, ongoing creative testing, and a monthly report that explains what changed and what it produced.",
  },
];

export const hvacDeliverables = [
  {
    title: "Campaign builds and management",
    desc: "Google Ads and Meta Ads built, monitored, and adjusted on a weekly cycle, including seasonal budget changes.",
  },
  {
    title: "Tracking setup and QA",
    desc: "GA4 events, Tag Manager configuration, conversion imports, and a documented naming standard for UTMs.",
  },
  {
    title: "Landing page work",
    desc: "Recommendations for every campaign landing page, and implementation where I have site access.",
  },
  {
    title: "Monthly performance report",
    desc: "Calls and forms separated, cost per lead by campaign, month over month movement, and seasonality noted.",
  },
  {
    title: "Plain language summary",
    desc: "A short written explanation of what was changed and why, so the report can be read without opening four dashboards.",
  },
  {
    title: "Lead quality review",
    desc: "A regular look at the calls and forms that came in, so budget moves toward the work you want more of.",
  },
];

export const hvacMetrics = {
  heading: "How performance is measured, and where the numbers stop",
  intro:
    "Reporting is built from what the accounts can actually prove. These are the figures I will report every month, and the ones I will not report unless the data exists.",
  measurable: [
    "Cost per lead by campaign and by channel",
    "Call volume and form volume, reported separately",
    "Landing page conversion rate, meaning calls and form submissions divided by visits",
    "Month over month movement with seasonality called out rather than smoothed over",
    "Search term changes that removed wasted spend",
  ],
  notMeasurable:
    "Without a CRM or an offline conversion process, reporting stops at the lead. I can show cost per call and cost per form. I cannot show cost per booked job, because that information lives in your dispatch or CRM system, not in Google Ads or Meta.",
};

export const hvacAbout = {
  headingWho: "Who you would be working with",
  paragraphs: [
    "I am Khandokar Riajul Islam, a performance marketing specialist working remotely from Khulna, Bangladesh with clients in the United States, the UK, Canada, Singapore, Australia, and the UAE. I hold Google Ads, Google Analytics 4, Google Tag Manager, and Meta certifications, and I have spent more than five years on paid search, paid social, analytics, and conversion work for service businesses and online stores.",
    "I have not published an HVAC client case study, and I am not going to invent one. What I can show is how I have built and measured campaigns in other industries, including the Google Ads, GA4, and conversion work documented on this site. Before you commit to anything, I will walk you through exactly how I would set up an HVAC account and what I would need from you.",
  ],
  links: [
    { label: "See documented case studies", to: "/#projects" },
    { label: "Google Ads services", to: "/services/google-ads" },
    { label: "Analytics and tracking services", to: "/services/analytics" },
  ],
};

export const hvacFaqs = [
  {
    q: "Do you guarantee leads or booked jobs?",
    a: "No. Nobody can guarantee demand, weather, seasonality, competitor pricing, or how quickly your team answers the phone. What I control is how campaigns are structured, how tracking is configured, and how honestly the results are reported. If a guarantee is a requirement, I am not the right fit.",
  },
  {
    q: "How much should I budget for ads?",
    a: "It depends on your market, your service mix, and how many jobs you can handle. HVAC search competition is high in most US metros, and a budget that only buys a few clicks a day will not produce enough data to optimize. We size the budget together after looking at demand and competition in your service area.",
  },
  {
    q: "Do you need access to my accounts?",
    a: "Yes. I need admin access to Google Ads, GA4, Google Tag Manager, and Meta Business Manager, or a person who can grant it. Without access I cannot verify tracking, and campaigns run on numbers nobody can check.",
  },
  {
    q: "Is call tracking included?",
    a: "Call tracking is not included. It requires a separate provider and tracking numbers that you purchase directly. If you set that up, I will configure the integration and test it. I will not describe calls as tracked until it is running and verified.",
  },
  {
    q: "Can you tell which leads turned into booked jobs?",
    a: "Only if there is a CRM or an offline conversion process that records the outcome and we can connect it. Without that data, reporting stops at the lead: calls, form submissions, and cost per lead by campaign.",
  },
  {
    q: "How long before campaigns are live?",
    a: "Usually one to two weeks after access is granted. The variable is tracking. Accounts without working conversion tracking take longer, because measurement has to be fixed before spend goes up.",
  },
  {
    q: "Do you work with my existing website?",
    a: "Yes. I work inside WordPress and Elementor builds, and I can hand recommendations to your developer if the site is managed elsewhere. If the current site cannot support tracking or a fast mobile page, I will say so before we start.",
  },
  {
    q: "Do you work with contractors outside the United States?",
    a: "This page is written for US contractors. The same approach can apply elsewhere, but it is worth a short call first so we can check whether your market behaves the same way.",
  },
];

export const hvacRelatedLinks = [
  { label: "Google Ads", to: "/services/google-ads" },
  { label: "Meta Ads", to: "/services/meta-ads" },
  { label: "Analytics and GA4", to: "/services/analytics" },
  { label: "Conversion optimization", to: "/services/cro" },
  { label: "All services", to: "/#services" },
];

export default {
  hvacMeta,
  hvacHero,
  hvacSummary,
  hvacCapabilities,
  hvacGoogleAds,
  hvacMetaAds,
  hvacTracking,
  hvacCro,
  hvacProcess,
  hvacDeliverables,
  hvacMetrics,
  hvacAbout,
  hvacFaqs,
  hvacRelatedLinks,
};
