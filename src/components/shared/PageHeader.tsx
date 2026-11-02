"use client";

import { Eyebrow } from "@/components/shared/Eyebrow";
import { motion } from "framer-motion";

export function PageHeader({
  eyebrow,
  title,
  description,
  before,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  before?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative">
      <div aria-hidden="true" className="bg-ledger bg-ledger-fade pointer-events-none absolute inset-0" />
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.2, 0.6, 0.2, 1] }}
        className="container-page relative flex flex-col gap-5 pt-10 pb-12 md:gap-6 md:pt-20 md:pb-16 lg:pt-[88px] lg:pb-[72px]"
      >
        {before}
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="text-h1 max-w-[860px]">{title}</h1>
        {description && <p className="text-lead max-w-[720px] text-muted">{description}</p>}
        {children}
      </motion.div>
    </section>
  );
}
