import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { useGetUser } from '@/hooks/useGetUser'
import { prisma } from '@/utils/prisma'

interface IParamsProps {
  params: {
    id: string
  }
}

export async function GET(request: NextRequest, { params }: IParamsProps) {
  const { session } = await useGetUser()

  if (!session) {
    return NextResponse.json({ error: 'Essa rota precisa de autenticação.' })
  }

  const taskShema = z.object({
    id: z.string(),
  })

  const { id } = taskShema.parse(params)

  const task = await prisma.task.findUnique({
    where: {
      id,
    },
  })

  if (!task) {
    return NextResponse.json(
      { error: 'Tarefa não encontrada.' },
      { status: 404 },
    )
  }

  if (task.userId !== session.user.id) {
    return NextResponse.json(
      { error: 'Operação não permitida.' },
      { status: 401 },
    )
  }

  return NextResponse.json(task, { status: 200 })
}

export async function DELETE(request: NextRequest, { params }: IParamsProps) {
  const { session } = await useGetUser()

  if (!session) {
    return NextResponse.json({ error: 'Essa rota precisa de autenticação.' })
  }

  const taskShema = z.object({
    id: z.string(),
  })

  const { id } = taskShema.parse(params)

  const task = await prisma.task.findUnique({
    where: {
      id,
    },
  })

  if (!task) {
    return NextResponse.json(
      { error: 'Tarefa não encontrada.' },
      { status: 404 },
    )
  }

  if (task.userId !== session.user.id) {
    return NextResponse.json(
      { error: 'Operação não permitida.' },
      { status: 401 },
    )
  }

  await prisma.task.delete({
    where: {
      id,
    },
  })

  return NextResponse.json(task, { status: 200 })
}

export async function PUT(request: NextRequest, { params }: IParamsProps) {
  const { session } = await useGetUser()

  if (!session) {
    return NextResponse.json({ error: 'Essa rota precisa de autenticação.' })
  }

  const taskShema = z.object({
    id: z.string(),
  })

  const { id } = taskShema.parse(params)

  const task = await prisma.task.findUnique({
    where: {
      id,
    },
  })

  if (!task) {
    return NextResponse.json(
      { error: 'Tarefa não encontrada.' },
      { status: 404 },
    )
  }

  await prisma.task.update({
    where: {
      id,
    },
    data: {
      status: 'concluída',
    },
  })

  return NextResponse.json(task, { status: 200 })
}
