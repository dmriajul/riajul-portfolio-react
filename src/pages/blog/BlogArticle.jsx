import { Link, useParams } from "react-router-dom";
import { FaRegCalendarAlt, FaRegClock, FaRegEdit } from "react-icons/fa";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import ArticleBody from "../../components/blog/ArticleBody";
import BlogBreadcrumbs from "../../components/blog/BlogBreadcrumbs";
import JsonLd from "../../components/blog/JsonLd";
import RelatedArticles from "../../components/blog/RelatedArticles";
import TableOfContents from "../../components/blog/TableOfContents";
import useSeo from "../../hooks/useSeo";
// Resolved by vite.config.js: empty module in production builds.
import { draftPosts } from "@blog-drafts";
import {
  getPublishedPostBySlug,
  getPostTaxonomy,
  getRelatedPosts,
  isPublished,
} from "../../data/blogPosts";
import { DRAFT_PREVIEW_ENABLED } from "../../lib/blogEnv";
import {
  BLOG_AUTHOR,
  articleBreadcrumbTrail,
  buildArticleJsonLd,
  buildArticleMeta,
  buildBreadcrumbJsonLd,
} from "../../lib/blogSeo";
import {
  buildTableOfContents,
  formatPostDate,
  getReadingTime,
} from "../../lib/blogUtils";
import BlogNotFound from "./BlogNotFound";

/** The rendered article. Split out so useParams + the early return below
 *  never break the rules of hooks. */
function ArticleView({ post }) {
  const meta = buildArticleMeta(post);
  const { category, topic } = getPostTaxonomy(post);
  const toc = buildTableOfContents(post.body);
  const reading = getReadingTime(post.body);
  const publishedDate = formatPostDate(post.publishedAt);
  const updatedDate = post.updatedAt ? formatPostDate(post.updatedAt) : "";
  const related = getRelatedPosts(post);
  const isDraft = !isPublished(post);

  useSeo({
    title: meta.title,
    description: meta.description,
    canonical: meta.canonical,
    image: meta.image,
    noindex: meta.noindex,
  });

  const trail = articleBreadcrumbTrail(post).map((item, index, all) =>
    index === all.length - 1 ? { name: item.name } : item
  );

  return (
    <div className="service-detail-page blog-page">
      <Navbar />

      <main id="main-content" className="service-detail-content blog-main">
        <JsonLd data={buildArticleJsonLd(post)} />
        <JsonLd data={buildBreadcrumbJsonLd(articleBreadcrumbTrail(post))} />

        <BlogBreadcrumbs items={trail} backTo="/blog/" backLabel="Back to Blog" />

        {isDraft && (
          <div className="container">
            <p className="blog-draft-banner" role="note">
              Draft preview — this article is unpublished. It is set to{" "}
              <code>noindex</code>, is not in the sitemap, and will not be
              prerendered into a public HTML file.
            </p>
          </div>
        )}

        <section className="blog-article-hero">
          <div className="container">
            {category && (
              <Link
                to={`/blog/?category=${category.slug}`}
                className="blog-card-category"
              >
                {category.name}
              </Link>
            )}

            <h1 className="blog-article-title">{post.title}</h1>

            <p className="blog-article-excerpt">{post.excerpt}</p>

            <div className="blog-article-meta">
              <span className="blog-article-author">
                <img
                  src="/profile.webp"
                  alt=""
                  width="36"
                  height="36"
                  loading="lazy"
                  decoding="async"
                />
                <span>
                  <strong>{BLOG_AUTHOR.name}</strong>
                  <em>{BLOG_AUTHOR.role}</em>
                </span>
              </span>

              {publishedDate && (
                <span className="blog-card-meta-item">
                  <FaRegCalendarAlt aria-hidden="true" />
                  <time dateTime={post.publishedAt}>{publishedDate}</time>
                </span>
              )}

              {updatedDate && (
                <span className="blog-card-meta-item">
                  <FaRegEdit aria-hidden="true" />
                  Updated <time dateTime={post.updatedAt}>{updatedDate}</time>
                </span>
              )}

              {reading.label && (
                <span className="blog-card-meta-item">
                  <FaRegClock aria-hidden="true" />
                  {reading.label}
                </span>
              )}

              {topic && <span className="blog-topic-pill">{topic.name}</span>}
            </div>
          </div>
        </section>

        <div className="container article-layout">
          <article className="article-main">
            {post.featuredImage?.src && (
              <figure className="article-featured">
                <img
                  src={post.featuredImage.src}
                  alt={post.featuredImage.alt || ""}
                  width={post.featuredImage.width || undefined}
                  height={post.featuredImage.height || undefined}
                  loading="eager"
                  decoding="async"
                />
                {post.featuredImage.caption && (
                  <figcaption>{post.featuredImage.caption}</figcaption>
                )}
              </figure>
            )}

            <ArticleBody blocks={post.body} />

            <aside className="article-author-box">
              <img
                src="/profile.webp"
                alt=""
                width="56"
                height="56"
                loading="lazy"
                decoding="async"
              />
              <div>
                <p className="article-author-name">{BLOG_AUTHOR.name}</p>
                <p className="article-author-role">{BLOG_AUTHOR.role}</p>
                <p className="article-author-note">
                  Written from hands-on paid media and tracking work. Where a figure
                  cannot be sourced or measured, it is labelled as an estimate rather
                  than presented as a benchmark.
                </p>
                <Link to="/#contact" className="article-author-link">
                  Work with me
                </Link>
              </div>
            </aside>
          </article>

          <aside className="article-sidebar">
            <div className="article-sidebar-inner">
              <TableOfContents items={toc} />

              <div className="article-sidebar-cta">
                <p className="article-sidebar-cta-title">Running HVAC ads now?</p>
                <p className="article-sidebar-cta-text">
                  I can review the account structure and tracking before you change
                  budget.
                </p>
                <Link to="/#contact" className="btn-secondary">
                  Start a conversation
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <RelatedArticles posts={related} />

      <Footer />
    </div>
  );
}

export default function BlogArticle() {
  const { slug } = useParams();

  const published = getPublishedPostBySlug(slug);
  const draft =
    !published && DRAFT_PREVIEW_ENABLED
      ? draftPosts.find((item) => item.slug === slug) || null
      : null;

  const post = published || draft;

  // Unknown slug, or a draft in a production build: real "not found" page
  // with noindex. It is deliberately not the homepage.
  if (!post) return <BlogNotFound />;

  return <ArticleView post={post} />;
}
