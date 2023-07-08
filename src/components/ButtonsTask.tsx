'use client'
import { useTasks } from '@/hooks/useTasks'
import { Check, Trash2 } from 'lucide-react'

interface IButtonsTaskProps {
  id: string
  status: string
}

export const ButtonsTask = ({ id, status }: IButtonsTaskProps) => {
  const { finishTask, deleteTask } = useTasks()

  const handleFinishTask = async () => {
    finishTask(id)
  }

  const handleDeleteTask = async () => {
    deleteTask(id)
  }

  return (
    <div className="flex items-center gap-4">
      {status === 'pendente' && (
        <button
          onClick={handleFinishTask}
          className="cursor-pointer bg-transparent"
        >
          <Check className="text-green-500" size={25} />
        </button>
      )}
      <button
        onClick={handleDeleteTask}
        className="cursor-pointer bg-transparent"
      >
        <Trash2 className="text-red-500" size={25} />
      </button>
    </div>
  )
}
