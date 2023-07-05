import Link from 'next/link'
import React from 'react'
import { Star, ArrowUpRight } from 'lucide-react'

export const TodoCard = () => {
  return (
    <div className="m-auto w-full max-w-[340px] rounded-md bg-blue-300 p-3 shadow shadow-pink-300 odd:bg-pink-300 odd:shadow-blue-300">
      <div className="flex flex-col gap-2">
        <div className="flex w-full items-center justify-between">
          <span className="w-fit rounded-full bg-zinc-100 px-3 py-1 font-body text-sm font-medium italic text-zinc-900">
            11/10/2023
          </span>
          <Link href="/">
            <Star
              size={18}
              className="text-zinc-900 transition-colors hover:text-zinc-600"
            />
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-title text-xl text-zinc-900">
            Tosar Doguinho
          </span>
          <span className="w-fit rounded-full border border-zinc-600 px-2 py-1 font-body text-xs font-medium italic text-zinc-900">
            Pendente
          </span>
        </div>
        <button className="group flex items-center justify-center gap-1 self-end rounded-md border border-zinc-600 px-2 py-1 transition-colors hover:bg-zinc-950">
          <ArrowUpRight
            size={20}
            className="text-zinc-800 group-hover:text-zinc-50"
          />
          <span className="text-base text-zinc-800 group-hover:text-zinc-50">
            Detalhes
          </span>
        </button>
      </div>
    </div>
  )
}
