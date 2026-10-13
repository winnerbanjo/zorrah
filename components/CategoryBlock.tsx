import React from "react";
import { MenuCategory } from "@/data/menu";
import MenuItemRow from "./MenuItemRow";

interface CategoryBlockProps {
  category: MenuCategory;
}

export default function CategoryBlock({ category }: CategoryBlockProps) {
  return (
    <article
      id={`cat-${category.id}`}
      className="scroll-category pt-3 pb-2"
    >
      {/* Category Header */}
      <div className="mb-3">
        <div className="flex items-center justify-between pb-1.5 border-b border-[#B58B45]/45">
          <h4 className="font-serif text-[22px] sm:text-[25px] md:text-[27px] font-bold tracking-wider text-[#B5121B] uppercase leading-none">
            {category.name}
          </h4>
          <span className="text-[11px] font-sans text-[#5A5650] uppercase tracking-widest pl-2">
            {category.items.length} {category.items.length === 1 ? "item" : "items"}
          </span>
        </div>
      </div>

      {/* Menu Items List */}
      <ul className="space-y-0.5">
        {category.items.map((item) => (
          <MenuItemRow key={item.id} item={item} />
        ))}
      </ul>
    </article>
  );
}
