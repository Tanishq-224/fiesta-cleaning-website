"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { buttonBaseClasses, buttonVariantClasses } from "@/lib/button-styles";
import { cn } from "@/lib/utils";

type ButtonVariant = keyof typeof buttonVariantClasses;

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
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
        buttonBaseClasses,
        buttonVariantClasses[variant],
        className,
      )}
    >
      {children}
    </motion.button>
  );
}
