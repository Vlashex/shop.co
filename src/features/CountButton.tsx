'use client'
import { Button } from '@/components/ui/button'
import React from 'react'

export default function CountButton({counter, increase, decrease}:{counter: number, increase: ()=>void, decrease: ()=>void}) {
  return (
    <div className="flex items-center justify-between w-[170px] bg-gray-100 max-h-14 rounded-[62px] h-full px-4 transition-all duration-300 hover:bg-gray-200">
        <div className="transition-transform duration-300 hover:scale-125 active:scale-90">
          <Button
            onClick={()=>decrease()}
            className='text-3xl font-semibold p-0 mb-1 transition-colors duration-200 hover:text-gray-700'
          >
            –
          </Button>
        </div>
        <h1 className='text-2xl font-semibold'>{counter}</h1>
        <div className="transition-transform duration-300 hover:scale-125 active:scale-90">
          <Button
            onClick={()=>increase()}
            className='text-3xl font-semibold p-0 mb-1 transition-colors duration-200 hover:text-gray-700'
          >
            +
          </Button>
        </div>
    </div>
  )
}
