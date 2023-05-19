'use client'

import { useRouter, usePathname } from 'next/navigation'
import SidebarItem from './SidebarItem'
import { useEffect, useState } from 'react'

type SidebarMenu = {
  label: string
  url: string
  onClick: () => void
  selected: boolean
}

const Sidebar = () => {
  const router = useRouter()
  const pathname = usePathname()

  const [menus, setMenus] = useState<Array<SidebarMenu>>([
    {
      label: 'Dashboard',
      url: '/dashboard',
      onClick: () => {
        router.push('/dashboard')
      },
      selected: false,
    },
    {
      label: 'Interview',
      url: '/dashboard/interview',
      onClick: () => {
        router.push('/dashboard/interview')
      },
      selected: false,
    },
    {
      label: 'Settings',
      url: '/dashboard/settings',
      onClick: () => {
        router.push('/dashboard/settings')
      },
      selected: false,
    },
  ])

  useEffect(() => {
    setMenus(
      menus.map((i) => {
        if (i.url === pathname) {
          i.selected = true
        } else {
          i.selected = false
        }
        return i
      })
    )
  }, [pathname, setMenus])

  return (
    <div className="flex h-full w-[200px] md:w-[300px] flex-col items-center py-4 shadow-md">
      {menus.map((menu, index) => {
        return (
          <SidebarItem
            key={index}
            label={menu.label}
            onClick={menu.onClick}
            selected={menu.selected}
          />
        )
      })}
    </div>
  )
}

export default Sidebar
