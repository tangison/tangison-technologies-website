import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  images: {
    formats: ["image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      // Obsolete Agent product routes → corporate equivalents
      { source: "/features", destination: "/technology", permanent: true },
      { source: "/use-cases", destination: "/technology", permanent: true },
      { source: "/pricing", destination: "/technology", permanent: true },
      { source: "/docs", destination: "/technology", permanent: true },
      { source: "/faq", destination: "/technology", permanent: true },
      { source: "/blog", destination: "/company", permanent: true },
      { source: "/about", destination: "/company", permanent: true },
      { source: "/cookies", destination: "/privacy", permanent: true },
    ];
  },
};

export default nextConfig;
