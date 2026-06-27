"use client";

import { siteConfig } from "@/data/siteConfig";
import { useCart } from "@/components/CartContext";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/cakes", label: "Cakes" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const { count } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[color:var(--border)]/70 bg-[color:var(--soft-pink)]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label={`${siteConfig.businessName} home`}
            onClick={() => setIsOpen(false)}
          >
            <span className="flex size-11 items-center justify-center rounded-full bg-white text-lg font-bold text-[color:var(--pink)] shadow-sm ring-1 ring-[color:var(--border)]">
              LH
            </span>
            <span>
              <span className="block font-serif text-xl font-semibold leading-none text-[color:var(--text)]">
                {siteConfig.businessName}
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--muted)]">
                Home bakery
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold transition hover:text-[color:var(--pink)] ${
                  pathname === item.href
                    ? "text-[color:var(--pink)]"
                    : "text-[color:var(--text)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/cart"
              className="relative inline-flex size-11 items-center justify-center rounded-full bg-white text-[color:var(--text)] shadow-sm ring-1 ring-[color:var(--border)] transition hover:text-[color:var(--pink)]"
              aria-label={`Cart with ${count} items`}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="size-5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M6 6h15l-1.5 8.5H8L6 3H3" />
                <path d="M9 19.5h.01" />
                <path d="M18 19.5h.01" />
              </svg>
              {count > 0 && (
                <span className="absolute -right-1 -top-1 flex min-w-5 items-center justify-center rounded-full bg-[color:var(--pink)] px-1.5 text-xs font-bold text-white">
                  {count}
                </span>
              )}
            </Link>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-full bg-white text-[color:var(--text)] shadow-sm ring-1 ring-[color:var(--border)] md:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((current) => !current)}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="size-5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
              >
                {isOpen ? (
                  <>
                    <path d="M6 6l12 12" />
                    <path d="M18 6L6 18" />
                  </>
                ) : (
                  <>
                    <path d="M4 7h16" />
                    <path d="M4 12h16" />
                    <path d="M4 17h16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] md:hidden">
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              className="absolute inset-0 bg-[rgba(30,30,30,0.35)]"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.nav
              className="absolute right-0 top-0 flex h-full w-[86vw] max-w-sm flex-col border-l border-[color:var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,241,247,0.96))] px-5 py-6 shadow-[0_20px_60px_rgba(201,20,93,0.18)]"
              aria-label="Mobile primary"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              <div className="flex items-start justify-between gap-4">
                <Link
                  href="/"
                  className="flex items-center gap-3"
                  aria-label={`${siteConfig.businessName} home`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="flex size-11 items-center justify-center rounded-full bg-white text-lg font-bold text-[color:var(--pink)] shadow-sm ring-1 ring-[color:var(--border)]">
                    LH
                  </span>
                  <span>
                    <span className="block font-serif text-xl font-semibold leading-none text-[color:var(--text)]">
                      {siteConfig.businessName}
                    </span>
                    <span className="text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--muted)]">
                      Home bakery
                    </span>
                  </span>
                </Link>
                <button
                  type="button"
                  className="inline-flex size-11 items-center justify-center rounded-full bg-white text-[color:var(--text)] shadow-sm ring-1 ring-[color:var(--border)]"
                  aria-label="Close navigation menu"
                  onClick={() => setIsOpen(false)}
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="size-5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                  >
                    <path d="M6 6l12 12" />
                    <path d="M18 6L6 18" />
                  </svg>
                </button>
              </div>

              <div className="mt-8 grid gap-3 overflow-y-auto">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-2xl px-4 py-4 text-base font-semibold transition ${
                      pathname === item.href
                        ? "border border-[#dc7fa8] bg-[#fde4ee] text-[color:var(--pink-dark)]"
                        : "border border-[#e7a8c2] bg-[#fff8fb] text-[color:var(--text)] hover:border-[#dc7fa8] hover:bg-[#fde4ee]"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.nav>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
