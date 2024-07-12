"use client";
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { FormField } from '@/features/FormField';

interface NewCard {
  title: string;
  price: number;
  rate: number;
  image: FileList;
}

export default function Page() {
  const { register, handleSubmit, formState: { errors } } = useForm<NewCard>();
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [product, setProduct] = useState<any>(null);

  const uploadImage = async (image: File): Promise<string> => {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onloadend = async () => {
        try {
          const base64Image = btoa(
            new Uint8Array(reader.result as ArrayBuffer).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              '',
            ),
          );

          const response = await axios.post('/api/upload', {
            imagePath: `product-images/${image.name}`,
            imageContent: base64Image,
          });

          resolve(response.data.uploadUrl);
        } catch (error) {
          reject(error);
        }
      };
      reader.readAsArrayBuffer(image);
    });
  };

  const onSubmit: SubmitHandler<NewCard> = async (data) => {
    const { title, price, rate, image } = data;

    const imageUrls = [];
    for (let i = 0; i < image.length; i++) {
      const imageUrl = await uploadImage(image[i]);
      imageUrls.push(imageUrl);
    }
    console.log(imageUrls)

    const response = await axios.post('/api/products', {
      title,
      price,
      rate,
      imageUrls,
    });

    setProduct(response.data);
  };

  return (
    <div className="flex mx-auto max-w-[900px] w-11/12">
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col mt-10 w-full gap-5'>
        <FormField type='text' name='title' placeholder='title' register={register} />
        {errors.title && <span>This field is required</span>}
        <FormField type='number' name='price' placeholder='price' register={register} />
        {errors.price && <span>This field is required</span>}
        <FormField type='number' name='rate' placeholder='rate' register={register} />
        {errors.rate && <span>This field is required</span>}
        <FormField type='file' name='image' placeholder='image' register={register} />
        {errors.image && <span>This field is required</span>}
        <button type="submit">Create Product</button>
      </form>

      {product && (
        <div>
          <h2>Created Product</h2>
          <p>Title: {product.title}</p>
          <p>Rate: {product.rate}</p>
          <p>Price: {product.price}</p>
          <p>Previous Price: {product.previousPrice}</p>
          <p>Images:</p>
          {product.imageUrls.map((url: string, index: number) => (
            <img key={index} src={url} alt="Product Image" width={100} />
          ))}
        </div>
      )}
    </div>
  );
}
