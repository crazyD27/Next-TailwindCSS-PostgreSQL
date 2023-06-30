'use client'
import { AuthProvider } from '@/contexts/authContext'
import React, { ReactNode } from 'react'

interface IProvidersProps {
  children: ReactNode
}

export const Providers = ({ children }: IProvidersProps) => {
  return <AuthProvider>{children}</AuthProvider>
}
