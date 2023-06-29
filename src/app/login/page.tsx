/* eslint-disable import/no-absolute-path */
import React from 'react'
import Image from 'next/image'

import { LoginForm } from '@/components/Forms/LoginForm'
import LoginImage from '/public/login-image.png'

export async function generateMetadata() {
  return {
    title: 'TodoNext - Login',
    description: 'Página de login, faça login e gerencie suas tarefas.',
  }
}

const Login = () => {
  return (
    <div className="mt-5 flex w-full items-center justify-center sm:mt-8">
      <div className="flex w-full max-w-[800px] flex-col justify-between gap-8 rounded-xl bg-zinc-50 p-6 sm:flex-row">
        <div className="hidden w-1/2 sm:flex sm:flex-col sm:gap-2">
          <div className="flex flex-col gap-2">
            <h1 className="w-fit border-b border-red-400 font-title text-3xl">
              Bem-vindo de volta
            </h1>
            <p className="w-full max-w-[315px] font-body text-sm italic text-zinc-500">
              Faça login e volte a gerenciar suas tarefas de forma fácil e
              prática.
            </p>
            <span className="block w-fit border-b border-red-400 text-zinc-500">
              Economize tempo!
            </span>
          </div>
          <div>
            <Image
              src={LoginImage}
              alt="Imagem da tela de registro de uma menina mexendo em seu telefone"
              className="w-full"
            />
          </div>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}

export default Login
