"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { buttonBaseClasses, buttonVariantClasses } from "@/lib/button-styles";
import { cn } from "@/lib/utils";

type CtaLinkProps = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof buttonVariantClasses;
  className?: string;
};

export function CtaLink({
  href,
  children,
  variant = "primary",
  className,
}: CtaLinkProps) {
  const prefersReducedMotion = useReducedMotion();
  const classes = cn(
    buttonBaseClasses,
    buttonVariantClasses[variant],
    className,
  );

  return (
    <motion.span
      className="inline-flex"
      whileHover={prefersReducedMotion ? undefined : { y: -1 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
    >
      <Link href={href} className={classes}>
        {children}
      </Link>
    </motion.span>
  );
}
