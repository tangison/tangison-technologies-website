'use client';

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { SEARCH_INDEX } from "@/lib/site";
import { Logo } from "./logo";

interface SearchDialogProps {
  open: boolean;
  onClose: () => void;
}

export function SearchDialog({ open, onClose }: SearchDialogProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const results = query.trim().length > 0
    ? SEARCH_INDEX.filter((item) => {
        const q = query.toLowerCase();
        return (
          item.title.toLowerCase().includes(q) ||
          item.summary.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q)
        );
      })
    : [];

  // Open/close the native <dialog>
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  // Focus input when dialog opens
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  // Clear query on close — legitimate UI cleanup on dialog state change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- resetting search state when dialog closes
    if (!open) setQuery("");
  }, [open]);

  // Escape key handler
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        onClose();
      }
    },
    [open, onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // CMD+K / Ctrl+K global trigger
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (open) {
          onClose();
        } else {
          // Parent component will handle opening
        }
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  const handleClose = () => {
    dialogRef.current?.close();
    onClose();
  };

  const categoryColors: Record<string, string> = {
    System: "bg-[var(--teal)] text-[var(--teal-text)]",
    Product: "bg-[var(--surface-2)] text-[var(--ink)]",
    Company: "bg-[var(--surface-2)] text-[var(--ink)]",
    Contact: "bg-[var(--surface-2)] text-[var(--ink)]",
    Brand: "bg-[var(--surface-2)] text-[var(--ink)]",
    Legal: "bg-[var(--muted-surface)] text-[var(--muted-ink)]",
  };

  return (
    <dialog
      ref={dialogRef}
      className="fixed inset-0 z-50 m-auto max-h-[80vh] w-full max-w-[640px] rounded-lg border border-[var(--hairline)] bg-[var(--surface)] p-0 shadow-[var(--shadow-warm-lg)] backdrop:bg-[rgba(26,26,24,0.4)]"
      onClose={handleClose}
      aria-label="Search Tangison Technologies"
    >
      <div className="flex items-center gap-3 border-b border-[var(--hairline)] px-4 py-3">
        <Logo linked={false} size="sm" />
        <div className="flex-1">
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Tangison Technologies..."
            className="w-full bg-transparent text-[var(--ink)] placeholder:text-[var(--muted-ink)] outline-none text-sm"
            aria-label="Search query"
          />
        </div>
        <button
          onClick={handleClose}
          className="flex h-8 w-8 items-center justify-center rounded text-[var(--muted-ink)] hover:text-[var(--ink)] transition-colors"
          aria-label="Close search"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      <div className="max-h-[60vh] overflow-y-auto p-2">
        {query.trim().length > 0 && results.length === 0 && (
          <p className="px-4 py-8 text-center text-sm text-[var(--muted-ink)]">
            No results for &ldquo;{query}&rdquo;
          </p>
        )}

        {results.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            onClick={handleClose}
            className="flex items-start gap-3 rounded-md px-4 py-3 hover:bg-[var(--surface-2)] transition-colors group"
          >
            <span
              className={`mt-0.5 inline-block rounded px-2 py-0.5 text-xs font-medium ${categoryColors[item.category] ?? "bg-[var(--surface-2)] text-[var(--ink)]"}`}
            >
              {item.category}
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-[var(--ink)] group-hover:text-[var(--teal)] transition-colors truncate">
                {item.title}
              </p>
              <p className="text-xs text-[var(--muted-ink)] mt-1 line-clamp-2">
                {item.summary}
              </p>
            </div>
          </Link>
        ))}

        {query.trim().length === 0 && (
          <div className="px-4 py-8 text-center">
            <p className="text-sm text-[var(--muted-ink)]">
              Type to search across Technology, Company, Contact, and more.
            </p>
            <p className="text-xs text-[var(--muted-ink)] mt-2">
              Press <kbd className="rounded border border-[var(--hairline)] px-1.5 py-0.5 font-mono text-xs">Esc</kbd> to close
            </p>
          </div>
        )}
      </div>
    </dialog>
  );
}
