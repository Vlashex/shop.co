"use server";

import { revalidatePath } from 'next/cache';
import {
  getAllProducts,
  getProductById,
  getProductsByIds,
  createProduct,
  updateProduct,
  deleteProduct,
  seedMockData,
} from '@/lib/mock-db';
import { ICard, INewCard } from '@/lib/types';


// Создать mock данные
export async function seedMockDataAction() {
  return seedMockData(); 
}
// Получить товары с пагинацией
export async function getProductsAction(start: number, limit: number) {
  return getAllProducts(start, limit);
}

// Получить товар по ID
export async function getProductByIdAction(id: number): Promise<ICard | null> {
  return getProductById(id);
}

// Получить товары по массиву ID
export async function getProductsByIdAction(
  productsId: number[]
): Promise<ICard[] | null> {
  if (productsId.length === 0) return null;
  return getProductsByIds(productsId);
}

// Создать товар
export async function createProductAction(
  data: INewCard
): Promise<ICard | null> {
  try {
    const product = createProduct(data);
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
  id: number,
  data: Partial<INewCard>
): Promise<ICard | null> {
  const updatedProduct = updateProduct(id, data);
  if (updatedProduct) {
    revalidatePath('/shop');
    revalidatePath(`/product/${id}`);
    revalidatePath('/admin');
  }
  return updatedProduct;
}

// Удалить товар
export async function deleteProductAction(id: number): Promise<boolean> {
  const deleted = deleteProduct(id);
  if (deleted) {
    revalidatePath('/shop');
    revalidatePath('/admin');
  }
  return deleted;
}

