'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { logoutAction } from '@/app/actions/admin'

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: '📊' },
  { href: '/admin/contacts', label: 'Contact Messages', icon: '✉️' },
  { href: '/admin/applications', label: 'Job Applications', icon: '👤' },
]

export default function AdminSidebar() {
  const pathname = usePathname()
  return (
    <aside className="w-64 shrink-0 bg-[#040912] border-r border-slate-800 flex flex-col min-h-screen">
      <div className="px-6 py-5 border-b border-slate-800">
        <Image src="/userbyte-logo.svg" alt="UserByte" width={140} height={36} />
        <p className="text-xs text-slate-600 mt-1">Admin Panel</p>
      </div>

      <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
        {navItems.map((item) => {
          const active = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                active
                  ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <span>{item.icon}</span>
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="px-3 py-4 border-t border-slate-800">
        <form action={logoutAction}>
          <button
            type="submit"
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-colors"
          >
            <span>🚪</span> Logout
          </button>
        </form>
      </div>
    </aside>
  )
}
