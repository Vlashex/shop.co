"use server";

import { revalidatePath } from 'next/cache';
import {
  getAllUsers,
  getUserById,
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser,
  addToCart,
  addManyToCart,
  removeFromCart,
  removeAllFromCart,
  clearCart,
  getUserPassword,
  setUserPassword,
} from '@/lib/mock-db';
import { IRegister, IUser, IAuth, ITokens } from '@/lib/types';
import { hashValue } from '@/lib/functions/hashValue';
import { SignJWT } from 'jose';
import { getUserIdFromToken } from '@/lib/functions/getUserIdFromToken';

// Генерация простых токенов для mock (в реальном приложении используется JWT)
async function generateTokens(userId: number) {
  const secret = new TextEncoder().encode(process.env.SECRET_KEY);

  // access токен — 15 минут
  const access_token = await new SignJWT({ userId })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("15m")
    .sign(secret);

  // refresh токен — 7 дней
  const refresh_token = await new SignJWT({ userId })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret);

  return { access_token, refresh_token };
}


// Регистрация пользователя
export async function signUpAction(data: IRegister) {
  try {
    const existingUser = getUserByEmail(data.email);

    if (existingUser) {
      return {
        data: null,
        error: {
          statusCode: 409,
          message: "User with this email already exists",
        },
      };
    }

    const user = createUser(data, data.password);
    const tokens = await generateTokens(user.id);

    revalidatePath("/");

    return {
      data: { user, tokens },
      error: null,
    };
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
    const user = getUserByEmail(data.email);
    if (!user) return null;

    const storedPassword = getUserPassword(user.id);
    if (!storedPassword || storedPassword !== data.password) {
      return null;
    }

    const tokens = await generateTokens(user.id);

    return { user, tokens };
  } catch (error) {
    console.error("Sign in error:", error);
    return null;
  }
}


// Получить всех пользователей
export async function getAllUsersAction(): Promise<IUser[]> {
  return getAllUsers();
}

// Получить пользователя по ID
export async function getUserByIdAction(id: number): Promise<IUser | null> {
  return getUserById(id);
}

// Обновить пользователя
export async function updateUserAction(
  id: number,
  data: Partial<Omit<IUser, 'id'>>
): Promise<IUser | null> {
  const updatedUser = updateUser(id, data);
  if (updatedUser) {
    revalidatePath('/profile');
  }
  return updatedUser;
}

// Удалить пользователя
export async function deleteUserAction(id: number): Promise<boolean> {
  const deleted = deleteUser(id);
  if (deleted) {
    revalidatePath('/');
  }
  return deleted;
}

// Добавить товар в корзину (по userId)
export async function addToCartAction(
  userId: number,
  productId: number
): Promise<IUser | null> {
  const updatedUser = addToCart(userId, productId);
  if (updatedUser) {
    revalidatePath('/cart');
    revalidatePath('/');
  }
  return updatedUser;
}

// Добавить товар в корзину (по access_token)
export async function addToCartByTokenAction(
  accessToken: string,
  productId: number
): Promise<IUser | null> {
  const userId = await getUserIdFromToken(accessToken);
  if (!userId) {
    return null;
  }
  return addToCartAction(userId, productId);
}

// Добавить несколько товаров в корзину
export async function addManyToCartAction(
  userId: number,
  productIds: number[]
): Promise<IUser | null> {
  const updatedUser = addManyToCart(userId, productIds);
  if (updatedUser) {
    revalidatePath('/cart');
    revalidatePath('/');
  }
  return updatedUser;
}

// Добавить несколько товаров в корзину (по access_token)
export async function addManyToCartByTokenAction(
  accessToken: string,
  productIds: number[]
): Promise<IUser | null> {
  const userId = await getUserIdFromToken(accessToken);
  if (!userId) {
    return null;
  }
  return addManyToCartAction(userId, productIds);
}

// Удалить товар из корзины
export async function removeFromCartAction(
  userId: number,
  productId: number
): Promise<IUser | null> {
  const updatedUser = removeFromCart(userId, productId);
  if (updatedUser) {
    revalidatePath('/cart');
  }
  return updatedUser;
}

// Удалить товар из корзины (по access_token)
export async function removeFromCartByTokenAction(
  accessToken: string,
  productId: number
): Promise<IUser | null> {
  const userId = await getUserIdFromToken(accessToken);
  if (!userId) {
    return null;
  }
  return removeFromCartAction(userId, productId);
}

// Удалить все экземпляры товара из корзины
export async function removeAllFromCartAction(
  userId: number,
  productId: number
): Promise<IUser | null> {
  const updatedUser = removeAllFromCart(userId, productId);
  if (updatedUser) {
    revalidatePath('/cart');
  }
  return updatedUser;
}

// Удалить все экземпляры товара из корзины (по access_token)
export async function removeAllFromCartByTokenAction(
  accessToken: string,
  productId: number
): Promise<IUser | null> {
  const userId = await getUserIdFromToken(accessToken);
  if (!userId) {
    return null;
  }
  return removeAllFromCartAction(userId, productId);
}

// Очистить корзину
export async function clearCartAction(userId: number): Promise<IUser | null> {
  const updatedUser = clearCart(userId);
  if (updatedUser) {
    revalidatePath('/cart');
  }
  return updatedUser;
}

// Очистить корзину (по access_token)
export async function clearCartByTokenAction(accessToken: string): Promise<IUser | null> {
  const userId = await getUserIdFromToken(accessToken);
  if (!userId) {
    return null;
  }
  return clearCartAction(userId);
}

