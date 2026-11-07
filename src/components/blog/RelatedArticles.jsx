import BlogCard from "./BlogCard";

/**
 * Related articles. Renders nothing when there are no published
 * relationships — an empty "Related" heading is worse than no section.
 */
export default function RelatedArticles({ posts }) {
  if (!Array.isArray(posts) || posts.length === 0) return null;

  return (
    <section className="blog-related" aria-labelledby="blog-related-title">
      <div className="container">
        <h2 className="blog-section-title" id="blog-related-title">
          Related reading
        </h2>

        <div className="blog-grid">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} headingLevel={3} />
          ))}
        </div>
      </div>
    </section>
  );
}
