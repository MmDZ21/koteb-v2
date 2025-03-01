import React from "react";

import { SearchOverlay } from "./SearchOverlay";
import Login from "./Login";
import Image from "next/image";

export default function Header() {
  
  return (
    <header className="w-full h-20 flex justify-between items-center px-8">
        <Login/>
        {/* <Logo/> */}
        <Image src="/logo.png" alt="Koteb" width={80} height={80}/>
        <SearchOverlay/>
    </header>
  );
}
