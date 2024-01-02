/** @type {import('next').NextConfig} */
const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: false, //process.env.NODE_ENV === "production" ? false : true,
  workboxOptions: {
    disableDevLogs: true,
  },
  // ... other options you like
});
const nextConfig = {};

module.exports = withPWA(nextConfig);
