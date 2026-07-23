import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  reactStrictMode: true,

  images: {
    formats: ["image/avif", "image/webp"],
  },

  allowedDevOrigins: [
    "192.168.0.106",
  ],
};

export default nextConfig;