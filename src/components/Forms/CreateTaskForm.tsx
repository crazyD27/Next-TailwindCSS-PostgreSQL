'use client'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useTasks } from '@/hooks/useTasks'
import { allowedColors } from '@/utils/TasksColors'
import { toast } from 'react-toastify'

interface IFormProps {
  title: string
  dateConclusion: string
  description: string
  color: string
}

export const CreateTaskForm = () => {
  const { createTask, loadingCreate } = useTasks()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormProps>()

  const handleCreateTask = (data: IFormProps) => {
    if (!allowedColors.includes(data.color)) {
      return toast.error('Selecione uma das cores disponíveis.')
    }

    createTask(data)
    reset()
  }

  useEffect(() => {
    reset()
  }, [reset])

  return (
    <form
      onSubmit={handleSubmit(handleCreateTask)}
      className="flex w-full flex-col gap-4"
    >
      <label className="flex flex-col gap-1">
        <span className="font-body font-medium">Título</span>
        <input
          type="text"
          disabled={loadingCreate}
          className="rounded-md border border-zinc-400 bg-zinc-300 p-3 outline-none focus:border-blue-400"
          {...register('title', { required: true })}
        />
        {errors.title && (
          <small className="text-xs text-red-400">Campo obrigatório.</small>
        )}
      </label>
      <label className="flex flex-1 flex-col gap-1">
        <span className="font-body font-medium">Data de conclusão</span>
        <input
          type="date"
          disabled={loadingCreate}
          className="rounded-md border border-zinc-400 bg-zinc-300 p-3 outline-none focus:border-blue-400"
          {...register('dateConclusion', { required: true })}
        />
        {errors.dateConclusion && (
          <small className="text-xs text-red-400">Campo obrigatório.</small>
        )}
      </label>
      <label className="flex flex-col gap-1">
        <span className="font-body font-medium">Descrição</span>
        <textarea
          cols={30}
          rows={8}
          disabled={loadingCreate}
          className="rounded-md border border-zinc-400 bg-zinc-300 p-3 outline-none focus:border-blue-400"
          {...register('description', { required: true })}
        ></textarea>
        {errors.description && (
          <small className="text-xs text-red-400">Campo obrigatório.</small>
        )}
      </label>
      <input
        type="color"
        list="colorList"
        disabled={loadingCreate}
        className="absolute right-4 top-4 h-7 w-12 rounded bg-zinc-300 p-0.5 px-1"
        {...register('color')}
        defaultValue={allowedColors[0]}
      />
      <datalist id="colorList">
        {allowedColors.map((color) => (
          <option value={color} key={color} />
        ))}
      </datalist>
      {!loadingCreate ? (
        <button className="flex w-32 items-center justify-center self-end rounded-md bg-blue-400 p-2 text-zinc-50 transition-colors hover:bg-blue-500">
          Criar
        </button>
      ) : (
        <button
          disabled
          className="flex w-32 items-center justify-center self-end rounded-md bg-zinc-500 p-2 text-zinc-50 transition-colors hover:cursor-not-allowed"
        >
          Criando..
        </button>
      )}
    </form>
  )
}
