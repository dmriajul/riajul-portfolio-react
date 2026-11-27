/**
 * ==========================================================
 * BLOG ARTICLES
 * ==========================================================
 *
 * THIS FILE HOLDS PUBLISHED ARTICLES ONLY. The blog was built as
 * infrastructure first and stayed empty on purpose: do not add placeholder
 * articles here to "make it look full" — an invented article is a false
 * claim on a page that advertises real marketing work. The articles
 * below are written, sourced and reviewed; anything unpublished belongs in
 * blogDrafts.js instead.
 *
 * ----------------------------------------------------------
 * HOW TO ADD AN ARTICLE (the only file you edit)
 * ----------------------------------------------------------
 * 1. Add one object to `publishedPosts` below.
 * 2. Set `status: "published"`. Anything else is treated as a draft.
 * 3. Run `npm run build` and commit.
 *
 * The build then, automatically:
 *   - lists it on /blog/ (newest first),
 *   - generates /blog/<slug>/index.html with its own <head>,
 *   - adds it to dist/sitemap.xml,
 *   - emits BlogPosting + BreadcrumbList JSON-LD,
 *   - builds its table of contents from the `h2`/`h3` body blocks,
 *   - computes reading time from the body word count.
 *
 * Nothing else needs editing: no route file, no sitemap edit, no
 * component change.
 *
 * ----------------------------------------------------------
 * SCHEMA
 * ----------------------------------------------------------
 * {
 *   slug: "kebab-case-url",           // required, unique, /blog/<slug>
 *   title: "Article title",           // required, becomes the <h1>
 *   excerpt: "1–2 sentences",         // required, card + meta description
 *   category: "hvac-google-ads",      // required, must exist in blogCategories.js
 *   topic: "costs-and-budgets",       // optional, must belong to that category
 *   status: "published" | "draft",    // required
 *   publishedAt: "2026-11-07",        // required, YYYY-MM-DD
 *   updatedAt: "2026-11-20",          // optional, YYYY-MM-DD
 *   author: "khandokar-riajul-islam", // optional, defaults to the site owner
 *   featuredImage: { src, alt, width, height, caption }, // optional
 *   seo: { title, description, ogImage }, // optional overrides (canonical is always derived)
 *                                     // ogImage: 1200x630 social crop; the featured
 *                                     // image keeps its 16:9 ratio for schema.org
 *   related: ["other-slug"],          // optional, published slugs only
 *   body: [ block, block, ... ]       // required for a published article
 * }
 *
 * BODY BLOCKS (no raw HTML is accepted anywhere):
 *   { type: "h2", text: "..." }
 *   { type: "h3", text: "...", faq: true }        an FAQ question; it and the blocks
 *                                                after it become one accordion entry
 *   { type: "p",  text: "..." }                        supports [link](/path), **bold**, `code`
 *   { type: "ul", items: ["...", "..."] }
 *   { type: "ol", items: ["...", "..."] }
 *   { type: "blockquote", text: "...", cite: "..." }
 *   { type: "callout", variant: "note" | "warning", title: "...", text: "..." }
 *   { type: "table", head: ["Col A", "Col B"], rows: [["a", "b"]], caption: "..." }
 *   { type: "figure", src: "/images/x.webp", alt: "...", width, height, caption: "..." }
 *   { type: "cta", heading: "...", text: "...", label: "...", href: "..." }
 *
 * Internal links inside `p` text use [label](/path) and become <Link>,
 * so they never trigger a full page reload.
 */

import { getCategoryById, getTopic } from "./blogCategories.js";

/**
 * Published articles. Unpublished work belongs in blogDrafts.js;
 * see the header for the rules.
 * @type {Array<object>}
 */
