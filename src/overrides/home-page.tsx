import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  Star,
  UserCircle2,
  Users,
  ShieldCheck,
  Sparkles,
  MessageSquare,
  Calendar,
  Mail,
} from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'

export const HOME_PAGE_OVERRIDE_ENABLED = true

const blogPosts = [
  {
    date: 'Oct 6, 2025',
    author: 'John Dukes',
    title: 'How to Build a Magnetic Personal Profile That Gets Noticed',
    img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80',
  },
  {
    date: 'Oct 12, 2025',
    author: 'Kenneth Allen',
    title: 'The Benefits of a Verified Creator Profile for Your Brand',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
  },
  {
    date: 'Oct 15, 2025',
    author: 'Paula Moro',
    title: 'Modern Profile Essentials That Improve Your Reach',
    img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80',
  },
]

const brandRow = ['Boltforce', 'Lightbox', 'FeatherDev', 'Spherule', 'GlobalBank', 'Nietzsche', 'Epicus']

export async function HomePageOverride() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavbarShell />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#1b2b6b] text-white">
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,#f5b014_0,transparent_40%),radial-gradient(circle_at_80%_60%,#ffffff_0,transparent_40%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-28">
            <div>
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                Profile discovery made simple
              </span>
              <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Build Your Profile <br />
                <span className="text-[#f5b014]">Stand Out Online</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-white/75">
                At {SITE_CONFIG.name}, we make it easy to create a polished public profile, connect
                with communities, and grow your presence — all in one place.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 rounded-full bg-[#f5b014] px-6 py-3.5 text-sm font-bold text-[#1b2b6b] hover:bg-[#e0a00f]"
                >
                  <ArrowUpRight className="h-4 w-4" />
                  Let's Get Started
                </Link>
                <div className="flex items-center gap-3 rounded-full bg-white/5 px-5 py-2.5 backdrop-blur">
                  <div className="flex items-center gap-1 text-[#f5b014]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <div className="text-sm">
                    <span className="font-bold">5.0</span>{' '}
                    <span className="text-white/70">32K+ Happy Members</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#f5b014]/20 to-transparent">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&q=80"
                  alt="Profile hero"
                  className="h-full w-full object-cover opacity-90"
                />
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 p-5 text-slate-900 shadow-xl backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#1b2b6b]">Trusted by</p>
                  <p className="mt-1 text-2xl font-bold">32,400+ Creators</p>
                  <p className="mt-1 text-sm text-slate-600">Active members this month</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-[2rem]">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80"
                  alt="About us"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-[#f5b014] p-6 shadow-xl sm:block">
                <Users className="h-8 w-8 text-[#1b2b6b]" />
                <p className="mt-3 text-3xl font-bold text-[#1b2b6b]">15+</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#1b2b6b]/80">Years of Experience</p>
              </div>
            </div>

            <div>
              <span className="inline-flex items-center rounded-full bg-[#f5b014]/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#1b2b6b]">
                About Us
              </span>
              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                We're more than just a profile platform — we're your community.
                At {SITE_CONFIG.name} we understand how important your online
                identity is.
              </h2>
              <p className="mt-6 text-base leading-7 text-slate-600">
                We take pride in providing top-quality profile tools backed by
                years of experience and dedication. Our team is committed to
                helping every member — from first-time creators to established
                professionals — build a presence that represents them with
                honesty and clarity.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {[
                  { value: '5K+', label: 'Active Profiles' },
                  { value: '100%', label: 'Satisfaction' },
                  { value: '24/7', label: 'Community Support' },
                  { value: '15+', label: 'Years Experience' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-bold text-[#1b2b6b] sm:text-4xl">{stat.value}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#f5b014] px-6 py-3.5 text-sm font-bold text-[#1b2b6b] hover:bg-[#e0a00f]"
              >
                <ArrowUpRight className="h-4 w-4" />
                Let's Connect
              </Link>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center rounded-full bg-[#1b2b6b] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white">
                What We Offer
              </span>
              <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                Everything you need to grow your profile
              </h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: UserCircle2,
                  title: 'Personal Profiles',
                  body: 'Craft a standout personal page with bio, links, verified badges, and rich media.',
                },
                {
                  icon: Sparkles,
                  title: 'Creator Showcase',
                  body: 'Share highlights, featured work, and achievements through a modern profile layout.',
                },
                {
                  icon: ShieldCheck,
                  title: 'Verified Badges',
                  body: 'Build trust with a verification process that signals authenticity to your audience.',
                },
                {
                  icon: Users,
                  title: 'Community Network',
                  body: 'Connect, follow, and engage with creators and professionals across industries.',
                },
                {
                  icon: MessageSquare,
                  title: 'Direct Messaging',
                  body: 'Talk to followers and collaborators through a clean, distraction-free inbox.',
                },
                {
                  icon: Calendar,
                  title: 'Event Spotlights',
                  body: 'Promote sessions, launches, and community meetups from your profile page.',
                },
              ].map((f) => (
                <div
                  key={f.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-[#1b2b6b] hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1b2b6b] text-white group-hover:bg-[#f5b014] group-hover:text-[#1b2b6b]">
                    <f.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold">{f.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{f.body}</p>
                  <Link
                    href="/profile"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#1b2b6b] hover:text-[#f5b014]"
                  >
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BLOG */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full bg-[#f5b014]/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#1b2b6b]">
              Our Blog
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need to know <br className="hidden sm:block" />
              about modern profiles
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.title}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={post.img} alt={post.title} className="h-full w-full object-cover transition-transform hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <UserCircle2 className="h-3.5 w-3.5" />
                      {post.author}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold uppercase tracking-tight text-[#1b2b6b]">
                    {post.title}
                  </h3>
                  <Link
                    href="/blog"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[#f5b014]"
                  >
                    Read More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="relative overflow-hidden bg-slate-900 py-20 text-white">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
            <div>
              <span className="inline-flex items-center rounded-full bg-[#f5b014] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#1b2b6b]">
                Get In Touch
              </span>
              <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
                Have questions? <br /> We'd love to hear from you.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-white/75">
                Reach out to the {SITE_CONFIG.name} team and we'll respond within 30 minutes during business hours.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 text-slate-900 shadow-2xl">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#1b2b6b]">Send us a message</h3>
              <p className="mt-1 text-xs text-slate-500">Our response time is within 30 minutes during business hours.</p>
              <form className="mt-6 grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input placeholder="First Name" className="h-12 rounded-xl border border-slate-200 px-4 text-sm focus:border-[#1b2b6b] focus:outline-none" />
                  <input placeholder="Last Name" className="h-12 rounded-xl border border-slate-200 px-4 text-sm focus:border-[#1b2b6b] focus:outline-none" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input placeholder="Phone Number" className="h-12 rounded-xl border border-slate-200 px-4 text-sm focus:border-[#1b2b6b] focus:outline-none" />
                  <input placeholder="Email Address" className="h-12 rounded-xl border border-slate-200 px-4 text-sm focus:border-[#1b2b6b] focus:outline-none" />
                </div>
                <select className="h-12 rounded-xl border border-slate-200 px-4 text-sm focus:border-[#1b2b6b] focus:outline-none">
                  <option>Profile Type</option>
                  <option>Personal</option>
                  <option>Creator</option>
                  <option>Business</option>
                </select>
                <textarea placeholder="Message" rows={4} className="rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-[#1b2b6b] focus:outline-none" />
                <button
                  type="button"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#f5b014] text-sm font-bold text-[#1b2b6b] hover:bg-[#e0a00f]"
                >
                  <Mail className="h-4 w-4" />
                  Send Now
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* BRANDS */}
        <section className="border-y border-slate-200 bg-white py-10">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-6 px-4 sm:px-6 lg:px-8">
            {brandRow.map((brand) => (
              <span key={brand} className="text-lg font-bold uppercase tracking-wide text-slate-400">
                {brand}
              </span>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
