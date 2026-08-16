import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import { Analytics } from "@vercel/analytics/next";

/* Satoshi is one of the three elements shared with studio.tangison.com
   (logomark, typeface family, footer structure). Self-hosted so both
   domains resolve to the identical family. */
const satoshi = localFont({
  variable: "--font-satoshi",
  display: "swap",
  src: [
    { path: "../../public/fonts/Satoshi-300.ttf", weight: "300", style: "normal" },
    { path: "../../public/fonts/Satoshi-400.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/Satoshi-500.ttf", weight: "500", style: "normal" },
    { path: "../../public/fonts/Satoshi-700.ttf", weight: "700", style: "normal" },
    { path: "../../public/fonts/Satoshi-900.ttf", weight: "900", style: "normal" },
  ],
});

const geistMono = Geist_Mono({
  variable: "--font-mono-family",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2B6B5E",
};

export const metadata: Metadata = {
  title: {
    default: SITE.name,
    template: `%s: ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "Tangison",
    "operational intelligence",
    "Namibia",
    "without assumptions",
    "AI agent",
    "resilient systems",
    "decision systems",
    "observation systems",
  ],
  authors: [{ name: SITE.owner }],
  creator: SITE.owner,
  publisher: SITE.company,
  metadataBase: new URL(SITE.siteUrl),
  alternates: { canonical: SITE.siteUrl },
  appleWebApp: {
    title: SITE.name,
    statusBarStyle: "default",
    capable: true,
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/tangison-shipwreck-icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: SITE.name,
    description: SITE.description,
    url: SITE.siteUrl,
    siteName: SITE.name,
    locale: "en_NA",
    type: "website",
    images: [
      {
        url: "/images/tangison/webp/02-skeleton-coast-signal-og-1200x630.webp",
        width: 1200,
        height: 630,
        alt: "Tangison Technologies: Operational intelligence without assumptions.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
    images: ["/images/tangison/webp/02-skeleton-coast-signal-og-1200x630.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${satoshi.variable} ${geistMono.variable} antialiased`}
        style={{ fontFamily: "var(--font-body)" }}
      >
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
