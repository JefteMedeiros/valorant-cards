/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["media.valorant-api.com", "img.icons8.com"]
  }
};

module.exports = nextConfig;
