import { Eyebrow } from "@/components/shared/Eyebrow";
import { Reveal } from "@/components/shared/Reveal";
import { cn } from "@/lib/utils/cn";

interface SectionTitleProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
}

export function SectionTitle({ eyebrow, title, description, className }: SectionTitleProps) {
  return (
    <Reveal className={cn("flex max-w-[720px] flex-col gap-3.5 md:gap-4", className)}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-h2">{title}</h2>
      {description && <p className="mt-1 text-lg leading-[29px] text-muted">{description}</p>}
    </Reveal>
  );
}
