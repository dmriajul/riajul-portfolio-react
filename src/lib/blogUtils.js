/**
 * Pure formatting + content helpers for the blog.
 *
 * Everything here is deterministic and environment-independent: no
 * `Date.now()` defaults, no locale-dependent Date formatting, no
 * `window`. The same functions run in the browser bundle and in the
 * Node prerender script, so the static HTML and the hydrated page can
 * never disagree about a date or a reading time.
 */

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/**
 * Formats "YYYY-MM-DD" as "November 7, 2026" without touching Date's
 * timezone handling — a UTC midnight parsed by `new Date()` shifts to the
 * previous day in negative-offset timezones, which would show a different
 * date on the server than in the reader's browser.
 */
export function formatPostDate(isoDate) {
  if (!isoDate || typeof isoDate !== "string") return "";
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoDate);
  if (!match) return isoDate;

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const monthName = MONTHS[month - 1];

  if (!monthName || day < 1 || day > 31) return isoDate;
  return `${monthName} ${day}, ${year}`;
}

/** "2026-11-07" → "2026-11-07T00:00:00.000Z" for JSON-LD and OG tags. */
export function toIsoDateTime(isoDate) {
  if (!isoDate || !/^\d{4}-\d{2}-\d{2}$/.test(isoDate)) return undefined;
  return `${isoDate}T00:00:00.000Z`;
}

/** Stable, URL-safe anchor id from a heading's text. */
export function slugifyHeading(text) {
  return String(text)
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

const WORDS_PER_MINUTE = 220;

/** Visible text of one block, with inline markdown syntax stripped. */
export function blockPlainText(block) {
  if (!block || typeof block !== "object") return "";

  const strip = (value) =>
    String(value)
      .replace(/\[([^\]]+)\]\([^)\s]+\)/g, "$1") // [label](/href) → label
      .replace(/\*\*([^*]+)\*\*/g, "$1"); // **bold** → bold

  switch (block.type) {
    case "h2":
    case "h3":
    case "p":
    case "blockquote":
      return strip(block.text || "");
    case "callout":
      return strip([block.title, block.text].filter(Boolean).join(" "));
    case "ul":
    case "ol":
      return (block.items || []).map(strip).join(" ");
    case "figure":
      return strip(block.caption || "");
    case "cta":
      return strip([block.heading, block.text].filter(Boolean).join(" "));
    default:
      return "";
  }
}

/** Whole-article word count and "X min read" label. */
export function getReadingTime(body) {
  if (!Array.isArray(body)) return { words: 0, minutes: 0, label: "" };

  const words = body
    .map(blockPlainText)
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;

  const minutes = words === 0 ? 0 : Math.max(1, Math.round(words / WORDS_PER_MINUTE));

  return {
    words,
    minutes,
    label: minutes === 0 ? "" : `${minutes} min read`,
  };
}

/**
 * Table of contents from h2/h3 blocks.
 * Duplicate headings get a numeric suffix so anchors stay unique.
 */
export function buildTableOfContents(body) {
  if (!Array.isArray(body)) return [];

  const used = new Map();
  const items = [];

  body.forEach((block) => {
    if (!block || (block.type !== "h2" && block.type !== "h3")) return;

    const text = String(block.text || "").trim();
    if (!text) return;

    const base = slugifyHeading(text) || `section-${items.length + 1}`;
    const seen = used.get(base) || 0;
    used.set(base, seen + 1);
    const id = seen === 0 ? base : `${base}-${seen + 1}`;

    items.push({ id, text, level: block.type === "h2" ? 2 : 3 });
  });

  return items;
}

/** Article heading anchors, keyed by block index, matching the TOC ids. */
export function buildHeadingIds(body) {
  const ids = [];
  const used = new Map();

  (Array.isArray(body) ? body : []).forEach((block) => {
    if (!block || (block.type !== "h2" && block.type !== "h3")) {
      ids.push(null);
      return;
    }
    const base = slugifyHeading(block.text) || `section-${ids.length + 1}`;
    const seen = used.get(base) || 0;
    used.set(base, seen + 1);
    ids.push(seen === 0 ? base : `${base}-${seen + 1}`);
  });

  return ids;
}

export default {
  formatPostDate,
  toIsoDateTime,
  slugifyHeading,
  getReadingTime,
  buildTableOfContents,
  buildHeadingIds,
  blockPlainText,
};
