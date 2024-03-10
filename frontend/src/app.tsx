import { Router } from './routes/router'
import { AuthProvider } from './hooks/auth'

export function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  )
}
