import Link from 'next/link'
import React, { ReactElement } from 'react'

export default function Layout({children}: {children:ReactElement}) {
  return (
    <div className='flex items-center justify-center w-full h-[100vh]'>
        <Link href='/' className='bg-black bg-opacity-90 w-[100vw] h-[100vh] block absolute z-10'/>
        <div className="z-[100] block p-20">
            {children}
        </div>
    </div>
    
  )
}
