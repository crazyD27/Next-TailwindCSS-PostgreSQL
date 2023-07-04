import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import z from 'zod'
import { prisma } from '@/utils/prisma'

export async function POST(request: NextRequest) {
  const registerShema = z.object({
    name: z.string(),
    email: z.string(),
    password: z.string(),
  })

  const { name, email, password } = registerShema.parse(await request.json())

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (user) {
    return NextResponse.json(
      { error: 'Usuário já existente.' },
      { status: 409 },
    )
  }

  const passwordHash = await bcrypt.hash(password, 10)

  await prisma.user.create({
    data: {
      name,
      email,
      password: passwordHash,
    },
  })

  return NextResponse.json({ name, email }, { status: 201 })
}
