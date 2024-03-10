import { Link, useNavigate } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { FormEvent, useState } from 'react'
import { api } from '@/lib/axios'
import { toast } from 'sonner'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  async function handleSignUp(event: FormEvent) {
    event.preventDefault()
    setIsLoading(true)

    if (name === '' || email === '' || phone === '' || password === '') {
      setIsLoading(false)
      return toast.error('Preencha todos os campos')
    }

    await new Promise((resolve) => setTimeout(resolve, 2000))
    await api
      .post('/users', { name, email, phone, password })
      .then(() => {
        toast.success('Registrado com sucesso!')
        setIsLoading(false)
        setName('')
        setEmail('')
        setPhone('')
        setPassword('')
        navigate(-1)
      })
      .catch((error) => {
        if (error.response.status === 404) {
          toast.error('E-mail ou senha inválidos!')
          setIsLoading(false)
        } else {
          toast.error('Erro inesperado!')
          setIsLoading(false)
        }
      })
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="border p-6 rounded-md">
        <strong className="text-2xl text-gray-700 font-semibold">
          Registrar
        </strong>
        <p className="mt-2 text-gray-600">
          Preencha com seus dados para se registrar na plataforma
        </p>
        <form onSubmit={handleSignUp} className="mt-8 space-y-6">
          <div className="space-y-2">
            <label className=" text-gray-600 font-semibold">Nome</label>
            <Input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>

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
            <label className=" text-gray-600 font-semibold">Telefone</label>
            <Input
              type="text"
              placeholder="(00) 00000-0000"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </div>

          <div className="space-y-2">
            <label className=" text-gray-600 font-semibold">Senha</label>
            <Input
              type="password"
              placeholder="******"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              autoComplete="tel"
            />
          </div>

          <Button className="block w-full">
            {isLoading ? 'carregando...' : 'Registrar'}
          </Button>

          <div className="flex items-center justify-center gap-1">
            <span className="text-sm">Já possui conta?</span>
            <Link className="text-sm underline" to={'/'}>
              Faça login
            </Link>
          </div>
        </form>
      </div>
    </main>
  )
}
