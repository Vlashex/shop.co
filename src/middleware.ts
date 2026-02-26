import { NextRequest, NextResponse } from "next/server";
import { decodeJwt } from "jose";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("access_token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/SignIn", request.url));
  }

  try {
    const payload = decodeJwt(token);

    if (payload.exp !== undefined && payload.exp * 1000 < Date.now()) {
      return NextResponse.redirect(new URL("/SignIn", request.url));
    }

    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL("/SignIn", request.url));
  }
}
export const config = {
  matcher: ["/admin/:path*", "/cart/:path*", "/profile/:path*", "/shop/:path*"],
};
