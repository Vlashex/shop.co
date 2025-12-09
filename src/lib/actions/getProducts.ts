"use server";

import { ICard } from "../types";
import { getProductsAction } from "@/app/actions/products";

export async function getProducts(start: number, limit: number): Promise<ICard[]> {
  console.log(start, limit, 'start, limit')
  return getProductsAction(start, limit);
}
