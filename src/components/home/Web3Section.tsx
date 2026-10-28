import { Reveal } from "@/components/shared/Reveal";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { web3Focus } from "@/lib/data/company";

export function Web3Section() {
  return (
    <section id="blockchain" className="scroll-mt-16 md:scroll-mt-20">
      <div className="container-page section-y grid gap-8 md:gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:items-start lg:gap-[72px]">
        <SectionTitle eyebrow="Blockchain & Web3" title="Building a more open financial system" description={web3Focus.intro} />
        <ol className="border-t border-line">
          {web3Focus.items.map((item, i) => (
            <li key={item.title} className="border-b border-line">
              <Reveal delay={0.04 * i} className="grid grid-cols-[48px_minmax(0,1fr)] gap-4 py-6 md:grid-cols-[64px_minmax(0,1fr)] md:gap-5 md:py-7">
                <span className="font-serif text-2xl leading-8 font-medium text-gold md:text-[28px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-2 pt-0.5">
                  <h3 className="font-serif text-[22px] leading-7 font-medium md:text-2xl md:leading-[30px]">{item.title}</h3>
                  {item.description && (
                    <p className="leading-[26px] text-muted md:text-[17px] md:leading-7">{item.description}</p>
                  )}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
