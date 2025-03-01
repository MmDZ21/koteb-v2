import React from "react";
import { BookCarousel } from "./BookCarousel";
import { prisma } from "@/lib/prisma";

export default async function Popular() {
        const books =  await prisma.book.findMany({
            where:{
                status:"APPROVED"
            }
          });

  return (
    <div>
      <BookCarousel books={books} />
    </div>
  );
}
