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

1. Breadcrumb (Home / Residential HVAC Marketing)
2. Hero: H1, positioning, two CTAs, tertiary WhatsApp text link, four stat cards
3. What this service covers, plus "who this is for" and "who this is not a fit for"
4. Six capability cards
5. How Google Ads works for an HVAC account (6 points)
6. How Meta Ads fits into HVAC marketing (5 points)
7. Tracking and measurement scope (included / needs tools / unverifiable), with a disclaimer callout
8. Landing pages and conversion optimization (6 points)
9. Four step process
10. Six deliverables
11. How performance is measured, and where the numbers stop
12. Who you would be working with, with the "no HVAC case study yet" statement and a last updated date
13. HVAC inquiry form (secondary CTA), with Calendly offered first
14. FAQ (8 questions, answers always present in the DOM)
15. Related services strip
16. Final CTA: Calendly, inquiry form link, WhatsApp, then email and location

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
- `FAQPage` mirroring the eight visible questions.

The FAQ answers stay in the DOM while collapsed (animated height, not unmounted) so the full text
is readable by crawlers and answer engines without a click.

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
