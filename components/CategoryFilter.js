"use client";

export default function CategoryFilter({ categories, selected, onSelect }) {
  return (
    <div className="flex flex-wrap justify-center gap-3" aria-label="Cake categories">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onSelect(category)}
          className={`rounded-full px-5 py-3 text-sm font-bold transition focus:outline-none focus:ring-4 focus:ring-[color:var(--border)] ${
            selected === category
              ? "bg-[color:var(--pink)] text-white shadow-[0_12px_30px_rgba(236,27,114,0.25)]"
              : "bg-white text-[color:var(--text)] ring-1 ring-[color:var(--border)] hover:text-[color:var(--pink)]"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
