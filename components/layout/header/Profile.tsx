import { auth } from "@/auth";
import React from "react";

export default async function Profile() {
  const session = await auth();
  return (
    <div className="flex gap-2 items-center justify-start">
      <div className="rounded-full bg-white size-12" />
      <p className="font-bold text-base">
        {
            session?.user ? session.user.name : "ورود / ثبت نام"
        }
      </p>
    </div>
  );
}