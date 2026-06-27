import PageShell from "@/components/PageShell";
import QuickEnquiryForm from "@/components/QuickEnquiryForm";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/data/siteConfig";

export const metadata = {
  title: "Contact | Lalees Home Cakes",
  description:
    "Contact Lalees Home Cakes for birthdays, anniversaries, custom cakes, cupcakes, and dessert orders.",
};

export default function ContactPage() {
  const detailCards = [
    {
      title: "Phone",
      value: siteConfig.phone,
      icon: (
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.91.33 1.8.62 2.65a2 2 0 0 1-.45 2.11L8 9.76a16 16 0 0 0 6.24 6.24l1.28-1.28a2 2 0 0 1 2.11-.45c.85.29 1.74.5 2.65.62A2 2 0 0 1 22 16.92z" />
      ),
    },
    {
      title: "Email",
      value: siteConfig.email,
      icon: (
        <>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </>
      ),
    },
    {
      title: "Location",
      value: siteConfig.address,
      icon: (
        <>
          <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z" />
          <circle cx="12" cy="10" r="3" />
        </>
      ),
    },
    {
      title: "Delivery",
      value: siteConfig.deliveryAreas,
      icon: (
        <>
          <path d="M3 7h11v10H3z" />
          <path d="M14 10h4l3 3v4h-7z" />
          <circle cx="7" cy="18" r="2" />
          <circle cx="18" cy="18" r="2" />
        </>
      ),
    },
  ];

  return (
    <PageShell>
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Contact"
            title="Plan your next cake order"
            text="Send your celebration date, cake idea, delivery preference, and any design notes."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {detailCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[1.5rem] bg-white/85 p-5 shadow-[0_18px_50px_rgba(201,20,93,0.08)] ring-1 ring-[color:var(--border)]"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-full bg-[color:var(--soft-pink)] text-[color:var(--pink)]">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="size-5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.9"
                  >
                    {card.icon}
                  </svg>
                </span>
                <h2 className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-[color:var(--pink)]">
                  {card.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
                  {card.value}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8">
            <QuickEnquiryForm />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
