/**
 * Article table of contents.
 *
 * Built from the article's own h2/h3 blocks by buildTableOfContents(), so
 * the anchors here and the heading ids in ArticleBody come from the same
 * algorithm and cannot drift apart.
 */
export default function TableOfContents({ items }) {
  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <nav className="article-toc" aria-labelledby="article-toc-title">
      <h2 className="article-toc-title" id="article-toc-title">
        On this page
      </h2>

      <ol className="article-toc-list">
        {items.map((item) => (
          <li
            key={item.id}
            className={`article-toc-item${item.level === 3 ? " is-nested" : ""}`}
          >
            <a href={`#${item.id}`}>{item.text}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
