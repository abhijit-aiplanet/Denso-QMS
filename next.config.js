/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  // Optimize for Vercel deployment
  output: 'standalone',
  poweredByHeader: false,
  compress: true,
};

module.exports = nextConfig;

