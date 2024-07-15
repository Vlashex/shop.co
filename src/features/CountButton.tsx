'use client'
import { Button } from '@/components/ui/button'
import React from 'react'

export default function CountButton({counter, setCounter}:{counter: number, setCounter: any}) {
  return (
    <div className="flex items-center justify-between w-[170px] bg-gray-100 max-h-14 rounded-[62px] h-full px-4">
        <Button onClick={()=>setCounter((prev:number)=>prev-1)} className='text-3xl font-semibold p-0 mb-1'>–</Button>
        <h1 className='text-2xl'>{counter}</h1>
        <Button onClick={()=>setCounter((prev:number)=>prev+1)} className='text-3xl font-semibold p-0 mb-1'>+</Button>
    </div>
  )
}
