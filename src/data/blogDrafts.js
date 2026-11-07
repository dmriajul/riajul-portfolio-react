/**
 * ==========================================================
 * UNPUBLISHED DRAFTS — NEVER PUBLISHED BY THIS BUILD
 * ==========================================================
 *
 * Articles in this file are invisible to production:
 *   - never rendered on /blog/ (the draft-preview flag is never set in
 *     production, so the index filters them out);
 *   - never prerendered to an HTML file, so /blog/<slug> falls through to
 *     the blog not-found page;
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
  {
    slug: "draft-fixture-template-test",
    title: "Draft Fixture: Article Template Test",
    excerpt:
      "Non-published test fixture used to exercise the article template, table of contents, breadcrumbs and metadata. This is not an article and must never be published.",
    category: "hvac-google-ads",
    topic: "google-ads-strategy",
    status: "draft",
    publishedAt: "2026-11-07",
    updatedAt: null,
    author: "khandokar-riajul-islam",
    featuredImage: null,
    seo: {
      title: "Draft Fixture: Article Template Test (Unpublished)",
      description:
        "Internal test fixture for the blog article template. Not published, not indexed, and not part of the sitemap.",
    },
    related: [],
    body: [
      {
        type: "callout",
        variant: "warning",
        title: "This is a test fixture, not an article",
        text: "You are looking at a draft. It contains no HVAC advice, no figures and no claims. Its only purpose is to prove the article template, table of contents, metadata and structured data work before real articles are written.",
      },
      {
        type: "p",
        text: "This paragraph exists so the fixture has body copy to measure. Reading time is calculated from the word count of the text blocks, and the table of contents is generated from the **h2** and **h3** blocks that follow, so both can be verified here without inventing a real article.",
      },
      { type: "h2", text: "What this fixture proves" },
      {
        type: "p",
        text: "The template renders every block type the content model supports: headings, paragraphs, lists, quotes, callouts and links. Internal links use square brackets, like this [HVAC marketing page](/industries/hvac), and become client-side navigation rather than a full reload.",
      },
      {
        type: "ul",
        items: [
          "Headings generate stable anchor IDs for the table of contents.",
          "The published date and reading time render in a single meta row.",
          "Breadcrumbs point at Home and Blog, never at a missing category page.",
        ],
      },
      { type: "h2", text: "Block coverage" },
      { type: "h3", text: "Lists" },
      {
        type: "ol",
        items: [
          "An ordered list item.",
          "A second ordered item, to confirm numbering is real markup.",
        ],
      },
      { type: "h3", text: "Quotes and callouts" },
      {
        type: "blockquote",
        text: "A blockquote is included so the fixture exercises the quote style, not because anything here needs quoting.",
      },
      {
        type: "callout",
        variant: "note",
        title: "Notes render differently from warnings",
        text: "The callout block supports a note variant as well as a warning variant, which is useful for definitions and caveats in real articles.",
      },
      { type: "h2", text: "Why it must never be published" },
      {
        type: "p",
        text: "Publishing it would put an empty, self-referential page in the sitemap and in the article listing. The build assertions exist specifically to make that failure loud rather than silent.",
      },
    ],
  },

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
    title: "HVAC Google Ads: A Practical Guide for Contractors (2026)",
    excerpt:
      "How a residential HVAC account should be built and run: service-line separation, seasonal budgets, CRM-matched tracking, and what cost data really says.",
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
      {
        type: "p",
        text: "Residential HVAC is one of the most expensive categories on Google Ads, and one of the easiest to run badly. The failure is rarely creative. It is structural: repair calls and replacement quotes sharing one campaign, a service area that includes towns you would not drive to, and conversion tracking that counts every form submit as a lead whether or not anyone answered the phone.",
      },
      {
        type: "p",
        text: "This guide covers how the account should be built and run: service-line separation, campaign planning, budget allocation across the year, what published cost data does and does not tell you, and what to track so the numbers mean something. It is written for owner-operators and general managers of residential heating and cooling companies in the United States.",
      },
      {
        type: "callout",
        variant: "note",
        title: "What this guide does not claim",
        text: "It contains no HVAC client results, no campaign screenshots and no guaranteed outcomes. Every cost figure is labelled as a measured keyword metric, a published benchmark from a named source, or a competitor's reported range. Acquisition economics are kept deliberately brief: the detailed cost-per-lead model belongs in a companion article and is not duplicated here.",
      },

      { type: "h2", text: "1. How Google Ads works for a residential HVAC contractor" },
      {
        type: "p",
        text: "Google Ads is an auction. You bid for the chance to show an ad against a search, and you pay when someone clicks. Ranking is not determined by bid alone — relevance between the search, the ad and the landing page matters too, which is why a tightly themed campaign usually beats a broader one at the same bid.",
      },
      { type: "p", text: "For an HVAC company, three ad formats matter:" },
      {
        type: "p",
        text: "**Search ads** are text ads shown above and below organic results. They reach people who have already typed the problem: “AC not cooling”, “furnace repair near me”, “heat pump installation near me”. Intent is high and so is the cost per click.",
      },
      {
        type: "p",
        text: "**Performance Max with pay-per-lead goals** is where Google Local Services Ads now live. Google is migrating Local Services Ads into the Google Ads interface as a specialised Performance Max campaign type. The migration is phased: the first phase began **August 2026** for select US home and storefront service advertisers, **including HVAC**; broader service-area businesses follow in **late 2026**; non-US accounts and remaining categories in **2027** ([Google's Local Services Ads transition documentation](https://support.google.com/google-ads/answer/17213585?hl=en)).",
      },
      {
        type: "p",
        text: "What does not change is the billing model. You still pay for valid leads — calls, messages, bookings — rather than clicks. Ads still appear only on Google Search and Maps, and targeting remains keywordless, driven by service categories and service areas. What does change matters operationally:",
      },
      {
        type: "ul",
        items: [
          "**Local Services performance reports do not transfer.** Google's documentation says to download or screenshot historical reports before migration.",
          "**Manual bidding and industry-level target CPA are being deprecated.** Budgets move from a weekly figure to a daily average, calculated as the historical weekly budget divided by seven.",
        ],
      },
      {
        type: "p",
        text: "For budgeting purposes, this is the single most important distinction in the account: **pay-per-click campaigns and pay-per-lead campaigns are two different bills.** A cost per lead from a Local Services campaign and a cost per click from a search campaign are not comparable numbers, and blending them produces a figure that describes neither.",
      },
      {
        type: "p",
        text: "**Display and YouTube** are usually the lowest priority for a residential contractor. They can support remarketing later, once search and pay-per-lead are producing work you can measure.",
      },

      { type: "h2", text: "2. Service-line separation: the structural decision" },
      {
        type: "p",
        text: "A residential HVAC company sells at least four different things to four different buyers:",
      },
      {
        type: "table",
        head: ["Service line", "What the searcher wants", "Typical urgency"],
        rows: [
          ["Emergency repair", "Someone to come today; price is secondary", "Same day"],
          ["Replacement / install", "A quote, financing, and confidence in the installer", "Weeks to months"],
          ["Maintenance / tune-up", "A specific price and an appointment slot", "Planned, often seasonal"],
          ["Indoor air quality", "Explanation first — filtration, humidity, ductwork", "Low, research-led"],
        ],
        caption:
          "Four service lines, four different buying conversations. Sharing one campaign blurs all of them.",
      },
      {
        type: "p",
        text: "These are not one conversation. Someone with no cooling in July is not comparing heat pump efficiency ratings; someone pricing a replacement is not going to book an emergency dispatch. If both searches trigger the same ad and land on the same page, one of them is being mis-served.",
      },
      {
        type: "p",
        text: "**When to split into separate campaigns.** Google's own guidance on account structure is the cleanest rule available: create a separate campaign when **the budget or the locations differ**, and use ad groups within one campaign when they do not ([Organize your account with ad groups](https://support.google.com/google-ads/answer/6372655?hl=en)). Applied to HVAC:",
      },
      {
        type: "ul",
        items: [
          "One campaign per service line, because each line has its own budget shape and often its own service radius.",
          "Separate campaigns per metro when drive time, pricing or competition differs enough to justify a different budget.",
          "Ad groups inside each campaign for tight themes — “AC repair”, “furnace repair”, “heat pump repair” — each with ads that repeat the theme.",
        ],
      },
      {
        type: "p",
        text: "**What each line needs.** Emergency campaigns need call assets, schedules that match when someone actually answers, and ad copy that states the response honestly. Replacement campaigns need the quote path — financing if it is genuinely offered, a form that asks enough to qualify but not so much that it filters out real buyers. Maintenance campaigns need a specific offer with visible terms.",
      },
      {
        type: "p",
        text: "**One structural warning.** Google's documentation notes that reorganising an account after several campaigns and ad groups exist “wipes out all the valuable data you've accumulated”, which can affect how the ads perform. Decide the structure before you spend, not after. And whatever you choose, name campaigns and ad groups in a way a stranger could read: “Search | Repair | Emergency | metro” tells the next person what it is. “Campaign 1” does not.",
      },

      { type: "h2", text: "3. Planning a search campaign" },
      {
        type: "p",
        text: "**Start from the service area, not the keywords.** List the towns and ZIP codes you will actually drive to, and the radius you are willing to pay for. Targeting a metro you cannot service produces leads you will decline, and declining leads is how a campaign acquires a reputation for poor quality when the cause was geography.",
      },
      {
        type: "p",
        text: "**Build keyword themes per service line.** Three to eight themes per line is usually enough. For AC repair: AC repair, air conditioner repair, AC not cooling, AC blowing warm air. For replacement: AC replacement, AC installation, new air conditioner, heat pump installation. Keep brand terms in their own campaign so brand and non-brand performance can be read separately.",
      },
      {
        type: "p",
        text: "**Negative keywords are a weekly habit, not a setup task.** Typical exclusions for HVAC: jobs, salary, training, certification, DIY, parts, wholesale, used, rent, apartment, and commercial if you are residential only. Google's documentation is explicit that negative keywords do not match close variants or other expansions, so plurals, singulars and obvious synonyms have to be added deliberately rather than assumed ([About negative keywords](https://support.google.com/google-ads/answer/2453972?hl=en)).",
      },
      {
        type: "p",
        text: "**Match the ad to the page.** A repair ad should land on the repair page for that service, with the phone number visible above the fold and the service area stated. A replacement ad should land on a page that answers cost, financing and installation process. Sending both to the homepage wastes the click you just paid for.",
      },
      {
        type: "p",
        text: "**Use the assets that cost nothing extra to test.** Call assets put a tappable number under the ad on mobile and show a “Call us” button on desktop; a click on one costs the same as a headline click, so there is no separate budget to defend ([About call assets](https://support.google.com/google-ads/answer/2453991?hl=en)). Schedule them for the hours someone actually answers. Location assets confirm the service area. Sitelinks let a searcher self-select between repair, replacement and maintenance — which is useful precisely because the three lines are different.",
      },

      { type: "h2", text: "4. Allocating budget" },
      {
        type: "p",
        text: "**Do not divide the budget evenly.** Emergency repair usually deserves the largest share in summer and winter, replacement deserves a steady allocation because the buying cycle is long, and maintenance is seasonal. The split follows the business, not the calendar month.",
      },
      { type: "p", text: "**Plan the year in three phases, not twelve months.**" },
      {
        type: "ol",
        items: [
          "Heating season: emergency repair and replacement both peak. Expect the highest cost per click of the year on heating terms.",
          "Cooling season: the same pattern on AC terms, compressed into a shorter window and often more competitive.",
          "Shoulder months: fewer emergency searches, better conditions for maintenance offers, and the cheapest time to test replacement messaging before the next peak.",
        ],
      },
      {
        type: "p",
        text: "**Set a floor before you set a target.** A campaign that spends too little to gather data cannot be optimised, and a campaign paused every other week never accumulates a usable history. Decide the minimum monthly spend per service line you can commit to for a full season, and build the plan around that number.",
      },
      {
        type: "p",
        text: "**Change budgets on a schedule, not in a panic.** Weekly or fortnightly reviews are frequent enough. Adjusting bids daily in response to one slow Tuesday produces a campaign that reacts to noise.",
      },

      {
        type: "h2",
        text: "5. What HVAC Google Ads cost: reading the published evidence",
      },
      {
        type: "p",
        text: "This is the section where most guides lose the thread, because three different kinds of number get mixed together.",
      },
      {
        type: "p",
        text: "**1. Measured keyword metrics are not prices.** Google Ads Keyword Planner returns a top-of-page bid estimate — the low and high range advertisers paid for a top-of-page position on that term — alongside a monthly search volume. It is not a cost per lead and it is not a quote.",
      },
      {
        type: "p",
        text: "Pulled for the United States in November 2026, the metrics for the head terms are small and the bid ranges are wide: “hvac google ads” at 50 searches per month with no bid range returned, “hvac ppc” at 170 with roughly $53.80, and “hvac advertising” at 390 with roughly $33.00. The volume is low because these are marketing terms, not consumer terms. They tell you what a competitor might pay to reach an audience of marketers. They tell you nothing about what a homeowner in July will cost you.",
      },
      {
        type: "p",
        text: "**2. Published benchmarks describe someone else's sample.** The most cited HVAC figures come from SearchLight's HVAC and Plumbing Advertising Benchmark: January 2026 data covering $14.9M in Google Ads spend across 816 contractors and 8,077 campaigns. It reports a blended cost per lead of $104, split $34 branded, $149 non-branded and $72 Performance Max, and breaks the non-branded figure down by service category — heating repair at $144 per lead with a 38.2% book rate and a $3,225 average ticket, AC repair at $231 with a 37.0% book rate and a $3,174 average ticket ([SearchLight Digital](https://searchlightdigital.io/what-is-a-good-cost-per-lead-for-hvac-google-ads/)).",
      },
      { type: "p", text: "Those figures are useful, and they are also easy to misuse:" },
      {
        type: "table",
        head: ["Caveat", "Why it matters to you"],
        rows: [
          [
            "It is a 31-day window",
            "January is heating season. Cooling-line costs and book rates in that sample describe a month you are not in.",
          ],
          [
            "It is not a national average",
            "It describes one vendor's book of contractor accounts. A sample of agency clients is not a sample of the market.",
          ],
          [
            "Cost per lead is not cost per booked job",
            "Non-branded search leads cost $149 and book at 37.6%; Performance Max leads cost $72 and book at 32.2%. The cheaper lead is not automatically the cheaper job.",
          ],
          [
            "Book rate comes from someone else's phone handling",
            "Two contractors with the same cost per lead can land far apart on cost per paying customer, purely on how fast and how well leads are answered.",
          ],
          [
            "The category mix is not your mix",
            "The dataset combines HVAC and plumbing, and plumbing is the largest single block of spend inside it.",
          ],
          [
            "It is one month, one vendor, one year",
            "Use it to sanity-check your own numbers. Never use it as your target.",
          ],
        ],
        caption:
          "Caveats that apply to every published HVAC cost-per-lead benchmark, not only this one.",
      },
      {
        type: "p",
        text: "**3. Competitor-reported ranges disagree with each other, which is the useful signal.** EZE Grow's HVAC budget guidance frames spend as a target cost per acquisition against revenue rather than a fixed cost per click. HVAC SEO Agency's PPC budget guide presents per-lead ranges by service line. Where two credible guides disagree by a factor of two, the disagreement is the finding: cost per lead depends more on market, season and account structure than on any universal figure ([EZE Grow](https://ezegrow.com/google-ads-for-hvac-companies-budget-guide/), [HVAC SEO Agency](https://hvac-seo.agency/blog/hvac-ppc-advertising/hvac-ppc-budget-guide/)).",
      },
      {
        type: "p",
        text: "**What to do instead.** Treat the published numbers as a hypothesis. Run your own for eight weeks with clean tracking, then compare. If your cost per lead is double the benchmark, the answer is in the account — structure, targeting, or the landing page — not in the market.",
      },

      { type: "h2", text: "6. A short economics primer: four counts and two rates" },
      { type: "p", text: "Four counts drive everything, and they are routinely conflated:" },
      {
        type: "ul",
        items: [
          "**Clicks** — what you paid for.",
          "**Leads** — calls, forms and chats that represent a real person asking about work. Junk and wrong-number contacts belong in their own bucket.",
          "**Booked jobs** — leads that turned into a scheduled appointment with an address and a time window.",
          "**Sold jobs** — booked jobs that became signed work and revenue.",
        ],
      },
      { type: "p", text: "Two rates follow, and the denominator is the whole argument:" },
      {
        type: "ul",
        items: [
          "**Booking rate** = booked jobs ÷ all leads.",
          "**Close rate** = sold jobs ÷ booked jobs.",
        ],
      },
      {
        type: "p",
        text: "The same relationship stated two ways, which is why the denominator must be named every time. Mixing them — dividing a cost per lead by a qualified rate when the booking rate already used all leads — is the classic error, and it inflates cost per booked job by more than half.",
      },
      { type: "p", text: "From there, one relationship is enough for this guide:" },
      { type: "blockquote", text: "**Cost per booked job = cost per lead ÷ booking rate**" },
      {
        type: "p",
        text: "A $150 lead at a 30% booking rate is $500 per booked job. The lead price did not change; the schedule did. That is why conversion work — answering faster, qualifying on the phone, offering a booking path — moves the number that matters without touching bids.",
      },
      {
        type: "p",
        text: "**What a booked job can afford** depends on your average ticket and your margin, not on a benchmark. This part is well covered elsewhere and should be credited: SearchLight's benchmark article works through a ticket-and-margin example, Inshalytics publishes a break-even illustration using a $500 repair ticket at 45% gross margin, and VelocityPPC describes a jobs × close-rate × target-cost-per-booked-job budget method ([Inshalytics](https://inshalytics.com/blogs/hvac-google-ads-budget), [VelocityPPC](https://velocityppc.com/blog/hvac-google-ads-cost/)).",
      },
      {
        type: "p",
        text: "What none of them do is reconcile an all-lead booking rate against a qualified-lead rate and derive a maximum allowable cost per booked job per service line. That is the subject of the companion article on HVAC cost per lead, and it is where the detailed model, the two denominators and the worked examples belong. If you need the ceiling calculation now, that is a separate piece of reading rather than something to extrapolate from this section.",
      },
      {
        type: "p",
        text: "If you are weighing whether to build this in-house or hand it over, the [HVAC Google Ads management](/industries/hvac) page sets out how the account work is scoped.",
      },

      { type: "h2", text: "7. Lead quality and conversion tracking" },
      {
        type: "p",
        text: "Most HVAC accounts count too much. A form submission is not a lead until someone has read it; a call is not a lead until it lasts longer than a wrong number. The tracking should reflect the definitions above, not the platform's defaults.",
      },
      {
        type: "p",
        text: "**Count the actions you will actually act on.** Form submits, calls over a duration threshold, and booked appointments are the three that matter. If the phone system can report whether a call was answered, that is worth capturing.",
      },
      {
        type: "p",
        text: "**Send lead quality back to Google.** Offline conversion import — or an enhanced-conversions feed from the CRM — lets bidding optimise toward booked jobs rather than toward form fills. This is the difference between a campaign that gets cheaper and one that gets better.",
      },
      {
        type: "p",
        text: "**Keep the noise out.** Mark internal traffic and job applicants as exclusions. A staff member testing the quote form twice a week will quietly teach the account that the form is a great conversion.",
      },
      {
        type: "p",
        text: "**Reconcile the CRM against the ads platform monthly.** If Google reports 40 conversions and the CRM shows 26 leads, the gap is either a tracking fault or a definition difference, and both are cheaper to fix than to bid against.",
      },

      { type: "h2", text: "8. Operational mistakes" },
      {
        type: "p",
        text: "These recur across the accounts that get discussed publicly, and each one has a cheap check.",
      },
      {
        type: "table",
        head: ["Mistake", "Cheap check"],
        rows: [
          [
            "One campaign for every service line",
            "Open the settings. Do a repair ad and a replacement ad share a budget and a location list?",
          ],
          [
            "Every call counted as a conversion",
            "Are calls under 30 seconds counted? Are they weighted the same as a booked job?",
          ],
          [
            "No negative keyword list",
            "How many search terms last month were irrelevant? If nobody can answer, there is no list.",
          ],
          [
            "Geo-targeting that excludes your own city",
            "Check the radius and the presence setting: “people in your targeted locations” and “people in, searching for, or regularly in” are different audiences.",
          ],
          [
            "Ad copy promising same-day service while the team is booked out",
            "Compare the copy with the dispatcher's actual availability this week.",
          ],
          [
            "Landing pages that repeat the ad verbatim",
            "Does the page answer the next question — price range, timing, service area?",
          ],
          [
            "Bidding on competitors without a reason",
            "What does your landing page offer that the competitor's own page does not?",
          ],
          [
            "Leads routed to a shared inbox nobody owns",
            "Ask who owns the first reply, and what the median response time was last month.",
          ],
        ],
        caption: "Each row is a question you can answer in an afternoon.",
      },
      {
        type: "p",
        text: "The last one is not an advertising problem, but it behaves like one. A lead that sits for two days makes a functioning campaign look broken.",
      },

      { type: "h2", text: "9. Working with an agency or freelancer" },
      {
        type: "p",
        text: "The questions worth asking are the ones you would ask a new hire, because the work is the same work.",
      },
      {
        type: "ol",
        items: [
          "Who owns the accounts? Google Ads, the tracking numbers, the CRM, the analytics property and the website should all be in your name, with the agency granted access rather than ownership.",
          "What is the reporting cadence, and against which definitions? A report that shows conversions without defining them is a report you cannot audit.",
          "What happens at the end of the contract? Ask specifically how the account, the tracking and the historical data are handed back.",
        ],
      },
      {
        type: "p",
        text: "A useful test is whether the person will tell you what they cannot measure. Anybody can promise a cost per lead; somebody worth hiring will explain which of your numbers are estimates, which are measured, and what the tracking does not currently capture.",
      },

      { type: "h2", text: "10. Where this approach stops" },
      {
        type: "p",
        text: "Everything above assumes a residential contractor with a service area, someone responsible for answering the phone, and the capacity to take more work in the season it arrives. If the team is already booked out, more leads do not help: the constraint is fulfilment, and the advertising budget is the wrong lever until that is resolved.",
      },
      {
        type: "p",
        text: "It also assumes a working website and a phone that gets answered. Neither is an advertising problem, and no campaign setting fixes either one. When an account is not performing, check those two before changing bids.",
      },

      { type: "h2", text: "11. FAQs" },
      { type: "h3", text: "How much does HVAC Google Ads cost per lead in 2026?" },
      {
        type: "p",
        text: "There is no single figure, and any guide that gives you one without a source is guessing. The best-documented published benchmark comes from SearchLight's January 2026 dataset: a blended cost per lead of $104, split $34 branded, $149 non-branded and $72 Performance Max. Your own number will depend on market, season, service mix and how well the account separates its service lines.",
      },
      { type: "h3", text: "Do Local Services Ads still exist for HVAC companies?" },
      {
        type: "p",
        text: "Yes, in a different place. Google is moving Local Services Ads into Google Ads as Performance Max campaigns with pay-per-lead goals. HVAC is in the first migration phase, which began in August 2026 for select US advertisers. Pay-per-lead billing, Search and Maps placement and keywordless targeting all continue; the interface, the reporting and the bidding options change.",
      },
      { type: "h3", text: "How much should a residential HVAC company spend on Google Ads?" },
      {
        type: "p",
        text: "Enough to gather data in every service line you intend to run, sustained through a full season. In practice that is a floor per service line rather than a percentage of revenue, because a campaign that never accumulates history cannot be optimised. National top-of-page bid estimates for related marketing terms sat between roughly $33 and $54 in November 2026 — a sanity check on click costs, not a budget.",
      },
      { type: "h3", text: "Is Performance Max better than search for HVAC?" },
      {
        type: "p",
        text: "Not in the abstract. Performance Max with pay-per-lead goals is the migration path for Local Services Ads and is genuinely strong for local intent. Standard Performance Max, run for a contractor without reliable conversion data, tends to spread spend across networks that do not produce booked jobs. Search campaigns give you the control that replacement and maintenance lines usually need.",
      },
      { type: "h3", text: "How long before Google Ads produces booked jobs for an HVAC company?" },
      {
        type: "p",
        text: "Calls and leads can arrive in the first week when the tracking is right and the service area is competitive. A stable read on cost per booked job takes longer, because booking rate depends on how the team handles those leads. Plan on a full season before judging the account, and review the structure well before then.",
      },
      { type: "h3", text: "What tracking does an HVAC Google Ads account need?" },
      {
        type: "p",
        text: "Form submits, calls above a duration threshold, and booked appointments as separate conversions, with outcomes reported back from the CRM so lead quality can reach the bidding algorithm. Calls under 30 seconds and internal traffic should be excluded. If the conversion count in Google Ads does not reconcile with the lead count in the CRM, fix that before increasing budget.",
      },

      {
        type: "callout",
        variant: "note",
        title: "About this guide",
        text: "Written by Khandokar Riajul Islam, whose paid search, paid social and analytics work spans more than five years across local service businesses. No HVAC client case study is published, and none is implied here. Where a figure cannot be sourced or measured, it is labelled as an estimate and kept out of the argument.",
      },
    ],
  },
];

export default draftPosts;
