"use client"
import { Button } from '@/components/ui/button'
import signUpAction from '@/lib/signUpAction'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormField } from '@/features/FormField'



export default function SignUpUi() {

  const UserSchema = z
  .object({
    email: z
      .string()
      .email(),
    username: z
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

  interface SignUp {
    username: string
    email: string
    password: string
    confirmedPassword: string
  }

  const { register, handleSubmit, formState: { errors } } = useForm<SignUp>({resolver: zodResolver(UserSchema)})

  const onSubmit = (data:SignUp) => {
    const {confirmedPassword, ...res} = data
  	const signUp = async() => {
      const user = await signUpAction(res)
    }
    signUp()
  }

  return (
    <div className='w-[400px] bg-white flex flex-col gap-8 rounded-xl overflow-hidden justify-center items-center px-8 py-16'>
        <h1 className='text-2xl'>Registration</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 w-full'>
            <FormField type='text'     name='username'           register={register}   error={errors.username}          placeholder='Enter your name'/>
            <FormField type='email'    name='email'              register={register}   error={errors.email}             placeholder='Enter your email'/>
            <FormField type='password' name='password'           register={register}   error={errors.password}          placeholder='Enter your password'/>
            <FormField type='password' name='confirmedPassword'  register={register}   error={errors.confirmedPassword} placeholder='Confirm password'/>
            <Button className='bg-black text-white rounded-sm'>SignUp</Button>
        </form>
    </div>
  )
}
