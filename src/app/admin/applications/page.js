import { getApplications } from '@/lib/store'
import { updateAppStatusAction } from '@/app/actions/admin'

export const dynamic = 'force-dynamic'

const statusConfig = {
  pending:  { label: 'Pending',  cls: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' },
  accepted: { label: 'Accepted', cls: 'bg-green-500/10 text-green-400 border-green-500/20' },
  rejected: { label: 'Rejected', cls: 'bg-red-500/10 text-red-400 border-red-500/20' },
}

export default async function ApplicationsPage() {
  const applications = await getApplications()

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Job Applications</h1>
        <p className="text-slate-500 text-sm mt-1">
          {applications.length} total · {applications.filter(a => a.status === 'pending').length} pending
        </p>
      </div>

      {applications.length === 0 ? (
        <div className="bg-[#0d1630] border border-slate-700/50 rounded-2xl p-12 text-center">
          <span className="text-4xl">👤</span>
          <p className="text-slate-400 mt-4">No applications yet. Applications from the Careers page will appear here.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {applications.map((a) => {
            const sc = statusConfig[a.status] || statusConfig.pending
            return (
              <div key={a.id} className="bg-[#0d1630] border border-slate-700/50 rounded-2xl p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-white font-bold shrink-0">
                      {a.name?.[0]?.toUpperCase()}
                    </div>
                    <div>
                      <p className="text-white font-semibold">{a.name}</p>
                      <p className="text-slate-500 text-xs">{a.email}{a.phone && ` · ${a.phone}`}</p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${sc.cls}`}>{sc.label}</span>
                    <p className="text-slate-600 text-xs mt-1">{new Date(a.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  <div className="bg-[#060d1f] rounded-xl px-4 py-3">
                    <p className="text-slate-500 text-xs mb-0.5">Applied For</p>
                    <p className="text-white text-sm font-medium">{a.position}</p>
                  </div>
                  {a.experience && (
                    <div className="bg-[#060d1f] rounded-xl px-4 py-3">
                      <p className="text-slate-500 text-xs mb-0.5">Experience</p>
                      <p className="text-white text-sm">{a.experience}</p>
                    </div>
                  )}
                </div>

                {a.message && (
                  <div className="bg-[#060d1f] rounded-xl p-4 mb-4">
                    <p className="text-slate-500 text-xs mb-1">Cover Note</p>
                    <p className="text-slate-300 text-sm leading-relaxed">{a.message}</p>
                  </div>
                )}

                <div className="flex gap-2 flex-wrap">
                  {['accepted', 'rejected', 'pending'].map((status) => (
                    <form key={status} action={updateAppStatusAction}>
                      <input type="hidden" name="id" value={a.id} />
                      <input type="hidden" name="status" value={status} />
                      <button type="submit" disabled={a.status === status}
                        className={`px-4 py-2 text-sm font-medium rounded-xl border transition-colors disabled:opacity-40 disabled:cursor-not-allowed ${
                          status === 'accepted' ? 'border-green-500/30 text-green-400 hover:bg-green-500/10' :
                          status === 'rejected' ? 'border-red-500/30 text-red-400 hover:bg-red-500/10' :
                          'border-slate-600 text-slate-400 hover:bg-slate-700/30'
                        }`}>
                        {status === 'accepted' ? '✓ Accept' : status === 'rejected' ? '✗ Reject' : '↺ Pending'}
                      </button>
                    </form>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
