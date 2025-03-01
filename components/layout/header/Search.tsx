"use client"
// import { cn } from "@/lib/utils";
import React, { useState } from "react";
import SearchIcon from "@/components/ui/icons/SearchIcon"
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function Search() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex items-center">
      {/* 
        Desktop Search Bar 
        (hidden on mobile)
      */}
      <div className="hidden md:flex items-center bg-gray-100 rounded-full px-3 py-2">
        <SearchIcon className="w-5 h-5 text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="جستجوی کتاب..."
          className="bg-transparent focus:outline-none text-sm"
        />
      </div>

      {/* 
        Mobile Search Icon 
        (shown on mobile, hidden on desktop)
      */}
      <Button
        className="md:hidden flex items-center justify-center rounded-full"
        size="icon"
        onClick={() => setMobileOpen(true)}
      >
        <SearchIcon className="w-6 h-6"/>
      </Button>

      {/* 
        Mobile Full-Screen Search 
        (shown when mobileOpen = true)
      */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col p-4">
          {/* Header row with Back icon and Input */}
          <div className="flex items-center mb-4">
            <button
              onClick={() => setMobileOpen(false)}
              className="mr-2"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <input
              type="text"
              placeholder="جستجوی کتاب..."
              className="flex-grow border-b focus:outline-none text-base"
            />
          </div>

          {/* Example: Search Results */}
          <div className="flex-1 overflow-y-auto">
            {/* Replace with your real search results or suggestions */}
            <p className="text-gray-500 text-sm">نتایج جستجو نمایش داده می‌شوند...</p>
          </div>
        </div>
      )}
    </div>
  );
}
