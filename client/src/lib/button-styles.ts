export const buttonVariantClasses = {
  primary:
    "bg-dusty-terracotta text-warm-ivory hover:bg-dark-espresso focus-visible:bg-dark-espresso active:bg-near-black disabled:bg-muted-beige",
  secondary:
    "border border-current bg-transparent hover:bg-warm-ivory/10 active:bg-warm-ivory/15 disabled:opacity-50",
  ghost:
    "bg-transparent hover:text-dusty-terracotta disabled:opacity-50",
} as const;

export const buttonBaseClasses =
  "inline-flex min-h-11 cursor-pointer items-center justify-center px-5 py-2.5 font-sans text-sm font-semibold tracking-wide transition-colors duration-200 disabled:cursor-not-allowed";
