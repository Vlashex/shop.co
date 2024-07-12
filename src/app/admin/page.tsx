"use client";
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormField } from '@/features/FormField';

interface NewCard {
  title: string;
  price: number;
  rate: number;
  images: File[];
}


export default function Page() {

  const { register, handleSubmit, formState: { errors } } = useForm<NewCard>();

  const onSubmit: SubmitHandler<NewCard> = async (data) => {
    const { title, price, rate, images } = data;



  return (
    <div className="flex mx-auto max-w-[900px] w-11/12">
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col mt-10 w-full gap-5'>
        <FormField type='text' name='title' placeholder='title' register={register} />
        {errors.title && <span>This field is required</span>}
        <FormField type='number' name='price' placeholder='price' register={register} />
        {errors.price && <span>This field is required</span>}
        <FormField type='number' name='rate' placeholder='rate' register={register} />
        {errors.rate && <span>This field is required</span>}
        <FormField type='file' multiple={true} name='images' placeholder='image' register={register} />
        {errors.images && <span>This field is required</span>}
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
}
