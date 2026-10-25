import { Eyebrow } from "@/components/shared/Eyebrow";
import { ArrowUpRight } from "@/components/shared/Icon";
import { KenteCorner } from "@/components/shared/Kente";
import { Reveal } from "@/components/shared/Reveal";
import { buttonStyles } from "@/components/shared/buttonStyles";
import { sisterCompany } from "@/lib/data/company";

export function SisterCompanySection() {
  return (
    <section className="container-page section-y">
      <Reveal className="relative grid gap-8 overflow-hidden rounded-[20px] border border-line bg-surface p-6 md:p-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,4fr)] lg:items-center lg:gap-14 lg:rounded-3xl lg:p-14">
        <KenteCorner className="hidden h-32 w-80 md:block" />
        <div className="relative flex flex-col gap-4 md:gap-[18px]">
          <Eyebrow>Our sister company</Eyebrow>
          <h2 className="font-serif text-[28px] leading-[34px] font-medium md:text-4xl md:leading-[42px]">{sisterCompany.name}</h2>
          <p className="text-[15px] leading-[22px] font-medium text-muted">{sisterCompany.region}</p>
          <p className="max-w-[620px] leading-[26px] md:text-lg md:leading-[29px]">{sisterCompany.description}</p>
        </div>
        <div className="relative flex flex-col items-start gap-4">
          <p className="text-[15px] leading-6 text-muted">Also led by Frank Tawiah as CEO.</p>
          <a
            href={sisterCompany.url}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonStyles("secondary", "lg", "h-[52px] px-6 text-base")}
          >
            Visit Core Afrique
            <ArrowUpRight />
            <span className="sr-only"> (opens in new tab)</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
