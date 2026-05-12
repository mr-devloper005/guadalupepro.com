import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/site-config'

export const FOOTER_OVERRIDE_ENABLED = true

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
]

const support = [
  { name: 'Help Center', href: '/help' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'FAQ', href: '/help' },
]

export function FooterOverride() {
  return (
    <footer className="bg-[#1b2b6b] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 border-b border-white/10 pb-10 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-bold md:text-3xl">Ready to build your profile presence?</h3>
            <p className="mt-2 text-sm text-white/70">Join {SITE_CONFIG.name} today and connect with the community.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full bg-[#f5b014] px-5 py-3 text-sm font-bold text-[#1b2b6b] hover:bg-[#e0a00f]"
            >
              Learn More About Us
            </Link>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/favicon.png?v=2026"
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 shrink-0 rounded-xl bg-white/10 object-contain p-0.5"
              />
              <span className="text-xl font-bold">{SITE_CONFIG.name}</span>
            </Link>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider">Quick Links</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-white/70 hover:text-[#f5b014]">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider">Support</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {support.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-white/70 hover:text-[#f5b014]">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All Rights Reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
