import { cn } from "@/lib/utils";
import React from "react";
import { IconProps } from "@/types/types";

const Support = React.forwardRef<SVGSVGElement, IconProps>(
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
        d="M7.28 24.653V20.76c0-1.293 1.013-2.453 2.453-2.453 1.294 0 2.454 1.013 2.454 2.453v3.747c0 2.6-2.16 4.76-4.76 4.76-2.6 0-4.76-2.174-4.76-4.76v-8.214C2.52 8.8 8.44 2.733 15.933 2.733c7.494 0 13.4 6.067 13.4 13.414v8.213c0 2.6-2.16 4.76-4.76 4.76-2.6 0-4.76-2.16-4.76-4.76v-3.747c0-1.293 1.014-2.453 2.454-2.453 1.293 0 2.453 1.013 2.453 2.453v4.04"
      />
    </svg>
  )
);

Support.displayName = "Support";
export default Support;
