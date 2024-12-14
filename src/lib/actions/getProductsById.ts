"use server"

import axios from "axios"
import { ICard } from "../types"


export async function getProductById(prodId: number) {
    return await axios.get<ICard>(process.env.BACKEND_HOST + '/products/' + prodId)
        .then((res) => res.data)
        .catch((err) => {
            console.log(err)
            return null
        })
}
export async function getProductsById(productsId: number[]):Promise<ICard[] | null> {
    if (productsId.length === 0) return null;
    return await axios.post<ICard[]>(process.env.BACKEND_HOST + '/products/cart', {
        productsId
    })
        .then((res) => res.data)
        .catch((err) => {
            console.log(err)
            return null
        })
}