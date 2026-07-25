'use client'

import { motion } from 'framer-motion'
import { Sparkles, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

// ============================================
// WELCOME BANNER COMPONENT
// ============================================
export function WelcomeBanner() {
  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good Morning'
    if (hour < 17) return 'Good Afternoon'
    return 'Good Evening'
  }

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 p-6 sm:p-8"
    >
      {/* Background decoration */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              {today}
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {getGreeting()}, John! 👋
          </h1>
          <p className="mt-2 max-w-xl text-muted-foreground">
            You have{' '}
            <span className="font-semibold text-foreground">8 tasks</span> due
            today and{' '}
            <span className="font-semibold text-foreground">3 projects</span>{' '}
            in progress.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="gap-2">
            <TrendingUp className="h-4 w-4" />
            View Reports
          </Button>
          <Button size="sm" className="gap-2">
            <Sparkles className="h-4 w-4" />
            AI Insights
          </Button>
        </div>
      </div>
    </motion.div>
  )
}