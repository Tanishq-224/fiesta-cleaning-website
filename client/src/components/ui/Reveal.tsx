"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap, registerGsapPlugins } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  y?: number;
  delay?: number;
  once?: boolean;
};

export function Reveal({
  children,
  className,
  stagger = 0.1,
  y = 28,
  delay = 0,
  once = true,
}: RevealProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) {
      return;
    }

    registerGsapPlugins();

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const items = root.querySelectorAll<HTMLElement>("[data-reveal]");
    const targets = items.length > 0 ? items : [root];

    const ctx = gsap.context(() => {
      gsap.from(targets, {
        opacity: 0,
        y,
        duration: 0.85,
        ease: "power2.out",
        stagger: items.length > 1 ? stagger : 0,
        delay,
        scrollTrigger: {
          trigger: root,
          start: "top 82%",
          once,
        },
      });
    }, root);

    return () => {
      ctx.revert();
    };
  }, [delay, once, stagger, y]);

  return (
    <div ref={rootRef} className={cn(className)}>
      {children}
    </div>
  );
}
