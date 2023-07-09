'use client'
import { useTasks } from '@/hooks/useTasks'
import { Check } from 'lucide-react'
import DeleteButton from './DeleteButton'

interface IButtonsTaskProps {
  id: string
  status: string
}

export const ButtonsTask = ({ id, status }: IButtonsTaskProps) => {
  const { finishTask } = useTasks()

  const handleFinishTask = async () => {
    finishTask(id)
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
      <DeleteButton id={id} />
    </div>
  )
}
