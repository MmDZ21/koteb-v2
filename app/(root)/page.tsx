
import Categories from "@/components/home/Categories";
import Popular from "@/components/home/Popular";
import React from "react";

export default function page() {
  return (
    <div className="flex gap-4 flex-col px-8 pt-4">
    <Categories />
    <Popular/>
    </div>
  );
}
