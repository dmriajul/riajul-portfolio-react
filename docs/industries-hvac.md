# /industries/hvac: what the page says and what it needs before it earns anything

Scope note: this document describes the page that exists in the repository. It is not a
performance claim. Nothing here has been measured, because no HVAC campaign has been run
through this site and no analytics property is configured (see "Not configured yet").

## Route and files

| Item | Value |
|---|---|
| URL | `/industries/hvac` |
| Canonical | `https://portfolio.riajultech.com/industries/hvac` |
| Route entry | `src/App.jsx` (declared above the catch-all) |
| Page component | `src/pages/IndustryHvac.jsx` |
| Content | `src/data/industryHvacData.js` |
| Form | `src/components/hvac/HvacInquiryForm.jsx` |
| Diagrams and reporting preview | `src/components/hvac/HvacVisuals.jsx` (HTML and CSS only, no images) |
| Form payload helpers | `src/lib/hvacInquiry.js` |
| Transport (shared) | `src/lib/web3forms.js` (unchanged) |
| Styles | `src/styles/industry.css`, plus light theme rules in `src/styles/theme.css` |
| Metadata | `src/hooks/useSeo.js` (unchanged) |

## Editorial position

The page is written for residential HVAC contractors operating in the United States, and it
sells one thing: paid acquisition plus the measurement that makes it judgeable. It deliberately
does not claim:

- HVAC clients, case studies, testimonials, or campaign results (none exist for this industry)
- guaranteed leads, bookings, or revenue
- call tracking, unless a provider and numbers are actually configured
- server side tracking, unless it is built and tested in the client's own setup

Instead it separates the work into three groups, which is the part competitors usually leave
vague:

1. **Included**: Google Ads, Meta Ads, GA4 and Tag Manager configuration, conversion imports,
   UTM standards, landing page work, monthly reporting.
2. **Needs client access or a third party tool**: account admin access, a call tracking
   subscription, a CRM, site edit access, hosting or server side work.
3. **Unverifiable from ad data alone**: which lead became a booked job, revenue per job, profit
   per campaign, anything that happens after the call ends.

## Section order

Each section answers one buyer question, in the order the questions usually arrive.

| # | Section | Question it answers |
|---|---|---|
| 1 | Breadcrumb | Where am I |
| 2 | Hero, four stat cards, system flow diagram | What is this, and what does the whole thing look like |
| 3 | Where HVAC advertising usually breaks (5 problems) | Do you understand my business |
| 4 | Problem to response map (5 rows), three operating principles, two-lane channel workflow | How would you fix it |
| 5 | Six capability cards | What exactly do you do |
| 6 | Three channel playbooks: Google Ads (6 points), Meta Ads (5 points), landing pages and CRO (6 points) | What does each channel involve |
| 7 | Tracking architecture diagram, then included / needs tools / unverifiable columns, disclaimer callout | Can this be measured, and by whom |
| 8 | What Your Marketing Investment Covers (8 items), 4 exclusions, no guarantee statement, result dependencies, pricing note | What am I paying for, and what costs extra |
| 9 | Documented experience (4 case studies), disclaimer, "what I cannot show yet" | What evidence supports you |
| 10 | Why Work With Me (6 reasons), certifications, positioning statement, who you would be working with | Why you |
| 11 | Four stage process, optimisation cycle diagram | What happens after I get in touch |
| 12 | Six deliverables | What do I receive |
| 13 | Monthly reporting scope, illustrative report layout | What will I actually see each month |
| 14 | FAQ (10 questions, answers always present in the DOM) | The awkward questions |
| 15 | Related services strip | Where else can I go |
| 16 | HVAC inquiry form (secondary CTA), Calendly offered first, then the primary CTA block | How do I start |

The "who this is for" and "who this is not a fit for" pair sits at the end of section 3.

## CTA hierarchy

| Rank | Call to action | Notes |
|---|---|---|
| 1 | Book a 30-Min Call (Calendly) | Hero, form section, final CTA |
| 2 | HVAC inquiry form | `#hvac-inquiry` anchor from the hero and the final CTA |
| 3 | WhatsApp | Plain text link in the hero, button in the final CTA only |

The `+880` number is never used as a `tel:` link inside the page body. It still appears as a
`tel:` link in the shared `Footer` component, which is global and was not changed here.

## The inquiry form

- Separate from the homepage contact form. That form's behaviour is untouched.
- Same transport: `submitLead()` in `src/lib/web3forms.js`, same endpoint, same access key handling.
  No credential is added or exposed by the HVAC components.
