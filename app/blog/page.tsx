import type { Metadata } from "next";
import { BlogList } from "@/components/blog-list";
import { BlogSidebar } from "@/components/blog-sidebar";
import { getCategories, getPosts } from "@/lib/posts";
import { toCanonicalPath } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Jay.J가 프론트엔드 개발, Next.js, React, 웹 성능과 접근성에 대해 기록하는 기술 블로그입니다.",
  alternates: {
    canonical: toCanonicalPath("/blog"),
  },
  openGraph: {
    title: "Blog | Jay.J",
    description:
      "Jay.J가 프론트엔드 개발, Next.js, React, 웹 성능과 접근성에 대해 기록하는 기술 블로그입니다.",
    url: toCanonicalPath("/blog"),
  },
};

export const revalidate = 3600;

interface BlogPageProps {
  searchParams?: {
    category?: string;
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
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
