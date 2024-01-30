const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_PORT: process.env.NEXT_PUBLIC_API_PORT,
  },
  i18n,
  transpilePackages: ["gsap"],
  poweredByHeader: false,
  experimental: {
    scrollRestoration: false,
  },
};

module.exports = nextConfig;
