'use client'

import { useEffect, useState } from "react"
import { BsFillSunFill, BsMoonStarsFill } from 'react-icons/bs'

const ToggleTheme = () => {
  const [currentTheme, setCurrentTheme] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  )

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setCurrentTheme('dark')
      document.documentElement.classList.add('dark')
    } else {
      setCurrentTheme('light')
      document.documentElement.classList.remove('dark')
    }
  }, [setCurrentTheme])

  const handleToggle = () => {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')
    if (currentTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    currentTheme === 'dark' ? (
      <BsFillSunFill className="cursor-pointer hover:text-neutral-500" size={16} onClick={handleToggle} />
    ) : (
      <BsMoonStarsFill className="cursor-pointer hover:text-neutral-500" size={16} onClick={handleToggle} />
    )
  )
}

export default ToggleTheme
