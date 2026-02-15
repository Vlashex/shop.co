"use server";

import { revalidatePath } from "next/cache";
import { IRegister, IUser, IAuth } from "@/lib/types";

const BASE_URL = process.env.BACKEND_HOST || "http://localhost:4000/api";

// Регистрация пользователя
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



// Вход пользователя
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


// Получить всех пользователей
export async function getAllUsersAction(): Promise<IUser[]> {
  const response = await fetch(`${BASE_URL}/users`, { cache: "no-store" });
  if (!response.ok) return [];
  return response.json();
}

// Получить пользователя по ID
export async function getUserByIdAction(id: number): Promise<IUser | null> {
  const response = await fetch(`${BASE_URL}/users/${id}`, { cache: "no-store" });
  if (!response.ok) return null;
  return response.json();
}

// Обновить пользователя
export async function updateUserAction(
  id: number,
  data: Partial<Omit<IUser, 'id'>>
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

// Удалить пользователя
export async function deleteUserAction(id: number): Promise<boolean> {
  const response = await fetch(`${BASE_URL}/users/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) return false;
  revalidatePath("/");
  return true;
}

// Добавить товар в корзину (по userId)
export async function addToCartAction(
  userId: number,
  productId: number
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

// Добавить товар в корзину (по access_token)
export async function addToCartByTokenAction(
  accessToken: string,
  productId: number
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

// Добавить несколько товаров в корзину
export async function addManyToCartAction(
  userId: number,
  productIds: number[]
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

// Добавить несколько товаров в корзину (по access_token)
export async function addManyToCartByTokenAction(
  accessToken: string,
  productIds: number[]
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

// Удалить товар из корзины
export async function removeFromCartAction(
  userId: number,
  productId: number
): Promise<IUser | null> {
  const response = await fetch(`${BASE_URL}/cart/items/${productId}`, {
    method: "DELETE",
  });

  if (!response.ok) return null;
  const updatedUser = await response.json();
  revalidatePath("/cart");
  return updatedUser;
}

// Удалить товар из корзины (по access_token)
export async function removeFromCartByTokenAction(
  accessToken: string,
  productId: number
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

// Удалить все экземпляры товара из корзины
export async function removeAllFromCartAction(
  userId: number,
  productId: number
): Promise<IUser | null> {
  return removeFromCartAction(userId, productId);
}

// Удалить все экземпляры товара из корзины (по access_token)
export async function removeAllFromCartByTokenAction(
  accessToken: string,
  productId: number
): Promise<IUser | null> {
  return removeFromCartByTokenAction(accessToken, productId);
}

// Очистить корзину
export async function clearCartAction(userId: number): Promise<IUser | null> {
  const response = await fetch(`${BASE_URL}/cart`, {
    method: "DELETE",
  });

  if (!response.ok) return null;
  const updatedUser = await response.json();
  revalidatePath("/cart");
  return updatedUser;
}

// Очистить корзину (по access_token)
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

