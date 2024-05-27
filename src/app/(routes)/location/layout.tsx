import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hours & Location',
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
