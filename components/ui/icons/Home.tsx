import { cn } from "@/lib/utils";
import React from "react";
import { IconProps } from "@/types/types";

const Home = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      {...props}
      className={cn("", className)}
      fill="none"
      viewBox="0 0 32 32"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m12.027 3.787-7.187 5.6c-1.2.933-2.173 2.92-2.173 4.426v9.88c0 3.094 2.52 5.627 5.613 5.627h15.44c3.093 0 5.613-2.533 5.613-5.613V14c0-1.613-1.08-3.68-2.4-4.6l-8.24-5.773c-1.867-1.307-4.867-1.24-6.667.16ZM16 23.987v-4"
      />
    </svg>
  )
);

Home.displayName = "Home";
export default Home;
