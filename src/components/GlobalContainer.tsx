import React, { ReactNode } from 'react'

interface IGlobalContainerProps {
  children: ReactNode
}
export const GlobalContainer = ({ children }: IGlobalContainerProps) => {
  return <main className="m-auto max-w-[1300px] p-3">{children}</main>
}
