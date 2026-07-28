'use client';

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { useState } from "react";

/* ─── Tangison Accordion ───
   Uses Radix primitives for accessibility.
   Animation: CSS-based expand in place (per motion-master rule for state changes).
   Reduced-motion: instant expand/contract via globals.css overrides.
   Timing: 250-400ms for larger surface transitions.
*/

interface AccordionItemData {
  id: string;
  title: string;
  body: string;
}

interface AccordionProps {
  items: AccordionItemData[];
  type?: "single" | "multiple";
  className?: string;
}

export function Accordion({ items, type = "single", className = "" }: AccordionProps) {
  return (
    <AccordionPrimitive.Root
      type={type === "multiple" ? "multiple" : "single"}
      collapsible={type === "single"}
      className={`space-y-0 ${className}`}
    >
      {items.map((item) => (
        <AccordionItem key={item.id} item={item} />
      ))}
    </AccordionPrimitive.Root>
  );
}

function AccordionItem({ item }: { item: AccordionItemData }) {
  const [open, setOpen] = useState(false);

  return (
    <AccordionPrimitive.Item
      value={item.id}
      className="border-b border-[var(--hairline)]"
    >
      <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
          onClick={() => setOpen((prev) => !prev)}
          className="group flex flex-1 items-center justify-between py-5 text-left text-sm font-semibold text-[var(--ink)] hover:text-[var(--teal)] transition-colors cursor-pointer"
        >
          {item.title}
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>

      <AccordionPrimitive.Content
        className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden"
      >
        <div className="pb-5 text-sm text-[var(--muted-ink)] body-constrained">
          {item.body}
        </div>
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  );
}
