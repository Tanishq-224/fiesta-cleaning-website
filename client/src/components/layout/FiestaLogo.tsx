import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const LOGO_SRC = {
  cream: "/brand/fiesta-logo-cream.png",
  dark: "/brand/fiesta-logo.png",
} as const;

type FiestaLogoProps = {
  className?: string;
  priority?: boolean;
  variant?: "default" | "footer";
  /** Header only: cream on hero, dark after scroll (nav transition). */
  onHero?: boolean;
};

export function FiestaLogo({
  className,
  priority = false,
  variant = "default",
  onHero = true,
}: FiestaLogoProps) {
  const src =
    variant === "footer"
      ? LOGO_SRC.dark
      : onHero
        ? LOGO_SRC.cream
        : LOGO_SRC.dark;

  const isHeader = variant === "default";

  return (
    <Link
      href="#top"
      className={cn(
        "inline-flex shrink-0 items-center",
        variant === "footer" && "rounded-sm bg-warm-ivory px-3 py-2",
        className,
      )}
    >
      <Image
        src={src}
        alt="Fiesta Cleaning"
        width={1024}
        height={512}
        priority={priority}
        className={cn(
          "block w-auto object-contain object-left transition-opacity duration-300",
          isHeader
            ? "h-[1.625rem] translate-y-px w768:h-[1.875rem]"
            : "h-7 w768:h-8",
        )}
      />
    </Link>
  );
}
