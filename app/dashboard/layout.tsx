import Sidebar from "../components/sidebar/Sidebar"

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full h-full flex">
      <Sidebar />
      {children}
    </div>
  )
}
