'use client'

import { useActionState } from 'react'
import { submitContactAction } from '@/app/actions/admin'

const initialState = null

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactAction, initialState)

  if (state?.success) {
    return (
      <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-8 text-center">
        <span className="text-4xl">✅</span>
        <p className="text-white font-semibold mt-3">Message Sent!</p>
        <p className="text-slate-400 text-sm mt-1">We&apos;ll get back to you within 24 hours.</p>
      </div>
    )
  }

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input name="name" type="text" placeholder="Your Name" required
          className="bg-[#0d1630] border border-slate-700 text-slate-200 placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors" />
        <input name="email" type="email" placeholder="Your Email" required
          className="bg-[#0d1630] border border-slate-700 text-slate-200 placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors" />
      </div>
      <input name="company" type="text" placeholder="Company (optional)"
        className="bg-[#0d1630] border border-slate-700 text-slate-200 placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors" />
      <select name="service"
        className="bg-[#0d1630] border border-slate-700 text-slate-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors">
        <option value="">Select Service</option>
        <option>Web Development</option>
        <option>Mobile App Development</option>
        <option>Cloud Solutions</option>
        <option>Cybersecurity</option>
        <option>Data Analytics</option>
        <option>AI &amp; Automation</option>
      </select>
      <textarea name="message" rows={4} placeholder="Tell us about your project..." required
        className="bg-[#0d1630] border border-slate-700 text-slate-200 placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none" />
      <button type="submit" disabled={pending}
        className="px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/20 disabled:opacity-60">
        {pending ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
