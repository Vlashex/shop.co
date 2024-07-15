import { Button } from '@/components/ui/button'
import React from 'react'
import ProductCard from './ProductCard'
import { prisma } from '../../prisma/prisma'




export default async function SuggestedProducts({title}: {title: string}) {

    const productData = (await prisma.productCard.findMany()).splice(1,4)

    return (
      <section className="max-w-[1240px] w-full mx-auto my-20 flex flex-col items-center">
        <h1 className="text-5xl text-center my-12">{title}</h1>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:justify-between justify-evenly justify-items-center w-full overflow-y-visible max-md:justify-between">
          {
            productData.map((value, index)=>
              <ProductCard {...value} key={index}/>
            )
          }
        </div>
        <Button variant='outline' className="px-20 py-4 rounded-3xl mt-10">View All</Button>
      </section>
    )
}
