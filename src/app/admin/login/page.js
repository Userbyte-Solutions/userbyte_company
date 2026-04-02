'use client'

import { useActionState } from 'react'
import { loginAction } from '@/app/actions/admin'
import Image from 'next/image'

export default function AdminLoginPage() {
  const [state, formAction, pending] = useActionState(loginAction, null)

  return (
    <div className="min-h-screen bg-[#060d1f] flex items-center justify-center px-4">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        {/* Logo + title */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Image src="/userbyte-logo.svg" alt="UserByte Solution" width={170} height={44} priority />
          </div>
          <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
          <p className="text-slate-500 text-sm mt-1">Sign in to manage your website</p>
        </div>

        {/* Card */}
        <div className="bg-[#0d1630] border border-slate-700/50 rounded-2xl p-8">
          <form action={formAction} className="flex flex-col gap-5">

            {/* Error message */}
            {state?.error && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm flex items-center gap-2">
                <span>⚠️</span> {state.error}
              </div>
            )}

            <div className="flex flex-col gap-1.5">
              <label className="text-slate-400 text-sm font-medium">Username</label>
              <input
                name="username"
                type="text"
                required
                autoComplete="username"
                placeholder="Enter username"
                className="bg-[#060d1f] border border-slate-700 text-slate-200 placeholder-slate-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-slate-400 text-sm font-medium">Password</label>
              <input
                name="password"
                type="password"
                required
                autoComplete="current-password"
                placeholder="Enter password"
                className="bg-[#060d1f] border border-slate-700 text-slate-200 placeholder-slate-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={pending}
              className="mt-1 w-full py-3.5 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {pending ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Signing in...
                </>
              ) : 'Sign In'}
            </button>
          </form>
        </div>

        <p className="text-center text-slate-600 text-xs mt-6">
          © {new Date().getFullYear()} UserByte Solution
        </p>
      </div>
    </div>
  )
}
