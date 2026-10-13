import React from "react";
import { MenuItem, formatPrice } from "@/data/menu";

interface MenuItemRowProps {
  item: MenuItem;
}

export default function MenuItemRow({ item }: MenuItemRowProps) {
  return (
    <li className="zorrah-item-row grid grid-cols-[1fr_auto] items-baseline gap-2 py-2 sm:py-2.5 transition-colors duration-150 group">
      {/* Item Name and Dotted Leader */}
      <div className="zorrah-item-left flex items-baseline min-w-0 overflow-hidden">
        <span className="zorrah-item-name font-serif text-[16.5px] sm:text-[18px] font-medium text-[#111111] leading-snug break-words group-hover:text-[#B5121B] transition-colors">
          {item.name}
        </span>
        {/* Subtle Dotted Leader Line */}
        <span
          className="zorrah-item-dots mx-2 grow border-b-2 border-dotted border-[#B58B45]/40 min-w-4 sm:min-w-6 self-baseline relative top-[-3px]"
          aria-hidden="true"
        />
      </div>

      {/* Price */}
      <span className="zorrah-item-price font-serif text-[16.5px] sm:text-[18px] font-bold text-[#B5121B] whitespace-nowrap pl-1 tabular-nums tracking-tight">
        {formatPrice(item.price)}
      </span>
    </li>
  );
}
