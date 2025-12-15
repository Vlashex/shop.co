import { Card } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import dressCodeImg1 from '@/../public/dress-code-1.png'
import dressCodeImg2 from '@/../public/dress-code-2.png'
import dressCodeImg3 from '@/../public/dress-code-3.png'
import dressCodeImg4 from '@/../public/dress-code-4.png'

export default function BrowseStyle() {
  return (
    <section className="bg-neutral-100 rounded-3xl max-w-[1240px] sm:w-11/12 w-full p-16 mx-auto max-sm:px-4">
      <h1 className="mx-auto text-center text-5xl mb-16">BROWSE BY dress STYLE</h1>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex gap-4 max-md:flex-col">
          <div className="w-1/3 max-md:w-full">
            <Link href='shop?style=casual' className="overflow-hidden rounded-3xl block">
              <Card className="flex h-[289px] justify-end relative bg-white border-0 overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-lg">
                <h1 className="text-4xl absolute top-6 left-6 z-10 transition-all duration-300 group-hover:text-gray-700 group-hover:translate-x-1">
                  Casual
                </h1>
                <div className="transition-transform duration-500 group-hover:scale-110">
                  <Image src={dressCodeImg1} alt="dressCodeImg1"/>
                </div>
              </Card>
            </Link>
          </div>
          <div className="w-2/3 max-md:w-full">
            <Link href='shop?style=formal' className="overflow-hidden rounded-3xl block">
              <Card className="flex h-[289px] justify-end relative bg-white border-0 overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-lg">
                <h1 className="text-4xl absolute top-6 left-6 z-10 transition-all duration-300 group-hover:text-gray-700 group-hover:translate-x-1">
                  Formal
                </h1>
                <div className="transition-transform duration-500 group-hover:scale-110">
                  <Image src={dressCodeImg2} alt="dressCodeImg2"/>
                </div>
              </Card>
            </Link>
          </div>
        </div>
        <div className="flex gap-4 max-md:flex-col">
          <div className="w-2/3 max-md:w-full">
            <Link href='shop?style=party' className="overflow-hidden rounded-3xl block">
              <Card className="flex h-[289px] justify-end relative bg-white border-0 overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-lg">
                <h1 className="text-4xl absolute top-6 left-6 z-10 transition-all duration-300 group-hover:text-gray-700 group-hover:translate-x-1">
                  Party
                </h1>
                <div className="transition-transform duration-500 group-hover:scale-110">
                  <Image src={dressCodeImg3} alt="dressCodeImg3"/>
                </div>
              </Card>
            </Link>
          </div>
          <div className="w-1/3 max-md:w-full">
            <Link href='shop?style=gym' className="overflow-hidden rounded-3xl block">
              <Card className="flex h-[289px] justify-end relative bg-white border-0 overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-lg">
                <h1 className="text-4xl absolute top-6 left-6 z-10 transition-all duration-300 group-hover:text-gray-700 group-hover:translate-x-1">
                  Gym
                </h1>
                <div className="transition-transform duration-500 group-hover:scale-110">
                  <Image src={dressCodeImg4} alt="dressCodeImg4"/>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
