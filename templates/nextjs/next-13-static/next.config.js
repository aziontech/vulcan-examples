/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  distDir: "other",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
