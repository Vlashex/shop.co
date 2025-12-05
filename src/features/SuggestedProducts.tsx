import { Button } from '@/components/ui/button'
import React from 'react'
import ProductCard from './ProductCard'

export default function SuggestedProducts({title}: {title: string}) {

    const productData: any[] = []

    return (
      <section className="max-w-[1240px] w-full mx-auto my-20 flex flex-col items-center">
        <h1 className="text-5xl text-center my-12">{title}</h1>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:justify-between justify-evenly justify-items-center w-full overflow-y-visible max-md:justify-between">
          {
            // productData.map((value, index)=>
            //   <ProductCard {...value} key={index}/>
            // )
          }
        </div>
        <div className="transition-transform duration-300 hover:scale-105 active:scale-95">
          <Button variant='outline' className="px-20 py-4 rounded-3xl mt-10 transition-all duration-300 hover:shadow-lg">
            View All
          </Button>
        </div>
      </section>
    )
}
