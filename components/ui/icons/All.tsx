import { cn } from "@/lib/utils";
import { IconProps } from "@/types/types";
import React from "react";

const All = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      {...props}
      className={cn("", className)}
      fill="none"
      viewBox="0 0 40 40"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M36.667 14.2V6.633c0-2.35-1.067-3.3-3.717-3.3h-6.733c-2.65 0-3.717.95-3.717 3.3v7.55c0 2.367 1.067 3.3 3.717 3.3h6.733c2.65.017 3.717-.933 3.717-3.283ZM36.667 32.95v-6.733c0-2.65-1.067-3.717-3.717-3.717h-6.733c-2.65 0-3.717 1.067-3.717 3.717v6.733c0 2.65 1.067 3.717 3.717 3.717h6.733c2.65 0 3.717-1.067 3.717-3.717ZM17.5 14.2V6.633c0-2.35-1.067-3.3-3.716-3.3H7.05c-2.65 0-3.716.95-3.716 3.3v7.55c0 2.367 1.066 3.3 3.716 3.3h6.734c2.65.017 3.716-.933 3.716-3.283ZM17.5 32.95v-6.733c0-2.65-1.067-3.717-3.716-3.717H7.05c-2.65 0-3.716 1.067-3.716 3.717v6.733c0 2.65 1.066 3.717 3.716 3.717h6.734c2.65 0 3.716-1.067 3.716-3.717Z"
      />
    </svg>
  )
);

All.displayName = "All";
export default All;
