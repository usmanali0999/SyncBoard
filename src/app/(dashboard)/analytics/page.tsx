'use client'

import { motion } from 'framer-motion'
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from 'recharts'
import { TrendingUp, TrendingDown, Users, Activity, Target, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

const productivityData = [
  { name: 'Week 1', tasks: 45, hours: 120 },
  { name: 'Week 2', tasks: 52, hours: 135 },
  { name: 'Week 3', tasks: 48, hours: 128 },
  { name: 'Week 4', tasks: 61, hours: 145 },
  { name: 'Week 5', tasks: 55, hours: 140 },
  { name: 'Week 6', tasks: 68, hours: 155 },
  { name: 'Week 7', tasks: 72, hours: 160 },
]

const teamPerformance = [
  { name: 'Sarah', completed: 45, pending: 5 },
  { name: 'Mike', completed: 38, pending: 8 },
  { name: 'Alex', completed: 52, pending: 3 },
  { name: 'Emma', completed: 41, pending: 6 },
  { name: 'David', completed: 35, pending: 10 },
]

const projectStatus = [
  { name: 'Completed', value: 42, color: '#22c55e' },
  { name: 'In Progress', value: 28, color: '#3b82f6' },
  { name: 'On Hold', value: 15, color: '#f59e0b' },
  { name: 'Cancelled', value: 5, color: '#ef4444' },
]

const revenueData = [
  { name: 'Jan', revenue: 12000 },
  { name: 'Feb', revenue: 15000 },
  { name: 'Mar', revenue: 18000 },
  { name: 'Apr', revenue: 22000 },
  { name: 'May', revenue: 28000 },
  { name: 'Jun', revenue: 35000 },
]

const kpis = [
  {
    label: 'Productivity',
    value: '87%',
    change: 12.5,
    trend: 'up',
    icon: Zap,
    color: 'text-yellow-500',
    bg: 'bg-yellow-500/10',
  },
  {
    label: 'Team Velocity',
    value: '48',
    change: 8.2,
    trend: 'up',
    icon: Activity,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
  },
  {
    label: 'Goal Completion',
    value: '92%',
    change: 5.3,
    trend: 'up',
    icon: Target,
    color: 'text-green-500',
    bg: 'bg-green-500/10',
  },
  {
    label: 'Team Members',
    value: '24',
    change: -2.1,
    trend: 'down',
    icon: Users,
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
  },
]

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <p className="mt-1 text-muted-foreground">
          Track your team&apos;s performance and productivity
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((kpi, i) => (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="rounded-xl border border-border/40 bg-card p-6"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{kpi.label}</p>
                <p className="mt-2 text-3xl font-bold">{kpi.value}</p>
                <div className="mt-2 flex items-center gap-1 text-xs">
                  {kpi.trend === 'up' ? (
                    <TrendingUp className="h-3 w-3 text-green-500" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-red-500" />
                  )}
                  <span
                    className={cn(
                      'font-semibold',
                      kpi.trend === 'up' ? 'text-green-500' : 'text-red-500'
                    )}
                  >
                    {Math.abs(kpi.change)}%
                  </span>
                  <span className="text-muted-foreground">vs last month</span>
                </div>
              </div>
              <div className={cn('rounded-xl p-3', kpi.bg)}>
                <kpi.icon className={cn('h-5 w-5', kpi.color)} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Productivity Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="rounded-xl border border-border/40 bg-card p-6"
        >
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Productivity Trends</h3>
            <p className="text-sm text-muted-foreground">
              Tasks completed & hours logged
            </p>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={productivityData}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--background))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="tasks"
                  stroke="#6366f1"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="hours"
                  stroke="#22c55e"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Project Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="rounded-xl border border-border/40 bg-card p-6"
        >
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Project Status</h3>
            <p className="text-sm text-muted-foreground">
              Distribution across statuses
            </p>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={projectStatus}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={(entry) => `${entry.name}: ${entry.value}`}
                >
                  {projectStatus.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--background))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Team Performance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="rounded-xl border border-border/40 bg-card p-6"
        >
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Team Performance</h3>
            <p className="text-sm text-muted-foreground">
              Completed vs pending tasks
            </p>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={teamPerformance}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--background))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                  }}
                />
                <Legend />
                <Bar dataKey="completed" fill="#22c55e" radius={[8, 8, 0, 0]} />
                <Bar dataKey="pending" fill="#f59e0b" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Revenue Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="rounded-xl border border-border/40 bg-card p-6"
        >
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Revenue Growth</h3>
            <p className="text-sm text-muted-foreground">
              Monthly revenue trend
            </p>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#a855f7" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#a855f7" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--background))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#a855f7"
                  strokeWidth={2}
                  fill="url(#colorRev)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </div>
  )
}