/**
 * ==========================================================
 * DRAFT / TEST FIXTURE — NEVER PUBLISHED
 * ==========================================================
 *
 * This is the test fixture the blog infrastructure was specified to
 * exercise: a full article object that renders through the real article
 * template, with a table of contents, related-article slot, breadcrumbs
 * and metadata — while remaining impossible to publish by accident.
 *
 * Guarantees enforced by the build (see scripts/prerender.mjs):
 *   - never rendered on /blog/ (only visible when the draft-preview flag
 *     below is on, which production never sets);
 *   - never prerendered to an HTML file, so /blog/<slug> falls through to
 *     the blog 404 page in production;
 *   - never written to sitemap.xml (the build fails if it ever is);
 *   - renders with <meta name="robots" content="noindex, follow">.
 *
 * The copy is deliberately self-describing. It is not an article and it
 * makes no claim about HVAC marketing.
 */

export const draftPosts = [
  {
    slug: "draft-fixture-template-test",
    title: "Draft Fixture: Article Template Test",
    excerpt:
      "Non-published test fixture used to exercise the article template, table of contents, breadcrumbs and metadata. This is not an article and must never be published.",
    category: "hvac-google-ads",
    topic: "campaign-structure",
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
];

export default draftPosts;
