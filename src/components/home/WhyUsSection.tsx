import { Em } from "@/components/shared/Em";
import { Diamond } from "@/components/shared/Icon";
import { Reveal } from "@/components/shared/Reveal";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { comparison } from "@/lib/data/company";
import { cn } from "@/lib/utils/cn";

// A comparison table at md and up; below md each row stacks, with mono labels taken from data-label
export function WhyUsSection() {
  const last = comparison.length - 1;
  return (
    <section className="container-page section-y flex flex-col gap-8 md:gap-12">
      <SectionTitle
        eyebrow="Why Afrique Advisors"
        title={<>One advisor, <Em>start to finish</Em></>}
        description="Senior advice, sized for a small business."
      />
      <Reveal>
        <table className="w-full border-collapse text-left max-md:block">
          <caption className="sr-only">A typical firm compared with Afrique Advisors</caption>
          <thead className="max-md:hidden">
            <tr>
              <th scope="col" className="w-[22%] pb-4 text-label font-medium text-muted">
                <span className="sr-only">Topic</span>
              </th>
              <th scope="col" className="w-[34%] pr-6 pb-4 text-label font-medium text-muted">A typical firm</th>
              <th scope="col" className="rounded-t-2xl bg-surface px-7 pt-6 pb-4 text-label font-medium text-gold">Afrique Advisors</th>
            </tr>
          </thead>
          <tbody className="max-md:flex max-md:flex-col max-md:gap-3">
            {comparison.map((row, i) => (
              <tr key={row.topic} className="max-md:flex max-md:flex-col max-md:gap-3 max-md:rounded-2xl max-md:border max-md:border-line max-md:p-5">
                <th scope="row" className="border-t border-line py-6 pr-6 align-top text-label font-medium text-muted max-md:border-0 max-md:p-0 max-md:text-gold">
                  {row.topic}
                </th>
                <td
                  data-label="A typical firm"
                  className="border-t border-line py-6 pr-6 align-top leading-[26px] text-muted max-md:border-0 max-md:p-0 max-md:before:mb-1 max-md:before:block max-md:before:text-label max-md:before:text-muted max-md:before:content-[attr(data-label)]"
                >
                  {row.typical}
                </td>
                <td
                  data-label="Afrique Advisors"
                  className={cn(
                    "border-t border-line bg-surface px-7 py-6 align-top max-md:border-0 max-md:bg-transparent max-md:p-0 max-md:before:mb-1 max-md:before:block max-md:before:text-label max-md:before:text-gold max-md:before:content-[attr(data-label)]",
                    i === last && "rounded-b-2xl"
                  )}
                >
                  <span className="flex items-start gap-3">
                    <Diamond className="mt-2.5 h-2 w-2 max-md:hidden" />
                    <span className="font-serif text-lg leading-7 md:text-xl md:leading-[30px]">{row.ours}</span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
    </section>
  );
}
