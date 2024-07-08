import { Button } from '@/components/ui/button'
import { InputWithButton } from '@/components/ui/inputWithButton'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='w-full bg-[#F0F0F0] mt-[170px] relative pt-[140px] pb-10'>
        <div className="max-w-[1240px] w-11/12 mx-auto absolute bg-black h-[180px] left-1/2 -translate-x-1/2 -top-[90px] rounded-2xl flex px-8 py-10 md:gap-20 gap-2 max-md:flex-col justify-between">
            <h1 className='xl:text-[40px] md:text-[30px] text-[20px] text-white text-wrap w-1/2 max-md:w-full'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
            <div className="w-1/2 max-md:w-full">
                <form action="" className='max-md:flex items-center'>
                    <InputWithButton placeholder='Enter your email address' className='bg-white rounded-3xl w-full' generalClassName='max-md:w-3/5'/>
                    <Button type='submit' variant='outline' className='bg-white rounded-3xl md:mt-5 w-full max-md:hidden'>Subscribe to Newsletter</Button>
                    <Button type='submit' variant='outline' className='bg-white rounded-3xl md:mt-5 w-2/5 md:hidden'>Subscribe</Button>
                </form>
            </div>
        </div>
        <div className="flex justify-between max-w-[1240px] w-11/12 mx-auto max-md:flex-wrap gap-y-8">
            <div className='max-sm:text-center max-sm:w-full'>
                <h1 className='text-[33.45px] font-semibold'>SHOP.CO</h1>
                <p className='sm:w-[250px]'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
            </div>
            <div>
                <h1 className='text-base font-bold mb-5'>Company</h1>
                <nav className='gap-3 flex flex-col'>
                    <Link href=''>About</Link>
                    <Link href=''>Features</Link>
                    <Link href=''>Works</Link>
                    <Link href=''>Career</Link>
                </nav>
            </div>
            <div>
                <h1 className='text-base font-bold mb-5'>Help</h1>
                <nav className='gap-3 flex flex-col'>
                    <Link href=''>Customer Support</Link>
                    <Link href=''>Delivery Details</Link>
                    <Link href=''>Terms & Conditions</Link>
                    <Link href=''>Privacy Policy</Link>
                </nav>
            </div>
            <div>
                <h1 className='text-base font-bold mb-5'>FAQ</h1>
                <nav className='gap-3 flex flex-col'>
                    <Link href=''>Account</Link>
                    <Link href=''>Manage Deliveries</Link>
                    <Link href=''>Orders</Link>
                    <Link href=''>Payments</Link>
                </nav>
            </div>
            <div>
                <h1 className='text-base font-bold mb-5'>Resources</h1>
                <nav className='gap-3 flex flex-col'>
                    <Link href=''>Free eBooks</Link>
                    <Link href=''>Development Tutorial</Link>
                    <Link href=''>How to - Blog</Link>
                    <Link href=''>Youtube Playlist</Link>
                </nav>
            </div>
        </div>
    </footer>
  )
}
