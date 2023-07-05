'use client'
import { signOut } from 'next-auth/react'
import { LogOut } from 'lucide-react'

const LogoutButton = () => {
  const handleLogout = () => {
    signOut({ redirect: true, callbackUrl: '/login' })
  }
  return (
    <button onClick={handleLogout}>
      <LogOut className="text-zinc-50 hover:text-zinc-300" />
    </button>
  )
}

export default LogoutButton
