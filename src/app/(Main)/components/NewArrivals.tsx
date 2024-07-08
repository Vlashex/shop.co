import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

import cardImg from '@/../public/Frame 32.png'

export default function NewArrivals() {

    const a = [1,2,3,4]

  return (
    <section className="max-w-[1240px] w-11/12 mx-auto my-20 flex flex-col items-center">
      <h1 className="text-5xl text-center my-12">NEW ARRIVALS</h1>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:justify-between justify-evenly justify-items-center w-full overflow-y-visible">
        {
          a.map((value, index)=>
            <Card className="w-[295px] h-[405px] p-0 border-0" key={index}>
              <CardHeader>
                <Image src={cardImg} alt=""/>
              </CardHeader>
              <CardContent>
                <h1 className="text-xl capitalize font-semibold overflow-x-hidden text-nowrap">T-shirt With Tape Details</h1>
                <div className="flex gap-2 items-center">
                  <h1 className="text-xl">$120</h1>
                  <h1 className="text-xl line-through text-gray-400">$120</h1>
                  <h1 className="text-sm text-red-500 bg-red-100 py-1 px-3 rounded-xl">-0%</h1>
                </div>
              </CardContent>
            </Card>
          )
        }
      </div>
      <Button variant='outline' className="px-20 py-4 rounded-3xl mt-10">View All</Button>
    </section>
  )
}
