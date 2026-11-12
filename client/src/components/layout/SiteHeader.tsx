"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { FiestaLogo } from "@/components/layout/FiestaLogo";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { navLinks } from "@/data/navigation";
import { navSurfaceClasses } from "@/lib/nav-surface";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onHero = !scrolled;

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-[120] px-[clamp(1rem,4vw,2rem)] pt-3 w768:pt-4">
      <div
        className={cn(
          "pointer-events-auto mx-auto flex h-12 w-full max-w-[1280px] items-center justify-between gap-3 rounded-xl px-3 w768:h-[3.25rem] w768:px-4 w1024:grid w1024:grid-cols-[1fr_auto_1fr]",
          navSurfaceClasses(onHero),
        )}
      >
        <div className="flex min-w-0 shrink-0 items-center self-center w1024:justify-self-start">
          <FiestaLogo priority onHero={onHero} />
        </div>

        <nav
          aria-label="Primary"
          className="hidden items-center justify-center gap-6 justify-self-center w1024:flex w1280:gap-8"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-sans text-[13px] font-medium tracking-[0.04em] transition-colors w1280:text-sm",
                onHero
                  ? "text-warm-ivory/88 hover:text-warm-ivory"
                  : "text-near-black hover:text-dusty-terracotta",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center justify-end w1024:justify-self-end">
          <Link
            href="#quote"
            className={cn(
              "hidden h-8 shrink-0 items-center gap-1.5 rounded-full py-1 pr-1 pl-3 font-sans text-[11px] font-semibold tracking-wide transition-colors w1024:inline-flex w1280:pl-4 w1280:text-xs",
              onHero
                ? "bg-warm-ivory text-near-black hover:opacity-90"
                : "border border-dark-espresso bg-dark-espresso text-warm-ivory hover:bg-near-black",
            )}
          >
            Get a Quote
            <span
              className={cn(
                "inline-flex h-6 w-6 items-center justify-center rounded-full",
                onHero
                  ? "bg-near-black text-warm-ivory"
                  : "bg-warm-ivory text-near-black",
              )}
            >
              <ArrowUpRight aria-hidden className="h-3 w-3" strokeWidth={2.25} />
            </span>
          </Link>
          <div className="w1024:border-l w1024:border-muted-beige/60 w1024:pl-2">
            <MobileNavigation onHero={onHero} />
          </div>
        </div>
      </div>
    </header>
  );
}
