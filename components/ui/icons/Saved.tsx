import { cn } from "@/lib/utils";
import React from "react";
import { IconProps } from "@/types/types";
const Saved = React.forwardRef<SVGSVGElement, IconProps>(
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
        d="M22.083 11.987v15.146c0 1.934-1.386 2.747-3.08 1.814l-5.24-2.92c-.56-.307-1.466-.307-2.027 0l-5.24 2.92c-1.693.933-3.08.12-3.08-1.814V11.987A4.16 4.16 0 0 1 7.564 7.84h10.373a4.16 4.16 0 0 1 4.147 4.147Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M30.083 6.813V21.96c0 1.933-1.386 2.747-3.08 1.813l-4.92-2.746v-9.04a4.16 4.16 0 0 0-4.146-4.147h-6.52V6.813a4.16 4.16 0 0 1 4.146-4.146h10.373a4.16 4.16 0 0 1 4.147 4.146ZM10.084 16h5.333M12.75 18.667v-5.334"
      />
    </svg>
  )
);

Saved.displayName = "Saved";
export default Saved;
