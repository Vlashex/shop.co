import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import cardImg from '@/../public/Frame 32.png'
import star from '@/../public/Star.svg'

export default function ProductCard() {
  return (
    <Link type="replace" href={`/product`}>
      <Card className="w-[295px] h-[405px] p-0 border-0 outline-none shadow-none">
        <CardHeader>
          <Image src={cardImg} alt="" />
        </CardHeader>
        <CardContent>
          <h1 className="text-xl capitalize font-semibold overflow-x-hidden text-nowrap">
            T-shirt With Tape Details
          </h1>
          <div className="flex">
        <Image src={star} alt=''/>
        <Image src={star} alt=''/>
        <Image src={star} alt=''/>
        <Image src={star} alt=''/>
        <Image src={star} alt=''/>
      </div>
          <div className="flex gap-2 items-center">
            <h1 className="text-xl">$120</h1>
            <h1 className="text-xl line-through text-gray-400">$120</h1>
            <h1 className="text-sm text-red-500 bg-red-100 py-1 px-3 rounded-xl">
              -0%
            </h1>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
