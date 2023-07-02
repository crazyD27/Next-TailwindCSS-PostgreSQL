/* eslint-disable import/no-absolute-path */
import React from 'react'
import Image from 'next/image'

import { LoginForm } from '@/components/Forms/LoginForm'
import RegisterImage from '/public/register-image.png'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

export async function generateMetadata() {
  return {
    title: 'TodoNext - Login',
    description: 'Página de login, faça login e gerencie suas tarefas.',
  }
}

const Login = async () => {
  const session = await getServerSession(authOptions)

  if (session) return redirect('/')
  return (
    <div className="mt-5 flex w-full items-center justify-center sm:mt-8">
      <div className="flex w-full max-w-[700px] flex-col justify-between gap-8 rounded-xl bg-zinc-50 p-6 sm:flex-row">
        <div className="hidden w-1/2 sm:flex sm:flex-col sm:gap-2">
          <div className="flex flex-col gap-2">
            <h1 className="w-fit border-b border-red-400 font-title text-3xl">
              TodoNext!
            </h1>
            <p className="w-full max-w-[315px] font-body text-sm italic text-zinc-500">
              Seja parte da comunidade que está transformando a forma como
              lidamos com tarefas.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={RegisterImage}
              alt="Imagem da tela de registro de uma menina mexendo em seu telefone"
              className="h-48 w-48"
            />
          </div>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}

export default Login
