export default function SectionHeading({ eyebrow, title, text, align = "center" }) {
  return (
    <div
      className={`mx-auto max-w-3xl ${
        align === "left" ? "text-left" : "text-center"
      }`}
    >
      {eyebrow && (
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--pink)]">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[color:var(--text)] sm:text-5xl">
        {title}
      </h2>
      {text && (
        <p className="mt-4 text-base leading-7 text-[color:var(--muted)] sm:text-lg">
          {text}
        </p>
      )}
    </div>
  );
}
