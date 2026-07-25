'use client';

import { Nav } from "./nav";
import { Footer } from "./footer";
import { LoadingScreen } from "./loading";

interface PageShellProps {
  children: React.ReactNode;
}

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)]">
      <LoadingScreen />
      <Nav />
      {/* Floating nav needs extra top padding (nav height + float offset) */}
      <main id="main" className="flex-1 pt-[calc(var(--nav-height-mobile) + 20px)] md:pt-[calc(var(--nav-height) + 24px)]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
