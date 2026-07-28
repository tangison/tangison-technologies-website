'use client';

import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";

/* ─── Tangison ClipReveal ───
   Per motion-master: "clip-path is a legitimate animation primitive for reveals
   (a section wiping into view, an image uncovering) and often reads as more
   intentional than a plain fade or slide."

   Provides clip-path wipe reveals (top-to-bottom, left-to-right, etc.)
   Reduced-motion: instant visibility, no wipe animation.
*/

interface ClipRevealProps {
  children: React.ReactNode;
  direction?: "down" | "up" | "right" | "left";
  delay?: number;
  duration?: number;
  className?: string;
}

export function ClipReveal({
  children,
  direction = "down",
  delay = 0,
  duration = 0.6,
  className = "",
}: ClipRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  // clip-path animations: start hidden, wipe to fully visible
  const clipPaths: Record<string, { initial: string; animate: string }> = {
    down: {
      initial: "inset(0 0 100% 0)",
      animate: "inset(0 0 0% 0)",
    },
    up: {
      initial: "inset(100% 0 0 0)",
      animate: "inset(0% 0 0 0)",
    },
    right: {
      initial: "inset(0 100% 0 0)",
      animate: "inset(0 0% 0 0)",
    },
    left: {
      initial: "inset(0 0 0 100%)",
      animate: "inset(0 0 0 0%)",
    },
  };

  const { initial, animate } = clipPaths[direction];

  return (
    <motion.div
      initial={{ clipPath: initial, opacity: 0 }}
      whileInView={{ clipPath: animate, opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
        clipPath: { duration: duration * 1.2, ease: [0.16, 1, 0.3, 1] },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
