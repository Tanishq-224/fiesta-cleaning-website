"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-dark-espresso text-warm-ivory hover:bg-near-black disabled:bg-muted-beige",
  secondary:
    "border border-muted-beige bg-transparent text-near-black hover:border-dark-espresso hover:bg-soft-taupe/40 disabled:opacity-50",
  ghost:
    "bg-transparent text-near-black hover:text-dark-espresso disabled:opacity-50",
};

export function Button({
  children,
  variant = "primary",
  className,
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileHover={prefersReducedMotion || disabled ? undefined : { y: -1 }}
      whileTap={prefersReducedMotion || disabled ? undefined : { scale: 0.98 }}
      className={cn(
        "inline-flex min-h-11 cursor-pointer items-center justify-center px-5 py-2.5 font-sans text-sm font-semibold tracking-wide transition-colors duration-200 disabled:cursor-not-allowed",
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </motion.button>
  );
}
