import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full pt-6 pb-4 sm:pt-8 sm:pb-5 px-4 text-center bg-[#F8F3EA] border-b border-[#B58B45]/15">
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        {/* Logo */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-3 transition-transform duration-300">
          <Image
            src="/zorrah-logo.png"
            alt="Zorrah Restaurant and Lounge"
            width={120}
            height={120}
            priority
            className="w-full h-full object-contain"
          />
        </div>

        {/* Brand Name */}
        <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-[0.22em] text-[#111111] uppercase leading-tight">
          ZORRAH
        </h1>
        <p className="mt-1 text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#B58B45] uppercase">
          RESTAURANT AND LOUNGE
        </p>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-3 w-44 my-3 text-[#B58B45]/70" aria-hidden="true">
          <span className="h-px bg-gradient-to-r from-transparent to-[#B58B45] grow" />
          <span className="w-1.5 h-1.5 rotate-45 bg-[#B5121B]" />
          <span className="h-px bg-gradient-to-l from-transparent to-[#B58B45] grow" />
        </div>

        {/* Menu Sub-header */}
        <h2 className="font-serif text-lg sm:text-xl font-semibold tracking-[0.15em] text-[#B5121B] uppercase">
          OUR MENU
        </h2>
        <p className="mt-1 text-xs sm:text-[13px] text-[#5A5650] italic tracking-wide">
          All prices are in Naira.
        </p>
      </div>
    </header>
  );
}
