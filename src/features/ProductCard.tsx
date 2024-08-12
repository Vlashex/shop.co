import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Stars from "./Stars";

export default function ProductCard(
  {id, title, images, price, previousPrice, rate, createdAt}:
  {id:number ,title:string, images:string[], price:number, previousPrice:number, rate:number, createdAt:any}) 
{
  return (
    <Link type="replace" href={`/product?prodId=${id}`} className="w-fit">
      <Card className="w-[295px] h-[405px] p-0 border-0 outline-none shadow-none">
        <CardHeader className="w-[295px] h-[295px] overflow-hidden">
          <Image className="w-full h-full rounded-[20px]" src={images != undefined? images[0]: ''} width={400} height={400} alt="" />
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <h1 className="text-xl capitalize font-semibold overflow-x-hidden text-nowrap">
            {title}
          </h1>
          <div className="h-[18.5px]"><Stars rate={rate}/></div>
          <div className="flex gap-2 items-center">
            <h1 className="text-2xl font-bold">${price}</h1>
            {price != previousPrice
            ?
            <>
              <h1 className="text-xl line-through text-gray-400">${previousPrice}</h1>
              <h1 className="text-sm text-red-500 bg-red-100 py-1 px-3 rounded-xl">
                -0%
              </h1>
            </>  
            :null
            }
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
