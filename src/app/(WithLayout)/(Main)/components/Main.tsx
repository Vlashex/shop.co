import { Button } from '@/components/ui/button'
import bgMain from '@/../public/bg-main.png'
import Image from 'next/image'
import React from 'react'

export default function Main() {
  return (
    <section className="w-full bg-[#F2F0F1]">
      <div className="flex w-11/12 max-w-[1240px] justify-between items-center mx-auto max-md:flex-col max-lg:items-center">
        <div className="flex flex-col w-full md:max-w-[630px] gap-8 py-24">
          <h1 className="max-w-[557px] font-semibold text-6xl">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <h3 className="text-base">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</h3>
          <Button className="bg-black text-white w-fit px-16 py-4 rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
            Shop Now
          </Button>
          <div className="flex gap-x-8 max-sm:gap-x-2 max-md:flex-wrap max-md:justify-around">
            <div className="w-fit transition-transform duration-300 hover:scale-105">
              <h1 className="text-4xl font-semibold">200+</h1>
              <h2 className="text-gray-400">International Brands</h2>
            </div>
            <div className="w-px h-fill bg-gray-300 max-md:hidden" />
            <div className="w-fit transition-transform duration-300 hover:scale-105">
              <h1 className="text-4xl font-semibold">2,000+</h1>
              <h2 className="text-gray-400">High-Quality Products</h2>
            </div>
            <div className="w-px h-fill bg-gray-300 max-md:hidden" />
            <div className="w-fit transition-transform duration-300 hover:scale-105">
              <h1 className="text-4xl font-semibold">30,000+</h1>
              <h2 className="text-gray-400">Happy Customers</h2>
            </div>
          </div>
        </div>
        <div className="flex-1 lg:self-end md:w-1/2 mt-auto">
          <div className="transition-transform duration-300 hover:scale-[1.02]">
            <Image width={1200} src={bgMain} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
