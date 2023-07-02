'use client'
import React from 'react'
import { Github } from 'lucide-react'
import { BiLogoGmail } from 'react-icons/bi'
import { signIn } from 'next-auth/react'

export const LoginForm = () => {
  return (
    <div className="flex w-full flex-col gap-4 sm:w-1/2">
      <div className="flex flex-col gap-1">
        <h1 className="font-title text-2xl">Vamos começar!</h1>
        <p className="font-body text-sm italic text-zinc-500">
          Escolha uma das opções para logar.
        </p>
      </div>
      <div className="mt-7 flex w-full flex-col items-center justify-center gap-2">
        <button
          onClick={() => signIn('google')}
          className="flex w-full max-w-[400px] items-center justify-center gap-1 rounded-md bg-red-400 py-3 font-medium text-white transition-colors hover:bg-red-300"
        >
          <BiLogoGmail size={24} />
          Google
        </button>
        <span className="text-center font-title">ou</span>
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
