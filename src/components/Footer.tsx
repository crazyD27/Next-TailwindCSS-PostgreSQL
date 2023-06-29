import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <footer className="flex w-full items-center justify-center bg-zinc-600">
      <div className="flex w-full max-w-[1300px] items-center justify-between p-3 ">
        <ul className="flex list-none flex-col gap-2">
          <li className="font-body text-sm text-zinc-50 hover:text-zinc-200">
            <Link href="/">Página inicial</Link>
          </li>
          <li className="font-body text-sm text-zinc-50 hover:text-zinc-200">
            <Link href="/">Sobre</Link>
          </li>
        </ul>
        <ul className="flex list-none items-center">
          <li>
            <a
              href="https://github.com/iarlen-reis"
              rel="noreferrer"
              target="_blank"
              className="font-body italic text-zinc-50 hover:text-zinc-200"
            >
              Feito por Iarlen Reis
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
