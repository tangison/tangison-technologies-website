'use client';

import { Nav } from "./nav";
import { Footer } from "./footer";

interface PageShellProps {
  children: React.ReactNode;
}

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)]">
      <Nav />
      <main id="main" className="flex-1" style={{ paddingTop: "var(--nav-height)" }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
