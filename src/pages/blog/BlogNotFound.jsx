import { Link } from "react-router-dom";
import { FaRegCompass } from "react-icons/fa";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import BlogBreadcrumbs from "../../components/blog/BlogBreadcrumbs";
import JsonLd from "../../components/blog/JsonLd";
import useSeo from "../../hooks/useSeo";
import {
  BLOG_NOT_FOUND_META,
  blogBreadcrumbTrail,
  buildBreadcrumbJsonLd,
} from "../../lib/blogSeo";
import { blogCategories } from "../../data/blogCategories";

/**
 * Unknown /blog/* URL.
 *
 * Rendered for an unknown article slug, a nested unknown path, and any
 * draft viewed in a production build. It is noindex, carries no canonical
 * (so it never advertises another URL), and is deliberately NOT the
 * homepage — a missing article should read as missing.
 *
 * Hosting note: static hosting returns HTTP 200 for this page. The
 * noindex directive is what keeps it out of the index; see docs/blog.md.
 */
export default function BlogNotFound() {
  useSeo({
    title: BLOG_NOT_FOUND_META.title,
    description: BLOG_NOT_FOUND_META.description,
    canonical: BLOG_NOT_FOUND_META.canonical,
    image: BLOG_NOT_FOUND_META.image,
    noindex: true,
  });

  return (
    <div className="service-detail-page blog-page">
      <Navbar />

      <main id="main-content" className="service-detail-content blog-main">
        <JsonLd data={buildBreadcrumbJsonLd(blogBreadcrumbTrail())} />

        <BlogBreadcrumbs
          items={[
            { name: "Home", url: "/" },
            { name: "Blog", url: "/blog/" },
            { name: "Article not found" },
          ]}
          backTo="/blog/"
          backLabel="Back to Blog"
        />

        <section className="blog-notfound">
          <div className="container">
            <span className="blog-notfound-icon" aria-hidden="true">
              <FaRegCompass />
            </span>

            <h1 className="blog-notfound-title">That article is not here</h1>

            <p className="blog-notfound-text">
              The URL does not match a published article. It may have been
              mistyped, or the article may not be published yet — unpublished
              drafts are never listed or indexed.
            </p>

            <div className="blog-empty-actions">
              <Link to="/blog/" className="btn-primary">
                Browse all articles
              </Link>
              <Link to="/industries/hvac" className="btn-secondary">
                HVAC marketing services
              </Link>
            </div>

            <div className="blog-notfound-categories">
              <p className="blog-notfound-categories-title">Browse by category</p>
              <div className="blog-filter-chips">
                {blogCategories.map((category) => (
                  <Link
                    key={category.id}
                    to={`/blog/?category=${category.slug}`}
                    className="blog-chip"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
