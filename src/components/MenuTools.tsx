import React from 'react'
import { Filter, Plus } from 'lucide-react'
import Link from 'next/link'
export const MenuTools = () => {
  return (
    <div className="flex items-center justify-end gap-4">
      <button className="group flex h-11 w-11 items-center justify-center rounded-full py-1 transition-colors hover:bg-zinc-500">
        <Filter size={20} className="text-zinc-800 group-hover:text-zinc-300" />
      </button>
      <Link
        href="/create"
        className="group flex h-11 w-11 items-center justify-center rounded-full py-1 transition-colors hover:bg-zinc-500"
      >
        <Plus size={20} className="text-zinc-800  group-hover:text-zinc-300" />
      </Link>
    </div>
  )
}
