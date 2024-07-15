import React from 'react'
import CartProductCard from '../components/CartProductCard'
import { Separator } from '@/components/ui/separator'
import { InputWithButton } from '@/components/ui/inputWithButton'
import { Button } from '@/components/ui/button'
import { prisma } from '../../../../../prisma/prisma'
import { getUserByAccessToken } from '@/lib/actions/getUserByAccessToken'
import { cookies } from 'next/headers'


export default async function Cart() {

    const cookiesStore = cookies()
    const token = cookiesStore.get('access_token')
    const user = token != undefined?(await getUserByAccessToken(token.value)):null
    const cartData = user != null?(await prisma.productCard.findMany({where: {id: {in: user.cart}}})):[]

  return (
    <main className='max-w-[1240px] mx-auto w-11/12 mb-auto'>
        <h1 className='text-[40px] font-semibold'>Your cart</h1>
        <div className="grid grid-cols-5 max-md:grid-cols-1 gap-3">
            <div className="grid col-span-3 justify-items-center justify-stretch grid-cols-1 flex-1 gap-4 border-solid border-[1px] border-gray-300 p-3 rounded-xl">
                {
                cartData.map((value, index)=>
                    <CartProductCard {...value} key={index}/>
                )
                }
            </div>
            <div className="h-fit flex flex-col gap-6 col-span-2 border-solid border-[1px] border-gray-300 p-3 rounded-xl">
                <h1 className='text-2xl'>Order Summary</h1>
                <div className="flex flex-col gap-3">
                    <div className="flex justify-between">
                        <h1 className='text-opacity-60'>Subtotal</h1>
                        <h2 className='font-semibold'>${(cartData.map((value)=>value.price)).reduce((a,b)=> a+b, 0)}</h2>
                    </div>
                    <div className="flex justify-between">
                        <h1 className='text-opacity-60'>Discount (-20%)</h1>
                        <h2 className='font-semibold text-red-500'>-$0</h2>
                    </div>
                    <div className="flex justify-between">
                        <h1 className='text-opacity-60'>Delivery Fee</h1>
                        <h2 className='font-semibold'>${(cartData.map((value)=>value.price)).length*5}</h2>
                    </div>
                    <Separator className='h-px bg-gray-300'/>
                    <div className="flex justify-between">
                        <h1 className='font-semibold'>Total</h1>
                        <h2 className="text-xl font-semibold">
                            ${(cartData.map((value)=>value.price)).reduce((a,b)=> a+b, 0)+(cartData.map((value)=>value.price)).length*5}
                        </h2>
                    </div>
                </div>
                <form className="flex gap-3">
                    <InputWithButton className='rounded-3xl' placeholder='Add promo code'/>
                    <Button className='text-sm bg-black text-white rounded-3xl'>Apply</Button>
                </form>
                <Button className='text-sm bg-black text-white rounded-3xl'>Go to Checkout</Button>

            </div>
        </div>
    </main>
  )
}
