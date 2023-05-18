import { useSupabase } from '../providers/SupabaseProvider'

export default async function getCurrentUser() {
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { supabase } = useSupabase()

    const {
      data: { session },
    } = await supabase.auth.getSession()

    if (!session?.user.email) {
      return null
    }

    const currentUser = await supabase
      .from('Profile')
      .select('*')
      .eq('id', session.user.id)

    if (!currentUser.data) {
      return null
    }

    return currentUser
  } catch (e) {
    return null
  }
}
