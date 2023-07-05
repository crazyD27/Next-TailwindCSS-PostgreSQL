'use client'
import React from 'react'
import { useForm } from 'react-hook-form'

interface IFormProps {
  titleTask: string
  dateConclusion: string
  description: string
}

export const CreateTaskForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormProps>()

  const handleCreateTask = (task: IFormProps) => {}

  return (
    <form
      onSubmit={handleSubmit(handleCreateTask)}
      className="flex w-full flex-col gap-4"
    >
      <label className="flex flex-col gap-1">
        <span className="font-body font-medium">Título</span>
        <input
          type="text"
          className="rounded-md border border-zinc-400 bg-zinc-300 p-3 outline-none focus:border-blue-400"
          {...register('titleTask', { required: true })}
        />
        {errors.titleTask && (
          <small className="text-xs text-red-400">Campo obrigatório.</small>
        )}
      </label>
      <label className="flex flex-col gap-1">
        <span className="font-body font-medium">Data de conclusão</span>
        <input
          type="date"
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
          className="rounded-md border border-zinc-400 bg-zinc-300 p-3 outline-none focus:border-blue-400"
          {...register('description', { required: true })}
        ></textarea>
        {errors.description && (
          <small className="text-xs text-red-400">Campo obrigatório.</small>
        )}
      </label>
      <button className="flex w-32 items-center justify-center self-end rounded-md bg-blue-400 p-2 text-zinc-50 transition-colors hover:bg-blue-500">
        Criar
      </button>
    </form>
  )
}
