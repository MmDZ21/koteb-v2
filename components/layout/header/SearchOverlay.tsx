"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronLeft, X } from "lucide-react";
import { useDebounce } from "use-debounce";
import SearchIcon from "@/components/ui/icons/SearchIcon";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { conditions } from "@/constants";
import { Book } from "@prisma/client";

export function SearchOverlay() {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [debouncedQuery] = useDebounce(query, 1000);
  const [condition, setCondition] = React.useState<
    "ALL" | "NEW" | "GOOD" | "FAIR" | "POOR"
  >("ALL");
  const [results, setResults] = React.useState<Book[]>([]);
  const router = useRouter();

  // Fetch real-time search results when debounced query changes
  React.useEffect(() => {
    if (debouncedQuery.length > 0) {
      fetch(
        `/api/search?query=${encodeURIComponent(
          debouncedQuery
        )}&condition=${condition}`
      )
        .then((res) => res.json())
        .then((data) => setResults(data));
    } else {
      setResults([]);
    }
  }, [debouncedQuery, condition]);

  const handleViewMore = () => {
    setOpen(false);
    // Navigate to the dedicated search page with the query as a URL param
    router.push(
      `/search?query=${encodeURIComponent(query)}&condition=${condition}`
    );
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button size="icon">
          <SearchIcon className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="fadeIn" className="w-screen p-0 px-8">
        <SheetHeader className="h-0 space-y-0">
          <SheetTitle className="text-lg font-semibold h-0"></SheetTitle>
          <SheetDescription className="text-sm text-muted-foreground h-0"></SheetDescription>
        </SheetHeader>
        <div className="flex flex-col">
          <div className="flex gap-2 h-20 py-2 items-center">
            <div className="flex relative flex-grow">
              <Input
                placeholder="جستجوی کتاب..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="h-12 px-4 py-1 rounded-full w-full"
              />
              <div className="absolute left-4 flex gap-2 items-center h-full">
                <Select
                  value={condition}
                  onValueChange={(
                    e: "ALL" | "NEW" | "GOOD" | "FAIR" | "POOR"
                  ) => setCondition(e)}
                >
                  <SelectTrigger className="w-fit rounded-full bg-slate-200 h-5 text-xs border-none shadow-none">
                    <SelectValue placeholder="وضعیت" className="text-xs" />
                  </SelectTrigger>
                  <SelectContent>
                    {conditions.map((condition) => (
                      <SelectItem key={condition.value} value={condition.value}>
                        {condition.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {query.length > 0 && (
                  <X
                    className="w-4 h-4 text-primary"
                    onClick={() => setQuery("")}
                  />
                )}
              </div>
            </div>
            <SheetClose asChild>
              <Button size="icon">
                <ChevronLeft className="w-6 h-6" />
              </Button>
            </SheetClose>
          </div>
          {results.length > 0 ? (
            <ul className="space-y-2">
              {results.map((item) => (
                <li key={item.id} className="p-2 bg-gray-100 rounded">
                  {item.title}
                </li>
              ))}
            </ul>
          ) : (
            query.length > 0 ? (
              <p className="text-sm text-gray-500">موردی یافت نشد.</p>
            ) : (
              <h2>جستجوهای اخیر</h2>
            )
          )}
          {query.length > 0 && (
            <Button
              onClick={handleViewMore}
              className="mt-4 bg-primary text-white px-4 py-2 rounded"
            >
              مشاهده نتایج بیشتر
            </Button>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
