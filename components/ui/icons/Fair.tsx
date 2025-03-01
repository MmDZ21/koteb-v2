import { cn } from "@/lib/utils";
import { IconProps } from "@/types/types";
import React from "react";

const Fair = React.forwardRef<SVGSVGElement, IconProps>(
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
        d="M36.667 7.783V27.9c0 1.6-1.3 3.1-2.9 3.3l-.55.067c-3.633.483-9.234 2.333-12.434 4.1-.433.25-1.15.25-1.6 0l-.066-.034c-3.2-1.75-8.784-3.583-12.4-4.066l-.484-.067c-1.6-.2-2.9-1.7-2.9-3.3V7.767c0-1.984 1.617-3.484 3.6-3.317 3.5.283 8.8 2.05 11.767 3.9l.417.25c.483.3 1.283.3 1.767 0l.283-.183c1.05-.65 2.383-1.3 3.833-1.884v6.8l3.334-2.216 3.333 2.216v-8.7c.45-.083.883-.133 1.283-.166h.1c1.983-.167 3.617 1.316 3.617 3.316ZM20 9.15v25"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M31.667 4.633v8.7l-3.334-2.216L25 13.333v-6.8c2.183-.866 4.617-1.566 6.667-1.9Z"
      />
    </svg>
  )
);

Fair.displayName = "Fair";
export default Fair;
