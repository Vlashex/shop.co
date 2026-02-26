"use server";

import { revalidatePath } from "next/cache";
import { ICard, INewCard } from "@/lib/types";

const BASE_URL = process.env.BACKEND_HOST || "http://localhost:4000/api";


// Создать mock данные
export async function seedMockDataAction() {
  const response = await fetch(`${BASE_URL}/products/seed`, {
    method: "POST",
  });

  if (!response.ok) {
    return null;
  }

  return response.json();
}
// Получить товары с пагинацией
export async function getProductsAction(start: number, limit: number) {
  const response = await fetch(
    `${BASE_URL}/products?start=${start}&limit=${limit}`,
    { cache: "no-store" }
  );

  if (!response.ok) return [];
  return response.json();
}

// Получить товар по ID
export async function getProductByIdAction(id: string): Promise<ICard | null> {
  const response = await fetch(`${BASE_URL}/products/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) return null;
  return response.json();
}

// Получить товары по массиву ID
export async function getProductsByIdAction(
  productsId: string[]
): Promise<ICard[] | null> {
  if (productsId.length === 0) return null;
  const response = await fetch(`${BASE_URL}/products/bulk`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids: productsId }),
  });

  if (!response.ok) return null;
  return response.json();
}

// Создать товар
export async function createProductAction(
  data: INewCard
): Promise<ICard | null> {
  try {
    const response = await fetch(`${BASE_URL}/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) return null;
    const product = await response.json();
    revalidatePath('/shop');
    revalidatePath('/admin');
    return product;
  } catch (error) {
    console.error('Error creating product:', error);
    return null;
  }
}

// Обновить товар
export async function updateProductAction(
  id: string,
  data: Partial<INewCard>
): Promise<ICard | null> {
  const response = await fetch(`${BASE_URL}/products/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) return null;
  const updatedProduct = await response.json();

  revalidatePath("/shop");
  revalidatePath(`/product/${id}`);
  revalidatePath("/admin");
  return updatedProduct;
}

// Удалить товар
export async function deleteProductAction(id: string): Promise<boolean> {
  const response = await fetch(`${BASE_URL}/products/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) return false;

  revalidatePath("/shop");
  revalidatePath("/admin");
  return true;
}

