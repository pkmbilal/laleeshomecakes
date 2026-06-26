"use client";

import { siteConfig } from "@/data/siteConfig";
import { useCart } from "@/components/CartContext";
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

      {isOpen && (
        <nav
          className="border-t border-[color:var(--border)] bg-white px-5 py-4 md:hidden"
          aria-label="Mobile primary"
        >
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-3 text-sm font-semibold text-[color:var(--text)] hover:bg-[color:var(--soft-pink)]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
