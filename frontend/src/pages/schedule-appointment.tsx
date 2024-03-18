import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { AuthContext } from '@/hooks/auth'
import { api } from '@/lib/axios'
import { DoctorProps } from '@/types/types'
import { FormEvent, useContext, useEffect, useState } from 'react'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'

export function ScheduleAppointment() {
  const [doctor, setDoctor] = useState<DoctorProps[]>([])
  const [date, setDate] = useState('')
  const [hours, setHours] = useState('')
  const [comments, setComments] = useState('')
  const [doctorId, setDoctorId] = useState('')

  const { userData } = useContext(AuthContext)

  const navigate = useNavigate()

  async function handleCreateAppointment(event: FormEvent) {
    event.preventDefault()

    await new Promise((resolve) => setTimeout(resolve, 2000))

    await api
      .post('/consults', {
        date_consult: new Date(date),
        hours,
        comments,
        doctorId,
        userId: userData?.user.id,
      })
      .then(() => {
        toast.success('Consulta marcada com sucesso!')
        setDate('')
        setComments('')
        setDoctorId('')
        navigate(-1)
      })
      .catch((error) => {
        if (error.response.status === 404) {
          toast.error('Erro ao marcar consulta!')
        } else {
          toast.error('Erro inesperado!')
        }
      })
  }

  useEffect(() => {
    async function getDoctors() {
      const response = await api.get('/doctor')
      setDoctor(response.data)
    }
    getDoctors()
  }, [])

  return (
    <div className="p-4">
      <div>
        <h1 className="lg:text-2xl font-semibold">Agendamento de consulta</h1>

        <div>
          <p>Preencha os dados abaixo para marcar sua consulta</p>

          <div className="mt-4">
            <strong className="font-semibold">
              Paciente: {userData?.user.name}
            </strong>
          </div>

          <form
            onSubmit={handleCreateAppointment}
            className="max-w-md space-y-4"
          >
            <div>
              <label htmlFor="date">Data</label>
              <Input
                className="w-full"
                type="date"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="hours">Hora</label>
              <Input type="text" onChange={(e) => setHours(e.target.value)} />
            </div>

            <div className="flex flex-col">
              <label htmlFor="time">Comentário</label>
              <Textarea
                placeholder="Descreva o que deseja"
                onChange={(e) => setComments(e.target.value)}
                value={comments}
              ></Textarea>
            </div>

            <div>
              <Select onValueChange={(value) => setDoctorId(value)}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Escolha o seu médico" />
                </SelectTrigger>
                <SelectContent>
                  {doctor.map((doctor) => (
                    <SelectItem key={doctor.id} value={doctor.id}>
                      {doctor.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button>Agendar consulta</Button>
          </form>
        </div>
      </div>
    </div>
  )
}
