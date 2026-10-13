import React from "react";

export default function Footer() {
  return (
    <footer className="w-full mt-16 pb-12 pt-10 px-4 text-center bg-[#EFE5D6]/40 border-t border-[#B58B45]/20">
      <div className="max-w-md mx-auto space-y-2">
        <h4 className="font-serif text-xl sm:text-2xl font-bold tracking-[0.2em] text-[#111111] uppercase">
          ZORRAH
        </h4>
        <p className="text-xs sm:text-[13px] font-sans font-medium tracking-[0.2em] text-[#B58B45] uppercase">
          Restaurant &amp; Lounge
        </p>

        <div className="w-12 h-px bg-[#B58B45]/50 mx-auto my-3" />

        <p className="text-xs sm:text-sm text-[#5A5650]">
          All prices are in Naira.
        </p>
        <p className="text-[11px] sm:text-xs text-[#5A5650]/80 italic">
          Menu prices may be updated without notice.
        </p>
      </div>
    </footer>
  );
}
