import { Button } from "@/components/ui/button";
import LoginIcon from "@/components/ui/icons/LoginIcon";
import Link from "next/link";
import React from "react";

export default function Login() {
  return (
    <Button size="icon" asChild>
      <Link href="/dashboard">
        <LoginIcon className="w-6 h-6" />
      </Link>
    </Button>
  );
}
