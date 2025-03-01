import { cn } from "@/lib/utils";
import React from "react";
import { IconProps } from "@/types/types";

const Shop = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      {...props}
      className={cn("", className)}
            viewBox="0 0 32 32"
      fill="none"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M4.513 14.96v5.987c0 5.986 2.4 8.386 8.387 8.386h7.187c5.986 0 8.386-2.4 8.386-8.386V14.96"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M16.5 16c2.44 0 4.24-1.987 4-4.427l-.88-8.906h-6.227l-.893 8.906c-.24 2.44 1.56 4.427 4 4.427Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M24.914 16c2.693 0 4.666-2.187 4.4-4.867l-.374-3.666c-.48-3.467-1.813-4.8-5.306-4.8h-4.067l.933 9.346c.227 2.2 2.214 3.987 4.414 3.987ZM8.02 16c2.2 0 4.187-1.787 4.4-3.987l.293-2.946.64-6.4H9.287C5.793 2.667 4.46 4 3.98 7.467l-.36 3.666C3.353 13.813 5.327 16 8.02 16ZM16.5 22.667c-2.227 0-3.334 1.106-3.334 3.333v3.333h6.667V26c0-2.227-1.106-3.333-3.333-3.333Z"
      />
    </svg>
  )
);

Shop.displayName = "Shop";
export default Shop;
