"use client"
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormField } from '@/features/FormField'
import { Register } from '@/lib/types'
import { SignUpAction } from '../actions/SignUpAction'
import { useDispatch } from 'react-redux'



export default function SignUpUi() {

  const [isUserExist, setUserExist] = useState<boolean>(false)
  const dispatch = useDispatch()

  const UserSchema = z
  .object({
    email: z
      .string()
      .email(),
    name: z
      .string()
      .min(3),
    password: z
      .string()
      .min(6, { message: "Password is too short" })
      .max(20, { message: "Password is too long" }),
    confirmedPassword: z
      .string()
  })
  .refine((data) => data.password === data.confirmedPassword, {
    message: "Passwords do not match",
    path: ["confirmedPassword"], // path of error
  });

  interface SignUp extends Register {
    confirmedPassword: string
  }

  const { register, handleSubmit, formState: { errors } } = useForm<SignUp>({resolver: zodResolver(UserSchema)})

  const onSubmit = (data:SignUp) => {
    const {confirmedPassword, ...res} = data
  	const signUp = async() => {
      const result = await SignUpAction(res)
      if ( result == null) setUserExist(true)
      else {
        setUserExist(false)
        console.log(result)
      }
    }
    signUp()
  }

  return (
    <div className='w-[400px] bg-white flex flex-col gap-8 rounded-xl overflow-hidden justify-center items-center px-8 py-16'>
        <h1 className='text-2xl'>Registration</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 w-full'>
            <FormField type='text'     name='name'               register={register}   error={errors.name}          placeholder='Enter your name'/>
            <FormField type='email'    name='email'              register={register}   error={errors.email}             placeholder='Enter your email'/>
            {isUserExist? <label className='-mt-4 text-red-500'>User is already exist</label>: null}
            <FormField type='password' name='password'           register={register}   error={errors.password}          placeholder='Enter your password'/>
            <FormField type='password' name='confirmedPassword'  register={register}   error={errors.confirmedPassword} placeholder='Confirm password'/>
            <Button className='bg-black text-white rounded-sm'>SignUp</Button>
        </form>
    </div>
  )
}
