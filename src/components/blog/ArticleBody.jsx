import { Link } from "react-router-dom";
import { FaExclamationTriangle, FaInfoCircle } from "react-icons/fa";
import InlineText from "./InlineText";
import { buildHeadingIds } from "../../lib/blogUtils";

/**
 * Renders the article body from the structured block list.
 *
 * The content model accepts data, never HTML, so an article cannot inject
 * markup and a typo cannot break the page. Heading ids come from the same
 * helper that builds the table of contents.
 */
export default function ArticleBody({ blocks }) {
  if (!Array.isArray(blocks) || blocks.length === 0) return null;

  const headingIds = buildHeadingIds(blocks);

  return (
    <div className="article-body">
      {blocks.map((block, index) => {
        if (!block || !block.type) return null;

        const key = `block-${index}`;

        switch (block.type) {
          case "h2":
            return (
              <h2 key={key} id={headingIds[index] || undefined} className="article-h2">
                {block.text}
              </h2>
            );

          case "h3":
            return (
              <h3 key={key} id={headingIds[index] || undefined} className="article-h3">
                {block.text}
              </h3>
            );

          case "p":
            return (
              <p key={key} className="article-p">
                <InlineText text={block.text} />
              </p>
            );

          case "ul":
            return (
              <ul key={key} className="article-list">
                {(block.items || []).map((item, itemIndex) => (
                  <li key={`${key}-${itemIndex}`}>
                    <InlineText text={item} />
                  </li>
                ))}
              </ul>
            );

          case "ol":
            return (
              <ol key={key} className="article-list is-ordered">
                {(block.items || []).map((item, itemIndex) => (
                  <li key={`${key}-${itemIndex}`}>
                    <InlineText text={item} />
                  </li>
                ))}
              </ol>
            );

          case "blockquote":
            return (
              <blockquote key={key} className="article-quote">
                <p>
                  <InlineText text={block.text} />
                </p>
                {block.cite && <cite>{block.cite}</cite>}
              </blockquote>
            );

          case "callout": {
            const isWarning = block.variant === "warning";
            const Icon = isWarning ? FaExclamationTriangle : FaInfoCircle;

            return (
              <aside
                key={key}
                className={`article-callout${isWarning ? " is-warning" : " is-note"}`}
              >
                <span className="article-callout-icon" aria-hidden="true">
                  <Icon />
                </span>
                <div>
                  {block.title && (
                    <p className="article-callout-title">{block.title}</p>
                  )}
                  <p className="article-callout-text">
                    <InlineText text={block.text} />
                  </p>
                </div>
              </aside>
            );
          }

          case "figure":
            return (
              <figure key={key} className="article-figure">
                <img
                  src={block.src}
                  alt={block.alt || ""}
                  loading="lazy"
                  decoding="async"
                />
                {block.caption && <figcaption>{block.caption}</figcaption>}
              </figure>
            );

          case "cta":
            return (
              <aside key={key} className="article-cta">
                {block.heading && <p className="article-cta-heading">{block.heading}</p>}
                {block.text && (
                  <p className="article-cta-text">
                    <InlineText text={block.text} />
                  </p>
                )}
                {block.label && (
                  <Link to={block.href || "/#contact"} className="btn-primary">
                    {block.label}
                  </Link>
                )}
              </aside>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
