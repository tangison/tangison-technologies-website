'use client';

import { SITE } from "@/lib/site";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--bg)] px-6">
      <p className="eyebrow mb-4">Error</p>
      <h1 className="display-md text-[var(--ink)]">Something went wrong</h1>
      <p className="mt-4 text-[var(--muted-ink)] body-constrained text-center">
        An unexpected error occurred. Please try again, or contact us if
        the problem persists.
      </p>
      <button
        onClick={reset}
        className="mt-6 btn-accent"
      >
        Try again
      </button>
      <p className="mt-8 text-xs text-[var(--muted-ink)]">
        &copy; {new Date().getFullYear()} {SITE.company}
      </p>
    </div>
  );
}
