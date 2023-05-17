import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { ColorProvider } from './providers/ColorProvider'
import LoginModal from './components/modals/LoginModal'
import SupabaseProvider from './providers/SupabaseProvider'
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { headers, cookies } from 'next/headers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Interview Fox',
  description: 'AI Interview Helper',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createServerComponentSupabaseClient({
    headers,
    cookies
  })

  const {
    data: { session }
  } = await supabase.auth.getSession()

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <SupabaseProvider session={session}>
          <ColorProvider>
            <LoginModal />
            <Navbar />
            {children}
          </ColorProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
