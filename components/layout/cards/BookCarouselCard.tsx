import { Book } from "@prisma/client";
import Image from "next/image";
import React from "react";

export default function BookCarouselCard({book}:{book:Book}) {
  return <div className="flex flex-col gap-4 p-2 bg-white">
    <Image src={book.image} alt={book.title} width={180} height={220}/>
    <div className="flex flex-col gap-2">
        <p className="text-secondary-foreground text-sm font-bold">{book.title}</p>
        <p className="text-[10px] text-destructive">{book.author}</p>
    </div>
  </div>;
}
