'use client'

import { useColorTheme } from '@/app/hooks/useColorTheme'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { BsFillSunFill, BsMoonStarsFill } from 'react-icons/bs'

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme()

  const handleToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return theme === 'dark' ? (
    <BsMoonStarsFill
      className="cursor-pointer hover:text-neutral-500"
      size={16}
      onClick={handleToggle}
    />
  ) : (
    <BsFillSunFill
      className="cursor-pointer hover:text-neutral-500"
      size={16}
      onClick={handleToggle}
    />
  )
}

export default ToggleTheme
