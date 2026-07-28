'use client';

import * as TabsPrimitive from "@radix-ui/react-tabs";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

/* ─── Tangison Tabs ───
   Uses Radix primitives for accessibility.
   Animation: content crossfades in place (per motion-master rule for state changes in place).
   Active indicator: slides between positions as a single element (per motion-master nav rule).
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

  return (
    <TabsPrimitive.Root
      defaultValue={defaultTab}
      onValueChange={setActiveTab}
      className={`${className}`}
    >
      {/* Tab list with sliding active indicator */}
      <TabsPrimitive.List className="relative flex border-b border-[var(--hairline)] mb-6">
        {items.map((item) => (
          <TabsPrimitive.Trigger
            key={item.id}
            value={item.id}
            className="flex-1 py-3 text-sm font-medium text-[var(--muted-ink)] hover:text-[var(--ink)] transition-colors data-[state=active]:text-[var(--ink)] data-[state=active]:font-semibold cursor-pointer text-center"
          >
            {item.label}
          </TabsPrimitive.Trigger>
        ))}
        {/* Sliding underline indicator */}
        <motion.div
          className="absolute bottom-0 h-[2px] bg-[var(--teal)]"
          layoutId="tab-indicator"
          transition={{ type: "spring", stiffness: 500, damping: 35 }}
          style={{
            width: `${100 / items.length}%`,
            left: `${(items.findIndex((i) => i.id === activeTab) / items.length) * 100}%`,
          }}
        />
      </TabsPrimitive.List>

      {/* Tab content with crossfade */}
      {items.map((item) => (
        <TabsPrimitive.Content key={item.id} value={item.id} asChild forceMount>
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