export const publishedPosts = [
  /* ==================================================================
   * ARTICLE 1 — HVAC Google Ads guide (published 7 November 2026)
   * ==================================================================
   * Every external claim below was checked against the live source on
   * 7 November 2026; the citation sits next to the claim it supports.
   * No client results, no screenshots, no guaranteed outcomes.
   *
   * Unlinked by design: /blog/hvac-cost-per-lead, /blog/ga4-and-tag-manager-for-hvac
   * and /blog/local-services-ads-vs-google-ads-hvac do not exist yet, so
   * they are named in plain text and never rendered as links.
   * ================================================================== */
  {
    slug: "hvac-google-ads-guide",
    title: "HVAC Google Ads: A Practical Guide for Residential HVAC Contractors",
    excerpt:
      "How residential HVAC contractors structure Google Ads: service lines, budgets, tracking, and what published cost data does and does not tell you.",
    category: "hvac-google-ads",
    topic: "google-ads-strategy",
    status: "published",
    publishedAt: "2026-11-07",
    updatedAt: null,
    author: "khandokar-riajul-islam",
    featuredImage: {
      src: "/images/blog/hvac-google-ads-guide/featured-hvac-google-ads-guide.jpg",
      alt:
        "Illustration of a residential air-conditioning condenser unit connected by a glowing gold line to three abstract document cards and a magnifying glass, on a dark green background.",
      width: 1600,
      height: 900,
      caption:
        "Paid search for residential HVAC: a condenser, the service-line documents that separate it, and the search that brings the call.",
    },
    seo: {
      title: "HVAC Google Ads: A Practical Guide for Contractors (2026)",
      description:
        "How residential HVAC contractors structure Google Ads: service lines, budgets, tracking, and what published cost data does and does not tell you.",
      // 1200x630 social crop; the 16:9 featured image is used for schema.org.
      ogImage: "/images/blog/hvac-google-ads-guide/og-hvac-google-ads-guide.jpg",
    },
    related: [],
    body: [
      { type: "p", text: "Residential HVAC is one of the most expensive categories on Google Ads, and one of the easiest to run badly. The problem is rarely the ads themselves. It is structural: repair calls and replacement quotes sharing a single campaign, a service area that includes towns you would never drive to, and conversion tracking that counts every form submit as a lead whether or not anyone answered the phone." },
      { type: "p", text: "This guide covers how that account should be built and run: keeping service lines separate, planning campaigns, allocating budget across the year, reading published cost data for what it is worth, and tracking the things that make the numbers mean something. It is written for owners and general managers of residential heating and cooling companies in the United States." },
      { type: "p", text: "**What this guide does not claim.** It contains no HVAC client results, no campaign screenshots, and no guaranteed outcomes. Every cost figure is labeled as one of four things: a platform estimate, a vendor benchmark, a competitor-reported range, or a worked calculation. The economics section is deliberately short, because the full cost-per-lead model belongs in its own article." },
      { type: "h2", text: "How Google Ads works for a residential HVAC contractor" },
      { type: "p", text: "Google Ads is an auction. You bid for a chance to show an ad against a search, and you pay only when someone clicks. Bid size matters, but it is not the only thing that decides who wins. Relevance between the search, the ad and the landing page counts too, which is why a tightly themed campaign usually beats a broader one at the same bid." },
      { type: "p", text: "Three ad formats matter, and they are not billed the same way." },
      { type: "h3", text: "Search ads" },
      { type: "p", text: "They appear above and below the organic results. They reach people who have already typed the problem: \"AC not cooling,\" \"furnace repair near me,\" \"heat pump installation [city].\" Intent is high, and so is the cost per click." },
      { type: "h3", text: "Performance Max with pay-per-lead goals" },
      { type: "p", text: "This is where Google Local Services Ads now live. Google is moving Local Services into the Google Ads interface as a specialized Performance Max campaign type: automated campaigns that, in this format, charge per valid lead rather than per click and serve only on Search and Maps. The rollout is phased: the first phase began in **August 2026** for select US home and storefront service advertisers, **including HVAC**. Broader service-area businesses follow in **late 2026**, and non-US accounts and remaining categories in **2027** ([Google Ads Help](https://support.google.com/google-ads/answer/17213585?hl=en))." },
      { type: "p", text: "The billing model does not change. You still pay for valid leads rather than clicks, whether those arrive as calls, messages or bookings. Ads still run only on Google Search and Maps, and targeting stays keywordless, driven by service categories and service areas. What does change matters operationally:" },
      {
        type: "ul",
        items: [
          "**Local Services performance reports do not carry over.** Google recommends downloading or screenshotting your historical reports before the switch.",
          "**Manual bidding and industry-level target CPA are being retired.** After the migration, Google Ads no longer supports manual bids, and a target CPA set per trade category is replaced by a single campaign-level figure.",
          "**Weekly budgets become daily averages.** Google divides your historical weekly budget by seven, and monthly spend is then capped at that daily figure multiplied by 30.4.",
        ],
      },
      { type: "p", text: "Standard Performance Max campaigns are a different product: billed per click and able to serve across Google's wider inventory, including YouTube, Gmail and the Display Network. The per-lead billing and the Search-and-Maps-only placement described above belong to the specialized Local Services format, not to Performance Max in general ([Google Ads Help](https://support.google.com/google-ads/answer/17213585?hl=en))." },
      { type: "h3", text: "Display and YouTube" },
      { type: "p", text: "They are usually the lowest priority for a residential contractor. They become useful for remarketing later, once search and pay-per-lead are producing work you can actually measure." },
      { type: "h3", text: "Pay-per-click and pay-per-lead are two different bills" },
      { type: "p", text: "A cost per lead from Local Services and a cost per click from a search campaign are not comparable numbers. Blending them produces a figure that describes neither, and it is one of the quickest ways to misjudge an HVAC budget." },
      { type: "p", text: "Set side by side, the two paid options differ in how they are billed, what they target and what you can report:" },
      {
        type: "table",
        head: ["What differs", "Search ads", "Local Services, as pay-per-lead Performance Max"],
        rows: [
          ["Billing", "Per click", "Per valid lead"],
          ["Targeting", "Keywords, match types, negatives and service areas", "Service categories and service areas; no keywords"],
          ["Where the ads appear", "Google Search results", "Google Search and Google Maps only"],
          ["What you can report", "Clicks, conversions and cost per conversion", "Leads you were charged for and cost per lead; historical Local Services reports do not migrate"],
        ],
        caption: "The same business, two formats. They differ in how they are billed, in what you can target and in where the ads appear.",
      },
      { type: "h2", text: "Service-line separation: the decision that shapes everything else" },
      { type: "p", text: "A residential HVAC company sells at least four different things to four different kinds of buyer:" },
      {
        type: "table",
        head: ["Service line", "What the searcher wants", "Typical urgency"],
        rows: [
          ["Emergency repair", "Someone today; the system has failed", "Hours"],
          ["Replacement / install", "A quote, financing, a decision timeline", "Days to weeks"],
          ["Maintenance / tune-up", "A seasonal appointment, a plan", "Weeks"],
          ["Indoor air quality, ductwork, other", "Information, then a quote", "Variable"],
        ],
        caption: "The four service lines a residential HVAC company sells, what the searcher wants in each, and how urgent the need usually is.",
      },
      { type: "p", text: "These are not one conversation. Someone with no cooling in July is not comparing heat pump efficiency ratings, and someone pricing a replacement is not going to book an emergency dispatch. If both searches trigger the same ad and land on the same page, one of them is being served badly." },
      { type: "h3", text: "When to split into separate campaigns" },
      { type: "p", text: "Google's own guidance is the cleanest rule available: create a separate campaign whenever **the budget or the locations differ**, and keep them as ad groups inside one campaign when they do not ([Google Ads Help](https://support.google.com/google-ads/answer/6372655?hl=en)). Applied to HVAC, that leaves three decisions:" },
      {
        type: "ul",
        items: [
          "Split **emergency repair** from **replacement** if you want to cap what you spend on emergency calls, or if you advertise replacement across a wider radius than you will actually dispatch a truck.",
          "Split **maintenance** if it runs on a different budget rhythm: a small always-on spend rather than a seasonal surge.",
          "Keep services together as ad groups only if they genuinely share a budget and a service area. Accept that you will not be able to pace them separately.",
        ],
      },
      { type: "p", text: "The pay-per-lead format has the same constraint in a different form: it applies one target CPA across every trade category, and Google's documented workaround is a separate campaign for each trade ([Google Ads Help](https://support.google.com/google-ads/answer/17213585?hl=en))." },
      { type: "h3", text: "What each service line needs from its campaign" },
      { type: "p", text: "Emergency campaigns need call assets, ad schedules that match the hours someone actually answers, and copy that states your response time honestly. Replacement campaigns need a clear quote path: financing if you genuinely offer it, and a form that asks enough to qualify a lead without filtering out real buyers. Maintenance campaigns need one specific offer with visible terms." },
      { type: "h3", text: "Do not reorganize the account after you start spending" },
      { type: "p", text: "Google's documentation notes that reorganizing an account later \"wipes out all the valuable data you've accumulated,\" and that can affect how the ads perform. Decide the structure before you spend, not after. Whatever you choose, name things so a stranger could read them: `Search | Repair | Emergency | [metro]` tells the next person exactly what it is. `Campaign 1` does not." },
      { type: "h2", text: "Planning a search campaign that reaches the right ZIP codes" },
      { type: "p", text: "The build order is deliberate: geography first, then keyword themes, then negatives, then the landing page, then the assets. Get the service area wrong and every later decision is aimed at the wrong people." },
      { type: "h3", text: "Start with the service area, not the keywords" },
      { type: "p", text: "Target the cities and ZIP codes you actually drive to, and exclude the rest. Then check the distance and geographic reports after two weeks. A surprising share of wasted spend shows up there, in clicks from towns just outside your boundary." },
      { type: "h3", text: "Build keyword themes per service line" },
      { type: "p", text: "Each ad group should hold to one tight theme: emergency AC repair, furnace repair, heat pump installation, maintenance tune-up. Phrase and exact match are the safer starting point for a local service business. Broad match on a head term like \"HVAC\" pulls in job seekers, parts buyers and do-it-yourselfers faster than you can add negatives." },
      { type: "h3", text: "Negative keywords are a weekly habit, not a one-time setup" },
      { type: "p", text: "The search terms report is where money leaks. In HVAC, the searches that end up being blocked usually fall into a few groups:" },
      {
        type: "ul",
        items: [
          "Jobs and salaries.",
          "Wholesale and parts.",
          "Do-it-yourself repairs and troubleshooting.",
          "Rentals and landlord-tenant questions.",
          "Classes and certification.",
          "City names outside your service area.",
        ],
      },
      { type: "p", text: "Add negatives based on what you see in the report, not from a list you downloaded. Remember that negatives do not match close variants, so a plural, a singular or a synonym has to be added separately, while casing and misspellings are handled for you ([Google Ads Help](https://support.google.com/google-ads/answer/2453972?hl=en)). Watch too for negatives so broad that they block work you actually sell." },
      { type: "h3", text: "Match the ad to the page" },
      { type: "p", text: "If the ad promises same-day AC repair, the landing page should say so, put the phone number where it can be seen, and name the cities you serve. Mismatch between ad and page is one of the most common reasons a technically sound campaign converts poorly." },
      { type: "h3", text: "Use the assets that cost nothing extra to test" },
      { type: "p", text: "Three asset types are worth setting up before you raise any bid:" },
      {
        type: "ul",
        items: [
          "**Call assets**, Google's current name for call extensions, put a tappable number under the ad on mobile. On desktop, a \"Call us\" button reveals it. Schedule them for the hours someone answers.",
          "**Location assets** reinforce the service area by showing your business location next to the ad.",
          "**Sitelinks** let a searcher choose between repair, replacement and maintenance, which is useful precisely because those are three different jobs.",
        ],
      },
      { type: "h2", text: "Allocating budget across service lines and seasons" },
      { type: "p", text: "Budget follows capacity and job value, and it moves with the season. An even split across service lines ignores both." },
      { type: "h3", text: "Do not divide the budget evenly" },
      { type: "p", text: "Weight it by two things: the work you can actually deliver, and what the job is worth. If you have two install crews in July, do not buy install leads you cannot service. If the install board is full and the service techs are idle, move money toward repair and maintenance." },
      { type: "h3", text: "Plan the year in three phases, not twelve months" },
      {
        type: "ul",
        items: [
          "**Heating peak** (late fall through winter): furnace repair and replacement demand rises, so heating budgets should be at their highest.",
          "**Cooling peak** (late spring through summer): the same picture on AC terms.",
          "**Shoulder months** (spring and fall): put budget into maintenance plans, tune-ups and replacement research, the work that fills the calendar and creates next season's repair customers.",
        ],
      },
      { type: "h3", text: "Set a floor before you set a target" },
      { type: "p", text: "Bidding needs conversion data to learn from. A budget small enough to produce a handful of conversions a month will not get out of the learning phase, and the account will look like it \"does not work\" when the real problem is a lack of volume. That is a structural limit, not a promise about results." },
      { type: "h3", text: "Change budgets on a schedule, not in a panic" },
      { type: "p", text: "A weekly review of search terms, budgets and pacing is enough for most single-market contractors. Swinging the budget midweek because of one slow Tuesday creates more noise than signal." },
      { type: "h2", text: "What HVAC Google Ads cost: reading the published evidence" },
      { type: "p", text: "There is no single HVAC cost per lead, and no single source can give you one. What the published figures can do is show the shape of the market and the range of methods behind it. Most guides lose the thread here because four different kinds of number get mixed together, so every figure below is labeled as a platform estimate, a vendor benchmark, a competitor-reported range, or a worked calculation." },
      { type: "h3", text: "Keyword Planner estimates are not prices" },
      { type: "p", text: "Keyword Planner returns a rounded average monthly search volume and a top-of-page bid estimate for a keyword. For the terms closest to this topic, the numbers are small. \"hvac ppc\" returned 170 monthly US searches with a **$53.80** average CPC estimate and a competition index of 21. \"hvac advertising\" returned 390 searches at **$33.00** with an index of 25 (Keyword Planner via DataForSEO, US, retrieved 7 November 2026). Note what those are: national averages, in volume buckets, for queries that agencies and software vendors bid on. **They are not what a contractor in a specific metro pays, and they are not search difficulty.** They are also the only measured figures in this guide, and neither is a budget." },
      { type: "h3", text: "Published benchmarks describe someone else's sample" },
      { type: "p", text: "The most detailed public benchmark for this category is SearchLight's HVAC and plumbing advertising benchmark. It covers **816 contractors, 8,077 campaigns and $14.88M in Google Ads spend from 1–31 January 2026**, with 143,008 leads and $77.7M in tracked closed revenue. It reports a blended cost per lead of **$104**, split into branded search at **$34**, non-branded search at **$149** and Performance Max at **$72**. That Performance Max figure covers standard campaigns, which the publisher describes as serving across Search, Display, YouTube, Gmail and Maps, not the pay-per-lead Local Services format. Heating repair campaigns came in at **$144** per lead with a 38.2% book rate and a $3,225 average ticket, and AC repair at **$231** with a 37.0% book rate and a $3,174 average ticket ([SearchLight Digital](https://searchlightdigital.io/what-is-a-good-cost-per-lead-for-hvac-google-ads/), published February 2026)." },
      { type: "p", text: "Those figures are useful, and they are also easy to misuse. Six caveats matter:" },
      {
        type: "table",
        head: ["Caveat", "Why it matters to you"],
        rows: [
          ["**One vendor's client base**", "It is first-party data from contractors using SearchLight's attribution product, not a market sample. Contractors who buy attribution tooling are not the median contractor."],
          ["**January 2026 only**", "One month, in heating season. The publisher itself calls heating-repair strength seasonally expected. An AC campaign's economics in July are not in this dataset."],
          ["**HVAC and plumbing are aggregated**", "The headline $104 blends both trades. It is not an HVAC benchmark."],
          ["**Conversion and CRM limits**", "Leads depend on each account's tracking, with offline conversions \"where available\". Two contractors may count a lead differently."],
          ["**No CPC published**", "The dataset reports cost per lead, not cost per click. You cannot convert one into the other from this page."],
          ["**Not a universal benchmark**", "It is a comparison point, not an answer."],
        ],
        caption: "Six reasons a published benchmark describes someone else's sample rather than yours.",
      },
      { type: "h3", text: "Competitor-reported ranges disagree with each other" },
      { type: "p", text: "The gap between those published ranges is the useful signal. EZE Grow's 2026 budget guide reports cost per lead of **$25–$80** and cost per booked job of **$60–$150**, with CPC ranges by keyword type: AC repair $8–18, furnace repair $7–16, HVAC installation $12–25, and emergency keywords $15–35 ([EZE Grow](https://ezegrow.com/google-ads-for-hvac-companies-budget-guide/)). The HVAC SEO Agency publishes a different split by category: emergency repair $25–80, general service $15–50, installation $20–60, maintenance $8–25 and brand $1–5 ([hvac-seo.agency](https://hvac-seo.agency/blog/hvac-ppc-advertising/hvac-ppc-budget-guide/)). Neither methodology is published, and neither is verified here. That is the point: **if two agencies in the same category publish ranges that do not overlap, a benchmark is not a budget input.**" },
      { type: "h3", text: "How to use a published benchmark without copying it" },
      { type: "p", text: "Treat a published benchmark as a sanity check on your own numbers after 60 to 90 days, in your market, with your tracking. Before that, your cost per lead is unknown, and any number you plan against is a placeholder." },
      { type: "h2", text: "A short economics primer: leads, qualified leads and booked jobs" },
      { type: "p", text: "Four numbers drive everything, and they are routinely confused with each other:" },
      {
        type: "ol",
        items: [
          "**Leads:** every inbound contact attributable to the campaign, whether a call, a form submission or a message.",
          "**Qualified leads:** leads that meet criteria you have written down and apply consistently, such as being in your service area, from a decision-maker and for work you actually sell.",
          "**Booked jobs:** leads that turn into a scheduled visit.",
          "**Sold jobs:** booked jobs that become paying customers.",
        ],
      },
      { type: "p", text: "Two rates follow, and the denominator is the entire argument:" },
      {
        type: "ul",
        items: [
          "**Booking rate** = booked jobs ÷ **all** inbound leads.",
          "**Qualified-to-booking rate** = booked jobs ÷ **qualified** leads.",
        ],
      },
      { type: "p", text: "Those two rates describe the same funnel from different starting points, so the denominator has to be named every time. Using a cost per qualified lead with a booking rate calculated from all leads overstates the cost per booked job, and the size of that error depends on the qualified-lead rate." },
      { type: "p", text: "One formula carries the rest of this guide, and it only holds when both terms count the same leads:" },
      { type: "blockquote", text: "**Cost per booked job = cost per lead ÷ booking rate**, with both the cost per lead and the booking rate counted over the same set of leads." },
      { type: "p", text: "A $150 lead at a 30% booking rate works out to $500 per booked job. The lead price did not change. The schedule did. That is why conversion work, whether it is answering faster, qualifying on the phone or offering a booking path, moves the number that matters without touching a single bid." },
      { type: "p", text: "Five cost numbers get used in HVAC reporting, and they are not interchangeable. Each one divides the same spend by a different count:" },
      {
        type: "table",
        head: ["Metric", "Spend divided by", "What it tells you"],
        rows: [
          ["Cost per click", "Clicks", "What the auction charged before anyone reached your site"],
          ["Cost per lead", "Leads, meaning calls, forms and messages", "What a contact costs, whether or not it was worth pursuing"],
          ["Cost per qualified lead", "Leads that meet criteria you wrote down", "What a contact worth pursuing actually costs"],
          ["Cost per booked job", "Jobs on the schedule", "What an appointment costs"],
          ["Cost per sold job", "Jobs that turned into paying customers", "What a customer costs"],
        ],
        caption: "The same spend divided five ways. Each step down the table raises the cost figure and lowers the count, which is why two people can describe the same account with very different numbers and both be right.",
      },
      { type: "h3", text: "What a booked job can afford" },
      { type: "p", text: "It depends on your average ticket and your margin, not on a benchmark. Three sources work through it. SearchLight's benchmark article runs a ticket-and-margin example. Inshalytics publishes a break-even illustration using a $500 repair ticket at 45% gross margin. VelocityPPC describes a budget method built on jobs, close rate and a target cost per booked job ([Inshalytics](https://inshalytics.com/blogs/hvac-google-ads-budget), [VelocityPPC](https://velocityppc.com/blog/hvac-google-ads-cost/), published September 2026)." },
      { type: "p", text: "None of them reconciles an all-lead booking rate against a qualified-lead rate, or works out a maximum allowable cost per booked job for each service line. That belongs in a companion article on HVAC cost per lead, along with the full model, both denominators and the worked examples. If you need the ceiling calculation now, treat it as separate reading rather than something to extrapolate from here. For the account work itself, see [HVAC Google Ads management](/industries/hvac)." },
      { type: "h2", text: "Lead quality and conversion tracking" },
      { type: "p", text: "If the tracking is wrong, every decision after it is wrong too. Three things need to be true before you judge a campaign." },
      {
        type: "figure",
        src: "/images/blog/hvac-google-ads-guide/from-search-to-booked-job-tracking.webp",
        alt: "Five-stage path from a search ad through a landing page, call or form, and CRM record to a booked job, with markers showing what is confirmed at each stage.",
        width: 1600,
        height: 757,
        caption: "The path a paid click should take: search ad, landing page, call or form, a CRM record, then a booked job. The markers underneath show how much is actually confirmed at each step: the first three are provisional, the fourth is an inbound lead, and only the last is a verified booked job.",
      },
      { type: "h3", text: "Count the actions that represent a lead" },
      { type: "p", text: "At a minimum, count form submissions and phone-number taps, plus inbound calls if you use call tracking. Set them up as conversion actions in Google Ads, which is how the platform learns what a lead looks like, so bidding optimizes toward outcomes instead of page views. Be clear with yourself about what each one proves. A tap on the phone number is a proxy for a call, not proof that one happened, and a form submit is a proxy for a lead, not proof that anyone answered it." },
      { type: "h3", text: "Expect the platform's number to be optimistic" },
      { type: "p", text: "Duplicate form submissions, spam and mis-clicks all inflate reported conversions. Compare what Google reports with what actually reached your dispatch board or inbox. When the two diverge, trust the one closer to revenue." },
      { type: "h3", text: "Import outcomes only if you have the plumbing for it" },
      { type: "p", text: "Google Ads can accept offline conversions imported from a CRM, which is how a booked or sold job gets back into bidding. Whether you can do that depends on a CRM with the data, a reliable match key and someone to maintain it. Many contractors do not have all three, and that is a legitimate place to stop. **Without a CRM and an offline conversion process, reporting stops at the lead.** You can know cost per call and cost per form. You cannot know cost per booked job, because the booking happens in your dispatch system, not in Google Ads." },
      { type: "p", text: "Two attribution caveats are worth stating plainly. Last-click attribution credits whichever channel touched the customer last, which under-credits earlier touchpoints and over-credits branded search. Local Services performance reports also do not transfer into Google Ads during the migration, so any comparison across that transition needs deliberate handling rather than assumption." },
      { type: "h2", text: "Operational mistakes that quietly waste budget" },
      { type: "p", text: "These show up in a lot of HVAC accounts, and each one has a cheap check." },
      {
        type: "figure",
        src: "/images/blog/hvac-google-ads-guide/where-hvac-google-ads-budget-is-wasted.webp",
        alt: "Four-panel graphic of common HVAC ad waste: irrelevant searches, every service crammed into one campaign, clicks from outside the service area, and a tracking chain with missing links.",
        width: 1200,
        height: 1200,
        caption: "Four ways an HVAC budget leaks: irrelevant searches pulling paid clicks, every service crammed into one campaign, ads served beyond the driveable area, and a tracking chain with missing links. The table below gives a cheap check for each.",
      },
      {
        type: "table",
        head: ["Mistake", "What it costs", "How to check"],
        rows: [
          ["One campaign for emergency, replacement and maintenance", "Budget flows to whichever line bids hardest, not the one you need", "Open the campaign list. If one campaign contains all three, it is happening."],
          ["No negatives, or a stale list", "Spend on parts, jobs, DIY and rentals", "Search terms report, last 30 days, sorted by cost"],
          ["Service area set by a radius you do not serve", "Clicks from towns you will not drive to", "Geographic and distance reports"],
          ["Broad match on head terms", "Volume without qualification", "Check match type on the terms consuming most spend"],
          ["Ad promises same-day service; page does not", "Paid clicks that never call", "Open the landing page on a phone in one hand while reading the ad"],
          ["Budget below the data threshold", "Learning never completes; the account \"does not work\"", "Conversions per month against a realistic minimum"],
          ["Performance Max launched before tracking is clean", "Budget spent on channels you cannot see, judged on conversions you do not trust", "Conversion action audit first, PMax second"],
          ["Slow response to form leads", "The lead is bought and then lost in the inbox", "Time-stamp five recent form leads from submission to first call"],
        ],
        caption: "Eight common ways an HVAC budget leaks, what each one costs, and a cheap way to check for it.",
      },
      { type: "p", text: "The last one is not an ads problem, but it behaves like one. A lead that sits for two days makes a functioning campaign look broken." },
      { type: "h2", text: "Working with an agency or freelancer" },
      { type: "p", text: "Most contractors eventually hand this to someone. Three questions separate a useful conversation from a sales call:" },
      {
        type: "ul",
        items: [
          "**How is the fee structured: fixed, hourly, or a percentage of spend?** Get the number and the scope in writing, and check whether reporting and strategy are included or billed separately.",
          "**What exactly will be reported each month, and what cannot be?** You want calls and forms counted separately, cost per lead by campaign, and month-over-month movement with seasonality noted. If nobody can tell you what happens after the lead arrives, that limit should be admitted rather than glossed over.",
          "**Who owns the accounts and the tracking?** You should hold admin access to Google Ads, Analytics, Tag Manager and your Business Profile, and you should be able to remove a partner without losing your history.",
        ],
      },
      { type: "p", text: "A useful test is whether the person will tell you what they cannot measure. An agency claiming full booked-job attribution without a CRM is describing something it cannot deliver." },
      { type: "h2", text: "Where this approach stops" },
      { type: "p", text: "Structural work improves your odds. It does not control the market. Demand moves with the weather, competitor pricing and local supply, and lead quality depends on how fast the phone is answered and how the person answering the phone handles the call, neither of which happens inside the ad account. For most contractors, attribution stops at the lead. No structure guarantees a cost per lead, a booking or a return, and anyone promising otherwise is selling certainty that does not exist." },
      { type: "h2", text: "FAQs" },
      { type: "h3", faq: true, text: "How much do HVAC Google Ads cost per month?" },
      { type: "p", text: "There is no standard monthly figure, because your spend is the number of leads you want multiplied by what a lead costs in your market. Only the second half of that can be looked up. SearchLight's January 2026 benchmark, built on 816 HVAC and plumbing contractors, put the blended cost per lead at $104, with branded search at $34, non-branded search at $149 and Performance Max at $72. EZE Grow publishes a much lower range of $25 to $80. To see the scale, multiply one of those benchmarks by a lead target: 30 leads a month works out to about $3,100 at the blended $104 and closer to $4,500 at the $149 non-branded figure. That is arithmetic on third-party benchmark data from other companies' accounts, not a forecast and not a recommended budget. Plan against your own numbers once you have 60 to 90 days of them." },
      { type: "h3", faq: true, text: "What is a reasonable monthly budget for an HVAC company?" },
      { type: "p", text: "There is no single correct figure, and any number quoted without your market and your tracking is a guess. Six things shape the answer:" },
      {
        type: "ul",
        items: [
          "**What you can afford to spend** before booked work starts paying it back.",
          "**Conversion volume.** A campaign that gathers very few conversions gives bidding little to learn from, while a larger budget can support several service lines at once.",
          "**Conversion quality.** A cheap lead that never books is not cheaper than an expensive one that does.",
          "**Campaign structure.** One combined campaign is cheaper to fund; separate service lines buy control and cost more to run.",
          "**Seasonality.** A heating budget in January and a maintenance budget in May are not the same number.",
          "**Operational capacity.** If the crews are booked three weeks out, more leads will not help.",
        ],
      },
      { type: "p", text: "Review the figure each season rather than each month, and treat any published minimum as someone else's starting point rather than a threshold you have to clear." },
      { type: "h3", faq: true, text: "Why do HVAC clicks cost so much?" },
      { type: "p", text: "Because you are bidding against other contractors for a search that often leads to a job worth several thousand dollars. Demand concentrates in the weeks when systems fail, so the same click costs more in a July heat wave than it does in April. National top-of-page estimates for related marketing terms sat between roughly $33 and $54 in November 2026, and peak-season auctions in competitive metros run higher. The click price itself is a poor way to judge any of this. Cost per lead is the next step up, and cost per booked job is the one that decides whether the campaign is working. A $40 click that turns into a booked replacement is cheap. A $12 click that never reaches a dispatcher is expensive no matter how good the auction looked." },
      { type: "h3", faq: true, text: "Should I pay an agency a percentage of ad spend or a flat fee?" },
      { type: "p", text: "Either can work, but the fee model matters less than what gets written down. A percentage of spend gives the agency a reason to spend more; a flat fee gives it a reason to do less work in a slow month. Neither is dishonest by itself. What protects you either way is a stated fee, a defined scope, and ownership of the Google Ads account, the tracking numbers, the CRM and the analytics property. Ask what happens to your history if you leave, and settle the reporting shape before the first invoice rather than after it." },
      { type: "h3", faq: true, text: "Are Google Ads worth it for an HVAC company?" },
      { type: "p", text: "They can be, once three things are true: the account is split by service line, the service area is enforced, and the tracking can tell one stage from the next. Those stages are not interchangeable. A click is a visit you paid for. A lead is someone who contacted you. A qualified lead is one that meets criteria you wrote down. A booked job is an appointment on the schedule, and a sold job is revenue. If your reporting stops at clicks or forms, you are guessing about everything downstream. With reliable booking data, the test is straightforward: compare cost per booked job with what a booked job is worth to your business. If you cannot measure bookings yet, that is the work to do first, not a reason to raise the budget. No structure or budget guarantees a result." },
      { type: "h3", faq: true, text: "Do I need Local Services Ads as well as search ads?" },
      { type: "p", text: "Not necessarily, and the two do different jobs. Local Services, now moving into Google Ads as Performance Max campaigns with pay-per-lead goals, targets people searching by service category in your service area and charges per valid lead. Search campaigns let you choose the services, terms and landing pages you appear for, and charge per click. Plenty of contractors eventually run both, but the sensible order is to get the phone answered reliably and the tracking clean first. Budget them separately, because a cost per lead and a cost per click cannot be compared, and blending the two hides which one is working." },
      { type: "h2", text: "About this guide" },
      { type: "p", text: "Written by Khandokar Riajul Islam, a performance marketing specialist with more than five years of experience in paid search, paid social and analytics. **No HVAC client case study is published, and none is implied here.** All benchmark figures are third-party, dated and attributed, and the operational guidance is general paid-media practice applied to residential HVAC rather than a report of campaign results." },
    ],
  },
  /* ==================================================================
   * ARTICLE 2 — HVAC Facebook & Meta Ads guide (Revision 6, 26 Nov 2026)
   * ==================================================================
   * Approved Revision 6 text, implemented as-is: WordStream figures are
   * identified as medians everywhere, sample-size disclosures are kept,
   * and Meta's documented Conversion Leads fit guidelines (including the
   * at-least-200-leads-per-month guideline) are preserved exactly.
   * No client results, no screenshots, no guaranteed outcomes.
   * ================================================================== */
  {
    "slug": "hvac-facebook-ads-guide",
    "title": "HVAC Facebook & Meta Ads: A Practical Guide for Contractors (2026)",
    "excerpt": "How HVAC contractors structure Facebook and Meta ads: realistic 2026 costs, the lead funnel, instant forms vs. landing pages, qualification, and the tracking stack that proves which leads become booked jobs.",
    "category": "hvac-meta-ads",
    "topic": "lead-generation",
    "status": "published",
    "publishedAt": "2026-11-26",
    "updatedAt": null,
    "author": "khandokar-riajul-islam",
    "featuredImage": {
      "src": "/images/blog/hvac-facebook-ads-guide/featured-hvac-facebook-ads-guide.jpg",
      "alt": "Illustration of a residential air-conditioning condenser unit connected by a glowing gold line to a smartphone showing a lead form with a check mark, on a dark green background.",
      "width": 1600,
      "height": 900,
      "caption": "Paid social for residential HVAC: the offer in the feed, the instant form that captures it, and the tracking that proves which leads became booked jobs."
    },
    "seo": {
      "title": "HVAC Facebook & Meta Ads: A Practical Guide for Contractors (2026)",
      "description": "What do Facebook ads cost HVAC contractors in 2026? CPL benchmarks, junk-lead fixes, and CAPI + GA4 tracking that shows which leads become booked jobs.",
      "ogImage": "/images/blog/hvac-facebook-ads-guide/og-hvac-facebook-ads-guide.jpg"
    },
    "related": [
      "hvac-google-ads-guide"
    ],
    "body": [
      {
        "type": "p",
        "text": "Facebook ads put an HVAC offer in front of a large local audience — and they are also one of the easiest budgets to waste. The leads arrive in volume, often earlier in the buying cycle than search leads, and with more junk mixed in. Contractors who treat Meta like a cheap faucet get the expensive version: hundreds of form fills, a phone that barely rings, and no way to prove what the spend produced."
      },
      {
        "type": "p",
        "text": "This guide covers how a Meta ads program should be built instead: what the verified 2026 cost data does and does not say, how the lead funnel actually works, when to use instant forms versus landing pages, how to filter out junk leads, the tracking stack (Conversions API + GA4) that connects form fills to booked jobs, and budget math you can defend. It is written for owners and general managers of residential heating and cooling companies in the United States. It is the paid-social companion to [HVAC Google Ads: A Practical Guide for Residential HVAC Contractors](/blog/hvac-google-ads-guide), which covers the high-intent search side, and to the [HVAC industry services overview](/industries/hvac)."
      },
      {
        "type": "p",
        "text": "**What this guide does not claim.** It contains no HVAC client results, no campaign screenshots, and no guaranteed outcomes. Every cost figure is labeled as one of four things: a platform estimate, a vendor benchmark, a competitor-reported estimate, or a worked calculation with its assumptions shown. No HVAC client case study is published, and none is implied here."
      },
      {
        "type": "h2",
        "text": "Do Facebook Ads Work for HVAC in 2026? (The Honest Answer)"
      },
      {
        "type": "p",
        "text": "Yes — with conditions. Meta ads work for HVAC as a demand-generation and retargeting channel: they put offers in front of homeowners who are not actively searching, and they keep your company visible between a homeowner's first thought and final decision. They underperform for \"my AC died today\" emergencies, and they produce expensive junk unless qualification, follow-up, and tracking are built deliberately."
      },
      {
        "type": "p",
        "text": "**Where Meta genuinely wins for HVAC:**"
      },
      {
        "type": "ul",
        "items": [
          "**Demand creation in the shoulder seasons.** Nobody searches for \"AC maintenance plan\" in March, but homeowners will notice a well-made tune-up offer. Meta reaches people before they search — which is exactly when a maintenance agreement or replacement quote gets planted.",
          "**Retargeting.** Website visitors who compared furnace options and left can be re-reached on Meta at low cost. Search ads remain essential for capturing active intent; Meta's strength here is staying visible during the consideration window and re-engaging the warmest audience you have.",
          "**Audience and creative testing.** Meta's audience targeting and in-feed placement make it a practical environment for testing offers and creative against homeowners who aren't actively searching, before committing budget to the offers that prove out (professional recommendation, not a cost comparison)."
        ]
      },
      {
        "type": "p",
        "text": "**Where Meta loses:** bottom-of-funnel emergency intent belongs to Google search and pay-per-lead Local Services. A homeowner with a dead compressor at 8 a.m. is not scrolling Facebook. And Meta's convenience cuts both ways: one-tap instant forms generate volume that arrives unqualified unless you engineer the friction deliberately (more on that below)."
      },
      {
        "type": "p",
        "text": "The evidence points the same direction: Meta and search are complements, not substitutes. In LocaliQ's home services advertising benchmarks study ([LocaliQ](https://localiq.com/blog/home-services-advertising-benchmarks/)), businesses running Facebook ads alongside search ads showed blended cost per lead reductions of **3–29%** depending on the trade, in a dataset of 4,595 North American client accounts (vendor-reported; the study period and methodology are stated in the page's own Data sources section: LOCALiQ client accounts running search, display, and/or social advertising between May 1, 2020, and June 25, 2021 — and the study's \"averages\" are technically median figures). Treat this as a historical cross-channel observation from that study period, not a current expected result and not a causal guarantee. The same study reported median social cost per click of $0.92–$1.92 across home services categories — a clicks metric from the same historical period, not a leads comparison."
      },
      {
        "type": "p",
        "text": "Contractor skepticism is real and worth taking seriously. In an [August 2024 r/smallbusiness thread](https://www.reddit.com/r/smallbusiness/comments/1f34533/), the consensus among home-service owners was that Facebook ads had become spammy and that Google or Local Services should come first. A December 2024 [r/ProHVACR thread](https://www.reddit.com/r/ProHVACR/comments/1hbtx2r/) featured a contractor weighing Facebook's ticket volume against Google's return (individual contractor reports, not benchmarks). Both experiences are consistent with what the benchmarks say: Meta's role is demand generation and re-engagement. Run it as the primary channel for a high-ticket replacement business and it will disappoint; run it alongside search, with qualification and tracking in place, and it earns its budget."
      },
      {
        "type": "p",
        "text": "For the other half of the picture — capturing demand that already exists — see the companion guide, [HVAC Google Ads](/blog/hvac-google-ads-guide), and [Google Ads services](/services/google-ads)."
      },
      {
        "type": "h2",
        "text": "What Do Facebook Ads Cost for HVAC? (2026 Benchmarks)"
      },
      {
        "type": "p",
        "text": "The closest verified category benchmark is **$42.95 per lead** (median) for Home & Home Improvement leads-objective campaigns (WordStream/LocaliQ 2026 Facebook ads benchmarks, updated September 15, 2026). That category is broader than HVAC, and the figure counts **platform-submitted leads — not qualified or booked jobs**. One terminology note, stated once here: WordStream labels its figures \"averages,\" but its methodology identifies them as **median figures** — this guide refers to them as medians. The leads-objective sample behind them is 452 US campaigns, reported separately from 1,377 US traffic-objective campaigns, running April 1, 2025–June 30, 2026, with each leads-objective subcategory including at least 4 active campaigns. One mechanics note: Meta bills for **ad delivery**, not a fixed amount per lead — cost per lead is calculated by dividing total ad spend by the number of leads a campaign generates. On the HVAC-specific side, HVAC Webmasters reports **$35–55 per lead** on Meta (vendor-reported estimate). On the search side, SearchLight Digital's HVAC-and-plumbing Google Ads dataset reports $104 blended and $149 non-branded per lead — a different platform, scope, and lead definition, covered separately below."
      },
      {
        "type": "p",
        "text": "**Vendor benchmark — WordStream/LocaliQ 2026 Facebook ads benchmarks** ([WordStream](https://www.wordstream.com/blog/facebook-ads-benchmarks-2026), updated September 15, 2026; methodology: **452 US leads-objective campaigns**, reported separately from 1,377 US traffic-objective campaigns, running **April 1, 2025–June 30, 2026**, with each leads-objective subcategory including at least 4 active campaigns — the rows below are **leads-objective campaigns only**; WordStream labels the figures averages, and its methodology identifies them as **medians**):"
      },
      {
        "type": "table",
        "head": [
          "Metric (2026, leads-objective campaigns)",
          "Home & Home Improvement median",
          "All-industry median"
        ],
        "rows": [
          [
            "Click-through rate",
            "2.14%",
            "2.70%"
          ],
          [
            "Cost per click",
            "$2.18",
            "$1.80"
          ],
          [
            "Conversion rate",
            "5.32%",
            "8.54%"
          ],
          [
            "**Cost per lead**",
            "**$42.95 (+4.10% YoY)**",
            "**$27.39**"
          ]
        ],
        "caption": "Home & Home Improvement includes plumbing, roofing, landscaping and other trades alongside HVAC, so treat the row as the closest published proxy, not an HVAC-only figure. \"Cost per lead\" is the price of a platform-submitted lead — before anyone qualifies, calls, or books it. These are reference category medians, not HVAC-only data: interpret them in the context of your market, offer, audience, and campaign objective — they are not HVAC targets or minimum acceptable performance."
      },
      {
        "type": "p",
        "text": "Three HVAC-specific sources fill in the picture, each with a different weight:"
      },
      {
        "type": "ul",
        "items": [
          "**HVAC Webmasters** reports Meta cost per click of $2.50–5.00 and cost per lead of **$35–55** (vendor-reported estimate; [hvacwebmasters.com/facebook-ads](https://hvacwebmasters.com/facebook-ads/)). This is the only place the $35–55 figure comes from, and it is one vendor's estimate, not a multi-source consensus.",
          "**Ryn Digital**, a deliberately contrarian take, reports **$60–130** per lead with lead quality rated 5/10 and recommends Meta at 15–20% of blended budget rather than a primary channel (competitor-reported estimate; [ryndigital.com](https://ryndigital.com/generate-hvac-leads/)).",
          "**A Webtonic agency roundup** reports offer-level spreads: maintenance offers at **$30–60** per lead, furnace offers around **$73**, and AC installation around **$117** (competitor-reported estimates, secondary sourcing; [webtonic.io](https://webtonic.io), August 2026). The spread is the point: **a cost per lead without an offer attached is a number that means nothing.** Cheap tune-up leads and expensive replacement-quote leads are different products."
        ]
      },
      {
        "type": "p",
        "text": "The search-side figures come from the largest HVAC dataset we could verify: **SearchLight Digital's January 2026 analysis of 816 HVAC and plumbing contractors, $14.9M of Google Ads spend, and 143,008 leads** (vendor benchmark; [SearchLight original research](https://www.searchlightdigital.io/what-is-a-good-cost-per-lead-for-hvac-google-ads/)). Note carefully: this dataset is **HVAC and plumbing combined**, and it measures **Google Ads, not Meta**."
      },
      {
        "type": "table",
        "head": [
          "Google Ads campaign type (HVAC & plumbing, Jan 2026)",
          "Cost per lead",
          "Booking rate",
          "Cost per paying customer"
        ],
        "rows": [
          [
            "Blended",
            "$104",
            "—",
            "—"
          ],
          [
            "Branded search",
            "$34",
            "55.3%",
            "$104"
          ],
          [
            "Non-branded search",
            "$149",
            "37.6%",
            "$804"
          ],
          [
            "Performance Max",
            "$72",
            "32.2%",
            "$447"
          ]
        ],
        "caption": "SearchLight Digital original research, January 2026 data. HVAC and plumbing dataset. \"Book rate\" and \"cost per paying customer\" are SearchLight's own reported metrics; cost per paying customer is SearchLight's customer-acquisition metric (total spend divided by paying customers) and is not interchangeable with a booked appointment or a booked job."
      },
      {
        "type": "figure",
        "src": "/images/blog/hvac-facebook-ads-guide/hvac-cpl-benchmarks-2026.webp",
        "alt": "Two-panel bar chart comparing cost-per-lead datasets: on the left, WordStream 2026 leads-objective medians for Home & Home Improvement ($42.95) and all industries ($27.39) with CTR, CPC and CVR medians; on the right, SearchLight's January 2026 Google Ads cost per lead for HVAC and plumbing ($149 non-branded, $104 blended, $72 Performance Max, $34 branded), labeled as different platforms and categories.",
        "width": 1600,
        "height": 800,
        "caption": "Two datasets, two platforms. Left: the WordStream/LocaliQ 2026 leads-objective medians — Home & Home Improvement is a broader category than HVAC, not an HVAC-only benchmark. Right: SearchLight's January 2026 Google Ads figures for HVAC and plumbing. Different platforms, scopes and lead definitions — not an apples-to-apples comparison."
      },
      {
        "type": "p",
        "text": "**These two datasets are not an apples-to-apples channel comparison, and this guide does not treat them as one.** They measure different platforms (Meta vs. Google Ads), different category scopes (Home & Home Improvement vs. HVAC and plumbing), different lead definitions (Meta platform-submitted form leads vs. Google Ads leads as reported by advertisers), and different data periods. Each is useful on its own terms: the WordStream row gives a category-level benchmark for what a Meta platform lead costs; the SearchLight data shows what leads cost on the Google search side and how booking rates differ by campaign type in SearchLight's figures. The complementarity argument — run both channels, choose roles deliberately — comes from LocaliQ's own cross-channel finding above, not from dividing one dataset by the other."
      },
      {
        "type": "p",
        "text": "One seasonal note: competition for homeowner attention typically intensifies in peak cooling and heating season, and costs can rise with it; many advertisers test offers and build audiences in shoulder seasons, when costs may be lower (professional reasoning, not a benchmark). The budget section covers sequencing."
      },
      {
        "type": "h2",
        "text": "How the HVAC Lead Funnel Actually Works on Meta"
      },
      {
        "type": "p",
        "text": "The funnel has six stages, and money leaks at specific, findable points. Most \"Facebook ads don't work\" experiences are not ad problems — they are leaks at the qualification, follow-up, or feedback stages, which never show up in the ad account's own reporting."
      },
      {
        "type": "table",
        "head": [
          "Stage",
          "What happens",
          "What \"good\" looks like",
          "Where it leaks"
        ],
        "rows": [
          [
            "1. Ad impression → click",
            "Homeowner sees the offer; category median CTR is 2.14%",
            "Reference only: compare with the 2.14% category median; not a performance target",
            "Weak offer or creative that looks like an ad"
          ],
          [
            "2. Instant form or landing page",
            "The click converts into a submission; category median CVR is 5.32%",
            "Evaluate against your own offer, audience, and landing-page or form experience",
            "Friction mismatch: forms too long for cold traffic, pages too thin for warm traffic"
          ],
          [
            "3. Platform lead",
            "Ad spend is billed for delivery; CPL = total spend ÷ leads generated (2026 category median: $42.95)",
            "Compare CPL with the $42.95 category median (a broader-category reference); judge actual performance through qualified leads and cost per booked job",
            "This is where most contractors stop measuring"
          ],
          [
            "4. Qualified lead",
            "Someone contacts the lead and confirms need, timeline, and service area",
            "Qualification rate engineered via form questions and verification",
            "Prefill junk, wrong-service submissions, out-of-area requests"
          ],
          [
            "5. Booked job",
            "The lead becomes a scheduled appointment",
            "First contact within minutes, not hours",
            "Follow-up delay is a common loss point (see speed-to-lead)"
          ],
          [
            "6. Feedback loop",
            "Booked/qualified status goes back to Meta so optimization targets real customers",
            "CRM stages flowing back through the Conversions API",
            "Often missing from small-business setups — until it exists, Meta optimizes toward form fills"
          ]
        ],
        "caption": "Stages 1–3 are visible in Ads Manager. Stages 4–6 decide whether the program makes money, and they live in your CRM and phone system, not the ad account. The WordStream category medians cited in rows 1–3 are comparison references from a broader category — not performance targets. Interpret them in the context of your market, offer, audience, and objective."
      },
      {
        "type": "figure",
        "src": "/images/blog/hvac-facebook-ads-guide/hvac-meta-lead-funnel.webp",
        "alt": "Six-stage diagram of the HVAC lead funnel on Meta: ad impression and click (median CTR 2.14%), instant form or landing page (median CVR 5.32%), platform lead (median CPL $42.95), qualified lead, booked job, and the CRM feedback loop, with the leak point named at each stage.",
        "width": 1600,
        "height": 800,
        "caption": "The six stages, split the way the article splits them: stages 1–3 are visible in Ads Manager and carry the WordStream category medians as comparison references; stages 4–6 live in the CRM and phone system, where qualification, follow-up speed and the feedback loop decide whether the program makes money."
      },
      {
        "type": "p",
        "text": "To see why cost per lead alone misleads, here is the same spend worked through three sets of assumptions. This is a **worked calculation, not benchmark data** — the qualification and booking rates are stated assumptions, because no verifiable published HVAC booked-job benchmark exists:"
      },
      {
        "type": "p",
        "text": "**Illustrative funnel — 100 platform leads at the $42.95 category benchmark (≈ $4,295 spend):**"
      },
      {
        "type": "table",
        "head": [
          "Scenario",
          "Qualification rate (assumption)",
          "Booking rate (assumption)",
          "Booked jobs",
          "Spend",
          "Cost per booked job"
        ],
        "rows": [
          [
            "Conservative",
            "40%",
            "25%",
            "10",
            "$4,295",
            "≈$430"
          ],
          [
            "Middle",
            "50%",
            "40%",
            "20",
            "$4,295",
            "≈$215"
          ],
          [
            "Optimistic",
            "60%",
            "50%",
            "30",
            "$4,295",
            "≈$143"
          ]
        ],
        "caption": "Every rate above is an assumption, chosen to be plausible — not a benchmark, not a client result, and not a promise. Real rates depend on the offer, the market, follow-up speed, and season."
      },
      {
        "type": "p",
        "text": "The spread is the lesson: at the **identical cost per lead**, cost per booked job varies roughly 3x depending on qualification and booking performance. Two contractors can pay the same $42.95 per lead and run very different economics. The levers that move qualification and booking rates are operational — form design, verification, phone speed — which is why the rest of this guide spends more time on them than on ad-account settings."
      },
      {
        "type": "h2",
        "text": "Instant Forms vs. Landing Pages: Which Should HVAC Companies Use?"
      },
      {
        "type": "p",
        "text": "Instant forms minimize friction and typically produce more submissions; landing pages give you full control over the message and are designed to pre-qualify — the trade-off practitioners commonly report, though outcomes depend on execution and follow-up. The right choice depends on follow-up capacity and how expensive the offer is: cold-traffic maintenance offers can live on instant forms with qualifiers, while high-ticket replacement offers generally justify a landing page plus retargeting. Many contractors end up running both."
      },
      {
        "type": "p",
        "text": "Meta documents three instant-form types ([Meta Business Help Center](https://www.facebook.com/business/help/179258984144385)):"
      },
      {
        "type": "ul",
        "items": [
          "**More Volume** — a short form that is quick to fill out and submit on a phone.",
          "**Higher Intent** — adds a **review step** where people confirm their details before submitting. This single setting is Meta's built-in friction filter.",
          "**Custom** — customizable design, images, and question layout for brand-matching."
        ]
      },
      {
        "type": "table",
        "head": [
          "",
          "More Volume form",
          "Higher Intent form",
          "Landing page"
        ],
        "rows": [
          [
            "Friction",
            "Lowest — one tap with prefilled profile data",
            "Moderate — review step before submission",
            "Highest — a full page visit"
          ],
          [
            "Lead quality",
            "Volume-first by design; junk exposure highest",
            "Adds friction designed to filter casual submissions",
            "Depends on page execution; built to pre-qualify"
          ],
          [
            "Verification options",
            "Qualifier questions; SMS verification (see below)",
            "Qualifier questions + review step + SMS verification",
            "Anything you build: OTP, scheduling, detailed copy"
          ],
          [
            "Data ownership",
            "Meta-hosted; download or CRM sync",
            "Meta-hosted; download or CRM sync",
            "Fully yours, measured in GA4"
          ],
          [
            "Tracking path",
            "Lead event + CRM download",
            "Lead event + CRM download",
            "GA4 key events + Pixel + CAPI natively"
          ],
          [
            "Best used for",
            "Cold demand generation, tune-up offers, list building",
            "Cold + warm traffic where quality matters",
            "Replacement quotes, retargeting, high-ticket offers"
          ]
        ],
        "caption": "Meta-hosted forms require downloading leads or syncing a CRM; landing pages keep the entire path on your own analytics."
      },
      {
        "type": "p",
        "text": "Community experience runs along the same lines, which is worth reading honestly. A [May 2026 r/FacebookAds thread](https://www.reddit.com/r/FacebookAds/comments/1tp2erd/how_are_you_getting_qualified_leads_from_facebook/) from a home-services marketer described \"300+ leads, maybe 10 made it into the CRM as real opportunities,\" with most commenters advocating landing pages or heavily-filtered forms; an [August 2024 thread](https://www.reddit.com/r/FacebookAds/comments/1ewqbug/) raised the same complaint about instant-form intent (individual practitioner reports, not benchmarks). A common pattern in these reports is friction that was never chosen deliberately: remove all friction and you pay for it downstream."
      },
      {
        "type": "p",
        "text": "Two practical rules follow from Meta's own documentation and the community evidence:"
      },
      {
        "type": "ol",
        "items": [
          "**Match friction to temperature.** Cold traffic gets More Volume or Higher Intent, starting with 2–4 relevant qualifier questions and adjusted based on what completion-rate and lead-quality testing shows; warm traffic (retargeting, past visitors) gets landing pages with the full offer.",
          "**One structural constraint:** if you specifically want to use Meta's Conversion Leads performance goal, the campaign must use **instant forms** — the goal does not apply to website-form campaigns ([Meta for Developers](https://developers.facebook.com/documentation/ads-commerce/conversions-api/conversion-leads-integration)). Website-form campaigns have a separate conversion-optimization path: they optimize toward website events measured through the Meta Pixel and Conversions API, rather than the Conversion Leads goal."
        ]
      },
      {
        "type": "p",
        "text": "For the landing-page side of this decision — what the page itself should do — see [CRO services](/services/cro) and the landing-page guidance in the [Google Ads companion guide](/blog/hvac-google-ads-guide)."
      },
      {
        "type": "h2",
        "text": "How to Stop Paying for Junk Leads (Qualification & Verification)"
      },
      {
        "type": "p",
        "text": "Junk leads are a design problem, not a Meta curse. Prefilled one-tap forms, missing qualifier questions, broad geography, and freebie-framed offers each manufacture junk independently — and each has a specific fix. The goal is not fewer leads; it is paying only for submissions a technician could actually book."
      },
      {
        "type": "p",
        "text": "**Why junk happens:** instant forms auto-fill a profile's name, email, and phone, so submitting costs almost nothing. Add an offer framed like a giveaway and a service area spanning two metros, and the form fills with homeowners who wanted the discount, moved last year, or live ninety minutes away. None of this shows up in the ad account — it shows up in your office's morning."
      },
      {
        "type": "h3",
        "text": "Qualifier questions that filter without killing volume"
      },
      {
        "type": "p",
        "text": "Meta allows up to 15 custom questions per instant form ([Meta Business Help Center](https://www.facebook.com/business/help/179258984144385)). You will not want 15 — every question adds friction. A reasonable starting point is **2–4 relevant questions**, then test the form's completion rate and lead quality to find the right number for your offer and audience — there is no universal platform rule:"
      },
      {
        "type": "ul",
        "items": [
          "**What do you need help with?** — AC repair / heating repair / replacement quote / maintenance plan. Catches wrong-service submissions before they enter your CRM.",
          "**Is your system currently working?** — Working fine / acting up / completely out. Separates the \"died today\" calls from the researching-for-spring crowd, which tells your office who to call first.",
          "**When do you plan to have this handled?** — ASAP / within a month / just researching. \"Just researching\" is a nurture lead, not a dispatch.",
          "**Property type and ZIP code** — single-family / condo / commercial, plus a ZIP field your dispatcher can check against the service area in seconds."
        ]
      },
      {
        "type": "p",
        "text": "Each answer also segments follow-up: ASAP-plus-broken goes to the front of the call list; \"researching\" goes into an email sequence. The questions are doing routing work, not just filtering."
      },
      {
        "type": "h3",
        "text": "Phone verification: Meta's native SMS option first"
      },
      {
        "type": "p",
        "text": "Meta instant forms now support **native SMS verification (where available)**: once the phone number is added as a required contact field, the form can require a **one-time passcode sent by SMS** before the form submits. Meta describes the feature as helping \"reduce spam and collect real contact information,\" and practitioners report it can weed out spam bots and disconnected numbers; Meta notes it may be enabled by default for some eligible advertisers. Availability may vary by account, market, and form configuration — the setting does not appear for every advertiser, so treat it as an option to check for, not a guaranteed feature. Where it lives: on **Higher Intent** forms, the form editor offers \"Require leads to verify their phone number with a one-time passcode\"; on other form types, the equivalent setting appears as \"Require SMS verification to submit form\" (see [Search Engine Land's Meta lead-gen walkthrough](https://searchengineland.com/meta-ads-lead-gen-what-you-need-to-know-456269), June 2025, and Meta's instant-form documentation — [Meta Business Help Center](https://www.facebook.com/business/help/179258984144385)). Note the trade-offs practitioners report: the code cannot reach landlines, so some legitimate submissions are lost, and verification cuts volume — which is precisely its job."
      },
      {
        "type": "p",
        "text": "**Third-party verification is for landing pages.** Meta's native SMS verification applies to instant forms; if you drive ad traffic to your own landing page instead, verification is your build: OTP by SMS or email, CAPTCHA, and honeypot fields through your form tool. Choose the mechanism that matches the conversion location — native verification where the form is Meta-hosted, custom verification where the form is yours."
      },
      {
        "type": "p",
        "text": "For expectations, the only public figure is anecdotal: in an [April 2025 r/FacebookAds thread](https://www.reddit.com/r/FacebookAds/comments/1k9j3vt/roofing_leads/) on fake leads in home services (roofing context), one commenter reported that a required, SMS-verified phone field cut fake submissions by **60–70%** in their experience (a single practitioner's report — not a benchmark, not HVAC-specific). Even at half that effect, the arithmetic is easy: verification costs little per lead, and unverified junk leads cost $40+ each at the category benchmark."
      },
      {
        "type": "h3",
        "text": "Offline feedback as the quality filter"
      },
      {
        "type": "p",
        "text": "The fix most contractors never install: sending qualification outcomes back to Meta, so the delivery system learns which leads became real conversations. Meta's Conversion Leads optimization exists for exactly this — a CRM dataset connected through the Conversions API that reports each lead's stage (contacted, qualified, quoted, booked). Once it runs, Meta optimizes toward people who resemble your actual customers instead of people who resemble form-fillers. That loop is the tracking section's centerpiece, next."
      },
      {
        "type": "p",
        "text": "The short version of this section: **Higher Intent form + 2–4 qualifier questions + Meta's native SMS verification (where available) + offline feedback.** Each layer removes a different kind of junk; weigh the added friction and cost of each against the value of the leads it saves for your offer and budget."
      },
      {
        "type": "h2",
        "text": "Tracking That Proves Which Leads Became Booked Jobs"
      },
      {
        "type": "p",
        "text": "The tracking stack that answers \"did these ads produce work?\" has four parts, and they serve **different purposes**: Meta Pixel + Conversions API with deduplication (event data for Meta's delivery system), GA4 key events (measurement of website activity across channels), the CRM feedback loop through Meta's Conversion Leads integration (feeding real outcomes back to Meta), and a measurement checklist you can audit quarterly. Basic cost per lead requires none of these on its own — it is ad spend divided by leads generated, both of which Ads Manager already reports. What the layers add is lead-quality measurement, cross-channel attribution, and eventually cost per **booked job** — which cannot be calculated until booked-job outcomes are connected somewhere (the CRM loop below). Build up as far as the questions you need answered."
      },
      {
        "type": "figure",
        "src": "/images/blog/hvac-facebook-ads-guide/hvac-meta-tracking-stack.webp",
        "alt": "Four-layer diagram of the Meta tracking stack: Meta Pixel plus Conversions API deduplicated by event ID within 48 hours, GA4 generate_lead key events, CRM stages uploading through the Conversion Leads integration, and a quarterly measurement checklist, with a feedback loop arrow from the CRM back to Meta.",
        "width": 1600,
        "height": 800,
        "caption": "Four parts, four different jobs: event data for Meta's delivery system, website measurement in GA4, real outcomes fed back through Conversion Leads, and the checklist that verifies each layer — the stack that eventually connects form fills to booked jobs."
      },
      {
        "type": "h3",
        "text": "Meta Pixel + Conversions API, deduplicated"
      },
      {
        "type": "p",
        "text": "Run both the browser Pixel and the server-side Conversions API — Meta calls this a redundant setup — and deduplicate them. Meta's documented method: send the same **event_id** and **event_name** for each event from both the browser and the server; Meta discards the duplicate when both arrive within **48 hours**, generally keeping the first-received event ([Meta for Developers — deduplication](https://developers.facebook.com/documentation/ads-commerce/conversions-api/deduplicate-pixel-and-server-events), updated June 28, 2026). The practical version for HVAC: a `Lead` event fires when a form is submitted, with a unique event ID generated per submission and passed to both the browser and the server."
      },
      {
        "type": "p",
        "text": "Why run a server path at all? A server-side delivery route gives Meta a second, more reliable path for the events your site is permitted to send — one that does not depend on the visitor's browser session completing normally. **What it does not do is bypass anything:** server events still require lawful consent and respect the same privacy rules as browser events, and they cannot recover identifiers that were never shared — if a visitor's browser blocks the Pixel or the person never provides contact details, the server event carries less matching information, not more. Match quality depends on the data people actually provide, which is why Meta's Events Manager reports **Event Match Quality (EMQ)** and dataset diagnostics — event coverage, deduplication status, and matching diagnostics — as the tools to verify your integration ([Meta for Developers — Dataset Quality API](https://developers.facebook.com/docs/marketing-api/conversions-api/dataset-quality-api/), updated October 21, 2026)."
      },
      {
        "type": "h3",
        "text": "GA4 key events for lead campaigns"
      },
      {
        "type": "p",
        "text": "GA4 measures website activity — including submissions of forms that live on your website — across **all** channels: organic, email, and paid social on one definition. Google Analytics 4 works as: event → key event → conversion. Mark the `generate_lead` event (GA4's documented lead-generation example) as a key event. **One workflow note:** linking Google Ads to the GA4 property does not by itself create the conversion — after linking, you create or import the conversion action based on the GA4 key event through Google Ads' conversion setup workflow; only then can search and Meta be compared on the same definition ([Google Analytics Help](https://support.google.com/analytics/answer/9356034)). **One scope note:** GA4 website events do not capture leads submitted through Meta-hosted instant forms, which never pass through your website. Reconcile Meta instant-form leads and website leads separately in CRM reporting before evaluating qualified leads, booked jobs, or paying customers."
      },
      {
        "type": "p",
        "text": "For the server-side implementation — GA4 through GTM, server containers, and the plumbing that makes CAPI and GA4 tell the same story — that is precisely the work covered in [Analytics & tracking services](/services/analytics)."
      },
      {
        "type": "h3",
        "text": "The Conversion Leads goal: the CRM feedback loop"
      },
      {
        "type": "p",
        "text": "The least commonly implemented part of the stack in small businesses (professional observation, not a measured adoption rate): Meta only knows what you tell it happened **after** the form. Meta's Conversion Leads optimization closes the loop ([Meta for Developers — Conversion Leads integration](https://developers.facebook.com/documentation/ads-commerce/conversions-api/conversion-leads-integration)):"
      },
      {
        "type": "ul",
        "items": [
          "Your CRM connects as a **CRM dataset** through the Conversions API, and each lead's stages flow back with the lead ID — contacted, qualified, quoted, booked.",
          "**Meta's documented fit guidelines** (Meta frames these as \"check if your business is a good fit\" criteria, not universal requirements or guarantees): instant forms (not website-form campaigns); a business Ads Manager account; **at least 200 leads per month** generated into the integration; CRM uploads **at least once daily**; a target stage that occurs **within 28 days** of lead creation; and a target stage converting at roughly **1–40%** of leads.",
          "The performance goal **cannot change after the campaign publishes** — if you plan to switch from lead optimization to Conversion Leads, the documented path is to duplicate the campaign.",
          "Meta's documented timeline includes a data-validation period and a **2–4 week learning phase** before the optimization is fully live."
        ]
      },
      {
        "type": "p",
        "text": "The requirement profile tells you who this fits: contractors generating enough lead volume to feed the integration daily, with a CRM that can send stage updates. Smaller operations get most of the same benefit from the simpler version of the loop — reviewing CRM outcomes monthly and adjusting offers and qualifiers by hand."
      },
      {
        "type": "h3",
        "text": "Measurement checklist"
      },
      {
        "type": "table",
        "head": [
          "Signal",
          "Where to verify",
          "What it proves"
        ],
        "rows": [
          [
            "Pixel and CAPI both firing",
            "Events Manager → Test Events",
            "The site sends events Meta can use"
          ],
          [
            "`Lead` event on form submit",
            "Events Manager → event list",
            "Campaigns can optimize to something real"
          ],
          [
            "Deduplication working (matching event IDs)",
            "Events Manager → deduplication diagnostics",
            "Pixel + CAPI aren't double-counting the same lead"
          ],
          [
            "Event Match Quality (EMQ) score",
            "Events Manager → dataset quality",
            "Server events carry usable contact information"
          ],
          [
            "`generate_lead` key event in GA4",
            "GA4 → Admin → Key events, then Realtime",
            "Website leads are measured consistently across all channels (instant-form leads are tracked in Meta and the CRM — see the scope note above)"
          ],
          [
            "Google Ads conversion created from the GA4 key event",
            "Google Ads → Goals → Conversions (create or import from the GA4 key event after linking)",
            "Search and Meta compare on one definition"
          ],
          [
            "CRM stages uploading as offline events",
            "Events Manager → CRM dataset",
            "Meta optimizes toward qualified/booked leads"
          ],
          [
            "Booked jobs in the CRM",
            "Your CRM",
            "The only number that pays for the ads"
          ]
        ],
        "caption": "Items 1–7 are one-time or weekly checks; item 8 is the monthly business review. If items 3–7 fail quietly, the ad account will look better than the business is actually doing — which is exactly the failure mode this checklist exists to catch."
      },
      {
        "type": "h2",
        "text": "Speed-to-Lead: The Follow-Up System That Decides Your ROI"
      },
      {
        "type": "p",
        "text": "Response speed is the highest-leverage variable in the funnel after lead quality — and it costs nothing but process. The most-cited research on lead response, the **2007 Lead Response Management study** conducted by InsideSales.com (a lead-response software vendor) with Dr. James Oldroyd, then a research fellow at MIT Sloan, found that the **odds of contacting** a web lead were roughly **100 times higher** and the **odds of qualifying** it about **21 times higher** when the first call attempt came within **5 minutes** rather than 30. Read those numbers precisely: they are odds ratios between two response windows — not conversion-rate multipliers, and not a claim that every lead converts 21 times more often. The study drew on three years of data across six companies — 15,000+ leads and 100,000+ call attempts — it did not measure close rates, it is not HVAC-specific, and because it was vendor-conducted industry research rather than an academic publication, treat it as a directional signal about how sharply response odds fall with delay. (The original report is not stably hosted online; scope and figures are corroborated in [Expertise's speed-to-lead statistics audit](https://www.expertise.ai/stats/speed-to-lead-statistics) and [Rework's lead-response-time review](https://resources.rework.com/libraries/lead-management/lead-response-time).)"
      },
      {
        "type": "p",
        "text": "The follow-up study replicated the pattern at larger scale: firms responding within **one hour** were about **7x more likely to qualify** the lead than firms responding an hour later, and far more likely than firms waiting 24 hours or more (Oldroyd, McElheran & Elkington, \"The Short Life of Online Sales Leads,\" Harvard Business Review, March 2011 — 2,241 US firms, cross-industry). The same study found **37%** of companies responded within an hour, **23%** never responded at all, and the average response time was **42 hours**. Both studies predate modern HVAC marketing, and neither is HVAC-specific — but nothing about homeowner behavior since suggests the underlying pattern reversed."
      },
      {
        "type": "p",
        "text": "**Why this matters at least as much on Meta** (professional reasoning, not a measurement): Meta leads often arrive earlier in the buying cycle than search leads — the homeowner responded to an offer rather than searching in urgent mode — so they have more of the journey left, and the response-odds research above argues for treating speed as the first operational priority rather than an afterthought."
      },
      {
        "type": "p",
        "text": "The system itself is boring by design:"
      },
      {
        "type": "ul",
        "items": [
          "**Instant acknowledgment** — an automated SMS and email the moment the form lands: \"Got your request — [Company] is checking schedules and will call within the hour.\"",
          "**CRM routing to a human** — the lead lands in a queue with an owner and a timer. Everyone knows who calls next.",
          "**Missed-call text-back** — if the office misses the return call, an automatic text recovers it instead of losing it to the next contractor's ad.",
          "**After-hours handling** — an auto-reply with a booking link and an honest response window. Overnight form fills sit longest before anyone can call; give them something to do at 11 p.m.",
          "**One KPI on the wall: median minutes to first human contact.** Staffed-hours target: under 5 minutes. If that number is 90, every dollar of ad spend is working against it."
        ]
      },
      {
        "type": "p",
        "text": "Speed-to-lead is also the cheapest funnel fix in this guide. Qualification and tracking take setup; a faster phone simply requires deciding that leads get answered like the phone is ringing — because now it is."
      },
      {
        "type": "h2",
        "text": "Creative & Offers: What Actually Gets Clicks (Without the Fluff)"
      },
      {
        "type": "p",
        "text": "Creative matters less than the funnel around it, but it still decides the CTR line in your benchmarks. The one Ad Library audit we could verify found that only **20.2% of 173 audited HVAC/plumbing advertisers used a \"Call Now\" call-to-action** (PipelineOn, June 2026 — a single-audit snapshot, [source](https://pipelineon.com/blog/hvac-plumbing-facebook-ads-guide/)), leaving most ads competing on the same \"Learn More\" click path."
      },
      {
        "type": "p",
        "text": "The practitioner pattern underneath the data: **real-tech video beats polished stock.** A phone-shot clip of a technician explaining what a failed capacitor looks like, or what a tune-up actually includes, tends to outperform a stock photo of a smiling family next to an air conditioner. Contractors in a [March 2026 r/FacebookAds thread](https://www.reddit.com/r/FacebookAds/comments/1rklgwx/) on lead follow-up credited exactly that — offer clarity and real footage, not production value (individual reports, not benchmarks). Add captions for sound-off viewing, since most feed video plays muted."
      },
      {
        "type": "h3",
        "text": "Creative fatigue and the seasonal calendar"
      },
      {
        "type": "p",
        "text": "Audiences saturate over time: frequency climbs and CTR typically sags until creative is refreshed (a practitioner pattern, not a measured HVAC benchmark). Common agency guidance is to refresh creative every **10–14 days** during active campaigns (vendor guidance, e.g., [Koro's HVAC ad-ideas roundup](https://getkoro.app/blog/facebook-ad-ideas-for-hvac-businesses) — treat as a rule of thumb, not research), watching frequency and CTR trend rather than the calendar alone. Seasonal swaps do double duty: tune-up and maintenance offers in spring, cooling and repair content at peak summer, furnace and heating content in fall, and replacement/financing angles in shoulder months when quote-shoppers are planning. This matches the seasonal budget rhythm in the Google Ads guide — the two calendars should be built together."
      },
      {
        "type": "h3",
        "text": "Offer differentiation"
      },
      {
        "type": "p",
        "text": "The most common creative weakness in this category is sameness: the same \"$69 tune-up\" offer as every competitor, dressed in different colors (professional observation, not a research finding). Differentiation that survives a feed:"
      },
      {
        "type": "ul",
        "items": [
          "**Specificity beats discounts** — \"Furnace inspection + carbon-monoxide check, done by a NATE-certified tech, photos of your system texted after\" beats another $69 tune-up.",
          "**Guarantees with teeth** — same-day service windows or satisfaction commitments, stated plainly.",
          "**Angle, not just offer** — the maintenance-plan framing (\"one visit a season, priority booking\") versus the one-off discount framing attracts a different, stickier customer."
        ]
      },
      {
        "type": "p",
        "text": "Keep creative in its lane: it wins the click at a $2.18 category median CPC, but qualification and follow-up decide what the click is worth. Creative that oversells a maintenance offer as a giveaway manufactures the junk-lead problem in the previous section."
      },
      {
        "type": "h2",
        "text": "Budget Allocation: How Much Should an HVAC Company Spend?"
      },
      {
        "type": "p",
        "text": "There is no universal daily minimum for HVAC Meta ads. Budget size follows from three things: the geography you can actually serve, the economics of the offer, and how many leads your office can contact within minutes. Start with the arithmetic your market implies, then validate against **measured** cost per lead after 2–4 weeks — not against a rule of thumb from a blog (including this one)."
      },
      {
        "type": "p",
        "text": "**Worked scenarios at the $42.95 category benchmark** (worked calculation, not a promise — see the caveats below the table):"
      },
      {
        "type": "table",
        "head": [
          "Daily budget",
          "30-day spend",
          "Platform leads at $42.95 CPL"
        ],
        "rows": [
          [
            "$20/day",
            "$600",
            "≈14 leads"
          ],
          [
            "$40/day",
            "$1,200",
            "≈28 leads"
          ],
          [
            "$80/day",
            "$2,400",
            "≈56 leads"
          ],
          [
            "$150/day",
            "$4,500",
            "≈105 leads"
          ]
        ],
        "caption": "Caveats, all four of which matter: the $42.95 benchmark is a Home & Home Improvement category median that is broader than HVAC; new campaigns typically start above benchmark while the learning phase runs; platform leads ≠ qualified or booked jobs (see the funnel math); and seasonal competition can push real CPLs above benchmark at peak. Treat the table as the arithmetic of the benchmark, not as a volume forecast."
      },
      {
        "type": "p",
        "text": "**A qualitative framework for sizing the budget** (professional recommendation, not benchmark data):"
      },
      {
        "type": "ul",
        "items": [
          "**Geography actually served** — budget should match the radius your trucks genuinely cover, not the metro you wish you served. A budget spread across a geography you won't drive to buys impressions, not leads.",
          "**Offer economics** — a replacement-quote program needs headroom for expensive quote-season leads; a maintenance-plan program can run leaner but year-round.",
          "**Follow-up capacity** — the office's realistic daily call queue caps the useful budget (see the gate below).",
          "**Sequencing** — test and build audiences in shoulder seasons when costs may be lower; scale into peak season only after qualification and follow-up are proven.",
          "**Discipline on radius** — when budget and market don't fit, narrow the radius before lowering expectations."
        ]
      },
      {
        "type": "p",
        "text": "The large-metro question deserves its own honesty check, and the community provides a live one: in a [May 2026 r/FacebookAds thread](https://www.reddit.com/r/FacebookAds/comments/1tj33ty/hvac_client_is_about_to_fire_me_ive_tried/), an agency running **$80/day across Dallas–Fort Worth and San Antonio** reported \"barely any leads\" and poor CPL; commenters called $80/day too low for that geography, with several practitioners suggesting budgets in the hundreds of dollars per day — one suggesting $800–1,000/day for a single large campaign — to give Meta enough data to exit the learning phase (individual practitioner claims, anecdotal, unverified; the published benchmarks above are materially lower). The reconciliation: metro media costs more, thin budgets across big geographies mostly buy impressions, and the learning phase needs conversion data. If budget and market don't fit, narrow the radius before lowering expectations."
      },
      {
        "type": "p",
        "text": "Published tier guidance varies widely, which is itself the finding: Daly Advertising's HVAC guide suggests tiers starting around $1,500/month and scaling toward $5,000/month (competitor-reported guidance, [dalyadvertising.com](https://dalyadvertising.com/blog/hvac-advertising-guide), March 2026), while Ryn Digital's contrarian position holds Meta should stay at 15–20% of blended spend for most contractors (competitor-reported guidance, [ryndigital.com](https://ryndigital.com/generate-hvac-leads/)). Rather than adjudicate between agency tiers, size from your own arithmetic and measured CPL — the tier debates mostly reflect different markets and offers."
      },
      {
        "type": "p",
        "text": "One gate before scaling anything: **follow-up capacity.** At the benchmark, $80/day produces ≈56 platform leads a month — just under two a day that each need a fast, competent phone call. If the office cannot work that queue, the marginal leads decay unread, and the correct budget is the smaller one. Scale when median first-contact time stays low at the current volume — not before."
      },
      {
        "type": "h2",
        "text": "Troubleshooting: \"My Facebook Ads Aren't Working\""
      },
      {
        "type": "p",
        "text": "Diagnose in order — delivery, then quality, then conversion, then attribution. Most stalled programs fail at more than one layer, and fixing the top layer first prevents re-work:"
      },
      {
        "type": "table",
        "head": [
          "Symptom",
          "Most likely cause",
          "First fix",
          "Where it's covered"
        ],
        "rows": [
          [
            "No leads at all",
            "Lead event not firing, audience too narrow, or ad not delivering",
            "Test the form submission in Events Manager → Test Events; check delivery status and learning phase",
            "Tracking section"
          ],
          [
            "Leads but CPL far above benchmark",
            "New campaign above learning-phase CPLs, narrow audience, or seasonal competition",
            "Let the 2–4 week learning phase finish before judging; widen radius or adjust bid strategy",
            "Cost benchmarks; budget section"
          ],
          [
            "Plenty of leads, most are junk",
            "One-tap form, no qualifiers, no verification",
            "Switch to Higher Intent, add 2–4 qualifier questions, add Meta's native SMS verification where available",
            "Junk-lead section"
          ],
          [
            "Good leads, no bookings",
            "Follow-up too slow",
            "Instant acknowledgment, CRM routing, missed-call text-back; measure median first-contact time",
            "Speed-to-lead section"
          ],
          [
            "Bookings, but can't prove Meta caused them",
            "No offline feedback loop",
            "Pixel + CAPI dedup, GA4 key events, CRM stages via Conversion Leads",
            "Tracking section"
          ],
          [
            "Strong first weeks, then performance sagged",
            "Creative fatigue or audience saturation",
            "Refresh creative (10–14 day cadence), swap seasonal offers, broaden slightly",
            "Creative section"
          ]
        ],
        "caption": "Two causes sit outside the ad account entirely — slow follow-up and missing feedback loops — and both can be costly precisely because the ad account cannot report on either."
      },
      {
        "type": "h2",
        "text": "FAQ: HVAC Facebook Ads in 2026"
      },
      {
        "type": "h3",
        "text": "How much do Facebook ads cost for HVAC in 2026?",
        "faq": true
      },
      {
        "type": "p",
        "text": "The closest verified category benchmark is **$42.95 per lead** (median) for Home & Home Improvement leads-objective campaigns (WordStream/LocaliQ, updated September 2026; WordStream labels the figures averages, its methodology identifies them as medians) — a category broader than HVAC, counting platform-submitted leads. HVAC Webmasters reports **$35–55 per lead** for Meta (vendor-reported estimate). At the $42.95 median, a $40/day budget produces roughly 28 platform leads a month, before qualification. Full benchmarks and caveats are in the cost section."
      },
      {
        "type": "h3",
        "text": "Are Facebook leads good quality for HVAC?",
        "faq": true
      },
      {
        "type": "p",
        "text": "Mixed — and mostly a function of setup, not the platform. Instant forms generate volume with near-zero friction, so junk submissions are the default unless you add qualifiers, the Higher Intent review step, and phone verification. Community reports of \"hundreds of leads, few real customers\" are common for unfiltered instant forms. The quality fixes are in the junk-lead section."
      },
      {
        "type": "h3",
        "text": "Instant forms or landing pages — which is better for HVAC?",
        "faq": true
      },
      {
        "type": "p",
        "text": "Instant forms minimize friction and typically produce more submissions; landing pages are designed to pre-qualify and give you full control. Meta documents three form types — More Volume, Higher Intent (which adds a review step), and Custom. A common pattern: instant forms with qualifiers for cold demand, landing pages for retargeting and high-ticket replacement offers. Note that Meta's Conversion Leads performance goal requires instant forms; website-form campaigns optimize through their own website-event path. Comparison table is in the forms section."
      },
      {
        "type": "h3",
        "text": "How much should an HVAC company spend on Facebook ads per month?",
        "faq": true
      },
      {
        "type": "p",
        "text": "There is no universal minimum. Worked scenarios at the $42.95 benchmark: $600/month ≈ 14 platform leads, $1,200 ≈ 28, $2,400 ≈ 56. Size the budget from service geography, offer economics, and how many leads your office can call within minutes — then validate against measured CPL after 2–4 weeks. The labeled scenario tables are in the budget section."
      },
      {
        "type": "h3",
        "text": "Do Facebook ads work for HVAC, or is Google better?",
        "faq": true
      },
      {
        "type": "p",
        "text": "They do different jobs. Google search and pay-per-lead Local Services capture existing high intent; Meta creates and re-captures demand. LocaliQ's home services benchmarks study (4,595 accounts, May 2020–June 2021 data) observed 3–29% lower blended cost per lead by trade when Facebook ran alongside search — a historical observation from that dataset, not a guaranteed result. Most contractors do best running both — Meta for demand generation and retargeting, search for emergencies and in-market shoppers."
      },
      {
        "type": "h3",
        "text": "What is a good cost per lead for HVAC on Facebook?",
        "faq": true
      },
      {
        "type": "p",
        "text": "Judge against two references: the $42.95 Home & Home Improvement category median (2026), and your own offer economics — maintenance offers should produce far cheaper leads than replacement-quote offers. A genuinely \"good\" CPL is one where qualified bookings stay profitable, which is why cost per booked job (funnel math above) is the number that should actually steer the budget."
      },
      {
        "type": "h3",
        "text": "How do I track Facebook leads to booked jobs?",
        "faq": true
      },
      {
        "type": "p",
        "text": "Four parts, each with a different job: Meta Pixel + Conversions API with event deduplication, `generate_lead` marked as a GA4 key event (which measures website leads — instant-form leads live in Meta and your CRM), Google Ads linked and the conversion action created from that key event through Google Ads' conversion setup, and CRM stage updates (contacted → qualified → booked) flowing back through Meta's Conversion Leads integration. Meta's documented fit guidelines for that integration include instant forms, at least daily CRM uploads, a target stage within 28 days, and at least 200 leads per month. The full stack and a verification checklist are in the tracking section."
      },
      {
        "type": "h3",
        "text": "Why are my Facebook leads fake, and how do I stop them?",
        "faq": true
      },
      {
        "type": "p",
        "text": "The usual causes: one-tap prefilled submissions, missing qualifier questions, geography too broad, and giveaway-framed offers. The fixes that hold up: Higher Intent review step, 2–4 qualifier questions to start (service needed, urgency, ZIP), Meta's native SMS verification on the phone field where available (or OTP on your own landing pages), and feeding qualified-lead status back to Meta so optimization targets real customers. Layered fixes are in the junk-lead section."
      },
      {
        "type": "h2",
        "text": "Conclusion: The Five Decisions That Decide Your ROI"
      },
      {
        "type": "p",
        "text": "Meta ads for HVAC come down to five decisions, made before the first dollar is spent:"
      },
      {
        "type": "ol",
        "items": [
          "**Channel role** — Meta as demand generation and retargeting alongside search, not a replacement for it. The blended-channel data says the combination, not the substitution.",
          "**Form strategy** — instant forms matched to traffic temperature, landing pages for high-ticket offers, with Meta's documented form types doing the friction work they were built for.",
          "**Qualification** — Higher Intent + a starting set of 2–4 qualifier questions (tested against completion rate and lead quality) + Meta's native SMS verification where available, so the office works a queue of real homeowners instead of filtering junk.",
          "**Tracking** — start with spend ÷ leads, then add Pixel + CAPI deduplication, GA4 key events, and the CRM feedback loop as you need lead-quality, attribution, and booked-job measurement.",
          "**Speed-to-lead** — minutes, not hours, to the first human contact, because the response-time research consistently shows how sharply the odds of connecting fall with delay."
        ]
      },
      {
        "type": "p",
        "text": "The benchmarks in this guide will age — the $42.95 category median was current as of September 2026, and Meta's guidelines are documented as of November 2026. The five decisions above don't. If you want the implementation side of this — Meta ads management against a target cost per lead, or the GA4/CAPI tracking stack described in the tracking section — that is the work covered in [Meta Ads services](/services/meta-ads), [Analytics & tracking](/services/analytics), and [CRO](/services/cro), with the [HVAC industry overview](/industries/hvac) as the starting point. The high-intent search side is covered in the companion [HVAC Google Ads guide](/blog/hvac-google-ads-guide)."
      },
      {
        "type": "h2",
        "text": "About this guide"
      },
      {
        "type": "p",
        "text": "Written by Khandokar Riajul Islam, a performance marketing specialist with more than five years of experience in paid search, paid social and analytics, including Meta Ads management, GA4/GTM implementation with server-side tracking, Meta Conversions API setups, and conversion rate optimization. **No HVAC client case study is published, and none is implied here.** All benchmark figures are third-party, dated and attributed, the worked calculations show their assumptions, and the operational guidance is general paid-media practice applied to residential HVAC rather than a report of campaign results."
      },
      {
        "type": "p",
        "text": "[Chat on WhatsApp](https://wa.me/8801954447017)"
      },
      {
        "type": "h2",
        "text": "Sources"
      },
      {
        "type": "p",
        "text": "**Primary documentation (accessed November 26, 2026):**"
      },
      {
        "type": "ul",
        "items": [
          "Meta Business Help Center — [Create a lead ad with instant form](https://www.facebook.com/business/help/179258984144385) (form types: More Volume, Higher Intent, Custom; up to 15 custom questions)",
          "Search Engine Land — [Your guide to Meta Ads for lead generation](https://searchengineland.com/meta-ads-lead-gen-what-you-need-to-know-456269) (June 2, 2025; documents Meta's native instant-form SMS verification option, \"Require phone number confirmation via SMS\"; Meta's Business Help Center documents the same feature as \"Enable the SMS verification feature to help improve lead quality\")",
          "Meta for Developers — [Handling Duplicate Pixel and Conversions API Events](https://developers.facebook.com/documentation/ads-commerce/conversions-api/deduplicate-pixel-and-server-events) (updated June 28, 2026; event_id + event_name matching, 48-hour window)",
          "Meta for Developers — [Dataset Quality API](https://developers.facebook.com/docs/marketing-api/conversions-api/dataset-quality-api/) (updated October 21, 2026; Event Match Quality, event coverage, and deduplication diagnostics referenced in the measurement checklist)",
          "Meta for Developers — [Conversion Leads integration](https://developers.facebook.com/documentation/ads-commerce/conversions-api/conversion-leads-integration) (updated February 6, 2026; CRM dataset requirements, daily uploads, 28-day window, 1–40% stage rate, 2–4 week learning phase)",
          "Google Analytics Help — [Conversions](https://support.google.com/analytics/answer/9356034) (event → key event → conversion; `generate_lead` example; linked Google Ads account required)"
        ]
      },
      {
        "type": "p",
        "text": "**Benchmarks and research:**"
      },
      {
        "type": "ul",
        "items": [
          "WordStream/LocaliQ — [Facebook Ads Benchmarks 2026](https://www.wordstream.com/blog/facebook-ads-benchmarks-2026) (updated September 15, 2026; US sample: **452 leads-objective campaigns** and 1,377 traffic-objective campaigns, reported separately, running **April 1, 2025–June 30, 2026**, with each leads-objective subcategory including at least 4 active campaigns; WordStream labels the figures averages and its methodology identifies them as **medians**; Home & Home Improvement leads-objective medians: CTR 2.14%, CPC $2.18, CVR 5.32%, CPL $42.95; all-industry leads CPL $27.39)",
          "SearchLight Digital — [What Is a Good Cost per Lead for HVAC Google Ads?](https://www.searchlightdigital.io/what-is-a-good-cost-per-lead-for-hvac-google-ads/) (January 2026 data; **HVAC and plumbing** Google Ads dataset: 816 contractors, $14.9M spend, 143,008 leads)",
          "Oldroyd, McElheran & Elkington — [\"The Short Life of Online Sales Leads,\"](https://hbr.org/2011/03/the-short-life-of-online-sales-leads) Harvard Business Review, March 2011 (2,241 US firms; cross-industry)",
          "Lead Response Management study (2007; conducted by InsideSales.com with Dr. James Oldroyd, then an MIT Sloan research fellow; three years of data, six companies, 15,000+ leads, 100,000+ call attempts; odds ratios for 5-minute vs. 30-minute response). The original report is not stably hosted online; scope and figures corroborated via [Expertise's speed-to-lead statistics audit](https://www.expertise.ai/stats/speed-to-lead-statistics) (July 2026) and [Rework's lead-response-time review](https://resources.rework.com/libraries/lead-management/lead-response-time) (October 2026)",
          "LocaliQ — [Home Services Advertising Benchmarks](https://localiq.com/blog/home-services-advertising-benchmarks/) (original source, cited directly; study period and methodology verified on the page's own Data sources section, November 26, 2026: a sample of 4,595 North American-based LOCALiQ client accounts in the home services vertical running search, display, and/or social advertising between **May 1, 2020, and June 25, 2021**; minimum 10 unique active clients per subcategory; \"averages\" are technically median figures; USD — a historical dataset. The 3–29% Facebook-plus-search CPL reduction is a historical cross-channel observation from this study, not a current expected result or a causal guarantee)"
        ]
      },
      {
        "type": "p",
        "text": "**Competitor-reported estimates (attributed, not independently verified):** [HVAC Webmasters](https://hvacwebmasters.com/facebook-ads/) (Meta CPC/CPL ranges — sole source of the $35–55 figure), [Ryn Digital](https://ryndigital.com/generate-hvac-leads/) (contrarian CPL and blended-budget view), [Webtonic](https://webtonic.io) (offer-level CPL spread, August 2026), [Daly Advertising](https://dalyadvertising.com/blog/hvac-advertising-guide) (budget tiers, March 2026), [Koro](https://getkoro.app/blog/facebook-ad-ideas-for-hvac-businesses) (creative refresh cadence). Audit: PipelineOn Ad Library audit (173 advertisers, June 2026 — [source](https://pipelineon.com/blog/hvac-plumbing-facebook-ads-guide/)) — single-audit snapshot."
      },
      {
        "type": "p",
        "text": "**Community evidence (individual practitioner reports, linked where cited):** [r/FacebookAds, May 2026 — qualified-lead methods and CRM drop-off](https://www.reddit.com/r/FacebookAds/comments/1tp2erd/how_are_you_getting_qualified_leads_from_facebook/) · [r/FacebookAds, May 2026 — HVAC budget realism at $80/day in DFW + San Antonio](https://www.reddit.com/r/FacebookAds/comments/1tj33ty/hvac_client_is_about_to_fire_me_ive_tried/) · [r/FacebookAds, April 2025 — fake leads in home services and SMS-verified phone fields](https://www.reddit.com/r/FacebookAds/comments/1k9j3vt/roofing_leads/) · [r/FacebookAds, March 2026 — follow-up speed](https://www.reddit.com/r/FacebookAds/comments/1rklgwx/) · [r/FacebookAds, August 2024 — instant-form intent](https://www.reddit.com/r/FacebookAds/comments/1ewqbug/) · [r/ProHVACR, December 2024 — channel ROI comparison](https://www.reddit.com/r/ProHVACR/comments/1hbtx2r/) · [r/smallbusiness, August 2024 — channel skepticism](https://www.reddit.com/r/smallbusiness/comments/1f34533/)"
      }
    ]
  },
];

