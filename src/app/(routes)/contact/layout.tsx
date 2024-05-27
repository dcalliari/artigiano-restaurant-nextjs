import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
