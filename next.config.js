/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  reactStrictMode: false,
  experimental: {
    styledComponents: true,
  },
  images: {
    domains: ["media.valorant-api.com"]
  }
};

module.exports = nextConfig;
