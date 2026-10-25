"use client";

import { Diamond } from "@/components/shared/Icon";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { processSteps } from "@/lib/data/company";
import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";

const ease = [0.2, 0.6, 0.2, 1] as const;

export function ProcessSection() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="container-page section-y flex flex-col gap-8 md:gap-14">
        <SectionTitle eyebrow="Process" title="Four steps, in order" />
        <motion.ol
          initial="hidden"
          whileInView="shown"
          viewport={{ once: true, amount: 0.15 }}
          className="grid md:grid-cols-2 md:gap-10 lg:grid-cols-4"
        >
          {processSteps.map((step, i) => {
            const last = i === processSteps.length - 1;
            return (
              <li key={step.step} className="grid grid-cols-[64px_minmax(0,1fr)] gap-4 md:flex md:flex-col md:gap-[18px]">
                {/* Numeral and connector: vertical on mobile, horizontal at lg, hidden at md */}
                <div className="flex flex-col items-center gap-2 md:flex-row md:gap-3.5">
                  <span className="font-serif text-[44px] leading-[44px] font-medium text-gold lg:text-[56px] lg:leading-[56px]">{step.step}</span>
                  <motion.span
                    aria-hidden="true"
                    variants={{ hidden: { scaleY: 0 }, shown: { scaleY: 1 } }}
                    transition={{ duration: 0.4, delay: i * 0.12, ease }}
                    className={cn("min-h-6 w-px flex-1 origin-top bg-line-strong md:hidden", last && "bg-transparent")}
                  />
                  <motion.span
                    aria-hidden="true"
                    variants={{ hidden: { scaleX: 0 }, shown: { scaleX: 1 } }}
                    transition={{ duration: 0.4, delay: i * 0.12, ease }}
                    className="hidden h-px flex-1 origin-left bg-line-strong lg:block"
                  />
                  <Diamond className="hidden h-2.5 w-2.5 lg:block" />
                </div>
                <div className="flex flex-col gap-2 pt-1.5 pb-8 md:gap-[18px] md:p-0">
                  <h3 className="font-serif text-[22px] leading-7 font-medium lg:text-2xl lg:leading-[30px]">{step.title}</h3>
                  <p className="leading-[26px] text-muted">{step.description}</p>
                </div>
              </li>
            );
          })}
        </motion.ol>
      </div>
    </section>
  );
}
