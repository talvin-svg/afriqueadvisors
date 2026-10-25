"use client";

import { Logo } from "@/components/shared/Logo";
import { buttonStyles } from "@/components/shared/buttonStyles";
import { companyInfo } from "@/lib/data/company";
import { cn } from "@/lib/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { href: "/about", label: "About", match: (p: string) => p === "/about" },
  { href: "/#services", label: "Services", match: (p: string) => p.startsWith("/services") },
  { href: "/contact", label: "Contact", match: (p: string) => p === "/contact" },
];

const arrow = (
  <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="#E9B949" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Drawer: lock page scroll, trap focus, close on Esc, return focus to the menu button
  useEffect(() => {
    if (!isMenuOpen) return;
    const drawer = drawerRef.current;
    const openButton = openButtonRef.current;
    document.body.style.overflow = "hidden";
    drawer?.querySelector<HTMLElement>("button, a")?.focus();

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        return;
      }
      if (e.key !== "Tab" || !drawer) return;
      const focusable = drawer.querySelectorAll<HTMLElement>("a, button");
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    drawer?.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      drawer?.removeEventListener("keydown", handleKey);
      openButton?.focus();
    };
  }, [isMenuOpen]);

  const close = () => setIsMenuOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-ink transition-colors duration-150",
        isScrolled ? "border-line" : "border-transparent"
      )}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Link href="/" aria-label="Afrique Advisors home">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-6 text-base font-medium md:flex lg:gap-9">
          {navLinks.map((link) => {
            const active = link.match(pathname);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn("pb-0.5 transition-colors hover:text-gold", active && "shadow-[0_2px_0_#E9B949]")}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="/contact" className={buttonStyles("primary", "md")}>
            Book a consultation
          </Link>
        </nav>

        <button
          ref={openButtonRef}
          onClick={() => setIsMenuOpen(true)}
          className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-line-strong md:hidden"
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg aria-hidden="true" className="h-[22px] w-[22px]" viewBox="0 0 24 24" fill="none" stroke="#F5EFE8" strokeWidth="2" strokeLinecap="round">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              key="scrim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              transition={{ duration: 0.28 }}
              className="fixed inset-0 z-50 bg-black/60 md:hidden"
              onClick={close}
            />
            <motion.div
              key="drawer"
              id="mobile-menu"
              ref={drawerRef}
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%", transition: { duration: 0.2, ease: [0.2, 0.6, 0.2, 1] } }}
              transition={{ duration: 0.28, ease: [0.2, 0.6, 0.2, 1] }}
              className="fixed inset-0 z-50 flex flex-col bg-surface shadow-[0_24px_64px_rgba(0,0,0,0.55)] md:hidden"
            >
              <div className="flex h-16 items-center justify-between border-b border-line px-5">
                <Logo />
                <button
                  onClick={close}
                  className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-line-strong"
                  aria-label="Close menu"
                >
                  <svg aria-hidden="true" className="h-[22px] w-[22px]" viewBox="0 0 24 24" fill="none" stroke="#F5EFE8" strokeWidth="2" strokeLinecap="round">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-1 flex-col px-5 py-3">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: 0.1 + i * 0.03 }}
                  >
                    <Link
                      href={link.href}
                      onClick={close}
                      aria-current={link.match(pathname) ? "page" : undefined}
                      className="flex min-h-16 items-center justify-between border-b border-line font-serif text-[28px] leading-[34px] font-medium"
                    >
                      {link.label}
                      {arrow}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-col gap-4 border-t border-line p-5">
                <Link href="/contact" onClick={close} className={buttonStyles("primary", "lg", "w-full")}>
                  Book a consultation
                </Link>
                <p className="text-center text-sm leading-[22px] text-muted">
                  {companyInfo.phone} · {companyInfo.email}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
