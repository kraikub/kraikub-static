/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false }
    return config;
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
