import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import vers from '@/../public/versace.png'
import zara from '@/../public/zara.png'
import gucci from '@/../public/gucci.png'
import prada from '@/../public/prada.png'
import calvin from '@/../public/calvin klein.png'

export default function BrandNav() {
  return (
    <section className="w-full bg-black min-h-fit py-11 items-center flex">
      <nav className="max-w-[1240px] w-11/12 mx-auto flex lg:justify-between justify-around sm:text-base gap-8 items-center flex-wrap">
        <Link href='category?brand=' className="sm:h-8 h-6"><Image style={{maxHeight: 'inherit', width: 'auto', height: '100%'}} src={vers} alt="versace"/></Link>
        <Link href='category?brand=' className="sm:h-8 h-6"><Image style={{maxHeight: 'inherit', width: 'auto', height: '100%'}} src={zara} alt="zara"/></Link>
        <Link href='category?brand=' className="sm:h-8 h-6"><Image style={{maxHeight: 'inherit', width: 'auto', height: '100%'}} src={gucci} alt="gucci"/></Link>
        <Link href='category?brand=' className="sm:h-8 h-6"><Image style={{maxHeight: 'inherit', width: 'auto', height: '100%'}} src={prada} alt="prada"/></Link>
        <Link href='category?brand=' className="sm:h-8 h-6"><Image style={{maxHeight: 'inherit', width: 'auto', height: '100%'}} src={calvin} alt="calvin klein"/></Link>
      </nav>
    </section>
  )
}
