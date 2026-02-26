"use server"

import { IUser } from "@/lib/types"
import { addToCartByTokenAction } from "@/app/actions/users"

export async function AddToCartAction({access_token, prodId}:{access_token:string, prodId: string}):Promise<IUser | null> {
    return await addToCartByTokenAction(access_token, prodId);
}
