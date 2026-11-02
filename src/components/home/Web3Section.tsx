import { Em } from "@/components/shared/Em";
import { Reveal } from "@/components/shared/Reveal";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { buttonStyles } from "@/components/shared/buttonStyles";
import { web3Focus } from "@/lib/data/company";
import Link from "next/link";

// Its own band: deeper ground, full ledger grid, each focus area as a ledger entry with a tag
export function Web3Section() {
  return (
    <section id="blockchain" className="relative scroll-mt-16 overflow-hidden border-y border-line bg-[#0C0A09] md:scroll-mt-20">
      <div aria-hidden="true" className="bg-ledger pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      <div className="container-page section-y relative grid gap-8 md:gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:items-start lg:gap-[72px]">
        <div className="flex flex-col gap-7 lg:sticky lg:top-28">
          <SectionTitle eyebrow="Blockchain & Web3" title={<>Building a more <Em>open</Em> financial system</>} description={web3Focus.intro} />
          <Reveal>
            <Link href="/contact" className={buttonStyles("secondary", "md", "w-full md:w-auto")}>
              Talk to Frank about a Web3 venture
            </Link>
          </Reveal>
        </div>
        <ol className="border-t border-line-strong/60">
          {web3Focus.items.map((item, i) => (
            <li key={item.title} className="border-b border-line">
              <Reveal delay={0.04 * i} className="grid grid-cols-[56px_minmax(0,1fr)] gap-x-4 gap-y-3 py-6 md:grid-cols-[72px_minmax(0,1fr)_auto] md:gap-x-5 md:py-7">
                <span className="pt-1.5 font-mono text-sm text-gold">0x{String(i + 1).padStart(2, "0")}</span>
                <div className="flex flex-col gap-2">
                  <h3 className="font-serif text-[22px] leading-7 font-medium md:text-2xl md:leading-[30px]">{item.title}</h3>
                  {item.description && <p className="leading-[26px] text-muted md:text-[17px] md:leading-7">{item.description}</p>}
                </div>
                <span className="col-start-2 self-start justify-self-start rounded-[4px] border border-gold/40 px-2 py-1 text-label text-gold md:col-start-3 md:mt-1">
                  {item.tag}
                </span>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
