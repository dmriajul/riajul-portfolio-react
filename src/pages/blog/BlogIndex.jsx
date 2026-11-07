import { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import BlogBreadcrumbs from "../../components/blog/BlogBreadcrumbs";
import BlogCard from "../../components/blog/BlogCard";
import BlogEmptyState from "../../components/blog/BlogEmptyState";
import BlogFilterBar from "../../components/blog/BlogFilterBar";
import JsonLd from "../../components/blog/JsonLd";
import useSeo from "../../hooks/useSeo";
import { blogCategories, getCategoryBySlug } from "../../data/blogCategories";
// Resolved by vite.config.js: empty module in production builds.
import { draftPosts } from "@blog-drafts";
import { getPublishedPosts, isPublished } from "../../data/blogPosts";
import { DRAFT_PREVIEW_ENABLED } from "../../lib/blogEnv";
import {
  BLOG_INDEX_META,
  blogBreadcrumbTrail,
  buildBlogIndexJsonLd,
  buildBreadcrumbJsonLd,
} from "../../lib/blogSeo";

export default function BlogIndex() {
  const [searchParams] = useSearchParams();

  useSeo({
    title: BLOG_INDEX_META.title,
    description: BLOG_INDEX_META.description,
    canonical: BLOG_INDEX_META.canonical,
    image: BLOG_INDEX_META.image,
  });

  const published = useMemo(() => getPublishedPosts(), []);

  // Drafts can be listed only in an explicitly flagged local build. A
  // production build never sets the flag, so this array is empty there and
  // the prerendered HTML contains no draft.
  const drafts = useMemo(
    () => (DRAFT_PREVIEW_ENABLED ? draftPosts.filter((post) => !isPublished(post)) : []),
    []
  );

  const listing = useMemo(() => [...drafts, ...published], [drafts, published]);

  const categorySlug = searchParams.get("category");
  const topicId = searchParams.get("topic");

  const activeCategory = categorySlug ? getCategoryBySlug(categorySlug) : null;
  const activeTopic =
    activeCategory && topicId
      ? activeCategory.topics.find((topic) => topic.id === topicId) || null
      : null;

  const counts = useMemo(() => {
    const result = {};
    listing.forEach((post) => {
      result[post.category] = (result[post.category] || 0) + 1;
    });
    return result;
  }, [listing]);

  const topicCounts = useMemo(() => {
    const result = {};
    listing
      .filter((post) => !activeCategory || post.category === activeCategory.id)
      .forEach((post) => {
        if (post.topic) result[post.topic] = (result[post.topic] || 0) + 1;
      });
    return result;
  }, [listing, activeCategory]);

  const visible = useMemo(
    () =>
      listing.filter((post) => {
        if (activeCategory && post.category !== activeCategory.id) return false;
        if (activeTopic && post.topic !== activeTopic.id) return false;
        return true;
      }),
    [listing, activeCategory, activeTopic]
  );

  const isFiltered = Boolean(activeCategory || activeTopic);
  const headingForFilter = activeTopic
    ? activeTopic.name
    : activeCategory
      ? activeCategory.name
      : "";

  const intro = activeCategory
    ? activeCategory.summary
    : "Field notes from paid-media and tracking work for US residential HVAC contractors. Articles are organised into three clusters: Google Ads, Meta Ads, and tracking plus conversion optimization. Nothing is listed here until it is published.";

  return (
    <div className="service-detail-page blog-page">
      <Navbar />

      <main id="main-content" className="service-detail-content blog-main">
        <JsonLd data={buildBlogIndexJsonLd(published)} />
        <JsonLd data={buildBreadcrumbJsonLd(blogBreadcrumbTrail())} />

        <BlogBreadcrumbs items={blogBreadcrumbTrail()} backTo="/" backLabel="Back to Home" />

        <section className="blog-index-hero">
          <div className="container">
            <span className="section-tag">Blog</span>

            <h1 className="blog-index-title">
              HVAC Marketing <span className="highlight">Blog</span>
            </h1>

            <p className="blog-index-intro">{intro}</p>

            {DRAFT_PREVIEW_ENABLED && drafts.length > 0 && (
              <p className="blog-draft-notice" role="note">
                Draft preview build — {drafts.length} unpublished fixture
                {drafts.length === 1 ? " is" : "s are"} listed below for local QA
                only. These are excluded from the production listing, the sitemap
                and the prerendered HTML.
              </p>
            )}
          </div>
        </section>

        <section className="blog-index-body">
          <div className="container">
            <BlogFilterBar
              categories={blogCategories}
              counts={counts}
              topicCounts={topicCounts}
              activeCategory={activeCategory}
              activeTopic={activeTopic}
              total={listing.length}
            />

            <p className="blog-result-count" aria-live="polite">
              {visible.length === 0
                ? "No articles to show"
                : `${visible.length} article${visible.length === 1 ? "" : "s"}${
                    isFiltered ? ` in ${headingForFilter}` : ""
                  }`}
            </p>

            {visible.length === 0 ? (
              <BlogEmptyState
                filtered={isFiltered}
                categoryName={headingForFilter}
              />
            ) : (
              <div className="blog-grid">
                {visible.map((post) => (
                  <BlogCard key={post.slug} post={post} headingLevel={2} />
                ))}
              </div>
            )}

            <aside className="blog-index-aside">
              <h2 className="blog-aside-title">Not sure where to start?</h2>
              <p className="blog-aside-text">
                The HVAC marketing page covers how Google Ads, Meta Ads and tracking
                fit together for a residential contractor, including what I need from
                you before recommending a budget.
              </p>
              <Link to="/industries/hvac" className="blog-aside-link">
                HVAC marketing services
              </Link>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
