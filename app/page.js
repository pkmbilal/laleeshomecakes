import Hero from "@/components/Hero";
import MotionSection from "@/components/MotionSection";
import PageShell from "@/components/PageShell";
import ProductGrid from "@/components/ProductGrid";
import SectionHeading from "@/components/SectionHeading";
import { products } from "@/data/products";
import Link from "next/link";

export const metadata = {
  title: "Lalees Home Cakes | Premium Cakes for Every Celebration",
  description:
    "Fresh handmade birthday, anniversary, custom cakes, cupcakes, and desserts from Lalees Home Cakes.",
};

const featuredProducts = products.filter((product) => product.featured);

export default function Home() {
  return (
    <PageShell>
      <Hero />

      <MotionSection className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Featured cakes"
            title="Sweet designs for memorable moments"
            text="Our best-loved cakes are made with soft sponge, fresh cream, and decoration tailored for your celebration."
          />
          <div className="mt-10">
            <ProductGrid products={featuredProducts} />
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/cakes"
              className="inline-flex rounded-full bg-[color:var(--cream)] px-7 py-4 text-sm font-bold text-[color:var(--text)] ring-1 ring-[color:var(--border)] transition hover:text-[color:var(--pink)]"
            >
              View All Cakes
            </Link>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="px-5 pb-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {[
            ["Made Fresh", "Every order is prepared with care for the date of your celebration."],
            ["Custom Designs", "Share your theme, colors, flavor ideas, and message for a personal cake."],
            ["WhatsApp Ordering", "Add cakes to cart and send the complete order details directly on WhatsApp."],
          ].map(([title, text]) => (
            <article
              key={title}
              className="rounded-[1.75rem] bg-white/80 p-6 shadow-[0_18px_50px_rgba(201,20,93,0.08)] ring-1 ring-[color:var(--border)]"
            >
              <h2 className="font-serif text-2xl font-semibold text-[color:var(--text)]">
                {title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
                {text}
              </p>
            </article>
          ))}
        </div>
      </MotionSection>
    </PageShell>
  );
}
