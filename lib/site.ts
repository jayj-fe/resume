export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://jayj-fe.github.io/resume";

export function withBasePath(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;

  if (!basePath) {
    return normalized;
  }

  return `${basePath}${normalized}`;
}

export function toCanonicalPath(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;

  if (normalized === "/") {
    return withBasePath("/");
  }

  const hasFileExtension = /\.[a-z0-9]+$/i.test(normalized);

  if (hasFileExtension) {
    return withBasePath(normalized);
  }

  const withSlash = normalized.endsWith("/") ? normalized : `${normalized}/`;
  return withBasePath(withSlash);
}

export function toAbsoluteUrl(path: string) {
  const canonicalPath = toCanonicalPath(path);
  const siteRoot = siteUrl.replace(/\/$/, "");

  if (canonicalPath === `${basePath}/` || canonicalPath === "/") {
    return `${siteRoot}/`;
  }

  return `${siteRoot}${canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`}`;
}
