"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import Header from "./Header";
import StickyNav from "./StickyNav";
import SearchBar from "./SearchBar";
import MenuSectionView from "./MenuSectionView";
import CategoryBlock from "./CategoryBlock";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
import { MENU_SECTIONS } from "@/data/menu";

export default function MenuPage() {
  const [activeSectionId, setActiveSectionId] = useState<string>("food");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const isSearching = searchQuery.trim().length > 0;

  // Filter sections and items based on search query
  const filteredSections = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return MENU_SECTIONS;

    return MENU_SECTIONS.map((section) => {
      const filteredCategories = section.categories
        .map((cat) => ({
          ...cat,
          items: cat.items.filter((item) =>
            item.name.toLowerCase().includes(q)
          ),
        }))
        .filter((cat) => cat.items.length > 0);

      return {
        ...section,
        categories: filteredCategories,
      };
    }).filter((section) => section.categories.length > 0);
  }, [searchQuery]);

  // Count total matching items
  const totalResultCount = useMemo(() => {
    if (!isSearching) return 0;
    return filteredSections.reduce(
      (acc, sec) =>
        acc +
        sec.categories.reduce((catAcc, cat) => catAcc + cat.items.length, 0),
      0
    );
  }, [filteredSections, isSearching]);

  // Handle section tab selection
  const handleSelectSection = useCallback((sectionId: string) => {
    setActiveSectionId(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // Scroll spy to update active section while scrolling
  useEffect(() => {
    if (isSearching) return;

    const sectionIds = ["food", "afro-fusion", "drinks"];
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSectionId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-25% 0px -65% 0px",
      threshold: 0,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isSearching]);

  return (
    <div className="min-h-screen bg-[#F8F3EA] text-[#191919] flex flex-col selection:bg-[#B5121B]/15 selection:text-[#B5121B]">
      {/* 1. Header */}
      <Header />

      {/* 2. Search Bar */}
      <div className="w-full bg-[#F8F3EA] pt-2 pb-1 border-b border-[#B58B45]/15">
        <SearchBar
          query={searchQuery}
          onChange={setSearchQuery}
          resultCount={totalResultCount}
          isSearching={isSearching}
        />
      </div>

      {/* 3. Sticky Navigation */}
      {!isSearching && (
        <StickyNav
          activeSectionId={activeSectionId}
          onSelectSection={handleSelectSection}
        />
      )}

      {/* 4. Menu Sections */}
      <main className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grow">
        {isSearching ? (
          // Search Results View
          <div className="pt-6 sm:pt-10">
            <div className="mb-6 pb-2 border-b border-[#B58B45]/30 flex items-center justify-between">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#B5121B] uppercase">
                Search Results
              </h3>
              <span className="text-xs font-sans text-[#5A5650]">
                {totalResultCount} {totalResultCount === 1 ? "result" : "results"}
              </span>
            </div>

            {totalResultCount === 0 ? (
              <div className="py-16 text-center max-w-md mx-auto">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#EFE5D6] flex items-center justify-center text-[#B5121B]">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-serif text-lg font-bold text-[#111111] mb-1">
                  No matching menu items
                </h4>
                <p className="text-sm text-[#5A5650] mb-5">
                  We couldn&apos;t find any items matching &ldquo;{searchQuery}&rdquo;.
                  Try searching for another dish or drink.
                </p>
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="min-h-[44px] px-6 py-2.5 rounded-full bg-[#B5121B] text-white font-serif text-sm font-bold uppercase tracking-wider hover:bg-[#8F0E15] transition-colors cursor-pointer"
                >
                  View Full Menu
                </button>
              </div>
            ) : (
              <div className="space-y-10">
                {filteredSections.map((section) => (
                  <div key={section.id} className="space-y-6">
                    <h4 className="font-serif text-lg sm:text-xl font-bold text-[#B58B45] uppercase tracking-wider border-b border-[#B58B45]/20 pb-1">
                      {section.displayTitle}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-14 gap-y-6">
                      {section.categories.map((cat) => (
                        <CategoryBlock key={cat.id} category={cat} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          // Full Menu View
          <div className="space-y-4">
            {MENU_SECTIONS.map((section) => (
              <MenuSectionView key={section.id} section={section} />
            ))}
          </div>
        )}
      </main>

      {/* 5. Footer */}
      <Footer />

      {/* 6. Back to Top Button */}
      <BackToTop />
    </div>
  );
}
