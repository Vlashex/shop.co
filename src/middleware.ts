import { NextRequest, NextResponse } from "next/server";
import { decodeJwt } from "jose";

const BASE_URL = process.env.BACKEND_HOST || "http://localhost:4000/api";
const ACCESS_COOKIE_NAME = "access_token";
const REFRESH_COOKIE_NAME = "refresh_token";

async function refreshAccessToken(request: NextRequest): Promise<NextResponse | null> {
  const refreshToken = request.cookies.get(REFRESH_COOKIE_NAME)?.value;
  if (!refreshToken) return null;

  const refreshResponse = await fetch(`${BASE_URL}/auth/refresh`, {
    method: "POST",
    headers: {
      Cookie: `${REFRESH_COOKIE_NAME}=${encodeURIComponent(refreshToken)}`,
    },
    cache: "no-store",
  });

  if (!refreshResponse.ok) {
    return null;
  }

  const payload = (await refreshResponse.json()) as {
    access_token?: string;
    refresh_token?: string;
  };

  if (!payload.access_token) {
    return null;
  }

  const response = NextResponse.next();
  response.cookies.set(ACCESS_COOKIE_NAME, payload.access_token, {
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  if (payload.refresh_token) {
    response.cookies.set(REFRESH_COOKIE_NAME, payload.refresh_token, {
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
    });
  }

  return response;
}

export async function middleware(request: NextRequest) {
  const token = request.cookies.get(ACCESS_COOKIE_NAME)?.value;

  if (!token) {
    const refreshed = await refreshAccessToken(request);
    if (refreshed) return refreshed;
    return NextResponse.redirect(new URL("/SignIn", request.url));
  }

  try {
    const payload = decodeJwt(token);

    if (payload.exp !== undefined && payload.exp * 1000 < Date.now()) {
      const refreshed = await refreshAccessToken(request);
      if (refreshed) return refreshed;
      return NextResponse.redirect(new URL("/SignIn", request.url));
    }

    return NextResponse.next();
  } catch {
    const refreshed = await refreshAccessToken(request);
    if (refreshed) return refreshed;
    return NextResponse.redirect(new URL("/SignIn", request.url));
  }
}
export const config = {
  matcher: ["/admin/:path*", "/cart/:path*", "/profile/:path*", "/shop/:path*"],
};
