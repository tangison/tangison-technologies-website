import Link from "next/link";
import { SITE } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--bg)] px-6 noise-overlay">
      <p className="eyebrow mb-4">404</p>
      <h1 className="display display-md text-[var(--ink)]">
        This page does not exist
      </h1>
      <p className="mt-4 text-[var(--muted-ink)] body-constrained text-center">
        It may have moved or been renamed. Try one of the links below.
      </p>
      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <Link href="/" className="btn-accent">
          Homepage
        </Link>
        <Link href="/capabilities" className="btn-outline">
          Capabilities
        </Link>
        <Link href="/sitemap" className="btn-outline">
          Site map
        </Link>
      </div>
      <p className="mt-8 text-xs text-[var(--muted-ink)]">
        &copy; {new Date().getFullYear()} {SITE.company}, {SITE.location}
      </p>
    </div>
  );
}
