import { NextRequest, NextResponse } from 'next/server';
import { getUserByEmail, getUserPassword } from '@/lib/mock-db';
import { IAuth, ITokens } from '@/lib/types';
import { hashValue } from '@/lib/functions/hashValue';

// Генерация простых токенов для mock
function generateTokens(): ITokens {
  return {
    access_token: `mock_access_${Date.now()}_${Math.random().toString(36).substring(7)}`,
    refresh_token: `mock_refresh_${Date.now()}_${Math.random().toString(36).substring(7)}`,
  };
}

// POST /api/users/signin - вход пользователя
export async function POST(request: NextRequest) {
  try {
    const body: { email: string; password: string } = await request.json();
    
    if (!body.email || !body.password) {
      return NextResponse.json(
        { statusCode: 400, message: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    const user = getUserByEmail(body.email);
    if (!user) {
      return NextResponse.json(
        { statusCode: 401, message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    const storedPassword = getUserPassword(user.id);
    const hashedPassword = hashValue(body.password);

    if (!storedPassword || storedPassword !== hashedPassword) {
      return NextResponse.json(
        { statusCode: 401, message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    const tokens = generateTokens();
    
    const response: IAuth = {
      user,
      tokens,
    };
    
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(
      { statusCode: 500, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

