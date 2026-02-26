"use server"

import { IUser } from "@/lib/types"
import { removeAllFromCartByTokenAction } from "@/app/actions/users"

export async function DeleteFromCartAllAction({access_token, prodId}:{access_token:string, prodId: string}):Promise<IUser | null> {
    return await removeAllFromCartByTokenAction(access_token, prodId);
}
