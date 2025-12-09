"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormField } from "@/features/FormField";
import createCardAction from "./createCardAction";
import Link from "next/link";
import { seedMockDataAction } from "../actions/products";

interface NewCard {
  title: string;
  price: number;
  rate: number;
  images: FileList;
}

async function filesToBase64(files: FileList): Promise<string[]> {
  const arr = Array.from(files);

  return Promise.all(
    arr.map((file) => {
      return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    })
  );
}

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewCard>();

  const onSubmit: SubmitHandler<NewCard> = async (data) => {
    const { title, price, rate, images } = data;

    const imagesBase64 = await filesToBase64(images);
    const card = await createCardAction(title, price, rate, imagesBase64);

    if (card) {
      console.log("Created:", card);
    }
  };

  return (
    <div className="flex mx-auto max-w-[900px] w-11/12">
      <Link href="/">Home</Link>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-10 w-full gap-5">
        
        <FormField type="text" name="title" placeholder="title" register={register} />
        {errors.title && <span>This field is required</span>}

        <FormField type="number" name="price" placeholder="price" register={register} />
        {errors.price && <span>This field is required</span>}

        <FormField type="number" step="0.1" name="rate" placeholder="rate" register={register} />
        {errors.rate && <span>This field is required</span>}

        <input
          type="file"
          multiple
          {...register("images", { required: true })}
        />
        {errors.images && <span>This field is required</span>}

        {/* КНОПКА СОЗДАНИЯ ПРОДУКТА */}
        <button type="submit" className="bg-black text-white py-2 rounded">
          Create Product
        </button>

        {/* КНОПКА СОЗДАНИЯ MOCK-ДАННЫХ */}
        <button
          type="button"
          onClick={async () => {
            await seedMockDataAction();
          }}
          className="bg-gray-700 text-white py-2 rounded"
        >
          Create Mock
        </button>

      </form>
    </div>
  );
}
