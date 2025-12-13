import { NextRequest, NextResponse } from 'next/server';
import { clearCart } from '@/lib/mock-db';
import { getUserIdFromToken } from '@/lib/functions/getUserIdFromToken';

// PATCH /api/users/clear-cart - очистить корзину
export async function PATCH(request: NextRequest) {
  try {
    // Получаем userId из заголовка Authorization
    const authHeader = request.headers.get('authorization');
    
    if (!authHeader) {
      return NextResponse.json(
        { error: 'Authorization header is required' },
        { status: 401 }
      );
    }
    
    // Извлекаем userId из токена
    const userId = await getUserIdFromToken(authHeader);
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Invalid or expired token' },
        { status: 401 }
      );
    }
    
    const updatedUser = clearCart(userId);
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

