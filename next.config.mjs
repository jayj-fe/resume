/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  ...(isGitHubPages
    ? {
        output: "export",
        basePath: "/resume",
        assetPrefix: "/resume",
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
