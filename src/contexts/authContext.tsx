import { api } from '@/services/api'
import { useRouter } from 'next/navigation'
import { ReactNode, createContext, useContext } from 'react'
import { useMutation } from 'react-query'

interface IUserProps {
  name: string
  email: string
  password: string
}

interface IAuthProviderProps {
  children: ReactNode
}

interface IAuthContextProps {
  userRegister: (user: IUserProps) => void
  loadingRegister: boolean
}

export const AuthContext = createContext({} as IAuthContextProps)

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const router = useRouter()

  const { mutate: userRegister, isLoading: loadingRegister } = useMutation(
    (user: IUserProps) => api.post('/users', user),
    {
      onSuccess: () => {
        router.push('/')
      },
    },
  )

  return (
    <AuthContext.Provider
      value={{
        userRegister,
        loadingRegister,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  return useContext(AuthContext)
}
