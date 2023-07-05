/* eslint-disable import/no-absolute-path */
import React from 'react'

import { LoginForm } from '@/components/Forms/LoginForm'
import LoginImage from '/public/login-image.png'
import { DescriptionForm } from '@/components/Forms/DescriptionForm'

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
        <DescriptionForm
          title="Bem-vindo de volta"
          subtitle="Economize tempo!"
          description="Faça login e volte a gerenciar suas tarefas de forma fácil e
          prática."
          image={LoginImage}
        />
        <LoginForm />
      </div>
    </div>
  )
}

export default Login
