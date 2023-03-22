/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
};

const withVideos = require("next-videos");

module.exports = nextConfig;
module.exports = withVideos();
