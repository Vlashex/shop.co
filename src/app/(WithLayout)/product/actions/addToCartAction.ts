"use server"
import { getUserByAccessToken } from "@/lib/actions/getUserByAccessToken";
import { prisma } from "../../../../../prisma/prisma";

export async function AddToCartAction({access_token, prodId}:{access_token:string, prodId: number}) {

    const user = await getUserByAccessToken(access_token)

    if (user == null || user?.cart == undefined) return null

    await prisma.user.update({
      where: {
          id: user.id
      }, 
      data: {
          cart: [...user?.cart, prodId]
      }
    })
}
