import { Eyebrow } from "@/components/shared/Eyebrow";
import { Diamond } from "@/components/shared/Icon";
import { KenteCorner, KenteDivider } from "@/components/shared/Kente";
import { PageHeader } from "@/components/shared/PageHeader";
import { Reveal } from "@/components/shared/Reveal";
import { buttonStyles } from "@/components/shared/buttonStyles";
import { companyInfo } from "@/lib/data/company";
import { founder } from "@/lib/data/team";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: companyInfo.description,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Practical help with setup, compliance and finance in Canada"
        description="Afrique Advisors Canada Inc. is an Ontario-based management and financial consulting firm, founded in 2021."
      />

      {/* Founder */}
      <section className="container-page grid gap-10 pt-2 pb-16 md:grid-cols-[280px_minmax(0,1fr)] md:gap-12 md:pb-20 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20 lg:pt-6 lg:pb-[104px]">
        <Reveal className="flex max-w-[320px] flex-col gap-5 md:max-w-none">
          <Image
            src={founder.image}
            alt={founder.name}
            width={400}
            height={500}
            className="aspect-[4/5] w-full rounded-[20px] border border-line object-cover lg:rounded-3xl"
          />
          <KenteDivider />
        </Reveal>
        <Reveal delay={0.06} className="flex flex-col gap-8 lg:gap-10">
          <div className="flex flex-col gap-2.5">
            <Eyebrow>{founder.role}</Eyebrow>
            <h2 className="font-serif text-[32px] leading-[38px] font-medium md:text-4xl md:leading-[42px] lg:text-[44px] lg:leading-[50px]">
              {founder.name}
            </h2>
          </div>
          <div className="flex max-w-[640px] flex-col gap-5 text-[17px] leading-7 lg:text-lg lg:leading-[30px]">
            {founder.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="font-serif text-2xl leading-[30px] font-medium">Qualifications</h3>
            <ul className="grid gap-3 lg:grid-cols-2 lg:gap-4">
              {founder.qualifications.map((q) => (
                <li key={q.title} className="flex items-start gap-3.5 rounded-2xl border border-line bg-surface px-[22px] py-5">
                  <Diamond className="mt-2 h-2.5 w-2.5" />
                  <div className="flex flex-col gap-0.5">
                    <span className="font-semibold">{q.title}</span>
                    {q.detail && <span className="text-sm leading-[22px] text-muted">{q.detail}</span>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap gap-6">
            <a href={`mailto:${founder.email}`} className="text-gold transition-colors hover:text-fg">
              {founder.email}
            </a>
            {founder.linkedinUrl && (
              <a href={founder.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-muted transition-colors hover:text-gold">
                LinkedIn ↗<span className="sr-only"> (opens in new tab)</span>
              </a>
            )}
          </div>
        </Reveal>
      </section>

      {/* Mission and vision */}
      <section className="border-y border-line bg-surface">
        <div className="container-page section-y grid gap-4 md:grid-cols-2 md:gap-6">
          {[
            { label: "Mission", text: companyInfo.mission },
            { label: "Vision", text: companyInfo.vision },
          ].map((item, i) => (
            <Reveal key={item.label} delay={i * 0.06} className="flex flex-col gap-[22px] rounded-[20px] border border-line bg-ink p-7 md:p-10 lg:rounded-3xl lg:p-12">
              <Eyebrow>{item.label}</Eyebrow>
              <p className="font-serif text-[22px] leading-[30px] md:text-2xl md:leading-[34px] lg:text-[28px] lg:leading-[38px]">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Closing panel */}
      <section className="container-page section-y">
        <Reveal className="relative flex flex-col items-start gap-8 overflow-hidden rounded-[20px] border border-line bg-surface-2 p-7 md:p-12 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:rounded-3xl lg:p-14">
          <KenteCorner className="hidden h-28 w-80 md:block" />
          <div className="relative flex max-w-[660px] flex-col gap-3.5">
            <h2 className="font-serif text-3xl leading-9 font-medium lg:text-4xl lg:leading-[42px]">Start with a conversation</h2>
            <p className="text-lg leading-[29px] text-muted">
              A conversation about where your business is today, your obligations and goals.
            </p>
          </div>
          <Link href="/contact" className={buttonStyles("primary", "lg", "relative w-full shrink-0 md:w-auto")}>
            Book a consultation
          </Link>
        </Reveal>
      </section>
    </>
  );
}
