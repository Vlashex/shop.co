import { Button } from '@/components/ui/button'
import { InputWithButton } from '@/components/ui/inputWithButton'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { href: '', text: 'About' },
        { href: '', text: 'Features' },
        { href: '', text: 'Works' },
        { href: '', text: 'Career' },
      ],
    },
    {
      title: 'Help',
      links: [
        { href: '', text: 'Customer Support' },
        { href: '', text: 'Delivery Details' },
        { href: '', text: 'Terms & Conditions' },
        { href: '', text: 'Privacy Policy' },
      ],
    },
    {
      title: 'FAQ',
      links: [
        { href: '', text: 'Account' },
        { href: '', text: 'Manage Deliveries' },
        { href: '', text: 'Orders' },
        { href: '', text: 'Payments' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { href: '', text: 'Free eBooks' },
        { href: '', text: 'Development Tutorial' },
        { href: '', text: 'How to - Blog' },
        { href: '', text: 'Youtube Playlist' },
      ],
    },
  ]

  return (
    <footer className='w-full bg-[#F0F0F0] mt-[170px] relative pt-[140px] pb-10'>
        <div className="max-w-[1240px] w-11/12 mx-auto absolute bg-black h-[180px] left-1/2 -translate-x-1/2 -top-[90px] rounded-2xl flex px-8 py-10 md:gap-20 gap-2 max-md:flex-col justify-between">
            <h1 className='xl:text-[40px] md:text-[30px] text-[20px] text-white text-wrap w-1/2 max-md:w-full'>STAY UP TO DATE ABOUT OUR LATEST OFFERS</h1>
            <div className="w-1/2 max-md:w-full">
                <form action="" className='max-md:flex items-center'>
                    <InputWithButton placeholder='Enter your email address' className='bg-white rounded-3xl w-full' generalClassName='max-md:w-3/5'/>
                    <Button type='submit' variant='outline' className='bg-white rounded-3xl md:mt-5 w-full max-md:hidden transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95'>Subscribe to Newsletter</Button>
                    <Button type='submit' variant='outline' className='bg-white rounded-3xl md:mt-5 w-2/5 md:hidden transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95'>Subscribe</Button>
                </form>
            </div>
        </div>
        <div className="flex justify-between max-w-[1240px] w-11/12 mx-auto max-md:flex-wrap gap-y-8">
            <div className='max-sm:text-center max-sm:w-full'>
                <h1 className='text-[33.45px] font-semibold mb-2'>SHOP.CO</h1>
                <p className='sm:w-[250px] text-gray-600'>We have clothes that suits your style and which you're proud to wear. From women to men.</p>
            </div>
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h1 className='text-base font-bold mb-5'>{section.title}</h1>
                <nav className='gap-3 flex flex-col'>
                  {section.links.map((link, linkIndex) => (
                    <div key={linkIndex} className="transition-transform duration-300 hover:translate-x-1">
                      <Link
                        href={link.href}
                        className='text-sm transition-colors duration-300 hover:text-gray-700'
                      >
                        {link.text}
                      </Link>
                    </div>
                  ))}
                </nav>
              </div>
            ))}
        </div>
    </footer>
  )
}
