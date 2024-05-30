import { Sidebar } from '@/components/Sidebar'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Sidebar />
      <main className="flex overflow-y-auto">
        <div className="ml-64 flex size-full flex-col">{children}</div>
      </main>
    </>
  )
}
