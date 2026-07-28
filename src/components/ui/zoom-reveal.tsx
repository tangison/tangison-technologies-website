'use client';

import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";

/* ─── Tangison ZoomReveal ───
   Per motion-master: "Something growing from a trigger point" → scale/zoom from that origin.
   Use for ecosystem cards, methodology phase entries, and elements that visually
   "grow" into their position rather than drift in from off-screen.

   Origin can be customised: "center" (default), "top", "bottom", "left", "right".
   Reduced-motion users: instant visibility, no scale animation.
*/

interface ZoomRevealProps {
  children: React.ReactNode;
  origin?: "center" | "top" | "bottom" | "left" | "right" | "top-left" | "top-right" | "bottom-left" | "bottom-right";
  delay?: number;
  duration?: number;
  className?: string;
}

const originMap: Record<string, string> = {
  center: "50% 50%",
  top: "50% 0%",
  bottom: "50% 100%",
  left: "0% 50%",
  right: "100% 50%",
  "top-left": "0% 0%",
  "top-right": "100% 0%",
  "bottom-left": "0% 100%",
  "bottom-right": "100% 100%",
};

export function ZoomReveal({
  children,
  origin = "center",
  delay = 0,
  duration = 0.5,
  className = "",
}: ZoomRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ scale: 0.85, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Tangison entrance curve
      }}
      style={{ originX: originMap[origin]?.split(" ")[0] ?? "50%", originY: originMap[origin]?.split(" ")[1] ?? "50%" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
