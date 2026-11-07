import { Link } from "react-router-dom";
import { FaArrowRight, FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
import InlineText from "./InlineText";
import { formatPostDate, getReadingTime } from "../../lib/blogUtils";
import { getPostTaxonomy } from "../../data/blogPosts";

/**
 * One article card. Everything shown comes from the article object — the
 * component never invents a date, an author, an image or a category.
 */
export default function BlogCard({ post, headingLevel = 3 }) {
  const { category } = getPostTaxonomy(post);
  const reading = getReadingTime(post.body);
  const date = formatPostDate(post.publishedAt);
  const url = `/blog/${post.slug}`;
  const Heading = `h${headingLevel}`;

  return (
    <article className="blog-card">
      <div className="blog-card-media">
        {post.featuredImage?.src ? (
          <img
            src={post.featuredImage.src}
            alt={post.featuredImage.alt || ""}
            width={post.featuredImage.width || undefined}
            height={post.featuredImage.height || undefined}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="blog-card-media-fallback" aria-hidden="true">
            <span className="blog-card-media-mark">B</span>
            <span className="blog-card-media-label">
              {category ? category.name : "Article"}
            </span>
          </div>
        )}

        {post.status !== "published" && (
          <span className="blog-card-draft-badge">Draft preview</span>
        )}
      </div>

      <div className="blog-card-body">
        {category && (
          <Link to={`/blog/?category=${category.slug}`} className="blog-card-category">
            {category.name}
          </Link>
        )}

        <Heading className="blog-card-title">
          <Link to={url}>{post.title}</Link>
        </Heading>

        <p className="blog-card-excerpt">
          <InlineText text={post.excerpt} />
        </p>

        <div className="blog-card-meta">
          {date && (
            <span className="blog-card-meta-item">
              <FaRegCalendarAlt aria-hidden="true" />
              <time dateTime={post.publishedAt}>{date}</time>
            </span>
          )}

          {reading.label && (
            <span className="blog-card-meta-item">
              <FaRegClock aria-hidden="true" />
              {reading.label}
            </span>
          )}
        </div>

        <Link to={url} className="blog-card-link" aria-label={`Read: ${post.title}`}>
          Read article <FaArrowRight aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
