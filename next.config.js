/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  images: {
    domains: ["media.valorant-api.com"]
  }
};

module.exports = nextConfig;
