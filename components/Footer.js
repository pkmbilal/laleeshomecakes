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
          <div className="mt-4 grid gap-2 text-sm text-[color:var(--muted)]">
            <span>{siteConfig.phone}</span>
            <span>{siteConfig.email}</span>
            <span>{siteConfig.address}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
