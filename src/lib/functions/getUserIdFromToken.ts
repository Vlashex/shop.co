import { jwtVerify } from "jose";

export async function getUserIdFromToken(token: string): Promise<number | null> {
    try {
      const secret = new TextEncoder().encode(process.env.SECRET_KEY);
      const { payload } = await jwtVerify(token, secret);
  
      return payload.userId as number;
    } catch {
      return null;
    }
  }
  