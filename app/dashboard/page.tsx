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
    <div className="h-full w-full overflow-y-auto px-6 py-6">
      <h1 className="my-2 text-2xl font-bold">Dashboard</h1>
      {session.user.email}
    </div>
  )
}
