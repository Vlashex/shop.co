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
  const category = [
    't-shirt',
    'shorts',
    'shirts',
    'hoodie',
    'jeans'
  ]
  const sizes = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "XX-Large",
    "3X-Large",
    "4X-Large",
  ];
  const styles = [
    'casual',
    'cringe'
  ]

  const searchParams = useSearchParams();
  const router = useRouter()

  console.log(searchParams.getAll('categorys') as string[])

  const [selectedCategory, setSelectedCategory] = useState<string[]>(searchParams.get('categorys')?.split(',') as string[] || [])
  const [selectedPrice, setSelectedPrice] = useState<string>(searchParams.get('price') as string || '500')
  const [selectedColors, setSelectedColors] = useState<string[]>(searchParams.get('colors')?.split(',') as string[] || [])
  const [selectedSizes, setSelectedSizes] = useState<string[]>(searchParams.get('sizes')?.split(',') as string[] || [])
  const [selectedStyles, setSelectedStyles] = useState<string[]>(searchParams.get('styles')?.split(',') as string[] || [])

  const updateParams = () => {
    router.replace(`/shop?categorys=${selectedCategory}&price=${selectedPrice}&colors=${selectedColors}&sizes=${selectedSizes}&styles=${selectedStyles}`)
  }


  return (
    <section className="max-w-[1240px] mx-auto w-11/12">
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
                      {
                      category.map((value, index) => 
                        <Button
                        key={index}
                        className={cn(
                          selectedCategory.find((el)=>el==value)
                          ?'bg-black text-white'
                          :''
                        )}
                        onClick={()=>{
                          setSelectedCategory((prev)=>{
                            if (!!prev.find((el)=>el==value)){
                              return prev.filter((el)=> el!=value)
                            }
                            return [...prev, value]
                          })
                          updateParams()
                        }}
                        >{value}</Button>
                      )
                    }
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="hover:no-underline">
                    Price
                  </AccordionTrigger>
                  <AccordionContent>
                    <input type="range" value={selectedPrice} max={500} min={10} step={1} 
                    onChangeCapture={(e:any)=>{
                      const newValue = e.target.value
                      console.log(e)
                      setSelectedPrice(newValue);
                      updateParams()
                    }}
                    className="w-full bg-black text-black"
                    />
                    {selectedPrice}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="hover:no-underline">
                    Colors
                  </AccordionTrigger>
                  <AccordionContent>
                    {

                    }
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="hover:no-underline">
                    Size
                  </AccordionTrigger>
                  <AccordionContent>
                     <div className="grid grid-cols-2 gap-1">
                      {
                      sizes.map((value, index) => 
                        <Button
                        key={index}
                        className={cn(
                          selectedSizes.find((el)=>el==value)
                          ?'bg-black text-white'
                          :''
                        )}
                        onClick={()=>{
                          setSelectedSizes((prev)=>{
                            if (!!prev.find((el)=>el==value)){
                              return prev.filter((el)=> el!=value)
                            }
                            return [...prev, value]
                          })
                          updateParams()
                        }}
                        >{value}</Button>
                      )
                    }
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="hover:no-underline">
                    Dress Style
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-2 gap-1">
                      {
                      styles.map((value, index) => 
                        <Button
                        key={index}
                        className={cn(
                          selectedStyles.find((el)=>el==value)
                          ?'bg-black text-white'
                          :''
                        )}
                        onClick={()=>{
                          setSelectedStyles((prev)=>{
                            if (!!prev.find((el)=>el==value)){
                              return prev.filter((el)=> el!=value)
                            }
                            return [...prev, value]
                          })
                          updateParams()
                        }}
                        >{value}</Button>
                      )
                    }
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
          </DropdownMenuContent>
        </DropdownMenu>
        <h1 className="text-3xl">Casual</h1>
      </div>
      {children}
    </section>
  );
}
