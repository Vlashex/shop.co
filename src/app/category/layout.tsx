"use client"
import React, { ReactElement } from 'react'
import { Separator } from '@radix-ui/react-separator'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { cn } from '@/lib/utils'

export default function Layout({
    children,
}:{
    children:ReactElement,
}) {
    const sizes = ['XX-Small', 'X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large', '3X-Large', '4X-Large']

    const searchParams = useSearchParams()
    const category = searchParams.get('category')
    const selectedSizes = searchParams.getAll('sizes')
    const style = searchParams.get('style')

    return (
      <section className="flex max-w-[1240px] mx-auto gap-5">
          <div className="w-[300px] border-gray-200 border-2 border-solid py-5 px-6 rounded-2xl">
              <div className="flex">
                  <h1>Filters</h1>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                  </svg>

              </div>
              <Separator orientation='horizontal' className='my-4 border-solid border-[1px]'/>
              <Accordion type='single' collapsible>
                <AccordionItem value='item-1'>
                    <AccordionTrigger className='hover:no-underline'>
                        Category
                    </AccordionTrigger>
                    <AccordionContent>
                        <nav className="flex flex-col gap-2">
                            <Link href={`?category=tshirts&style=${style}`}>T-shirts</Link>
                            <Link href={`?category=sport&style=${style}`}>Shorts</Link>
                            <Link href={`?category=shirts&style=${style}`}>Shirts</Link>
                            <Link href={`?category=hoodies&style=${style}`}>Hoodie</Link>
                            <Link href={`?category=jeans&style=${style}`}>Jeans</Link>
                        </nav>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-2'>
                    <AccordionTrigger className='hover:no-underline'>
                        Price
                    </AccordionTrigger>
                    <AccordionContent>
                        
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-3'>
                    <AccordionTrigger className='hover:no-underline'>
                        Colors
                    </AccordionTrigger>
                    <AccordionContent>
                        <nav className="flex flex-col gap-2">
                            <Link href={`?category=${category}&style=casual`}>Casual</Link>
                            <Link href={`?category=${category}&style=formal`}>Formal</Link>
                            <Link href={`?category=${category}&style=party`}>Party</Link>
                            <Link href={`?category=${category}&style=gym`}>Gym</Link>
                        </nav>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-4'>
                    <AccordionTrigger className='hover:no-underline'>
                        Size
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="grid grid-cols-2 gap-2">
                            {
                                sizes.map((value)=>
                                    <Link key={value} href={`?category=${category}&style=${style}&sizes=${value}`} className={cn(
                                        "w-full text-center py-2.5 bg-gray-200 rounded-3xl",
                                        (!!selectedSizes.find((el)=>el==value))? 'bg-black text-white': ''
                                    )}>{value}</Link>
                                )
                            }
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-5'>
                    <AccordionTrigger className='hover:no-underline'>
                        Dress Style
                    </AccordionTrigger>
                    <AccordionContent>
                        <nav className="flex flex-col gap-2">
                            <Link href={`?category=${category}&style=casual`}>Casual</Link>
                            <Link href={`?category=${category}&style=formal`}>Formal</Link>
                            <Link href={`?category=${category}&style=party`}>Party</Link>
                            <Link href={`?category=${category}&style=gym`}>Gym</Link>
                        </nav>
                    </AccordionContent>
                </AccordionItem>
              </Accordion>
          </div>
          {children}
      </section>
    )
}
