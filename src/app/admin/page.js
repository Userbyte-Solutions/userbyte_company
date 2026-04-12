import { getContacts, getApplications } from '@/lib/store'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default async function AdminDashboard() {
  let contacts = []
  let applications = []

  try {
    ;[contacts, applications] = await Promise.all([getContacts(), getApplications()])
  } catch (err) {
    console.error('Firestore fetch error:', err)
  }

  const unreadContacts = contacts.filter((c) => !c.read).length
  const pendingApplications = applications.filter((a) => a.status === 'pending').length
  const recentContacts = contacts.slice(0, 5)
  const recentApplications = applications.slice(0, 5)

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="text-slate-500 text-sm mt-1">Welcome back, Admin</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Total Messages', value: contacts.length, icon: '✉️', color: 'cyan', href: '/admin/contacts' },
          { label: 'Unread Messages', value: unreadContacts, icon: '🔔', color: 'indigo', href: '/admin/contacts' },
          { label: 'Total Applications', value: applications.length, icon: '👤', color: 'violet', href: '/admin/applications' },
          { label: 'Pending Applications', value: pendingApplications, icon: '⏳', color: 'cyan', href: '/admin/applications' },
        ].map((s) => {
          const colors = {
            cyan: 'border-cyan-500/20 text-cyan-400',
            indigo: 'border-indigo-500/20 text-indigo-400',
            violet: 'border-violet-500/20 text-violet-400',
          }[s.color]
          return (
            <Link key={s.label} href={s.href}
              className={`bg-[#0d1630] border ${colors} rounded-2xl p-5 hover:opacity-80 transition-opacity`}>
              <span className="text-2xl">{s.icon}</span>
              <p className={`text-3xl font-extrabold mt-2 ${colors.split(' ')[1]}`}>{s.value}</p>
              <p className="text-slate-500 text-sm mt-1">{s.label}</p>
            </Link>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Contacts */}
        <div className="bg-[#0d1630] border border-slate-700/50 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white font-semibold">Recent Messages</h2>
            <Link href="/admin/contacts" className="text-cyan-400 text-xs hover:underline">View all</Link>
          </div>
          {recentContacts.length === 0 ? (
            <p className="text-slate-500 text-sm">No messages yet.</p>
          ) : (
            <div className="flex flex-col gap-3">
              {recentContacts.map((c) => (
                <div key={c.id} className="flex items-start gap-3 py-2 border-b border-slate-700/40 last:border-0">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center text-xs font-bold shrink-0">
                    {c.name?.[0]?.toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-white text-sm font-medium truncate">{c.name}</p>
                      {!c.read && <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />}
                    </div>
                    <p className="text-slate-500 text-xs truncate">{c.message}</p>
                  </div>
                  <p className="text-slate-600 text-xs shrink-0">{new Date(c.createdAt).toLocaleDateString()}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recent Applications */}
        <div className="bg-[#0d1630] border border-slate-700/50 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white font-semibold">Recent Applications</h2>
            <Link href="/admin/applications" className="text-cyan-400 text-xs hover:underline">View all</Link>
          </div>
          {recentApplications.length === 0 ? (
            <p className="text-slate-500 text-sm">No applications yet.</p>
          ) : (
            <div className="flex flex-col gap-3">
              {recentApplications.map((a) => (
                <div key={a.id} className="flex items-center gap-3 py-2 border-b border-slate-700/40 last:border-0">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-xs font-bold shrink-0">
                    {a.name?.[0]?.toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-medium truncate">{a.name}</p>
                    <p className="text-slate-500 text-xs truncate">{a.position}</p>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    a.status === 'pending' ? 'bg-yellow-500/10 text-yellow-400' :
                    a.status === 'accepted' ? 'bg-green-500/10 text-green-400' :
                    'bg-red-500/10 text-red-400'
                  }`}>{a.status}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
