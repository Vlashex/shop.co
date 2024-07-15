"use server"

import { prisma } from "../../../prisma/prisma"

export async function getProductsById(prodId: number[]) {
    const products = await prisma.productCard.findMany({where: {
        id: {in: prodId}
    }})
    return products
}