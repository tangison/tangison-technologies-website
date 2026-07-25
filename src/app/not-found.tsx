import Link from "next/link";
import { SITE } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--bg)] px-6">
      <p className="eyebrow mb-4">404</p>
      <h1 className="display-md text-[var(--ink)]">Page not found</h1>
      <p className="mt-4 text-[var(--muted-ink)] body-constrained text-center">
        The page you are looking for does not exist on the Tangison Technologies
        website. It may have been moved or removed.
      </p>
      <div className="mt-6 flex gap-3">
        <Link href="/" className="btn-accent">
          Homepage
        </Link>
        <Link href="/sitemap" className="btn-outline">
          Site map
        </Link>
      </div>
      <p className="mt-8 text-xs text-[var(--muted-ink)]">
        &copy; {new Date().getFullYear()} {SITE.company}
      </p>
    </div>
  );
}
