import { CTASection } from "@/components/home/CTASection";
import { Em } from "@/components/shared/Em";
import { PageHeader } from "@/components/shared/PageHeader";
import { Reveal } from "@/components/shared/Reveal";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { buttonStyles } from "@/components/shared/buttonStyles";
import { serviceCategories } from "@/lib/data/services";
import { cn } from "@/lib/utils/cn";
import { slugify } from "@/lib/utils/slugify";
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

      {/* Paper index, matching the home page; each row is an anchor target from there */}
      <section className="bg-paper text-ink [--em:var(--color-paper-accent)]">
        <div className="container-page section-y grid gap-8 md:gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:items-start lg:gap-[72px]">
          <SectionTitle tone="paper" eyebrow="What we do" title={<>Services, <Em>in detail</Em></>} />
          <ol className="border-t-2 border-ink">
            {category.items.map((item, i) => (
              <li key={item.title} id={slugify(item.title)} className="scroll-mt-24 border-b border-paper-line">
                <Reveal delay={0.04 * i} className="grid grid-cols-[48px_minmax(0,1fr)] gap-4 py-6 md:grid-cols-[64px_minmax(0,1fr)] md:gap-5 md:py-7">
                  <span className="pt-1.5 text-label text-paper-accent">
                    {category.slug === "management-consulting" ? 1 : 2}.{String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-serif text-[22px] leading-7 font-medium md:text-2xl md:leading-[30px]">{item.title}</h3>
                    <p className="leading-[26px] text-paper-muted md:text-[17px] md:leading-7">{item.description}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Outcomes as a ledger of deliverables rather than cards */}
      <section className="container-page section-y grid gap-8 md:gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:items-start lg:gap-[72px]">
        <SectionTitle eyebrow="Outcomes" title={<>What you <Em>walk away with</Em></>} />
        <Reveal>
          <ul className="grid gap-px bg-line md:grid-cols-2">
            {category.outcomes.map((outcome, i) => (
              <li key={outcome} className="flex flex-col gap-3 bg-ink py-6 pr-6 md:px-6 md:py-7 md:nth-[odd]:pl-0">
                <span className="text-label text-gold">Deliverable {String(i + 1).padStart(2, "0")}</span>
                <p className="font-serif text-xl leading-[30px]">{outcome}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <CTASection title={`Talk to Frank about ${category.title}`} />
    </>
  );
}
