'use client'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTasks } from '@/hooks/useTasks'
import { allowedColors } from '@/utils/TasksColors'
import { toast } from 'react-toastify'
import { InputField } from '../InputField'
import { TextAreaField } from '../TextAreaField'

interface IFormProps {
  title: string
  dateConclusion: string
  description: string
  color: string
}

export const CreateTaskForm = () => {
  const { createTask, loadingCreate } = useTasks()

  const methods = useForm<IFormProps>()

  const handleCreateTask = (data: IFormProps) => {
    if (!allowedColors.includes(data.color)) {
      return toast.error('Selecione uma das cores disponíveis.')
    }

    createTask(data)
    methods.reset()
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleCreateTask)}
        className="flex w-full flex-col gap-4"
      >
        <InputField
          label="título"
          name="title"
          rules={{ required: 'Campo obrigatório.' }}
        />
        <InputField
          label="Data de conclusão"
          name="dateConclusion"
          type="date"
          rules={{ required: 'Campo obrigatório.' }}
        />
        <TextAreaField
          name="description"
          label="Descrição"
          cols={30}
          rows={8}
        />
        <InputField
          name="color"
          type="color"
          list="colorList"
          defaultValues={allowedColors[0]}
          className="absolute right-4 top-4 h-7 w-12 rounded bg-zinc-300 p-0.5 px-1"
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
    </FormProvider>
  )
}
