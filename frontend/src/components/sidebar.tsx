import { Home } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Agendar consulta', href: '/agendar-consulta', icon: Home },
]

export function Sidebar() {
  const location = useLocation()

  return (
    <div>
      <div className="h-16 flex items-center justify-center border-b">
        <strong>Logo da clínica</strong>
      </div>

      <div className="flex flex-col h-full">
        <div className="flex-1 p-4">
          {links.map((link, index) => (
            <Link
              className={
                location.pathname === link.href
                  ? 'p-2 text-gray-900 bg-gray-200  flex items-center gap-2 rounded-md'
                  : 'p-2 text-gray-600 flex items-center gap-2'
              }
              key={index}
              to={link.href}
            >
              <link.icon size={16} />
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
