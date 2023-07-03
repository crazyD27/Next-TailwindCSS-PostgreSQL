import React, { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

interface IGlobalContainerProps {
  children: ReactNode
}
export const GlobalContainer = ({ children }: IGlobalContainerProps) => {
  return (
    <>
      <Header />
      <main className="m-auto min-h-screen max-w-[1300px] p-3">{children}</main>
      <Footer />
    </>
  )
}
