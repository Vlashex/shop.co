import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Image from 'next/image'
import React from 'react'

import check from '@/../public/check.svg'
import star from '@/../public/Star.svg'

export default function HappyCustomers() {

    const a = [1,2,3,4,5,6,7,8,9]

  return (
    <section className="max-w-[1240px] w-11/12 mx-auto mt-20">
      <h1 className="text-5xl mb-10 w-10/12 max-sm:text-3xl">OUR HAPPY CUSTOMERS</h1>
      <Carousel orientation="horizontal">
        <CarouselContent >
          {
            a.map((value, index)=>
              <CarouselItem className="flex justify-between" key={index}>
                <div key={index} className="w-[400px] h-[240px] max-sm:h-[260px] border-gray-300 border-solid border-2 rounded-2xl px-8 py-5">
                  <div className="flex">
                    <Image src={star} alt=''/>
                    <Image src={star} alt=''/>
                    <Image src={star} alt=''/>
                    <Image src={star} alt=''/>
                    <Image src={star} alt=''/>
                  </div>
                  <div className="flex">
                    <h1 className="font-bold my-4">Sarah M.</h1>
                    <Image src={check} alt="check"/>
                  </div>
                  <p className="text-base">I am blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece Ive bought has exceeded my expectations.</p>
                </div>
              </CarouselItem>
            )
          }
        </CarouselContent>
        <CarouselNext/>
        <CarouselPrevious/>
      </Carousel>
    </section>
  )
}
