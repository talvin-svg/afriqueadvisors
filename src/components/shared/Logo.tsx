import { cn } from "@/lib/utils/cn";

// Diamond mark from the kente motif, with a Fraunces wordmark
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5 md:gap-3", className)}>
      <svg aria-hidden="true" className="h-7 w-7 md:h-8 md:w-8" viewBox="0 0 30 30">
        <path d="M15 2 L28 15 L15 28 L2 15 Z" fill="none" stroke="#E9B949" strokeWidth="1.5" />
        <path d="M15 9 L21 15 L15 21 L9 15 Z" fill="#E9B949" />
      </svg>
      <span className="font-serif text-[21px] font-medium whitespace-nowrap md:text-2xl">Afrique Advisors</span>
    </span>
  );
}
