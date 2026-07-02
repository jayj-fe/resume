import type { Metadata } from "next";
import { BlogPageClient } from "@/components/blog-page-client";
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

export default async function BlogPage() {
  const allPosts = await getPosts();
  const categories = getCategories(allPosts);

  return <BlogPageClient allPosts={allPosts} categories={categories} />;
}
