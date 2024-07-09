import Image from 'next/image'
import React from 'react'

import img from '@/../public/product1.png'
import star from '@/../public/Star.svg'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { DropdownMenuContent } from '@/components/ui/dropdown-menu'
import ReviewCard from '@/features/ReviewCard'
import SuggestedProducts from '@/features/SuggestedProducts'

export default function Protuct() {

    const a = [1,2,3,4]

  return (
    <main className='max-w-[1240px] mx-auto w-11/12 flex flex-col gap-8'>
        <section className='flex justify-between gap-4 max-lg:flex-col pb-4'>
            <div className="flex w-1/2 max-lg:w-full max-lg:flex-col-reverse h-max gap-3">
                <div className='flex flex-[23] flex-col max-lg:flex-row gap-3'>
                    <div className="flex-1"><Image src={img} alt=''/></div>
                    <div className="flex-1"><Image src={img} alt=''/></div>
                    <div className="flex-1"><Image src={img} alt=''/></div>
                </div>
                <div className="lg:h-full lg:flex-[77] max-lg:w-full max-lg:h-full"><Image className='w-full' src={img} alt=''/></div>
            </div>
            <div className="w-1/2 max-lg:w-full flex flex-col justify-between gap-4">
                <div className="flex flex-col gap-2.5">
                    <h1 className='text-[40px] font-semibold'>One Life Graphic T-shirt</h1>
                    <div className="flex gap-2">
                        <Image src={star} alt='star'/>
                        <Image src={star} alt='star'/>
                        <Image src={star} alt='star'/>
                        <Image src={star} alt='star'/>
                        <Image src={star} alt='star'/>
                        <div className="flex">
                            <h2 className='text-base font-semibold'>4.5</h2>
                            <h3 className='text-base'>/5</h3>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <h1 className='text-3xl font-semibold'>$260</h1>
                        <h2 className='text-3xl font-semibold text-black text-opacity-30 line-through'>$300</h2>
                        <h3 className='text-[#FF3333] bg-[rgba(255,51,51,.1)] rounded-3xl py-1.5 px-3.5'>-40%</h3>
                    </div>
                    <h4 className='text-black text-opacity-60'>
                        This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
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

                <div className="flex gap-5 items-center">
                    <div className="flex items-center justify-between w-[170px] bg-gray-100 h-14 rounded-[62px]">
                        <Button className='text-3xl font-semibold'>–</Button>
                        <h1 className='text-3xl'>1</h1>
                        <Button className='text-3xl font-semibold'>+</Button>
                    </div>
                    <Button className='bg-black text-white h-14 rounded-[62px] flex-1 text-base' variant='default'>Add to Cart</Button>
                </div>
            </div>
        </section>
        <section className='flex flex-col gap-8 pb-4'>
            <div className="flex w-full">
                <h1 className='pb-4 flex-1 text-xl text-center border-b-2 text-opacity-60 active:border-black active:text-black active:font-semibold'>Product Details</h1>
                <h1 className='pb-4 flex-1 text-xl text-center border-b-2 text-opacity-60 active:border-black active:text-black active:font-semibold'>Rating & Reviews</h1>
                <h1 className='pb-4 flex-1 text-xl text-center border-b-2 text-opacity-60 active:border-black active:text-black active:font-semibold'>FAQs</h1>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-end">
                    <h1 className='text-2xl font-semibold max-sm:text-xs'>All Reviews</h1>
                    <h2 className='max-sm:text-xs'>(451)</h2>
                </div>
                <div className="flex h-12 gap-3 max-sm:gap-1">
                    <div className="w-12 h-12 bg-[#F0F0F0] flex items-center justify-center rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                        </svg>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger className='bg-[#F0F0F0] rounded-3xl px-5 h-full'>
                            <h1>Sort</h1>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>
                                <h1>Oldest</h1>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Button className='bg-black text-white h-full rounded-3xl px-5 max-sm:hidden'>Write a Review</Button>
                    <Button className='bg-black text-white h-full rounded-3xl px-3 sm:hidden'>New Review</Button>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
                {
                    a.map((index)=>
                        <ReviewCard key={index} className='w-full h-fit'/>
                    )
                }
            </div>
        </section>
        <SuggestedProducts title='You might also like'/>
    </main>
  )
}