/* ------------------------------------------------------------------ */
/* Derived helpers. No article data lives below this line.             */
/* ------------------------------------------------------------------ */

const STATUS_PUBLISHED = "published";

export const isPublished = (post) => post?.status === STATUS_PUBLISHED;

const byNewestFirst = (a, b) => {
  const aDate = a.publishedAt || "";
  const bDate = b.publishedAt || "";
  if (aDate === bDate) return a.title.localeCompare(b.title);
  return bDate.localeCompare(aDate);
};

/** Only published articles, newest first. This is what pages may render. */
export function getPublishedPosts() {
  return publishedPosts.filter(isPublished).sort(byNewestFirst);
}

/** A published article by slug, or null. Never returns a draft. */
export function getPublishedPostBySlug(slug) {
  return getPublishedPosts().find((post) => post.slug === slug) || null;
}

/** Published articles in one category, newest first. */
export function getPostsByCategory(categoryId) {
  return getPublishedPosts().filter((post) => post.category === categoryId);
}

/**
 * Related articles for an article page.
 * Explicit `related` slugs win (published only), then same-category
 * articles, then nothing. It never invents a relationship.
 */
export function getRelatedPosts(post, limit = 3) {
  const published = getPublishedPosts().filter((item) => item.slug !== post.slug);
  const picked = [];
  const add = (item) => {
    if (item && !picked.some((existing) => existing.slug === item.slug)) {
      picked.push(item);
    }
  };

  (post.related || []).forEach((slug) => {
    add(published.find((item) => item.slug === slug));
  });

  published
    .filter((item) => item.category === post.category)
    .forEach(add);

  return picked.slice(0, limit);
}

