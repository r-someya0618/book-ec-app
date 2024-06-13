'use client'
import { SessionProvider } from 'next-auth/react'
import { PropsWithChildren, ReactNode } from 'react'

type ProviderProps = {
  children: ReactNode
}

function NextAuthProvider({ children }: ProviderProps) {
  return <SessionProvider>{children}</SessionProvider>
}

export default NextAuthProvider
