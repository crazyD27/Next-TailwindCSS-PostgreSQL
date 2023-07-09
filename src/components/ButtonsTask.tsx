'use client'
import { Check } from 'lucide-react'
import { useTasks } from '@/hooks/useTasks'
import DeleteButton from './DeleteButton'
import { IButtonsTaskProps } from '@/Types/components/ButtonsTaskTypes'

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
