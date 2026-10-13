import React from "react";
import { MenuItem, formatPrice } from "@/data/menu";

interface MenuItemRowProps {
  item: MenuItem;
}

export default function MenuItemRow({ item }: MenuItemRowProps) {
  return (
    <li className="grid grid-cols-[1fr_auto] items-baseline gap-2 py-2 sm:py-2.5 transition-colors duration-150">
      {/* Item Name and Dotted Leader */}
      <div className="flex items-baseline min-w-0 overflow-hidden">
        <span className="font-serif text-[16px] sm:text-[17px] font-medium text-[#191919] leading-snug break-words">
          {item.name}
        </span>
        {/* Subtle Dotted Leader Line */}
        <span
          className="mx-2 grow border-b-2 border-dotted border-[#B58B45]/35 min-w-4 sm:min-w-6 self-baseline relative top-[-3px]"
          aria-hidden="true"
        />
      </div>

      {/* Price */}
      <span className="font-serif text-[16px] sm:text-[17px] font-bold text-[#B5121B] whitespace-nowrap pl-1 tabular-nums tracking-tight">
        {formatPrice(item.price)}
      </span>
    </li>
  );
}
