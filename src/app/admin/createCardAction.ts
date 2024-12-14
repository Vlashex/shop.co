"use server";

import { INewCard } from "@/lib/types";
import axios, { AxiosError, AxiosResponse } from "axios";


export default async function createCardAction(
  title: string,
  price: string | number,
  rate: number,
  images: string[]
): Promise<INewCard | null> {
  const parsedPrice = typeof price === "string" ? parseFloat(price) : price;


  try {
    const card: INewCard | null = await axios
      .post<INewCard>(process.env.BACKEND_HOST+"/products", {
        title:title,
        price:parsedPrice,
        rate: Number(rate),
        images: images,
      })
      .then((responce: AxiosResponse) => responce.data)
      .catch((err: AxiosError) => {
        console.log(err);
        return null;
      });

    return card;
  } catch (err) {
    console.log(err);
    return null;
  }
}
