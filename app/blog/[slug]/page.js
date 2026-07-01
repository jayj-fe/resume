import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, CalendarDays, Tag } from "lucide-react";
import { getPostBySlug, getPosts } from "@/lib/posts";

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogDetailPage({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto w-full max-w-3xl px-5 pb-20 pt-12 sm:px-8 lg:pt-16">
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
            <span
              key={category}
              className="inline-flex items-center gap-1 rounded-md bg-[#eef3eb] px-2.5 py-1 text-xs font-bold text-moss dark:bg-slate-800 dark:text-[#9bbf95]"
            >
              <Tag size={12} aria-hidden />
              {category}
            </span>
          ))}
        </div>
        <h1 className="mt-4 text-4xl font-black leading-tight text-ink sm:text-5xl dark:text-white">
          {post.title}
        </h1>
        <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
          <CalendarDays size={15} aria-hidden />
          {post.date}
        </p>
      </header>
      <div className="prose-post mt-8">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
}
