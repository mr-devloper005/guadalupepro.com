import Link from 'next/link'
import { CheckCircle2, Cookie, Mail, Settings } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'
import { buildPageMetadata } from '@/lib/seo'

export const revalidate = 300

export const generateMetadata = () =>
  buildPageMetadata({
    path: '/cookies',
    title: `Cookie Policy — ${SITE_CONFIG.name}`,
    description: `Learn how ${SITE_CONFIG.name} uses cookies and local storage to improve your experience.`,
  })

const cookieTypes = [
  {
    name: 'Essential',
    required: true,
    desc: 'These keep you signed in and make the core product work. They cannot be turned off.',
    examples: ['Session token (local storage)', 'CSRF protection', 'Language preference'],
  },
  {
    name: 'Preferences',
    required: false,
    desc: 'These remember your theme, layout, and small settings so you don\'t reconfigure every visit.',
    examples: ['Theme (light/dark)', 'Sidebar state', 'Recent searches'],
  },
  {
    name: 'Analytics',
    required: false,
    desc: 'Anonymous, aggregated usage data that helps us understand what to improve next. We never share it with advertisers.',
    examples: ['Page views (anonymous)', 'Performance metrics', 'Broken link reports'],
  },
]

const sections = [
  {
    title: 'What is a cookie?',
    body: 'A cookie is a tiny file a website can place on your device to remember you between visits. Similar technologies, like local storage, work the same way and are often more secure.',
  },
  {
    title: `How ${SITE_CONFIG.name} uses them`,
    body: 'We use the minimum set of cookies and local storage entries needed to sign you in, remember your preferences, and understand how the platform performs at a high level.',
  },
  {
    title: 'Third-party cookies',
    body: 'We do not partner with advertising networks. Any third-party tooling we use (for example, for error tracking) is configured to collect anonymous, aggregated data only.',
  },
  {
    title: 'Managing cookies',
    body: 'You can clear cookies and local storage from your browser settings at any time. Doing so will sign you out and reset preferences, but it will not delete your account.',
  },
]

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavbarShell />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1b2b6b] text-white">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,#f5b014_0,transparent_40%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <Cookie className="mx-auto h-12 w-12 text-[#f5b014]" />
          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Cookie <span className="text-[#f5b014]">Policy</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/75">
            A short, plain-English overview of how {SITE_CONFIG.name} uses cookies and local storage.
          </p>
          <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-white/60">
            Last updated: October 2025
          </p>
        </div>
      </section>

      {/* Cookie types */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <span className="inline-flex items-center rounded-full bg-[#f5b014]/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#1b2b6b]">
            Cookie Categories
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">What we use and why</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {cookieTypes.map((c) => (
            <div key={c.name} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-[#1b2b6b]">{c.name}</h3>
                <span
                  className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                    c.required ? 'bg-[#1b2b6b] text-white' : 'bg-[#f5b014] text-[#1b2b6b]'
                  }`}
                >
                  {c.required ? 'Required' : 'Optional'}
                </span>
              </div>
              <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">{c.desc}</p>
              <div className="mt-5 border-t border-slate-100 pt-4">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Examples</p>
                <ul className="mt-3 space-y-2">
                  {c.examples.map((e) => (
                    <li key={e} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#f5b014]" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sections */}
      <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 sm:p-12">
          <div className="space-y-10">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-2xl font-bold text-[#1b2b6b]">{s.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 rounded-2xl bg-[#1b2b6b] p-8 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f5b014] text-[#1b2b6b]">
              <Settings className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Manage your preferences</h3>
              <p className="mt-1 text-sm text-white/75">Adjust optional cookies any time from your browser or settings.</p>
            </div>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#f5b014] px-5 py-3 text-sm font-bold text-[#1b2b6b] hover:bg-[#e0a00f]">
            <Mail className="h-4 w-4" /> Questions? Contact us
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
