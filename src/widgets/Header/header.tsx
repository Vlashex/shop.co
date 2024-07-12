
import { Drawer, DrawerContent, DrawerHeader, DrawerTrigger } from '@/components/ui/drawer'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { InputWithButton } from '@/components/ui/inputWithButton'
import Link from 'next/link'
import React from 'react'
import ProfileButton from './components/ProfileButton'

export default function Header() {

  interface LinksDataInterface {
    name: string
    href: string
  }
  const LinksData: LinksDataInterface[] = [
    {
      name: 'Shop',
      href: '/shop'
    },
    {
      name: 'On Sale',
      href: '/'
    },
    {
      name: 'New Arrivals',
      href: '/'
    },
    {
      name: 'Brands',
      href: '/'
    }
  ]

  function Links({ data }:{ data:LinksDataInterface[] }) {
    return(
      <>
        {
          data.map((value, index)=>
            <Link key={index} href={value.href} className='text-base font-medium'>{value.name}</Link>
          )
        }
      </>
    )
  }
  function DropDownLinks({ data }:{ data:LinksDataInterface[] }) {
    return(
      <>
        {
          data.map((value, index)=>
            <DropdownMenuItem key={index}>
              <Link href={value.href} className='text-base font-medium'>{value.name}</Link>
            </DropdownMenuItem>
          )
        }
      </>
    )
  }

  return (
    <header className='bg-white h-24 w-full mx-auto py-6 flex items-center justify-center'>
      <nav className="flex w-11/12 max-w-[1240px] justify-between gap-4 lg:gap-10 items-center">
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button type='button' className='text-2xl font-bold rotate-90'>|||</button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-[200px] bg-white ml-6 mt-4'>
              <DropDownLinks data={LinksData}/>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Link href='/' className='text-3xl font-bold mr-auto'>SHOP.CO</Link>
        <div className='flex flex-nowrap text-nowrap gap-3 lg:gap-6 max-md:hidden'>
          <Links data={LinksData}/>
        </div>
        <InputWithButton placeholder='Search for products...' generalClassName='max-[500px]:hidden'/>
        <div className="gap-3 max-h-full items-center flex">
          <Drawer>
            <DrawerTrigger asChild className='min-[500px]:hidden'>
              <button>
                <svg width='20px' height='20px' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
              </button>
            </DrawerTrigger>
            <DrawerContent className='top-0 '>
              <InputWithButton placeholder='Search for products...'/>
            </DrawerContent>
          </Drawer>
          <Link href='/cart'>
            <svg width="32px" height="32px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" strokeWidth="0.00024000000000000003" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.144"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M5.41442 6H3.75V4.5H6.58558L7.33558 7.5H18.935L17.2321 15.1627L16.5 15.75H8.25L7.51786 15.1627L6.02 8.42233L5.41442 6ZM7.68496 9L8.85163 14.25H15.8984L17.065 9H7.68496ZM10.5 18C10.5 18.8284 9.82843 19.5 9 19.5C8.17157 19.5 7.5 18.8284 7.5 18C7.5 17.1716 8.17157 16.5 9 16.5C9.82843 16.5 10.5 17.1716 10.5 18ZM15 19.5C15.8284 19.5 16.5 18.8284 16.5 18C16.5 17.1716 15.8284 16.5 15 16.5C14.1716 16.5 13.5 17.1716 13.5 18C13.5 18.8284 14.1716 19.5 15 19.5Z" fill="#080341"></path></g></svg>
          </Link>
          <ProfileButton/>
        </div>
      </nav>
    </header>
  )
}
