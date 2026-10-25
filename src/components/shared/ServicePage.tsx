import { CTASection } from "@/components/home/CTASection";
import { CheckCircle } from "@/components/shared/Icon";
import { PageHeader } from "@/components/shared/PageHeader";
import { Reveal } from "@/components/shared/Reveal";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { buttonStyles } from "@/components/shared/buttonStyles";
import { serviceCategories } from "@/lib/data/services";
import { cn } from "@/lib/utils/cn";
import { ServiceCategory } from "@/types/company-info";
import Link from "next/link";

export function ServicePage({ category }: { category: ServiceCategory }) {
  return (
    <>
      <PageHeader
        eyebrow={category.eyebrow}
        title={category.title}
        description={category.overview}
        before={
          <nav aria-label="Practice areas" className="mb-3 flex flex-wrap gap-3">
            {serviceCategories.map((c) => {
              const active = c.slug === category.slug;
              return (
                <Link
                  key={c.slug}
                  href={c.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "inline-flex h-12 items-center rounded-full border px-[22px] font-semibold transition-colors",
                    active ? "border-gold bg-surface-2 text-fg" : "border-line-strong text-muted hover:text-fg"
                  )}
                >
                  {c.title}
                </Link>
              );
            })}
          </nav>
        }
      >
        <div className="mt-1">
          <Link href="/contact" className={buttonStyles("primary", "lg", "w-full md:w-auto")}>
            Book a consultation
          </Link>
        </div>
      </PageHeader>

      <section className="border-y border-line bg-surface">
        <div className="container-page section-y grid gap-8 md:gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:items-start lg:gap-[72px]">
          <SectionTitle eyebrow="What we do" title="Services" />
          <ol className="border-t border-line">
            {category.items.map((item, i) => (
              <li key={item.title} className="border-b border-line">
                <Reveal delay={0.04 * i} className="grid grid-cols-[48px_minmax(0,1fr)] gap-4 py-6 md:grid-cols-[64px_minmax(0,1fr)] md:gap-5 md:py-7">
                  <span className="font-serif text-2xl leading-8 font-medium text-gold md:text-[28px]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-serif text-[22px] leading-7 font-medium md:text-2xl md:leading-[30px]">{item.title}</h3>
                    <p className="leading-[26px] text-muted md:text-[17px] md:leading-7">{item.description}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-page section-y flex flex-col gap-8 md:gap-12">
        <SectionTitle eyebrow="Outcomes" title="What you get" />
        <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {category.outcomes.map((outcome, i) => (
            <Reveal key={outcome} delay={i * 0.06} className="flex flex-col gap-[18px] rounded-2xl border border-line bg-surface p-6 md:p-7">
              <CheckCircle />
              <p className="text-lg leading-7 font-medium">{outcome}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection title={`Talk to Frank about ${category.title}`} />
    </>
  );
}
