import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { api } from '@/lib/axios'
import { formmatedDate } from '@/lib/formmatedDate'
import { ConsultProps } from '@/types/types'
import { useEffect, useState } from 'react'

export function DashboardLayout() {
  const [consults, setConsults] = useState<ConsultProps[]>([])

  async function getConsults() {
    const response = await api.get('/consults')
    setConsults(response.data)
  }

  useEffect(() => {
    getConsults()
  }, [])

  return (
    <div className="p-4">
      <div>
        <div>
          <h1 className="lg:text-2xl font-semibold">
            Lista de consultas agendadas
          </h1>

          <div className=" border rounded-sm mt-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Paciente</TableHead>
                  <TableHead>Médico</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Hora</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {consults.map((consult) => (
                  <TableRow key={consult.id}>
                    <TableCell>{consult.user_id?.name}</TableCell>
                    <TableCell>{consult.doctor_id?.name}</TableCell>
                    <TableCell>{formmatedDate(consult.date_consult)}</TableCell>
                    <TableCell>{consult.hours}</TableCell>
                    <TableCell>{consult.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}
