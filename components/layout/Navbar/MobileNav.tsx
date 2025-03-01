"use client";
import { mobileNavItems } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <div className="py-4 px-8 fixed bottom-0 w-full block lg:hidden">
      <nav className="bg-white w-full p-2 flex items-center justify-between h-20 rounded-2xl drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        {mobileNavItems.map((item) => (
          <Link href={item.href} key={item.label}>
            <div
              className={cn(
                "flex flex-col gap-1 items-center justify-center w-[52px] h-[52px]",
                item.large
                  ? pathname === item.href
                    ? "bg-primary-hover rounded-full drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                    : "bg-primary rounded-full drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                  : "",
                pathname === item.href
                  ? "text-primary"
                  : "text-secondary-foreground"
              )}
            >
              <item.icon
                className={cn(
                  "w-8",
                  item.large ? "text-primary-foreground" : ""
                )}
              />
              {!item.large ? <p className="text-[10px]">{item.label}</p> : null}
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
}
