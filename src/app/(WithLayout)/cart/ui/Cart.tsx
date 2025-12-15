"use client";
import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import CartProductCard from "../components/CartProductCard";
import { Separator } from "@/components/ui/separator";
import { InputWithButton } from "@/components/ui/inputWithButton";
import { Button } from "@/components/ui/button";
import { getProductsById } from "@/lib/actions/getProductsById";
import { ICard } from "@/lib/types";
import { useSelector } from "react-redux";
import { selectUser } from "@/lib/store/authSlice";

export default function Cart() {
  const [cartData, setCartData] = useState<ICard[] | null>(null);

  const user = useSelector(selectUser)

  const getProducts = async () => {
    const data = await getProductsById(user?.cart || [])
    setCartData(data)
  }

  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(()=>{
    const price = user?.cart.map((cart) => cartData?.find((el) => el.id == cart)?.price || 0) || [0];
    let  totalPrice = 0;
    price.map((el) => {
      totalPrice += el;
    })
    console.log(price)
    console.log(cartData)
    setTotalPrice(totalPrice);
  },[cartData])

  useLayoutEffect(()=>{
    getProducts()
  },[user])

  return (
    <main className="max-w-[1240px] mx-auto w-11/12 mb-auto">
      <h1 className="text-[40px] font-semibold mb-6">Your cart</h1>
      <div className="grid grid-cols-5 max-md:grid-cols-1 gap-3">
        <div className="grid col-span-3 justify-items-center justify-stretch grid-cols-1 flex-1 gap-4 border-solid border-[1px] border-gray-300 p-3 rounded-xl bg-white">
          {cartData
            ? cartData.map((value, index) => (
                <CartProductCard {...value} key={value.id} />
              ))
            : null}
        </div>
        <div className="h-fit flex flex-col gap-6 col-span-2 border-solid border-[1px] border-gray-300 p-3 rounded-xl bg-white">
          <h1 className="text-2xl">Order Summary</h1>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between">
              <h1 className="text-opacity-60">Subtotal</h1>
              <h2 className="font-semibold">
                $
                {cartData
                  ? cartData
                      .map((value) => value.price)
                      .reduce((a, b) => a + b, 0)
                  : 0}
              </h2>
            </div>
            <div className="flex justify-between">
              <h1 className="text-opacity-60">Discount (-20%)</h1>
              <h2 className="font-semibold text-red-500">-$0</h2>
            </div>
            <div className="flex justify-between">
              <h1 className="text-opacity-60">Delivery Fee</h1>
              <h2 className="font-semibold">
                $
                {cartData ? cartData.map((value) => value.price).length * 5 : 0}
              </h2>
            </div>
            <Separator className="h-px bg-gray-300" />
            <div className="flex justify-between">
              <h1 className="font-semibold">Total</h1>
              <h2 className="text-xl font-semibold">
                ${totalPrice}
              </h2>
            </div>
          </div>
          <form className="flex gap-3">
            <InputWithButton
              className="rounded-3xl"
              placeholder="Add promo code"
            />
            <Button className="text-sm bg-black text-white rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
              Apply
            </Button>
          </form>
          <Button className="text-sm bg-black text-white rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
            Go to Checkout
          </Button>
        </div>
      </div>
    </main>
  );
}
