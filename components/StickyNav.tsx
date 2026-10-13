"use client";

import React, { useEffect, useRef } from "react";
import { MENU_SECTIONS } from "@/data/menu";

interface StickyNavProps {
  activeSectionId: string;
  onSelectSection: (sectionId: string) => void;
}

export default function StickyNav({
  activeSectionId,
  onSelectSection,
}: StickyNavProps) {
  const currentSection =
    MENU_SECTIONS.find((s) => s.id === activeSectionId) || MENU_SECTIONS[0];
  const chipsScrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll the chips list to start when switching major section
  useEffect(() => {
    if (chipsScrollRef.current) {
      chipsScrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, [activeSectionId]);

  const handleCategoryClick = (categoryId: string) => {
    const el = document.getElementById(`cat-${categoryId}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      aria-label="Menu section navigation"
      className="sticky top-0 z-30 w-full bg-[#F8F3EA]/95 backdrop-blur-md border-b border-[#B58B45]/25 shadow-xs"
    >
      <div className="max-w-4xl mx-auto px-3 py-2 sm:py-2.5">
        {/* Main 3 Navigation Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar">
          {MENU_SECTIONS.map((section) => {
            const isSelected = activeSectionId === section.id;
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => onSelectSection(section.id)}
                className={`min-h-[44px] px-4 sm:px-6 py-2 rounded-full font-serif text-[13px] sm:text-[15px] font-bold tracking-wider uppercase transition-all duration-200 shrink-0 select-none cursor-pointer border ${
                  isSelected
                    ? "bg-[#B5121B] text-white border-[#B5121B] shadow-md ring-2 ring-[#B58B45]/30"
                    : "bg-[#EFE5D6]/90 text-[#191919] border-[#B58B45]/35 hover:bg-[#EFE5D6] hover:border-[#B58B45]/70"
                }`}
              >
                {section.name}
              </button>
            );
          })}
        </div>

        {/* Sub-Category Chips */}
        <div
          ref={chipsScrollRef}
          className="flex items-center gap-1.5 overflow-x-auto no-scrollbar mt-2 pt-1 border-t border-[#B58B45]/15 scroll-smooth"
        >
          <span className="text-[10px] sm:text-[11px] font-sans uppercase font-bold text-[#B58B45] tracking-widest shrink-0 pl-1 pr-1">
            Jump to:
          </span>
          {currentSection.categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => handleCategoryClick(category.id)}
              className="min-h-[36px] px-3 py-1 text-xs font-sans font-medium text-[#191919] bg-[#EFE5D6]/70 hover:bg-[#B5121B] hover:text-white rounded-md whitespace-nowrap transition-colors border border-[#B58B45]/25 cursor-pointer active:scale-95"
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
