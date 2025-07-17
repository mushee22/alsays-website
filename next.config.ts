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

    ],
  }
};

export default nextConfig;
