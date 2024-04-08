/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],
  images: {
    domains: ['https://lh3.googleusercontent.com/'],
  },
  output: 'standalone',
}

module.exports = nextConfig
