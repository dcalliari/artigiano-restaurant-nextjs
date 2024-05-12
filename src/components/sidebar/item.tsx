import { useMemo } from 'react'
import { usePathname, useRouter } from 'next/navigation'

interface ISidebarItem {
  name: string
  path: string
}

const SidebarItem = ({ item }: { item: ISidebarItem }) => {
  const { name, path } = item
  const router = useRouter()
  const pathname = usePathname()

  const onClick = () => {
    return router.push(path)
  }
  const isActive = useMemo(() => {
    return path === pathname
  }, [path, pathname])

  return (
    <>
      <div
        className={`hover:bg-sidebar-background flex cursor-pointer items-center justify-between rounded-lg p-3 transition-colors duration-500 hover:text-white
     ${isActive && 'text-sidebar-active bg-sidebar-background'}`}
        onClick={onClick}
      >
        <div className="flex items-center space-x-2">
          <p className="font-serif text-lg">{name}</p>
        </div>
      </div>
    </>
  )
}

export default SidebarItem
