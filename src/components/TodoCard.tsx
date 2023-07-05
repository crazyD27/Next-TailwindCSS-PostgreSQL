import Link from 'next/link'
import React from 'react'
import { Star } from 'lucide-react'

export const TodoCard = () => {
  return (
    <div className="m-auto w-full max-w-[340px] rounded-md bg-zinc-600 p-3">
      <div className="flex flex-col gap-2">
        <div className="flex w-full items-center justify-between">
          <span className="font-title text-lg text-zinc-50">
            Tosar Doguinho
          </span>
          <Link href="/">
            <Star size={18} color="#FFF" />
          </Link>
        </div>
        <div className="flex w-full flex-col gap-1">
          <span className="font-body text-sm italic text-zinc-50">
            11/10/2023
          </span>
          <span className="font-body text-sm italic text-zinc-50">
            Pendente
          </span>
        </div>
        <Link
          href="/"
          className="flex items-center justify-end self-end rounded-md bg-zinc-700 px-3 py-2 font-body text-sm text-zinc-50"
        >
          Detalhes
        </Link>
      </div>
    </div>
  )
}
