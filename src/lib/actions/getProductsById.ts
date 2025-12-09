"use server"

import { ICard } from "../types"
import { getProductByIdAction, getProductsByIdAction } from "@/app/actions/products"

export async function getProductById(prodId: number) {
    return await getProductByIdAction(prodId);
}

export async function getProductsById(productsId: number[]): Promise<ICard[] | null> {
    return await getProductsByIdAction(productsId);
}