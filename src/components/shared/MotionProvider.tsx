"use client";

import { MotionConfig } from "framer-motion";

// Honour prefers-reduced-motion everywhere: transforms are skipped, only opacity and colour change
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
