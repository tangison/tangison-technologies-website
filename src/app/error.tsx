'use client';

import { SITE } from "@/lib/site";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--bg)] px-6 noise-overlay">
      <p className="eyebrow mb-4">Error</p>
      <h1 className="display-md text-[var(--ink)]">
        Something went wrong
      </h1>
      <p className="mt-4 text-[var(--muted-ink)] body-constrained text-center">
        An unexpected error occurred on the {SITE.name} website. This
        is not expected behaviour. You can try the action again, or
        navigate to a different page. If the problem persists, contact
        us directly at{" "}
        <a href={`mailto:${SITE.email}`} className="text-[var(--teal)] hover:text-[var(--ink)] transition-colors font-medium">
          {SITE.email}
        </a>.
      </p>
      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <button onClick={reset} className="btn-accent">
          Try again
        </button>
        <Link href="/" className="btn-outline">
          Homepage
        </Link>
      </div>
      {error.digest && (
        <p className="mt-4 text-xs text-[var(--muted-ink)] font-mono">
          Error digest: {error.digest}
        </p>
      )}
      <p className="mt-6 text-xs text-[var(--muted-ink)]">
        &copy; {new Date().getFullYear()} {SITE.company}, {SITE.location}
      </p>
    </div>
  );
}
