import { parse } from "cookie";
import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

const secretKey = process.env.SECRET_KEY as string

export async function middleware(request: NextRequest) {

    if ( request.url.includes(`admin?secretKey=${process.env.SECRET_KEY}`) ) {
        return NextResponse.next()
    }
    if ( request.url.includes('/admin') ) {
        return NextResponse.redirect(new URL('/', request.url))
    }

    const cookie = request.headers.get('cookie')
    const cookies = parse(cookie || '')
    const token = cookies.access_token

    if (token == undefined) return NextResponse.redirect(new URL('/SignIn', request.url));

    try {
        await jwtVerify(token, new TextEncoder().encode(secretKey))
        return NextResponse.next()
    } catch (error) {
        console.log(error)
        return NextResponse.redirect(new URL('/SignIn', request.url))
    }
}

export const config = {
    matcher: ['/admin', '/cart','/profile', '/shop']
}
