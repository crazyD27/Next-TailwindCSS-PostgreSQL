import './globals.css'
import { ReactNode } from 'react'
import { Sriracha, Poppins } from 'next/font/google'
import { GlobalContainer } from '@/components/GlobalContainer'
import { Providers } from '@/components/Providers'

const SrirachaFont = Sriracha({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-title',
})

const poppinsFont = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-body',
})

export const metadata = {
  title: 'TodoList',
  description: 'Uma TODO para gerenciar suas tarefas de forma fácil e prática.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${SrirachaFont.variable} ${poppinsFont.variable} bg-zinc-400`}
      >
        <Providers>
          <GlobalContainer>{children}</GlobalContainer>
        </Providers>
      </body>
    </html>
  )
}
