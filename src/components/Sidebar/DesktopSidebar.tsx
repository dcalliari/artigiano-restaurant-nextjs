'use client'

import { SidebarItem } from './SidebarItem'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/app/firebase'
import { signOut } from 'firebase/auth'

import Image from 'next/image'
import Link from 'next/link'

type DesktopSidebarProps = {
  items: {
    name: string
    path: string
  }[]
}

export function DesktopSidebar({ items }: DesktopSidebarProps) {
  const [user] = useAuthState(auth)

  const handleSignOut = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  return (
    <div className="flex w-full flex-col items-center space-y-10 text-red-400">
      <Link href="/" className="pt-14">
        <Image
          loading="eager"
          className="w-fit"
          src="/logo.png"
          alt="Logo"
          width={2000}
          height={0}
        />
      </Link>
      <div className="border-y border-red-100 py-7 text-center font-serif text-sm italic transition-colors duration-500 hover:text-white">
        <Link
          href="https://maps.app.goo.gl/fnNPvmhLtxyhdAs58"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>1454 Av. Visc. de Souza Franco, </span>
          <span>Belém, PA 66053-000</span>
        </Link>
      </div>
      <div className="flex flex-col items-center space-y-2 text-center">
        {items.map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
        {!user ? (
          <div className="flex-row pt-16">
            <Link
              href="/sign-in"
              className="cursor-pointer font-serif text-lg transition-colors duration-500 hover:text-white"
            >
              ENTRE
            </Link>
            <span className="mx-3 font-serif">ou</span>
            <Link
              href="/sign-up"
              className="cursor-pointer font-serif text-lg transition-colors duration-500 hover:text-white"
            >
              REGISTRE
            </Link>
          </div>
        ) : (
          <div className="pt-16">
            <button
              className="cursor-pointer font-serif text-lg transition-colors duration-500 hover:text-white"
              onClick={handleSignOut}
            >
              SAIR
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
