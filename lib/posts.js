import { cache } from "react";

const BLOG_API_BASE = "https://jayj-fe.github.io/blogAPI";

const fallbackPosts = [
  {
    slug: "next-resume-renewal",
    title: "Next.js로 이력서와 블로그 개편하기",
    date: "2026-07-01",
    categories: ["nextjs", "resume"],
    img: "/favicons/apple-icon-180x180.png",
    excerpt:
      "Vue 기반 블로그를 Next.js App Router와 Tailwind CSS 기반 포트폴리오로 재구성한 기록입니다.",
    content: `# Next.js로 이력서와 블로그 개편하기

기존 Vue 블로그의 역할을 유지하면서 이력서 홈과 블로그를 분리했습니다.

- 홈 URL은 \`/resume\`
- 블로그 목록은 \`/blog\`
- 상세 페이지는 \`/blog/[slug]\`
- 스타일은 Tailwind CSS와 다크 모드 토큰을 사용합니다.`,
  },
];

function stripFrontMatter(content = "") {
  return content.replace(/^---[\s\S]*?---/, "").trim();
}

function stripHtml(content = "") {
  return content
    .replace(/```[\s\S]*?```/g, "")
    .replace(/<[^>]*>/g, " ")
    .replace(/[#>*_`~\-[\]()]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeAssetUrl(url = "") {
  if (!url) {
    return "/favicons/apple-icon-180x180.png";
  }

  if (url.startsWith("http")) {
    return url;
  }

  if (url.startsWith("/blogAPI/")) {
    return `https://jayj-fe.github.io${url}`;
  }

  if (url.startsWith("/assets/")) {
    return `${BLOG_API_BASE}${url}`;
  }

  return url;
}

function normalizeContent(content = "") {
  return stripFrontMatter(content)
    .replaceAll('src="/assets/', `src="${BLOG_API_BASE}/assets/`)
    .replaceAll("src='/assets/", `src='${BLOG_API_BASE}/assets/`)
    .replaceAll("](/assets/", `](${BLOG_API_BASE}/assets/`);
}

function slugFromUrl(url = "") {
  return url
    .replace(/^\/?post\//, "")
    .replace(/^\/?blog\/posts\//, "")
    .replace(/\.(md|html|vue)$/i, "");
}

function normalizePost(post) {
  const slug = post.slug || slugFromUrl(post.url || post.path || "");
  const content = normalizeContent(post.content || post.con || "");
  const excerpt = post.excerpt || post.description || stripHtml(content).slice(0, 150);

  return {
    slug,
    title: post.title || "Untitled",
    date: (post.date || "").slice(0, 10),
    categories: post.categories || ["post"],
    tags: post.tags || [],
    excerpt,
    content,
    img: normalizeAssetUrl(post.img || post.thumbnail),
    url: post.url || (slug ? `/post/${slug}` : ""),
  };
}

async function fetchJson(url) {
  const res = await fetch(url, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}: ${res.status}`);
  }

  return res.json();
}

async function fetchText(url) {
  const res = await fetch(url, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}: ${res.status}`);
  }

  return res.text();
}

export const getPosts = cache(async function getPosts() {
  try {
    const parsed = await fetchJson(`${BLOG_API_BASE}/postlist.json`);
    const list = Array.isArray(parsed) ? parsed : parsed.postlist;

    if (Array.isArray(list) && list.length > 0) {
      return list
        .map(normalizePost)
        .filter((post) => post.slug)
        .sort((a, b) => new Date(b.date) - new Date(a.date));
    }
  } catch (error) {
    console.warn(error);
  }

  return fallbackPosts
    .map(normalizePost)
    .filter((post) => post.slug)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
});

export const getPostBySlug = cache(async function getPostBySlug(slug) {
  const posts = await getPosts();
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return null;
  }

  try {
    const content = await fetchText(`${BLOG_API_BASE}${post.url}`);

    return {
      ...post,
      content: normalizeContent(content),
    };
  } catch (error) {
    console.warn(error);
    return post;
  }
});

export function getCategories(posts) {
  const counts = new Map();

  posts.forEach((post) => {
    post.categories.forEach((category) => {
      counts.set(category, (counts.get(category) || 0) + 1);
    });
  });

  return Array.from(counts.entries()).map(([name, count]) => ({ name, count }));
}
