import { Camera, Globe, Trophy, Users } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'
import { buildPageMetadata } from '@/lib/seo'

export const revalidate = 300

export const generateMetadata = () =>
  buildPageMetadata({
    path: '/about',
    title: `About ${SITE_CONFIG.name}`,
    description: `${SITE_CONFIG.name} is a photography-first community built for discovery, inspiration, and creator growth.`,
  })

const heroImage = 'https://picsum.photos/seed/about-hero-photo/1800/900'

const pillars = [
  {
    icon: Camera,
    title: 'Photography First',
    text: 'We design every surface around photography quality, composition, and visual storytelling.',
  },
  {
    icon: Users,
    title: 'Global Community',
    text: 'Creators from around the world share work, exchange feedback, and discover new perspectives.',
  },
  {
    icon: Trophy,
    title: 'Creative Challenges',
    text: 'Weekly inspiration and curated galleries help members level up with purpose.',
  },
  {
    icon: Globe,
    title: 'Discover Everywhere',
    text: 'From street scenes to landscapes, the platform is built to celebrate every style and subject.',
  },
]

const stats = [
  { value: '200M+', label: 'Photos shared' },
  { value: '32K+', label: 'Active creators' },
  { value: '190+', label: 'Countries represented' },
  { value: '1,200+', label: 'Weekly highlights' },
]

const gallery = [
  'https://picsum.photos/seed/about-gallery-1/1200/900',
  'https://picsum.photos/seed/about-gallery-2/1200/900',
  'https://picsum.photos/seed/about-gallery-3/1200/900',
  'https://picsum.photos/seed/about-gallery-4/1200/900',
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f4f5f7] text-slate-900">
      <NavbarShell />

      <main className="mx-auto max-w-[1880px] px-3 pb-16 pt-6 sm:px-6 lg:px-10">
        <section className="relative overflow-hidden rounded-2xl">
          <img src={heroImage} alt={`${SITE_CONFIG.name} about hero`} className="h-[320px] w-full object-cover sm:h-[430px]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/15" />
          <div className="absolute left-6 top-8 max-w-2xl sm:left-12 sm:top-12">
            <p className="inline-flex rounded-full border border-white/35 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white">
              About {SITE_CONFIG.name}
            </p>
            <h1 className="mt-5 font-serif text-4xl font-bold leading-tight text-white sm:text-6xl">
              Built for people
              <br />
              who see the world
              <br />
              through a lens
            </h1>
            <p className="mt-4 max-w-xl text-base text-slate-100 sm:text-xl">
              We are a photography community focused on inspiration, discovery, and meaningful creator growth.
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <article key={item.label} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-3xl font-black text-slate-900">{item.value}</p>
              <p className="mt-1 text-sm font-semibold text-slate-600">{item.label}</p>
            </article>
          ))}
        </section>

        <section className="mt-14">
          <div className="mb-6">
            <h2 className="font-serif text-4xl font-bold text-slate-900 sm:text-5xl">What makes us different</h2>
            <p className="mt-2 max-w-3xl text-base leading-8 text-slate-600">
              {SITE_CONFIG.name} is not a generic feed. It is a visual space where image quality, curation, and creator identity come first.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {pillars.map((item) => (
              <article key={item.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <div className="mb-6">
            <div>
              <h2 className="font-serif text-4xl font-bold text-slate-900 sm:text-5xl">Community Highlights</h2>
              <p className="mt-2 text-base text-slate-600">A glimpse into the visual style and quality our members publish every day.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {gallery.map((img) => (
              <article key={img} className="overflow-hidden rounded-lg bg-white">
                <img src={img} alt="Community highlight" className="h-72 w-full object-cover" />
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
