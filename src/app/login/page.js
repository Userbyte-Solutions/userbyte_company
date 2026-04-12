'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import Image from 'next/image'

export default function AdminLoginPage() {
  const router = useRouter()
  const [error, setError] = useState('')
  const [pending, setPending] = useState(false)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  async function handleLogin() {
    const email = emailRef.current?.value?.trim()
    const password = passwordRef.current?.value

    if (!email || !password) {
      setError('Please enter email and password')
      return
    }

    setPending(true)
    setError('')

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const idToken = await userCredential.user.getIdToken()

      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idToken }),
      })

      const data = await res.json()
      if (data.success) {
        router.push('/admin')
        router.refresh()
      } else {
        setError(data.error || 'Login failed')
      }
    } catch (err) {
      const code = err?.code || ''
      if (code.includes('invalid-credential') || code.includes('wrong-password') || code.includes('user-not-found')) {
        setError('Invalid email or password')
      } else if (code.includes('too-many-requests')) {
        setError('Too many attempts. Try again later.')
      } else if (code.includes('network')) {
        setError('Network error. Check your connection.')
      } else {
        setError('Login failed: ' + (err?.message || 'Unknown error'))
      }
    } finally {
      setPending(false)
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') handleLogin()
  }

  return (
    <div className="min-h-screen bg-[#030810] flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-cyan-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-600/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-violet-600/6 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg, #22d3ee 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      </div>

      <div className="relative w-full max-w-[420px]">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-5">
            <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-500/20 rounded-2xl">
              <Image src="/userbyte-logo.svg" alt="UserByte Solution" width={160} height={42} priority />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Welcome Back</h1>
          <p className="text-slate-500 text-sm mt-1.5">Sign in to your admin dashboard</p>
        </div>

        <div className="bg-[#0a1628]/80 backdrop-blur border border-slate-700/60 rounded-2xl p-8 shadow-2xl shadow-black/40">
          {error && (
            <div className="mb-5 bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 flex items-center gap-2.5">
              <svg className="w-4 h-4 text-red-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
              </svg>
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-slate-300 text-sm font-medium">Email</label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </span>
                <input
                  ref={emailRef}
                  type="email"
                  autoComplete="email"
                  placeholder="admin@userbyte.com"
                  onKeyDown={handleKeyDown}
                  className="w-full bg-[#060d1f] border border-slate-700 text-slate-200 placeholder-slate-600 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-slate-300 text-sm font-medium">Password</label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  ref={passwordRef}
                  type="password"
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  onKeyDown={handleKeyDown}
                  className="w-full bg-[#060d1f] border border-slate-700 text-slate-200 placeholder-slate-600 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 transition-all"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={handleLogin}
              disabled={pending}
              className="mt-1 w-full py-3.5 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-semibold rounded-xl hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-60 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
            >
              {pending ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Signing in...
                </>
              ) : (
                <>
                  Sign In
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-6">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <p className="text-slate-600 text-xs">© 2025 UserByte Solution — Secure Admin Access</p>
        </div>
      </div>
    </div>
  )
}
