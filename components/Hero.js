"use client";

import { siteConfig } from "@/data/siteConfig";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

const badges = [
  "Birthday Cakes",
  "Anniversary Cakes",
  "Custom Orders",
  "Freshly Made",
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative px-5 py-16 sm:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-[32rem] max-w-7xl rounded-[3rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.55),rgba(255,241,247,0.08)_45%,rgba(255,241,247,0)_75%)] blur-3xl" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 rounded-[2rem] bg-transparent p-0 lg:grid-cols-[1fr_0.95fr] lg:gap-12">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="flex h-full rounded-[2rem] bg-[linear-gradient(180deg,rgba(255,241,247,0.28),rgba(255,241,247,0.08))] p-6 shadow-[0_8px_32px_rgba(201,20,93,0.04)] ring-1 ring-white/30 backdrop-blur-[2px] sm:p-10 lg:p-14"
        >
          <div className="flex h-full flex-col justify-between gap-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-[color:var(--pink)]">
                {siteConfig.businessName}
              </p>
              <h1 className="mt-5 max-w-3xl font-serif text-5xl font-semibold leading-[1.04] text-[color:var(--text)] sm:text-6xl lg:text-7xl">
                Fresh Cakes for Every Celebration
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[color:var(--muted)]">
                Handcrafted cakes made fresh for your sweetest moments. Choose a
                design, add it to cart, and send your order directly on WhatsApp.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/cakes"
                  className="inline-flex items-center justify-center rounded-full bg-[color:var(--pink)] px-7 py-4 text-sm font-bold text-white shadow-[0_18px_40px_rgba(236,27,114,0.28)] transition hover:bg-[color:var(--pink-dark)] focus:outline-none focus:ring-4 focus:ring-[color:var(--border)]"
                >
                  Order Now
                </Link>
                <Link
                  href="/cakes"
                  className="inline-flex items-center justify-center rounded-full bg-[color:var(--cream)] px-7 py-4 text-sm font-bold text-[color:var(--text)] ring-1 ring-[color:var(--border)] transition hover:text-[color:var(--pink)] focus:outline-none focus:ring-4 focus:ring-[color:var(--border)]"
                >
                  Explore Cakes
                </Link>
              </div>
              <div className="flex flex-nowrap gap-3 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {badges.map((badge) => (
                  <span
                    key={badge}
                    className="whitespace-nowrap rounded-full border border-[color:var(--border)] bg-white/45 px-3 py-1.5 text-xs font-semibold text-[color:var(--pink-dark)] shadow-[0_8px_20px_rgba(201,20,93,0.05)] backdrop-blur-sm"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto h-full w-full max-w-lg"
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <div className="absolute -left-5 top-10 h-20 w-20 rounded-full bg-[color:var(--cream)]" />
          <div className="absolute -right-4 bottom-10 h-24 w-24 rounded-full bg-[color:var(--soft-pink)]" />
          <div className="relative h-full min-h-[520px] overflow-hidden rounded-[2rem] bg-transparent shadow-[0_24px_70px_rgba(201,20,93,0.12)] ring-1 ring-white/50 backdrop-blur-sm">
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
