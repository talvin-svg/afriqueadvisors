import { KenteCorner } from "@/components/shared/Kente";
import { Reveal } from "@/components/shared/Reveal";
import { buttonStyles } from "@/components/shared/buttonStyles";
import Link from "next/link";

// Terracotta closing band: heading left, button right at lg; centred stack below
export function CTASection({ title = "Let’s talk about your business in Canada" }: { title?: string }) {
  return (
    <section className="relative overflow-hidden bg-accent text-ink">
      <KenteCorner dark className="h-full w-[200px] md:w-[560px]" />
      <Reveal className="container-page relative flex flex-col items-center gap-8 py-16 text-center md:py-20 lg:flex-row lg:justify-between lg:gap-12 lg:py-[88px] lg:text-left">
        <div className="flex max-w-[700px] flex-col gap-4">
          <h2 className="font-serif text-[32px] leading-[38px] font-medium tracking-[-0.01em] md:text-[38px] md:leading-[44px] lg:text-[44px] lg:leading-[50px]">
            {title}
          </h2>
          <p className="text-lg leading-[29px]">
            A conversation about where your business is today, your obligations and goals.
          </p>
        </div>
        <Link href="/contact" className={buttonStyles("inverse", "lg", "h-[60px] w-full shrink-0 px-8 md:w-auto")}>
          Book a consultation
        </Link>
      </Reveal>
    </section>
  );
}
