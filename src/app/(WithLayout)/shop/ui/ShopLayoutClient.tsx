"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { IFilters, TCategory, TColor, TSize, TStyle } from "@/lib/types";

type Props = {
  children: ReactNode;
};

export default function ShopLayoutClient({ children }: Props) {
  const categories: TCategory[] = [
    "t-shirt",
    "shorts",
    "shirts",
    "hoodie",
    "jeans",
  ];

  const sizes: TSize[] = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
  ];

  const styles: TStyle[] = ["casual", "cringe"];

  const searchParams = useSearchParams();
  const router = useRouter();

  const [filters, setFilters] = useState<IFilters>({
    page: Number(searchParams.get("page") || 1),
    categorys:
      (searchParams.get("categorys")?.split(",") as TCategory[]) || [],
    price: searchParams.get("price") || "500",
    colors: (searchParams.get("colors")?.split(",") as TColor[]) || [],
    sizes: (searchParams.get("sizes")?.split(",") as TSize[]) || [],
    styles: (searchParams.get("styles")?.split(",") as TStyle[]) || [],
  });

  const updateFilter = <K extends keyof IFilters>(
    key: K,
    value: IFilters[K]
  ) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const updateParams = (next: IFilters) => {
    const query = new URLSearchParams({
      page: next.page.toString(),
      categorys: next.categorys.join(","),
      price: next.price,
      colors: next.colors.join(","),
      sizes: next.sizes.join(","),
      styles: next.styles.join(","),
    }).toString();

    router.replace(`/shop?${query}`);
  };

  useEffect(() => {
    updateParams(filters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  return (
    <section className="max-w-[1240px] mx-auto w-11/12">
      <div className="flex items-center gap-5">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex justify-between items-center text-3xl py-5 w-[295px] text-start">
            Filters
          </DropdownMenuTrigger>

          <DropdownMenuContent className="bg-white w-[295px] px-6">
            <Accordion type="single" collapsible>
              {/* CATEGORY */}
              <AccordionItem value="category">
                <AccordionTrigger>Category</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-3 gap-1">
                    {categories.map((value) => {
                      const active = filters.categorys.includes(value);
                      return (
                        <Button
                          key={value}
                          className={cn(active && "bg-black text-white")}
                          onClick={() => {
                            const next = active
                              ? filters.categorys.filter((v) => v !== value)
                              : [...filters.categorys, value];
                            updateFilter("categorys", next);
                          }}
                        >
                          {value}
                        </Button>
                      );
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* PRICE */}
              <AccordionItem value="price">
                <AccordionTrigger>Price</AccordionTrigger>
                <AccordionContent>
                  <input
                    type="range"
                    min={10}
                    max={500}
                    step={1}
                    value={Number(filters.price)}
                    onChange={(e) =>
                      updateFilter("price", e.target.value)
                    }
                    className="w-full"
                  />
                  <div className="mt-2">{filters.price}</div>
                </AccordionContent>
              </AccordionItem>

              {/* SIZE */}
              <AccordionItem value="size">
                <AccordionTrigger>Size</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2 gap-1">
                    {sizes.map((value) => {
                      const active = filters.sizes.includes(value);
                      return (
                        <Button
                          key={value}
                          className={cn(active && "bg-black text-white")}
                          onClick={() => {
                            const next = active
                              ? filters.sizes.filter((v) => v !== value)
                              : [...filters.sizes, value];
                            updateFilter("sizes", next);
                          }}
                        >
                          {value}
                        </Button>
                      );
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* STYLE */}
              <AccordionItem value="style">
                <AccordionTrigger>Dress Style</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2 gap-1">
                    {styles.map((value) => {
                      const active = filters.styles.includes(value);
                      return (
                        <Button
                          key={value}
                          className={cn(active && "bg-black text-white")}
                          onClick={() => {
                            const next = active
                              ? filters.styles.filter((v) => v !== value)
                              : [...filters.styles, value];
                            updateFilter("styles", next);
                          }}
                        >
                          {value}
                        </Button>
                      );
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </DropdownMenuContent>
        </DropdownMenu>

        <h1 className="text-3xl">Shop</h1>
      </div>

      {children}
    </section>
  );
}
