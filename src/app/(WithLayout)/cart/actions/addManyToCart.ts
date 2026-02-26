"use server"

import { IUser } from "@/lib/types"
import { addManyToCartByTokenAction } from "@/app/actions/users"

export async function AddManyToCartAction({access_token, prodsId}:{access_token:string, prodsId: string[]}):Promise<IUser | null> {
    return await addManyToCartByTokenAction(access_token, prodsId);
}
