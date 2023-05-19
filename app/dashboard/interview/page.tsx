import getCurrentUser from '@/app/actions/getCurrentUser'
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { cookies, headers } from 'next/headers'
import { FaUserCircle } from 'react-icons/fa'

export default async function Interview() {
  const supabase = createServerComponentSupabaseClient({
    headers,
    cookies,
  })

  const currentUser = await getCurrentUser()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return null
  }

  return (
    <div className="h-full w-full overflow-y-auto px-6 py-6">
      <h1 className="my-2 text-2xl font-bold">Interview</h1>
    </div>
  )
}
