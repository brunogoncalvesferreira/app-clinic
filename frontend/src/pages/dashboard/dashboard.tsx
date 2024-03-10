import { Sidebar } from '@/components/sidebar'
import { Outlet } from 'react-router-dom'

export function Dashboard() {
  return (
    <div className="h-screen p-4">
      <div className="bg-gray-100 rounded-md flex lg:flex-row md:flex-row flex-col  w-full h-full">
        <aside className="lg:w-72 w-full lg:border-r border-b">
          <Sidebar />
        </aside>

        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
