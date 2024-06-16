'use client'
import { usePathname } from 'next/navigation'
import React, { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
interface Child{
    children:ReactNode
}
const LayoutProvider = ({children}:Child) => {
    const path = usePathname()
    console.log(path)
  return (
   <>
   {path !== '/Login' && path !== '/register' && <Navbar/>}
   {children}
   {path !== '/Login' && path !== '/register' && <Footer/>}
   </>
  )
}

export default LayoutProvider
