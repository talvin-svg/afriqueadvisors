import { cn } from "@/lib/utils/cn";

type Variant = "primary" | "secondary" | "inverse";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-[10px] font-semibold transition-[background-color,border-color,transform] duration-150 ease-calm motion-safe:active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-ink hover:bg-accent-hover active:bg-accent-active",
  secondary: "border border-muted font-medium text-fg hover:border-gold hover:bg-surface-2",
  inverse: "bg-ink text-fg hover:bg-surface-2",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[15px]",
  lg: "h-14 px-7 text-[17px]",
};

export function buttonStyles(variant: Variant = "primary", size: Size = "lg", className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}
