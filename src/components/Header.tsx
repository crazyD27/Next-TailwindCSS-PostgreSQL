import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <header className="flex w-full items-center justify-center bg-gray-950">
      <nav className="flex w-full max-w-[1300px] items-center justify-between p-3">
        <Link
          href="/"
          className="font-title text-2xl uppercase text-zinc-50 hover:text-zinc-200"
        >
          Todo
        </Link>
        <ul className="flex list-none items-center gap-3">
          <li className="font-body text-base text-zinc-50 hover:text-zinc-200">
            <Link href="/login">Entrar</Link>
          </li>
          <li className="font-body text-base text-zinc-50 hover:text-zinc-200">
            <Link href="/register">Cadastrar</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
