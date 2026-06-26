import MotionSection from "@/components/MotionSection";
import PageShell from "@/components/PageShell";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";

export const metadata = {
  title: "About | Lalees Home Cakes",
  description:
    "Learn about Lalees Home Cakes, a home bakery focused on fresh handmade celebration cakes and custom designs.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our story"
            title="Homemade care with a premium finish"
            text="Lalees Home Cakes is built around the simple joy of making celebrations feel personal, beautiful, and sweet."
          />
        </div>
      </section>

      <MotionSection className="px-5 pb-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-[2rem] bg-white/80 p-6 shadow-[0_24px_80px_rgba(201,20,93,0.10)] ring-1 ring-white sm:p-10 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-[color:var(--cream)]">
            <Image
              src="/images/hero-cake.png"
              alt="Fresh handmade cake with pink decoration"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="font-serif text-4xl font-semibold leading-tight text-[color:var(--text)] sm:text-5xl">
              Cakes made for the people you love
            </h1>
            <div className="mt-6 grid gap-4 text-base leading-8 text-[color:var(--muted)]">
              <p>
                Each cake is prepared fresh with attention to flavor, texture,
                and decoration, whether it is a small family birthday or a
                custom celebration centerpiece.
              </p>
              <p>
                The style is elegant and celebration-focused: soft colors,
                thoughtful finishing, quality ingredients, and a smooth order
                flow through WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="px-5 pb-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {[
            ["Freshness", "Prepared close to your celebration date for soft sponge and clean cream finish."],
            ["Handmade Detail", "Piping, toppings, and theme details are finished by hand for every order."],
            ["Custom Service", "Share your occasion and preferences so the cake fits your moment."],
          ].map(([title, text]) => (
            <article
              key={title}
              className="rounded-[1.75rem] bg-white p-6 ring-1 ring-[color:var(--border)]"
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
