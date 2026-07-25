import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
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
      // Redirect bare tangison.com → www
      // This is handled at Vercel/domain level, not here
    ];
  },
};

export default nextConfig;
