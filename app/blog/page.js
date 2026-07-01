import Link from "next/link";
import { CalendarDays, Tag } from "lucide-react";
import { getCategories, getPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog",
};

export default function BlogPage({ searchParams }) {
  const selectedCategory = searchParams?.category;
  const posts = getPosts().filter((post) =>
    selectedCategory ? post.categories.includes(selectedCategory) : true,
  );
  const categories = getCategories();

  return (
    <section className="mx-auto grid w-full max-w-6xl gap-10 px-5 pb-20 pt-12 sm:px-8 lg:grid-cols-[1fr_260px] lg:pt-16">
      <div>
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-moss dark:text-[#9bbf95]">
            Blog
          </p>
          <h1 className="mt-3 text-4xl font-black text-ink dark:text-white">
            기록과 실험
          </h1>
        </div>
        <div className="space-y-5">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="rounded-lg border border-line bg-white p-6 transition hover:border-moss dark:border-slate-800 dark:bg-slate-900 dark:hover:border-[#9bbf95]"
            >
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
              <Link href={`/blog/${post.slug}`} className="group mt-4 block">
                <h2 className="text-2xl font-black text-ink transition group-hover:text-moss dark:text-white dark:group-hover:text-[#9bbf95]">
                  {post.title}
                </h2>
                <p className="mt-3 leading-7 text-slate-700 dark:text-slate-300">
                  {post.excerpt}
                </p>
              </Link>
              <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
                <CalendarDays size={15} aria-hidden />
                {post.date}
              </p>
            </article>
          ))}
        </div>
      </div>

      <aside className="h-fit rounded-lg border border-line bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-sm font-black uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
          Categories
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href="/blog"
            className="rounded-md border border-line px-3 py-2 text-sm font-bold text-slate-700 transition hover:border-moss hover:text-moss dark:border-slate-700 dark:text-slate-200 dark:hover:border-[#9bbf95] dark:hover:text-[#9bbf95]"
          >
            all
          </Link>
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/blog?category=${category.name}`}
              className="rounded-md border border-line px-3 py-2 text-sm font-bold text-slate-700 transition hover:border-moss hover:text-moss dark:border-slate-700 dark:text-slate-200 dark:hover:border-[#9bbf95] dark:hover:text-[#9bbf95]"
            >
              {category.name} ({category.count})
            </Link>
          ))}
        </div>
      </aside>
    </section>
  );
}
