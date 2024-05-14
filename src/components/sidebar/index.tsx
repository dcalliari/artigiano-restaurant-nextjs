'use client'

import { Header } from './Header'
import { DesktopSidebar } from './DesktopSidebar'
import { useMediaQuery } from 'react-responsive'

type ISidebarItem = {
  name: string
  path: string
}

const items: ISidebarItem[] = [
  {
    name: 'RESERVE',
    path: '/reserve',
  },
  {
    name: 'MENUS',
    path: '/menus',
  },
  {
    name: 'OUR STORY',
    path: '/about',
  },
  {
    name: 'HOURS & LOCATION',
    path: '/location',
  },
  {
    name: 'COMMUNITY',
    path: '/community',
  },
  {
    name: 'CONTACT',
    path: '/contact',
  },
  {
    name: 'JOIN OUR TEAM',
    path: '/jobs',
  },
]

export function Sidebar() {
  const isDesktop = useMediaQuery({ minWidth: 1024 })

  return (
    <div className="fixed left-0 top-0 z-10 h-screen flex-col justify-center overflow-auto p-8 lg:w-64">
      {isDesktop ? <DesktopSidebar items={items} /> : <Header items={items} />}
    </div>
  )
}
