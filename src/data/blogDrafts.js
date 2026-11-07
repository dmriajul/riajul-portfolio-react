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
      { type: "p", text: "Residential HVAC is one of the most expensive categories on Google Ads, and one of the easiest to run badly. The failure is rarely creative. It is structural: repair calls and replacement quotes sharing one campaign, a service area that includes towns you will not drive to, and conversion tracking that counts every form submit as a lead whether or not anyone answered the phone." },
      { type: "p", text: "This guide covers how the account should be built and run: service-line separation, campaign planning, budget allocation across the year, what published cost data does and does not tell you, and what to track so the numbers mean something. It is written for owner-operators and general managers of residential heating and cooling companies in the United States." },
      { type: "p", text: "**What this guide does not claim.** It contains no HVAC client results, no campaign screenshots and no guaranteed outcomes. Every cost figure is labelled as either a measured keyword metric, a published benchmark from a named source, or a competitor's reported range. The economics section is deliberately short: the detailed cost-per-lead model belongs in its own article and is covered separately." },
      { type: "h2", text: "1. How Google Ads works for a residential HVAC contractor" },
      { type: "p", text: "Google Ads is an auction. You bid for the chance to show an ad against a search, and you pay when someone clicks. Ranking is not determined by bid alone — relevance between the search, the ad and the landing page matters too, which is why a tightly themed campaign usually beats a broader one at the same bid." },
      { type: "p", text: "For an HVAC company, three ad formats matter:" },
      { type: "p", text: "**Search ads** are text ads shown above and below organic results. They reach people who have already typed the problem: \"AC not cooling\", \"furnace repair near me\", \"heat pump installation [city]\". Intent is high and so is the cost per click." },
      { type: "p", text: "**Performance Max with pay-per-lead goals** is where Google Local Services Ads now live. Google is migrating Local Services Ads into the Google Ads interface as a specialised Performance Max campaign type. The migration is phased: the first phase began **August 2026** for select US home and storefront service advertisers, **including HVAC**; broader service-area businesses follow in **late 2026**; non-US accounts and remaining categories in **2027** ([Google Ads Help](https://support.google.com/google-ads/answer/17213585?hl=en))." },
      { type: "p", text: "What does not change is the billing model. You still pay for valid leads — calls, messages, bookings — rather than clicks. Ads still appear only on Google Search and Maps, and targeting remains keywordless, driven by service categories and service areas. What does change matters operationally:" },
      {
        type: "ul",
        items: [
          "**Local Services performance reports do not transfer.** Google's documentation says to download or screenshot historical reports before migration.",
          "**Manual bidding and industry-level target CPA are being deprecated.** Budgets move from weekly to a daily average.",
        ],
      },
      { type: "p", text: "For budgeting purposes, this is the single most important distinction in the account: **pay-per-click campaigns and pay-per-lead campaigns are two different bills.** A cost per lead from a Local Services campaign and a cost per click from a search campaign are not comparable numbers, and blending them produces a figure that describes neither." },
      { type: "p", text: "**Display and YouTube** are usually the lowest priority for a residential contractor. They can support remarketing later, once search and pay-per-lead are producing work you can measure." },
      { type: "h2", text: "2. Service-line separation: the decision that shapes everything else" },
      { type: "p", text: "A residential HVAC company sells at least four different things to four different buyers:" },
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
      { type: "p", text: "These are not one conversation. Someone with no cooling in July is not comparing heat pump efficiency ratings; someone pricing a replacement is not going to book an emergency dispatch. If both searches trigger the same ad and land on the same page, one of them is being mis-served." },
      { type: "p", text: "**When to split into separate campaigns.** Google's own guidance on campaign structure is the cleanest rule available: create a separate campaign when **the budget or the locations differ**, and use ad groups within one campaign when they do not ([Google Ads Help](https://support.google.com/google-ads/answer/6372655?hl=en)). Applied to HVAC:" },
      {
        type: "ul",
        items: [
          "Split **emergency repair** from **replacement** if you want to cap what you spend on emergency calls, or if you advertise replacement in a wider radius than you will dispatch a truck.",
          "Split **maintenance** if it runs on a different budget rhythm — a small always-on spend rather than a seasonal surge.",
          "Keep them as ad groups in one campaign only if they genuinely share a budget and a service area, and accept that you cannot pace them independently.",
        ],
      },
      { type: "p", text: "**What each line needs.** Emergency campaigns need call assets, schedules that match when someone actually answers, and ad copy that states the response honestly. Replacement campaigns need the quote path — financing if it is genuinely offered, a form that asks enough to qualify but not so much that it filters out real buyers. Maintenance campaigns need a specific offer with visible terms." },
      { type: "p", text: "**One structural warning.** Google's documentation notes that restructuring an account later wipes out accumulated data and resets learning history. Decide the structure before you spend, not after. And whatever you choose, name campaigns and ad groups in a way a stranger could read: `Search | Repair | Emergency | [metro]` tells the next person what it is. `Campaign 1` does not." },
      { type: "h2", text: "3. Planning a search campaign that reaches the right ZIP codes" },
      { type: "p", text: "**Start from the service area, not the keywords.** Target the cities and ZIP codes you actually drive to, and exclude the ones you do not. Then check the distance report and the geographic report after two weeks — this is where a surprising share of wasted spend shows up, in clicks from towns just outside the boundary." },
      { type: "p", text: "**Build keyword themes per service line.** Each ad group should hold one tight theme: emergency AC repair, furnace repair, heat pump installation, maintenance tune-up, and so on. Phrase and exact match are the safer starting point for a local service business; broad match on a head term like \"HVAC\" will pull in job seekers, parts buyers and do-it-yourselfers faster than you can add negatives." },
      { type: "p", text: "**Negative keywords are a weekly habit, not a setup task.** The search terms report is where money leaks. In HVAC the recurring offenders are: jobs and salaries, wholesale and parts, DIY and troubleshooting, rentals and landlord-tenant queries, classes and certification, and out-of-area city names. Add negatives from evidence in the report rather than from a downloaded list, and remember that negatives do not match close variants — if you need to exclude a plural or a singular, add it deliberately. Do not block a phrase you actually sell by over-excluding a generic word." },
      { type: "p", text: "**Match the ad to the page.** If the ad promises same-day AC repair, the landing page should say that, show the phone number immediately, and name the cities served. Ad-to-page mismatch is one of the most common reasons a technically fine campaign converts poorly." },
      { type: "p", text: "**Use the assets that cost nothing extra to test.** Call assets (Google's current name for call extensions) put a tappable number under the ad on mobile; on desktop a \"Call us\" button shows the number. Schedule them for the hours someone answers. Location assets confirm the service area. Sitelinks let a searcher self-select between repair, replacement and maintenance — which is useful precisely because the three lines are different." },
      { type: "h2", text: "4. Allocating budget across service lines and seasons" },
      { type: "p", text: "**Do not divide the budget evenly.** Weight it by two things: the work you can actually deliver, and the value of the job. A company with two install crews in July should not spend install money it cannot service. A company with a full install board and idle service techs should shift toward repair and maintenance." },
      { type: "p", text: "**Plan the year in three phases, not twelve months.**" },
      {
        type: "ul",
        items: [
          "**Heating peak** (late autumn through winter): furnace repair and replacement demand rises; heating-repair campaign budgets should be at their highest.",
          "**Cooling peak** (late spring through summer): the mirror image.",
          "**Shoulder months** (spring and autumn): the honest use of budget is maintenance plans, tune-ups and replacement consideration — the jobs that fill the calendar and create next season's repair customers.",
        ],
      },
      { type: "p", text: "**Set a floor before you set a target.** Bidding needs conversion data to work with. A budget so small that it produces a handful of conversions a month will not exit the learning phase, and the account will look like it \"does not work\" when the real problem is insufficient volume. This is a structural constraint, not a promise about results." },
      { type: "p", text: "**Change budgets on a schedule, not in a panic.** A weekly review of search terms, budgets and pacing is enough for most single-market contractors. Mid-week budget swings in reaction to one bad day create more noise than signal." },
      { type: "h2", text: "5. What HVAC Google Ads cost: reading the published evidence" },
      { type: "p", text: "This is the section where most guides lose the thread, because three different kinds of number get mixed together." },
      { type: "p", text: "**1. Measured keyword metrics are not prices.** Google Ads Keyword Planner returns a rounded average monthly search volume and a top-of-page bid estimate for a keyword. For the terms adjacent to this topic, the measurements are small: \"hvac ppc\" returned 170 monthly US searches with a **$53.80** average CPC estimate and a competition index of 21; \"hvac advertising\" returned 390 searches at **$33.00** with an index of 25 (Keyword Planner via DataForSEO, US, retrieved 7 November 2026). Note what these are: national averages, in bucketed volume ranges, for queries that marketing agencies and software vendors bid on. **They are not what a contractor in a specific metro pays, and they are not search difficulty.** They are also the only measured figures in this guide, and they are not a budget." },
      { type: "p", text: "**2. Published benchmarks describe someone else's sample.** The most detailed public benchmark for this category is SearchLight's HVAC and plumbing advertising benchmark, covering **816 contractors, 8,077 campaigns and $14.88M in Google Ads spend for 1–31 January 2026**, with 143,008 leads and $77.7M in tracked closed revenue. It reports a blended cost per lead of **$104**, split as branded search **$34**, non-branded search **$149**, and Performance Max **$72**; heating repair campaigns at **$144** per lead with a 38.2% book rate and a $3,225 average ticket, and AC repair at **$231** with a 37.0% book rate and a $3,174 average ticket ([SearchLight Digital](https://searchlightdigital.io/what-is-a-good-cost-per-lead-for-hvac-google-ads/), published February 2026)." },
      { type: "p", text: "Those figures are useful and they are also easy to misuse. Six caveats, all of which matter:" },
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
      { type: "p", text: "**3. Competitor-reported ranges disagree with each other, which is the useful signal.** EZE Grow's 2026 budget guide reports cost per lead of **$25–$80** and cost per booked job of **$60–$150**, with CPC ranges by keyword type: AC repair $8–18, furnace repair $7–16, HVAC installation $12–25, emergency keywords $15–35 ([EZE Grow](https://ezegrow.com/google-ads-for-hvac-companies-budget-guide/)). The HVAC SEO Agency's budget guide publishes a different split by category — emergency repair $25–80, general service $15–50, installation $20–60, maintenance $8–25, brand $1–5 ([hvac-seo.agency](https://hvac-seo.agency/blog/hvac-ppc-advertising/hvac-ppc-budget-guide/)). Neither methodology is published, and neither is verified here. That disagreement is the point: **if two agencies in the same category publish ranges that do not overlap, a benchmark is not a budget input.**" },
      { type: "p", text: "**What to do instead.** Use a published benchmark as a sanity check on your own numbers after sixty to ninety days, in your own market, with your own tracking. Before that, your cost per lead is unknown, and any number you plan against is a placeholder." },
      { type: "h2", text: "6. A short economics primer: leads, qualified leads and booked jobs" },
      { type: "p", text: "Four counts drive everything, and they are routinely conflated:" },
      {
        type: "ul",
        items: [
          "**Leads** — every inbound contact attributable to the campaign: calls, form submissions, messages.",
          "**Qualified leads** — those that meet criteria you have written down and apply consistently (in service area, decision-maker, a service you actually sell).",
          "**Booked jobs** — leads that result in a scheduled visit.",
          "**Sold jobs** — booked jobs that become paying customers.",
        ],
      },
      { type: "p", text: "Two rates follow, and the denominator is the whole argument:" },
      {
        type: "ul",
        items: [
          "**Booking rate** = booked jobs ÷ **all** inbound leads.",
          "**Qualified-to-booking rate** = booked jobs ÷ **qualified** leads.",
        ],
      },
      { type: "p", text: "The same relationship stated two ways, which is why the denominator must be named every time. Mixing them — dividing a cost per lead by a qualified rate when the booking rate already used all leads — is the classic error, and it inflates cost per booked job by more than half." },
      { type: "p", text: "From there, one relationship is enough for this guide:" },
      { type: "blockquote", text: "**Cost per booked job = cost per lead ÷ booking rate**" },
      { type: "p", text: "A $150 lead at a 30% booking rate is $500 per booked job. The lead price did not change; the schedule did. That is why conversion work — answering faster, qualifying on the phone, offering a booking path — moves the number that matters without touching bids." },
      { type: "p", text: "**What a booked job can afford** depends on your average ticket and your margin, not on a benchmark. This part is well covered elsewhere and should be credited: SearchLight's benchmark article works through a ticket-and-margin example; Inshalytics publishes a break-even illustration using a $500 repair ticket at 45% gross margin; and VelocityPPC describes a jobs × close-rate × target-cost-per-booked-job budget method ([Inshalytics](https://inshalytics.com/blogs/hvac-google-ads-budget), [VelocityPPC](https://velocityppc.com/blog/hvac-google-ads-cost/), published September 2026)." },
      { type: "p", text: "What none of them do is reconcile an all-lead booking rate against a qualified-lead rate and derive a maximum allowable cost per booked job per service line. That is the subject of the companion article on HVAC cost per lead, and it is where the detailed model, the two denominators and the worked examples belong. If you need the ceiling calculation now, read that instead of extrapolating from this section. For the account work itself, see [HVAC Google Ads management](/industries/hvac)." },
      { type: "h2", text: "7. Lead quality and conversion tracking" },
      { type: "p", text: "If tracking is wrong, every subsequent decision is wrong. Three things need to be true before you judge a campaign." },
      { type: "p", text: "**Count the actions that represent a lead.** At minimum: form submissions, phone-number taps, and — if you use call tracking — inbound calls. Set them as conversion actions in Google Ads so bidding optimises toward outcomes rather than page views. A click on the phone number is a proxy for a call, not proof of one; a form submit is a proxy for a lead, not proof that anyone answered it." },
      { type: "p", text: "**Expect the platform number to be optimistic.** Duplicate form submissions, spam, and mis-clicks inflate platform-reported conversions. Compare platform-reported leads against what actually reached your dispatch board or inbox. Where they diverge, trust the closer-to-revenue number." },
      { type: "p", text: "**Import outcomes if, and only if, you have the plumbing.** Google Ads can accept offline conversions imported from a CRM, which is how a booked-job or sold-job signal gets back into bidding. Whether you can do this depends on having a CRM with the data, a reliable match key, and someone to maintain it. Many contractors do not, and that is a legitimate stopping point: **without a CRM or an offline conversion process, reporting stops at the lead.** You can know cost per call and cost per form. You cannot know cost per booked job, because the booking happens in your dispatch system, not in Google Ads." },
      { type: "p", text: "Two attribution caveats worth saying plainly. Last-click attribution credits whichever channel touched the customer last, which systematically under-credits earlier touchpoints and over-credits branded search. And Local Services performance reports do not transfer into Google Ads during the migration, so historical comparisons across the transition need to be handled deliberately rather than assumed." },
      { type: "h2", text: "8. Operational mistakes that quietly waste budget" },
      { type: "p", text: "These recur across the accounts that get discussed publicly, and each has a cheap check." },
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
          "**How is the fee structured — fixed, hourly, or a percentage of spend?** Percentage-of-spend models create an incentive to increase spend; fixed fees create an incentive to do less. Neither is automatically wrong; the structure should be stated before the contract.",
          "**What exactly will be reported each month, and what cannot be reported?** Calls and forms separately, cost per lead by campaign, month-on-month movement with seasonality noted. If nobody can say what happens after the lead, that limit should be admitted, not papered over.",
          "**Who owns the accounts and the tracking?** You should hold admin access to Google Ads, Analytics, Tag Manager and Business Profile, and be able to remove a partner without losing history.",
        ],
      },
      { type: "p", text: "A useful test is whether the person will tell you what they cannot measure. An agency that claims full booked-job attribution without a CRM is describing something it cannot deliver." },
      { type: "h2", text: "10. Where this approach stops" },
      { type: "p", text: "Structural work improves the odds; it does not control the market. Demand moves with weather, competitor pricing and local supply. Lead quality depends on how fast the phone is answered and how the CSR handles the call, both outside the ad account. Attribution stops at the lead for most contractors. And no structure guarantees a cost per lead, a booking, or a return — anyone promising that is describing a different business." },
      { type: "h2", text: "11. FAQs" },
      { type: "h3", text: "How much do HVAC Google Ads cost per month?" },
      { type: "p", text: "There is no single figure, and published numbers come from different samples. SearchLight's January 2026 benchmark reports a blended $104 cost per lead across 816 HVAC and plumbing contractors, split $34 branded, $149 non-branded and $72 Performance Max — with the caveats that it is one vendor's client base, one month, and both trades combined. EZE Grow separately reports $25–$80 per lead. Use either as a comparison point after you have your own sixty to ninety days of data, not as a budget." },
      { type: "h3", text: "What is a reasonable monthly budget for an HVAC company?" },
      { type: "p", text: "Start from the work you can deliver and the cost of a lead in your market, then set a floor high enough to generate enough conversions for bidding to function. A budget too small to produce consistent conversions will not exit learning, and the account will look ineffective for structural reasons. The number is a function of your service area, your service mix and your capacity — not of an industry rule." },
      { type: "h3", text: "Why do HVAC clicks cost so much?" },
      { type: "p", text: "Because the searches are worth money. Someone searching for emergency repair is trying to solve a problem today, and the job that follows is expensive. When many contractors bid for the same local searches in peak season, the price rises. National top-of-page bid estimates for related marketing terms ran around $33 to $54 in November 2026, but local prices vary enough that your own account is the only reliable source." },
      { type: "h3", text: "Should I pay an agency a percentage of ad spend or a flat fee?" },
      { type: "p", text: "Both exist and both have incentive problems. Percentage models reward higher spend; flat fees reward doing less work. What matters more than the model is transparency: a stated fee, your ownership of accounts and tracking, and reporting that separates calls from forms and admits what cannot be measured." },
      { type: "h3", text: "Are Google Ads worth it for an HVAC company?" },
      { type: "p", text: "They can be, when the account is structured by service line, the service area is enforced, and tracking is trustworthy enough to judge. The honest test is cost per booked job against what a booked job is worth to your business — and if you cannot measure bookings, you cannot answer the question yet. Nothing here guarantees a result either way." },
      { type: "h3", text: "Do I need Local Services Ads as well as search ads?" },
      { type: "p", text: "They do different jobs. Local Services (now migrating into Google Ads as pay-per-lead Performance Max campaigns) reaches high-intent local searchers and charges per valid lead; search ads give you control over which services and terms you appear for. Many contractors eventually run both, budgeted separately — because they are two different bills, as covered in section 1." },
      { type: "h3", text: "About this guide" },
      { type: "p", text: "Written by Khandokar Riajul Islam, a performance marketing specialist with more than five years of paid search, paid social and analytics experience. **No HVAC client case study is published, and none is implied here.** All benchmark figures are third-party, dated and attributed; the operational guidance is general paid-media practice applied to residential HVAC, not a report of campaign results." },
    ],
  },
];

export default draftPosts;
