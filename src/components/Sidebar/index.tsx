'use client'

import { DesktopSidebar } from './DesktopSidebar'

type ISidebarItem = {
  name: string
  path: string
}

const items: ISidebarItem[] = [
  {
    name: 'RESERVAS',
    path: '/reserve',
  },
  {
    name: 'PEÇA AGORA!',
    path: '/order',
  },
  {
    name: 'CARDÁPIOS',
    path: '/menus',
  },
  {
    name: 'NOSSA HISTÓRIA',
    path: '/about',
  },
  {
    name: 'HORARIOS & LOCALIZAÇÃO',
    path: '/location',
  },
  {
    name: 'COMUNIDADE',
    path: '/community',
  },
  {
    name: 'CONTATO',
    path: '/contact',
  },
  {
    name: 'TRABALHE CONOSCO',
    path: '/jobs',
  },
]

export function Sidebar() {
  return (
    <div className="fixed left-0 top-0 z-10 h-screen w-64 flex-col justify-center overflow-auto p-8">
      <DesktopSidebar items={items} />
    </div>
  )
}
