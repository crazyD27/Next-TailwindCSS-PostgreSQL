import { cookies } from 'next/headers'
import decode from 'jwt-decode'

interface IUserProps {
  name: string
  email: string
}

export const getUser = (): IUserProps => {
  const token = cookies().get('token')?.value

  if (!token) {
    return { email: '', name: '' }
  }

  const user: IUserProps = decode(token)

  return user
}
