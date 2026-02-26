"use server";

import { revalidatePath } from "next/cache";
import { IRegister, IUser, IAuth } from "@/lib/types";

const BASE_URL = process.env.BACKEND_HOST || "http://localhost:4000/api";

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
    return response.json();
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
  const response = await fetch(`${BASE_URL}/cart/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: accessToken,
    },
    body: JSON.stringify({ productId }),
  });

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
  const response = await fetch(`${BASE_URL}/cart/items/bulk`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: accessToken,
    },
    body: JSON.stringify({ productIds }),
  });

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
  const response = await fetch(`${BASE_URL}/cart/items/${productId}`, {
    method: "DELETE",
    headers: { Authorization: accessToken },
  });

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
  const response = await fetch(`${BASE_URL}/cart`, {
    method: "DELETE",
    headers: { Authorization: accessToken },
  });

  if (!response.ok) return null;
  const updatedUser = await response.json();
  revalidatePath("/cart");
  return updatedUser;
}