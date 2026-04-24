import Link from 'next/link'
import { ArrowRight, Search, ShieldCheck, Sparkles, Star, UserPlus, Users } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { TaskListClient } from '@/components/tasks/task-list-client'
import { fetchTaskPosts } from '@/lib/task-data'
import { SITE_CONFIG, getTaskConfig } from '@/lib/site-config'
import { CATEGORY_OPTIONS, normalizeCategory } from '@/lib/categories'

const HIGHLIGHT_CATEGORIES = CATEGORY_OPTIONS.slice(0, 14)

export async function EnhancedProfileList({ category }: { category?: string }) {
  const posts = await fetchTaskPosts('profile', 48)
  const normalizedCategory = category ? normalizeCategory(category) : 'all'
  const taskConfig = getTaskConfig('profile')
  const activeLabel =
    normalizedCategory === 'all'
      ? 'All profiles'
      : CATEGORY_OPTIONS.find((c) => c.slug === normalizedCategory)?.name || normalizedCategory

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavbarShell />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1b2b6b] text-white">
        <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_15%_20%,#f5b014_0,transparent_35%),radial-gradient(circle_at_85%_60%,#ffffff_0,transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
                <Sparkles className="h-3.5 w-3.5 text-[#f5b014]" />
                Browse community
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Discover <span className="text-[#f5b014]">profiles</span> that stand out
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-white/75">
                {taskConfig?.description ||
                  `Explore creators, professionals, and public pages on ${SITE_CONFIG.name}.`}{' '}
                Filter by interest, open a card, and connect in one click.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/create/profile"
                  className="inline-flex items-center gap-2 rounded-full bg-[#f5b014] px-6 py-3 text-sm font-bold text-[#1b2b6b] shadow-lg transition hover:bg-[#e0a00f]"
                >
                  <UserPlus className="h-4 w-4" />
                  Create a profile
                </Link>
                <Link
                  href="/login"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
                >
                  Already have an account? Sign in
                </Link>
              </div>

              <form
                action="/profile"
                method="get"
                className="mt-10 flex max-w-xl flex-col gap-3 sm:flex-row sm:items-end"
              >
                <div className="flex flex-1 flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-white/60">
                    Jump to category
                  </label>
                  <div className="flex items-center gap-2 rounded-2xl bg-white p-2 shadow-lg sm:rounded-full sm:pl-4">
                    <Search className="hidden h-5 w-5 shrink-0 text-slate-400 sm:block" />
                    <select
                      name="category"
                      defaultValue={normalizedCategory === 'all' ? 'all' : normalizedCategory}
                      className="h-11 flex-1 cursor-pointer rounded-xl border-0 bg-transparent py-2 pl-2 pr-2 text-sm font-medium text-slate-900 focus:outline-none focus:ring-0 sm:rounded-full"
                    >
                      <option value="all">All categories</option>
                      {CATEGORY_OPTIONS.map((c) => (
                        <option key={c.slug} value={c.slug}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-[#f5b014] px-8 text-sm font-bold text-[#1b2b6b] hover:bg-[#e0a00f] sm:mb-0.5"
                >
                  Apply
                </button>
              </form>
              <p className="mt-3 text-xs text-white/50">
                Or tap a category chip in the strip below — same filters, faster browsing.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Users, value: `${posts.length}+`, label: 'In this feed' },
                { icon: Star, value: '4.9', label: 'Community rating' },
                { icon: ShieldCheck, value: 'Verified', label: 'Trust-ready layout' },
                { icon: Sparkles, value: 'New', label: 'Weekly spotlights' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm"
                >
                  <stat.icon className="h-6 w-6 text-[#f5b014]" />
                  <p className="mt-4 text-3xl font-bold">{stat.value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category chips */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-semibold text-slate-600">
              Showing: <span className="text-[#1b2b6b]">{activeLabel}</span>
            </p>
            <Link
              href="/create/profile"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[#f5b014] px-4 py-2 text-sm font-bold text-[#1b2b6b] hover:bg-[#e0a00f]"
            >
              <UserPlus className="h-4 w-4" />
              Create a profile
            </Link>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href="/profile"
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                normalizedCategory === 'all'
                  ? 'bg-[#1b2b6b] text-white'
                  : 'border border-slate-200 bg-white text-slate-700 hover:border-[#1b2b6b]'
              }`}
            >
              All
            </Link>
            {HIGHLIGHT_CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                href={`/profile?category=${encodeURIComponent(c.slug)}`}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  normalizedCategory === c.slug
                    ? 'bg-[#f5b014] text-[#1b2b6b]'
                    : 'border border-slate-200 bg-white text-slate-700 hover:border-[#1b2b6b] hover:text-[#1b2b6b]'
                }`}
              >
                {c.name}
              </Link>
            ))}
            <Link
              href="/help"
              className="rounded-full border border-dashed border-slate-300 px-4 py-2 text-sm font-semibold text-slate-500 hover:border-[#1b2b6b] hover:text-[#1b2b6b]"
            >
              + More in help center
            </Link>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Clear identity cards',
              body: 'Each profile is built for scan-friendly bios, photos, and links so visitors understand who you are in seconds.',
            },
            {
              title: 'Built for discovery',
              body: 'Categories and search help people find the right creator, professional, or brand without endless scrolling.',
            },
            {
              title: 'Consistent with your brand',
              body: 'The same navy and gold experience as the rest of the site — polished, calm, and easy to trust.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:border-[#1b2b6b] hover:shadow-md"
            >
              <div className="h-1 w-12 rounded-full bg-[#f5b014]" />
              <h2 className="mt-5 text-lg font-bold text-[#1b2b6b]">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-2 border-b border-slate-200 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-[#1b2b6b] sm:text-3xl">Profiles in this view</h2>
            <p className="mt-2 text-sm text-slate-600">
              {posts.length} profiles loaded from the feed — local saves and merges still apply in the grid below.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/create/profile"
              className="inline-flex items-center gap-2 rounded-full bg-[#f5b014] px-5 py-2.5 text-sm font-bold text-[#1b2b6b] hover:bg-[#e0a00f]"
            >
              <UserPlus className="h-4 w-4" />
              Create a profile
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-[#1b2b6b] hover:text-[#1b2b6b]"
            >
              Contact us
            </Link>
          </div>
        </div>

        <TaskListClient task="profile" initialPosts={posts} category={normalizedCategory} />
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1b2b6b] sm:text-3xl">Ready to be discovered?</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Join {SITE_CONFIG.name}, publish your profile, and show up alongside the community below.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/create/profile"
              className="inline-flex items-center gap-2 rounded-full bg-[#f5b014] px-6 py-3 text-sm font-bold text-[#1b2b6b] hover:bg-[#e0a00f]"
            >
              <UserPlus className="h-4 w-4" />
              Create a profile
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:border-[#1b2b6b]"
            >
              How it works
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
