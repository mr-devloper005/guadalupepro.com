'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { useAuth } from '@/lib/auth-context'
import { cn } from '@/lib/utils'

export const NAVBAR_OVERRIDE_ENABLED = true

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
]

export function NavbarOverride() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const { isAuthenticated, user, logout } = useAuth()

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
            <button
              onClick={logout}
              className="hidden rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-slate-400 hover:text-slate-900 md:inline-flex"
            >
              Sign Out
            </button>
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
