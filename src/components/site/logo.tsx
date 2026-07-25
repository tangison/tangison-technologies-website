'use client';

import Link from "next/link";
import { SITE } from "@/lib/site";

interface LogoProps {
  /** Render as a link to the homepage (default true) */
  linked?: boolean;
  /** Visual size variant */
  size?: "sm" | "md" | "lg";
  /** Additional class names */
  className?: string;
}

const sizeMap = {
  sm: "h-6",
  md: "h-9",
  lg: "h-12",
};

export function Logo({ linked = true, size = "md", className = "" }: LogoProps) {
  const heightClass = sizeMap[size];
  const alt = `${SITE.name} logo`;

  const img = (
    <img
      src="/tangison-logo.svg"
      alt={alt}
      className={`${heightClass} w-auto ${className}`}
      style={{ maxHeight: size === "sm" ? 24 : size === "md" ? 36 : 48 }}
    />
  );

  if (!linked) return img;

  return (
    <Link href="/" aria-label={`${SITE.name} — homepage`} className="inline-block">
      {img}
    </Link>
  );
}
