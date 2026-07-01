import fs from "fs";
import path from "path";

const fallbackPosts = [
  {
    slug: "next-resume-renewal",
    title: "Next.js로 이력서와 블로그 개편하기",
    date: "2026-07-01",
    categories: ["nextjs", "resume"],
    excerpt:
      "Vue 기반 블로그를 Next.js App Router와 Tailwind CSS 기반 포트폴리오로 재구성한 기록입니다.",
    content: `# Next.js로 이력서와 블로그 개편하기

기존 Vue 블로그의 역할을 유지하면서 이력서 홈과 블로그를 분리했습니다.

- 홈 URL은 \`/resume\`
- 블로그 목록은 \`/blog\`
- 상세 페이지는 \`/blog/[slug]\`
- 스타일은 Tailwind CSS와 다크 모드 토큰을 사용합니다.

정적 콘텐츠 중심의 포트폴리오라서 App Router와 파일 기반 데이터 계층을 선택했습니다.`,
  },
  {
    slug: "interactive-workflow",
    title: "인터랙티브 페이지를 만들 때 보는 것들",
    date: "2024-04-16",
    categories: ["interactive", "frontend"],
    excerpt:
      "뉴스 인터랙티브 페이지에서 성능, 읽기 흐름, 모션의 밀도를 함께 맞추는 방법에 대한 메모입니다.",
    content: `# 인터랙티브 페이지를 만들 때 보는 것들

인터랙티브 페이지는 화려한 효과보다 읽는 흐름을 먼저 살피는 편이 좋습니다.

1. 첫 화면에서 주제를 빠르게 이해할 수 있는가
2. 스크롤과 모션이 내용을 방해하지 않는가
3. 이미지, 캔버스, 데이터 로딩이 모바일에서 견딜 수 있는가

구현 도구는 React, Astro, Three.js 등 상황에 따라 달라질 수 있지만 기준은 늘 사용자 경험입니다.`,
  },
  {
    slug: "operation-first-ui",
    title: "운영 가능한 UI를 위한 작은 기준",
    date: "2023-08-02",
    categories: ["ui", "operation"],
    excerpt:
      "운영 사이트와 CMS를 다루며 체감한, 오래 버티는 UI 구조를 위한 기준을 정리했습니다.",
    content: `# 운영 가능한 UI를 위한 작은 기준

운영 가능한 UI는 처음 만들 때보다 고쳐야 할 때 진짜 모습이 드러납니다.

- 상태가 어디에서 바뀌는지 추적 가능해야 합니다.
- 반복되는 화면은 데이터 구조가 먼저 안정적이어야 합니다.
- 컴포넌트는 예외 케이스를 숨기지 않고 받아들여야 합니다.

작은 기준들이 쌓이면 유지보수의 속도가 꽤 달라집니다.`,
  },
];

function normalizePost(post) {
  const rawSlug = post.slug || post.url || post.path || "";
  const slug = rawSlug
    .replace(/^\/?post\//, "")
    .replace(/^\/?blog\/posts\//, "")
    .replace(/\.(md|html|vue)$/i, "")
    .replace(/^\d{4}-\d{2}-\d{2}-/, "");

  return {
    slug,
    title: post.title || "Untitled",
    date: (post.date || "").slice(0, 10),
    categories: post.categories || ["post"],
    excerpt: post.excerpt || post.con || post.description || "",
    content: post.content || "",
  };
}

function readJsonPosts() {
  const candidates = [
    path.join(process.cwd(), "public", "blogAPI", "postlist.json"),
    path.join(process.cwd(), "docs", "blogAPI", "postlist.json"),
  ];

  for (const filePath of candidates) {
    if (!fs.existsSync(filePath)) {
      continue;
    }

    const parsed = JSON.parse(fs.readFileSync(filePath, "utf8"));
    const list = Array.isArray(parsed) ? parsed : parsed.postlist;

    if (Array.isArray(list) && list.length > 0) {
      return list.map(normalizePost);
    }
  }

  return [];
}

export function getPosts() {
  const posts = readJsonPosts();
  const source = posts.length > 0 ? posts : fallbackPosts;

  return source
    .map(normalizePost)
    .filter((post) => post.slug)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  return getPosts().find((post) => post.slug === slug);
}

export function getCategories() {
  const counts = new Map();

  getPosts().forEach((post) => {
    post.categories.forEach((category) => {
      counts.set(category, (counts.get(category) || 0) + 1);
    });
  });

  return Array.from(counts.entries()).map(([name, count]) => ({ name, count }));
}
