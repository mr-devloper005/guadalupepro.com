import Link from 'next/link'
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'
import { buildPageMetadata } from '@/lib/seo'

export const revalidate = 300

export const generateMetadata = () =>
  buildPageMetadata({
    path: '/contact',
    title: `Contact ${SITE_CONFIG.name}`,
    description: `Get in touch with the ${SITE_CONFIG.name} team. We respond within 30 minutes during business hours.`,
  })

const channels = [
  { icon: Phone, label: 'Call Us', value: '(234) 345-4574', sub: 'Mon–Sat · 9am – 10pm' },
  { icon: Mail, label: 'Email', value: `hello@${SITE_CONFIG.baseUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}`, sub: 'We reply within 30 minutes' },
  { icon: MessageCircle, label: 'Live Chat', value: 'Start a conversation', sub: 'Available 24/7 for members' },
  { icon: MapPin, label: 'Office', value: '2200 Guadalupe St, Austin', sub: 'Texas, 78705, USA' },
]

const faqs = [
  { q: 'How long does it take to hear back?', a: 'We respond to most messages within 30 minutes during business hours and by the next morning otherwise.' },
  { q: 'Do you offer phone support?', a: 'Yes. Our support line is open Monday through Saturday, 9 AM – 10 PM local time.' },
  { q: 'Can I request a profile review?', a: 'Absolutely. Select "Profile Review" in the subject and we will schedule a 15-minute walk-through for free.' },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavbarShell />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1b2b6b] text-white">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,#f5b014_0,transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em]">
            Get In Touch
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            We'd love to <span className="text-[#f5b014]">hear from you</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/75">
            Whether you have a question, feedback, or want to work together — our team is just a message away.
          </p>
        </div>
      </section>

      {/* Channels */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {channels.map((c) => (
            <div key={c.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-7 transition-all hover:-translate-y-1 hover:border-[#1b2b6b] hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1b2b6b] text-white">
                <c.icon className="h-6 w-6" />
              </div>
              <p className="mt-5 text-xs font-bold uppercase tracking-wider text-slate-500">{c.label}</p>
              <p className="mt-1 text-base font-bold text-[#1b2b6b]">{c.value}</p>
              <p className="mt-1 text-sm text-slate-600">{c.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form + Map */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 sm:p-10">
            <h2 className="text-3xl font-bold tracking-tight">Send us a message</h2>
            <p className="mt-2 text-sm text-slate-600">
              Fill in the form and our team will get back to you within 30 minutes.
            </p>
            <form className="mt-8 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">First Name</label>
                  <input className="mt-2 h-12 w-full rounded-xl border border-slate-200 px-4 text-sm focus:border-[#1b2b6b] focus:outline-none" placeholder="Jane" />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Last Name</label>
                  <input className="mt-2 h-12 w-full rounded-xl border border-slate-200 px-4 text-sm focus:border-[#1b2b6b] focus:outline-none" placeholder="Doe" />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Email</label>
                  <input type="email" className="mt-2 h-12 w-full rounded-xl border border-slate-200 px-4 text-sm focus:border-[#1b2b6b] focus:outline-none" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Phone</label>
                  <input className="mt-2 h-12 w-full rounded-xl border border-slate-200 px-4 text-sm focus:border-[#1b2b6b] focus:outline-none" placeholder="+1 (555) 123-4567" />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Subject</label>
                <select className="mt-2 h-12 w-full rounded-xl border border-slate-200 px-4 text-sm focus:border-[#1b2b6b] focus:outline-none">
                  <option>General inquiry</option>
                  <option>Profile review</option>
                  <option>Partnership</option>
                  <option>Press & Media</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Message</label>
                <textarea
                  rows={5}
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-[#1b2b6b] focus:outline-none"
                  placeholder="Tell us a little about what you need..."
                />
              </div>
              <button
                type="button"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#f5b014] text-sm font-bold text-[#1b2b6b] hover:bg-[#e0a00f]"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </form>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[2rem] border border-slate-200 bg-[#1b2b6b] p-8 text-white">
              <Clock className="h-8 w-8 text-[#f5b014]" />
              <h3 className="mt-4 text-2xl font-bold">Working Hours</h3>
              <div className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/70">Monday – Friday</span>
                  <span className="font-semibold">9:00 AM – 10:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/70">Saturday</span>
                  <span className="font-semibold">10:00 AM – 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Sunday</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80"
                alt="Our location"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-[#1b2b6b] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white">
              Common Questions
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">Before you reach out</h2>
          </div>
          <div className="mt-12 space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-slate-200 bg-white p-6 open:border-[#1b2b6b]">
                <summary className="flex cursor-pointer list-none items-center justify-between text-base font-bold">
                  {f.q}
                  <span className="text-xl text-[#1b2b6b] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/help" className="text-sm font-bold text-[#1b2b6b] hover:text-[#f5b014]">
              Browse all FAQs →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
