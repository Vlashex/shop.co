"use server"
import { hashValue } from '@/lib/functions/hashValue';
import { IRegister, IUser } from '@/lib/types';
import axios from 'axios'


export const SignUpAction = async ({email, name, password}: IRegister) => {
  
  return await axios.post('http://localhost:4200/api/users/signup', {
    name:name,
    email:email,
    password: hashValue(password),
  })
  .then((res) => res.data)
  .catch((err) => console.log(err))
}