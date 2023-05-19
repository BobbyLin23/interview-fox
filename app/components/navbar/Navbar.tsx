'use client'

import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai'
import ToggleTheme from './ToggleTheme'
import useLoginModal from '@/app/hooks/useLoginModal'
import { useRouter } from 'next/navigation'
import { Session } from '@supabase/auth-helpers-nextjs'
import Avatar from '../common/Avatar'
import { Menu } from '@headlessui/react'
import { useSupabase } from '@/app/providers/SupabaseProvider'
import { toast } from 'react-hot-toast'

interface NavbarProps {
  session: Session | null
}

const Navbar: React.FC<NavbarProps> = ({ session }) => {
  const loginModal = useLoginModal()
  const router = useRouter()

  const { supabase } = useSupabase()

  const logOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      toast.error('Failed to log out')
    } else {
      toast.success('Sign Out Successfully')
    }
  }

  return (
    <header className="flex w-full h-[68px] items-center justify-between px-2 py-4 shadow-md dark:shadow-gray-700 md:px-4 lg:px-6 xl:px-10">
      <span
        className="cursor-pointer text-lg font-semibold hover:text-neutral-500"
        onClick={() => router.push('/')}
      >
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
        {session ? (
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button>
              <Avatar />
            </Menu.Button>
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:divide-gray-600 dark:bg-black dark:text-white dark:ring-white">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active
                          ? 'bg-sky-500 text-white'
                          : 'text-gray-900 dark:text-white'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      onClick={() => router.push('/dashboard')}
                    >
                      Dashboard
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active
                          ? 'bg-sky-500 text-white'
                          : 'text-gray-900 dark:text-white'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Settings
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active
                          ? 'bg-sky-500 text-white'
                          : 'text-gray-900 dark:text-white'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Accounts
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active
                          ? 'bg-sky-500 text-white'
                          : 'text-gray-900 dark:text-white'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Contact
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active
                          ? 'bg-sky-500 text-white'
                          : 'text-gray-900 dark:text-white'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      onClick={() => logOut()}
                    >
                      Log Out
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Menu>
        ) : (
          <button
            className="hover:text-neutral-500 hover:underline"
            onClick={loginModal.onOpen}
          >
            Sign In
          </button>
        )}
      </div>
    </header>
  )
}

export default Navbar
