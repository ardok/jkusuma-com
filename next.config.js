/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  // assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  // https://stackoverflow.com/questions/58784444/nextjs-export-is-broken-no-css-no-js
  // https://nextjs.org/docs/api-reference/next.config.js/cdn-support-with-asset-prefix
  assetPrefix: './',
  // eslint: {
  //   dirs: ['src/**'],
  // },
};

module.exports = nextConfig;
