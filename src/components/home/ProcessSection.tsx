"use client";

import { Em } from "@/components/shared/Em";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { processSteps } from "@/lib/data/company";
import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";

const ease = [0.2, 0.6, 0.2, 1] as const;

// Two interlocking links joining one block to the next
function ChainLink() {
  return (
    <svg aria-hidden="true" viewBox="0 0 40 16" className="h-4 w-10" fill="none" stroke="#E9B949" strokeWidth="1.5">
      <rect x="1.5" y="3" width="21" height="10" rx="5" />
      <rect x="17.5" y="3" width="21" height="10" rx="5" />
    </svg>
  );
}

// The first year as a chain of blocks: stacked below lg, a row of four at lg
export function ProcessSection() {
  const last = processSteps.length - 1;
  return (
    <section className="border-y border-line bg-surface">
      <div className="container-page section-y flex flex-col gap-8 md:gap-14">
        <SectionTitle
          eyebrow="Process"
          title={<>Your first year, <Em>step by step</Em></>}
          description="Each step builds on the one before it, so nothing is set up twice or filed late."
        />
        <ol className="mx-auto grid w-full max-w-[560px] gap-10 lg:max-w-none lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <motion.li
              key={step.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.1, ease }}
              className="relative flex flex-col border border-line-strong/60 bg-ink"
            >
              <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-3">
                <span className="text-label text-muted">Block {step.step}</span>
                <span className="text-label text-gold">{step.when}</span>
              </div>
              <div className="flex flex-1 flex-col gap-2.5 p-5 lg:p-6">
                <h3 className="font-serif text-2xl leading-[30px] font-medium">{step.title}</h3>
                <p className="leading-[26px] text-muted">{step.description}</p>
              </div>
              <p className="border-t border-line px-5 py-2.5 text-label text-muted/70">
                {i === 0 ? "Genesis" : `Prev · Block ${processSteps[i - 1].step}`}
              </p>
              {i < last && (
                <motion.span
                  aria-hidden="true"
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.25 + i * 0.1, ease }}
                  className={cn(
                    "absolute -bottom-10 left-1/2 flex h-10 w-4 -translate-x-1/2 items-center justify-center",
                    "lg:top-1/2 lg:-right-10 lg:bottom-auto lg:left-auto lg:h-4 lg:w-10 lg:translate-x-0 lg:-translate-y-1/2"
                  )}
                >
                  <span className="rotate-90 lg:rotate-0">
                    <ChainLink />
                  </span>
                </motion.span>
              )}
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
