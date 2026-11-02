import { cn } from "@/lib/utils/cn";

// Section eyebrow with the 28 x 2 tick, in the text colour (gold by default)
export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("flex items-center gap-3 text-eyebrow text-gold", className)}>
      <span aria-hidden="true" className="block h-0.5 w-7 shrink-0 bg-current" />
      {children}
    </p>
  );
}
