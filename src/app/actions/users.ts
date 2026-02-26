"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { IRegister, IUser, IAuth } from "@/lib/types";

const BASE_URL = process.env.BACKEND_HOST || "http://localhost:4000/api";
const ACCESS_COOKIE_NAME = "access_token";
const REFRESH_COOKIE_NAME = "refresh_token";

function toAuthorizationHeader(token: string): string {
  if (!token) return "";
  return token.startsWith("Bearer ") ? token : `Bearer ${token}`;
}

function setAccessCookie(accessToken: string) {
  cookies().set(ACCESS_COOKIE_NAME, accessToken, {
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
}

function setRefreshCookie(refreshToken: string) {
  cookies().set(REFRESH_COOKIE_NAME, refreshToken, {
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
  });
}

function clearAuthCookies() {
  const store = cookies();
  store.delete(ACCESS_COOKIE_NAME);
  store.delete(REFRESH_COOKIE_NAME);
}

async function refreshAccessToken(): Promise<string | null> {
  const refreshToken = cookies().get(REFRESH_COOKIE_NAME)?.value;
  if (!refreshToken) return null;

  const response = await fetch(`${BASE_URL}/auth/refresh`, {
    method: "POST",
    cache: "no-store",
    headers: {
      Cookie: `${REFRESH_COOKIE_NAME}=${encodeURIComponent(refreshToken)}`,
    },
  });

  if (!response.ok) {
    clearAuthCookies();
    return null;
  }

  const payload = (await response.json()) as {
    access_token?: string;
    refresh_token?: string;
  };

  if (!payload.access_token) {
    clearAuthCookies();
    return null;
  }

  setAccessCookie(payload.access_token);
  if (payload.refresh_token) {
    setRefreshCookie(payload.refresh_token);
  }

  return payload.access_token;
}

async function withAutoRefresh(
  accessToken: string,
  request: (token: string) => Promise<Response>
): Promise<Response> {
  const fallbackToken = cookies().get(ACCESS_COOKIE_NAME)?.value || "";
  const initialToken = accessToken || fallbackToken;

  let response = await request(initialToken);
  if (response.status !== 401) {
    return response;
  }

  const nextAccessToken = await refreshAccessToken();
  if (!nextAccessToken) {
    return response;
  }

  response = await request(nextAccessToken);
  return response;
}

export async function signUpAction(data: IRegister) {
  try {
    const response = await fetch(`${BASE_URL}/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const payload = await response.json();
    if (!response.ok) {
      return { data: null, error: payload };
    }

    if (payload?.tokens?.access_token) {
      setAccessCookie(payload.tokens.access_token);
    }
    if (payload?.tokens?.refresh_token) {
      setRefreshCookie(payload.tokens.refresh_token);
    }

    revalidatePath("/");
    return { data: payload, error: null };
  } catch {
    return {
      data: null,
      error: { statusCode: 500, message: "Internal server error" },
    };
  }
}

export async function signInAction(data: Omit<IRegister, "name">): Promise<IAuth | null> {
  try {
    const response = await fetch(`${BASE_URL}/auth/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) return null;
    const payload = (await response.json()) as IAuth;

    if (payload?.tokens?.access_token) {
      setAccessCookie(payload.tokens.access_token);
    }
    if (payload?.tokens?.refresh_token) {
      setRefreshCookie(payload.tokens.refresh_token);
    }

    return payload;
  } catch (error) {
    console.error("Sign in error:", error);
    return null;
  }
}

export async function getAllUsersAction(): Promise<IUser[]> {
  const response = await fetch(`${BASE_URL}/users`, { cache: "no-store" });
  if (!response.ok) return [];
  return response.json();
}

export async function getUserByIdAction(id: string): Promise<IUser | null> {
  const response = await fetch(`${BASE_URL}/users/${id}`, { cache: "no-store" });
  if (!response.ok) return null;
  return response.json();
}

export async function updateUserAction(
  id: string,
  data: Partial<Omit<IUser, "id">>
): Promise<IUser | null> {
  const response = await fetch(`${BASE_URL}/users/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) return null;
  const updatedUser = await response.json();
  revalidatePath("/profile");
  return updatedUser;
}

export async function deleteUserAction(id: string): Promise<boolean> {
  const response = await fetch(`${BASE_URL}/users/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) return false;
  revalidatePath("/");
  return true;
}

export async function addToCartAction(
  _userId: string,
  productId: string
): Promise<IUser | null> {
  const response = await fetch(`${BASE_URL}/cart/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ productId }),
  });

  if (!response.ok) return null;
  const updatedUser = await response.json();
  revalidatePath("/cart");
  revalidatePath("/");
  return updatedUser;
}

export async function addToCartByTokenAction(
  accessToken: string,
  productId: string
): Promise<IUser | null> {
  const response = await withAutoRefresh(accessToken, (token) =>
    fetch(`${BASE_URL}/cart/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: toAuthorizationHeader(token),
      },
      body: JSON.stringify({ productId }),
    })
  );

  if (!response.ok) return null;
  const updatedUser = await response.json();
  revalidatePath("/cart");
  revalidatePath("/");
  return updatedUser;
}

