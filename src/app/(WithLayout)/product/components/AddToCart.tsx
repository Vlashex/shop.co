'use client'
import { Button } from '@/components/ui/button'
import CountButton from '@/features/CountButton'
import React, { useState } from 'react'
import { useCookies } from 'react-cookie'
import { AddToCartAction } from '../../cart/actions/addToCartAction'
import { useDispatch } from 'react-redux'
import { setUser } from '@/lib/store/authSlice'
import { AddManyToCartAction } from '../../cart/actions/addManyToCart'

export default function AddToCart({prodId}: {prodId: string}) {

    const [cookies] = useCookies(['access_token'])
    const [counter, setCounter] = useState<number>(1)
    const [isAdding, setIsAdding] = useState(false)

    const increase = ()=>setCounter(counter+1);
    const decrease = ()=>setCounter(counter-1);

    const dispatch = useDispatch()

  return (
    <div className="flex gap-5 items-center">
        <CountButton counter={counter} increase={increase} decrease={decrease}/>
        <div className="flex-1 transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]">
          <Button
            onClick={async()=>{
              setIsAdding(true);
              const user = await AddManyToCartAction({prodsId: Array(counter).fill(prodId), access_token: cookies.access_token })
              
              if (!user) {
                setIsAdding(false);
                return;
              }

              dispatch(setUser(user))
              setIsAdding(false);
            }}
            className='bg-black text-white h-14 rounded-[62px] flex-1 text-base transition-all duration-300 hover:shadow-lg hover:bg-gray-800'
            variant='default'
            disabled={isAdding}
          >
            {isAdding ? 'Adding...' : 'Add to Cart'}
          </Button>
        </div>
    </div>
  )
}
