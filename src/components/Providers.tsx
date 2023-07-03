'use client'
import React, { ReactNode } from 'react'

import { SessionProvider } from 'next-auth/react'

interface IProvidersProps {
  children: ReactNode
}

export const Providers = ({ children }: IProvidersProps) => {
  return <SessionProvider>{children}</SessionProvider>
}
