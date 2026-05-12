import Link from 'next/link'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'

export const HOME_PAGE_OVERRIDE_ENABLED = true

const heroImage =
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1800&q=80'

const featureImage =
  'https://picsum.photos/seed/feature-architecture/1400/900'

const popularPhotos = [
  'https://picsum.photos/seed/popular-1/1200/900',
  'https://picsum.photos/seed/popular-2/1200/900',
  'https://picsum.photos/seed/popular-3/1200/900',
  'https://picsum.photos/seed/popular-4/1200/900',
  'https://picsum.photos/seed/popular-5/1200/900',
  'https://picsum.photos/seed/popular-6/1200/900',
  'https://picsum.photos/seed/popular-7/1200/900',
  'https://picsum.photos/seed/popular-8/1200/900',
]

const moodCards = [
  {
    title: 'Monochrome Madness',
    text: 'Distilling an image to a single color simplifies composition and focus.',
    img: 'https://picsum.photos/seed/mood-1/1200/1600',
  },
  {
    title: 'Feeling Shady',
    text: 'Shadows and hard contrast can add mystery and cinematic tension.',
    img: 'https://picsum.photos/seed/mood-2/1200/1600',
  },
  {
    title: 'Blending In',
    text: 'Subjects that harmonize with surroundings create visual puzzles.',
    img: 'https://picsum.photos/seed/mood-3/1200/1600',
  },
  {
    title: 'Explore Mode',
    text: 'Wander into remote landscapes and capture the thrill of discovery.',
    img: 'https://picsum.photos/seed/mood-4/1200/1600',
  },
]

function SectionHeader({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) {
  return (
    <div className="mb-5 flex items-end justify-between gap-4">
      <div>
        <h2 className="text-xl font-bold tracking-tight text-slate-900">{title}</h2>
        <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
      </div>
    </div>
  )
}

export async function HomePageOverride() {
  return (
    <div className="min-h-screen bg-[#f4f5f7] text-slate-900">
      <NavbarShell />

      <main className="mx-auto max-w-[1880px] px-3 pb-16 pt-6 sm:px-6 lg:px-10">
        <section className="relative overflow-hidden rounded-2xl">
          <img src={heroImage} alt={`${SITE_CONFIG.name} hero`} className="h-[320px] w-full object-cover sm:h-[430px]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/20" />
          <div className="absolute left-6 top-8 max-w-xl sm:left-12 sm:top-12">
            <h1 className="font-serif text-4xl font-bold leading-tight text-white sm:text-6xl">
              The World&apos;s Best
              <br />
              Photography Is Here
            </h1>
            <p className="mt-5 text-base text-slate-100 sm:text-2xl">
              Join a global community sharing incredible visuals and showcasing their best work.
            </p>
            <Link href="/register" className="mt-8 inline-block rounded-full bg-white px-7 py-3 text-sm font-bold text-slate-900">
              Sign up for free
            </Link>
          </div>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative overflow-hidden rounded-2xl">
            <img src={featureImage} alt="Architecture focus" className="h-[320px] w-full object-cover" />
            <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border-[10px] border-white/95 bg-transparent" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-700">Why join the world&apos;s best photography community?</p>
            <h2 className="mt-2 font-serif text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Showcase high-quality photos
            </h2>
            <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">
              Display your photography in full resolution and let every detail shine. Share your best work with a global creative community and get inspired by stunning imagery from around the world.
            </p>
            <Link href="/register" className="mt-7 inline-block rounded-full bg-slate-900 px-7 py-3 text-sm font-bold text-white">
              Sign up for free
            </Link>
          </div>
        </section>

        <section className="mt-14">
          <SectionHeader title="Popular Photos" subtitle="New uploads with the highest Pulse rating" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {popularPhotos.slice(0, 4).map((img) => (
              <article key={img} className="overflow-hidden rounded-lg bg-white">
                <img src={img} alt="Popular" className="h-64 w-full object-cover" />
              </article>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {popularPhotos.slice(4).map((img) => (
              <article key={img} className="overflow-hidden rounded-lg bg-white">
                <img src={img} alt="Popular extended" className="h-56 w-full object-cover" />
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <SectionHeader title="Mood Galleries" subtitle="Curated content to match your current vibe" />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {moodCards.map((card) => (
              <article key={card.title} className="relative overflow-hidden rounded-lg">
                <img src={card.img} alt={card.title} className="h-[460px] w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-black/55" />
                <div className="absolute left-5 right-5 top-6 text-white">
                  <h3 className="text-4xl font-bold tracking-tight">{card.title}</h3>
                  <div className="mt-4 h-1 w-14 rounded-full bg-white/90" />
                  <p className="mt-4 text-sm leading-7 text-white/90">{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
