/**
 * Emits one JSON-LD block.
 *
 * `<` is escaped so an article title containing "</script>" can never
 * break out of the tag. Each page emits exactly one structured-data block
 * per entity type — no duplicates, no competing declarations.
 */
export default function JsonLd({ data }) {
  if (!data) return null;

  const json = JSON.stringify(data).replace(/</g, "\\u003c");

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
