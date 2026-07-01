"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Loader2, Tag } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

const INITIAL_VISIBLE_COUNT = 10;
const LOAD_STEP = 10;

export function BlogList({ posts, selectedCategory }) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
  const sentinelRef = useRef(null);
  const listKey = useMemo(
    () => `${selectedCategory || "all"}:${posts.map((post) => post.slug).join("|")}`,
    [posts, selectedCategory],
  );

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  }, [listKey]);

  useEffect(() => {
    const sentinel = sentinelRef.current;

    if (!sentinel || visibleCount >= posts.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCount((currentCount) =>
            Math.min(currentCount + LOAD_STEP, posts.length),
          );
        }
      },
      {
        rootMargin: "360px 0px",
      },
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
    };
  }, [listKey, posts.length, visibleCount]);

  const visiblePosts = posts.slice(0, visibleCount);
  const hasMore = visibleCount < posts.length;

  return (
    <div className="blog-list">
      <div className="blog-list__items">
        {visiblePosts.map((post) => (
          <article
            key={post.slug}
            className="blog-card"
          >
            <div className="blog-card__inner">
              <Link
                href={`/blog/${post.slug}`}
                className="blog-card__thumbnail"
                aria-label={`${post.title} 상세보기`}
              >
                <Image
                  src={post.img}
                  alt=""
                  fill
                  sizes="(min-width: 640px) 220px, 100vw"
                  className="blog-card__image"
                />
              </Link>

              <div className="blog-card__body">
                <div className="blog-card__categories">
                  {post.categories.map((category) => (
                    <Link
                      key={category}
                      href={`/blog?category=${encodeURIComponent(category)}`}
                      className="blog-card__category"
                    >
                      <Tag size={12} aria-hidden />
                      {category}
                    </Link>
                  ))}
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="blog-card__title"
                >
                  {post.title}
                </Link>
                <time className="blog-card__date" dateTime={post.date}>
                  <CalendarDays size={15} aria-hidden />
                  {post.date}
                </time>
                <p className="blog-card__excerpt">
                  {post.excerpt}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div ref={sentinelRef} className="blog-list__sentinel">
        {hasMore ? (
          <Loader2 className="blog-list__loader" size={22} aria-label="글 더 불러오는 중" />
        ) : (
          <p className="blog-list__end">마지막 글입니다.</p>
        )}
      </div>
    </div>
  );
}
