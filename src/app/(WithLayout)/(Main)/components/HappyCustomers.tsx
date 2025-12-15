import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import ReviewCard from '@/features/ReviewCard'
import React from 'react'

export default function HappyCustomers() {

    const a = [1,2,3,4,5,6,7,8,9]

  return (
    <section className="max-w-[1240px] w-11/12 mx-auto mt-20">
      <h1 className="text-5xl mb-10 w-10/12 max-sm:text-3xl">OUR HAPPY CUSTOMERS</h1>
      <Carousel orientation="horizontal">
        <CarouselContent >
          {
            a.map((value, index)=>
              <CarouselItem key={index}>
                <ReviewCard/>
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
