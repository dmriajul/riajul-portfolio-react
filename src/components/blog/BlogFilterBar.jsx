import { Link } from "react-router-dom";

/**
 * Category / topic filter.
 *
 * Filtering is done through the query string (?category=…&topic=…) rather
 * than separate path routes, so there is exactly one indexable listing URL
 * (/blog/). Empty category archives would otherwise be thin duplicates of
 * the index that compete with it.
 *
 * The chips are real links: they work without JavaScript, they are
 * keyboard reachable, and the current state is exposed with aria-current.
 */
export default function BlogFilterBar({
  categories,
  counts,
  topicCounts,
  activeCategory,
  activeTopic,
  total,
}) {
  return (
    <div className="blog-filter">
      <div className="blog-filter-group">
        <span className="blog-filter-label" id="blog-filter-category-label">
          Category
        </span>

        <div
          className="blog-filter-chips"
          role="group"
          aria-labelledby="blog-filter-category-label"
        >
          <Link
            to="/blog/"
            className={`blog-chip${!activeCategory ? " is-active" : ""}`}
            aria-current={!activeCategory ? "true" : undefined}
          >
            All articles
            <span className="blog-chip-count">{total}</span>
          </Link>

          {categories.map((category) => {
            const isActive = activeCategory === category.slug;
            const count = counts[category.id] || 0;

            return (
              <Link
                key={category.id}
                to={`/blog/?category=${category.slug}`}
                className={`blog-chip${isActive ? " is-active" : ""}${
                  count === 0 ? " is-empty" : ""
                }`}
                aria-current={isActive ? "true" : undefined}
              >
                {category.name}
                <span className="blog-chip-count">{count}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {activeCategory && activeCategory.topics.length > 0 && (
        <div className="blog-filter-group is-topics">
          <span className="blog-filter-label" id="blog-filter-topic-label">
            Topic
          </span>

          <div
            className="blog-filter-chips"
            role="group"
            aria-labelledby="blog-filter-topic-label"
          >
            <Link
              to={`/blog/?category=${activeCategory.slug}`}
              className={`blog-chip is-subtle${!activeTopic ? " is-active" : ""}`}
              aria-current={!activeTopic ? "true" : undefined}
            >
              All {activeCategory.name}
            </Link>

            {activeCategory.topics.map((topic) => {
              const isActive = activeTopic === topic.id;
              const count = topicCounts?.[topic.id] || 0;

              return (
                <Link
                  key={topic.id}
                  to={`/blog/?category=${activeCategory.slug}&topic=${topic.id}`}
                  className={`blog-chip is-subtle${isActive ? " is-active" : ""}${
                    count === 0 ? " is-empty" : ""
                  }`}
                  aria-current={isActive ? "true" : undefined}
                >
                  {topic.name}
                  <span className="blog-chip-count">{count}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
