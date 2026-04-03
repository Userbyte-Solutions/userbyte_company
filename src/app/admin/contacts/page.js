import { getContacts } from '@/lib/store'
import { replyContactAction, markReadAction } from '@/app/actions/admin'

export const dynamic = 'force-dynamic'

export default async function ContactsPage() {
  const contacts = await getContacts()

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Contact Messages</h1>
        <p className="text-slate-500 text-sm mt-1">{contacts.length} total · {contacts.filter(c => !c.read).length} unread</p>
      </div>

      {contacts.length === 0 ? (
        <div className="bg-[#0d1630] border border-slate-700/50 rounded-2xl p-12 text-center">
          <span className="text-4xl">✉️</span>
          <p className="text-slate-400 mt-4">No messages yet. Messages from the contact form will appear here.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {contacts.map((c) => (
            <div key={c.id} className={`bg-[#0d1630] border rounded-2xl p-6 ${!c.read ? 'border-cyan-500/30' : 'border-slate-700/50'}`}>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center text-white font-bold shrink-0">
                    {c.name?.[0]?.toUpperCase()}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-white font-semibold">{c.name}</p>
                      {!c.read && <span className="px-2 py-0.5 bg-cyan-500/10 text-cyan-400 text-xs rounded-full border border-cyan-500/20">New</span>}
                    </div>
                    <p className="text-slate-500 text-xs">{c.email}{c.company && ` · ${c.company}`}</p>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-slate-500 text-xs">{new Date(c.createdAt).toLocaleString()}</p>
                  {c.service && <span className="text-xs px-2 py-0.5 bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/20 mt-1 inline-block">{c.service}</span>}
                </div>
              </div>

              <div className="bg-[#060d1f] rounded-xl p-4 mb-4">
                <p className="text-slate-300 text-sm leading-relaxed">{c.message}</p>
              </div>

              {c.reply && (
                <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-xl p-4 mb-4">
                  <p className="text-cyan-400 text-xs font-semibold mb-1">Your Reply</p>
                  <p className="text-slate-300 text-sm leading-relaxed">{c.reply}</p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3">
                <form action={replyContactAction} className="flex-1 flex gap-2">
                  <input type="hidden" name="id" value={c.id} />
                  <input name="reply" type="text" placeholder="Type your reply..." required
                    className="flex-1 bg-[#060d1f] border border-slate-700 text-slate-200 placeholder-slate-600 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-cyan-500 transition-colors" />
                  <button type="submit"
                    className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white text-sm font-medium rounded-xl hover:opacity-90 transition-opacity shrink-0">
                    Reply
                  </button>
                </form>
                {!c.read && (
                  <form action={markReadAction}>
                    <input type="hidden" name="id" value={c.id} />
                    <button type="submit"
                      className="px-4 py-2 border border-slate-700 text-slate-400 text-sm rounded-xl hover:border-slate-500 transition-colors">
                      Mark Read
                    </button>
                  </form>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
