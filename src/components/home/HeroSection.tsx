"use client";

import { Eyebrow } from "@/components/shared/Eyebrow";
import { KenteCorner } from "@/components/shared/Kente";
import { buttonStyles } from "@/components/shared/buttonStyles";
import { founder } from "@/lib/data/team";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ease = [0.2, 0.6, 0.2, 1] as const;

// Eyebrow, headline, lead and buttons fade up in sequence; the founder card follows
function FadeUp({ i, className, children }: { i: number; className?: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: i * 0.08, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section className="relative">
      <KenteCorner className="h-28 w-[200px] md:h-56 md:w-[480px]" />
      <div className="container-page relative grid gap-10 pt-10 pb-12 md:pt-20 md:pb-20 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-center lg:gap-[72px] lg:pt-24 lg:pb-[88px]">
        <div className="flex flex-col gap-[22px] md:gap-7">
          <FadeUp i={0}>
            <Eyebrow>Management &amp; financial consulting</Eyebrow>
          </FadeUp>
          <FadeUp i={1}>
            <h1 className="text-display">
              Practical consulting for small businesses <em className="italic text-gold">building in Canada</em>
            </h1>
          </FadeUp>
          <FadeUp i={2}>
            <p className="text-lead max-w-[600px] text-muted">
              Company setup, compliance, bookkeeping, tax filing and growth planning, handled end to end by one advisor.
            </p>
          </FadeUp>
          <FadeUp i={3} className="mt-1.5 flex flex-col gap-3 md:mt-1 md:flex-row md:flex-wrap md:gap-4">
            <Link href="/contact" className={buttonStyles("primary")}>
              Book a consultation
            </Link>
            <Link href="#services" className={buttonStyles("secondary")}>
              Explore services
            </Link>
          </FadeUp>
        </div>

        <FadeUp
          i={4}
          className="flex flex-col gap-[18px] rounded-[20px] border border-line bg-surface p-4 md:flex-row md:items-center md:gap-6 md:p-6 lg:flex-col lg:items-stretch lg:gap-[22px] lg:rounded-3xl"
        >
          <Image
            src={founder.image}
            alt={founder.name}
            width={400}
            height={400}
            priority
            className="h-60 w-full rounded-xl object-cover md:h-48 md:w-48 md:shrink-0 lg:h-[300px] lg:w-full lg:rounded-[14px]"
          />
          <div className="flex flex-col gap-[18px] px-1 pb-1 md:p-0 lg:gap-[22px]">
            <div className="flex flex-col gap-1">
              <p className="font-serif text-2xl leading-[30px] font-medium lg:text-[28px] lg:leading-[34px]">{founder.name}</p>
              <p className="text-muted">{founder.role}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-line px-3.5 py-2 text-sm font-semibold text-gold">CFA Charterholder</span>
              <span className="rounded-full border border-line px-3.5 py-2 text-sm font-semibold text-gold">
                MBA, Schulich<span className="hidden lg:inline"> School of Business</span>
              </span>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
