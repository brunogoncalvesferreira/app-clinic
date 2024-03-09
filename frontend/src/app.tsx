import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/router'
import { AuthProvider } from './hooks/auth'

export function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </BrowserRouter>
  )
}
