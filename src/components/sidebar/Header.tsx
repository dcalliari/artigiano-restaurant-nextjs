'use client'

import { SidebarItem } from './SidebarItem'

import Image from 'next/image'
import Link from 'next/link'

type HeaderProps = {
  items: {
    name: string
    path: string
  }[]
}

export function Header({ items }: HeaderProps) {
  return (
    <div className="flex w-full flex-row bg-zinc-900 text-red-400">
      <Link href="/">
        <Image
          className="w-fit"
          src="/logo.png"
          alt="Logo"
          width={2000}
          height={0}
        />
      </Link>
      <div className="flex w-full justify-end">
        <button className="text-red-400">a</button>
      </div>
    </div>
  )
}
