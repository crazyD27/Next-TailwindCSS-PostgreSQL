import { Session, getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

interface IUserGetUserProps {
  session: Session | null
}

export const useGetUser = async (): Promise<IUserGetUserProps> => {
  const session = await getServerSession(authOptions)
  return { session }
}
