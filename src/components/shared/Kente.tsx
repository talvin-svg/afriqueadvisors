"use client";

import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";

// Full-width divider: fades in to 55% when it enters view
export function KenteDivider({ className }: { className?: string }) {
  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.55 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={cn("bg-kente h-4 w-full", className)}
    />
  );
}

// Faint corner block behind headers and CTA panels, never behind body text
export function KenteCorner({ className, dark }: { className?: string; dark?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute top-0 right-0",
        dark ? "bg-kente-dark opacity-[0.16]" : "bg-kente opacity-[0.12]",
        className
      )}
    />
  );
}
