'use client'
import React from 'react'
import { Github } from 'lucide-react'
import { BiLogoGmail } from 'react-icons/bi'
import { signIn } from 'next-auth/react'
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

  const handleLoginUser = async (user: IFormProps) => {
    await signIn<'credentials'>('credentials', {
      ...user,
      redirect: true,
      callbackUrl: '/',
    })
  }

  return (
    <div className="flex w-full flex-col gap-4 sm:w-1/2">
      <div className="flex flex-col gap-1">
        <h1 className="font-title text-2xl">Vamos começar!</h1>
        <p className="font-body text-sm italic text-zinc-500">
          Escolha uma das opções para logar.
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
      <div className="flex w-full items-center justify-center gap-2">
        <button
          onClick={() => signIn('google')}
          className="flex w-full max-w-[400px] items-center justify-center gap-1 rounded-md bg-red-400 py-3 font-medium text-white transition-colors hover:bg-red-300"
        >
          <BiLogoGmail size={24} />
          Google
        </button>
        <button
          onClick={() => signIn('github')}
          className="flex w-full max-w-[400px] items-center justify-center gap-1 rounded-md bg-zinc-800 py-3 font-medium text-white transition-colors hover:bg-zinc-700"
        >
          <Github />
          GitHub
        </button>
      </div>
    </div>
  )
}
