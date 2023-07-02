'use client'
import React, { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { AuthProvider } from '@/contexts/authContext'
import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth'

interface IProvidersProps {
  children: ReactNode
  session?: Session
}

export const Providers = ({ children, session }: IProvidersProps) => {
  const queryclient = new QueryClient()

  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryclient}>
        <AuthProvider>{children}</AuthProvider>
      </QueryClientProvider>
    </SessionProvider>
  )
}
