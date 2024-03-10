import { SignIn } from '@/pages/sign-in'
import { SignUp } from '@/pages/sign-up'
import { Route, Routes } from 'react-router-dom'

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/registrar" element={<SignUp />} />
    </Routes>
  )
}
