import { ArrowRight, IconTile, type IconName } from "@/components/shared/Icon";
import { Reveal } from "@/components/shared/Reveal";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { serviceCategories } from "@/lib/data/services";
import Link from "next/link";

const icons: Record<string, IconName> = {
  "management-consulting": "house",
  "financial-advisory": "chart",
};

export function ServicesPreviewSection() {
  return (
    <section id="services" className="scroll-mt-16 border-y border-line bg-surface md:scroll-mt-20">
      <div className="container-page section-y flex flex-col gap-8 md:gap-12">
        <SectionTitle eyebrow="Services" title="Two practice areas, one point of contact" />
        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {serviceCategories.map((category, i) => (
            <Reveal key={category.slug} delay={i * 0.06} className="h-full">
              <Link
                href={category.href}
                className="card-hover group flex h-full flex-col gap-4 rounded-2xl border border-line bg-ink p-6 md:gap-5 md:rounded-3xl md:p-9 lg:p-11"
              >
                <IconTile name={icons[category.slug]} />
                <p className="text-eyebrow text-gold">{category.eyebrow}</p>
                <h3 className="text-h3 lg:text-[32px] lg:leading-[38px]">{category.title}</h3>
                <p className="leading-[26px] text-muted md:text-[17px] md:leading-7">{category.summary}</p>
                <span className="mt-auto inline-flex items-center gap-2.5 pt-2 font-semibold">
                  View {category.title}
                  <span className="transition-transform duration-150 group-hover:translate-x-1">
                    <ArrowRight />
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
