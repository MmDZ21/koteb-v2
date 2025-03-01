import { cn } from "@/lib/utils";
import { IconProps } from "@/types/types";
import React from "react";

const SearchIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      {...props}
      className={cn("", className)}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
        d="M11.583 19.5a7.917 7.917 0 1 0 0-15.833 7.917 7.917 0 0 0 0 15.833ZM20.333 20.333l-1.666-1.666"
      />
    </svg>
  )
);

SearchIcon.displayName = "SearchIcon";
export default SearchIcon;
