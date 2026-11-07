import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle, FaInfoCircle } from "react-icons/fa";
import InlineText from "./InlineText";
import { buildHeadingIds } from "../../lib/blogUtils";

const HEADING_TYPES = new Set(["h2", "h3"]);

/**
 * One non-heading block. Shared by the article flow and by the blocks that
 * sit inside an FAQ answer, so both render through exactly the same markup.
 */
function ContentBlock({ block, id }) {
  switch (block.type) {
    case "p":
      return (
        <p className="article-p" id={id || undefined}>
          <InlineText text={block.text} />
        </p>
      );

    case "ul":
      return (
        <ul className="article-list">
          {(block.items || []).map((item, index) => (
            <li key={index}>
              <InlineText text={item} />
            </li>
          ))}
        </ul>
      );

    case "ol":
      return (
        <ol className="article-list is-ordered">
          {(block.items || []).map((item, index) => (
            <li key={index}>
              <InlineText text={item} />
            </li>
          ))}
        </ol>
      );

    case "blockquote":
      return (
        <blockquote className="article-quote">
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
        <aside className={`article-callout${isWarning ? " is-warning" : " is-note"}`}>
          <span className="article-callout-icon" aria-hidden="true">
            <Icon />
          </span>
          <div>
            {block.title && <p className="article-callout-title">{block.title}</p>}
            <p className="article-callout-text">
              <InlineText text={block.text} />
            </p>
          </div>
        </aside>
      );
    }

    case "table": {
      const head = block.head || [];
      const rows = block.rows || [];
      if (head.length === 0 && rows.length === 0) return null;

      return (
        <figure className="article-table-figure">
          {/* Scrollable on narrow screens so a 3-column table never forces
              the whole page to scroll sideways. */}
          <div
            className="article-table-scroll"
            tabIndex={0}
            role="group"
            aria-label="Scrollable table"
          >
            <table className="article-table">
              {head.length > 0 && (
                <thead>
                  <tr>
                    {head.map((cell, index) => (
                      <th key={`h-${index}`} scope="col">
                        <InlineText text={cell} />
                      </th>
                    ))}
                  </tr>
                </thead>
              )}
              <tbody>
                {rows.map((row, rowIndex) => (
                  <tr key={`r-${rowIndex}`}>
                    {row.map((cell, cellIndex) => {
                      // First cell of each row is the row header: it names the
                      // line item, so pairing is announced correctly instead
                      // of reading as loose cells.
                      if (cellIndex === 0) {
                        return (
                          <th key={`r-${rowIndex}-${cellIndex}`} scope="row">
                            <InlineText text={cell} />
                          </th>
                        );
                      }
                      return (
                        <td key={`r-${rowIndex}-${cellIndex}`}>
                          <InlineText text={cell} />
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.caption && (
            <figcaption className="article-table-caption">{block.caption}</figcaption>
          )}
        </figure>
      );
    }

    case "figure":
      return (
        <figure className="article-figure">
          <img
            src={block.src}
            alt={block.alt || ""}
            width={block.width || undefined}
            height={block.height || undefined}
            loading="lazy"
            decoding="async"
          />
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      );

    case "cta":
      return (
        <aside className="article-cta">
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
}

/**
 * One FAQ entry.
 *
 * Built on <details>/<summary> rather than a JavaScript accordion: the answer
 * is in the HTML whether the item is open or closed (so it stays crawlable
 * and works with JS disabled), multiple answers can be open at once, and the
 * browser supplies the expanded/collapsed state to assistive technology. The
 * question stays a real <h3> so the document outline and the anchor ids are
 * unchanged.
 */
function FaqItem({ id, question, answer }) {
  return (
    <details className="article-faq-item">
      <summary className="article-faq-summary">
        <h3 className="article-faq-question" id={id || undefined}>
          {question}
        </h3>
        <span className="article-faq-toggle" aria-hidden="true" />
      </summary>
      <div className="article-faq-answer">
        {answer.map(([blockIndex, block]) => (
          <ContentBlock key={`answer-${blockIndex}`} block={block} />
        ))}
      </div>
    </details>
  );
}

/**
 * Renders the article body from the structured block list.
 *
 * The content model accepts data, never HTML, so an article cannot inject
 * markup and a typo cannot break the page. Heading ids come from the same
 * helper that builds the table of contents.
 */
export default function ArticleBody({ blocks }) {
  // A link straight to a question (a shared anchor, a search result) should
  // show the answer, not just the collapsed row.
  useEffect(() => {
    const openFromHash = () => {
      const id = window.location.hash.replace(/^#/, "");
      if (!id) return;

      const target = document.getElementById(decodeURIComponent(id));
      const item = target?.closest("details.article-faq-item");
      if (item) item.open = true;
    };

    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, [blocks]);

  if (!Array.isArray(blocks) || blocks.length === 0) return null;

  const headingIds = buildHeadingIds(blocks);
  const nodes = [];

  for (let index = 0; index < blocks.length; index += 1) {
    const block = blocks[index];
    if (!block || !block.type) continue;

    if (block.type === "h2") {
      nodes.push(
        <h2 key={`block-${index}`} id={headingIds[index] || undefined} className="article-h2">
          {block.text}
        </h2>
      );
      continue;
    }

    if (block.type === "h3") {
      // `faq: true` marks a question heading. The question and every block
      // that follows it, up to the next heading, become one accordion entry.
      if (block.faq) {
        const answer = [];
        let next = index + 1;
        while (next < blocks.length && blocks[next] && !HEADING_TYPES.has(blocks[next].type)) {
          answer.push([next, blocks[next]]);
          next += 1;
        }

        nodes.push(
          <FaqItem
            key={`faq-${index}`}
            id={headingIds[index]}
            question={block.text}
            answer={answer}
          />
        );

        index = next - 1;
        continue;
      }

      nodes.push(
        <h3 key={`block-${index}`} id={headingIds[index] || undefined} className="article-h3">
          {block.text}
        </h3>
      );
      continue;
    }

    nodes.push(<ContentBlock key={`block-${index}`} block={block} />);
  }

  return <div className="article-body">{nodes}</div>;
}
