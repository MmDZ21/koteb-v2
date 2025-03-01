import { cn } from "@/lib/utils";
import { IconProps } from "@/types/types";
import React from "react";

const Cart = React.forwardRef<SVGSVGElement, IconProps>(
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
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M10.25 10.227V8.933c0-3 2.413-5.946 5.413-6.226 3.574-.347 6.587 2.466 6.587 5.973v1.84M12.25 29.333h8c5.36 0 6.32-2.146 6.6-4.76l1-8c.36-3.253-.574-5.906-6.267-5.906H10.916c-5.693 0-6.626 2.653-6.266 5.906l1 8c.28 2.614 1.24 4.76 6.6 4.76Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20.91 16h.013M11.576 16h.012"
      />
    </svg>
  )
);

Cart.displayName = "Cart";
export default Cart;
