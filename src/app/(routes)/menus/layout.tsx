import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Menus',
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
