import { cn } from "@/lib/utils";
import { IconProps } from "@/types/types";
import React from "react";

export default function Category({
  label,
  Icon,
  active
}: {
  label: string;
  Icon: React.ForwardRefExoticComponent<
    Omit<IconProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  active: boolean
}) {
  return (
    <div className={cn("size-20 flex flex-col gap-1 px-4 py-2 items-center justify-center", active ? "text-primary" : "text-secondary-foreground")}>
        <Icon className="w-10 h-10"/>
        <h6 className="text-xs">{label}</h6>
    </div>
  );
}
