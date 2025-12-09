import { parse } from "cookie";
import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request: NextRequest) {
  const url = request.nextUrl;

  if (url.pathname === "/admin") {
    if (url.searchParams.get("secretKey") === process.env.SECRET_KEY) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/", request.url));
  }

  const rawCookie = request.headers.get("cookie");
  const cookies = parse(rawCookie || "");
  const token = cookies.access_token;

  if (!token) {
    return NextResponse.redirect(new URL("/SignIn", request.url));
  }

  try {
    const secret = new TextEncoder().encode(process.env.SECRET_KEY);
    await jwtVerify(token, secret);
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL("/SignIn", request.url));
  }
}

export const config = {
  matcher: ["/admin/:path*", "/cart/:path*", "/profile/:path*", "/shop/:path*"],
};
