import Link from 'next/link'
import {
  ArrowUpRight,
  CheckCircle2,
  Compass,
  Handshake,
  Heart,
  Lightbulb,
  Quote,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Users,
} from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'
import { buildPageMetadata } from '@/lib/seo'

export const revalidate = 300

export const generateMetadata = () =>
  buildPageMetadata({
    path: '/about',
    title: `About ${SITE_CONFIG.name}`,
    description: `Learn how ${SITE_CONFIG.name} helps creators, professionals, and communities build a standout public profile.`,
  })

const values = [
  { icon: Heart, title: 'People First', body: 'Every feature is designed around real creators, professionals, and communities.' },
  { icon: ShieldCheck, title: 'Trust & Safety', body: 'Verified badges and privacy controls keep your identity in your hands.' },
  { icon: Sparkles, title: 'Simple by Design', body: 'A clean profile builder without the bloat. Polished, fast, and delightful.' },
  { icon: Handshake, title: 'Community Driven', body: 'We grow with our members and ship the features they actually ask for.' },
]

const steps = [
  { n: '01', title: 'Create your account', body: 'Sign up in under 30 seconds with just your name and email. Your session is saved safely on your device.' },
  { n: '02', title: 'Build your profile', body: 'Add a bio, photos, links, and highlights. Choose from modern layouts built for readability and reach.' },
  { n: '03', title: 'Get discovered', body: 'Appear in community searches, share your profile link, and connect with people who care about your work.' },
  { n: '04', title: 'Grow with insights', body: 'Track who visits, what resonates, and iterate your profile with simple, privacy-friendly analytics.' },
]

const milestones = [
  { year: '2018', title: 'The idea', body: 'We started as a small community of writers who wanted a better profile page.' },
  { year: '2020', title: '10K members', body: 'Word of mouth grew the platform to the first ten thousand members.' },
  { year: '2023', title: 'Verified badges', body: 'We launched identity verification to reward authentic creators.' },
  { year: '2025', title: '32K+ members', body: 'Today, a thriving global community relies on us for their profile presence.' },
]

const team = [
  { name: 'Ava Martinez', role: 'Founder & CEO', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80' },
  { name: 'Kenneth Allen', role: 'Head of Community', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
  { name: 'Paula Moro', role: 'Lead Designer', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80' },
  { name: 'John Dukes', role: 'Engineering Lead', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80' },
]

const testimonials = [
  { name: 'Sophie Turner', role: 'Creative Director', quote: `${SITE_CONFIG.name} transformed how I present myself online. My profile feels like a real portfolio, not just a page.`, img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80' },
  { name: 'Daniel Kim', role: 'Independent Designer', quote: 'The verified badge and clean layouts gave me instant credibility. I book more clients through my profile than anywhere else.', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80' },
  { name: 'Maria Gonzalez', role: 'Community Organizer', quote: `I love how simple it is. My community finds me, follows me, and stays connected — all in one place.`, img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavbarShell />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1b2b6b] text-white">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,#f5b014_0,transparent_40%),radial-gradient(circle_at_85%_50%,#ffffff_0,transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em]">
            About {SITE_CONFIG.name}
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Empowering <span className="text-[#f5b014]">every creator</span> to shine online.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/75">
            We build a friendly, modern profile platform so anyone — from first-time creators to seasoned
            professionals — can craft a presence they're proud of.
          </p>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {[
            { icon: Target, title: 'Our Mission', body: 'Give everyone the tools to create a beautiful, honest public profile without the clutter and noise of traditional platforms.' },
            { icon: Compass, title: 'Our Vision', body: 'A web where every creator owns a corner of the internet that is truly theirs — private when it needs to be, public when it matters.' },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1b2b6b] text-white">
                <item.icon className="h-7 w-7" />
              </div>
              <h2 className="mt-6 text-3xl font-bold">{item.title}</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full bg-[#1b2b6b] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white">
              How It Works
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
              From signup to standout in four simple steps
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Getting started with {SITE_CONFIG.name} is designed to feel effortless.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.n} className="relative rounded-2xl border border-slate-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-[#1b2b6b] hover:shadow-xl">
                <span className="text-4xl font-bold text-[#f5b014]">{step.n}</span>
                <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-[#f5b014]/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#1b2b6b]">
              Our Values
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
              The principles that guide every decision we make
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              These four values keep the {SITE_CONFIG.name} experience authentic, safe, and worth recommending.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#1b2b6b] px-6 py-3 text-sm font-bold text-white hover:bg-[#263b8e]"
            >
              <ArrowUpRight className="h-4 w-4" />
              Talk to our team
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f5b014] text-[#1b2b6b]">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#1b2b6b] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full bg-[#f5b014] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#1b2b6b]">
              Our Journey
            </span>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">From idea to a thriving community</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {milestones.map((m) => (
              <div key={m.year} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-3xl font-bold text-[#f5b014]">{m.year}</p>
                <h3 className="mt-3 text-lg font-bold">{m.title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/70">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-[#f5b014]/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#1b2b6b]">
            Meet The Team
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">The people behind {SITE_CONFIG.name}</h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((t) => (
            <div key={t.name} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="aspect-square overflow-hidden">
                <img src={t.img} alt={t.name} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#1b2b6b]">{t.name}</h3>
                <p className="text-sm text-slate-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full bg-[#1b2b6b] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white">
              Testimonials
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">Loved by creators worldwide</h2>
            <div className="mt-4 flex items-center justify-center gap-1 text-[#f5b014]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
              <span className="ml-2 text-sm font-semibold text-slate-600">4.9/5 from 2,400+ reviews</span>
            </div>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-slate-200 bg-white p-7">
                <Quote className="h-8 w-8 text-[#f5b014]" />
                <p className="mt-5 text-sm leading-7 text-slate-700">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <img src={t.img} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-[#1b2b6b]">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#1b2b6b] p-12 text-white">
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_90%_10%,#f5b014_0,transparent_40%)]" />
          <div className="relative grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <Rocket className="h-10 w-10 text-[#f5b014]" />
              <h2 className="mt-5 text-3xl font-bold sm:text-4xl">Ready to join the community?</h2>
              <p className="mt-4 max-w-lg text-base leading-7 text-white/75">
                Create your profile in under a minute and start connecting with thousands of creators and professionals.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/register" className="inline-flex items-center gap-2 rounded-full bg-[#f5b014] px-6 py-3.5 text-sm font-bold text-[#1b2b6b] hover:bg-[#e0a00f]">
                <ArrowUpRight className="h-4 w-4" /> Create Profile
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-bold text-white hover:bg-white/10">
                Talk to us
              </Link>
            </div>
            <ul className="col-span-full mt-2 grid gap-2 text-sm text-white/70 sm:grid-cols-3">
              {['Free to join', 'No credit card required', 'Cancel anytime'].map((i) => (
                <li key={i} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#f5b014]" />{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
