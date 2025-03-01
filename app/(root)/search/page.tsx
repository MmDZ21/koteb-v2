// app/search/page.tsx
import React from "react";
import { prisma } from "@/lib/prisma";
import type { Book } from "@prisma/client";

interface SearchPageProps {
  searchParams: Promise<{
    query?: string;
    page?: string;
  }>
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const query = (await searchParams).query || "";

  // Fetch books matching the search query using Prisma
  const books: Book[] = await prisma.book.findMany({
    where: {
      title: {
        contains: query,
        mode: "insensitive",
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">نتایج جستجو برای: {query}</h1>
      {books.length > 0 ? (
        <ul className="space-y-4">
          {books.map((book) => (
            <li key={book.id} className="p-4 border rounded-md">
              <h2 className="font-semibold">{book.title}</h2>
              <p>{book.author}</p>
              <p className="text-sm text-gray-500">قیمت: {book.price}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">هیچ نتیجه‌ای یافت نشد.</p>
      )}
    </div>
  );
}
