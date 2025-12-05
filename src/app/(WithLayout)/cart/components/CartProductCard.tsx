'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import CountButton from "@/features/CountButton";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "@/lib/store/authSlice";
import { AddToCartAction } from "../actions/addToCartAction";
import { DeleteFromCartAction } from "../actions/deleteFromCart";
import { DeleteFromCartAllAction } from "../actions/deleteFromCartAll";

export default function CartProductCard(
  {id, title, images, price, previousPrice, rate}:
  {id:number ,title:string, images:string[], price:number, previousPrice:number, rate:number }
) {

  const user = useSelector(selectUser)
  const inCart = user?.cart.filter((el) => el == id).length || 1;

  const { refresh } = useRouter()
  const [counter, setCounter] = useState<number>(inCart)
  const [cookies] = useCookies(['access_token'])

  const dispatch = useDispatch();

  const increaseCounter = async () => {
    setCounter(counter + 1);

    if (!user) return;
  
    const newUser = await AddToCartAction({access_token: cookies.access_token, prodId: id})
    
    if (!newUser) return;
    
    dispatch(setUser(newUser))
  }
  const decreaseCounter = async () => {
    setCounter(counter - 1);

    if (user == null) return;

    const newUser = await DeleteFromCartAction({access_token: cookies.access_token, prodId: id});
    
    if (!newUser) return;

    dispatch(setUser(newUser))
  }

  return (
    <div className="flex h-[124px] gap-3 w-full p-2 rounded-lg transition-all duration-300 hover:bg-gray-50 hover:translate-x-1">
      <div className="transition-transform duration-300 hover:scale-105">
        <Image
          className="w-auto h-full rounded-[9px] object-cover"
          src={process.env.BACKEND_HOST || "http://localhost:4200/api" + images[0]}
          width={300}
          height={300}
          alt=""
        />
      </div>
      <div className="flex flex-col w-max">
        <h1 className="font-semibold max-sm:text-xs transition-colors duration-300 hover:text-gray-700">{title}{id}</h1>
        <h2 className="text-xs text-gray-500">Size: Any</h2>
        <h2 className="text-xs text-gray-500">Color: Any</h2>
        <h1 className="font-semibold mt-auto">${price}</h1>
      </div>
      <div className="flex flex-col justify-between ml-auto">
        <div className="transition-transform duration-300 hover:scale-110 active:scale-95">
          <Button
            className="ml-auto p-0 transition-opacity duration-300 hover:opacity-70"
            onClick={async()=>{
              const newUser = await DeleteFromCartAllAction({access_token: cookies.access_token, prodId: id});

              if (!newUser) return;

              dispatch(setUser(newUser))
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 w-6 h-6 justify-self-end text-red-500">
              <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
            </svg>
          </Button>
        </div>
        <div className="h-[36px] flex items-center">
          <CountButton counter={counter} increase={increaseCounter} decrease={decreaseCounter}/>
        </div>
      </div>
    </div>
  );
}
