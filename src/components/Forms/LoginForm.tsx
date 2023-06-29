'use client'
import React from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

interface IFormProps {
  email: string
  password: string
}

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormProps>()

  const handleLoginUser = (user: IFormProps) => {
    console.log(user)
  }

  return (
    <div className="w-full sm:w-1/2">
      <div className="flex flex-col gap-1">
        <h1 className="font-title text-2xl">Vamos começar!</h1>
        <p className="font-body text-sm italic text-zinc-500">
          Faça login na sua conta.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(handleLoginUser)}
        className="mt-7 flex w-full flex-col gap-4"
      >
        <label className="flex flex-col gap-1 font-body">
          <span className="text-sm font-medium text-zinc-500">E-mail</span>
          <input
            type="email"
            className="w-full rounded-md border border-zinc-400 px-2 py-3 text-zinc-700 outline-none focus:border-blue-300"
            {...register('email', { required: true })}
          />
          <small className="text-red-500">
            {errors.email?.type === 'required' && 'Campo é obrigatório.'}
          </small>
        </label>
        <label className="flex flex-col gap-1 font-body">
          <span className="text-sm font-medium text-zinc-500">Senha</span>
          <input
            type="password"
            className="w-full rounded-md border border-zinc-400 px-2 py-3 text-zinc-700 outline-none focus:border-blue-300"
            {...register('password', {
              required: true,
              minLength: 6,
            })}
          />
          <small className="text-red-500">
            {errors.password?.type === 'required' && 'Campo é obrigatório.'}
            {errors.password?.type === 'minLength' &&
              'Senha menor que 6 caracteres.'}
          </small>
        </label>
        <button className="w-full rounded-md bg-blue-600 py-3 text-center font-medium text-white">
          Entrar
        </button>
        <p className="mt-2 text-center font-body text-sm italic text-zinc-500">
          Não possui uma conta?{' '}
          <Link
            href="/register"
            className="font-body font-medium text-blue-600 hover:text-blue-700"
          >
            Cadastrar
          </Link>
        </p>
      </form>
    </div>
  )
}
