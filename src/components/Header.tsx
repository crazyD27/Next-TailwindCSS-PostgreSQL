import Link from 'next/link'
import Image from 'next/image'
import UserDefault from '/public/user-default.png'
import { useGetUser } from '@/hooks/useGetUser'
import LogoutButton from './LogoutButton'

export const Header = async () => {
  const { session } = await useGetUser()

  return (
    <header className="flex h-20 w-full items-center justify-center border-b border-red-200 bg-zinc-900">
      <nav className="flex w-full max-w-[1300px] items-center justify-between p-3">
        <Link
          href="/"
          className="font-title text-2xl text-zinc-50 hover:text-zinc-200"
        >
          NextTodo
        </Link>
        <ul className="flex list-none items-center gap-5">
          {!session ? (
            <li>
              <Link href="/login" className="text-zinc-50">
                Login
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link href="/profile">
                  {session.user?.image ? (
                    <Image
                      src={session.user.image}
                      alt={`Foto de perfil do usuário ${session.user?.name}`}
                      width={35}
                      height={35}
                      className="rounded-full transition-transform hover:scale-[1.1]"
                    />
                  ) : (
                    <Image
                      src={UserDefault}
                      alt={`Foto de perfil do usuário ${session.user?.name}`}
                      width={35}
                      height={35}
                      className="rounded-full"
                    />
                  )}
                </Link>
              </li>
              <li>
                <LogoutButton />
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  )
}
