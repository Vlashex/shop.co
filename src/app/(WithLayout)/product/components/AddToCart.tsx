'use client'
import { Button } from '@/components/ui/button'
import CountButton from '@/features/CountButton'
import React, { useState } from 'react'
import { useCookies } from 'react-cookie'
import { AddToCartAction } from '../../cart/actions/addToCartAction'
import { useDispatch } from 'react-redux'
import { setUser } from '@/lib/store/authSlice'
import { AddManyToCartAction } from '../../cart/actions/addManyToCart'

export default function AddToCart({prodId}: {prodId: number}) {

    const [cookies] = useCookies(['access_token'])
    const [counter, setCounter] = useState<number>(1)

    const increase = ()=>setCounter(counter+1);
    const decrease = ()=>setCounter(counter-1);

    const dispatch = useDispatch()

  return (
    <div className="flex gap-5 items-center">
        <CountButton counter={counter} increase={increase} decrease={decrease}/>
        <Button onClick={async()=>{
            
          const user = await AddManyToCartAction({prodsId: Array(counter).fill(prodId), access_token: cookies.access_token })
          
          if (!user) return;

          dispatch(setUser(user))
          
          }} className='bg-black text-white h-14 rounded-[62px] flex-1 text-base' variant='default'>Add to Cart</Button>
    </div>
  )
}
