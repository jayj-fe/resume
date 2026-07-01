import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { ArrowLeft, CalendarDays, Tag } from "lucide-react";
import { BlogSidebar } from "@/components/blog-sidebar";
import { getCategories, getPostBySlug, getPosts } from "@/lib/posts";

export const revalidate = 3600;

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);

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

export default async function BlogDetailPage({ params }) {
  const post = await getPostBySlug(params.slug);
  const posts = await getPosts();
  const categories = getCategories(posts);

  if (!post) {
    notFound();
  }

  return (
    <section className="blog-shell">
      <BlogSidebar categories={categories} postCount={posts.length} />
      <article
        id="post-wrapper"
        className="post-content min-w-0"
      >
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
                href={`/blog?category=${category}`}
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
          <p className="post-content__date mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
            <CalendarDays size={15} aria-hidden />
            {post.date}
          </p>
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
