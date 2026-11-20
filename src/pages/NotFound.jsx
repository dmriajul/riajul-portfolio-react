import { Link } from "react-router-dom";
import { FaRegCompass } from "react-icons/fa";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import useSeo from "../hooks/useSeo";
import { NOT_FOUND_META } from "../lib/notFoundSeo";

/**
 * Site-wide 404.
 *
 * Rendered for any URL that is not a known route. It reuses the classes of
 * BlogNotFound (.blog-notfound, .blog-notfound-icon, .blog-notfound-title,
 * .blog-notfound-text, .blog-empty-actions) so the page matches the existing
 * design without a single new CSS rule, colour, font or animation.
 *
 * It is deliberately NOT the homepage: a missing page should read as missing.
 * Direct hits are served with HTTP 404 by Vercel from the prerendered
 * dist/404.html; this component covers client-side navigation to a bad URL.
 */
export default function NotFound() {
  useSeo(NOT_FOUND_META);

  return (
    <div className="service-detail-page">
      <Navbar />

      <main id="main-content" className="service-detail-content">
        <section className="blog-notfound">
          <div className="container">
            <span className="blog-notfound-icon" aria-hidden="true">
              <FaRegCompass />
            </span>

            <h1 className="blog-notfound-title">Page Not Found</h1>

            <p className="blog-notfound-text">
              The URL does not match a page on this site. It may have been
              mistyped, or the page may have moved.
            </p>

            <div className="blog-empty-actions">
              <Link to="/" className="btn-primary">
                Back to Home
              </Link>
              <Link to="/industries/hvac" className="btn-secondary">
                HVAC marketing services
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
