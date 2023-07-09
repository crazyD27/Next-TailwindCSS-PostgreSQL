import { CreateTaskForm } from '@/components/Forms/CreateTaskForm'
import React from 'react'

const Create = () => {
  return (
    <div className="m-auto max-w-fit py-4 pb-10">
      <div className="relative m-auto flex w-full max-w-[450px] flex-col gap-4 rounded-md border border-zinc-400 p-3 sm:px-5 lg:px-6">
        <div className="flex flex-col">
          <h1 className="font-title text-xl sm:text-2xl lg:text-3xl">
            Criar tarefa
          </h1>
          <p className="font-body text-xs italic sm:text-sm">
            Crie sua tarefa de forma fácil.
          </p>
        </div>
        <CreateTaskForm />
      </div>
    </div>
  )
}

export default Create
