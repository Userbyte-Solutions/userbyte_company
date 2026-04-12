'use client'

import { useState, useRef } from 'react'

export default function ContactForm() {
  const [state, setState] = useState(null)
  const [pending, setPending] = useState(false)
  const [error, setError] = useState('')
  const formRef = useRef(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setPending(true)
    setError('')

    const formData = new FormData(e.target)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          company: formData.get('company') || '',
          service: formData.get('service') || '',
          message: formData.get('message'),
        }),
      })

      const data = await res.json()
      if (data.success) {
        setState({ success: true })
        formRef.current?.reset()
      } else {
        setError(data.error || 'Failed to send message')
      }
    } catch {
      setError('Connection error. Please try again.')
    } finally {
      setPending(false)
    }
  }

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
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
      {error && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm">
          ⚠ {error}
        </div>
      )}
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
