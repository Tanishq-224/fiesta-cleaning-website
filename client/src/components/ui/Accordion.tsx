"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type AccordionItem = {
  title: string;
  content: string;
};

type AccordionProps = {
  items: readonly AccordionItem[];
  className?: string;
};

export function Accordion({ items, className }: AccordionProps) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={cn("divide-y divide-soft-taupe border-y border-soft-taupe", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <div key={item.title}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full min-h-14 items-center justify-between gap-4 py-4 text-left font-sans text-lg font-bold text-near-black hover:text-dark-espresso"
              >
                <span>{item.title}</span>
                <ChevronDown
                  aria-hidden
                  className={cn(
                    "h-5 w-5 shrink-0 text-dusty-terracotta transition-transform duration-200",
                    isOpen && "rotate-180",
                  )}
                  strokeWidth={1.75}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid transition-[grid-template-rows] duration-200",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <p className="overflow-hidden pb-5 pr-8 text-base text-dark-espresso">
                {item.content}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
