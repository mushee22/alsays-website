import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "typical-flowers-bbdf03b521.media.strapiapp.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "148.230.104.91",
        port: "1337",
        pathname: '/uploads/**',
      },
      {
        protocol: "https",
        hostname: "strapi.alsaistrading.com",
        port: "",
        pathname: "/uploads/**",
      }
    ],
  }
};

export default nextConfig;
