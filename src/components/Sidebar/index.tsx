'use client'

import { DesktopSidebar } from './DesktopSidebar'

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
    name: 'ORDER NOW!',
    path: '/order',
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
  return (
    <div className="fixed left-0 top-0 z-10 h-screen w-64 flex-col justify-center overflow-auto p-8">
      <DesktopSidebar items={items} />
    </div>
  )
}
