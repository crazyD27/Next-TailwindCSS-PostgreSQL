import { PrismaClient } from '@prisma/client'

declare global {
  namespace NodeJS {
    interface Global {
      prisma: PrismaClient
    }
  }
}

export const prisma: PrismaClient = (global as any).prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') (global as any).prisma = prisma
