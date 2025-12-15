import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import vers from '@/../public/versace.png'
import zara from '@/../public/zara.png'
import gucci from '@/../public/gucci.png'
import prada from '@/../public/prada.png'
import calvin from '@/../public/calvin klein.png'

export default function BrandNav() {
  const brands = [
    { src: zara, alt: 'zara', href: 'shop?brand=' },
    { src: gucci, alt: 'gucci', href: 'shop?brand=' },
    { src: prada, alt: 'prada', href: 'shop?brand=' },
    { src: calvin, alt: 'calvin klein', href: 'shop?brand=' },
    { src: vers, alt: 'versace', href: 'shop?brand=' },
  ]

  return (
    <section className="w-full bg-black min-h-fit py-11 items-center flex">
      <nav className="max-w-[1240px] w-11/12 mx-auto flex lg:justify-between justify-around sm:text-base gap-8 items-center flex-wrap">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="transition-transform duration-300 hover:scale-110 hover:-translate-y-0.5 active:scale-95"
          >
            <Link href={brand.href} className="sm:h-8 h-6 block transition-opacity duration-300 hover:opacity-70">
              <Image
                style={{ maxHeight: 'inherit', width: 'auto', height: '100%' }}
                src={brand.src}
                alt={brand.alt}
              />
            </Link>
          </div>
        ))}
      </nav>
    </section>
  )
}
