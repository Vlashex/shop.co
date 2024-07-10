import Image from "next/image";
import React from "react";

import img from "@/../public/product1.png";
import { Button } from "@/components/ui/button";

export default function CartProductCard() {
  return (
    <div className="flex h-[124px] gap-3 w-full">
      <Image className="w-auto h-full" src={img} alt="" />
      <div className="flex flex-col w-max">
        <h1 className="font-semibold max-sm:text-xs">Gradient Graphic T-shirt</h1>
        <h2 className="text-xs">Size: Large</h2>
        <h2 className="text-xs">Color: White</h2>
        <h1 className="font-semibold mt-auto">$145</h1>
      </div>
      <div className="flex flex-col justify-between">
        <Button>del</Button>
        <div className="flex items-center justify-between w-[100px] bg-gray-100 h-7 rounded-[62px]">
          <Button className="text-xl font-semibold">–</Button>
          <h1 className="text-xl">1</h1>
          <Button className="text-xl font-semibold">+</Button>
        </div>
      </div>
    </div>
  );
}
