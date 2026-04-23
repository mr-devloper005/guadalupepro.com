import Link from 'next/link'
import {
  ArrowRight,
  BookOpen,
  CreditCard,
  HelpCircle,
  Mail,
  MessageCircle,
  Phone,
  Search,
  Settings,
  ShieldCheck,
  UserCircle2,
  Users,
} from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'
import { buildPageMetadata } from '@/lib/seo'

export const revalidate = 300

export const generateMetadata = () =>
  buildPageMetadata({
    path: '/help',
    title: `Help Center & FAQ — ${SITE_CONFIG.name}`,
    description: 'Find answers, guides, and quick fixes for common questions about your profile and account.',
  })

const topics = [
  { icon: UserCircle2, title: 'Profile Basics', count: '24 articles', href: '#faq' },
  { icon: ShieldCheck, title: 'Account & Security', count: '18 articles', href: '#faq' },
  { icon: Settings, title: 'Settings & Preferences', count: '12 articles', href: '#faq' },
  { icon: Users, title: 'Community', count: '9 articles', href: '#faq' },
  { icon: CreditCard, title: 'Billing', count: '7 articles', href: '#faq' },
  { icon: BookOpen, title: 'Guides & Tutorials', count: '15 articles', href: '#faq' },
]

const faqs = [
  {
    section: 'Getting Started',
    items: [
      { q: `What is ${SITE_CONFIG.name}?`, a: `${SITE_CONFIG.name} is a modern profile platform that lets anyone build a polished public page, connect with a community, and grow their online presence.` },
      { q: 'How do I create an account?', a: 'Click "Join Now" in the navigation, enter your name, email, and a password of at least 6 characters, and your profile will be ready in seconds.' },
      { q: 'Is it really free?', a: 'Yes. Creating a profile is free forever. Optional premium features exist but the core experience has no cost.' },
    ],
  },
  {
    section: 'Your Profile',
    items: [
      { q: 'How do I edit my profile?', a: 'Click the profile icon in the top navigation, choose "My Profile", then tap the edit button next to any section — bio, highlights, links, or photos.' },
      { q: 'Can I change my username?', a: 'Yes. Go to Settings → Account → Username. You can change it once every 30 days.' },
      { q: 'How does verification work?', a: 'Verified badges are given to creators who match our identity check. You can request one once your profile is complete and has at least 100 followers.' },
    ],
  },
  {
    section: 'Account & Security',
    items: [
      { q: 'Where is my data stored?', a: 'Your session is saved locally on your device. We do not store passwords on our servers — your login is protected by local storage.' },
      { q: 'How do I sign out?', a: 'Click the profile icon in the navigation and choose "Sign Out". Your session will be cleared immediately.' },
      { q: 'Can I delete my account?', a: 'Yes. Visit Settings → Privacy → Delete Account. Your profile and data are permanently removed within 24 hours.' },
    ],
  },
  {
    section: 'Community',
    items: [
      { q: 'How do I follow someone?', a: 'Visit their profile and tap the "Follow" button. You will see their latest updates in your feed.' },
      { q: 'Can I block a user?', a: 'Absolutely. Open their profile, tap the menu icon, then choose "Block". They will not be able to view your profile or contact you.' },
      { q: 'How do I report something?', a: 'Every profile and post has a "Report" option in its menu. Our moderation team reviews reports within 24 hours.' },
    ],
  },
]

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavbarShell />

      {/* Hero with search */}
      <section className="relative overflow-hidden bg-[#1b2b6b] text-white">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,#f5b014_0,transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <HelpCircle className="mx-auto h-12 w-12 text-[#f5b014]" />
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            How can we <span className="text-[#f5b014]">help you</span>?
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/75">
            Search our help center or browse topics below. Still stuck? Our team is always a click away.
          </p>
          <div className="mx-auto mt-10 flex max-w-2xl items-center gap-3 rounded-full bg-white p-2 shadow-xl">
            <Search className="ml-3 h-5 w-5 text-slate-400" />
            <input
              placeholder="Search for answers..."
              className="flex-1 bg-transparent text-sm text-slate-900 focus:outline-none"
            />
            <button className="rounded-full bg-[#f5b014] px-5 py-2.5 text-sm font-bold text-[#1b2b6b] hover:bg-[#e0a00f]">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <span className="inline-flex items-center rounded-full bg-[#f5b014]/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#1b2b6b]">
            Browse Topics
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">Popular help categories</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((t) => (
            <Link
              key={t.title}
              href={t.href}
              className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-[#1b2b6b] hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1b2b6b] text-white group-hover:bg-[#f5b014] group-hover:text-[#1b2b6b]">
                <t.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-xl font-bold">{t.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{t.count}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-[#1b2b6b]">
                Explore <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-[#1b2b6b] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white">
              FAQ
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">Frequently asked questions</h2>
          </div>

          <div className="mt-12 space-y-10">
            {faqs.map((group) => (
              <div key={group.section}>
                <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#1b2b6b]">{group.section}</h3>
                <div className="space-y-3">
                  {group.items.map((f) => (
                    <details
                      key={f.q}
                      className="group rounded-2xl border border-slate-200 bg-white p-6 open:border-[#1b2b6b]"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between text-base font-bold">
                        {f.q}
                        <span className="text-xl text-[#1b2b6b] transition-transform group-open:rotate-45">+</span>
                      </summary>
                      <p className="mt-4 text-sm leading-7 text-slate-600">{f.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact support CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#1b2b6b] p-12 text-white">
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_90%_10%,#f5b014_0,transparent_40%)]" />
          <div className="relative grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">Still need help?</h2>
              <p className="mt-4 max-w-lg text-white/75">
                Our support team responds within 30 minutes during business hours. We're here to help you succeed.
              </p>
              <div className="mt-8 flex flex-wrap gap-6 text-sm">
                <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4 text-[#f5b014]" />(234) 345-4574</span>
                <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4 text-[#f5b014]" />support@{SITE_CONFIG.name.toLowerCase()}.com</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-start gap-3 lg:justify-end">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#f5b014] px-6 py-3.5 text-sm font-bold text-[#1b2b6b] hover:bg-[#e0a00f]">
                <MessageCircle className="h-4 w-4" /> Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
