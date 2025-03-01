import { cn } from "@/lib/utils";
import { IconProps } from "@/types/types";
import React from "react";

const LoginIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      {...props}
      className={cn("", className)}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#F7F7F7"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="m11.68 14.62 2.56-2.56-2.56-2.56M4 12.06h10.17"
      />
      <path
        stroke="#F7F7F7"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M12 4c4.42 0 8 3 8 8s-3.58 8-8 8"
      />
    </svg>
  )
);

LoginIcon.displayName = "LoginIcon";
export default LoginIcon;
