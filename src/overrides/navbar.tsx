'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, LogOut } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { useAuth } from '@/lib/auth-context'
import { cn } from '@/lib/utils'

export const NAVBAR_OVERRIDE_ENABLED = true

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Profiles', href: '/profile' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export function NavbarOverride() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const profileRef = useRef<HTMLDivElement | null>(null)
  const { isAuthenticated, user, logout } = useAuth()

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setProfileOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <img
            src="/favicon.png?v=2026"
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 shrink-0 rounded-xl object-contain"
          />
          <span className="text-2xl font-bold tracking-tight text-[#1b2b6b]">
            {SITE_CONFIG.name}
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((item) => {
            const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-[15px] font-semibold transition-colors',
                  isActive ? 'text-[#1b2b6b]' : 'text-slate-700 hover:text-[#1b2b6b]',
                )}
              >
                {item.name}
              </Link>
            )
          })}
        </div>

        <div className="flex shrink-0 items-center gap-3">
          {isAuthenticated ? (
            <div ref={profileRef} className="relative hidden md:block">
              <button
                onClick={() => setProfileOpen((v) => !v)}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1b2b6b] text-white hover:bg-[#263b8e]"
                aria-label="Open profile menu"
              >
                {user?.avatar ? (
                  <img src={user.avatar} alt={user.name} className="h-11 w-11 rounded-full object-cover" />
                ) : (
                  <span className="text-sm font-bold uppercase">
                    {(user?.name || 'U').charAt(0)}
                  </span>
                )}
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-3 w-64 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
                  <div className="flex items-center gap-3 border-b border-slate-100 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1b2b6b] text-sm font-bold text-white">
                      {(user?.name || 'U').charAt(0).toUpperCase()}
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-slate-900">{user?.name}</p>
                      <p className="truncate text-xs text-slate-500">{user?.email}</p>
                    </div>
                  </div>
                  <div className="p-2">
                    <button
                      onClick={() => { setProfileOpen(false); logout() }}
                      className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-red-600 hover:bg-red-50"
                    >
                      <LogOut className="h-4 w-4" />
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="hidden items-center gap-2 md:flex">
              <Link
                href="/login"
                className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 hover:text-[#1b2b6b]"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="rounded-full bg-[#f5b014] px-5 py-2.5 text-sm font-bold text-[#1b2b6b] hover:bg-[#e0a00f]"
              >
                Join Now
              </Link>
            </div>
          )}

          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="space-y-1 px-4 py-4">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#1b2b6b]"
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-slate-200 pt-3">
              {isAuthenticated ? (
                <>
                  <div className="rounded-full bg-[#1b2b6b] px-5 py-2.5 text-center text-sm font-semibold text-white">
                    {user?.name || 'Signed in'}
                  </div>
                  <button
                    onClick={() => { logout(); setOpen(false) }}
                    className="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700"
                  >
                    Sign out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={() => setOpen(false)}
                    className="rounded-full border border-slate-200 px-5 py-2.5 text-center text-sm font-semibold text-slate-700"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/register"
                    onClick={() => setOpen(false)}
                    className="rounded-full bg-[#f5b014] px-5 py-2.5 text-center text-sm font-bold text-[#1b2b6b]"
                  >
                    Join Now
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
