'use client';

import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

/* ─── Tangison Carousel ───
   Uses Embla for lightweight touch-friendly carousel.
   Per widget-master: use for testimonials, logo strips, image galleries, secondary product shots.
   Avoid for hero messaging or primary value proposition.
   Lazy-load below-fold. Respect prefers-reduced-motion.
*/

interface CarouselItem {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
}

interface CarouselProps {
  items: CarouselItem[];
  className?: string;
  autoplay?: boolean;
  interval?: number;
}

export function Carousel({ items, className = "", autoplay = false, interval = 5000 }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
    dragFree: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setScrollSnaps(emblaApi.scrollSnapList());
  }, [emblaApi]);

  // Start autoplay
  const startAutoplay = useCallback(() => {
    if (!autoplay) return;
    autoplayRef.current = setInterval(() => {
      emblaApi?.scrollNext();
    }, interval);
  }, [emblaApi, autoplay, interval]);

  // Stop autoplay on user interaction
  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("pointerDown", stopAutoplay);
    startAutoplay();
    return () => {
      emblaApi.off("select", onSelect);
      stopAutoplay();
    };
  }, [emblaApi, onSelect, startAutoplay, stopAutoplay]);

  if (items.length === 0) return null;

  return (
    <div className={`${className}`}>
      {/* Carousel viewport */}
      <div className="overflow-hidden rounded-md" ref={emblaRef}>
        <div className="flex gap-4">
          {items.map((item) => (
            <div
              key={item.src}
              className="flex-[0_0_85%] md:flex-[0_0_60%] min-w-0 pl-2"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              {item.caption && (
                <p className="mt-2 label text-[var(--muted-ink)] text-center">
                  {item.caption}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-4">
        <button
          onClick={scrollPrev}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-[var(--hairline)] text-[var(--ink)] hover:bg-[var(--surface-2)] hover:border-[var(--ink)] transition-colors"
          aria-label="Previous slide"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Dot indicators */}
        <div className="flex gap-2">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`h-2 rounded-full transition-all duration-200 ${
                i === selectedIndex
                  ? "w-6 bg-[var(--teal)]"
                  : "w-2 bg-[var(--hairline)] hover:bg-[var(--muted-ink)]"
              }`}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === selectedIndex ? "true" : undefined}
            />
          ))}
        </div>

        <button
          onClick={scrollNext}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-[var(--hairline)] text-[var(--ink)] hover:bg-[var(--surface-2)] hover:border-[var(--ink)] transition-colors"
          aria-label="Next slide"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
