import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  Layout,
  Users,
  Zap,
  BarChart3,
  Shield,
  Sparkles,
} from 'lucide-react'
import { siteConfig } from '@/config'

// ============================================
// FEATURES DATA
// ============================================
const features = [
  {
    icon: Layout,
    title: 'Kanban Boards',
    description:
      'Organize tasks visually with drag-and-drop Kanban boards for better workflow management.',
  },
  {
    icon: Users,
    title: 'Real-time Collaboration',
    description:
      'Work together seamlessly with your team in real-time from anywhere in the world.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description:
      'Built with Next.js 14 for blazing fast performance and instant page loads.',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description:
      'Get powerful insights into your team productivity and project progress.',
  },
  {
    icon: Shield,
    title: 'Role-based Access',
    description:
      'Control who can view and edit with granular permission settings.',
  },
  {
    icon: Sparkles,
    title: 'Modern UI/UX',
    description:
      'Beautiful, intuitive interface designed for maximum productivity.',
  },
]

// ============================================
// STATS DATA
// ============================================
const stats = [
  { value: '10K+', label: 'Active Users' },
  { value: '50K+', label: 'Projects Created' },
  { value: '99.9%', label: 'Uptime' },
  { value: '24/7', label: 'Support' },
]

// ============================================
// HOME PAGE
// ============================================
export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Layout className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">{siteConfig.name}</span>
          </Link>

          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/40 bg-background/50 px-4 py-1.5 text-sm backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span className="text-muted-foreground">
                Introducing SyncBoard v1.0
              </span>
            </div>

            <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              Manage Projects{' '}
              <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Effortlessly
              </span>
            </h1>

            <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
              The all-in-one collaborative platform for teams that ship faster.
              Plan, track, and deliver your best work with real-time
              collaboration.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/register">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  View Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="border-y border-border/40 bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mb-2 text-4xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 text-4xl font-bold">
              Everything you need to succeed
            </h2>
            <p className="text-lg text-muted-foreground">
              Powerful features designed to help your team collaborate and
              deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-border/40 bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 p-8 sm:p-12 md:p-16">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                Ready to transform your workflow?
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Join thousands of teams already using SyncBoard to ship better
                products faster.
              </p>
              <Link href="/register">
                <Button size="lg">
                  Get Started for Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-border/40 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary">
                <Layout className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-sm text-muted-foreground">
                © 2025 {siteConfig.name}. All rights reserved.
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-foreground">
                Privacy
              </Link>
              <Link href="#" className="hover:text-foreground">
                Terms
              </Link>
              <Link href="#" className="hover:text-foreground">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}