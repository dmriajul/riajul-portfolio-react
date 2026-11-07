import { Link } from "react-router-dom";
import { FaPenNib } from "react-icons/fa";

/**
 * Shown when there are no published articles at all, or when a filter
 * matches nothing. It states the situation plainly instead of filling the
 * grid with placeholder cards presented as real articles.
 */
export default function BlogEmptyState({ filtered, categoryName }) {
  if (filtered) {
    return (
      <div className="blog-empty" role="status">
        <span className="blog-empty-icon" aria-hidden="true">
          <FaPenNib />
        </span>
        <h2 className="blog-empty-title">
          No published articles in {categoryName || "this filter"} yet
        </h2>
        <p className="blog-empty-text">
          Articles are added here as they are finished. Nothing is listed before it is
          published, so an empty category stays empty rather than showing drafts.
        </p>
        <div className="blog-empty-actions">
          <Link to="/blog/" className="btn-primary">
            View all articles
          </Link>
          <Link to="/industries/hvac" className="btn-secondary">
            HVAC marketing services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-empty" role="status">
      <span className="blog-empty-icon" aria-hidden="true">
        <FaPenNib />
      </span>
      <h2 className="blog-empty-title">The first articles are being written</h2>
      <p className="blog-empty-text">
        This blog covers three topics for US residential HVAC contractors: Google Ads
        costs and budgets, Meta Ads lead generation, and tracking that connects ad
        spend to booked jobs. Nothing is published here yet — when an article goes
        live it will appear on this page, in the sitemap, and on its own URL.
      </p>
      <div className="blog-empty-actions">
        <Link to="/industries/hvac" className="btn-primary">
          See HVAC marketing services
        </Link>
        <Link to="/#contact" className="btn-secondary">
          Talk about your HVAC ads
        </Link>
      </div>
    </div>
  );
}
