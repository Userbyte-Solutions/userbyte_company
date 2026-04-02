import AdminSidebar from '@/components/AdminSidebar'

export const metadata = { title: 'Admin | UserByte Solution' }

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#060d1f] text-white">
      <AdminSidebar />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  )
}
