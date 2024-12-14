"use server"

import { IUser } from "@/lib/types"
import axios from "axios"

export async function AddToCartAction({access_token, prodId}:{access_token:string, prodId: number}):Promise<IUser | null> {
    return axios.patch(process.env.BACKEND_HOST + '/users/add-cart', {
        prodId: String(prodId)
    }, {
        headers: {
            Authorization: `${access_token}`
        }
    })
    .then((res) => res.data)
    .catch((err) => console.log(err)) || null
}
