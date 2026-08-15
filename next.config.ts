import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  poweredByHeader: false,
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
      // Old sitemap-overview route → canonical /sitemap
      { source: "/sitemap-overview", destination: "/sitemap", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; object-src 'none'; upgrade-insecure-requests;",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
        ],
      },
      // NOTE: /_next/static and /_next/image are already served by Next.js
      // with `public, max-age=31536000, immutable`. Overriding them here is
      // both unnecessary and unsupported (Next warns and the :path* repeat
      // pattern fails to compile), so those routes are deliberately absent.
      //
      // Static media in /public is NOT content-hashed, so it gets a short
      // freshness window plus a long stale-while-revalidate tail. This is the
      // header the audit flagged as missing (perf/bad-caching).
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        source: "/fonts/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
