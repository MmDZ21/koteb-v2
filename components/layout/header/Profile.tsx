import { auth } from "@/auth";
import { cn } from "@/lib/utils";
import React from "react";

export default async function Profile({className}:{className?: string}) {
  const session = await auth();
  return (
    <div className={cn("flex gap-2 items-center justify-start", className)}>
      <div className="rounded-full bg-white size-12" />
      <p className="font-bold text-base">
        {
            session?.user ? session.user.name : "ورود / ثبت نام"
        }
      </p>
    </div>
  );
}