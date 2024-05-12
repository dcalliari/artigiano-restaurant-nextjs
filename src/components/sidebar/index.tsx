'use client'

import SidebarItem from './item'
import Image from 'next/image'

interface ISidebarItem {
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

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 z-10 h-screen w-64 flex-col justify-center overflow-auto p-8">
      <div className="flex w-full flex-col items-center space-y-10 text-red-400">
        <a href="/" className="pt-14">
          <Image
            className="w-fit"
            src="/logo.png"
            alt="Logo"
            width={2000}
            height={0}
          />
        </a>
        <div className="border-y border-red-100 py-7 text-center font-serif text-sm italic transition-colors duration-500 hover:text-white">
          <a
            href="https://maps.app.goo.gl/fnNPvmhLtxyhdAs58"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>1454 Av. Visc. de Souza Franco, </span>
            <span>Belém, PA 66053-000</span>
          </a>
        </div>
        <div className="flex flex-col items-center space-y-2 text-center">
          {items.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
