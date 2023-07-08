'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { formateDateToShow } from '@/utils/formateDate'
import { ButtonsTask } from '@/components/ButtonsTask'
import { useQuery } from 'react-query'
import { api } from '@/services/api'

interface IParamProps {
  params: {
    id: string
  }
}

interface ITasksProps {
  id: string
  title: string
  status: string
  dateConclusion: string
  description: string
  createdAt: Date
  userId: string
}

const Task = ({ params: { id } }: IParamProps) => {
  const { data: task } = useQuery([id], async () => {
    const response = await api.get<ITasksProps>(`/tasks/${id}`)

    return response.data
  })

  return (
    <div className="m-auto w-full max-w-[500px]">
      {task && (
        <>
          <p className="mt-3 flex items-center justify-start gap-1 font-body text-sm text-zinc-700">
            <Link href="/" className="font-medium hover:text-zinc-800">
              Página inicial
            </Link>
            <span className="text-base">
              <ChevronRight size={12} />
            </span>
            <span className="font-bold capitalize">{task.title}</span>
          </p>
          <div className="mt-6 flex items-center justify-between">
            <div className="flex flex-col gap-1 sm:gap-2">
              <h1 className="font-title text-2xl capitalize text-zinc-800 sm:text-3xl">
                {task.title}
              </h1>
              <p className="font-body text-xs text-zinc-700 sm:text-sm">
                {formateDateToShow(task.dateConclusion)} -{' '}
                <span className="capitalize">{task.status}</span>
              </p>
            </div>
            <div className="mt-1">
              <ButtonsTask id={task.id} status={task.status} />
            </div>
          </div>
          <div className="mt-3 flex flex-col gap-1">
            <span className="font-body text-sm text-zinc-800 sm:text-lg">
              Descrição:
            </span>
            <p className="h-[300px] rounded-md border border-zinc-400 p-2 font-body text-sm text-zinc-800">
              {task.description}
            </p>
          </div>
        </>
      )}
    </div>
  )
}

export default Task
