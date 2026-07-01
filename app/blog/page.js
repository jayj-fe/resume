import { BlogList } from "@/components/blog-list";
import { BlogSidebar } from "@/components/blog-sidebar";
import { getCategories, getPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog",
};

export const revalidate = 3600;

export default async function BlogPage({ searchParams }) {
  const selectedCategory = searchParams?.category;
  const allPosts = await getPosts();
  const posts = allPosts.filter((post) =>
    selectedCategory ? post.categories.includes(selectedCategory) : true,
  );
  const categories = getCategories(allPosts);

  return (
    <section className="blog-shell">
      <BlogSidebar
        categories={categories}
        postCount={allPosts.length}
        selectedCategory={selectedCategory}
      />

      <BlogList posts={posts} selectedCategory={selectedCategory} />
    </section>
  );
}
