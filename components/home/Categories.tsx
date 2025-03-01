import { conditions } from "@/constants";
import React from "react";
import Category from "./Category";

export default function Categories() {

  return (
    <div className="flex justify-between items-center py-2">
      {conditions.map((condition) => (
        <Category
          key={condition.value}
          Icon={condition.icon}
          label={condition.label}
          active={false}
        />
      ))}
    </div>
  );
}
