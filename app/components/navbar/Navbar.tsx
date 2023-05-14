'use client'

import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai'
import ToggleTheme from './ToggleTheme'
import useLoginModal from '@/app/hooks/useLoginModal'

const Navbar = () => {
  const loginModal = useLoginModal()

  return (
    <header className="w-full flex items-center justify-between px-2 md:px-4 lg:px-6 xl:px-10 py-4 shadow-sm dark:shadow-gray-700">
      <span className="cursor-pointer text-lg font-semibold hover:text-neutral-500">
        Interview Fox
      </span>
      <div className="flex items-center gap-3 md:gap-5">
        <AiFillGithub
          className="cursor-pointer hover:text-neutral-500"
          size={20}
        />
        <AiOutlineTwitter
          className="cursor-pointer hover:text-neutral-500"
          size={20}
        />
        <ToggleTheme />
        <button
          className="hover:text-neutral-500 hover:underline"
          onClick={loginModal.onOpen}
        >
          Sign In
        </button>
      </div>
    </header>
  )
}

export default Navbar
