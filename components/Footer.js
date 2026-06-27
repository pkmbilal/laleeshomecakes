import { siteConfig } from "@/data/siteConfig";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)] bg-white/70">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="font-serif text-2xl font-semibold text-[color:var(--text)]">
            {siteConfig.businessName}
          </p>
          <p className="mt-3 max-w-md text-sm leading-6 text-[color:var(--muted)]">
            Handcrafted cakes made fresh for birthdays, anniversaries, and
            custom celebrations.
          </p>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[color:var(--pink)]">
            Explore
          </p>
          <div className="mt-4 grid gap-2 text-sm text-[color:var(--muted)]">
            <Link href="/cakes">Cakes</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/cart">Cart</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[color:var(--pink)]">
            Contact
          </p>
          <div className="mt-4 grid gap-3 text-sm text-[color:var(--muted)]">
            <span className="flex items-start gap-3">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="mt-0.5 size-4 shrink-0 text-[color:var(--pink)]"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.91.33 1.8.62 2.65a2 2 0 0 1-.45 2.11L8 9.76a16 16 0 0 0 6.24 6.24l1.28-1.28a2 2 0 0 1 2.11-.45c.85.29 1.74.5 2.65.62A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>{siteConfig.phone}</span>
            </span>
            <span className="flex items-start gap-3">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="mt-0.5 size-4 shrink-0 text-[color:var(--pink)]"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              <span>{siteConfig.email}</span>
            </span>
            <span className="flex items-start gap-3">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="mt-0.5 size-4 shrink-0 text-[color:var(--pink)]"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{siteConfig.address}</span>
            </span>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Lalees Home Cakes on Instagram"
              className="inline-flex w-fit items-center gap-3 text-[color:var(--muted)] transition hover:text-[color:var(--pink-dark)] focus:outline-none focus:ring-4 focus:ring-[color:var(--border)]"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="size-5 shrink-0 text-[color:var(--pink)]"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <path d="M17.5 6.5h.01" />
              </svg>
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
