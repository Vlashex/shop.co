import { NextRequest, NextResponse } from 'next/server';
import { getProductsByIds } from '@/lib/mock-db';

// POST /api/products/cart - получить товары по массиву ID
export async function POST(request: NextRequest) {
  try {
    const body: { productsId: number[] } = await request.json();
    
    if (!body.productsId || !Array.isArray(body.productsId)) {
      return NextResponse.json(
        { error: 'productsId must be an array' },
        { status: 400 }
      );
    }
    
    const products = getProductsByIds(body.productsId);
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

