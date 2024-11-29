"use client"
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormField } from '@/features/FormField'
import { useDispatch } from 'react-redux'
import { setCredentials } from '@/lib/store/authSlice'
import { IRegister } from '@/lib/types'
import { SignInWithEmailAction } from '../actions/SignInAction'
import Link from 'next/link'
import { useCookies } from 'react-cookie'

import { useRouter } from 'next/navigation'


export default function SignInUi() {

  const [isUserExist, setUserExist] = useState<boolean>(false)
  const dispatch = useDispatch()
  const router = useRouter()
  const [ cookies, setCookies ] = useCookies(['access_token', 'refresh_token'])


  const UserSchema = z
  .object({
    email: z
      .string()
      .email(),
    password: z
      .string()
      .min(6, { message: "Password is too short" })
      .max(20, { message: "Password is too long" }),
  })


  const { register, handleSubmit, formState: { errors } } = useForm<Omit<IRegister, 'name'>>({resolver: zodResolver(UserSchema)})

  const onSubmit = (data:Omit<IRegister, 'name'>) => {
  	const signIn = async() => {
      const result = await SignInWithEmailAction(data)
      if ( result == null || result.tokens == null) setUserExist(true)
      else {
        dispatch(setCredentials(result))
        setCookies('access_token', result.tokens.access_token)
        setCookies('refresh_token', result.tokens.refresh_token)
        // router.push('/')
      }
    }
    signIn()
  }

  return (
    <div className='w-[400px] bg-white flex flex-col gap-8 rounded-xl overflow-hidden justify-center items-center px-8 py-16'>
        <h1 className='text-2xl'>LogIn</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 w-full'>
            <FormField type='email'    name='email'    register={register}   error={errors.email}    placeholder='Enter your email'/>
            <FormField type='password' name='password' register={register}   error={errors.password} placeholder='Enter your password'/>
            {isUserExist? <label className='-mt-4 text-red-500'>User do not exist</label>: null}
            <Button type='submit' className='bg-black text-white rounded-sm'>SignIn</Button>
        </form>
        <Link href='/SignUp'>SignUp</Link>
    </div>
  )
}
