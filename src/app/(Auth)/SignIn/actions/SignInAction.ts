"use server"
import crypto from 'crypto'
import { SignJWT } from 'jose'
import { prisma } from '../../../../../prisma/prisma';
import { IRegister, IUser } from '@/lib/types';

function hashValue(value: string) {
  const hash = crypto.createHash('sha256');
  hash.update(value);
  return hash.digest('hex'); 
}

const jwtTokens = async(userId: number) => {

    const secretKey = process.env.SECRET_KEY as string

    const iat = Math.floor(Date.now() / 1000);
    const exp = iat + 60* 60 * 24 * 7;

    return {
      user_id: userId,
      access_token: await new SignJWT({userId})
      .setProtectedHeader({alg: 'HS256', typ: 'JWT'})
      .setExpirationTime( exp  )
      .setIssuedAt(iat)
      .setNotBefore(iat)
      .sign(new TextEncoder().encode(secretKey)),
      refresh_token: await new SignJWT({userId})
      .setProtectedHeader({alg: 'HS256', typ: 'JWT'})
      .setExpirationTime( exp*4)
      .setIssuedAt(iat)
      .setNotBefore(iat)
      .sign(new TextEncoder().encode(secretKey)),
    }; 
};

export const SignInWithEmailAction = async ({email, password:loginPassword}: Omit<IRegister, 'name'>) => {

  interface ResponseUser extends IUser {
    password: string
  }

  const user:ResponseUser | null = await prisma.user.findFirst({where: {
    AND: {
      email: email,
      password: hashValue(loginPassword)
    }
  }})

  if (user == null) return null

  const tokens = await prisma.tokens.findFirst({where: {user_id: user.id}})

  const {password, ...res} = user

  if(tokens == null) {
    const { user_id, ...newTokens }= await jwtTokens(user.id)

    return {
      user: res,
      tokens: newTokens
    }
  }

  return {
    user: res,
    tokens: tokens
  }
}