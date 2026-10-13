"use client";

import React from "react";

interface SearchBarProps {
  query: string;
  onChange: (query: string) => void;
  resultCount?: number;
  isSearching: boolean;
}

export default function SearchBar({
  query,
  onChange,
  resultCount,
  isSearching,
}: SearchBarProps) {
  return (
    <div className="w-full max-w-xl mx-auto px-4 py-3">
      <div className="relative flex items-center">
        {/* Search Icon */}
        <div className="absolute left-3.5 pointer-events-none text-[#B58B45]" aria-hidden="true">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Input */}
        <input
          type="search"
          value={query}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search menu (e.g. chicken, rice, hennessy)..."
          className="w-full min-h-[44px] pl-10 pr-10 py-2 text-sm sm:text-base font-sans bg-[#F8F3EA] text-[#191919] placeholder:text-[#5A5650]/70 rounded-full border border-[#B58B45]/40 focus:border-[#B5121B] focus:ring-1 focus:ring-[#B5121B] focus:outline-hidden transition-all shadow-2xs"
          aria-label="Search menu items"
        />

        {/* Clear Button */}
        {query && (
          <button
            type="button"
            onClick={() => onChange("")}
            className="absolute right-3 p-1 text-[#5A5650] hover:text-[#B5121B] focus:outline-hidden cursor-pointer"
            aria-label="Clear search"
          >
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Result feedback */}
      {isSearching && (
        <div className="flex items-center justify-between mt-2 px-3 text-xs text-[#5A5650]">
          <span>
            {resultCount === 0
              ? `No dishes found for "${query}"`
              : `Found ${resultCount} matching ${resultCount === 1 ? "item" : "items"}`}
          </span>
          <button
            type="button"
            onClick={() => onChange("")}
            className="text-[#B5121B] font-medium hover:underline cursor-pointer"
          >
            Show full menu
          </button>
        </div>
      )}
    </div>
  );
}
