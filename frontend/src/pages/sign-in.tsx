import { Link } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="border p-6 rounded-md">
        <strong className="text-2xl text-gray-700 font-semibold">Login</strong>
        <p className="mt-2 text-gray-600">
          Digite seu e-mail abaixo para fazer login em sua conta
        </p>
        <form className="mt-8 space-y-6">
          <div className="space-y-2">
            <label className=" text-gray-600 font-semibold">E-mail</label>
            <Input placeholder="m@example.com" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className=" text-gray-600 font-semibold">Senha</label>
              <Link className="text-gray-700 underline" to={'/registrar'}>
                Esqueceu a senha?
              </Link>
            </div>
            <Input type="password" />
          </div>

          <Button className="block w-full">Entrar</Button>

          <div className="flex items-center justify-center gap-1">
            <span className="text-sm">Não tem conta?</span>
            <Link className="text-sm underline" to={'/registrar'}>
              Inscreva-se
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
