import { Em } from "@/components/shared/Em";
import { ArrowRight } from "@/components/shared/Icon";
import { Reveal } from "@/components/shared/Reveal";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { serviceCategories } from "@/lib/data/services";
import { slugify } from "@/lib/utils/slugify";
import Link from "next/link";

// Cream "paper" section: both practice areas as a printed index, each row linking to that service
export function ServicesPreviewSection() {
  return (
    <section id="services" className="scroll-mt-16 bg-paper text-ink [--em:var(--color-paper-accent)] md:scroll-mt-20">
      <div className="container-page section-y flex flex-col gap-10 md:gap-14">
        <SectionTitle
          tone="paper"
          eyebrow="Services"
          title={<>Everything a Canadian business <Em>has to get right</Em></>}
          description="Two practice areas, one point of contact."
        />
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          {serviceCategories.map((category, c) => (
            <Reveal key={category.slug} delay={c * 0.06} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <p className="text-label text-paper-accent">Practice {String(c + 1).padStart(2, "0")}</p>
                <h3 className="text-h3 lg:text-[32px] lg:leading-[38px]">
                  <Link href={category.href} className="transition-colors hover:text-paper-accent">
                    {category.title}
                  </Link>
                </h3>
                <p className="font-serif text-lg leading-7 text-paper-muted italic">{category.eyebrow}</p>
              </div>
              <ol className="border-t-2 border-ink">
                {category.items.map((item, i) => (
                  <li key={item.title} className="border-b border-paper-line">
                    <Link
                      href={`${category.href}#${slugify(item.title)}`}
                      className="group grid grid-cols-[48px_minmax(0,1fr)_20px] items-baseline gap-x-3 py-4 transition-[background-color,padding] duration-200 hover:bg-paper-2 md:py-5 motion-safe:hover:px-3"
                    >
                      <span className="text-label text-paper-muted">
                        {c + 1}.{String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex flex-col gap-1">
                        <span className="text-[17px] leading-6 font-semibold md:text-lg">{item.title}</span>
                        <span className="text-[15px] leading-6 text-paper-muted">{item.description}</span>
                      </span>
                      <span className="self-center opacity-40 transition-[opacity,translate] duration-200 group-hover:translate-x-1 group-hover:opacity-100">
                        <ArrowRight color="#A04B1C" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ol>
              <Link href={category.href} className="inline-flex items-center gap-2 self-start font-semibold text-paper-accent transition-colors hover:text-ink">
                View {category.title} <ArrowRight color="currentColor" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
