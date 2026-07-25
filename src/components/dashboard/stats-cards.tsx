'use client'

import { motion } from 'framer-motion'
import {
  FolderKanban,
  CheckCircle2,
  Clock,
  AlertCircle,
  ArrowUp,
  ArrowDown,
} from 'lucide-react'
import { cn } from '@/lib/utils'

// ============================================
// STATS DATA
// ============================================
const stats = [
  {
    label: 'Total Projects',
    value: '12',
    change: 16.6,
    trend: 'up',
    icon: FolderKanban,
    gradient: 'from-blue-500 to-cyan-500',
    bg: 'bg-blue-500/10',
    text: 'text-blue-500',
  },
  {
    label: 'Completed Tasks',
    value: '148',
    change: 25.3,
    trend: 'up',
    icon: CheckCircle2,
    gradient: 'from-green-500 to-emerald-500',
    bg: 'bg-green-500/10',
    text: 'text-green-500',
  },
  {
    label: 'In Progress',
    value: '23',
    change: 8.2,
    trend: 'up',
    icon: Clock,
    gradient: 'from-amber-500 to-orange-500',
    bg: 'bg-amber-500/10',
    text: 'text-amber-500',
  },
  {
    label: 'Overdue',
    value: '3',
    change: -12.5,
    trend: 'down',
    icon: AlertCircle,
    gradient: 'from-red-500 to-pink-500',
    bg: 'bg-red-500/10',
    text: 'text-red-500',
  },
]

// ============================================
// STATS CARDS COMPONENT
// ============================================
export function StatsCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          whileHover={{ y: -4 }}
          className="group relative overflow-hidden rounded-xl border border-border/40 bg-card p-6 transition-all hover:shadow-xl hover:shadow-primary/5"
        >
          {/* Gradient overlay on hover */}
          <div
            className={cn(
              'absolute inset-0 opacity-0 transition-opacity group-hover:opacity-5',
              `bg-gradient-to-br ${stat.gradient}`
            )}
          />

          <div className="relative">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </p>
                <p className="text-3xl font-bold tracking-tight">
                  {stat.value}
                </p>
              </div>
              <div
                className={cn(
                  'rounded-xl p-3 transition-transform group-hover:scale-110',
                  stat.bg
                )}
              >
                <stat.icon className={cn('h-5 w-5', stat.text)} />
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <div
                className={cn(
                  'flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold',
                  stat.trend === 'up'
                    ? 'bg-green-500/10 text-green-500'
                    : 'bg-red-500/10 text-red-500'
                )}
              >
                {stat.trend === 'up' ? (
                  <ArrowUp className="h-3 w-3" />
                ) : (
                  <ArrowDown className="h-3 w-3" />
                )}
                {Math.abs(stat.change)}%
              </div>
              <span className="text-xs text-muted-foreground">
                vs last month
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}