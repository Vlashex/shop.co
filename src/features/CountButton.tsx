'use client'
import { Button } from '@/components/ui/button'
import React from 'react'

export default function CountButton({counter, increase, decrease}:{counter: number, increase: ()=>void, decrease: ()=>void}) {
  return (
    <div className="flex items-center justify-between w-[170px] bg-gray-100 max-h-14 rounded-[62px] h-full px-4">
        <Button onClick={()=>decrease()} className='text-3xl font-semibold p-0 mb-1'>–</Button>
        <h1 className='text-2xl'>{counter}</h1>
        <Button onClick={()=>increase()} className='text-3xl font-semibold p-0 mb-1'>+</Button>
    </div>
  )
}
