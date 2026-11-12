import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type HeadingTag = "h1" | "h2" | "h3";

type SectionHeadingProps = {
  as?: HeadingTag;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({
  as: Heading = "h2",
  eyebrow,
  title,
  description,
  className,
  align = "left",
  tone = "light",
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "font-sans text-xs font-semibold tracking-[0.18em] uppercase",
            isDark ? "text-soft-taupe" : "text-muted-beige",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <Heading
        className={cn(
          "font-sans text-[clamp(1.75rem,4vw,3rem)] leading-tight font-extrabold",
          isDark ? "text-warm-ivory" : "text-near-black",
          eyebrow && "mt-3",
        )}
      >
        {title}
      </Heading>
      {description ? (
        <div
          className={cn(
            "mt-4 max-w-prose font-sans text-base font-normal",
            isDark ? "text-soft-taupe" : "text-dark-espresso/90",
          )}
        >
          {description}
        </div>
      ) : null}
    </div>
  );
}
