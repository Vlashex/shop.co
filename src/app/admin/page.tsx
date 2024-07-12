"use client"
import { FormField } from '@/features/FormField'
import { SneakersCard } from '@prisma/client'
import React from 'react'
import { useForm } from 'react-hook-form'

export default function Page() {

  const { register, handleSubmit, formState: { errors } } = useForm<SneakersCard>()

  const onSubmit = async()=> {

  }

  return (
    <div className="flex mx-auto max-w-[900px] w-11/12">
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col mt-10 w-full gap-5'>
          <FormField type='text'   name='title'    placeholder='title'    register={register} />
          <FormField type='number' name='price'    placeholder='price'    register={register} />
          <FormField type='number' name='prePrice' placeholder='prePrice' register={register} />
          <FormField type='number' name='rate'     placeholder='rate'     register={register} />
          <FormField type='file'   name='image'    placeholder='image'    register={register} />
        </form>
    </div>
  )
}
