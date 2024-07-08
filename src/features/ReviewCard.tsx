import Image from 'next/image'
import React from 'react'

import check from '@/../public/check.svg'
import star from '@/../public/Star.svg'
import { cn } from '@/lib/utils'

export default function ReviewCard({key, className}: {key:number, className?: string}) {
  return (
    <div key={key} className={cn(
      "w-[400px] h-[240px] max-sm:h-[260px] border-gray-300 border-solid border-2 rounded-2xl px-8 py-5",
      className
      )}>
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
  )
}
