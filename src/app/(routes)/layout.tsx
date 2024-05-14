import { Sidebar } from '@/components/sidebar'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Sidebar />
      <main className="flex overflow-y-auto">
        <div className="mt-32 flex size-full flex-col lg:ml-64 lg:mt-0">
          {children}
        </div>
      </main>
    </>
  )
}
