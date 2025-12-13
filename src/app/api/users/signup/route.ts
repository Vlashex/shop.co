import { NextRequest, NextResponse } from 'next/server';
import { createUser, getUserByEmail } from '@/lib/mock-db';
import { IRegister, IAuth, ITokens } from '@/lib/types';
import { hashValue } from '@/lib/functions/hashValue';

// Генерация простых токенов для mock
function generateTokens(): ITokens {
  return {
    access_token: `mock_access_${Date.now()}_${Math.random().toString(36).substring(7)}`,
    refresh_token: `mock_refresh_${Date.now()}_${Math.random().toString(36).substring(7)}`,
  };
}

// POST /api/users/signup - регистрация пользователя
export async function POST(request: NextRequest) {
  try {
    const body: IRegister = await request.json();
    
    // Простая валидация
    if (!body.email || !body.name || !body.password) {
      return NextResponse.json(
        { statusCode: 400, message: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Проверка существования пользователя
    const existingUser = getUserByEmail(body.email);
    if (existingUser) {
      return NextResponse.json(
        { statusCode: 409, message: 'User with this email already exists' },
        { status: 409 }
      );
    }
    
    const hashedPassword = hashValue(body.password);
    const user = createUser(body, hashedPassword);
    const tokens = generateTokens();
    
    const response: IAuth = {
      user,
      tokens,
    };
    
    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { statusCode: 500, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

