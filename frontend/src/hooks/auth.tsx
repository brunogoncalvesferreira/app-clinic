import { api } from '@/services/axios'
import { createContext, useEffect, useState } from 'react'
import { toast } from 'sonner'

interface SignInProps {
  email: string
  password: string
}

interface UserProps {
  user: {
    id: string
    name: string
    email: string
    password: string
    phone: string
    role: string
    created_at: Date
    updated_at: Date
  }
  token: string
}

interface AuthContextProps {
  signIn: ({ email, password }: SignInProps) => Promise<void>
  userData: UserProps | null
}

export const AuthContext = createContext({} as AuthContextProps)

interface AuthProviderProps {
  children: React.ReactNode
}
export function AuthProvider({ children }: AuthProviderProps) {
  const [userData, setUserData] = useState<UserProps | null>(null)

  async function signIn({ email, password }: SignInProps) {
    try {
      const response = await api.post('/sessions', { email, password })
      const { user, token } = response.data

      localStorage.setItem('@User', JSON.stringify(user))
      localStorage.setItem('@Token', token)

      api.defaults.headers.common.Authorization = `Bearer ${token}`
      setUserData({ user, token })
    } catch (error) {
      if (error) {
        toast.error('E-mail ou senha inválidos!')
      } else {
        toast.error('Erro inesperado!')
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem('@User')
    const token = localStorage.getItem('@Token')

    if (user && token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`
      setUserData({ user: JSON.parse(user), token })
    }
  }, [])
  return (
    <AuthContext.Provider value={{ signIn, userData }}>
      {children}
    </AuthContext.Provider>
  )
}
