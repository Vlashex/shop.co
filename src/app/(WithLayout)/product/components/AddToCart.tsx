'use client'
import { Button } from '@/components/ui/button'
import CountButton from '@/features/CountButton'
import React, { useState } from 'react'
import { useCookies } from 'react-cookie'
import { AddToCartAction } from '../actions/addToCartAction'

export default function AddToCart({prodId}: {prodId: number}) {

    const [cookies] = useCookies(['access_token'])
    const [counter, setCounter] = useState<number>(1)

  return (
    <div className="flex gap-5 items-center">
        <CountButton counter={counter} setCounter={setCounter}/>
        <Button onClick={()=>AddToCartAction({prodId: prodId, access_token: cookies.access_token})} className='bg-black text-white h-14 rounded-[62px] flex-1 text-base' variant='default'>Add to Cart</Button>
    </div>
  )
}
