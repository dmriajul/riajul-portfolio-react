import { Link } from "react-router-dom";

/**
 * Minimal, safe inline formatter for article body text.
 *
 * Supported syntax (nothing else is interpreted, and raw HTML is never
 * accepted anywhere in the content model):
 *   [label](/internal-path)   → client-side <Link>
 *   [label](https://...)      → external <a> with rel="noopener noreferrer"
 *   **bold**                  → <strong>
 *   `code`                    → <code> (used for campaign names)
 */
// Source string, not a shared RegExp object: `exec` mutates `lastIndex`, and
// a module-level regex would carry that state between renders.
const INLINE_SOURCE =
  "\\[([^\\]]+)\\]\\(([^)\\s]+)\\)|\\*\\*([^*]+)\\*\\*|`([^`]+)`";

function isInternal(href) {
  return href.startsWith("/") || href.startsWith("#");
}

export default function InlineText({ text, linkClassName }) {
  if (!text) return null;

  const source = String(text);
  const pattern = new RegExp(INLINE_SOURCE, "g");
  const nodes = [];
  let cursor = 0;
  let match;
  let key = 0;

  while ((match = pattern.exec(source)) !== null) {
    if (match.index > cursor) {
      nodes.push(source.slice(cursor, match.index));
    }

    const [, label, href, bold, code] = match;

    if (href !== undefined) {
      if (isInternal(href)) {
        nodes.push(
          <Link key={`l${key++}`} to={href} className={linkClassName}>
            {label}
          </Link>
        );
      } else {
        nodes.push(
          <a
            key={`l${key++}`}
            href={href}
            className={linkClassName}
            target="_blank"
            rel="noopener noreferrer"
          >
            {label}
          </a>
        );
      }
    } else if (bold !== undefined) {
      nodes.push(<strong key={`b${key++}`}>{bold}</strong>);
    } else {
      nodes.push(<code key={`c${key++}`}>{code}</code>);
    }

    cursor = pattern.lastIndex;
  }

  if (cursor < source.length) nodes.push(source.slice(cursor));

  return <>{nodes}</>;
}
