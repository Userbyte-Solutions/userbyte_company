'use client'

import { useActionState } from 'react'
import { submitApplicationAction } from '@/app/actions/admin'

const initialState = null

export default function ApplyForm({ position }) {
  const [state, formAction, pending] = useActionState(submitApplicationAction, initialState)

  if (state?.success) {
    return (
      <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8 text-center">
        <span className="text-4xl">🎉</span>
        <p className="text-white font-semibold mt-3">Application Submitted!</p>
        <p className="text-slate-400 text-sm mt-1">We&apos;ll review your application and get back to you soon.</p>
      </div>
    )
  }

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <input type="hidden" name="position" value={position} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input name="name" type="text" placeholder="Full Name" required
          className="bg-[#0d1630] border border-slate-700 text-slate-200 placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors" />
        <input name="email" type="email" placeholder="Email Address" required
          className="bg-[#0d1630] border border-slate-700 text-slate-200 placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors" />
      </div>
      <input name="phone" type="tel" placeholder="Phone Number (optional)"
        className="bg-[#0d1630] border border-slate-700 text-slate-200 placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors" />
      <input name="experience" type="text" placeholder="Years of Experience"
        className="bg-[#0d1630] border border-slate-700 text-slate-200 placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors" />
      <textarea name="message" rows={4} placeholder="Cover note (optional)"
        className="bg-[#0d1630] border border-slate-700 text-slate-200 placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none" />
      <button type="submit" disabled={pending}
        className="px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity disabled:opacity-60">
        {pending ? 'Submitting...' : 'Submit Application'}
      </button>
    </form>
  )
}
