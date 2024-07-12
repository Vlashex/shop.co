"use server"

import { NextResponse } from "next/server"

export default async function signUpAction({
    username,
    email,
    password,
}: {
    username: string
    email: string
    password: string
}) {
    "use server"
    return NextResponse.json({username})
}
