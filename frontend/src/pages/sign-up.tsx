import { Link } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="border p-6 rounded-md">
        <strong className="text-2xl text-gray-700 font-semibold">
          Registrar
        </strong>
        <p className="mt-2 text-gray-600">
          Preencha com seus dados para se registrar na plataforma
        </p>
        <form className="mt-8 space-y-6">
          <div className="space-y-2">
            <label className=" text-gray-600 font-semibold">Nome</label>
            <Input type="text" />
          </div>

          <div className="space-y-2">
            <label className=" text-gray-600 font-semibold">E-mail</label>
            <Input type="email" placeholder="m@example.com" />
          </div>

          <div className="space-y-2">
            <label className=" text-gray-600 font-semibold">Senha</label>

            <Input type="password" placeholder="******" />
          </div>

          <Button className="block w-full">Registrar</Button>

          <div className="flex items-center justify-center gap-1">
            <span className="text-sm">Já possui conta?</span>
            <Link className="text-sm underline" to={'/'}>
              Faça login
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
