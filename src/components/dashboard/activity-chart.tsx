'use client'

import { motion } from 'framer-motion'
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts'
import { TrendingUp } from 'lucide-react'

// ============================================
// CHART DATA
// ============================================
const chartData = [
  { name: 'Mon', tasks: 24, completed: 18 },
  { name: 'Tue', tasks: 32, completed: 28 },
  { name: 'Wed', tasks: 28, completed: 22 },
  { name: 'Thu', tasks: 45, completed: 38 },
  { name: 'Fri', tasks: 38, completed: 32 },
  { name: 'Sat', tasks: 20, completed: 18 },
  { name: 'Sun', tasks: 15, completed: 14 },
]

// ============================================
// CUSTOM TOOLTIP
// ============================================
interface TooltipPayloadItem {
  value: number
  name: string
  color: string
}

interface CustomTooltipProps {
  active?: boolean
  payload?: TooltipPayloadItem[]
  label?: string
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-border/40 bg-background/95 p-3 shadow-lg backdrop-blur-sm">
        <p className="mb-2 text-sm font-medium">{label}</p>
        {payload.map((entry, index: number) => (
          <div key={index} className="flex items-center gap-2 text-xs">
            <div
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-muted-foreground">{entry.name}:</span>
            <span className="font-semibold">{entry.value}</span>
          </div>
        ))}
      </div>
    )
  }
  return null
}

// ============================================
// ACTIVITY CHART COMPONENT
// ============================================
export function ActivityChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="rounded-xl border border-border/40 bg-card p-6"
    >
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold">Weekly Activity</h3>
          <p className="text-sm text-muted-foreground">
            Tasks created vs completed
          </p>
        </div>
        <div className="flex items-center gap-1 rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-500">
          <TrendingUp className="h-3 w-3" />
          +12.5%
        </div>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorTasks" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorCompleted" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="hsl(var(--border))"
              opacity={0.3}
            />
            <XAxis
              dataKey="name"
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="tasks"
              stroke="#6366f1"
              strokeWidth={2}
              fill="url(#colorTasks)"
              name="Tasks Created"
            />
            <Area
              type="monotone"
              dataKey="completed"
              stroke="#22c55e"
              strokeWidth={2}
              fill="url(#colorCompleted)"
              name="Completed"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="mt-4 flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-indigo-500" />
          <span className="text-xs text-muted-foreground">Tasks Created</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-green-500" />
          <span className="text-xs text-muted-foreground">Completed</span>
        </div>
      </div>
    </motion.div>
  )
}