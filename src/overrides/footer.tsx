import Link from 'next/link'
import { Facebook, Linkedin, Twitter, Instagram } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'

export const FOOTER_OVERRIDE_ENABLED = true

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Browse Profiles', href: '/profile' },
  { name: 'How It Works', href: '/about' },
  { name: 'Testimonials', href: '/about#testimonials' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact Us', href: '/contact' },
]

const support = [
  { name: 'Help Center', href: '/help' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Cookies', href: '/cookies' },
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
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#f5b014] px-5 py-3 text-sm font-bold text-[#1b2b6b] hover:bg-[#e0a00f]"
            >
              Contact Us Today
            </Link>
            <Link
              href="/register"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Create Profile
            </Link>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
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
            <p className="mt-4 text-sm leading-7 text-white/70">
              {SITE_CONFIG.description}
            </p>
            <div className="mt-5 flex gap-2">
              {[Facebook, Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#f5b014] hover:text-[#1b2b6b]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
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

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider">Newsletter</h4>
            <p className="mt-5 text-sm text-white/70">Get profile spotlights and community updates.</p>
            <form className="mt-4 flex overflow-hidden rounded-full bg-white/10 p-1">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 bg-transparent px-4 py-2 text-sm text-white placeholder-white/50 focus:outline-none"
              />
              <button
                type="button"
                className="rounded-full bg-[#f5b014] px-4 py-2 text-sm font-bold text-[#1b2b6b] hover:bg-[#e0a00f]"
              >
                Subscribe
              </button>
            </form>
            <div className="mt-6 text-sm text-white/70">
              <p className="font-bold uppercase tracking-wider text-white">Working Hours</p>
              <p className="mt-1">Mon–Sat: 9:00 AM – 10 PM</p>
            </div>
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
