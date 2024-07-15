import Image from 'next/image'
import React from 'react'
import SuggestedProducts from '@/features/SuggestedProducts'
import Rewiews from '../components/Rewiews'
import { getProductsById } from '@/lib/actions/getProductsById'
import AddToCart from '../components/AddToCart'
import Stars from '@/features/Stars'

export default async function Protuct({searchParams}:{searchParams: { [key: string]: string | string[] | undefined }}) {

    const prodId = Number(searchParams.prodId) || 1

    const productData = (await getProductsById([prodId]))[0]

  return (
    <main className='max-w-[1240px] mx-auto w-11/12 flex flex-col gap-8'>
        <section className='flex justify-between gap-4 max-lg:flex-col pb-4'>
            <div className="flex w-1/2 max-lg:w-full max-lg:flex-col-reverse h-max gap-3">
                <div className='flex flex-[23] flex-col max-lg:flex-row gap-3 justify-between'>
                    <div className="flex-1 overflow-y-hidden rounded-[20px]"><Image className='h-full' width={200} height={200} src={productData.images[0]} alt=''/></div>
                    <div className="flex-1 overflow-y-hidden rounded-[20px]"><Image className='h-full' width={200} height={200} src={productData.images[0]} alt=''/></div>
                    <div className="flex-1 overflow-y-hidden rounded-[20px]"><Image className='h-full' width={200} height={200} src={productData.images[0]} alt=''/></div>
                </div>
                <div className="lg:h-full lg:flex-[77] max-lg:w-full max-lg:h-full"><Image className='w-full h-auto rounded-[20px]' width={1200} height={1200} src={productData.images[0]} alt=''/></div>
            </div>
            <div className="w-1/2 max-lg:w-full flex flex-col justify-between gap-4">
                <div className="flex flex-col gap-2.5">
                    <h1 className='text-[40px] font-semibold'>{productData.title}</h1>
                    <div className="h-[25px]">
                        <Stars rate={productData.rate}/>
                    </div>
                    <div className="flex items-center gap-3">
                        <h1 className='text-3xl font-semibold'>${productData.price}</h1>
                        {productData.previousPrice!=productData.price?
                            <>
                                <h2 className='text-3xl font-semibold text-black text-opacity-30 line-through'>${}</h2>
                                <h3 className='text-[#FF3333] bg-[rgba(255,51,51,.1)] rounded-3xl py-1.5 px-3.5'>-{100 - productData.price/productData.previousPrice*100}%</h3>
                            </>
                        
                        :null}
                    </div>
                    <h4 className='text-black text-opacity-60'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus deleniti est voluptatum autem aspernatur molestias minus sed perferendis natus mollitia, ipsum odio nesciunt magni quidem voluptate dignissimos quod fugit voluptatibus!
                    </h4>
                </div>

                <div className="w-full h-[1px] bg-gray-300" />

                <div>
                    <h4 className="text-black text-opacity-60">Select Colors</h4>
                    <div className="flex gap-4 mt-2">
                        <div className="w-[37px] h-[37px] bg-[#4F4631] rounded-full" />
                        <div className="w-[37px] h-[37px] bg-[#314F4A] rounded-full" />
                        <div className="w-[37px] h-[37px] bg-[#31344F] rounded-full" />
                    </div>
                </div>

                <div className="w-full h-[1px] bg-gray-300" />

                <div className="">
                    <h4 className="text-black text-opacity-60 mb-2">Choose Size</h4>
                    <div className="flex gap-3 max-sm:gap-1 max-sm:overflow-x-auto pb-3">
                        <div className="py-3 px-6 bg-gray-200 w-fit rounded-3xl active:bg-black active:text-white text-nowrap max-sm:px-5">Small</div>
                        <div className="py-3 px-6 bg-gray-200 w-fit rounded-3xl active:bg-black active:text-white text-nowrap max-sm:px-5">Medium</div>
                        <div className="py-3 px-6 bg-gray-200 w-fit rounded-3xl active:bg-black active:text-white text-nowrap max-sm:px-5">Large</div>
                        <div className="py-3 px-6 bg-gray-200 w-fit rounded-3xl active:bg-black active:text-white text-nowrap max-sm:px-5">X-Large</div>
                    </div>
                </div>

                <div className="w-full h-[1px] bg-gray-300" />

                <AddToCart prodId={prodId}/>
            </div>
        </section>
        
        <Rewiews />
        <SuggestedProducts title='You might also like'/>
    </main>
  )
}
