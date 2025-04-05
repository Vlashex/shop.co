"use client";
import React, { ReactElement, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

export default function Layout({ children }: { children: ReactElement }) {
  const category: string[] = ["t-shirt", "shorts", "shirts", "hoodie", "jeans"];
  const sizes: string[] = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
  ];
  const styles: string[] = ["casual", "cringe"];

  const searchParams = useSearchParams();
  const router = useRouter();

  const [filters, setFilters] = useState({
    page: Number(searchParams.get("page") || 0),
    categorys: searchParams.get("categorys")?.split(",") || [],
    price: searchParams.get("price") || "500",
    colors: searchParams.get("colors")?.split(",") || [],
    sizes: searchParams.get("sizes")?.split(",") || [],
    styles: searchParams.get("styles")?.split(",") || [],
  });

  if (filters.page === 0) router.replace('/shop?page=1')

  const updateFilter = (key: string, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  if (filters.page === 0) router.replace("/shop?page=1");

  const updateParams = () => {
    const query = new URLSearchParams({
      page: filters.page.toString(),
      categorys: filters.categorys.join(","),
      price: filters.price,
      colors: filters.colors.join(","),
      sizes: filters.sizes.join(","),
      styles: filters.styles.join(","),
    }).toString();

    router.replace(`/shop?${query}`);
  };

  return (
    <section className="max-w-[1240px] mx-auto w-11/12 flex-1">
      <div className="flex items-center gap-5">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex justify-between items-center text-3xl py-5 w-[295px] text-start active:border-0">
            Filters
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white w-[295px] px-6">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="hover:no-underline active:border-0">
                  Category
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-3 gap-1">
                    {category.map((value, index) => (
                      <Button
                        key={index}
                        className={cn(
                          filters.categorys.includes(value)
                            ? "bg-black text-white"
                            : ""
                        )}
                        onClick={() => {
                          const newCategories = filters.categorys.includes(
                            value
                          )
                            ? filters.categorys.filter((el) => el !== value)
                            : [...filters.categorys, value];
                          updateFilter("categorys", newCategories);
                          updateParams(); // Обновляем URL
                        }}
                      >
                        {value}
                      </Button>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="hover:no-underline">
                  Price
                </AccordionTrigger>
                <AccordionContent>
                  <input
                    type="range"
                    value={filters.price}
                    max={500}
                    min={10}
                    step={1}
                    onChangeCapture={(e: any) => {
                      const newValue = e.target.value;
                      console.log(e);
                      updateFilter("price", newValue);
                      updateParams();
                    }}
                    className="w-full bg-black text-black"
                  />
                  {filters.price}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="hover:no-underline">
                  Colors
                </AccordionTrigger>
                <AccordionContent>{}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="hover:no-underline">
                  Size
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2 gap-1">
                    {sizes.map((value, index) => (
                      <Button
                        key={index}
                        className={cn(
                          filters.categorys.includes(value)
                            ? "bg-black text-white"
                            : ""
                        )}
                        onClick={() => {
                          const newCategories = filters.categorys.includes(
                            value
                          )
                            ? filters.categorys.filter((el) => el !== value)
                            : [...filters.categorys, value];
                          updateFilter("categorys", newCategories);
                          updateParams(); // Обновляем URL
                        }}
                      >
                        {value}
                      </Button>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="hover:no-underline">
                  Dress Style
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2 gap-1">
                    {styles.map((value, index) => (
                      <Button
                        key={index}
                        className={cn(
                          filters.categorys.includes(value)
                            ? "bg-black text-white"
                            : ""
                        )}
                        onClick={() => {
                          const newCategories = filters.categorys.includes(
                            value
                          )
                            ? filters.categorys.filter((el) => el !== value)
                            : [...filters.categorys, value];
                          updateFilter("categorys", newCategories);
                          updateParams(); // Обновляем URL
                        }}
                      >
                        {value}
                      </Button>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {children}
    </section>
  );
}
