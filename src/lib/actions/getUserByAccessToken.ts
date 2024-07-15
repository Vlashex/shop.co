"use server"
import { jwtVerify } from "jose"
import { prisma } from "../../../prisma/prisma"


const secretKey = process.env.SECRET_KEY

const verifyToken = async(token:string) => {
    try {
        const tokenData = await jwtVerify(token, new TextEncoder().encode(secretKey))
        return tokenData.payload
    }
    catch(error) {
        console.log(error)
        return null
    }
}

export async function getUserByAccessToken(token: string) {

    const tokenData = await verifyToken(token)
    if (tokenData == null) return null
    
    if(tokenData.userId == undefined) return null
    const user = await prisma.user.findFirst({where: {
        id: tokenData.userId
    }})

    if (user == null) return null

    const {password, ...userData} = user

    return userData
}
