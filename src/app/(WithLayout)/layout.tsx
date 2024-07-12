import Footer from '@/widgets/Footer/footer'
import Header from '@/widgets/Header/header'
import React, { ReactElement } from 'react'

export default function Layout({children}: {children: ReactElement}) {
  return (
    <>
        <Header/>
        {children}
        <Footer/>
    </>
  )
}
