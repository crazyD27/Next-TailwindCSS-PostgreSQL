import { api } from '@/services/api'
import { ReactNode, createContext, useContext } from 'react'

interface IUserProps {
  name: string
  email: string
  password: string
}

interface IAuthProviderProps {
  children: ReactNode
}

interface IAuthContextProps {
  userLogin: (user: Omit<IUserProps, 'name'>) => Promise<void>
  userRegister: (user: IUserProps) => Promise<void>
}

export const AuthContext = createContext({} as IAuthContextProps)

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const userRegister = async (user: IUserProps) => {
    try {
      await api.post('/users/register', user)
    } catch (error) {
      console.log(error)
    }
  }
  const userLogin = async (user: Omit<IUserProps, 'name'>) => {
    try {
      await api.post('/users/login', user)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AuthContext.Provider value={{ userRegister, userLogin }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  return useContext(AuthContext)
}