export async function addManyToCartAction(
  _userId: string,
  productIds: string[]
): Promise<IUser | null> {
  const response = await fetch(`${BASE_URL}/cart/items/bulk`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ productIds }),
  });

  if (!response.ok) return null;
  const updatedUser = await response.json();
  revalidatePath("/cart");
  revalidatePath("/");
  return updatedUser;
}

export async function addManyToCartByTokenAction(
  accessToken: string,
  productIds: string[]
): Promise<IUser | null> {
  const response = await withAutoRefresh(accessToken, (token) =>
    fetch(`${BASE_URL}/cart/items/bulk`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: toAuthorizationHeader(token),
      },
      body: JSON.stringify({ productIds }),
    })
  );

  if (!response.ok) return null;
  const updatedUser = await response.json();
  revalidatePath("/cart");
  revalidatePath("/");
  return updatedUser;
}

export async function removeFromCartAction(
  _userId: string,
  productId: string
): Promise<IUser | null> {
  const response = await fetch(`${BASE_URL}/cart/items/${productId}`, {
    method: "DELETE",
  });

  if (!response.ok) return null;
  const updatedUser = await response.json();
  revalidatePath("/cart");
  return updatedUser;
}

export async function removeFromCartByTokenAction(
  accessToken: string,
  productId: string
): Promise<IUser | null> {
  const response = await withAutoRefresh(accessToken, (token) =>
    fetch(`${BASE_URL}/cart/items/${productId}`, {
      method: "DELETE",
      headers: { Authorization: toAuthorizationHeader(token) },
    })
  );

  if (!response.ok) return null;
  const updatedUser = await response.json();
  revalidatePath("/cart");
  return updatedUser;
}

export async function removeAllFromCartAction(
  userId: string,
  productId: string
): Promise<IUser | null> {
  return removeFromCartAction(userId, productId);
}

export async function removeAllFromCartByTokenAction(
  accessToken: string,
  productId: string
): Promise<IUser | null> {
  return removeFromCartByTokenAction(accessToken, productId);
}

export async function clearCartAction(_userId: string): Promise<IUser | null> {
  const response = await fetch(`${BASE_URL}/cart`, {
    method: "DELETE",
  });

  if (!response.ok) return null;
  const updatedUser = await response.json();
  revalidatePath("/cart");
  return updatedUser;
}

export async function clearCartByTokenAction(accessToken: string): Promise<IUser | null> {
  const response = await withAutoRefresh(accessToken, (token) =>
    fetch(`${BASE_URL}/cart`, {
      method: "DELETE",
      headers: { Authorization: toAuthorizationHeader(token) },
    })
  );

  if (!response.ok) return null;
  const updatedUser = await response.json();
  revalidatePath("/cart");
  return updatedUser;
}
