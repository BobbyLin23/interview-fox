import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs"
import { cookies, headers } from "next/headers"

export default async function Dashboard() {
  const supabase = createServerComponentSupabaseClient({
    headers,
    cookies
  })
  
  const { data: { session } } = await supabase.auth.getSession()

  if (!session) {
    return null
  }

  return (
    <div>{session.user.email}</div>
  )
}
