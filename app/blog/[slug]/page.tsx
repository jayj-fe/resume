import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { ArrowLeft, CalendarDays, Tag } from "lucide-react";
import { BlogSidebar } from "@/components/blog-sidebar";
import { getCategories, getPostBySlug, getPosts } from "@/lib/posts";

export const revalidate = 3600;

interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      tags: post.categories,
      images: post.img
        ? [
            {
              url: post.img,
              alt: post.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.img ? [post.img] : undefined,
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const post = await getPostBySlug(params.slug);
  const posts = await getPosts();
  const categories = getCategories(posts);

  if (!post) {
    notFound();
  }

  return (
    <section className="blog-shell">
      <BlogSidebar categories={categories} postCount={posts.length} />
      <article id="post-wrapper" className="post-content min-w-0">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 transition hover:text-moss dark:text-slate-300 dark:hover:text-[#9bbf95]"
        >
          <ArrowLeft size={16} aria-hidden />
          Blog
        </Link>
        <header className="mt-8 border-b border-line pb-8 dark:border-slate-800">
          <div className="flex flex-wrap gap-2">
            {post.categories.map((category) => (
              <Link
                key={category}
                href={`/blog?category=${encodeURIComponent(category)}`}
                className="inline-flex items-center gap-1 text-xs font-black uppercase text-moss transition hover:text-clay dark:text-[#9bbf95] dark:hover:text-[#e2a08e]"
              >
                <Tag size={12} aria-hidden />
                {category}
              </Link>
            ))}
          </div>
          <h1 className="mt-4 text-4xl font-black leading-tight text-ink sm:text-5xl dark:text-white">
            {post.title}
          </h1>
          <time
            className="post-content__date mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400"
            dateTime={post.date}
          >
            <CalendarDays size={15} aria-hidden />
            {post.date}
          </time>
        </header>
        <div className="prose-post mt-8">
          <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </section>
  );
}
