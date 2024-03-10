import { AuthContext } from '@/hooks/auth'

import { useContext } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'

export function Router() {
  const { userData } = useContext(AuthContext)
  return (
    <BrowserRouter>{userData ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>
  )
}
