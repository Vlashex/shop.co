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
  })
  .then((resp: AxiosResponse<IAuth>) => {return{
      data: resp.data,
      error: null
    }})
  .catch((error:AxiosError<Err>) => {return{
      data: null,
      error: error.response?.data || null
    }})

  return responce
}