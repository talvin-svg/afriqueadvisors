import { IconTile } from "@/components/shared/Icon";
import { Reveal } from "@/components/shared/Reveal";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { audiences } from "@/lib/data/company";
import { cn } from "@/lib/utils/cn";

export function AudienceSection() {
  return (
    <section className="container-page section-y flex flex-col gap-8 md:gap-12">
      <SectionTitle eyebrow="Who we help" title="Three kinds of business, one dependable advisor" />
      <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {audiences.map((audience, i) => (
          <Reveal
            key={audience.title}
            delay={i * 0.06}
            className={cn(
              "flex flex-col gap-4 rounded-2xl border border-line bg-surface p-6 card-hover md:gap-[18px] md:p-8",
              i === 2 && "md:col-span-2 lg:col-span-1"
            )}
          >
            <IconTile name={audience.icon} />
            <h3 className="font-serif text-[22px] leading-7 font-medium md:text-2xl md:leading-[30px]">{audience.title}</h3>
            <p className="leading-[26px] text-muted">{audience.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
