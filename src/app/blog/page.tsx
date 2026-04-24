import Link from 'next/link'
import { ArrowRight, Calendar, Search, Tag, UserCircle2 } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'
import { buildPageMetadata } from '@/lib/seo'

export const revalidate = 300

export const generateMetadata = () =>
  buildPageMetadata({
    path: '/blog',
    title: `Blog — ${SITE_CONFIG.name}`,
    description: 'Profile tips, community stories, and product updates from the team.',
  })

const categories = ['All', 'Profile Tips', 'Community', 'Product Updates', 'Creator Stories', 'Guides']

const featured = {
  title: 'The Complete Guide to Crafting a Profile That Converts',
  excerpt:
    'From your bio to your highlights, every element of your profile tells a story. Learn how to make yours unforgettable and earn real community trust.',
  author: 'Ava Martinez',
  date: 'Oct 22, 2025',
  tag: 'Guides',
  img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80',
  slug: '/blog/complete-guide-profile',
}

const posts = [
  { title: 'How to Build a Magnetic Personal Profile That Gets Noticed', author: 'John Dukes', date: 'Oct 6, 2025', tag: 'Profile Tips', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80' },
  { title: 'The Benefits of a Verified Creator Profile for Your Brand', author: 'Kenneth Allen', date: 'Oct 12, 2025', tag: 'Creator Stories', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80' },
  { title: 'Modern Profile Essentials That Improve Your Reach', author: 'Paula Moro', date: 'Oct 15, 2025', tag: 'Guides', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80' },
  { title: '10 Bio Templates That Work for Any Industry', author: 'Sophie Turner', date: 'Sep 29, 2025', tag: 'Profile Tips', img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80' },
  { title: 'Inside Our Community: 32K+ Stories Worth Sharing', author: 'Daniel Kim', date: 'Sep 21, 2025', tag: 'Community', img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80' },
  { title: "What's New in October: Verified Badges and Analytics", author: 'The Team', date: 'Oct 1, 2025', tag: 'Product Updates', img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80' },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavbarShell />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1b2b6b] text-white">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,#f5b014_0,transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em]">
            The Blog
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Stories, <span className="text-[#f5b014]">guides</span>, and updates from {SITE_CONFIG.name}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/75">
            Insights from our team and community on building profiles that stand out and connect.
          </p>
          <div className="mx-auto mt-10 flex max-w-xl items-center gap-3 rounded-full bg-white p-2 shadow-xl">
            <Search className="ml-3 h-5 w-5 text-slate-400" />
            <input
              placeholder="Search articles..."
              className="flex-1 bg-transparent text-sm text-slate-900 focus:outline-none"
            />
            <button className="rounded-full bg-[#f5b014] px-5 py-2.5 text-sm font-bold text-[#1b2b6b] hover:bg-[#e0a00f]">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-2 px-4 py-5 sm:px-6 lg:px-8">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                i === 0
                  ? 'bg-[#1b2b6b] text-white'
                  : 'border border-slate-200 text-slate-700 hover:border-[#1b2b6b] hover:text-[#1b2b6b]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white lg:grid-cols-[1.1fr_1fr]">
          <div className="aspect-[16/10] overflow-hidden lg:aspect-auto">
            <img src={featured.img} alt={featured.title} className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col justify-center p-8 lg:p-12">
            <span className="inline-flex w-fit items-center gap-1 rounded-full bg-[#f5b014]/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#1b2b6b]">
              <Tag className="h-3 w-3" /> Featured · {featured.tag}
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">{featured.title}</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">{featured.excerpt}</p>
            <div className="mt-6 flex items-center gap-4 text-xs font-semibold text-slate-500">
              <span className="inline-flex items-center gap-1"><UserCircle2 className="h-3.5 w-3.5" />{featured.author}</span>
              <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{featured.date}</span>
            </div>
            <Link
              href={featured.slug}
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#1b2b6b] px-6 py-3 text-sm font-bold text-white hover:bg-[#263b8e]"
            >
              Read article <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <span className="inline-flex items-center rounded-full bg-[#1b2b6b] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white">
              Latest Posts
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Fresh from the blog</h2>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:border-[#1b2b6b] hover:shadow-xl"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={post.img} alt={post.title} className="h-full w-full object-cover transition-transform hover:scale-105" />
              </div>
              <div className="p-6">
                <span className="inline-flex items-center rounded-full bg-[#f5b014]/20 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#1b2b6b]">
                  {post.tag}
                </span>
                <h3 className="mt-4 text-lg font-bold uppercase tracking-tight text-[#1b2b6b]">{post.title}</h3>
                <div className="mt-4 flex items-center gap-4 text-xs font-semibold text-slate-500">
                  <span className="inline-flex items-center gap-1"><UserCircle2 className="h-3.5 w-3.5" />{post.author}</span>
                  <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{post.date}</span>
                </div>
                <Link
                  href="/blog"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-[#f5b014]"
                >
                  Read More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <button className="rounded-full border border-slate-200 px-6 py-3 text-sm font-bold text-slate-700 hover:border-[#1b2b6b] hover:text-[#1b2b6b]">
            Load more articles
          </button>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#1b2b6b] py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">Never miss a post</h2>
          <p className="mt-3 text-white/75">Get the latest articles and community stories delivered to your inbox.</p>
          <form className="mx-auto mt-8 flex max-w-lg overflow-hidden rounded-full bg-white/10 p-1.5">
            <input
              type="email"
              placeholder="you@example.com"
              className="flex-1 bg-transparent px-4 py-2 text-sm text-white placeholder-white/50 focus:outline-none"
            />
            <button type="button" className="rounded-full bg-[#f5b014] px-6 py-2.5 text-sm font-bold text-[#1b2b6b] hover:bg-[#e0a00f]">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  )
}
