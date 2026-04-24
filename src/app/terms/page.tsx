import Link from 'next/link'
import { CheckCircle2, FileText, Mail, Scale } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'
import { buildPageMetadata } from '@/lib/seo'

export const revalidate = 300

export const generateMetadata = () =>
  buildPageMetadata({
    path: '/terms',
    title: `Terms of Service — ${SITE_CONFIG.name}`,
    description: `The rules and agreements that govern your use of ${SITE_CONFIG.name}.`,
  })

const sections = [
  {
    title: '1. Acceptance of Terms',
    body: `By creating an account or using ${SITE_CONFIG.name}, you agree to these Terms of Service. If you do not agree, please do not use the platform.`,
  },
  {
    title: '2. Your Account',
    body: 'You are responsible for the content you publish and for keeping your credentials safe. One person, one account. Please provide accurate information when creating your profile.',
    bullets: [
      'You must be at least 13 years old to use the platform',
      'You are responsible for all activity on your account',
      'Do not share your login credentials with others',
    ],
  },
  {
    title: '3. Acceptable Use',
    body: 'We want a welcoming, authentic community. You agree not to use the platform to:',
    bullets: [
      'Harass, threaten, or impersonate other people',
      'Post illegal, harmful, or misleading content',
      'Attempt to break, scrape, or exploit the platform',
      'Send unsolicited promotional messages (spam)',
    ],
  },
  {
    title: '4. Your Content',
    body: `You keep the rights to everything you post. By uploading, you grant ${SITE_CONFIG.name} a non-exclusive license to display your content on your profile and in community surfaces. We do not sell or repurpose your work.`,
  },
  {
    title: '5. Community Moderation',
    body: 'We may remove content or suspend accounts that violate these terms. You can appeal any moderation decision by contacting support within 30 days.',
  },
  {
    title: '6. Subscriptions and Payments',
    body: 'Some features may require a paid subscription. Subscriptions auto-renew unless cancelled. You can cancel any time from Settings and retain access until the current period ends.',
  },
  {
    title: '7. Service Availability',
    body: 'We aim for high uptime but cannot guarantee uninterrupted service. We may release updates, downtime notices, and changes to features from time to time.',
  },
  {
    title: '8. Termination',
    body: 'You may delete your account at any time from Settings. We may suspend or terminate an account for serious or repeated violations of these terms.',
  },
  {
    title: '9. Limitation of Liability',
    body: `${SITE_CONFIG.name} is provided "as is". To the maximum extent permitted by law, we are not liable for indirect or consequential damages arising from your use of the platform.`,
  },
  {
    title: '10. Changes to these Terms',
    body: 'We may update these terms to reflect new features or legal requirements. We will notify members by email before material changes take effect.',
  },
  {
    title: '11. Governing Law',
    body: 'These terms are governed by the laws of the State of Texas, USA. Disputes will be resolved in the courts of Travis County, Texas.',
  },
]

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavbarShell />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1b2b6b] text-white">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,#f5b014_0,transparent_40%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <Scale className="mx-auto h-12 w-12 text-[#f5b014]" />
          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Terms of <span className="text-[#f5b014]">Service</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/75">
            The simple rules that keep {SITE_CONFIG.name} safe, friendly, and worth being part of.
          </p>
          <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-white/60">
            Last updated: October 2025
          </p>
        </div>
      </section>

      {/* Summary card */}
      <section className="mx-auto max-w-5xl px-4 pt-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
          <div className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-[#1b2b6b]" />
            <h2 className="text-lg font-bold text-[#1b2b6b]">The short version</h2>
          </div>
          <ul className="mt-5 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
            {[
              'Be honest and respectful to others',
              'You own your content — always',
              'Don\'t use the platform to harm people',
              'Delete your account any time, no questions asked',
            ].map((i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#f5b014]" />
                {i}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sections */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 sm:p-12">
          <div className="space-y-10">
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
            <h3 className="text-xl font-bold">Need clarification?</h3>
            <p className="mt-1 text-sm text-white/75">We're happy to walk through anything in plain English.</p>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#f5b014] px-5 py-3 text-sm font-bold text-[#1b2b6b] hover:bg-[#e0a00f]">
            <Mail className="h-4 w-4" /> Contact legal
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
