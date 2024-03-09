import { Link } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { FormEvent, useContext, useState } from 'react'
import { AuthContext } from '@/hooks/auth'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const { signIn } = useContext(AuthContext)

  async function handleSignIn(event: FormEvent) {
    event.preventDefault()
    setIsLoading(true)

    await new Promise((resolve) => setTimeout(resolve, 2000))

    await signIn({ email, password })
      .then(() => {
        setIsLoading(false)
      })
      .catch((error) => {
        if (error.response.status === 404) {
          setIsLoading(false)
        } else {
          setIsLoading(false)
        }
      })
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="border p-6 rounded-md">
        <strong className="text-2xl text-gray-700 font-semibold">Login</strong>
        <p className="mt-2 text-gray-600">
          Digite seu e-mail abaixo para fazer login em sua conta
        </p>
        <form onSubmit={handleSignIn} className="mt-8 space-y-6">
          <div className="space-y-2">
            <label className=" text-gray-600 font-semibold">E-mail</label>
            <Input
              type="email"
              placeholder="m@example.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className=" text-gray-600 font-semibold">Senha</label>
              <Link className="text-gray-700 underline" to={'/registrar'}>
                Esqueceu a senha?
              </Link>
            </div>
            <Input
              type="password"
              placeholder="******"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <Button className="block w-full">
            {isLoading ? 'Entrando...' : 'Entrar'}
          </Button>

          <div className="flex items-center justify-center gap-1">
            <span className="text-sm">Não tem conta?</span>
            <Link className="text-sm underline" to={'/registrar'}>
              Inscreva-se
            </Link>
          </div>
        </form>
      </div>
    </main>
  )
}
