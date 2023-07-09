'use client'
import { useTasks } from '@/hooks/useTasks'

const ProfileStats = () => {
  const { tasks } = useTasks()

  const tasksFinished = tasks?.filter((task) => task.status !== 'pendente')
  const tasksPendding = tasks?.filter((task) => task.status === 'pendente')
  return (
    <div className="mx-auto flex w-[200px] flex-col gap-1 text-center">
      <h2 className=" font-title text-lg font-bold">Tarefas</h2>
      <div className="flex w-full justify-between ">
        <p className="font-body text-sm font-medium">
          Pendentes: <span>{tasksPendding?.length}</span>
        </p>
        <p className="font-body text-sm font-medium">
          Conclúidas: <span>{tasksFinished?.length}</span>
        </p>
      </div>
    </div>
  )
}

export default ProfileStats
