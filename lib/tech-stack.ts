import * as simpleIcons from "simple-icons";

export interface TechBadgeItem {
  key: string;
  label: string;
  slug?: string;
  hex?: string;
  path?: string;
}

interface SimpleIconData {
  title: string;
  slug: string;
  hex: string;
  path: string;
}

const iconsBySlug = new Map<string, SimpleIconData>();

for (const value of Object.values(simpleIcons)) {
  if (!value || typeof value !== "object" || !("slug" in value) || !("path" in value)) {
    continue;
  }

  const icon = value as SimpleIconData;
  iconsBySlug.set(icon.slug, icon);
}

const TECH_SLUG_ALIASES: Record<string, string> = {
  astro: "astro",
  "astro.js": "astro",
  aws: "amazonaws",
  "aws athena": "amazonaws",
  "aws cloudfront": "amazoncloudfront",
  "aws cloudfront(cdn)": "amazoncloudfront",
  "aws ec2": "amazonaws",
  "aws s3": "amazons3",
  cdn: "cloudflare",
  css: "css",
  css3: "css",
  "css modules": "cssmodules",
  "css 애니메이션": "css",
  datadog: "datadog",
  firebase: "firebase",
  ga4: "googleanalytics",
  git: "git",
  github: "github",
  gulp: "gulp",
  gtm: "googletagmanager",
  html5: "html5",
  javascript: "javascript",
  jquery: "jquery",
  "material ui": "mui",
  "material ui(mui)": "mui",
  mui: "mui",
  "next.js": "nextdotjs",
  pm2: "pm2",
  "react-query": "reactquery",
  "react.js": "react",
  react: "react",
  "rest api": "openapiinitiative",
  sass: "sass",
  scss: "sass",
  sql: "mysql",
  tailwind: "tailwindcss",
  "tailwind css": "tailwindcss",
  typescript: "typescript",
  "usecontext": "react",
  vue: "vuedotjs",
  "vue.js": "vuedotjs",
  "vue router": "vuerouter",
  vuex: "vuex",
  webpack: "webpack",
  yarn: "yarn",
  "yarn workspaces": "yarn",
  "yarn workspaces(monorepo)": "yarn",
  zustand: "zustand",
};

const FALLBACK_BADGE_HEX = "4b5563";

function normalizeTechName(name: string) {
  return name.trim().toLowerCase().replace(/\s+/g, " ");
}

export function parseTechStack(tech: string): string[] {
  return tech
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function resolveSlug(name: string) {
  const normalized = normalizeTechName(name);
  return TECH_SLUG_ALIASES[normalized];
}

export function getTechBadgeItem(name: string): TechBadgeItem {
  const label = name.trim();
  const slug = resolveSlug(label);

  if (!slug) {
    return {
      key: label,
      label,
      hex: FALLBACK_BADGE_HEX,
    };
  }

  const icon = iconsBySlug.get(slug);

  if (!icon) {
    return {
      key: label,
      label,
      hex: FALLBACK_BADGE_HEX,
    };
  }

  return {
    key: label,
    label: label || icon.title,
    slug: icon.slug,
    hex: icon.hex,
    path: icon.path,
  };
}

export function getTechBadgeItems(tech: string): TechBadgeItem[] {
  return parseTechStack(tech).map(getTechBadgeItem);
}

export function getBadgeTextColor(hex = FALLBACK_BADGE_HEX) {
  const red = Number.parseInt(hex.slice(0, 2), 16);
  const green = Number.parseInt(hex.slice(2, 4), 16);
  const blue = Number.parseInt(hex.slice(4, 6), 16);
  const luminance = (0.299 * red + 0.587 * green + 0.114 * blue) / 255;

  return luminance > 0.62 ? "#1f2933" : "#ffffff";
}
