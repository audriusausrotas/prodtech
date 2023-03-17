/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.prismic.io", "prodtech.prismic.io"],
  },
  i18n: {
    locales: ["lt", "en"],
    defaultLocale: "lt",
    localeDetection: false,
  },
};
