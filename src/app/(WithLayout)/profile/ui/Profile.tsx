"use client"

import { selectUser } from '@/lib/store/authSlice'
import { RootState } from '@/lib/store/store'
import { IUser } from '@/lib/types'
import React, { useLayoutEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { useSelector } from 'react-redux'



export default function Profile() {

    const [cookies, setCookies] = useCookies(['access_token'])
    const [user, setUser] = useState<IUser | null>(useSelector((state:RootState) => state.auth.user))

  return (
    <section className="flex flex-col flex-1 h-[900px] items-center justify-center">
        <h1 className='text-3xl font-semibold'>{user?.name}</h1>
        <h1 className='text-3xl font-semibold'>{user?.email}</h1>
    </section>
  )
}
