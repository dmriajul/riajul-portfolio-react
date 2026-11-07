/**
 * ==========================================================
 * UNPUBLISHED DRAFTS — NEVER PUBLISHED BY THIS BUILD
 * ==========================================================
 *
 * Articles in this file are invisible to production:
 *   - never rendered on /blog/ in production (the draft-preview flag is
 *     never set there, so the index filters them out);
 *   - never prerendered to an HTML file in a production build, so
 *     /blog/<slug> falls through to the blog not-found page;
 *   - never written to sitemap.xml (scripts/generate-sitemap.mjs imports
 *     published posts only, and both build scripts assert this);
 *   - any accidental render carries <meta name="robots" content="noindex, follow">.
 *
 * IMPORTANT: this module is aliased to an empty module (@blog-drafts) for
 * every production build — see vite.config.js and blogDrafts.empty.js — so
 * draft text cannot reach a public JavaScript file even if the runtime
 * checks above were bypassed. Scripts read this file directly from Node.
 */

export const draftPosts = [
  /* ==================================================================
   * ARTICLE 1 — HVAC Google Ads guide
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
    status: "draft",
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
      { type: "p", text: "**What this guide does not claim.** It contains no HVAC client results, no campaign screenshots, and no guaranteed outcomes. Every cost figure is labeled either as a measured keyword metric, a published benchmark from a named source, or a competitor's reported range. The economics section is deliberately short, because the full cost-per-lead model belongs in its own article." },
      { type: "h2", text: "1. How Google Ads works for a residential HVAC contractor" },
      { type: "p", text: "Google Ads is an auction. You bid for a chance to show an ad against a search, and you pay only when someone clicks. Bid size matters, but it is not the only thing that decides who wins. Relevance between the search, the ad and the landing page counts too, which is why a tightly themed campaign usually beats a broader one at the same bid." },
      { type: "p", text: "Three ad formats matter for an HVAC company:" },
      { type: "p", text: "**Search ads** appear above and below the organic results. They reach people who have already typed the problem: \"AC not cooling,\" \"furnace repair near me,\" \"heat pump installation [city].\" Intent is high, and so is the cost per click." },
      { type: "p", text: "**Performance Max with pay-per-lead goals** is where Google Local Services Ads now live. Google is moving Local Services into the Google Ads interface as a specialized Performance Max campaign type. The rollout is phased: the first phase began in **August 2026** for select US home and storefront service advertisers, **including HVAC**. Broader service-area businesses follow in **late 2026**, and non-US accounts and remaining categories in **2027** ([Google Ads Help](https://support.google.com/google-ads/answer/17213585?hl=en))." },
      { type: "p", text: "The billing model does not change. You still pay for valid leads rather than clicks, whether those arrive as calls, messages or bookings. Ads still run only on Google Search and Maps, and targeting stays keywordless, driven by service categories and service areas. What does change matters operationally:" },
      {
        type: "ul",
        items: [
          "**Local Services performance reports do not carry over.** Google recommends downloading or screenshotting your historical reports before the switch.",
          "**Manual bidding and industry-level target CPA are being retired.** Your weekly budget becomes a daily average, calculated by dividing the old weekly figure by seven.",
        ],
      },
      { type: "p", text: "For budgeting, this is the most important distinction in the whole account: **pay-per-click campaigns and pay-per-lead campaigns are two different bills.** A cost per lead from Local Services and a cost per click from a search campaign are not comparable numbers. Blend them and you get a figure that describes neither." },
      { type: "p", text: "**Display and YouTube** are usually the lowest priority for a residential contractor. They become useful for remarketing later, once search and pay-per-lead are producing work you can actually measure." },
      { type: "h2", text: "2. Service-line separation: the decision that shapes everything else" },
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
      },
      { type: "p", text: "These are not one conversation. Someone with no cooling in July is not comparing heat pump efficiency ratings, and someone pricing a replacement is not going to book an emergency dispatch. If both searches trigger the same ad and land on the same page, one of them is being served badly." },
      { type: "p", text: "**When to split into separate campaigns.** Google's own guidance is the cleanest rule available: create a separate campaign whenever **the budget or the locations differ**, and keep them as ad groups inside one campaign when they do not ([Google Ads Help](https://support.google.com/google-ads/answer/6372655?hl=en)). Applied to HVAC, that means:" },
      {
        type: "ul",
        items: [
          "Split **emergency repair** from **replacement** if you want to cap what you spend on emergency calls, or if you advertise replacement across a wider radius than you will actually dispatch a truck.",
          "Split **maintenance** if it runs on a different budget rhythm: a small always-on spend rather than a seasonal surge.",
          "Keep services together as ad groups only if they genuinely share a budget and a service area. Accept that you will not be able to pace them separately.",
        ],
      },
      { type: "p", text: "**What each line needs.** Emergency campaigns need call assets, ad schedules that match the hours someone actually answers, and copy that states your response time honestly. Replacement campaigns need a clear quote path: financing if you genuinely offer it, and a form that asks enough to qualify a lead without filtering out real buyers. Maintenance campaigns need one specific offer with visible terms." },
      { type: "p", text: "**One structural warning.** Google's documentation notes that reorganizing an account later \"wipes out all the valuable data you've accumulated,\" and that can affect how the ads perform. Decide the structure before you spend, not after. Whatever you choose, name things so a stranger could read them: `Search | Repair | Emergency | [metro]` tells the next person exactly what it is. `Campaign 1` does not." },
      { type: "h2", text: "3. Planning a search campaign that reaches the right ZIP codes" },
      { type: "p", text: "**Start with the service area, not the keywords.** Target the cities and ZIP codes you actually drive to, and exclude the rest. Then check the distance and geographic reports after two weeks. A surprising share of wasted spend shows up there, in clicks from towns just outside your boundary." },
      { type: "p", text: "**Build keyword themes per service line.** Each ad group should hold to one tight theme: emergency AC repair, furnace repair, heat pump installation, maintenance tune-up. Phrase and exact match are the safer starting point for a local service business. Broad match on a head term like \"HVAC\" pulls in job seekers, parts buyers and do-it-yourselfers faster than you can add negatives." },
      { type: "p", text: "**Negative keywords are a weekly habit, not a one-time setup.** The search terms report is where money leaks. The usual offenders in HVAC are jobs and salaries, wholesale and parts, DIY and troubleshooting, rentals and landlord-tenant questions, classes and certification, and city names outside your area. Add negatives based on what you see in the report, not from a list you downloaded. Keep in mind that negatives do not match close variants, so if you need to exclude a plural or a singular, add it yourself. And watch for negatives so broad that they block work you actually sell." },
      { type: "p", text: "**Match the ad to the page.** If the ad promises same-day AC repair, the landing page should say so, put the phone number where it can be seen, and name the cities you serve. Mismatch between ad and page is one of the most common reasons a technically sound campaign converts poorly." },
      { type: "p", text: "**Use the assets that cost nothing extra to test.** Call assets, Google's current name for call extensions, put a tappable number under the ad on mobile; on desktop, a \"Call us\" button reveals it. Schedule them for the hours someone answers. Location assets reinforce the service area. Sitelinks let a searcher choose between repair, replacement and maintenance, which is useful precisely because those are three different jobs." },
      { type: "h2", text: "4. Allocating budget across service lines and seasons" },
      { type: "p", text: "**Do not divide the budget evenly.** Weight it by two things: the work you can actually deliver, and what the job is worth. If you have two install crews in July, do not buy install leads you cannot service. If the install board is full and the service techs are idle, move money toward repair and maintenance." },
      { type: "p", text: "**Plan the year in three phases, not twelve months.**" },
      {
        type: "ul",
        items: [
          "**Heating peak** (late fall through winter): furnace repair and replacement demand rises, so heating budgets should be at their highest.",
          "**Cooling peak** (late spring through summer): the same picture on AC terms.",
          "**Shoulder months** (spring and fall): put budget into maintenance plans, tune-ups and replacement research, the work that fills the calendar and creates next season's repair customers.",
        ],
      },
      { type: "p", text: "**Set a floor before you set a target.** Bidding needs conversion data to learn from. A budget small enough to produce a handful of conversions a month will not get out of the learning phase, and the account will look like it \"does not work\" when the real problem is a lack of volume. That is a structural limit, not a promise about results." },
      { type: "p", text: "**Change budgets on a schedule, not in a panic.** A weekly review of search terms, budgets and pacing is enough for most single-market contractors. Swinging the budget midweek because of one slow Tuesday creates more noise than signal." },
      { type: "h2", text: "5. What HVAC Google Ads cost: reading the published evidence" },
      { type: "p", text: "This is where most guides lose the thread, because three different kinds of number get mixed together." },
      { type: "p", text: "**1. Measured keyword metrics are not prices.** Keyword Planner returns a rounded average monthly search volume and a top-of-page bid estimate for a keyword. For the terms closest to this topic, the numbers are small. \"hvac ppc\" returned 170 monthly US searches with a **$53.80** average CPC estimate and a competition index of 21. \"hvac advertising\" returned 390 searches at **$33.00** with an index of 25 (Keyword Planner via DataForSEO, US, retrieved 7 November 2026). Note what those are: national averages, in volume buckets, for queries that agencies and software vendors bid on. **They are not what a contractor in a specific metro pays, and they are not search difficulty.** They are also the only measured figures in this guide, and neither is a budget." },
      { type: "p", text: "**2. Published benchmarks describe someone else's sample.** The most detailed public benchmark for this category is SearchLight's HVAC and plumbing advertising benchmark. It covers **816 contractors, 8,077 campaigns and $14.88M in Google Ads spend from 1–31 January 2026**, with 143,008 leads and $77.7M in tracked closed revenue. It reports a blended cost per lead of **$104**, split into branded search at **$34**, non-branded search at **$149** and Performance Max at **$72**. Heating repair campaigns came in at **$144** per lead with a 38.2% book rate and a $3,225 average ticket, and AC repair at **$231** with a 37.0% book rate and a $3,174 average ticket ([SearchLight Digital](https://searchlightdigital.io/what-is-a-good-cost-per-lead-for-hvac-google-ads/), published February 2026)." },
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
      },
      { type: "p", text: "**3. Competitor-reported ranges disagree with each other, and that disagreement is the useful signal.** EZE Grow's 2026 budget guide reports cost per lead of **$25–$80** and cost per booked job of **$60–$150**, with CPC ranges by keyword type: AC repair $8–18, furnace repair $7–16, HVAC installation $12–25, and emergency keywords $15–35 ([EZE Grow](https://ezegrow.com/google-ads-for-hvac-companies-budget-guide/)). The HVAC SEO Agency publishes a different split by category: emergency repair $25–80, general service $15–50, installation $20–60, maintenance $8–25 and brand $1–5 ([hvac-seo.agency](https://hvac-seo.agency/blog/hvac-ppc-advertising/hvac-ppc-budget-guide/)). Neither methodology is published, and neither is verified here. That is the point: **if two agencies in the same category publish ranges that do not overlap, a benchmark is not a budget input.**" },
      { type: "p", text: "**What to do instead.** Treat a published benchmark as a sanity check on your own numbers after 60 to 90 days, in your market, with your tracking. Before that, your cost per lead is unknown, and any number you plan against is a placeholder." },
      { type: "h2", text: "6. A short economics primer: leads, qualified leads and booked jobs" },
      { type: "p", text: "Four numbers drive everything, and they are routinely confused with each other:" },
      {
        type: "ul",
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
      { type: "p", text: "The two rates describe the same funnel from different starting points, which is why the denominator has to be named every time. The classic error is pairing the numerator with the wrong one: take a cost per qualified lead, divide it by the all-lead booking rate, and the result comes out more than half too high." },
      { type: "p", text: "From there, one relationship is enough for this guide:" },
      { type: "blockquote", text: "**Cost per booked job = cost per lead ÷ booking rate**" },
      { type: "p", text: "A $150 lead at a 30% booking rate works out to $500 per booked job. The lead price did not change. The schedule did. That is why conversion work, whether it is answering faster, qualifying on the phone or offering a booking path, moves the number that matters without touching a single bid." },
      { type: "p", text: "**What a booked job can afford** depends on your average ticket and your margin, not on a benchmark. Three sources work through it. SearchLight's benchmark article runs a ticket-and-margin example. Inshalytics publishes a break-even illustration using a $500 repair ticket at 45% gross margin. VelocityPPC describes a budget method built on jobs, close rate and a target cost per booked job ([Inshalytics](https://inshalytics.com/blogs/hvac-google-ads-budget), [VelocityPPC](https://velocityppc.com/blog/hvac-google-ads-cost/), published September 2026)." },
      { type: "p", text: "None of them reconciles an all-lead booking rate against a qualified-lead rate, or works out a maximum allowable cost per booked job for each service line. That belongs in a companion article on HVAC cost per lead, along with the full model, both denominators and the worked examples. If you need the ceiling calculation now, treat it as separate reading rather than something to extrapolate from here. For the account work itself, see [HVAC Google Ads management](/industries/hvac)." },
      { type: "h2", text: "7. Lead quality and conversion tracking" },
      { type: "p", text: "If the tracking is wrong, every decision after it is wrong too. Three things need to be true before you judge a campaign." },
      {
        type: "figure",
        src: "/images/blog/hvac-google-ads-guide/from-search-to-booked-job-tracking.webp",
        alt: "Five-stage path from a search ad through a landing page, call or form, and CRM record to a booked job, with markers showing what is confirmed at each stage.",
        width: 1600,
        height: 757,
        caption: "The path a paid click should take: search ad, landing page, call or form, a CRM record, then a booked job. The markers underneath show how much is actually confirmed at each step: the first three are provisional, the fourth is an inbound lead, and only the last is a verified booked job.",
      },
      { type: "p", text: "**Count the actions that represent a lead.** At a minimum that means form submissions and phone-number taps, plus inbound calls if you use call tracking. Set them up as conversion actions in Google Ads so bidding optimizes toward outcomes instead of page views. Be clear with yourself about what each one proves. A tap on the phone number is a proxy for a call, not proof that one happened, and a form submit is a proxy for a lead, not proof that anyone answered it." },
      { type: "p", text: "**Expect the platform's number to be optimistic.** Duplicate form submissions, spam and mis-clicks all inflate reported conversions. Compare what Google reports with what actually reached your dispatch board or inbox. When the two diverge, trust the one closer to revenue." },
      { type: "p", text: "**Import outcomes only if you have the plumbing for it.** Google Ads can accept offline conversions imported from a CRM, which is how a booked or sold job gets back into bidding. Whether you can do that depends on a CRM with the data, a reliable match key and someone to maintain it. Many contractors do not have all three, and that is a legitimate place to stop. **Without a CRM and an offline conversion process, reporting stops at the lead.** You can know cost per call and cost per form. You cannot know cost per booked job, because the booking happens in your dispatch system, not in Google Ads." },
      { type: "p", text: "Two attribution caveats are worth stating plainly. Last-click attribution credits whichever channel touched the customer last, which under-credits earlier touchpoints and over-credits branded search. Local Services performance reports also do not transfer into Google Ads during the migration, so any comparison across that transition needs deliberate handling rather than assumption." },
      { type: "h2", text: "8. Operational mistakes that quietly waste budget" },
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
      },
      { type: "p", text: "The last one is not an ads problem, but it behaves like one. A lead that sits for two days makes a functioning campaign look broken." },
      { type: "h2", text: "9. Working with an agency or freelancer" },
      { type: "p", text: "Most contractors eventually hand this to someone. Three questions separate a useful conversation from a sales call:" },
      {
        type: "ol",
        items: [
          "**How is the fee structured: fixed, hourly, or a percentage of spend?** Get the number and the scope in writing, and check whether reporting and strategy are included or billed separately.",
          "**What exactly will be reported each month, and what cannot be?** You want calls and forms counted separately, cost per lead by campaign, and month-over-month movement with seasonality noted. If nobody can tell you what happens after the lead arrives, that limit should be admitted rather than glossed over.",
          "**Who owns the accounts and the tracking?** You should hold admin access to Google Ads, Analytics, Tag Manager and your Business Profile, and you should be able to remove a partner without losing your history.",
        ],
      },
      { type: "p", text: "A useful test is whether the person will tell you what they cannot measure. An agency claiming full booked-job attribution without a CRM is describing something it cannot deliver." },
      { type: "h2", text: "10. Where this approach stops" },
      { type: "p", text: "Structural work improves your odds. It does not control the market. Demand moves with the weather, competitor pricing and local supply, and lead quality depends on how fast the phone is answered and how the CSR handles the call, neither of which happens inside the ad account. For most contractors, attribution stops at the lead. No structure guarantees a cost per lead, a booking or a return, and anyone promising otherwise is selling certainty that does not exist." },
      { type: "h2", text: "11. FAQs" },
      { type: "h3", faq: true, text: "How much do HVAC Google Ads cost per month?" },
      { type: "p", text: "There is no standard monthly figure, because your spend is simply the number of leads you need multiplied by what a lead costs in your local market. The only part you can look up is the cost per lead. SearchLight's January 2026 benchmark, built on 816 HVAC and plumbing contractors, put the blended figure at $104, with branded search at $34, non-branded search at $149 and Performance Max at $72. EZE Grow publishes a much lower range of $25 to $80. Multiply any of those by the leads you want and you get an order of magnitude: 30 leads a month is about $3,100 at the blended number and closer to $4,500 at the non-branded one. That is arithmetic on someone else's data. Plan against your own numbers once you have 60 to 90 days of them." },
      { type: "h3", faq: true, text: "What is a reasonable monthly budget for an HVAC company?" },
      { type: "p", text: "A reasonable budget is the smallest amount that will produce enough conversions for bidding to work, on every service line you intend to run, for a full season. Start with capacity, because if your crews are booked three weeks out, more leads will not help and the budget can wait. Where you do have room, set a floor per service line that keeps conversions coming steadily rather than in bursts. A campaign that spends too little to gather data does not fail because Google Ads does not work. It fails because there is nothing for the system to learn from. Review the number each season." },
      { type: "h3", faq: true, text: "Why do HVAC clicks cost so much?" },
      { type: "p", text: "Because you are bidding against other contractors for a search that often leads to a job worth several thousand dollars. Demand concentrates in the weeks when systems fail, so the same click costs more in a July heat wave than it does in April. National top-of-page estimates for related marketing terms sat between roughly $33 and $54 in November 2026, and peak-season auctions in competitive metros run higher. The click price itself is a poor way to judge any of this. Cost per lead is the next step up, and cost per booked job is the one that decides whether the campaign is working. A $40 click that turns into a booked replacement is cheap. A $12 click that never reaches a dispatcher is expensive no matter how good the auction looked." },
      { type: "h3", faq: true, text: "Should I pay an agency a percentage of ad spend or a flat fee?" },
      { type: "p", text: "Either can work, but the fee model matters less than what gets written down. A percentage of spend gives the agency a reason to spend more; a flat fee gives it a reason to do less work in a slow month. Neither is dishonest by itself. What protects you either way is a stated fee, a defined scope, and ownership of the Google Ads account, the tracking numbers, the CRM and the analytics property. Ask what happens to your history if you leave, and settle the reporting shape before the first invoice rather than after it." },
      { type: "h3", faq: true, text: "Are Google Ads worth it for an HVAC company?" },
      { type: "p", text: "They can be, once three things are true: the account is split by service line, the service area is enforced, and the tracking can tell one stage from the next. Those stages are not interchangeable. A click is a visit you paid for. A lead is someone who contacted you. A qualified lead is one that meets criteria you wrote down. A booked job is an appointment on the schedule, and a sold job is revenue. If your reporting stops at clicks or forms, you are guessing about everything downstream. With reliable booking data, the test is straightforward: compare cost per booked job with what a booked job is worth to your business. If you cannot measure bookings yet, that is the work to do first, not a reason to raise the budget. No structure or budget guarantees a result." },
      { type: "h3", faq: true, text: "Do I need Local Services Ads as well as search ads?" },
      { type: "p", text: "Not necessarily, and the two do different jobs. Local Services, now moving into Google Ads as Performance Max campaigns with pay-per-lead goals, targets people searching by service category in your service area and charges per valid lead. Search campaigns let you choose the services, terms and landing pages you appear for, and charge per click. Plenty of contractors eventually run both, but the sensible order is to get the phone answered reliably and the tracking clean first. Budget them separately, because a cost per lead and a cost per click cannot be compared, and blending the two hides which one is working." },
      { type: "h3", text: "About this guide" },
      { type: "p", text: "Written by Khandokar Riajul Islam, a performance marketing specialist with more than five years of experience in paid search, paid social and analytics. **No HVAC client case study is published, and none is implied here.** All benchmark figures are third-party, dated and attributed. The operational guidance is general paid-media practice applied to residential HVAC, not a report of campaign results." },
    ],
  },
];

export default draftPosts;
