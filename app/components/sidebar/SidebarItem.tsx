'use client'

import clsx from 'clsx'

interface SidebarItemProps {
  label: string
  onClick: () => void
  selected: boolean
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  onClick,
  selected = false,
}) => {
  return (
    <div
      onClick={onClick}
      className={clsx("flex h-12 w-full cursor-pointer items-center justify-center hover:bg-sky-300 hover:text-white hover:ring-sky-200",
        selected && 'bg-sky-500 text-white'
      )}
    >
      {label}
    </div>
  )
}

export default SidebarItem
