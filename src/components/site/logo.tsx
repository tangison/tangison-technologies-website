'use client';

import Image from "next/image";
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
  sm: { width: 96, height: 24 },
  md: { width: 140, height: 35 },
  lg: { width: 180, height: 45 },
};

export function Logo({ linked = true, size = "md", className = "" }: LogoProps) {
  const dims = sizeMap[size];
  const alt = `${SITE.name} logo`;

  const img = (
    <Image
      src="/tangison-logo.png"
      alt={alt}
      width={dims.width}
      height={dims.height}
      priority={size === "lg"}
      sizes={`${dims.width}px`}
      className={`h-auto w-auto ${className}`}
      style={{ maxWidth: dims.width, maxHeight: dims.height }}
    />
  );

  if (!linked) return img;

  return (
    <Link href="/" aria-label={`${SITE.name} — homepage`} className="inline-block">
      {img}
    </Link>
  );
}
