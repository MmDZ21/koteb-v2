import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Book } from "@prisma/client"
import BookCarouselCard from "../layout/cards/BookCarouselCard"

export function BookCarousel({books}:{books:Book[]}) {
  return (
    <Carousel
      opts={{
        align: "start",
        direction:"rtl"
      }}
      className="w-full max-w-sm"
      dir="rtl"
    >
      <CarouselContent>
        {books.map((book) => (
          <CarouselItem key={book.id} className="md:basis-1/2 lg:basis-1/3">
            <BookCarouselCard book={book}/>
          </CarouselItem>
        ))}
      </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>
  )
}
