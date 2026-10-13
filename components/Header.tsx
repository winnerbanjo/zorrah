import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full pt-6 pb-4 sm:pt-9 sm:pb-5 px-4 text-center bg-[#F8F3EA] border-b border-[#B58B45]/20 relative">
      {/* Decorative Top Gold Bar Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B58B45]/20 via-[#B5121B] to-[#B58B45]/20" />

      <div className="max-w-md mx-auto flex flex-col items-center">
        {/* Supplied Real Zorrah Logo */}
        <div className="relative w-48 sm:w-56 h-auto mb-2 transition-transform duration-300 hover:scale-[1.02]">
          <Image
            src="/zorrah-logo.png"
            alt="ZORRAH Restaurant and Lounge"
            width={686}
            height={493}
            priority
            className="w-full h-auto object-contain mix-blend-multiply drop-shadow-2xs"
          />
        </div>

        {/* Location / Ambiance Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#EFE5D6]/70 border border-[#B58B45]/30 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B5121B] animate-pulse" />
          <span className="text-[10px] sm:text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-[#5A5650]">
            Lekki Phase 1 • Lagos
          </span>
        </div>

        {/* Decorative Gold Accent Divider */}
        <div
          className="flex items-center justify-center gap-3 w-40 mb-2 text-[#B58B45]"
          aria-hidden="true"
        >
          <span className="h-px bg-gradient-to-r from-transparent via-[#B58B45] to-transparent grow" />
          <span className="text-[9px] text-[#B58B45]">◆</span>
          <span className="h-px bg-gradient-to-l from-transparent via-[#B58B45] to-transparent grow" />
        </div>

        {/* Menu Sub-header */}
        <h2 className="font-serif text-lg sm:text-xl font-bold tracking-[0.22em] text-[#B5121B] uppercase">
          OUR MENU
        </h2>
        <p className="mt-1 text-xs sm:text-[13px] text-[#5A5650] italic tracking-wide">
          All prices are in Nigerian Naira (₦).
        </p>
      </div>
    </header>
  );
}
