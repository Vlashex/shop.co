import { NextRequest, NextResponse } from 'next/server';
import { addToCart, getUserIdFromToken } from '@/lib/mock-db';

// PATCH /api/users/add-cart - добавить товар в корзину
export async function PATCH(request: NextRequest) {
  try {
    const body: { prodId: number | string } = await request.json();
    
    // Получаем userId из заголовка Authorization
    const authHeader = request.headers.get('authorization');
    
    if (!authHeader) {
      return NextResponse.json(
        { error: 'Authorization header is required' },
        { status: 401 }
      );
    }
    
    // Извлекаем userId из токена
    const userId = getUserIdFromToken(authHeader);
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Invalid or expired token' },
        { status: 401 }
      );
    }
    
    const productId = typeof body.prodId === 'string' ? parseInt(body.prodId, 10) : body.prodId;
    if (isNaN(productId)) {
      return NextResponse.json(
        { error: 'Invalid product ID' },
        { status: 400 }
      );
    }
    
    const updatedUser = addToCart(userId, productId);
    if (!updatedUser) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(updatedUser);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

