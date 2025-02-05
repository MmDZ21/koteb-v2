import React from "react";
import Profile from "./Profile";
import Cart from "./Cart";

export default function Header() {
  return (
    <header className="w-full p-4 flex justify-between items-center">
      <Profile />
      <Cart />
    </header>
  );
}
