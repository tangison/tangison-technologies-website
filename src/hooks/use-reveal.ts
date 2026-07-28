'use client';

import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver that adds the "visible" class
 * to the element when it enters the viewport. The CSS handles the
 * actual animation (opacity, transform, timing).
 *
 * Reduced-motion users get instant visibility via globals.css overrides.
 */
export function useReveal<T extends HTMLElement = HTMLElement>(
  threshold = 0.15
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

/**
 * Batch reveal: observes all children with .reveal / .reveal-left / .reveal-image
 * inside the container and adds "visible" when they enter the viewport.
 */
export function useRevealChildren<T extends HTMLElement = HTMLElement>(
  threshold = 0.1
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const targets = container.querySelectorAll(
      ".reveal, .reveal-left, .reveal-image, .reveal-zoom, .reveal-scale"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
