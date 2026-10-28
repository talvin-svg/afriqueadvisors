import { ArrowRight, IconTile } from "@/components/shared/Icon";
import { Reveal } from "@/components/shared/Reveal";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { audiences } from "@/lib/data/company";
import Link from "next/link";

const cardClass = "flex h-full flex-col gap-4 rounded-2xl border border-line bg-surface p-6 card-hover md:gap-[18px] md:p-8";

export function AudienceSection() {
  return (
    <section className="container-page section-y flex flex-col gap-8 md:gap-12">
      <SectionTitle eyebrow="Who we help" title="Four kinds of business, one dependable advisor" />
      <div className="grid gap-4 md:grid-cols-2 md:gap-6">
        {audiences.map((audience, i) => {
          const content = (
            <>
              <IconTile name={audience.icon} />
              <h3 className="font-serif text-[22px] leading-7 font-medium md:text-2xl md:leading-[30px]">{audience.title}</h3>
              <p className="leading-[26px] text-muted">{audience.description}</p>
              {audience.href && (
                <span className="mt-auto flex items-center gap-2 pt-1 font-semibold text-gold">
                  Our blockchain focus <ArrowRight />
                </span>
              )}
            </>
          );
          return (
            <Reveal key={audience.title} delay={i * 0.06}>
              {audience.href ? (
                <Link href={audience.href} className={`${cardClass} hover:border-line-strong`}>
                  {content}
                </Link>
              ) : (
                <div className={cardClass}>{content}</div>
              )}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
