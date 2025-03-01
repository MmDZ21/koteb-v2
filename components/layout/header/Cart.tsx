import { cn } from "@/lib/utils";
import React from "react";

export default function Cart({className}:{className?: string}) {
  return (
    <div className={cn("", className)}>
      <div className="rounded-full bg-white size-12" />
    </div>
  );
}
