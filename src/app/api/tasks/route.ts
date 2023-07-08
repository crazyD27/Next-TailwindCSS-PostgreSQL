import { prisma } from '@/utils/prisma'
import { NextRequest, NextResponse } from 'next/server'
import { useGetUser } from '@/hooks/useGetUser'
import z from 'zod'

export async function GET(request: NextRequest) {
  const { session } = await useGetUser()

  if (!session?.user) {
    return NextResponse.json(
      { error: 'Essa rota precisa de autenticação.' },
      { status: 401 },
    )
  }

  const tasks = await prisma.task.findMany({
    where: {
      userId: session.user.id,
    },
  })

  return NextResponse.json(tasks)
}

export async function POST(request: NextRequest) {
  const { session } = await useGetUser()

  if (!session?.user) {
    return NextResponse.json(
      { error: 'Essa rota precisa de autenticação.' },
      { status: 401 },
    )
  }

  const taskShema = z.object({
    title: z.string(),
    dateConclusion: z.string(),
    description: z.string(),
  })

  const { title, dateConclusion, description } = taskShema.parse(
    await request.json(),
  )

  await prisma.task.create({
    data: {
      title,
      dateConclusion,
      description,
      userId: session.user.id as string,
    },
  })

  return NextResponse.json({}, { status: 201 })
}

export async function DELETE(request: NextRequest) {}
