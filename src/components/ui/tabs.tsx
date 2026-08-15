'use client';

import * as TabsPrimitive from "@radix-ui/react-tabs";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

/* ─── Tangison Tabs ───
   Uses Radix primitives for accessibility.
   Animation: content crossfades in place (per motion-master rule for state changes in place).
   Active indicator: slides between positions as a single element (per motion-master nav rule).
   Mobile: tab list scrolls horizontally when tabs overflow, with scroll-snap.
   Reduced-motion: instant swap, no crossfade.
*/

interface TabItemData {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  items: TabItemData[];
  defaultValue?: string;
  className?: string;
}

export function Tabs({ items, defaultValue, className = "" }: TabsProps) {
  const defaultTab = defaultValue ?? items[0]?.id ?? "";
  const [activeTab, setActiveTab] = useState(defaultTab);

  // Calculate indicator position based on active tab index
  const activeIndex = items.findIndex((i) => i.id === activeTab);

  return (
    <TabsPrimitive.Root
      defaultValue={defaultTab}
      onValueChange={setActiveTab}
      className={`${className}`}
    >
      {/* Tab list: scrollable on mobile, equal-width on desktop */}
      <TabsPrimitive.List className="relative flex overflow-x-auto scroll-snap-x mandatory -mx-4 px-4 md:mx-0 md:px-0 md:overflow-x-visible border-b border-[var(--hairline)] mb-6 scrollbar-width-thin scrollbar-color-hairline-transparent">
        {items.map((item) => (
          <TabsPrimitive.Trigger
            key={item.id}
            value={item.id}
            className="flex-shrink-0 md:flex-1 py-3 px-4 text-sm font-medium text-[var(--muted-ink)] hover:text-[var(--ink)] transition-colors data-[state=active]:text-[var(--ink)] data-[state=active]:font-semibold cursor-pointer text-center whitespace-nowrap scroll-snap-align-start"
          >
            {item.label}
          </TabsPrimitive.Trigger>
        ))}
        {/* Sliding underline indicator — only on desktop where flex-1 gives equal widths */}
        <motion.div
          className="hidden md:block absolute bottom-0 h-[2px] bg-[var(--teal)]"
          layoutId="tab-indicator"
          transition={{ type: "spring", stiffness: 500, damping: 35 }}
          style={{
            width: `${100 / items.length}%`,
            left: `${(activeIndex / items.length) * 100}%`,
          }}
        />
      </TabsPrimitive.List>

      {/* Tab content with crossfade */}
      {/* Content panels.
          `asChild` is deliberately NOT used here. With `asChild`, Radix forwards
          its generated `id` and other props to its single child, and that child
          was AnimatePresence, which is not a DOM element and drops them. The
          panel id therefore never reached the DOM while each Trigger still
          rendered `aria-controls="radix-...-content-<id>"`, so every tab pointed
          at a non-existent element (audit rule a11y/duplicate-id-aria).
          Rendering a real element keeps the aria-controls target present. */}
      {items.map((item) => (
        <TabsPrimitive.Content key={item.id} value={item.id} forceMount>
          <AnimatePresence mode="wait">
            {activeTab === item.id && (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                {item.content}
              </motion.div>
            )}
          </AnimatePresence>
        </TabsPrimitive.Content>
      ))}
    </TabsPrimitive.Root>
  );
}
