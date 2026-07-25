'use client';

import { Logo } from "./logo";

/**
 * Full-screen loading overlay shown during initial page hydration.
 * Uses CSS animation for the fade-out, removed from DOM once loaded.
 */
export function LoadingScreen() {
  return (
    <div
      id="loading-screen"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--bg)]"
      aria-hidden="true"
      role="presentation"
    >
      <div className="flex flex-col items-center gap-4">
        <Logo linked={false} size="md" />
        <div className="loading-bar-container">
          <div className="loading-bar" />
        </div>
      </div>

      <style>{`
        .loading-bar-container {
          width: 120px;
          height: 2px;
          background: var(--hairline);
          border-radius: 1px;
          overflow: hidden;
          margin-top: 8px;
        }
        .loading-bar {
          width: 40%;
          height: 100%;
          background: var(--teal);
          border-radius: 1px;
          animation: loadingSlide 1.2s ease-in-out infinite;
        }
        @keyframes loadingSlide {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(200%); }
          100% { transform: translateX(-100%); }
        }

        /* Fade-out the entire screen */
        #loading-screen {
          animation: loadingFadeOut 0.4s ease-out 0.3s forwards;
        }
        @keyframes loadingFadeOut {
          to { opacity: 0; pointer-events: none; }
        }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .loading-bar { animation: none; }
          #loading-screen { animation: none; opacity: 0; pointer-events: none; }
        }
      `}</style>
    </div>
  );
}
