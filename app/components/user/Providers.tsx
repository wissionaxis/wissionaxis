'use client'
import {SessionProvider} from "next-auth/react"
import React, { ReactNode } from 'react'
interface props {children:ReactNode}
const Providers = (Props : props) => {
  return (
    <SessionProvider>{Props.children}</SessionProvider>
  )
}

export default Providers