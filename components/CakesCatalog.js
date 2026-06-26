"use client";

import CategoryFilter from "@/components/CategoryFilter";
import ProductGrid from "@/components/ProductGrid";
import { categories, products } from "@/data/products";
import { useMemo, useState } from "react";

export default function CakesCatalog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") {
      return products;
    }

    return products.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="mt-10">
      <CategoryFilter
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <div className="mt-10">
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
}
