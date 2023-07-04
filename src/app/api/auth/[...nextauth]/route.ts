import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import bcrypt from 'bcrypt'
import { prisma } from '../../../../utils/prisma'

import type { NextAuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'text' },
      },
      async authorize(credentials, req): Promise<any> {
        if (!credentials?.email || !credentials.password) {
          throw new Error('E-mail ou senha inválida.')
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        })

        if (!user) {
          throw new Error('Usuário não existe.')
        }

        if (!user.password) {
          throw new Error('E-mail ou senha inválida.')
        }

        const isValidPassword = await bcrypt.compare(
          credentials.password,
          user.password,
        )

        if (!isValidPassword) {
          throw new Error('E-mail ou senha inválida.')
        }

        return user
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
  adapter: PrismaAdapter(prisma),
}
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
