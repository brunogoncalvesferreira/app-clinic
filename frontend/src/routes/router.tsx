import { SignIn } from '@/pages/sign-in'
import { SignUp } from '@/pages/sign-up'
import { Routes, Route } from 'react-router-dom'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/registrar" element={<SignUp />} />
    </Routes>
  )
}
