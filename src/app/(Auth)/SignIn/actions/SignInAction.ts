"use server"
import { hashValue } from '@/lib/functions/hashValue';
import { IAuth, IRegister, IUser } from '@/lib/types';
import axios from "axios";

// const jwtTokens = async(userId: number) => {

//     const secretKey = process.env.SECRET_KEY as string

//     const iat = Math.floor(Date.now() / 1000);
//     const exp = iat + 60* 60 * 24 * 7;

//     return {
//       user_id: userId,
//       access_token: await new SignJWT({userId})
//       .setProtectedHeader({alg: 'HS256', typ: 'JWT'})
//       .setExpirationTime( exp  )
//       .setIssuedAt(iat)
//       .setNotBefore(iat)
//       .sign(new TextEncoder().encode(secretKey)),
//       refresh_token: await new SignJWT({userId})
//       .setProtectedHeader({alg: 'HS256', typ: 'JWT'})
//       .setExpirationTime( exp*4)
//       .setIssuedAt(iat)
//       .setNotBefore(iat)
//       .sign(new TextEncoder().encode(secretKey)),
//     }; 
// };

export const SignInWithEmailAction = async ({email, password: loginPassword}: Omit<IRegister, 'name'>) => {

  const auth:IAuth | null = await axios.post<IAuth>('http://localhost:4200/api/users/signin', {
    data: {
      email,
      password: hashValue(loginPassword)
    }
  })
  .then((res)=>res.data)
  .catch((err)=>console.log(err)) || null

<<<<<<< HEAD
  return auth
  
=======
  if (user == null) return null

  const {password, ...res} = user

  const tokens = await prisma.tokens.create({
    data: (await jwtTokens(user.id))
  })

  const { id, user_id, created_at, ...tok } = tokens

  return {
    user: res,
    tokens: tok
  }

>>>>>>> c66cb9db88ae05b44ac963adadfcc16460f44f54
}