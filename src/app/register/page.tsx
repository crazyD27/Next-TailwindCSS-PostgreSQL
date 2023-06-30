/* eslint-disable import/no-absolute-path */
import React from 'react'
import { RegisterForm } from '@/components/Forms/RegisterForm'
import Image from 'next/image'
import RegisterImage from '/public/register-image.png'

export async function generateMetadata() {
  return {
    title: 'TodoNext - Cadastro',
    description: 'Página de cadastro, crie sua conta e gerencie suas tarefas.',
  }
}

const Register = () => {
  return (
    <div className="mt-5 flex w-full items-center justify-center sm:mt-8">
      <div className="flex w-full max-w-[800px] flex-col justify-between gap-8 rounded-xl bg-zinc-50 p-6 sm:flex-row">
        <div className="hidden w-1/2 sm:flex sm:flex-col sm:gap-2">
          <div className="flex flex-col gap-2">
            <h1 className="w-fit border-b border-red-400 font-title text-3xl">
              TodoNext!
            </h1>
            <p className="w-full max-w-[315px] font-body text-sm italic text-zinc-500">
              Seja parte da comunidade que está transformando a forma como
              lidamos com tarefas.
            </p>
            <span className="block w-fit border-b border-red-400 text-zinc-500">
              Inscreva-se hoje!
            </span>
          </div>
          <div>
            <Image
              src={RegisterImage}
              alt="Imagem da tela de registro de uma menina mexendo em seu telefone"
              className="w-full"
            />
          </div>
        </div>
        <RegisterForm />
      </div>
    </div>
  )
}

export default Register
