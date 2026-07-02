"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { BlogList } from "@/components/blog-list";
import { BlogSidebar } from "@/components/blog-sidebar";
import type { CategoryCount, Post } from "@/lib/types/post";

interface BlogPageClientProps {
  allPosts: Post[];
  categories: CategoryCount[];
}

function BlogPageContent({ allPosts, categories }: BlogPageClientProps) {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category") ?? undefined;
  const posts = allPosts.filter((post) =>
    selectedCategory ? post.categories.includes(selectedCategory) : true,
  );

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

export function BlogPageClient(props: BlogPageClientProps) {
  return (
    <Suspense
      fallback={
        <section className="blog-shell">
          <p className="text-sm font-semibold text-slate-500">블로그를 불러오는 중...</p>
        </section>
      }
    >
      <BlogPageContent {...props} />
    </Suspense>
  );
}
