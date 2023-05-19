import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { headers, cookies } from 'next/headers'

export default async function getCurrentUser() {
  try {
    const supabase = createServerComponentSupabaseClient({
      headers,
      cookies,
    })

    const {
      data: { session },
    } = await supabase.auth.getSession()

    if (!session?.user.email) {
      return null
    }

    const currentUser = await supabase
      .from('Profile')
      .select('*')

    if (!currentUser.data) {
      return null
    }

    console.log(currentUser)

    return currentUser
  } catch (e) {
    return null
  }
}
