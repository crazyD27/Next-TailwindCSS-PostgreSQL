'use client'
import { Check, Trash2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface IButtonsTaskProps {
  id: string
  status: string
}

export const ButtonsTask = ({ id, status }: IButtonsTaskProps) => {
  const router = useRouter()

  const handleFinishTask = async () => {
    await fetch(`http://localhost:3000/api/tasks/${id}`, {
      method: 'PUT',
    })
  }

  const handleDeleteTask = async () => {
    await fetch(`http://localhost:3000/api/tasks/${id}`, {
      method: 'DELETE',
    }).then((res) => {
      router.push('/')
    })
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
