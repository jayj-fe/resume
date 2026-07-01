/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jayj-fe.github.io",
        pathname: "/blogAPI/**",
      },
    ],
  },
};

module.exports = nextConfig;
