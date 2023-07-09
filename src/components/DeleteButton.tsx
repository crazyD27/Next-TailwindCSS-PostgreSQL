'use client'

import { IDeleteButtonProps } from '@/Types/components/DeleteButtonTypes'
import { useTasks } from '@/hooks/useTasks'
import { Trash2 } from 'lucide-react'
import React from 'react'

const DeleteButton = ({ id }: IDeleteButtonProps) => {
  const { deleteTask } = useTasks()

  const handleDeleteTask = () => {
    deleteTask(id)
  }
  return (
    <button onClick={handleDeleteTask}>
      <Trash2
        size={18}
        className="text-red-600 transition-colors hover:text-red-800"
      />
    </button>
  )
}

export default DeleteButton
