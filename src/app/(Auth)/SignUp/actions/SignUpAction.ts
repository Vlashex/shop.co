"use server"
import { hashValue } from '@/lib/functions/hashValue';
import { IAuth, IRegister } from '@/lib/types';
import axios, { AxiosError, AxiosResponse } from 'axios'

interface Err {
  statusCode: number
  message: string
}

interface Responce {
  data: IAuth | null,
  error: Err | null
}

export const SignUpAction = async ({email, name, password}: IRegister) => {
    const responce: Responce = await axios.post(process.env.BACKEND_HOST+'/users/signup', {
    name:name,
    email:email,
    password: hashValue(password),
<<<<<<< HEAD
  })
  .then((resp: AxiosResponse<IAuth>) => {return{
      data: resp.data,
      error: null
    }})
  .catch((error:AxiosError<Err>) => {return{
      data: null,
      error: error.response?.data || null
    }})
=======
    cart: []
  }})
  const tokens = await prisma.tokens.create({ data: await jwtTokens(user.id) })

  const { id, user_id, created_at, ...tok } = tokens
  
  const auth = {
    user,
    tokens: tok
  }
>>>>>>> c66cb9db88ae05b44ac963adadfcc16460f44f54

  return responce
}