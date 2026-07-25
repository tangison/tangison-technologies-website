'use client';

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";
import { SearchDialog } from "./search-dialog";
import { SITE, NAV_PRIMARY, NAV_SECONDARY, EcosystemEntities } from "@/lib/site";

/* ─── Dropdown data ─── */
const DROPDOWN_TECHNOLOGY = [
  { label: "Overview", href: "/technology" },
  { label: "Observe", href: "/technology#observe" },
  { label: "Decide", href: "/technology#decide" },
  { label: "Operate", href: "/technology#operate" },
  { label: "Tangison Agent", href: "/technology#agent" },
];

const DROPDOWN_COMPANY = [
  { label: "Overview", href: "/company" },
  { label: "Philosophy", href: "/company#philosophy" },
  { label: "Namibia", href: "/company#namibia" },
  { label: "Brand", href: "/brand" },
  { label: "Contact", href: "/contact" },
];

/* ─── Focus trap utility ─── */
function getFocusableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(
    container.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
  ).filter((el) => el.offsetParent !== null); // visible only
}

function trapFocus(container: HTMLElement, event: KeyboardEvent) {
  const focusable = getFocusableElements(container);
  if (focusable.length === 0) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.key === "Tab") {
    if (event.shiftKey) {
      if (document.activeElement === first) {
        event.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  }
}

export function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setDropdown(null);
  }, [pathname]);

  // Scroll lock when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Real focus trap + Escape for off-canvas
  useEffect(() => {
    if (!menuOpen) return;

    const menu = menuRef.current;
    if (!menu) return;

    // Focus the first focusable element on open
    const focusable = getFocusableElements(menu);
    if (focusable.length > 0) {
      focusable[0].focus();
    }

    const keyHandler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        menuTriggerRef.current?.focus(); // restore focus to trigger
        return;
      }
      trapFocus(menu, e);
    };

    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, [menuOpen]);

  // CMD+K global trigger for search
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  // Dropdown pointer tolerance
  const dropdownEnter = useCallback((key: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdown(key);
  }, []);

  const dropdownLeave = useCallback(() => {
    dropdownTimeout.current = setTimeout(() => {
      setDropdown(null);
    }, 150);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.split("#")[0]);
  };

  // Off-canvas imagery mapping
  const navImageMap: Record<string, string> = {
    Technology: "/images/tangison/webp/03-ai-operations-node.webp",
    Company: "/images/tangison/webp/10-about-namibia-signal.webp",
    Contact: "/images/tangison/webp/11-contact-coast-horizon.webp",
  };

  const [activeOffCanvas, setActiveOffCanvas] = useState<string>(
    NAV_PRIMARY[0].label
  );

  return (
    <>
      {/* ─── RESTING HEADER ─── */}
      <header
        className="fixed top-0 left-0 right-0 z-40 bg-[var(--bg)]/95 backdrop-blur-sm"
        style={{ height: "var(--nav-height)" }}
      >
        <div className="container-tangison flex items-center justify-between h-full">
          <Logo linked size="sm" />

          {/* Desktop primary nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Primary navigation">
            {NAV_PRIMARY.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => {
                  if (item.label === "Technology") dropdownEnter("technology");
                  if (item.label === "Company") dropdownEnter("company");
                }}
                onMouseLeave={dropdownLeave}
              >
                <Link
                  href={item.href}
                  className={`nav-link ${isActive(item.href) ? "active" : ""}`}
                >
                  {item.label}
                </Link>

                {/* Dropdowns */}
                {dropdown === "technology" && item.label === "Technology" && (
                  <div className="dropdown-enter open absolute top-full left-0 mt-2 w-52 rounded-md border border-[var(--hairline)] bg-[var(--surface)] shadow-[var(--shadow-warm-md)] py-2">
                    {DROPDOWN_TECHNOLOGY.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-4 py-2 text-sm text-[var(--muted-ink)] hover:text-[var(--ink)] hover:bg-[var(--surface-2)] transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}

                {dropdown === "company" && item.label === "Company" && (
                  <div className="dropdown-enter open absolute top-full left-0 mt-2 w-52 rounded-md border border-[var(--hairline)] bg-[var(--surface)] shadow-[var(--shadow-warm-md)] py-2">
                    {DROPDOWN_COMPANY.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-4 py-2 text-sm text-[var(--muted-ink)] hover:text-[var(--ink)] hover:bg-[var(--surface-2)] transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-md text-[var(--muted-ink)] hover:text-[var(--ink)] hover:bg-[var(--surface-2)] transition-colors"
              aria-label="Search"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            <Link
              href="/contact"
              className="hidden md:inline-flex btn-outline text-xs py-1.5 px-3"
            >
              Contact
            </Link>

            <button
              ref={menuTriggerRef}
              onClick={() => setMenuOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-md text-[var(--muted-ink)] hover:text-[var(--ink)] hover:bg-[var(--surface-2)] transition-colors"
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* ─── OFF-CANVAS OVERLAY ─── */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[rgba(26,26,24,0.3)]"
          onClick={() => {
            setMenuOpen(false);
            menuTriggerRef.current?.focus();
          }}
        />
      )}

      {/* ─── OFF-CANVAS MENU ─── */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="nav-surface-enter open fixed top-0 right-0 bottom-0 z-50 w-full md:w-[520px] bg-[var(--surface)] border-l border-[var(--hairline)] overflow-y-auto"
          role="dialog"
          aria-label="Navigation menu"
          aria-modal="true"
        >
          {/* Close button */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--hairline)]">
            <Logo linked={false} size="sm" />
            <button
              onClick={() => {
                setMenuOpen(false);
                menuTriggerRef.current?.focus();
              }}
              className="flex h-10 w-10 items-center justify-center rounded-md text-[var(--ink)] hover:bg-[var(--surface-2)] transition-colors"
              aria-label="Close menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Primary nav links with imagery */}
          <div className="flex flex-col md:flex-row">
            {/* Image side (desktop only) */}
            <div className="hidden md:block w-[240px] bg-[var(--surface-2)] relative overflow-hidden">
              <img
                src={navImageMap[activeOffCanvas] ?? navImageMap["Technology"]}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Links side */}
            <div className="flex-1 px-6 py-8">
              <p className="eyebrow mb-6">Navigation</p>

              <nav aria-label="Off-canvas primary navigation">
                <ul className="space-y-4">
                  {NAV_PRIMARY.map((item) => (
                    <li
                      key={item.href}
                      onMouseEnter={() => setActiveOffCanvas(item.label)}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="display-md text-[var(--ink)] hover:text-[var(--teal)] transition-colors block py-1"
                      >
                        {item.label}
                      </Link>

                      {/* Sub-links for Technology */}
                      {item.label === "Technology" && (
                        <ul className="mt-2 space-y-2 pl-4">
                          {DROPDOWN_TECHNOLOGY.map((sub) => (
                            <li key={sub.href}>
                              <Link
                                href={sub.href}
                                onClick={() => setMenuOpen(false)}
                                className="text-sm text-[var(--muted-ink)] hover:text-[var(--ink)] transition-colors"
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Sub-links for Company */}
                      {item.label === "Company" && (
                        <ul className="mt-2 space-y-2 pl-4">
                          {DROPDOWN_COMPANY.map((sub) => (
                            <li key={sub.href}>
                              <Link
                                href={sub.href}
                                onClick={() => setMenuOpen(false)}
                                className="text-sm text-[var(--muted-ink)] hover:text-[var(--ink)] transition-colors"
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Ecosystem section */}
              <hr className="hairline my-8" />
              <p className="eyebrow mb-4">Ecosystem</p>
              <ul className="space-y-3">
                {EcosystemEntities.map((entity) => (
                  <li key={entity.name}>
                    <Link
                      href={entity.href}
                      onClick={() => setMenuOpen(false)}
                      target={entity.href.startsWith("http") ? "_blank" : undefined}
                      rel={entity.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm text-[var(--muted-ink)] hover:text-[var(--ink)] transition-colors"
                    >
                      {entity.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Secondary nav */}
              <hr className="hairline my-8" />
              <ul className="flex flex-wrap gap-4">
                {NAV_SECONDARY.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="text-sm text-[var(--muted-ink)] hover:text-[var(--ink)] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Search trigger */}
              <button
                onClick={() => {
                  setMenuOpen(false);
                  setSearchOpen(true);
                }}
                className="mt-6 flex items-center gap-2 text-sm text-[var(--muted-ink)] hover:text-[var(--ink)] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                Search
              </button>

              {/* Location */}
              <hr className="hairline my-8" />
              <p className="text-sm text-[var(--muted-ink)]">
                {SITE.location}
              </p>
              <p className="text-xs text-[var(--muted-ink)] mt-1">
                {SITE.tagline}
              </p>

              {/* Credit */}
              <p className="mt-6 text-xs text-[var(--muted-ink)]">
                Made by{" "}
                <a
                  href={SITE.studioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--teal)] transition-colors"
                >
                  Tangison Studio
                </a>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ─── SEARCH DIALOG ─── */}
      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
