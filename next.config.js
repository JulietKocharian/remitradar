/** @type {import('next').NextConfig} */
const path = require("path");
const { i18n } = require("./next-i18next.config");
const withPWA = require("next-pwa");

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  i18n,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Ignore fs module on client-side
      config.resolve.fallback = {
        fs: false,
      };
    }
    config.module.exprContextCritical = false;
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "css")],
  },
  trailingSlash: true,
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
