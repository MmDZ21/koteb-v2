import { cn } from "@/lib/utils";
import { IconProps } from "@/types/types";
import React from "react";

const New = React.forwardRef<SVGSVGElement, IconProps>(
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
        d="M5.833 30V11.667C5.833 5 7.5 3.333 14.168 3.333h11.667c6.666 0 8.333 1.667 8.333 8.334v16.666c0 .234 0 .467-.017.7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10.584 25h23.583v5.833a5.84 5.84 0 0 1-5.834 5.834H11.668a5.84 5.84 0 0 1-5.833-5.834V29.75a4.759 4.759 0 0 1 4.75-4.75ZM13.334 11.667h13.333M13.334 17.5h8.333"
      />
    </svg>
  )
);

New.displayName = "New";
export default New;
