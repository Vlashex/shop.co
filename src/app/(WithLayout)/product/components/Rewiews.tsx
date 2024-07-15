import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import ReviewCard from '@/features/ReviewCard'
import React from 'react'

export default function Rewiews() {

    const a = [1,2,3,4]

  return (
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
  )
}
