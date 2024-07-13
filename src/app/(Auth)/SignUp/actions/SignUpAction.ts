"use server"
import crypto, { randomBytes, randomInt } from 'crypto'
import jwt from 'jsonwebtoken'
import { Register } from '@/lib/types';
import { prisma } from '../../../../../prisma/prisma';

function hashValue(value: string) {
  const hash = crypto.createHash('sha256');
  hash.update(value);
  return hash.digest('hex'); 
}

const jwtTokens = (userId: number) => {

    const access_token_secret_key  = randomBytes(100).toString()
    const refresh_token_secret_key = randomBytes(100).toString()


    return {
      access_token:  jwt.sign({ userId }, access_token_secret_key, { expiresIn: '7d' }),
      access_token_secret_key,
      refresh_token: jwt.sign({ userId }, refresh_token_secret_key, { expiresIn: '30d' }),
      refresh_token_secret_key
    }; 
};

export const SignUpAction = async ({email, name, password}: Register) => {
  const isAlreadyExist = await prisma.user.findFirst({where: {email: email}})
  if (isAlreadyExist != null) return null

  const user = await prisma.user.create({data: {
    email,
    name,
    password: hashValue(password)
  }})
  const tokens = await prisma.tokens.create({data: {...jwtTokens(user.id)}})
  

  return {
    user,
    tokens: {
      access_token: tokens.access_token,
      refresh_token: tokens.refresh_token
    }
  }
}