- Fields: name, company, email, phone, service area, optional budget range, optional message.
  All labels are visible; the honeypot uses the existing `botcheck` / `.hp-field` pattern.
- Subject is built as `HVAC LEAD: <company> (<service area>)` so it is separable in the inbox.
- Hidden tags: `page_source=hvac`, `inquiry_type=hvac_landing_page`.
- Failure states distinguish an API rejection from a network failure and point the user back to
  the booking link rather than a dead end.

## Structured data

Three JSON-LD blocks are rendered with the page:

- `Service` with `areaServed: United States`, `audience: Residential HVAC contractors`, and the
  person as provider.
- `BreadcrumbList` with two items, both absolute URLs.
- `FAQPage` mirroring the ten visible questions.

The FAQ answers stay in the DOM while collapsed (animated height, not unmounted) so the full text
is readable by crawlers and answer engines without a click.

## Evidence and provenance

The proof section uses four results that already exist in this repository. Nothing was invented,
rounded up, or adapted for HVAC.

| Client | Figures shown | Source in this repository | Link offered |
|---|---|---|---|
| Foring Group | 5.88% peak account CTR, cost per lead $0.13 to $0.34 | `src/data/servicesDetailData.js` (smm and meta-ads case studies) | `/services/meta-ads` |
| ZR Fashion | 860+ Messenger conversations, $0.05 per result | `src/data/servicesDetailData.js` (smm case studies) | `/services/smm` |
| Salient Shop | 344 orders in the first 7 days, $0.98 per result | `src/data/servicesDetailData.js` (smm and meta-ads case studies) | `/services/meta-ads` |
| Rong Bahari | 347 messaging leads, $0.027 per result | `src/data/servicesDetailData.js` (smm case studies) | `/services/smm` |

The brief supplied "$0.13 CPL" for Foring Group. The repository documents the range
`$0.13 - $0.34`, so the page shows the range rather than the single lower bound.

Guardrails applied to the section:

- A standing label above the cards: "Results from other industries, not HVAC".
- Each card names its category (lead generation, apparel retail, e-commerce launch, messaging
  leads) and a line of context describing what was actually done.
- A disclaimer states the figures are not a forecast, benchmark, or promise for an HVAC account.
- A separate "what I cannot show yet" list states that no HVAC case study exists, that there is no
  documented HVAC cost per booked job, and that HVAC call tracking has not been run.

## Illustrative visuals

`src/components/hvac/HvacVisuals.jsx` renders five figures: the hero system flow, the two-lane
channel workflow, the tracking architecture, the optimisation cycle, and a monthly report layout.

- All five are HTML and CSS. No screenshots, stock photos, or generated images are used, and no
  client numbers appear anywhere in them.
- The report preview carries an "Illustrative" badge, placeholder dashes in every numeric cell, and
  a caption saying the figures in a real report come from the client's own accounts.
- The existing portfolio dashboard images (`meta-ads-dashboard.jpg`, `google-ads-dashboard.jpg`)
  were deliberately **not** used: they show other clients, other industries, and a different spend
  level, so putting them on an HVAC page would imply results the page cannot support.

## Not configured yet

- **No analytics.** There is no GA4 measurement ID or GTM container ID in this project. The HVAC
  funnel is therefore **unmeasured**. When analytics is approved, the intended events are
  `schedule_click`, `hvac_form_submit` (or `generate_lead` with `page_source=hvac`), `call_click`,
  `whatsapp_click`, and `hvac_page_view`.
- **No call tracking.** Calls cannot be attributed to campaigns until a provider and tracking
  numbers exist.
- **No CRM connection.** Reporting stops at the lead (calls, forms, cost per lead).

## Known limitations

- Client side rendering means scrapers that do not execute JavaScript still see the homepage
  tags. The same limitation applies to every route on this site (see `docs/seo-metadata.md`).
- No browser was available in the build environment, so layout was reviewed from the rendered
  markup and CSS, not from screenshots.
- A live Web3Forms submission was not performed. The submission path is code tested with a mocked
  transport only.
- No HVAC-specific evidence exists anywhere in this repository. The page says so in three places
  rather than borrowing credibility from unrelated accounts.
- The "5+ years" claim comes from `src/data/personalData.js`, which states "5+ years" of hands on
  experience. It is not an HVAC-specific tenure and the page does not present it as one.
- Certification names come from `src/data/certificationsData.js` (Google, Meta, HubSpot, Coursera,
  SEMrush, Simplilearn). Only Google and Meta credentials are surfaced on this page, because those
  are the two relevant to the service.
