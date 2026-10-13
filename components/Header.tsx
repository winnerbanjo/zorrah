import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full pt-5 pb-3 sm:pt-7 sm:pb-4 px-4 text-center bg-[#F8F3EA] border-b border-[#B58B45]/20">
      <div className="max-w-md mx-auto flex flex-col items-center">
        {/* Supplied Real Zorrah Logo */}
        <div className="relative w-44 sm:w-52 h-auto mb-1">
          <Image
            src="/zorrah-logo.png"
            alt="Zorrah Restaurant and Lounge"
            width={686}
            height={493}
            priority
            className="w-full h-auto object-contain mix-blend-multiply"
          />
        </div>

        {/* Decorative Gold Accent Divider */}
        <div
          className="flex items-center justify-center gap-3 w-36 my-2 text-[#B58B45]/70"
          aria-hidden="true"
        >
          <span className="h-px bg-gradient-to-r from-transparent to-[#B58B45] grow" />
          <span className="w-1.5 h-1.5 rotate-45 bg-[#B5121B]" />
          <span className="h-px bg-gradient-to-l from-transparent to-[#B58B45] grow" />
        </div>

        {/* Menu Sub-header */}
        <h2 className="font-serif text-lg sm:text-xl font-bold tracking-[0.18em] text-[#B5121B] uppercase">
          OUR MENU
        </h2>
        <p className="mt-0.5 text-xs sm:text-[13px] text-[#5A5650] italic tracking-wide">
          All prices are in Naira.
        </p>
      </div>
    </header>
  );
}
