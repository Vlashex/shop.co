import { Button } from '@/components/ui/button'
import bgMain from '@/../public/bg-main.png'
import Image from 'next/image'
import React from 'react'

export default function Main() {
  return (
    <section className="w-fill bg-[#F2F0F1]">
      <div className="flex justify-center items-center max-w-[1440px] w-11/12 mx-auto max-lg:flex-col max-lg:items-center">
        <div className="flex flex-col max-w-[630px] gap-8 md:p-24 max-md:py-10">
          <h1 className="max-w-[557px] font-semibold text-6xl">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <h3 className="text-base">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</h3>
          <Button className="bg-black text-white w-fit px-16 py-4 rounded-3xl">Shop Now</Button>
          <div className="flex gap-x-8 max-sm:gap-x-2 max-md:flex-wrap max-md:justify-around">
            <div className="w-fit">
              <h1 className="text-4xl font-semibold">200+</h1>
              <h2 className="text-gray-400">International Brands</h2>
            </div>
            <div className="w-px h-fill bg-gray-300 max-md:hidden" />
            <div className="w-fit">
              <h1 className="text-4xl font-semibold">2,000+</h1>
              <h2 className="text-gray-400">High-Quality Products</h2>
            </div>
            <div className="w-px h-fill bg-gray-300 max-md:hidden" />
            <div className="w-fit">
              <h1 className="text-4xl font-semibold">30,000+</h1>
              <h2 className="text-gray-400">Happy Customers</h2>
            </div>
          </div>
        </div>
        <div className="flex-1 lg:self-end md:w-1/2 ">
          <Image width={1200} src={bgMain} alt=""/>
        </div>
      </div>
    </section>
  )
}
