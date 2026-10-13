import React from "react";
import { MenuSection } from "@/data/menu";
import CategoryBlock from "./CategoryBlock";

interface MenuSectionViewProps {
  section: MenuSection;
}

export default function MenuSectionView({ section }: MenuSectionViewProps) {
  return (
    <section
      id={section.id}
      className="zorrah-section scroll-section pt-8 sm:pt-12 pb-6 border-b border-[#B58B45]/20 last:border-b-0"
    >
      {/* Section Title Banner */}
      <div className="zorrah-section-heading text-center mb-8 sm:mb-10">
        <div className="inline-flex items-center justify-center gap-3 mb-2">
          <span className="w-8 sm:w-12 h-px bg-[#B58B45]" />
          <span className="text-[11px] sm:text-xs font-sans uppercase tracking-[0.3em] text-[#B58B45] font-semibold">
            Zorrah Selection
          </span>
          <span className="w-8 sm:w-12 h-px bg-[#B58B45]" />
        </div>
        <h3 className="zorrah-section-title font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-[0.12em] text-[#B5121B] uppercase">
          {section.displayTitle}
        </h3>
        <div className="w-16 h-0.5 bg-[#B58B45] mx-auto mt-2.5 opacity-80" />
      </div>

      {/* Categories Grid */}
      <div className="zorrah-grid grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-14 gap-y-6 sm:gap-y-8">
        {section.categories.map((category) => (
          <CategoryBlock key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}
