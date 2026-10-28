import { cn } from "@/lib/utils/cn";

// Diamond mark from the kente motif, with the full company name.
// One line from lg; below that "Canada Inc." drops to a small second line so it fits beside the menu.
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5 md:gap-3", className)}>
      <svg aria-hidden="true" className="h-7 w-7 shrink-0 md:h-8 md:w-8" viewBox="0 0 30 30">
        <path d="M15 2 L28 15 L15 28 L2 15 Z" fill="none" stroke="#E9B949" strokeWidth="1.5" />
        <path d="M15 9 L21 15 L15 21 L9 15 Z" fill="#E9B949" />
      </svg>
      <span className="flex flex-col whitespace-nowrap lg:flex-row lg:items-baseline lg:gap-[0.3em]">
        <span className="font-serif text-[21px] leading-6 font-medium md:text-2xl md:leading-7">Afrique Advisors</span>
        <span className="text-[11px] leading-4 font-semibold tracking-[0.14em] text-gold uppercase lg:font-serif lg:text-2xl lg:leading-7 lg:font-medium lg:tracking-normal lg:text-fg lg:normal-case">
          Canada Inc.
        </span>
      </span>
    </span>
  );
}
