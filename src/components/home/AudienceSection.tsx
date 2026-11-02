"use client";

import { Em } from "@/components/shared/Em";
import { ArrowRight } from "@/components/shared/Icon";
import { Reveal } from "@/components/shared/Reveal";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { buttonStyles } from "@/components/shared/buttonStyles";
import { audiences } from "@/lib/data/company";
import { cn } from "@/lib/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

const pad = (n: number) => String(n).padStart(2, "0");

// Tabs: pills that scroll sideways below lg, a vertical index beside the panel at lg
export function AudienceSection() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const audience = audiences[active];

  // Arrow keys, Home and End move between tabs and select them
  function onKeyDown(e: React.KeyboardEvent) {
    const last = audiences.length - 1;
    const next = { ArrowRight: active + 1, ArrowDown: active + 1, ArrowLeft: active - 1, ArrowUp: active - 1, Home: 0, End: last }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    select(next < 0 ? last : next > last ? 0 : next, true);
  }

  // Keeps the chosen pill in view when the tabs scroll sideways on small screens
  function select(i: number, focus = false) {
    setActive(i);
    const tab = tabs.current[i];
    if (focus) tab?.focus();
    const list = tab?.parentElement;
    if (!tab || !list || list.scrollWidth <= list.clientWidth) return;
    const offset = tab.getBoundingClientRect().left - list.getBoundingClientRect().left;
    list.scrollBy({ left: offset - 20, behavior: "smooth" });
  }

  return (
    <section className="container-page section-y flex flex-col gap-8 md:gap-12">
      <SectionTitle
        eyebrow="Who we help"
        title={<>Who we work <Em>alongside</Em></>}
        description="Four kinds of business, one dependable advisor. Pick the one that sounds like you."
      />
      <Reveal className="grid gap-5 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-0 lg:overflow-hidden lg:rounded-3xl lg:border lg:border-line">
        <div
          role="tablist"
          aria-label="Who we help"
          onKeyDown={onKeyDown}
          className="-mx-5 flex gap-2 overflow-x-auto px-5 [scrollbar-width:none] md:-mx-8 md:px-8 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:border-r lg:border-line lg:px-0"
        >
          {audiences.map((a, i) => {
            const selected = i === active;
            return (
              <button
                key={a.id}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                id={`audience-tab-${a.id}`}
                role="tab"
                type="button"
                aria-selected={selected}
                aria-controls="audience-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => select(i)}
                className={cn(
                  "relative flex h-11 shrink-0 items-center gap-2.5 rounded-full border px-4 text-sm font-semibold whitespace-nowrap transition-colors",
                  "lg:h-auto lg:gap-5 lg:rounded-none lg:border-0 lg:border-b lg:border-line lg:px-8 lg:py-7 lg:text-left lg:whitespace-normal lg:last:border-b-0",
                  selected ? "border-gold bg-surface-2 text-fg lg:bg-surface" : "border-line-strong text-muted hover:text-fg lg:hover:bg-surface/50"
                )}
              >
                {/* Gold bar on the active row at lg */}
                <span aria-hidden="true" className={cn("absolute inset-y-0 left-0 hidden w-[3px] bg-gold transition-opacity lg:block", selected ? "opacity-100" : "opacity-0")} />
                <span className={cn("text-label", selected ? "text-gold" : "text-muted")}>{pad(i + 1)}</span>
                <span className="lg:hidden">{a.short}</span>
                <span className="hidden font-serif text-[22px] leading-7 font-medium lg:inline">{a.title}</span>
              </button>
            );
          })}
        </div>

        <div
          id="audience-panel"
          role="tabpanel"
          aria-labelledby={`audience-tab-${audience.id}`}
          tabIndex={0}
          className="relative overflow-hidden rounded-2xl border border-line bg-surface lg:rounded-none lg:border-0"
        >
          <div aria-hidden="true" className="bg-ledger bg-ledger-fade pointer-events-none absolute inset-0" />
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={audience.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.2, 0.6, 0.2, 1] }}
              className="relative flex flex-col gap-7 p-6 md:p-9 lg:p-12"
            >
              <div className="flex flex-col gap-3">
                <p className="text-label text-gold">
                  {pad(active + 1)} / {pad(audiences.length)}
                </p>
                <h3 className="text-h3">{audience.title}</h3>
                <p className="max-w-[560px] leading-[26px] text-muted md:text-lg md:leading-[29px]">{audience.description}</p>
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-label text-muted">What Frank handles</p>
                <ul className="border-t border-line">
                  {audience.handles.map((item, i) => (
                    <li key={item} className="grid grid-cols-[36px_minmax(0,1fr)] items-baseline border-b border-line py-3">
                      <span className="text-label text-gold">{pad(i + 1)}</span>
                      <span className="leading-6">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <p className="text-label text-muted">Typical first step</p>
                  <p className="max-w-[560px] font-serif text-lg leading-7 italic md:text-xl md:leading-8">{audience.firstStep}</p>
                </div>
                <div className="flex flex-col gap-3 md:flex-row md:flex-wrap md:items-center md:gap-6">
                  <Link href="/contact" className={buttonStyles("primary", "md", "w-full md:w-auto")}>
                    Book a consultation
                  </Link>
                  {audience.href && (
                    <Link href={audience.href} className="inline-flex items-center gap-2 font-semibold text-gold transition-colors hover:text-fg">
                      Our blockchain focus <ArrowRight />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Reveal>
    </section>
  );
}
