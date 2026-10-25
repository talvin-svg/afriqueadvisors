import { Diamond } from "@/components/shared/Icon";
import { Reveal } from "@/components/shared/Reveal";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { differentiators } from "@/lib/data/company";

export function WhyUsSection() {
  return (
    <section className="container-page section-y grid gap-8 md:gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:items-start lg:gap-[72px]">
      <SectionTitle
        eyebrow="Why Afrique Advisors"
        title="Senior advice, sized for a small business"
        description="One advisor from incorporation to year-end, with CFA and MBA training behind every recommendation."
      />
      <div className="grid gap-4 md:grid-cols-2 md:gap-6">
        {differentiators.map((item, i) => (
          <Reveal key={item.title} delay={(i % 2) * 0.06} className="flex flex-col gap-3.5 rounded-2xl border border-line bg-surface p-6 md:p-8">
            <Diamond className="my-1.5 h-3 w-3" />
            <h3 className="font-serif text-[22px] leading-7 font-medium md:text-2xl md:leading-[30px]">{item.title}</h3>
            <p className="leading-[26px] text-muted">{item.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
