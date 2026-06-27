"use client";

import { siteConfig } from "@/data/siteConfig";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

const badges = [
  { label: "Birthday Cakes", mobileLabel: "Birthday" },
  { label: "Anniversary Cakes", mobileLabel: "Anniv." },
  { label: "Custom Orders", mobileLabel: "Custom" },
  { label: "Freshly Made", mobileLabel: "Fresh" },
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative px-5 py-8 sm:px-8 sm:py-16 lg:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-[32rem] max-w-7xl rounded-[3rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.55),rgba(255,241,247,0.08)_45%,rgba(255,241,247,0)_75%)] blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-6 rounded-[2rem] bg-transparent p-0 sm:gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-12">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="flex h-full sm:rounded-[2rem] sm:bg-[linear-gradient(180deg,rgba(255,241,247,0.34),rgba(255,241,247,0.1))] sm:p-10 sm:shadow-[0_8px_32px_rgba(201,20,93,0.04)] sm:ring-1 sm:ring-white/40 sm:backdrop-blur-[2px] lg:p-14"
        >
          <div className="flex h-full flex-col justify-between gap-6 sm:gap-8">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[color:var(--pink)] sm:text-sm sm:tracking-[0.24em]">
                {siteConfig.businessName}
              </p>
              <h1 className="mt-3 max-w-3xl font-serif text-[1.95rem] font-semibold leading-[1.05] text-[color:var(--text)] sm:mt-5 sm:text-6xl sm:leading-[1.04] lg:text-7xl">
                Fresh Cakes for Every Celebration
              </h1>
              <p className="mt-3 max-w-xl text-sm leading-6 text-[color:var(--muted)] sm:mt-6 sm:text-lg sm:leading-8">
                Handcrafted cakes made fresh for your sweetest moments. Choose a
                design, add it to cart, and send your order directly on WhatsApp.
              </p>
            </div>

            <div className="flex flex-col gap-5 sm:gap-8">
              <div className="grid gap-2 sm:flex sm:flex-row sm:gap-3">
                <Link
                  href="/cakes"
                  className="inline-flex min-h-10 w-full items-center justify-center rounded-full bg-[color:var(--pink)] px-4 py-2 text-xs font-bold text-white shadow-[0_10px_24px_rgba(236,27,114,0.20)] transition hover:bg-[color:var(--pink-dark)] focus:outline-none focus:ring-4 focus:ring-[color:var(--border)] sm:min-h-12 sm:w-auto sm:px-7 sm:py-4 sm:text-sm sm:shadow-[0_18px_40px_rgba(236,27,114,0.28)]"
                >
                  Order Now
                </Link>
                <Link
                  href="/cakes"
                  className="inline-flex min-h-10 w-full items-center justify-center rounded-full bg-[color:var(--cream)] px-4 py-2 text-xs font-bold text-[color:var(--text)] ring-1 ring-[color:var(--border)] transition hover:text-[color:var(--pink)] focus:outline-none focus:ring-4 focus:ring-[color:var(--border)] sm:min-h-12 sm:w-auto sm:px-7 sm:py-4 sm:text-sm"
                >
                  Explore Cakes
                </Link>
              </div>
              <div className="hidden pb-1 sm:flex sm:flex-nowrap sm:gap-3 sm:overflow-x-auto sm:[scrollbar-width:none] sm:[&::-webkit-scrollbar]:hidden">
                {badges.map((badge) => (
                  <span
                    key={badge.label}
                    className="min-w-0 whitespace-nowrap rounded-full border border-[color:var(--border)] bg-white/55 px-1.5 py-1.5 text-center text-[9px] font-semibold text-[color:var(--pink-dark)] shadow-[0_8px_20px_rgba(201,20,93,0.05)] backdrop-blur-sm sm:px-3 sm:text-xs"
                    title={badge.label}
                  >
                    <span className="sm:hidden">{badge.mobileLabel}</span>
                    <span className="hidden sm:inline">{badge.label}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto h-full w-full min-w-0 sm:max-w-lg"
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <div className="absolute left-2 top-8 hidden h-12 w-12 rounded-full bg-[color:var(--cream)] sm:-left-5 sm:top-10 sm:block sm:h-20 sm:w-20" />
          <div className="absolute bottom-8 right-2 hidden h-14 w-14 rounded-full bg-[color:var(--soft-pink)] sm:-right-4 sm:bottom-10 sm:block sm:h-24 sm:w-24" />
          <div className="relative h-[340px] overflow-hidden rounded-[1.5rem] bg-[linear-gradient(180deg,var(--cream),var(--soft-pink))] shadow-[0_12px_30px_rgba(201,20,93,0.10)] ring-1 ring-white/50 sm:hidden">
            <Image
              src="/images/hero-cake-mobile-fit.png"
              alt="Elegant pink celebration cake"
              fill
              priority
              sizes="90vw"
              className="object-cover"
            />
          </div>
          <div className="relative hidden h-full overflow-hidden rounded-[1.5rem] bg-transparent shadow-[0_12px_30px_rgba(201,20,93,0.10)] ring-1 ring-white/50 backdrop-blur-sm sm:block sm:min-h-[460px] sm:rounded-[2rem] sm:shadow-[0_18px_48px_rgba(201,20,93,0.12)] lg:min-h-[520px]">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,241,247,0.28))]" />
            <Image
              src="/images/hero-cake.png"
              alt="Elegant pink celebration cake"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