/** Category + topic objects for an article, or nulls. */
export function getPostTaxonomy(post) {
  return {
    category: getCategoryById(post?.category),
    topic: getTopic(post?.category, post?.topic),
  };
}

/** Counts per category id, used by the filter chips. */
export function getCategoryCounts() {
  const counts = {};
  getPublishedPosts().forEach((post) => {
    counts[post.category] = (counts[post.category] || 0) + 1;
  });
  return counts;
}

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

/**
 * Structural validation for every article (published and draft).
 * Called by the prerender build, which fails hard on any error, so a
 * malformed article can never reach production.
 *
 * @returns {{errors: string[], warnings: string[]}}
 */
export function validateBlogData(posts = publishedPosts) {
  const errors = [];
  const warnings = [];
  const seenSlugs = new Set();

  posts.forEach((post, index) => {
    const where = `post[${index}] (${post?.slug || "no slug"})`;

    if (!post || typeof post !== "object") {
      errors.push(`${where}: not an object`);
      return;
    }

    if (!post.slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(post.slug)) {
      errors.push(`${where}: slug must be kebab-case (a-z, 0-9, single hyphens)`);
    } else if (seenSlugs.has(post.slug)) {
      errors.push(`${where}: duplicate slug`);
    } else {
      seenSlugs.add(post.slug);
    }

    if (!post.title) errors.push(`${where}: missing title`);
    if (!post.excerpt) errors.push(`${where}: missing excerpt`);
    if (!post.status) errors.push(`${where}: missing status`);

    const category = getCategoryById(post.category);
    if (!category) {
      errors.push(`${where}: unknown category "${post.category}"`);
    } else if (post.topic && !getTopic(post.category, post.topic)) {
      errors.push(
        `${where}: topic "${post.topic}" does not belong to category "${post.category}"`
      );
    }

    if (post.publishedAt && !ISO_DATE.test(post.publishedAt)) {
      errors.push(`${where}: publishedAt must be YYYY-MM-DD`);
    }
    if (post.updatedAt && !ISO_DATE.test(post.updatedAt)) {
      errors.push(`${where}: updatedAt must be YYYY-MM-DD`);
    }

    if (isPublished(post)) {
      if (!post.publishedAt) errors.push(`${where}: published article needs publishedAt`);
      if (!Array.isArray(post.body) || post.body.length === 0) {
        errors.push(`${where}: published article needs a non-empty body`);
      }
    }

    if (Array.isArray(post.body)) {
      post.body.forEach((block, blockIndex) => {
        if (!block || typeof block !== "object") {
          errors.push(`${where}: body[${blockIndex}] is not an object`);
        } else if (!block.type) {
          errors.push(`${where}: body[${blockIndex}] has no type`);
        }
      });
    }

    if (post.featuredImage && !post.featuredImage.alt) {
      warnings.push(`${where}: featuredImage has no alt text`);
    }

    if (post.excerpt && post.excerpt.length > 200) {
      warnings.push(`${where}: excerpt is ${post.excerpt.length} chars (aim for <=160 for meta descriptions)`);
    }
  });

  return { errors, warnings };
}

export default { publishedPosts, getPublishedPosts, getPublishedPostBySlug };
