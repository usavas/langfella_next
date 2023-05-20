/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
});

module.exports = {
  experimental: {
    serverActions: true,
  },
};

// module.exports = withPWA({
//   disable: process.env.NODE_ENV === "development",
//   register: true,
//   scope: "/app",
//   sw: "service-worker.js",
//  serverActions: true,
// });
