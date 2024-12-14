"use server"

import { IUser } from "@/lib/types"
import axios from "axios"

export async function AddManyToCartAction({access_token, prodsId}:{access_token:string, prodsId: number[]}):Promise<IUser | null> {
    return axios.patch(process.env.BACKEND_HOST + '/users/add-many-cart', {
        prodId: prodsId
    }, {
        headers: {
            Authorization: `${access_token}`
        }
    })
    .then((res) => res.data)
    .catch((err) => console.log(err)) || null
}
