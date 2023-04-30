/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
});

module.exports = withPWA({
  disable: process.env.NODE_ENV === "development",
});
