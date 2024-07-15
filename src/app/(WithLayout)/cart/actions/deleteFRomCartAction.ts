'use server'
import { prisma } from "../../../../../prisma/prisma";


export async function DeleteFRomCartAction(userId: number, cart: number[], prodId: number) {
  await prisma.user.update({
    where: {
        id: userId
    },
    data: {
        cart: cart.filter((el) => el!=prodId)
    }
  })
}
