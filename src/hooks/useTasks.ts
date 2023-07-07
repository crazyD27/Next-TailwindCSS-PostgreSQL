import { prisma } from '@/utils/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

interface ITasksProps {
  id: string
  title: string
  status: string
  dateConclusion: string
  description: string
  createdAt: Date
  userId: string
}

interface IUseTasksProps {
  getAllTasks: () => Promise<ITasksProps[] | null>
  getTask: (id: string) => Promise<ITasksProps | null>
}

export const useTasks = (): IUseTasksProps => {
  const getAllTasks = async () => {
    const session = await getServerSession(authOptions)

    if (!session) {
      return null
    }

    const tasks = await prisma.task.findMany({
      where: {
        userId: session.user.id,
      },
    })

    return tasks
  }

  const getTask = async (id: string) => {
    const session = await getServerSession(authOptions)

    if (!session) {
      return null
    }

    const tasks = await prisma.task.findUnique({
      where: {
        id,
      },
    })

    if (!tasks) {
      return null
    }

    if (tasks.userId !== session.user.id) {
      return null
    }

    return tasks
  }

  return { getAllTasks, getTask }
}
