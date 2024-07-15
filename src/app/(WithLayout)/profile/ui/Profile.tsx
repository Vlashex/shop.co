"use client"

import { getUserByAccessToken } from '@/lib/actions/getUserByAccessToken'
import { IUser } from '@/lib/types'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useCookies } from 'react-cookie'



export default function Profile() {

    const [cookies, setCookies] = useCookies(['access_token'])
    const [user, setUser] = useState<IUser | null>(null)
    

    useLayoutEffect(()=>{
        const getUser = async() => {
            setUser(await getUserByAccessToken(cookies.access_token))
        }
        getUser()
    },[])
    
    

  return (
    <section className="flex flex-col flex-1 h-[900px] items-center justify-center">
        <h1 className='text-3xl font-semibold'>{user?.name}</h1>
        <h1 className='text-3xl font-semibold'>{user?.email}</h1>
    </section>
  )
}
