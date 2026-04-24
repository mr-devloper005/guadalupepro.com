import Link from 'next/link'
import { CheckCircle2, Database, Eye, Lock, Mail, ShieldCheck, UserCircle2 } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'
import { buildPageMetadata } from '@/lib/seo'

export const revalidate = 300

export const generateMetadata = () =>
  buildPageMetadata({
    path: '/privacy',
    title: `Privacy Policy — ${SITE_CONFIG.name}`,
    description: `Read how ${SITE_CONFIG.name} collects, uses, and protects your personal information.`,
  })

const principles = [
  { icon: Lock, title: 'You own your data', body: 'Your profile, content, and connections belong to you. Export or delete any time.' },
  { icon: Eye, title: 'Transparent by default', body: 'We clearly show what is public, what is private, and what is stored locally.' },
  { icon: ShieldCheck, title: 'Safe by design', body: 'Session data lives on your device, protected with modern browser security.' },
  { icon: Database, title: 'No hidden tracking', body: 'We do not sell your data or share it with third-party advertising networks.' },
]

const sections = [
  {
    title: '1. Information We Collect',
    body: `We only collect what is needed to provide ${SITE_CONFIG.name} services: your name, email, password, profile details you choose to share, and basic usage information that helps us improve the platform.`,
    bullets: [
      'Account details: name, email, password (hashed)',
      'Profile content: bio, photos, links, and highlights you upload',
      'Usage data: device type, browser, and aggregate activity',
    ],
  },
  {
    title: '2. How We Use Your Information',
    body: 'Your information powers your profile experience and nothing more. Specifically, we use it to:',
    bullets: [
      'Create and maintain your account and profile',
      'Enable community features like follows, messages, and discovery',
      'Improve the platform through aggregated, anonymous usage insights',
      'Respond to support requests and product questions',
    ],
  },
  {
    title: '3. Data Storage and Security',
    body: 'Your session is saved locally in your browser using secure local storage. Profile content is transmitted over encrypted connections (HTTPS). We never sell your data.',
  },
  {
    title: '4. Cookies and Local Storage',
    body: 'We use a minimal set of cookies to remember your preferences and an encrypted local storage entry to keep you signed in on your device. You can clear this at any time from your browser settings.',
  },
  {
    title: '5. Your Rights',
    body: 'You may access, update, export, or delete your data at any time from Settings. Requests for full account deletion are processed within 24 hours.',
  },
  {
    title: '6. Children\'s Privacy',
    body: `${SITE_CONFIG.name} is not intended for users under 13. We do not knowingly collect personal information from children.`,
  },
  {
    title: '7. Changes to this Policy',
    body: 'We may update this policy to reflect new features or legal requirements. We will notify all active members by email before any material change.',
  },
  {
    title: '8. Contact Us',
    body: `If you have questions about this policy or your data, reach out to privacy@${SITE_CONFIG.name.toLowerCase()}.com.`,
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavbarShell />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1b2b6b] text-white">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,#f5b014_0,transparent_40%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <ShieldCheck className="mx-auto h-12 w-12 text-[#f5b014]" />
          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Your <span className="text-[#f5b014]">privacy</span> matters to us
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/75">
            We built {SITE_CONFIG.name} to put you in control. Here's exactly what we collect, why we need it, and how it's protected.
          </p>
          <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-white/60">
            Last updated: October 2025
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {principles.map((p) => (
            <div key={p.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1b2b6b] text-white">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-base font-bold text-[#1b2b6b]">{p.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sections */}
      <section className="mx-auto max-w-4xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 sm:p-12">
          <div className="prose-slate space-y-10">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-2xl font-bold text-[#1b2b6b]">{s.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{s.body}</p>
                {s.bullets ? (
                  <ul className="mt-4 space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#f5b014]" />
                        {b}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl bg-[#1b2b6b] p-8 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h3 className="text-xl font-bold">Questions about your privacy?</h3>
            <p className="mt-1 text-sm text-white/75">Our team is happy to walk through anything you'd like clarified.</p>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#f5b014] px-5 py-3 text-sm font-bold text-[#1b2b6b] hover:bg-[#e0a00f]">
            <Mail className="h-4 w-4" /> Contact us
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
