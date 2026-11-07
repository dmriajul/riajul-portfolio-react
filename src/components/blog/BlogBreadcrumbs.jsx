import { Fragment } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

/**
 * Visible breadcrumb trail. The matching BreadcrumbList JSON-LD is emitted
 * by the page so the two always describe the same path.
 *
 * @param {{items: Array<{name: string, url?: string}>, backTo?: string, backLabel?: string}} props
 */
export default function BlogBreadcrumbs({ items, backTo, backLabel }) {
  const trail = Array.isArray(items) ? items : [];

  return (
    <section className="service-breadcrumb-bar blog-breadcrumb-bar">
      <div className="container breadcrumb-container">
        <nav className="breadcrumb-links" aria-label="Breadcrumb">
          {trail.map((item, index) => {
            const isLast = index === trail.length - 1;

            return (
              <Fragment key={`${item.name}-${index}`}>
                {index > 0 && (
                  <span className="breadcrumb-separator" aria-hidden="true">
                    /
                  </span>
                )}

                {isLast ? (
                  <span className="breadcrumb-current" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link to={item.url || "/"}>{item.name}</Link>
                )}
              </Fragment>
            );
          })}
        </nav>

        {backTo && (
          <Link to={backTo} className="back-to-services-btn">
            <FaArrowLeft aria-hidden="true" /> {backLabel || "Back to Blog"}
          </Link>
        )}
      </div>
    </section>
  );
}
