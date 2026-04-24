'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Mail, Lock, ArrowRight, ShieldCheck, Sparkles, Users } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { useAuth } from '@/lib/auth-context'
import { SITE_CONFIG } from '@/lib/site-config'

export const LOGIN_PAGE_OVERRIDE_ENABLED = true

export function LoginPageOverride() {
  const router = useRouter()
  const { login, isLoading } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')
    if (!email || !password) {
      setError('Please enter email and password.')
      return
    }
    try {
      await login(email, password)
      router.push('/')
    } catch {
      setError('Unable to sign in. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 overflow-hidden rounded-[2rem] bg-white shadow-xl lg:grid-cols-[1fr_1fr]">
          {/* Left panel */}
          <div className="relative hidden bg-[#1b2b6b] p-10 text-white lg:block">
            <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_80%,#f5b014_0,transparent_40%)]" />
            <div className="relative">
              <Link href="/" className="inline-flex items-center gap-3">
                <img
                  src="/favicon.png?v=2026"
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 shrink-0 rounded-xl bg-white object-contain p-0.5"
                />
                <span className="text-xl font-bold">{SITE_CONFIG.name}</span>
              </Link>
              <h1 className="mt-16 text-4xl font-bold leading-tight">
                Welcome back to your <span className="text-[#f5b014]">profile</span> workspace.
              </h1>
              <p className="mt-5 max-w-md text-sm leading-7 text-white/75">
                Sign in to manage your public profile, update your bio, and connect with the community.
              </p>
              <div className="mt-12 space-y-4">
                {[
                  { icon: ShieldCheck, text: 'Verified identity and secure sessions' },
                  { icon: Sparkles, text: 'Rich profile layouts and highlights' },
                  { icon: Users, text: 'Community-first discovery experience' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm">
                    <item.icon className="h-5 w-5 text-[#f5b014]" />
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="p-8 sm:p-12">
            <span className="inline-flex items-center rounded-full bg-[#f5b014]/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#1b2b6b]">
              Sign In
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">Access your profile</h2>
            <p className="mt-3 text-sm text-slate-600">
              Enter your credentials to sign in. Your session is saved locally on this device.
            </p>

            <form onSubmit={onSubmit} className="mt-8 grid gap-4">
              <label className="block">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Email</span>
                <div className="mt-2 flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 focus-within:border-[#1b2b6b]">
                  <Mail className="h-4 w-4 text-slate-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="h-12 flex-1 bg-transparent text-sm focus:outline-none"
                  />
                </div>
              </label>

              <label className="block">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Password</span>
                <div className="mt-2 flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 focus-within:border-[#1b2b6b]">
                  <Lock className="h-4 w-4 text-slate-400" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="h-12 flex-1 bg-transparent text-sm focus:outline-none"
                  />
                </div>
              </label>

              {error ? (
                <p className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-700">{error}</p>
              ) : null}

              <div className="flex items-center justify-between text-sm">
                <label className="inline-flex items-center gap-2 text-slate-600">
                  <input type="checkbox" className="h-4 w-4 rounded border-slate-300" defaultChecked />
                  Remember me
                </label>
                <Link href="/forgot-password" className="font-semibold text-[#1b2b6b] hover:text-[#f5b014]">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#f5b014] text-sm font-bold text-[#1b2b6b] hover:bg-[#e0a00f] disabled:opacity-60"
              >
                {isLoading ? 'Signing in...' : (<>
                  Sign In <ArrowRight className="h-4 w-4" />
                </>)}
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-slate-600">
              Don't have an account?{' '}
              <Link href="/register" className="font-bold text-[#1b2b6b] hover:text-[#f5b014]">
                Create one now
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
