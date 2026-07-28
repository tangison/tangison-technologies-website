import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono-family",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: SITE.name,
    template: `%s — ${SITE.name}`,
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/tangison-shipwreck-icon.svg", type: "image/svg+xml" },
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
        alt: "Tangison Technologies — Operational intelligence without assumptions.",
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
        className={`${inter.variable} ${geistMono.variable} antialiased`}
        style={{ fontFamily: "var(--font-body)" }}
      >
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
