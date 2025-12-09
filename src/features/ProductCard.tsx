import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Stars from "./Stars";
import { ICard } from "@/lib/types";

export default function ProductCard(
  {id, title, images, price, previousPrice, rate}: ICard
) 
{
  return (
    <div className="w-[295px] transition-transform duration-300 hover:-translate-y-2">
      <Link type="replace" href={`/product?prodId=${id}`}>
        <Card className="w-[295px] h-[405px] p-0 border-0 outline-none shadow-none transition-all duration-300 hover:shadow-lg cursor-pointer group">
          <CardHeader className="w-[295px] h-[295px] overflow-hidden rounded-[20px] relative">
            <img
              className="w-full h-full rounded-[20px] object-cover transition-transform duration-500 group-hover:scale-110"
              src={images[0] || ''}
              width={400}
              height={400}
              alt=""
            />
            {price != previousPrice && (
              <div className="absolute top-3 right-3 z-10">
                <span className="text-sm text-red-500 bg-red-100 py-1 px-3 rounded-xl font-semibold">
                  -{Math.round(100-price/previousPrice*100)}%
                </span>
              </div>
            )}
          </CardHeader>
          <CardContent className="flex flex-col gap-2 pt-4">
            <h1 className="text-xl capitalize font-semibold overflow-x-hidden text-nowrap transition-colors duration-300 group-hover:text-gray-700">
              {title}
            </h1>
            <div className="h-[18.5px]"><Stars rate={rate}/></div>
            <div className="flex gap-2 items-center">
              <h1 className="text-2xl font-bold transition-colors duration-300 group-hover:text-gray-900">
                ${price}
              </h1>
              {price != previousPrice && (
                <h1 className="text-xl line-through text-gray-400">
                  ${previousPrice}
                </h1>
              )}
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}
