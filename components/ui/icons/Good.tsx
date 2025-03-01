import { cn } from "@/lib/utils";
import { IconProps } from "@/types/types";
import React from "react";

const Good = React.forwardRef<SVGSVGElement, IconProps>(
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
        d="M36.667 27.9V7.783c0-2-1.634-3.483-3.617-3.316h-.1c-3.5.3-8.817 2.083-11.783 3.95l-.284.183c-.483.3-1.283.3-1.766 0l-.417-.25c-2.966-1.85-8.266-3.617-11.766-3.9-1.984-.167-3.6 1.333-3.6 3.317V27.9c0 1.6 1.3 3.1 2.9 3.3l.483.067c3.617.483 9.2 2.316 12.4 4.066l.066.034c.45.25 1.167.25 1.6 0 3.2-1.767 8.8-3.617 12.434-4.1l.55-.067c1.6-.2 2.9-1.7 2.9-3.3ZM20 9.15v25M12.916 14.15h-3.75M14.166 19.15h-5"
      />
    </svg>
  )
);

Good.displayName = "Good";
export default Good;
