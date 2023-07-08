import { api } from '@/services/api'
import { useRouter } from 'next/navigation'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { toast } from 'react-toastify'

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
  tasks: ITasksProps[] | undefined
  finishTask: (id: string) => void
  deleteTask: (id: string) => void
}

export const useTasks = (): IUseTasksProps => {
  const queryClient = useQueryClient()
  const router = useRouter()

  const { data: tasks } = useQuery(
    ['tasks'],
    async () => {
      const response = await api.get<ITasksProps[]>('/tasks')

      return response.data
    },
    {
      staleTime: 60 * 100 * 10, // 1 minute
    },
  )

  const { mutate: finishTask } = useMutation(
    async (id: string) => {
      const response = await api.put(`/tasks/${id}`)

      return response.data
    },
    {
      onSuccess: (data: ITasksProps) => {
        const oldsTasks = queryClient.getQueryData<ITasksProps[]>(['tasks'])
        const oldTask = queryClient.getQueryData<ITasksProps>([data.id])

        data.status = 'conclúida'

        if (oldsTasks) {
          const tasksUpdated = oldsTasks.map((task) =>
            task.id === data.id ? data : task,
          )

          queryClient.setQueryData(['tasks'], tasksUpdated)
          queryClient.setQueryData([data.id], {
            ...oldTask,
            status: 'concluída',
          })
          toast.success('Tarefa conclúida com sucesso!')
        }
      },
    },
  )

  const { mutate: deleteTask } = useMutation(
    async (id: string) => {
      const response = await api.delete(`/tasks/${id}`)

      return response.data
    },
    {
      onSuccess: (data: ITasksProps) => {
        const oldsTasks = queryClient.getQueryData<ITasksProps[]>(['tasks'])

        if (oldsTasks) {
          const tasksUpdated = oldsTasks.filter((task) => task.id !== data.id)

          queryClient.setQueryData(['tasks'], tasksUpdated)

          router.push('/')
          toast.success('Tarefa deletada com sucesso!')
        }
      },
    },
  )

  return { tasks, finishTask, deleteTask }
}
