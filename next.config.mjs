/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (isGitHubPages ? "/resume" : "");

const nextConfig = {
  ...(isGitHubPages
    ? {
        output: "export",
        basePath,
        assetPrefix: basePath,
      }
    : {}),
  trailingSlash: true,
  images: {
    unoptimized: isGitHubPages,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jayj-fe.github.io",
        pathname: "/blogAPI/**",
      },
    ],
  },
};

export default nextConfig;
