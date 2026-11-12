import { cn } from "@/lib/utils";

export function navSurfaceClasses(onHero: boolean, className?: string) {
  return cn(
    "border backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300",
    onHero
      ? "border-warm-ivory/12 bg-near-black/55 shadow-[0_12px_40px_rgba(17,16,14,0.22)]"
      : "border-soft-taupe/80 bg-warm-ivory/95 shadow-sm",
    className,
  );
}

export const MOBILE_DRAWER_TOP = "top-[4.5rem] w768:top-[5rem]";
