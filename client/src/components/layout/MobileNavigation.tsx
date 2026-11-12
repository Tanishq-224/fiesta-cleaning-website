"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks } from "@/data/navigation";
import { MOBILE_DRAWER_TOP, navSurfaceClasses } from "@/lib/nav-surface";
import { cn } from "@/lib/utils";

type MobileNavigationProps = {
  onHero?: boolean;
};

export function MobileNavigation({ onHero = true }: MobileNavigationProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const panelId = useId();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const drawer =
    open && mounted ? (
      <>
        <button
          type="button"
          aria-label="Close menu"
          className={cn(
            "fixed inset-x-0 bottom-0 z-[100] bg-near-black/40 backdrop-blur-[2px]",
            MOBILE_DRAWER_TOP,
          )}
          onClick={() => setOpen(false)}
        />
        <div
          id={panelId}
          className={cn(
            "fixed inset-x-[clamp(1rem,4vw,2rem)] z-[110] max-h-[min(70vh,30rem)] overflow-hidden rounded-xl",
            MOBILE_DRAWER_TOP,
            navSurfaceClasses(onHero),
          )}
        >
          <nav
            aria-label="Mobile"
            className="max-h-[min(70vh,30rem)] overflow-y-auto px-5 py-6"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block min-h-12 py-3 font-sans text-base font-medium transition-colors",
                      onHero
                        ? "text-warm-ivory/90 hover:text-warm-ivory"
                        : "text-near-black hover:text-dusty-terracotta",
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div
              className={cn(
                "mt-6 border-t pt-6",
                onHero ? "border-warm-ivory/15" : "border-soft-taupe/80",
              )}
            >
              <Link
                href="#quote"
                className={cn(
                  "inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full py-2.5 pr-2 pl-5 font-sans text-sm font-semibold transition-colors",
                  onHero
                    ? "bg-warm-ivory text-near-black hover:opacity-90"
                    : "border border-dark-espresso bg-dark-espresso text-warm-ivory hover:bg-near-black",
                )}
                onClick={() => setOpen(false)}
              >
                Get a Quote
                <span
                  className={cn(
                    "inline-flex h-8 w-8 items-center justify-center rounded-full",
                    onHero
                      ? "bg-near-black text-warm-ivory"
                      : "bg-warm-ivory text-near-black",
                  )}
                >
                  <ArrowUpRight aria-hidden className="h-3.5 w-3.5" strokeWidth={2} />
                </span>
              </Link>
            </div>
          </nav>
        </div>
      </>
    ) : null;

  return (
    <div className="w1024:hidden">
      <button
        type="button"
        className={cn(
          "inline-flex h-9 w-9 items-center justify-center transition-colors",
          onHero ? "text-warm-ivory" : "text-near-black",
        )}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? (
          <X aria-hidden className="h-5 w-5" strokeWidth={1.75} />
        ) : (
          <Menu aria-hidden className="h-5 w-5" strokeWidth={1.75} />
        )}
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
      </button>
      {drawer ? createPortal(drawer, document.body) : null}
    </div>
  );
}
