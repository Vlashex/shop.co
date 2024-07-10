
import { Drawer, DrawerContent, DrawerHeader, DrawerTrigger } from '@/components/ui/drawer'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { InputWithButton } from '@/components/ui/inputWithButton'
import Link from 'next/link'
import React from 'react'

export default function Header() {

  interface LinksDataInterface {
    name: string
    href: string
  }
  const LinksData: LinksDataInterface[] = [
    {
      name: 'Shop',
      href: '/'
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
          <Link href='/profile'>
            <svg width='20px' height='20px' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M8.25 9C8.25 6.92893 9.92893 5.25 12 5.25C14.0711 5.25 15.75 6.92893 15.75 9C15.75 11.0711 14.0711 12.75 12 12.75C9.92893 12.75 8.25 11.0711 8.25 9ZM12 6.75C10.7574 6.75 9.75 7.75736 9.75 9C9.75 10.2426 10.7574 11.25 12 11.25C13.2426 11.25 14.25 10.2426 14.25 9C14.25 7.75736 13.2426 6.75 12 6.75Z" fill="#1C274C"></path> <path fillRule="evenodd" clipRule="evenodd" d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.5456 3.77827 16.851 5.4421 18.5235C5.6225 17.5504 5.97694 16.6329 6.68837 15.8951C7.75252 14.7915 9.45416 14.25 12 14.25C14.5457 14.25 16.2474 14.7915 17.3115 15.8951C18.023 16.6329 18.3774 17.5505 18.5578 18.5236C20.2217 16.8511 21.25 14.5456 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM17.1937 19.6554C17.0918 18.4435 16.8286 17.5553 16.2318 16.9363C15.5823 16.2628 14.3789 15.75 12 15.75C9.62099 15.75 8.41761 16.2628 7.76815 16.9363C7.17127 17.5553 6.90811 18.4434 6.80622 19.6553C8.28684 20.6618 10.0747 21.25 12 21.25C13.9252 21.25 15.7131 20.6618 17.1937 19.6554Z" fill="#1C274C"></path> </g></svg>
          </Link>
        </div>
      </nav>
    </header>
  )
}
