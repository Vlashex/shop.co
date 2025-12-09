"use server";

import { INewCard, ICard } from "@/lib/types";
import { createProductAction } from "@/app/actions/products";

export default async function createCardAction(
  title: string,
  price: number,
  rate: number,
  images: string[]
): Promise<INewCard | null> {
  try {
    const card: ICard | null = await createProductAction({
      title,
      price,
      rate,
      images,
    });

    if (!card) return null;

    const { id, previousPrice, ...newCard } = card;
    return newCard;
  } catch (err) {
    console.log(err);
    return null;
  }
}
