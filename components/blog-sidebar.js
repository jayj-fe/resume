import Link from "next/link";

export function BlogSidebar({ categories, postCount, selectedCategory }) {
  return (
    <aside className="blog-sidebar" aria-labelledby="blog-sidebar-title">
      <h2 id="blog-sidebar-title" className="blog-sidebar__title">
        Categories
      </h2>
      <ul className="blog-sidebar__list">
        <li>
          <Link
            href="/blog"
            className={`blog-sidebar__link ${!selectedCategory ? "is-active" : ""}`}
          >
            # all <span>({postCount})</span>
          </Link>
        </li>
        {categories.map((category) => (
          <li key={category.name}>
            <Link
              href={`/blog?category=${encodeURIComponent(category.name)}`}
              className={`blog-sidebar__link ${
                selectedCategory === category.name ? "is-active" : ""
              }`}
            >
              # {category.name} <span>({category.count})</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
