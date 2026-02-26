"use server"

import { IUser } from "@/lib/types"
import { removeFromCartByTokenAction } from "@/app/actions/users"

export async function DeleteFromCartAction({access_token, prodId}:{access_token:string, prodId: string}):Promise<IUser | null> {
    return await removeFromCartByTokenAction(access_token, prodId);
}
