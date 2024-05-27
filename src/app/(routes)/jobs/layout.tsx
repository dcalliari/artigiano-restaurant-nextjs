import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Join Our Team',
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
