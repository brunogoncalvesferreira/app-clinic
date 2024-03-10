import { Dashboard } from '@/pages/dashboard/dashboard'
import { DashboardLayout } from '@/pages/dashboard/layout'
import { ScheduleAppointment } from '@/pages/schedule-appointment'
import { Route, Routes } from 'react-router-dom'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="/" element={<DashboardLayout />} />
        <Route path="/agendar-consulta" element={<ScheduleAppointment />} />
      </Route>
    </Routes>
  )
}
