import React from 'react'
import { RegisterForm } from '@/components/Forms/RegisterForm'
import RegisterImage from '/public/register-image.png'
import { DescriptionForm } from '@/components/Forms/DescriptionForm'

const Register = () => {
  return (
    <div className="mt-5 flex w-full items-center justify-center sm:mt-8">
      <div className="flex w-full max-w-[800px] flex-col justify-between gap-8 rounded-xl bg-zinc-50 p-6 sm:flex-row">
        <DescriptionForm
          title="TodoNext!"
          subtitle="Inscreva-se hoje!"
          description="Seja parte da comunidade que está transformando a forma como
          lidamos com tarefas."
          image={RegisterImage}
        />
        <RegisterForm />
      </div>
    </div>
  )
}

export default Register
