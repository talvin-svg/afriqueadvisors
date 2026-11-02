import { ArrowUpRight } from "@/components/shared/Icon";
import { Reveal } from "@/components/shared/Reveal";
import { buttonStyles } from "@/components/shared/buttonStyles";
import { sisterCompany } from "@/lib/data/company";

// A slim row rather than a feature panel
export function SisterCompanySection() {
  return (
    <section className="container-page py-12 md:py-16">
      <Reveal className="grid gap-5 border-y border-line py-8 md:py-10 lg:grid-cols-[180px_minmax(0,1fr)_auto] lg:items-center lg:gap-10">
        <p className="text-label text-gold">Sister company</p>
        <div className="flex flex-col gap-2">
          <h2 className="font-serif text-2xl leading-[30px] font-medium md:text-[28px] md:leading-[34px]">
            {sisterCompany.name} <span className="text-base font-normal text-muted">· {sisterCompany.region}</span>
          </h2>
          <p className="max-w-[640px] leading-[26px] text-muted">{sisterCompany.description} Also led by Frank Tawiah as CEO.</p>
        </div>
        <a
          href={sisterCompany.url}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonStyles("secondary", "md", "w-full md:w-auto")}
        >
          Visit Core Afrique
          <ArrowUpRight />
          <span className="sr-only"> (opens in new tab)</span>
        </a>
      </Reveal>
    </section>
  );
}
