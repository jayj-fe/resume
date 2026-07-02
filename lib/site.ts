export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jayj-fe.github.io";

export function toCanonicalPath(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;

  if (normalized === "/") {
    return "/";
  }

  const hasFileExtension = /\.[a-z0-9]+$/i.test(normalized);

  if (hasFileExtension) {
    return normalized;
  }

  return normalized.endsWith("/") ? normalized : `${normalized}/`;
}

export function toAbsoluteUrl(path: string) {
  return `${siteUrl}${toCanonicalPath(path)}`;
}
